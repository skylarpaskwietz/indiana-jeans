export const SubmissionList = async () => {
    // Get the submissions from your API
    const response = await fetch("http://localhost:8088/submissions")
    const submissions = await response.json()

    // Iterate the submissions and create some <section> representations

    let submissionHTML =""
    for (const submisson of submissions) {
        submissionHTML += `<section class="submission">
        <div>Owns Jeans? ${submisson.ownsBlueJeans}</div>
        <div>Area type foreign key? ${submisson.socioLocationId}</div>
        </section>`
    }
    // Return the HTML string
    return submissionHTML

}