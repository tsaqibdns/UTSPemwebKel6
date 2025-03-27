document.addEventListener("DOMContentLoaded", () => {
    const addShotBtn = document.getElementById("addShot");
    const addNewBtn = document.getElementById("addNew");
    const shotTable = document.getElementById("shotTable").getElementsByTagName("tbody")[0];
    const shotCount = document.getElementById("shotCount");

    let rowCount = 0;

    function updateShotCount() {
        shotCount.textContent = `${rowCount} Shot`;
    }

    function addRow() {
        const row = shotTable.insertRow();

        if (rowCount % 2 === 0) {
            row.classList.add("even-row");
        } else {
            row.classList.add("odd-row");
        }

        row.innerHTML = `
            <td><input type="checkbox" class="status-indicator"></td>
            <td>${rowCount + 1}</td>
            <td class="image-upload">
                <input type="file" accept="image/*" class="file-input" hidden>
                <div class="upload-box">Upload</div>
            </td>
            <td contenteditable="true" id="kotak-edit" class="editable" placeholder="Description">Description</td>
            <td contenteditable="true" id="kotak-edit" class="editable" placeholder="Subject">Subject</td>
            <td>
                <select class="shot-size">
                    <option value="Shot Size">Shot Size</option>
                    <option value="Extreme Close-Up">Extreme Close-Up</option>
                    <option value="Close-Up">Close-Up</option>  
                    <option value="Medium Close Shot">Medium Close Shot</option>
                    <option value="Close Shot">Close Shot</option>
                    <option value="Medium Shot">Medium Shot</option>
                    <option value="Medium Full Shot">Medium Full Shot</option>
                    <option value="Full Shot">Full Shot</option>
                    <option value="Wide Shot">Wide Shot</option>
                    <option value="Extreme Wide Shot">Extreme Wide Shot</option>
                    <option value="Long Shot">Long Shot</option>
                    <option value="Extreme Long Shot">Extreme Long Shot</option>
                    <option value="Custom">Custom</option>
                </select>
            </td>
            <td>
                <select class="shot-type">
                    <option value="Shot Type">Shot Type</option>
                    <option value="Eye Level">Eye Level</option>
                    <option value="Low Angle">Low Angle</option>
                    <option value="High Angle">High Angle</option>
                    <option value="Overhead">Overhead</option>
                    <option value="Shoulder Level">Shoulder Level</option>
                    <option value="Hip Level">Hip Level</option>
                    <option value="Knee Level">Knee Level</option>
                    <option value="Ground Level">Ground Level</option>
                    <option value="Custom">Custom</option>
                </select>
            </td>
            <td>
                <button class="delete-row">Delete</button>
            </td>
        `;

        // Event listener untuk hapus row
        row.querySelector(".delete-row").addEventListener("click", function () {
            row.remove();
            rowCount--;
            updateShotCount();
        });

        // Checkbox status indikator
        const checkbox = row.querySelector(".status-indicator");
        checkbox.addEventListener("change", function () {
            if (this.checked) {
                row.classList.add("completed-row");
            } else {
                row.classList.remove("completed-row");
            }
        });

        // Event listener buat custom dropdown
        const shotSizeDropdown = row.querySelector(".shot-size");
        shotSizeDropdown.addEventListener("change", (e) => {
            if (e.target.value === "Custom") {
                const customValue = prompt("Enter custom shot size:");
                if (customValue) {
                    const newOption = document.createElement("option");
                    newOption.value = customValue;
                    newOption.textContent = customValue;
                    newOption.selected = true;
                    shotSizeDropdown.appendChild(newOption);
                }
            }
        });

        const shotTypeDropdown = row.querySelector(".shot-type");
        shotTypeDropdown.addEventListener("change", (e) => {
            if (e.target.value === "Custom") {
                const customValue = prompt("Enter custom shot type:");
                if (customValue) {
                    const newOption = document.createElement("option");
                    newOption.value = customValue;
                    newOption.textContent = customValue;
                    newOption.selected = true;
                    shotTypeDropdown.appendChild(newOption);
                }
            }
        });

        // Event upload image
        const uploadBox = row.querySelector(".upload-box");
        const fileInput = row.querySelector(".file-input");
        uploadBox.addEventListener("click", () => fileInput.click());

        rowCount++;
        updateShotCount();
    }

    addShotBtn.addEventListener("click", addRow);
    addNewBtn.addEventListener("click", addRow);
});
