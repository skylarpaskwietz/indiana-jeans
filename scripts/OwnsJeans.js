/* Provide UI controls for survey takers to choose 'yes' or 'no' for ownership of blue jeans

Strategy:
    1. A component function that produces HTML for two radio buttons for 'Yes' and No'
*/

import { setOwnsBlueJeans } from "./TransientState.js"


export const OwnsJeansChoices = () => {

    document.addEventListener("change", handleOwnershipChange)

    let html = "<h2>Do you own a pair of blue jeans?</h2>"
    html += "<input type='radio' name='ownsJeans' value='true'/> Yes"
    html += "<input type='radio' name='ownsJeans' value='false'/> No"
 
    return html
}

const handleOwnershipChange = (changeEvent) => {
    if (changeEvent.target.name === "ownsJeans") {
        const convertedToBoolean = JSON.parse(changeEvent.target.value)
        setOwnsBlueJeans(convertedToBoolean)
    }
}