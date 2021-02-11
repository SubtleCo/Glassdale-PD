import { getCriminals, useCriminals } from "../criminals/CriminalDataProvider.js"
import { Note } from "./Note.js"
import { getNotes, useNotes } from "./NotesDataProvider.js"

const targetElement = document.querySelector('.noteList')
const eventHub = document.querySelector('.container')

eventHub.addEventListener("showNotesClicked", e => {
    NoteList()
})

eventHub.addEventListener("noteStateChanged", e => {
    if (document.querySelector(".note")) NoteList()
})

const render = (notes, criminals) => {
    const allNotesConvertedToStrings = notes.map(note => {
        const criminal = criminals.find(criminal => criminal.id === parseInt(note.criminalID))
        return Note(note, criminal)
    }).join("")
    targetElement.innerHTML = allNotesConvertedToStrings
}

export const NoteList = () => {
    getNotes()
        .then(getCriminals)
        .then( () => {
            const notes = useNotes()
            const criminals = useCriminals()
            render(notes, criminals)
        })
}
