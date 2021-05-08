

function classificar() {

    let lado1 = parseFloat(document.getElementById("l1").value);
    let lado2 = parseFloat(document.getElementById("l2").value);
    let lado3 = parseFloat(document.getElementById("l3").value);
    
    if (lado1 == lado2 && lado2 == lado3) {
        document.getElementById("logo").src = "arquivos/equilatero.svg"    
        alert ("isocceles")

    } else if (lado1 == lado2 || lado2 == lado3) {
        alert ("escaleno")

    } else {
        alert ("ultimo")
    }

}

