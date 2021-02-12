import { useCriminals, getCriminals } from './CriminalDataProvider.js'
import { Criminal } from './Criminal.js'
import { useConvictions } from "../convictions/ConvictionProvider.js"
import { getCriminalFacilities, useCriminalFacilities } from '../facilities/CriminalFacilityProvider.js'
import { getFacilities, useFacilities } from '../facilities/FacilityProvider.js'

const targetElement = document.querySelector(".cardContainer")
const peopleTitle = document.querySelector('.cardTitle')
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

eventHub.addEventListener("criminalsSelected", e => {
    CriminalList()
})

export const CriminalList = () => {
    getCriminals()
    .then(getCriminalFacilities)
    .then(getFacilities)
        .then( () => {
            const appStateCriminals = useCriminals()
            const facilities = useFacilities()
            const criminalFacilities = useCriminalFacilities()
            render(appStateCriminals, facilities, criminalFacilities)
        })
    
}

const render = (criminals, allFacilities, criminalFacilities) => {
    peopleTitle.innerHTML = "Criminals"
    targetElement.innerHTML = criminals.map(criminal => {
        const facilityRelationships = criminalFacilities.filter(relationship => relationship.criminalId === criminal.id)
        const facilities = facilityRelationships.map(relationship => {
            const matchingFacility = allFacilities.find(facility => facility.id === relationship.facilityId)
            return matchingFacility
        })
        return Criminal(criminal, facilities)
    }).join("")
}