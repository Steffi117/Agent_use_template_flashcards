const nameForm = document.querySelector("#name-form");
const nameInput = document.querySelector("#patient-name");
const patientTableBody = document.querySelector("#patient-table-body");
const storageKey = "radiotherapyPatients";
let patients = loadPatients();

// Show the fixed drinking result after the selection.
function updateDrinkResult(drinkCell, drinkChoice, patient) {
    drinkCell.textContent = "";
    patient.drinkChoice = drinkChoice;
    patient.drinkAmount = "";
    savePatients();

    if (drinkChoice === "ja") {
        const mlRow = document.createElement("div");
        mlRow.className = "ml-row";

        const mlInput = document.createElement("input");
        mlInput.type = "number";
        mlInput.min = "0";

        const mlUnit = document.createElement("span");
        mlUnit.textContent = "ml";

        mlRow.appendChild(mlInput);
        mlRow.appendChild(mlUnit);

        // Show the finished amount as fixed text instead of a visible input.
        mlInput.addEventListener("change", function () {
            if (mlInput.value !== "") {
                drinkCell.textContent = "";

                const mlResult = document.createElement("span");
                mlResult.className = "ml-result";
                mlResult.textContent = mlInput.value + " ml";
                drinkCell.appendChild(mlResult);
                patient.drinkAmount = mlInput.value;
                savePatients();
            }
        });
        drinkCell.appendChild(mlRow);
    } else if (drinkChoice === "nein") {
        const redX = document.createElement("span");
        redX.className = "red-x";
        redX.textContent = "X";
        redX.setAttribute("aria-label", "Nicht getrunken");
        drinkCell.appendChild(redX);
    }
}

// Show the fixed doctor conversation status, which can be changed by clicking.
function updateDoctorTalkResult(doctorCell, doctorChoice, patient) {
    doctorCell.textContent = "";
    patient.doctorTalk = doctorChoice;
    savePatients();

    if (doctorChoice === "durchgefuehrt") {
        const greenCheck = document.createElement("span");
        greenCheck.className = "green-check";
        greenCheck.textContent = "\u2713";
        greenCheck.setAttribute("aria-label", "Durchgeführt");
        doctorCell.appendChild(greenCheck);
    } else if (doctorChoice === "nicht-durchgefuehrt") {
        const redX = document.createElement("span");
        redX.className = "red-x";
        redX.textContent = "X";
        redX.setAttribute("aria-label", "Noch nicht durchgeführt");
        doctorCell.appendChild(redX);
    }

}

// Create the three written choices for the doctor conversation column.
function createDoctorTalkSelect(patient, doctorCell) {
    const doctorSelect = document.createElement("select");

    const doneOption = document.createElement("option");
    doneOption.value = "durchgefuehrt";
    doneOption.textContent = "Durchgeführt";

    const notDoneOption = document.createElement("option");
    notDoneOption.value = "nicht-durchgefuehrt";
    notDoneOption.textContent = "Noch nicht durchgeführt";

    const notNecessaryOption = document.createElement("option");
    notNecessaryOption.value = "nicht-notwendig";
    notNecessaryOption.textContent = "Nicht notwendig";

    doctorSelect.appendChild(doneOption);
    doctorSelect.appendChild(notDoneOption);
    doctorSelect.appendChild(notNecessaryOption);
    doctorSelect.value = patient.doctorTalk === "" ? "nicht-notwendig" : patient.doctorTalk;

    doctorSelect.addEventListener("change", function () {
        if (doctorSelect.value === "nicht-notwendig") {
            updateDoctorTalkResult(doctorCell, "", patient);
        } else {
            updateDoctorTalkResult(doctorCell, doctorSelect.value, patient);
        }
    });

    doctorCell.textContent = "";
    doctorCell.appendChild(doctorSelect);
}

// Show the fixed transport result and prevent it from being changed.
function updateTransportResult(transportCell, transportChoice, patient) {
    transportCell.textContent = "";
    patient.transport = transportChoice;
    savePatients();

    if (transportChoice === "ja") {
        const greenCheck = document.createElement("span");
        greenCheck.className = "green-check";
        greenCheck.textContent = "\u2713";
        greenCheck.setAttribute("aria-label", "Transport ja");
        transportCell.appendChild(greenCheck);
    } else if (transportChoice === "nein") {
        const redX = document.createElement("span");
        redX.className = "red-x";
        redX.textContent = "X";
        redX.setAttribute("aria-label", "Transport nein");
        transportCell.appendChild(redX);
    }
}

// Create the yes and no choices for the transport column.
function createTransportChoices(patient, transportCell) {
    const choices = document.createElement("div");
    choices.className = "transport-choices";

    const yesLabel = document.createElement("label");
    const yesOption = document.createElement("input");
    yesOption.type = "radio";
    yesOption.value = "ja";
    yesLabel.appendChild(yesOption);
    yesLabel.appendChild(document.createTextNode("Ja"));

    const noLabel = document.createElement("label");
    const noOption = document.createElement("input");
    noOption.type = "radio";
    noOption.value = "nein";
    noLabel.appendChild(noOption);
    noLabel.appendChild(document.createTextNode("Nein"));

    yesOption.addEventListener("change", function () {
        updateTransportResult(transportCell, "ja", patient);
    });
    noOption.addEventListener("change", function () {
        updateTransportResult(transportCell, "nein", patient);
    });

    choices.appendChild(yesLabel);
    choices.appendChild(noLabel);
    transportCell.textContent = "";
    transportCell.appendChild(choices);
}

