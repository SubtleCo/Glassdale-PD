// "id", "age", "eyeColor", "name", "workHistory", "phone", "address", "incarceration", "conviction", "arrestingOfficer", "known_associates"

export const Criminal = (criminal) => {
    const termStart = new Date(criminal.incarceration.start).toLocaleDateString('en-US');
    const termEnd = new Date(criminal.incarceration.end).toLocaleDateString('en-US');
    return `
    <section class="criminal">
        <h4 class="criminalName">${criminal.name}</h4>
        <p class="criminalAge">Age: ${criminal.age}</p>
        <p class="criminalTermStart">Term start: ${termStart}</p>
        <p class="criminalTermEnd">Term end: ${termEnd}</p>
        <button id="associates--${criminal.id}">Associate Alibis</button>
    </section>
    `
}

