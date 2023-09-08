export const SubmissionList = async () => {
    // Get the submissions from your API
    const response = await fetch("http://localhost:8088/submissions")
    const submissions = await response.json()
    let submissionHTML = ""
    // Iterate the submissions and create some <section> representations
    for (const submission of submissions) {
        submissionHTML += `
        <section class="submissions">
             <div>Owns Jeans: ${submission.ownsBlueJeans}</div>
             <div>Area type fk: ${submission.socioLocationId}</div>
        </section>`
    }

    // Return the HTML string
    return submissionHTML
}


