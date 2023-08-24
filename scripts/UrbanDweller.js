import { setSocioLocationId } from "./TransientState.js"

export const LocationTypeChoices = async () => {
    const response = await fetch ("http://localhost:8088/socioLocations")
    const locations = await response.json()

    document.addEventListener("change", handleSocioChoice)

    let choicesHTML = "<h2>Which type of area do you live in?</h2>"
    for (const location of locations) {
        choicesHTML += `<input type='radio' name='location' value='${location.id}' /> ${location.label}`
    }

    return choicesHTML
}

const handleSocioChoice = (changeEvent) => {
    if (changeEvent.target.name === "location") {
        const convertedToChoice = parseInt(changeEvent.target.value)
        setSocioLocationId(convertedToChoice)
    }
}