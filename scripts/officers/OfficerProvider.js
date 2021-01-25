let officers = [];

export const useOfficers = () => [...officers]

export const getOfficers = () => {
    return fetch("https://criminals.glassdale.us/officers")
            .then(res => res.json())
            .then(parsedOfficers => {
                officers = parsedOfficers.map(officer => officer.name)
            })
}

