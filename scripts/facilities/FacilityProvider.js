let facilities = []

export const useFacilities = () => [...facilities]

export const getFacilities = () => {
    return fetch("https://criminals.glassdale.us/facilities")
        .then(res => res.json())
        .then(parsedRes => {
            facilities = parsedRes
        })
}