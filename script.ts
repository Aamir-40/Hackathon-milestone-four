const resumeForm = document.getElementById("resume-form") as HTMLFormElement;
const display = document.getElementById("resume-display") as HTMLDivElement;

// handle form submission
resumeForm.addEventListener("submit", (event) => {
    event.preventDefault(); // prevent page reload

    // collect input values
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLTextAreaElement).value;
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;

    // generate resume dynamically
    const resumeHTML = `
        <h2><b>Editable Resume<b></h2>
        <h3> Personal Information</h3>

        <p><b>Name:</b> <span contenteditable= "true">${name}</span> </p>
        <p><b>Email:</b>  <span contenteditable= "true">${email}</span> </p>
        <p><b>Phone:</b>  <span contenteditable= "true">${phone}</span> </p>
        <p><b>Education:</b>  <span contenteditable= "true">${education}</span></p>
        <p><b>Experience:</b>  <span contenteditable= "true">${experience}</span></p>
        <p><b>Skills:</b>  <span contenteditable= "true">${skills}</span></p>
    `;

    // Display the generated resume
    if (display) {
        display.innerHTML = resumeHTML;
    }
});