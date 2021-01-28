"use strict";

// Variables for displaying information to the page
let adminstudiesEl = document.getElementById("adminstudier");
let adminexperiencesEl = document.getElementById("adminarbetslivserfarenhet");
let adminwebsitesEl = document.getElementById("adminwebbplatser");

// Variables for adding information to the database
let addstudybutton = document.getElementById("addStudy");
let utbildningsplatsInput = document.getElementById("utbildningsplats");
let utbildningsnamnInput = document.getElementById("utbildningsnamn");
let utbildningstartdatumInput = document.getElementById("utbildningstartdatum");
let utbildningslutdatumInput = document.getElementById("utbildningslutdatum");

let addexperiencebutton = document.getElementById("addExperience");
let arbetsplatsInput = document.getElementById("arbetsplats");
let arbetstitelInput = document.getElementById("arbetstitel");
let arbetsstartdatumInput = document.getElementById("arbetsstartdatum");
let arbetsslutdatumInput = document.getElementById("arbetsslutdatum");

let addwebsitebutton = document.getElementById("addWebsite");
let webbtitelInput = document.getElementById("webbtitel");
let urlInput = document.getElementById("url");
let beskrivningInput = document.getElementById("beskrivning");


// Variables for updating information to the database
let updatestudybutton = document.getElementById("updateStudy");
let utbildningsplatsUpdate = document.getElementById("utbildningsplatsupdate");
let utbildningsnamnUpdate = document.getElementById("utbildningsnamnupdate");
let utbildningstartdatumUpdate = document.getElementById("utbildningstartdatumupdate");
let utbildningslutdatumUpdate = document.getElementById("utbildningslutdatumupdate");

let updateexperiencebutton = document.getElementById("updateExperience");
let arbetsplatsUpdate = document.getElementById("arbetsplatsupdate");
let arbetstitelUpdate = document.getElementById("arbetstitelupdate");
let arbetsstartdatumUpdate = document.getElementById("arbetsstartdatumupdate");
let arbetsslutdatumUpdate = document.getElementById("arbetsslutdatumupdate");

let updatewebsitebutton = document.getElementById("updateWebsite");
let webbtitelUpdate = document.getElementById("webbtitelupdate");
let urlUpdate = document.getElementById("urlupdate");
let beskrivningUpdate = document.getElementById("beskrivningupdate");

// Eventlisteners is created to run the get functions on the tables when the page loads
window.addEventListener('load', getadminStudies);
window.addEventListener('load', getadminExperiences);
window.addEventListener('load', getadminWebsites);

// Eventlisteners ready to run add-functions when the add-button is clicked and submitted
addstudybutton.addEventListener("click", addStudy);
addexperiencebutton.addEventListener("click", addExperience);
addwebsitebutton.addEventListener("click", addWebsite);

// Eventlisteners designed to run update-functions when the update-button is clicked and ev is created to acheive a preventDefault in the functions
updatestudybutton.addEventListener("click", function (ev) {
    updateStudy(id, ev)
});
updateexperiencebutton.addEventListener("click", function (event) {
    updateExperience(experienceid, event)
});
updatewebsitebutton.addEventListener("click", function (event) {
    updateWebsite(websiteid, event)
});

// A function named getadminStudies is created which fetches all the studies from the MySQLi database
// and prints it out on the screen in a html p-tag

function getadminStudies() {
    adminstudiesEl.innerHTML = '';

    fetch('http://studenter.miun.se/~olfa1902/Webbutveckling_III/Projektuppgift/REST/studies.php')
        .then(response => response.json())
        .then(data => {
            data.forEach(study => {
                adminstudiesEl.innerHTML +=
                    `<div class="study">
            <p>
            <b>Utbildningsplats: </b> ${study.utbildningsplats}
            <br>
            <b>Namn pa utbildning: </b> ${study.utbildningsnamn}
            <br>
            <b>Utbildningsstart: </b> ${study.startdatum}
            <br>
            <b>Utbildningsslut: </b> ${study.slutdatum}
            </p>
            <button id="${study.id}" onClick="deleteStudy(${study.id})" class="adminbutton">Radera</button>
            <br>
            <button id="${study.id}" onClick="alert(${study.id})" class="adminbutton">Uppdatera</button>
            </div>`
            });
        })
}

