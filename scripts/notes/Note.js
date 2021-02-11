export const Note = (note, criminal) => {
    return `
        <section class="note" id="note--${note.id}">
            <h4 class="note__suspect">Suspect: ${ criminal.name }</h4>
            <div class="note__timestamp">Timestamp: ${ new Date(note.date).toLocaleDateString('en-us') }</div>
            <p class="note__text">${ note.text }</p>
            <button id="deleteNote--${note.id}">Delete</button>
        </section>
    `
}