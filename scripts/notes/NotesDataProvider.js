const eventHub = document.querySelector(".container")

let notes = [];

const dispatchStateChangeEvent = () => {
    const noteStateChangedEvent = new CustomEvent("noteStateChanged")
    eventHub.dispatchEvent(noteStateChangedEvent)
}

eventHub.addEventListener("click", e => {
    if (e.target.id === "saveNote") {
        e.preventDefault()
        const newNote = {
            date: document.querySelector("#noteForm--date").value,
            suspect: document.querySelector("#noteForm--suspect").value,
            text: document.querySelector("#noteForm--text").value,
        }
        saveNote(newNote)
    }
})

export const useNotes = () => [...notes]

export const getNotes = () => {
    return fetch("http://localhost:8088/notes")
            .then(res => res.json())
            .then(parsedNotes => {
                notes = parsedNotes
            })
}

export const saveNote = note => {
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
}
