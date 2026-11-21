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
        drinkAmount: ""
    };
    patients.push(patient);
    savePatients();
    addPatientEntry(patient);
    nameInput.value = "";
    nameInput.focus();
}

nameForm.addEventListener("submit", handleNameSubmit);
showSavedPatients();