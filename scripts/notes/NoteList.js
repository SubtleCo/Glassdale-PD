import { NoteHTMLConverter } from "./Note.js"
import { getNotes } from "./NotesDataProvider.js"


const targetElement = document.querySelector('.noteList')
const eventHub = document.querySelector('.container')

eventHub.addEventListener("showNotesClicked", e => {
    NoteList()
})

const render = noteArray => {
    const allNotesConvertedToStrings = noteArray.map(note => NoteHTMLConverter(note)).join("")
    targetElement.innerHTML = allNotesConvertedToStrings
}

export const noteList = () => {
    getNotes()
        .then( () => {
            const allNotes = useNotes()
            render(allNotes)
        })
}
