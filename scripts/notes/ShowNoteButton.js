const targetElement = document.querySelector(".noteListButton")
const eventHub = document.querySelector('.container')

eventHub.addEventListener('click', e => {
    if (e.target.id === "showNotes") {
        const cE = new CustomEvent("showNotesClicked")
        eventHub.dispatchEvent(cE)
    }
})

export const ShowNoteButton = () => {
     targetElement.innerHTML = "<button id='showNotes'>Show Notes</button>"
}