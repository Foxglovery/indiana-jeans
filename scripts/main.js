import { ownJeanChoices } from "./OwnsJeans.js"
import { saveSubmission } from "./SaveSubmission.js";
import { SubmissionList } from "./Submissions.js";
import { locationTypeChoices } from "./UrbanDweller.js";

const containerEl = document.querySelector("#container")

const render = async () => {
    const jeanOwnership = ownJeanChoices();
    const locationChoice = await locationTypeChoices();
    const buttonHTML = saveSubmission()
    const submissionListHTML = await SubmissionList()
    containerEl.innerHTML= `
        ${jeanOwnership}
        ${locationChoice}
        ${buttonHTML}
        ${submissionListHTML}` 
}
document.addEventListener("newSubmissionCreated", render)

render()
//run: json-server database.json -p 8088
//left off needing to add transient state listener for locations too.
