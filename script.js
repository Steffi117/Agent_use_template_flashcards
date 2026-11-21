const nameForm = document.querySelector("#name-form");
const nameInput = document.querySelector("#patient-name");
const patientTableBody = document.querySelector("#patient-table-body");

// Show an ml field for Ja or a red X for Nein.
function updateDrinkResult(drinkSelect, resultArea) {
    resultArea.textContent = "";

    if (drinkSelect.value === "ja") {
        const mlLabel = document.createElement("label");
        mlLabel.textContent = "ml";

        const mlInput = document.createElement("input");
        mlInput.type = "number";
        mlInput.min = "0";
        mlLabel.appendChild(mlInput);
        resultArea.appendChild(mlLabel);
    } else {
        const redX = document.createElement("span");
        redX.className = "red-x";
        redX.textContent = "X";
        redX.setAttribute("aria-label", "Nicht getrunken");
        resultArea.appendChild(redX);
    }
}

// Create a new patient entry with a fixed name and drinking protocol selection.
function addPatientEntry(patientName) {
    const patientRow = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = patientName;

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

    const drinkCell = document.createElement("td");
    drinkCell.appendChild(drinkLabel);

    const resultArea = document.createElement("div");
    resultArea.className = "drink-result";
    updateDrinkResult(drinkSelect, resultArea);
    drinkSelect.addEventListener("change", function () {
        updateDrinkResult(drinkSelect, resultArea);
    });

    const resultCell = document.createElement("td");
    resultCell.appendChild(resultArea);

    patientRow.appendChild(nameCell);
    patientRow.appendChild(drinkCell);
    patientRow.appendChild(resultCell);
    patientTableBody.appendChild(patientRow);
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