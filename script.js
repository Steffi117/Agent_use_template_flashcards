const nameForm = document.querySelector("#name-form");
const nameInput = document.querySelector("#patient-name");
const patientList = document.querySelector("#patient-list");

// Create a new patient entry with a fixed name and drinking protocol selection.
function addPatientEntry(patientName) {
    const patientEntry = document.createElement("div");
    patientEntry.className = "patient-entry";

    const nameText = document.createElement("strong");
    nameText.textContent = patientName;

    const drinkLabel = document.createElement("label");
    drinkLabel.textContent = "Trinkprotokoll";

    const drinkSelect = document.createElement("select");
    const yesOption = document.createElement("option");
    yesOption.value = "ja";
    yesOption.textContent = "Ja";
    const noOption = document.createElement("option");
    noOption.value = "nein";
    noOption.textContent = "Nein";

    drinkSelect.appendChild(yesOption);
    drinkSelect.appendChild(noOption);
    drinkLabel.appendChild(drinkSelect);

    patientEntry.appendChild(nameText);
    patientEntry.appendChild(drinkLabel);
    patientList.appendChild(patientEntry);
}

// Handle the form submission and clear the name after a valid entry.
function handleNameSubmit(event) {
    event.preventDefault();

    const patientName = nameInput.value.trim();

    if (patientName === "") {
        nameInput.focus();
        return;
    }

    addPatientEntry(patientName);
    nameInput.value = "";
    nameInput.focus();
}

nameForm.addEventListener("submit", handleNameSubmit);