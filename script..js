function calcular() {

    let area = Number(document.getElementById("area").value);
    let horas = Number(document.getElementById("horas").value);
    let resultado = document.getElementById("resultado");

    if(area <= 0 || horas <= 0){
        resultado.innerHTML = "⚠️ Preencha todos os campos corretamente.";
        resultado.style.color = "red";
        return;
    }

    // Consumo estimado
    let consumo = area * horas * 1000;

    let classificacao = "";

    if(consumo <= 20000){
        classificacao = "🟢 Sustentável";
    }
    else if(consumo <= 50000){
        classificacao = "🟡 Atenção";
    }
    else{
        classificacao = "🔴 Alto Consumo";
    }

    resultado.innerHTML = `
        Consumo diário: ${consumo.toLocaleString()} litros<br><br>
        Classificação: ${classificacao}
    `;
}