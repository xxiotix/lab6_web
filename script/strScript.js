// Обробник події
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("updateButton").addEventListener("click", str_obrob);
});

// Функція обробки рядку
function str_obrob() {
    var resultDiv = document.getElementById('result'); 
    var textResult = document.getElementById('text-result'); 
    var str = document.getElementById('text').textContent.trim(); 
    var strArray = str.split(" "); 
    var resultString = strArray.join(", ");
    // Виведення
    resultDiv.style.display = "block";
    resultDiv.style.textAlign = "justify";
    resultDiv.style.lineHeight = "1.7";
    resultDiv.style.justifyContent = "center";
    resultDiv.style.alignContent = "center";
    textResult.textContent = resultString;
}
