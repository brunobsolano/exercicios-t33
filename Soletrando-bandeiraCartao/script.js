
function soletrar() {
    let palavra = document.getElementById("palavra").value
    palavra.length
    for (let cont=0; cont<palavra.length; cont++) {
        alert(palavra[cont])
    }
 }

function verificaCartao() {

    let input = document.getElementById("numero1").value 
    
    if (input[0] == 4) {
        document.getElementById("bandeira").value = "visa"
        
    } else if (input[0] == 3) {
        document.getElementById("bandeira").value = "master"
    } else {
        alert("esse cartao nao existe")
    }
}