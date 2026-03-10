document.addEventListener('DOMContentLoaded', function() {
    // Resume select change event
    document.getElementById('resume-select').addEventListener('change', function() {
        const uploadResume = document.getElementById('upload-resume');
        if (this.value === 'I have a resume') {
            uploadResume.style.display = 'block';
            uploadResume.required = true;
        } else {
            uploadResume.style.display = 'none';
            uploadResume.required = false;
        }
    });

    // Next resume button click event
    document.getElementById('next-resume-btn').addEventListener('click', function() {
        const resumeSelect = document.getElementById('resume-select');
        const uploadResume = document.getElementById('upload-resume');
        if (resumeSelect.value === '') {
            alert('Please select an option');
        } else if (resumeSelect.value === 'I have a resume' && uploadResume.files.length === 0) {
            alert('Please upload your resume');
        } else {
            window.location.href = 'personal-details.html';
        }
    });

});

document.addEventListener('DOMContentLoaded', () => {
    const addExperienceButton = document.getElementById('add-experience');
    if (addExperienceButton) {
        addExperienceButton.addEventListener('click', () => {
            const experienceContainer = document.getElementById('experience-container');
            const experienceEntry = experienceContainer.querySelector('.experience-entry').cloneNode(true);
            experienceEntry.querySelectorAll('input').forEach(input => input.value = '');
            experienceContainer.appendChild(experienceEntry);
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Add experience button click event
    document.getElementById('add-experience').addEventListener('click', () => {
        const experienceContainer = document.getElementById('experience-container');
        const experienceEntry = experienceContainer.querySelector('.experience-entry').cloneNode(true);
        experienceEntry.querySelectorAll('input').forEach(input => input.value = '');
        experienceContainer.appendChild(experienceEntry);
    });

    document.addEventListener('DOMContentLoaded', () => {
    // Add experience button click event
    const addExperienceButton = document.getElementById('add-experience');
    if (addExperienceButton) {
        addExperienceButton.addEventListener('click', () => {
            const experienceContainer = document.getElementById('experience-container');
            const experienceEntry = experienceContainer.querySelector('.experience-entry').cloneNode(true);
            experienceEntry.querySelectorAll('input').forEach(input => input.value = '');
            experienceContainer.appendChild(experienceEntry);
        });
    }

    // Preview button click event
    const previewButton = document.getElementById('preview-button');
    if (previewButton) {
        previewButton.addEventListener('click', () => {
            const personalDetails = JSON.parse(localStorage.getItem('personalDetails'));
            const education = JSON.parse(localStorage.getItem('education'));
            const employmentStatus = localStorage.getItem('employmentStatus');
            const skills = JSON.parse(localStorage.getItem('skills'));
            const experience = JSON.parse(localStorage.getItem('experience'));

            const previewHtml = `
                <h1>Personal Details</h1>
                <p>First Name: ${personalDetails.firstName}</p>
                <p>Last Name: ${personalDetails.lastName}</p>
                <p>Gender: ${personalDetails.gender}</p>
                <p>Email: ${personalDetails.email}</p>
                <p>Phone Number: ${personalDetails.phoneNumber}</p>
                <p>Country: ${personalDetails.country}</p>

                <h1>Education</h1>
                <p>Degree: ${education.degree}</p>
                <p>School/College Name: ${education.schoolCollegeName}</p>
                <p>University: ${education.university}</p>
                <p>Year of Passing: ${education.yearOfPassing}</p>

                <h1>Employment Status</h1>
                <p>Employment Status: ${employmentStatus}</p>

                <h1>Skills</h1>
                <p>Skills: ${skills.join(', ')}</p>

                <h1>Experience</h1>
                ${experience.map((exp) => `
                    <p>Organization: ${exp.organization}</p>
                    <p>Role: ${exp.role}</p>
                    <p>Start Date: ${exp.startDate}</p>
                    <p>End Date: ${exp.endDate}</p>
                    <p>Skills: ${exp.skills}</p>
                `).join('')}
            `;
            const previewWindow = window.open('', '_blank');
            previewWindow.document.write(previewHtml);
            previewWindow.document.close();
        });
    }
});

document.getElementById('next-button').addEventListener('click', () => {
    window.location.href = 'personal-details.html';
});


personal-details.html

document.getElementById('next-button').addEventListener('click', () => {
    const firstName = document.querySelector('input[name="firstName"]').value;
    const lastName = document.querySelector('input[name="lastName"]').value;
    const gender = document.querySelector('select[name="gender"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const phoneNumber = document.querySelector('input[name="phoneNumber"]').value;
    const country = document.querySelector('select[name="country"]').value;
    const personalDetails = { firstName, lastName, gender, email, phoneNumber, country };
    localStorage.setItem('personalDetails', JSON.stringify(personalDetails));
    window.location.href = 'education.html';
});


education.html

document.getElementById('next-button').addEventListener('click', () => {
    const education = [];
    const educationEntries = document.querySelectorAll('.education-entry');
    educationEntries.forEach((entry) => {
        const degree = entry.querySelector('select[name="degree[]"]').value;
        const schoolCollegeName = entry.querySelector('input[name="schoolCollegeName[]"]').value;
        const university = entry.querySelector('input[name="university[]"]').value;
        const yearOfPassing = entry.querySelector('input[name="yearOfPassing[]"]').value;
        education.push({ degree, schoolCollegeName, university, yearOfPassing });
    });
    localStorage.setItem('education', JSON.stringify(education));
    window.location.href = 'employment-status.html';
});


employment-status.html

document.getElementById('next-button').addEventListener('click', () => {
    const employmentStatus = document.querySelector('select[name="employmentStatus"]').value;
    localStorage.setItem('employmentStatus', employmentStatus);
    window.location.href = 'skills.html';
});


skills.html

document.getElementById('next-button').addEventListener('click', () => {
    const skills = [];
    const skillOptions = document.querySelectorAll('select[name="skills[]"] option');
    skillOptions.forEach((option) => {
        if (option.selected) {
            skills.push(option.value);
        }
    });
    localStorage.setItem('skills', JSON.stringify(skills));
    window.location.href = 'experience.html';
});



document.getElementById('preview-button').addEventListener('click', () => {
    const experience = [];
    const experienceEntries = document.querySelectorAll('.experience-entry');
    experienceEntries.forEach((entry) => {
        const organization = entry.querySelector('input[name="organization[]"]').value;
        const role = entry.querySelector('input[name="role[]"]').value;
        const startDate = entry.querySelector('input[name="start-date[]"]').value;
        const endDate = entry.querySelector('input[name="end-date[]"]').value;
        const skills = entry.querySelector('input[name="skills[]"]').value;
        experience.push({ organization, role, startDate, endDate, skills });
    });
    localStorage.setItem('experience', JSON.stringify(experience));
    // Preview code here
});
});



document.addEventListener('DOMContentLoaded', () => {
    const previewButton = document.getElementById('preview-button');
    if (previewButton) {
        previewButton.addEventListener('click', (event) => {
            event.preventDefault();

            const experience = [];
            const experienceEntries = document.querySelectorAll('.experience-entry');
            experienceEntries.forEach((entry) => {
                const organization = entry.querySelector('input[name="organization[]"]').value;
                const role = entry.querySelector('input[name="role[]"]').value;
                const startDate = entry.querySelector('input[name="start-date[]"]').value;
                const endDate = entry.querySelector('input[name="end-date[]"]').value;
                const skills = entry.querySelector('input[name="skills[]"]').value;
                experience.push({ organization, role, startDate, endDate, skills });
            });
            localStorage.setItem('experience', JSON.stringify(experience));

            const personalDetails = JSON.parse(localStorage.getItem('personalDetails'));
            const education = JSON.parse(localStorage.getItem('education'));
            const employmentStatus = localStorage.getItem('employmentStatus');
            const skills = JSON.parse(localStorage.getItem('skills'));

            const previewHtml = `
                <h1>Personal Details</h1>
                <p>First Name: ${personalDetails.firstName}</p>
                <p>Last Name: ${personalDetails.lastName}</p>
                <p>Gender: ${personalDetails.gender}</p>
                <p>Email: ${personalDetails.email}</p>
                <p>Phone Number: ${personalDetails.phoneNumber}</p>
                <p>Country: ${personalDetails.country}</p>

                <h1>Education</h1>
                ${education.map((edu) => `
                    <p>Degree: ${edu.degree}</p>
                    <p>School/College Name: ${edu.schoolCollegeName}</p>
                    <p>University: ${edu.university}</p>
                    <p>Year of Passing: ${edu.yearOfPassing}</p>
                `).join('')}

                <h1>Employment Status</h1>
                <p>Employment Status: ${employmentStatus}</p>

                <h1>Skills</h1>
                <p>Skills: ${skills.join(', ')}</p>

                <h1>Experience</h1>
                ${experience.map((exp) => `
                    <p>Organization: ${exp.organization}</p>
                    <p>Role: ${exp.role}</p>
                    <p>Start Date: ${exp.startDate}</p>
                    <p>End Date: ${exp.endDate}</p>
                    <p>Skills: ${exp.skills}</p>
                `).join('')}
            `;
            const previewWindow = window.open('', '_blank');
            previewWindow.document.write(previewHtml);
            previewWindow.document.close();
        });
    }
});

