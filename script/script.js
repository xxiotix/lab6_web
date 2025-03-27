var arrTests = [
    { Subj: "Проектування та розробка веб-застосувань", Data: "28.03.2025", Cab: "110" },
    { Subj: "Високопродуктивні обчислення", Data: "25.03.2025", Cab: "225" },
    { Subj: "Філософія", Data: "26.03.2025", Cab: "" },
    { Subj: "Непроцедурне програмування", Data: "27.03.2025", Cab: "119" }
];

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
var todayStr = `${dd}.${mm}.${yyyy}`;

var html = "";

arrTests.forEach(test => {
    let examDate = test.Data;
    let examDay = new Date(examDate.split(".").reverse().join("-"));
    let consultationDay = new Date(examDay);
    consultationDay.setDate(consultationDay.getDate() - 1);

    let consultationStr = `${String(consultationDay.getDate()).padStart(2, '0')}.${String(consultationDay.getMonth() + 1).padStart(2, '0')}.${consultationDay.getFullYear()}`;
    
    if (todayStr === consultationStr) {
        html += `Сьогодні проводиться консультація з предмету "${test.Subj}".<br>`;
        if (test.Cab) {
            html += `Місце проведення: ${test.Cab} кабінет.<br>`;
        }
        else {html += 'Невідоме місце проведення консультації'}
    }
    
    if (todayStr === examDate) {
        html += `Сьогодні проводиться іспит з предмету "${test.Subj}".<br>`;
        if (test.Cab) {
            html += `Місце проведення: ${test.Cab} кабінет.<br>`;
        }
        else {html += 'Невідоме місце проведення іспиту'}
    }
});

var resultDiv = document.getElementById('result');
resultDiv.innerHTML = html || "Сьогодні консультації та іспити відсутні";
resultDiv.style.display = "block";
