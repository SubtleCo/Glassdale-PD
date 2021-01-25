let convictions = [];

export const useConvictions = () => [...convictions]

export const getConvictions = () => {
    return fetch("https://criminals.glassdale.us/crimes")
        .then(res => res.json())
        .then(parsedConvictions => {
            convictions = parsedConvictions.map(conviction => conviction.name)
        })
}