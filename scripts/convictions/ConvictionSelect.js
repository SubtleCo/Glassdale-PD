import { getConvictions, useConvictions } from './ConvictionProvider.js';

const eventHub = document.querySelector(".container")

eventHub.addEventListener("change", e => {
    if (e.target.id === "crimeSelect") {
        const cE = new CustomEvent("crimeChosen", {
            detail: {
                crimeThatWasChosen: e.target.value
            }
        })
        eventHub.dispatchEvent(cE)
    }
})

export const ConvictionSelect = () => {
    getConvictions()
    .then( () => {
        const convictions = useConvictions()
        render(convictions)
    })
}

const render = convictionsCollection => {
    const contentTarget = document.querySelector(".filters__crime");
    contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Select a crime...</option>
            ${
                convictionsCollection.map(conviction => `<option value=${conviction.id} label=${conviction.name}>${conviction.name}</option>`).join("")
            }
        </select>`
}