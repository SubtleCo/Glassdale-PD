import { NoteHTMLConverter } from "./Note.js"
import { getNotes, useNotes } from "./NotesDataProvider.js"

const targetElement = document.querySelector('.noteList')
const eventHub = document.querySelector('.container')

eventHub.addEventListener("showNotesClicked", e => {
    NoteList()
})

eventHub.addEventListener("noteStateChanged", e => {
    if (document.querySelector(".note")) NoteList()
})

const render = noteArray => {
    const allNotesConvertedToStrings = noteArray.map(note => NoteHTMLConverter(note)).join("")
    targetElement.innerHTML = allNotesConvertedToStrings
}

export const NoteList = () => {
    getNotes()
        .then( () => {
            const allNotes = useNotes()
            render(allNotes)
        })
}