// A function named getadminExperiences is created with the puropse of gathering all the work-experiences from the database 
// and printing it out to the screen in html code
function getadminExperiences() {
    adminexperiencesEl.innerHTML = '';

    fetch('http://studenter.miun.se/~olfa1902/Webbutveckling_III/Projektuppgift/REST/experiences.php')
        .then(response => response.json())
        .then(data => {
            data.forEach(experience => {
                adminexperiencesEl.innerHTML +=
                    `<div class="experience">
            <p>
            <b>Arbetsplats: </b> ${experience.arbetsplats}
            <br>
            <b>Titel: </b> ${experience.titel}
            <br>
            <b>Startdatum: </b> ${experience.startdatum}
            <br>
            <b>Slutdatum: </b> ${experience.slutdatum}
            </p>
            <button id="${experience.id}" onClick="deleteExperience(${experience.id})" class="adminbutton">Radera</button>
            <br>
            <button id="${experience.id}" onClick="alert(${experience.id})" class="adminbutton">Uppdatera</button>
            </div>`
            });
        })
}

// A function named getadminWebsites is created with the same mission as the other two functions,
// namely to take all the relevant information from the table and database and printing it out to the front-end website
function getadminWebsites() {
    adminwebsitesEl.innerHTML = '';

    fetch('http://studenter.miun.se/~olfa1902/Webbutveckling_III/Projektuppgift/REST/webpages.php')
        .then(response => response.json())
        .then(data => {
            data.forEach(website => {
                adminwebsitesEl.innerHTML +=
                    `<div class="website">
            <p>
            <b>Titel: </b> ${website.titel}
            <br>
            <b>Lank: </b> <a href="${website.url}">${website.url}</a>
            <br>
            <b>Beskrivning: </b> ${website.beskrivning}
            </p>
            <button id="${website.id}" onClick="deleteWebsite(${website.id})" class="adminbutton">Radera</button>
            <br>
            <button id="${website.id}" onClick="alert(${website.id})" class="adminbutton">Uppdatera</button>
            </div>`
            });
        })
}

/* A function named deleteStudy with an id as a parameter is created and deletes the study-instance 
where the sent id is matching an id from the list in the studies-REST web-service  */
function deleteStudy(id) {
    fetch('http://studenter.miun.se/~olfa1902/Webbutveckling_III/Projektuppgift/REST/studies.php?id=' + id, {
        method: 'DELETE',
    })
        .then(response => response.json())
        .then(data => {
            getadminStudies();
        })
        .catch(error => {
            console.log('Error: ', error);
        })
}

/* A function named addStudy is created and takes the inputs from the HTML form and sends that to the studies-REST webservice as a body-argument */
function addStudy() {
    let utbildningsplats = utbildningsplatsInput.value;
    let utbildningsnamn = utbildningsnamnInput.value;
    let startdatum = utbildningstartdatumInput.value;
    let slutdatum = utbildningslutdatumInput.value;

    let studie = { 'utbildningsplats': utbildningsplats, 'utbildningsnamn': utbildningsnamn, 'startdatum': startdatum, 'slutdatum': slutdatum };

    fetch('http://studenter.miun.se/~olfa1902/Webbutveckling_III/Projektuppgift/REST/studies.php?id=', {
        method: 'POST',
        body: JSON.stringify(studie),
    })
        .then(response => response.json())
        .then(data => {
            getadminStudies();
        })
        .catch(error => {
            console.log('Error: ', error);
        })
}

/* A function named updateStudy which takes the id and input from the HTML form and replaces that information with the post where the id:s match. 
preventDefault is used to make sure that the page doesn't reload when pressing the update-button */
function updateStudy(id, ev) {
    ev.preventDefault();
    let utbildningsplats = utbildningsplatsUpdate.value;
    let utbildningsnamn = utbildningsnamnUpdate.value;
    let startdatum = utbildningstartdatumUpdate.value;
    let slutdatum = utbildningslutdatumUpdate.value;
    let studyid = id.value;

    let studie = { 'utbildningsplats': utbildningsplats, 'utbildningsnamn': utbildningsnamn, 'startdatum': startdatum, 'slutdatum': slutdatum };

    fetch('http://studenter.miun.se/~olfa1902/Webbutveckling_III/Projektuppgift/REST/studies.php?id=' + studyid, {
        method: 'PUT',
        body: JSON.stringify(studie),
    })
        .then(response => response.json())
        .then(data => {
            getadminStudies();
        })
        .catch(error => {
            console.log('Error: ', error);
        })
}

