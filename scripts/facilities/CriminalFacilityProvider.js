let criminalFacilities = []

export const useCriminalFacilities = () => [...criminalFacilities]

export const getCriminalFacilities = () => {
    return fetch("https://criminals.glassdale.us/criminalFacilities")
        .then(res => res.json())
        .then(parsedRes => {
            criminalFacilities = parsedRes
        })
}