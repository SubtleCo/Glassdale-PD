const targetElement = document.querySelector(".noteFormContainer")


const render = () => {
    targetElement.innerHTML = `
    <form action="" id="noteForm">
        <label for="noteForm--date">Date</label>
        <input type="date" id="noteForm--date">
        <label for="noteForm--suspect">Suspect</label>
        <input type="text" id="noteForm--suspect" placeholder="Suspect name">
        <textarea name="noteForm-text" id="noteForm--text" cols="30" rows="10" placeholder="Observations"></textarea>
        <button id="saveNote">Save Note</button>
    </form>
    `
}

export const NoteForm = () => {
    render(); 
}