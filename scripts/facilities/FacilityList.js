import { getCriminals, useCriminals } from '../criminals/CriminalDataProvider.js'
import { getFacilities, useFacilities } from '../facilities/FacilityProvider.js'
import { getCriminalFacilities, useCriminalFacilities } from './CriminalFacilityProvider.js'
import { Facility } from './Facility.js'

const targetElement = document.querySelector(".cardContainer")
const cardTitle = document.querySelector('.cardTitle')
const eventHub = document.querySelector(".container")

eventHub.addEventListener("facilitiesSelected", e => {
    FacilityList()
})

const FacilityList = () => {
    getFacilities()
    .then(getCriminalFacilities)
    .then(getCriminals)
    .then( () => {
        const allFacilities = useFacilities()
        const allCriminals = useCriminals()
        const allCriminalFacilities = useCriminalFacilities()
        render(allFacilities, allCriminals, allCriminalFacilities)
    })
}

const render = (facilities, criminals, relationships) => {
    cardTitle.innerHTML = "Facilities"
    const facilitiesHTML = facilities.map(facility => {
        // grab relevent [relationships] for each facility
        const matchedCriminals = relationships.filter(relationship => relationship.facilityId === facility.id)
        // convert [relationships] to [criminals]
        const criminalArray = matchedCriminals.map(matchedCriminal => {
            const foundCriminal = criminals.find(criminal => criminal.id === matchedCriminal.criminalId)
            return foundCriminal
        })
        return Facility(facility, criminalArray)
    }).join("")
    targetElement.innerHTML = facilitiesHTML
}