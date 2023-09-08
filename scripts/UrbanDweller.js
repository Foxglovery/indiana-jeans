import { setSocioLocationId } from "./TransientState.js"

export const locationTypeChoices = async () => {
    const response = await fetch ("http://localhost:8088/socioLocations")
    const locations = await response.json()
    
    document.addEventListener("change", handleLocationChange)

    let locationChoicesHtml = "<h2>Where You Be Stayin' At?</h2>"
    for (const location of locations) {
        locationChoicesHtml += `<input type='radio' name='location' value='${location.id}' /> ${location.label}`
    }

    return locationChoicesHtml
}

const handleLocationChange = (changeEvent) => {
    if (changeEvent.target.name === "location") {
        const convertedToInt = parseInt(changeEvent.target.value)
        setSocioLocationId(convertedToInt)
    }
}


