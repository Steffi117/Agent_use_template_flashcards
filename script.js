const nameForm = document.querySelector("#name-form");
const nameInput = document.querySelector("#patient-name");
const patientTableBody = document.querySelector("#patient-table-body");

// Show the fixed drinking result after the selection.
function updateDrinkResult(drinkCell, drinkChoice) {
    drinkCell.textContent = "";

    if (drinkChoice === "ja") {
        const mlLabel = document.createElement("label");
        mlLabel.textContent = "ml";

        const mlInput = document.createElement("input");
        mlInput.type = "number";
        mlInput.min = "0";
        mlLabel.appendChild(mlInput);
        mlInput.addEventListener("change", function () {
            if (mlInput.value !== "") {
                mlInput.readOnly = true;
            }
        });
        drinkCell.appendChild(mlLabel);
    } else {
        const redX = document.createElement("span");
        redX.className = "red-x";
        redX.textContent = "X";
        redX.setAttribute("aria-label", "Nicht getrunken");
        drinkCell.appendChild(redX);
    }
}

// Create a new patient row with a fixed name and drinking protocol.
function addPatientEntry(patientName) {
    const patientRow = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = patientName;

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
    drinkLabel.appendChild(drinkSelect);

    const drinkCell = document.createElement("td");
    drinkCell.appendChild(drinkLabel);

    drinkSelect.addEventListener("change", function () {
        updateDrinkResult(drinkCell, drinkSelect.value);
    });

    patientRow.appendChild(nameCell);
    patientRow.appendChild(drinkCell);
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