// Show the fixed follow-up text after it has been entered.
function updateFollowUpResult(followUpCell, followUp, patient) {
    followUpCell.textContent = "";
    patient.followUp = followUp.trim();
    savePatients();

    if (followUp.trim() !== "") {
        const followUpResult = document.createElement("span");
        followUpResult.className = "follow-up-result";
        followUpResult.textContent = followUp.trim();
        followUpCell.appendChild(followUpResult);
    }
}

// Create the text field for a follow-up without a date picker.
function createFollowUpField(patient, followUpCell) {
    const followUpInput = document.createElement("input");
    followUpInput.type = "text";
    followUpInput.value = patient.followUp || "";

    followUpInput.addEventListener("change", function () {
        if (followUpInput.value.trim() !== "") {
            updateFollowUpResult(followUpCell, followUpInput.value.trim(), patient);
        }
    });

    followUpInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            if (followUpInput.value.trim() !== "") {
                updateFollowUpResult(followUpCell, followUpInput.value.trim(), patient);
            }
        }
    });

    followUpCell.textContent = "";
    followUpCell.appendChild(followUpInput);
}

// Create a new patient row with a fixed name and drinking protocol.
function addPatientEntry(patient) {
    const patientRow = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = patient.name;

    const timeCell = document.createElement("td");
    const timeLabel = document.createElement("label");
    timeLabel.textContent = "Uhrzeit";

    const timeInput = document.createElement("input");
    timeInput.type = "time";
    timeInput.value = patient.time;
    timeInput.addEventListener("change", function () {
        patient.time = timeInput.value;
        savePatients();
    });
    timeLabel.appendChild(timeInput);
    timeCell.appendChild(timeLabel);

    const drinkLabel = document.createElement("label");
    drinkLabel.textContent = "Trinkprotokoll";

    const drinkSelect = document.createElement("select");
    const emptyOption = document.createElement("option");
    emptyOption.value = "";
    emptyOption.textContent = "Auswahl";
    const yesOption = document.createElement("option");
    yesOption.value = "ja";
    yesOption.textContent = "Ja";
    const noOption = document.createElement("option");
    noOption.value = "nein";
    noOption.textContent = "Nein";

    drinkSelect.appendChild(emptyOption);
    drinkSelect.appendChild(yesOption);
    drinkSelect.appendChild(noOption);
    drinkSelect.value = patient.drinkChoice;
    drinkLabel.appendChild(drinkSelect);

    const drinkCell = document.createElement("td");
    drinkCell.appendChild(drinkLabel);

    drinkSelect.addEventListener("change", function () {
        updateDrinkResult(drinkCell, drinkSelect.value, patient);
    });

    patientRow.appendChild(nameCell);
    patientRow.appendChild(timeCell);
    patientRow.appendChild(drinkCell);

    const doctorCell = document.createElement("td");
    patientRow.appendChild(doctorCell);

    updateDoctorTalkResult(doctorCell, patient.doctorTalk, patient);

    doctorCell.addEventListener("click", function () {
        if (doctorCell.querySelector("select") === null) {
            createDoctorTalkSelect(patient, doctorCell);
        }
    });

    const transportCell = document.createElement("td");
    patientRow.appendChild(transportCell);
    if (patient.transport === "ja" || patient.transport === "nein") {
        updateTransportResult(transportCell, patient.transport, patient);
    } else {
        createTransportChoices(patient, transportCell);
    }

    const followUpCell = document.createElement("td");
    patientRow.appendChild(followUpCell);
    if (patient.followUp !== undefined && patient.followUp !== "") {
        updateFollowUpResult(followUpCell, patient.followUp, patient);
    } else {
        createFollowUpField(patient, followUpCell);
    }

    patientTableBody.appendChild(patientRow);

    if (patient.drinkChoice === "ja" && patient.drinkAmount !== "") {
        drinkCell.textContent = "";
        const mlResult = document.createElement("span");
        mlResult.className = "ml-result";
        mlResult.textContent = patient.drinkAmount + " ml";
        drinkCell.appendChild(mlResult);
    } else if (patient.drinkChoice === "ja") {
        updateDrinkResult(drinkCell, "ja", patient);
    } else if (patient.drinkChoice === "nein") {
        updateDrinkResult(drinkCell, "nein", patient);
    }
}

// Save all patient entries in the browser.
function savePatients() {
    localStorage.setItem(storageKey, JSON.stringify(patients));
}

// Load saved patient entries when the page opens.
function loadPatients() {
    const savedPatients = localStorage.getItem(storageKey);

    if (savedPatients === null) {
        return [];
    }

    try {
        return JSON.parse(savedPatients);
    } catch (error) {
        return [];
    }
}

// Show all saved patients in the table.
function showSavedPatients() {
    for (let index = 0; index < patients.length; index++) {
        addPatientEntry(patients[index]);
    }
}

// Handle the form submission and clear the name after a valid entry.
function handleNameSubmit(event) {
    event.preventDefault();

    const patientName = nameInput.value.trim();

    if (patientName === "") {
        nameInput.focus();
        return;
    }

    const patient = {
        name: patientName,
        time: "",
        drinkChoice: "",
        drinkAmount: "",
        doctorTalk: "",
        transport: "",
        followUp: ""
    };
    patients.push(patient);
    savePatients();
    addPatientEntry(patient);
    nameInput.value = "";
    nameInput.focus();
}

nameForm.addEventListener("submit", handleNameSubmit);
showSavedPatients();