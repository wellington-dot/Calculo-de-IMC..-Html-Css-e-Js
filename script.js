


function calcular_imc() {
    var altura = document.querySelector(".input-altura").value;
    var peso = document.querySelector(".input-peso").value;
    
    var res_alt = parseFloat(altura.replace(',', '.'));
    var res_peso = parseFloat(peso.replace(',', '.'));

    var res_alt = (res_alt * res_alt);

    var result = (res_peso / res_alt).toFixed(2);

    document.querySelector(".resultado").innerHTML = result;
}



