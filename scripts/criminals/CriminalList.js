import { useCriminals, getCriminals } from './CriminalDataProvider.js'
import { Criminal } from './Criminal.js'
import { useConvictions } from "../convictions/ConvictionProvider.js"

const targetElement = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("crimeChosen", e => {
    const crimeID = e.detail.crimeThatWasChosen
    if (crimeID !== "0") {
        const appStateCriminals = useCriminals()
        const convictions = useConvictions();
        const conviction = convictions.find(item => item.id === parseInt(crimeID))
        const matchingCriminals = appStateCriminals.filter(criminal => {
            return criminal.conviction === conviction.name
        })
        render(matchingCriminals)
    }
})

eventHub.addEventListener("officerChosen", e => {
    const officer = e.detail.officerThatWasChosen
    if (officer !== "0") {
        const appStateCriminals = useCriminals()
        const matchingCriminals = appStateCriminals.filter(criminal => {
            return criminal.arrestingOfficer === officer
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