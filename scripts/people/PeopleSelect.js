const targetElement = document.querySelector('.peopleSelectionButtons')
const eventHub = document.querySelector('.container')

export const PeopleSelect = () => {
    targetElement.innerHTML = `
    <button id="criminalsButton">Display All Criminals</button>
    <button id="witnessesButton">Display All Witnesses</button>`
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
})