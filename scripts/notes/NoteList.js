import { getCriminals, useCriminals } from "../criminals/CriminalDataProvider.js"
import { Note } from "./Note.js"
import { deleteNote, getNotes, useNotes } from "./NotesDataProvider.js"

const targetElement = document.querySelector('.noteList')
const eventHub = document.querySelector('.container')

eventHub.addEventListener("showNotesClicked", e => {
    NoteList()
})

eventHub.addEventListener("noteStateChanged", e => {
    if (document.querySelector(".note")) NoteList()
})

eventHub.addEventListener("click", e => {
    if (e.target.id.startsWith("deleteNote--")){
        const [prefix, id] = e.target.id.split("--")
        deleteNote(id).then(
            () => {
                const updatedNotes = useNotes()
                const criminals = useCriminals()
                render(updatedNotes, criminals)
            }
        )
    }
})

const render = (notes, criminals) => {
    debugger
    const allNotesConvertedToStrings = notes.map(note => {
        const criminal = criminals.find(criminal => criminal.id === parseInt(note.criminalId))
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
