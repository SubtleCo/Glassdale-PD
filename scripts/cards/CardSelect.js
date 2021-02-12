const targetElement = document.querySelector('.cardSelectionButtons')
const eventHub = document.querySelector('.container')

export const CardSelect = () => {
    targetElement.innerHTML = `
    <button id="criminalsButton">Display All Criminals</button>
    <button id="witnessesButton">Display All Witnesses</button>
    <button id="facilitiesButton">Display All Facilities</button>`
}

eventHub.addEventListener("click", e => {
    if (e.target.id === "criminalsButton") {
        const cE = new CustomEvent("criminalsSelected")
        eventHub.dispatchEvent(cE)
    }
    if (e.target.id === "witnessesButton") {
        const cE = new CustomEvent("witnessesSelected")
        eventHub.dispatchEvent(cE)
    }
    if (e.target.id === "facilitiesButton") {
        const cE = new CustomEvent("facilitiesSelected")
        eventHub.dispatchEvent(cE)
    }
})