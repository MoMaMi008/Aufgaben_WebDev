let beurteilung = document.createElement("div");
document.body.appendChild(beurteilung);

document.querySelector("#quali").addEventListener("change", function () {
    let eingabe = parseInt(document.querySelector("#quali").value);
    let ausgabe;

    if (eingabe <= 50) {
        document.body.style.backgroundColor = "green";
        ausgabe = "<p>Level of health concern: Good</p><p>Level of health effect: Little or no risk</p>";
    } else if (eingabe <= 100) {
        document.body.style.backgroundColor = "yellow";
        ausgabe = "<p>Level of health concern: Moderate</p><p>Level of health effect: Acceptable quality</p>";
    } else if (eingabe > 100) {
        document.body.style.backgroundColor = "red";
        ausgabe = "<p>Level of health concern: Unhealthy for sensitive groups</p><p>Level of health effect: General public not likely affected</p>";
    } else {
        ausgabe = "<p>Ungültiger Wert</p>";
    }

    beurteilung.innerHTML = ausgabe;
});