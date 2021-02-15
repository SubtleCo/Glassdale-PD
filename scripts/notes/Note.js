const eventHub = document.querySelector('.container')

export const Note = (note, criminal) => {
    return `
        <section class="note" id="note--${note.id}">
            <h4 class="note__suspect">Suspect: ${ criminal.name }</h4>
            <div class="note__timestamp">Timestamp: ${ new Date(note.date).toLocaleDateString('en-us') }</div>
            <p class="note__text">${ note.text }</p>
            <button id="editNote--${note.id}">Edit</button>
            <button id="deleteNote--${note.id}">Delete</button>
        </section>
    `
}

eventHub.addEventListener("click", e => {
    if (e.target.id.includes("editNote--")) {
        const [x, noteId] = e.target.id.split("--")
        const cE = new CustomEvent("editRequested", {
            detail: {
                id: parseInt(noteId)
            }
        })
        eventHub.dispatchEvent(cE)
    }
})

