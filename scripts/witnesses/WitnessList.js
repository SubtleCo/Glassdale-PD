//imports

import { Witness } from "./Witness.js"
import { getWitnesses, useWitnesses } from "./WitnessDataProvider.js"


//target element, event hub
const targetElement = document.querySelector('.peopleContainer')
const eventHub = document.querySelector('.container')
const peopleTitle = document.querySelector('.peopleTitle')

//eventListener for button
eventHub.addEventListener("witnessesSelected", e => {
    WitnessList()
})

//export function
export const WitnessList = () => {
    getWitnesses()
        .then( () => {
            const witnesses = useWitnesses()
            render(witnesses)
        })
}
//render function
const render = witnesses => {
    peopleTitle.innerHTML = "Witnesses"
    targetElement.innerHTML = witnesses.map(witness => Witness(witness)).join("")
}
