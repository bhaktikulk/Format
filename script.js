// Profile Image Upload Logic
document.getElementById("image-upload").addEventListener("change", function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function () {
      document.getElementById("profile-pic").src = reader.result;
    };
    if (file) {
      reader.readAsDataURL(file);
      document.getElementById("image-upload").style.display = "none";
    }
  });
  
// Add skill functionality
document.getElementById("add-skill").addEventListener("click", function () {
    const skillsList = document.getElementById("skills-list");
    const newSkill = document.createElement("li");
    newSkill.contentEditable = "true";
    newSkill.textContent = "Enter your skill here";
    skillsList.appendChild(newSkill);
});
  
// Add project functionality
document.getElementById("add-project").addEventListener("click", function () {
    const projectsList = document.getElementById("projects-list");
    const newProject = document.createElement("p");
    newProject.contentEditable = "true";
    newProject.textContent = "Enter your project details here";
    projectsList.appendChild(newProject);
});
  
// Add education functionality
document.getElementById("add-education").addEventListener("click", function () {
    const educationList = document.getElementById("education-list");
  
    const newEducation = document.createElement("div");
    newEducation.classList.add("education-entry");
  
    newEducation.innerHTML = `
      <p contenteditable="true">Institution Name</p>
      <p contenteditable="true">Degree</p>
      <p contenteditable="true">Passing Year</p>
      <p contenteditable="true">CGPA/GPA</p>
    `;
  
    educationList.appendChild(newEducation);
});
  
// Add work experience functionality
document.getElementById("add-experience").addEventListener("click", function () {
    const experienceList = document.getElementById("experience-list");
  
    const newExperience = document.createElement("div");
    newExperience.classList.add("experience-entry");
  
    newExperience.innerHTML = `
      <p contenteditable="true">Job Title</p>
      <p contenteditable="true">Company Name</p>
      <p contenteditable="true">Start Date - End Date</p>
      <p contenteditable="true">Key Responsibilities</p>
    `;
  
    experienceList.appendChild(newExperience);
});
  
// Add certification functionality
document.getElementById("add-certification").addEventListener("click", function () {
    const certificationsList = document.getElementById("certifications-list");
  
    const newCertification = document.createElement("div");
    newCertification.classList.add("certification-entry");
  
    newCertification.innerHTML = `
      <p contenteditable="true">Certification Name</p>
      <p contenteditable="true">Issuing Organization</p>
      <p contenteditable="true">Issue Date</p>
    `;
  
    certificationsList.appendChild(newCertification);
});
  
// Generate Print Preview and Print
document.getElementById("generate-print").addEventListener("click", function () {
    // Remove unnecessary UI elements like buttons before printing
    document.querySelectorAll("button").forEach((button) => {
      button.style.display = "none";
    });
  
    // Trigger print dialog
    window.print();
  
    // Restore buttons after printing
    document.querySelectorAll("button").forEach((button) => {
      button.style.display = "block";
    });
});
