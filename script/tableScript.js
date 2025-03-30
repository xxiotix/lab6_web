document.addEventListener("DOMContentLoaded", function () {
    const cells = document.querySelectorAll("table td");
    const viewSumButton = document.getElementById("viewSum");
    const resetButton = document.getElementById("refresh");
    const sumResultDiv = document.getElementById("sumResult");
    let activeCells = new Set();

    cells.forEach(cell => {
        cell.style.cursor = "pointer";
        cell.addEventListener("click", function () {
            if (activeCells.has(cell)) {
                activeCells.delete(cell);
                cell.style.backgroundColor = "";
            } else {
                activeCells.add(cell);
                cell.style.backgroundColor = "red";
            }
        });
    });

    viewSumButton.addEventListener("click", function () {
        let sum = 0;
        activeCells.forEach(cell => {
            sum += parseInt(cell.textContent) || 0;
        });
        sumResultDiv.textContent = `Сума активованих комірок: ${sum}`;
        sumResultDiv.style.display = "block";
    });

    resetButton.addEventListener("click", function () {
        activeCells.forEach(cell => {
            cell.style.backgroundColor = "";
        });
        activeCells.clear();
        sumResultDiv.textContent = "";
        sumResultDiv.style.display = "none";
    });
});
