export const Alibis = criminal => {
    return criminal.known_associates.map(associateObj => {
        return `
        <div class="alibisCard">
            <p class="alibiTitle">${associateObj.alibi}</p>
            <h6 class="alibiAssociate">${associateObj.name}</h6>
        </div>`
    }).join("")
}

// const buildAlibisHTML = criminal => {
//     return criminal.known_associates.map(associateObj => {
//         return `
//         <div class="alibisCard">
//             <p class="alibiTitle">${associateObj.alibi}</p>
//             <h6 class="alibiAssociate">${associateObj.name}</h6>
//         </div>`
//     }).join("")
// }