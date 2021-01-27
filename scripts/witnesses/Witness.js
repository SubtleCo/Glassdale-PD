// "id", "age", "eyeColor", "name", "workHistory", "phone", "address", "incarceration", "conviction", "arrestingOfficer", "known_associates"

export const Witness = (witness) => {
    return `
    <section class="witness">
        <h4 class="witness--name">${witness.name}</h4>
        <p class="witness--statements">${witness.statements}</p>
    </section>
    `
}
