export const NoteHTMLConverter = (noteObject) => {
    return `
        <section class="note" id="note--${noteObject.id}">
            <h4 class="note__suspect">Suspect: ${ noteObject.suspect }</h4>
            <div class="note__timestamp">Timestamp: ${ new Date(noteObject.date).toLocaleDateString('en-us') }</div>
            <p class="note__text">${ noteObject.text }</p>
        </section>
    `
}