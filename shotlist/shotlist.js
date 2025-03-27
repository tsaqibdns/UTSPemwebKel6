document.addEventListener("DOMContentLoaded", () => {
    const addShotBtn = document.getElementById("addShot");
    const addNewBtn = document.getElementById("addNew");
    const shotTable = document.getElementById("shotTable").getElementsByTagName("tbody")[0];
    const shotCount = document.getElementById("shotCount");

    let rowCount = 0;

    function updateShotCount() {
        rowCount = shotTable.querySelectorAll("tr").length; 
        shotCount.textContent = `${rowCount} Shot`;
    }

    function updateShotNumbers() {
        const rows = shotTable.querySelectorAll("tr");
        rows.forEach((row, index) => {
            row.querySelector(".shot-number").textContent = index + 1;
        });
        updateShotCount();
    }

    function addRow() {
        const row = shotTable.insertRow();
        row.innerHTML = `
            <td><input type="checkbox" class="status-indicator"></td>
            <td class="shot-number">${rowCount + 1}</td>
            <td class="image-upload">
                <input type="file" accept="image/*" class="file-input" hidden>
                <div class="upload-box">Upload</div>
            </td>
            <td contenteditable="true" class="editable">Description</td>
            <td contenteditable="true" class="editable">Subject</td>
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

        row.querySelector(".delete-row").addEventListener("click", function () {
            row.remove();
            updateShotNumbers();
        });

        const uploadBox = row.querySelector(".upload-box");
        const fileInput = row.querySelector(".file-input");

        uploadBox.addEventListener("click", () => fileInput.click());

        fileInput.addEventListener("change", (event) => {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    uploadBox.innerHTML = `<img src="${e.target.result}" class="uploaded-image">`;
                    uploadBox.style.border = "none"; 
                };
                reader.readAsDataURL(file);
            }
        });

        updateShotNumbers(); 
    }

    addShotBtn.addEventListener("click", addRow);
    addNewBtn.addEventListener("click", addRow);
});
