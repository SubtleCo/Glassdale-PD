import { getOfficers, useOfficers } from './OfficerProvider.js'

const eventHub = document.querySelector(".container")

eventHub.addEventListener("change", e => {
    if (e.target.id === "officerSelect") {
        const cE = new CustomEvent("officerChosen", {
            detail: {
                officerThatWasChosen: e.target.value
            }
        })
        eventHub.dispatchEvent(cE)
    }
})

export const OfficerSelect = () => {
    getOfficers()
        .then( () => {
            const officers = useOfficers()
            render(officers)
        })
}

const render = officers => {
    const targetElement = document.querySelector('.filters__officer')
    targetElement.innerHTML = `
    <select class="dropdown" id="officerSelect">
        <option value="0">Select an arresting officer...</option>
        ${
            officers.map(officer => `<option>${officer}</option>}`).join("")
        }
    </select>`  
}