const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const noteStateChangedEvent = new CustomEvent("noteStateChanged")

    eventHub.dispatchEvent(noteStateChangedEvent)
}

const getNoted = () => {
    fetch('http://localhost:8088:notes')
        .then(res => res.json())
        .then(parsedNotes => {
            notess = parsedNotes
        })
}