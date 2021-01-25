import { useCriminals, getCriminals } from './CriminalDataProvider.js'
import { Criminal } from './Criminal.js'
import { useConvictions } from '../convictions/ConvictionProvider.js'

const targetElement = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("crimeChosen", e => {
    const crime = e.detail.crimeThatWasChosen
    if (crime !== "0") {
        const appStateCriminals = useCriminals()
        const matchingCriminals = appStateCriminals.filter(criminal => {
            return criminal.conviction === crime
        })
        render(matchingCriminals)
    }
})

export const CriminalList = () => {
    getCriminals()
        .then( () => {
            const appStateCriminals = useCriminals()
            render(appStateCriminals)
        })
    
}

const render = criminalCollection => {
    targetElement.innerHTML = criminalCollection.map(criminal => Criminal(criminal)).join("")
}