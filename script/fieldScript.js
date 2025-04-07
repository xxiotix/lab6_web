class Field {
    constructor(name, r) {
        this.name = name;
        this.r = r;
    }

    getYieldPerUnit(k) {
        return k * this.r;
    }
}

class PotatoField extends Field {
    constructor(name, r, S) {
        super(name, r);
        this.S = S;
    }

    getTotalYield(k) {
        return this.getYieldPerUnit(k) * this.S;
    }
}

function calculateHarvest() {
    const r = parseFloat(document.getElementById("seed-weight").value);
    const S = parseFloat(document.getElementById("field-area").value);
    const k = parseFloat(prompt("Введіть коефіцієнт врожайності (k):"));

    if (isNaN(r) || isNaN(S) || isNaN(k)) {
        alert("Будь ласка, введіть коректні числові значення.");
        return;
    }

    const potatoField = new PotatoField("Картопляне поле", r, S);
    const totalHarvest = potatoField.getTotalYield(k);

    document.getElementById("field-harvest").innerText = `Врожайність з одиниці площі: ${potatoField.getYieldPerUnit(k).toFixed(2)} т/га`;
    document.getElementById("potato-harvest").innerText = `Урожай з усього поля: ${totalHarvest.toFixed(2)} т`;
} 

document.querySelector(".calculate-btn").addEventListener("click", calculateHarvest);

// Функція для скидання результатів
function resetFields() {
    document.getElementById("seed-weight").value = "";
    document.getElementById("field-area").value = "";
    document.getElementById("field-harvest").innerText = "";
    document.getElementById("potato-harvest").innerText = "";
}

document.querySelector(".reset-btn").addEventListener("click", resetFields);
