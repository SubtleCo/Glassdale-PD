import { getCriminals, useCriminals } from "../criminals/CriminalDataProvider.js";

const targetElement = document.querySelector(".noteFormContainer")

const render = (criminalSelectOptions) => {
    targetElement.innerHTML = `
    <form action="" id="noteForm">
    <label for="noteForm--date">Date</label>
    <input type="date" id="noteForm--date">
    <label for="noteForm--criminal">Suspect</label>
    <select id="noteForm--criminal" class="criminalSelect">
    ${criminalSelectOptions} 
    </select>
    <textarea name="noteForm-text" id="noteForm--text" cols="30" rows="10" placeholder="Observations"></textarea>
    <button id="saveNote">Save Note</button>
    </form>
    `
}

export const NoteForm = () => {
    getCriminals().then( () => {
        const criminals = useCriminals()
        const criminalSelectOptions = criminals.map(criminal => {
            return `
            <option value="${criminal.id}">${criminal.name}</option>`
        })
        render(criminalSelectOptions)
    }) 
}


