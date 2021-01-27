let witnesses = [];

export const useWitnesses = () => {
    return [...witnesses];
}

export const getWitnesses = () => {
    return fetch("https://criminals.glassdale.us/witnesses")
        .then(res => res.json())
        .then(
            parsedWitnesses => {
                witnesses = parsedWitnesses
            }
        )
}