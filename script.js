var resumeForm = document.getElementById("resume-form");
var display = document.getElementById("resume-display");
// handle form submission
resumeForm.addEventListener("submit", function (event) {
    event.preventDefault(); // prevent page reload
    // collect input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    // generate resume dynamically
    var resumeHTML = "\n        <h2><b>Editable Resume<b></h2>\n        <h3> Personal Information</h3>\n\n        <p><b>Name:</b> <span contenteditable= \"true\">".concat(name, "</span> </p>\n        <p><b>Email:</b>  <span contenteditable= \"true\">").concat(email, "</span> </p>\n        <p><b>Phone:</b>  <span contenteditable= \"true\">").concat(phone, "</span> </p>\n        <p><b>Education:</b>  <span contenteditable= \"true\">").concat(education, "</span></p>\n        <p><b>Experience:</b>  <span contenteditable= \"true\">").concat(experience, "</span></p>\n        <p><b>Skills:</b>  <span contenteditable= \"true\">").concat(skills, "</span></p>\n    ");
    // Display the generated resume
    if (display) {
        display.innerHTML = resumeHTML;
    }
});
