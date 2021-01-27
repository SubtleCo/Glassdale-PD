import { Alibis } from "./Alibis.js";
import { getCriminals, useCriminals } from '../CriminalDataProvider.js'

const targetElement = document.querySelector('.alibisContainer')
const eventHub = document.querySelector('.container')

eventHub.addEventListener("click", e => {
    if (e.target.id.startsWith("associates--")) {
        const criminalID = e.target.id.split("--")[1]
        const cE = new CustomEvent("alibiButtonClicked", {
            detail: {
                criminalID: criminalID
            }
        })
        eventHub.dispatchEvent(cE)
    }
})

eventHub.addEventListener("alibiButtonClicked", e => {
    AlibisList(e.detail.criminalID)
})
const findCriminal = (id, criminalArray) => {
     return criminalArray.find( criminal => criminal.id === parseInt(id)) 
}

export const AlibisList = (criminalID) => {
    getCriminals().then( () => {
        const criminals = useCriminals()
        const foundCriminal = findCriminal(criminalID, criminals)
        render(foundCriminal)
    })
}

const render = (criminal) => {
    targetElement.innerHTML =`
        <div class="alibiDisplay">
            <h3>Alibis for ${criminal.name}</h3>
            <section class="alibisList">
            ${Alibis(criminal)}
            </section>
        </div>`
}
