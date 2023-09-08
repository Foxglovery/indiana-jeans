import { saveSurverySubmission } from "./TransientState.js"


     const handleSurveySubmissionClick = (clickEvent) => {
        if (clickEvent.target.id === "submit-btn") {
            
            saveSurverySubmission()//runs save function
        }
    }

export const saveSubmission = () => {
    
    document.addEventListener("click", handleSurveySubmissionClick) 
    
    return `<div><button id="submit-btn">Save Submission</button></div>`
}

