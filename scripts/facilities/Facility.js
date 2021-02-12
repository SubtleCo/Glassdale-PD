export const Facility = (facility, criminals) => {
    const criminalsHTML = criminals.map(criminal => `<li class="facilityCriminal">${criminal.name}</li>`).join("")
    return `
    <section class="facility">
        <h4 class="facilityName">${facility.facilityName}</h4>
        <p class="facilityAge">Security Level: ${facility.securityLevel}</p>
        <p class="facilityAge">Capacity: ${facility.capacity}</p>
        <h5 class="facilityCriminalsHeader">Associated Criminals:</h5>
        <ul class="facilityCriminalList">
            ${criminalsHTML}
        </ul> 
    </section>
    `
}