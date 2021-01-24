import { getConvictions, useConvictions } from './ConvictionProvider.js';

const contentTarget = document.querySelector(".filters__crime");

export const ConvictionSelect = () => {
    getConvictions()
    .then( () => {
        const convictions = useConvictions()
        render(convictions)
    })
}

const render = convictionsCollection => {
    contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Select a crime...</option>
            ${
                convictionsCollection.map(conviction => `<option>${conviction}</option>}`).join("")
            }`
}