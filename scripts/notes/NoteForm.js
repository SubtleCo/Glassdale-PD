import { getCriminals, useCriminals } from "../criminals/CriminalDataProvider.js";
import { getNote, saveNote } from "./NotesDataProvider.js";

const targetElement = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector('.container')

const render = (criminalSelectOptions) => {
    targetElement.innerHTML = `
    <form action="" id="noteForm">
        <input type="hidden" name="noteId" id="noteForm--id">
        <label for="noteForm--date">Date</label>
        <input type="date" id="noteForm--date">
        <label for="noteForm--criminal">Suspect</label>
        <select id="noteForm--criminal" class="criminalSelect">
        ${criminalSelectOptions} 
        </select>
        <textarea name="noteForm-text" id="noteForm--text" cols="30" rows="10" placeholder="Observations"></textarea>
        <button id="saveNote">Save Note</button>
    </form>
    `
}

export const NoteForm = () => {
    getCriminals().then( () => {
        const criminals = useCriminals()
        const criminalSelectOptions = criminals.map(criminal => {
            return `
            <option value="${criminal.id}">${criminal.name}</option>`
        })
        render(criminalSelectOptions)
    }) 
}

eventHub.addEventListener("click", e => {
    if (e.target.id === "saveNote") {
        e.preventDefault()
        const newNote = {
            date: document.querySelector("#noteForm--date").value,
            criminalId: parseInt(document.querySelector("#noteForm--criminal").value),
            text: document.querySelector("#noteForm--text").value,
            id: document.querySelector("#noteForm--id").value
        }
        saveNote(newNote)
    }
})

eventHub.addEventListener("editRequested", e => {
    editNote(e.detail.id)
})

const editNote = id => {
    const note = getNote(id)
    document.querySelector("#noteForm--date").value = note.date
    document.querySelector("#noteForm--criminal").value = note.criminalId
    document.querySelector("#noteForm--text").value = note.text
    document.querySelector("#noteForm--id").value = note.id
}