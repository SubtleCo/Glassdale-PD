const eventHub = document.querySelector(".container")

let notes = [];

const dispatchStateChangeEvent = () => {
    const noteStateChangedEvent = new CustomEvent("noteStateChanged")
    eventHub.dispatchEvent(noteStateChangedEvent)
}

export const useNotes = () => [...notes]

export const getNotes = () => {
    return fetch("http://localhost:8088/notes")
            .then(res => res.json())
            .then(parsedNotes => {
                notes = parsedNotes
            })
}

export const getNote = id => {
    const allNotes = useNotes()
    const foundNote = allNotes.find(note => note.id === id)
    return foundNote
}

export const deleteNote = noteId => {
    return fetch(`http://localhost:8088/notes/${noteId}`, {
        method: "DELETE"
    })
        .then(getNotes)
}

export const saveNote = note => {
    if (note.id === "") {
        return fetch('http://localhost:8088/notes', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(note)
        })
        .then(getNotes)
        .then(dispatchStateChangeEvent)
        .then( () => {
            document.querySelector("#noteForm").reset()
        })
    } else {
        return fetch(`http://localhost:8088/notes/${note.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(note)
        })
        .then(getNotes)
        .then(dispatchStateChangeEvent)
        .then( () => {
            document.querySelector("#noteForm").reset()
        })
    }
}
