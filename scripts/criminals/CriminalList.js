import { useCriminals, getCriminals } from './CriminalDataProvider.js'
import { Criminal } from './Criminal.js'

export const CriminalList = () => {
    getCriminals().then( () => {
        const criminalArray = useCriminals()
        const targetElement = document.querySelector('.criminalsContainer')

        let criminalHTML = "";
        for (const criminal of criminalArray) {
            criminalHTML += Criminal(criminal);
        }

        targetElement.innerHTML += criminalHTML;
    })
    
}