/* A function named addExperience is created and takes the inputs from the HTML form and sends that to the experiences-REST webservice as a body-argument */
function addExperience() {
    let arbetsplats = arbetsplatsInput.value;
    let titel = arbetstitelInput.value;
    let startdatum = arbetsstartdatumInput.value;
    let slutdatum = arbetsslutdatumInput.value;

    let experience = { 'arbetsplats': arbetsplats, 'titel': titel, 'startdatum': startdatum, 'slutdatum': slutdatum };

    fetch('http://studenter.miun.se/~olfa1902/Webbutveckling_III/Projektuppgift/REST/experiences.php?id=', {
        method: 'POST',
        body: JSON.stringify(experience),
    })
        .then(response => response.json())
        .then(data => {
            getadminExperiences();
        })
        .catch(error => {
            console.log('Error: ', error);
        })
}

/* A function named updateExperience which takes the id and input from the HTML form and replaces that information with the post where the id:s match. 
preventDefault is used to make sure that the page doesn't reload when pressing the update-button */
function updateExperience(experienceid, event) {
    event.preventDefault();
    let arbetsplats = arbetsplatsUpdate.value;
    let arbetstitel = arbetstitelUpdate.value;
    let startdatum = arbetsstartdatumUpdate.value;
    let slutdatum = arbetsslutdatumUpdate.value;
    let id = experienceid.value;

    let erfarenhet = { 'arbetsplats': arbetsplats, 'titel': arbetstitel, 'startdatum': startdatum, 'slutdatum': slutdatum };

    fetch('http://studenter.miun.se/~olfa1902/Webbutveckling_III/Projektuppgift/REST/experiences.php?id=' + id, {
        method: 'PUT',
        body: JSON.stringify(erfarenhet),
    })
        .then(response => response.json())
        .then(data => {
            getadminExperiences();
        })
        .catch(error => {
            console.log('Error: ', error);
        })
}
/* A function named deleteExperience with an id as a parameter is created and deletes the study-instance 
where the sent id is matching an id from the list in the experiences-REST web-service  */
function deleteExperience(id) {
    fetch('http://studenter.miun.se/~olfa1902/Webbutveckling_III/Projektuppgift/REST/experiences.php?id=' + id, {
        method: 'DELETE',
    })
        .then(response => response.json())
        .then(data => {
            getadminExperiences();
        })
        .catch(error => {
            console.log('Error: ', error);
        })
}

/* A function named addWebsite is created and takes the inputs from the HTML form and sends that to the websites-REST webservice as a body-argument */
function addWebsite() {
    let titel = webbtitelInput.value;
    let url = urlInput.value;
    let beskrivning = beskrivningInput.value;

    let website = { 'titel': titel, 'url': url, 'beskrivning': beskrivning };

    fetch('http://studenter.miun.se/~olfa1902/Webbutveckling_III/Projektuppgift/REST/webpages.php?id=', {
        method: 'POST',
        body: JSON.stringify(website),
    })
        .then(response => response.json(website))
        .then(data => {
            getadminWebsites();
        })
        .catch(error => {
            console.log('Error: ', error);
        })
}

/* A function named updateWebsite which takes the id and input from the HTML form and replaces that information with the post where the id:s match. 
preventDefault is used to make sure that the page doesn't reload when pressing the update-button */
function updateWebsite(websiteid, event) {
    event.preventDefault();
    let titel = webbtitelUpdate.value;
    let url = urlUpdate.value;
    let beskrivning = beskrivningUpdate.value;
    let id = websiteid.value;

    let webbsida = { 'titel': titel, 'url': url, 'beskrivning': beskrivning };

    fetch('http://studenter.miun.se/~olfa1902/Webbutveckling_III/Projektuppgift/REST/webpages.php?id=' + id, {
        method: 'PUT',
        body: JSON.stringify(webbsida),
    })
        .then(response => response.json())
        .then(data => {
            getadminWebsites();
        })
        .catch(error => {
            console.log('Error: ', error);
        })
}
/* A function named deleteStudy with an id as a parameter is created and deletes the study-instance 
where the sent id is matching an id from the list in the studies-REST web-service  */
function deleteWebsite(id) {
    fetch('http://studenter.miun.se/~olfa1902/Webbutveckling_III/Projektuppgift/REST/webpages.php?id=' + id, {
        method: 'DELETE',
    })
        .then(response => response.json())
        .then(data => {
            getadminWebsites();
        })
        .catch(error => {
            console.log('Error: ', error);
        })
}