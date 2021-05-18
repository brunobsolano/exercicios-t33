let convidados = ["Jão da Silva", "Maria da Silva", "Pafúncio Beltrano", "Edicrelson Ciclano", "Jacirene Oliveira", "Joysclaine Montanghe"]

function carregarLista() {
    let divListaConvidados = document.getElementById("lista")
    for (let cont = 0; cont < convidados.length; cont++) {
        divListaConvidados.innerHTML += "<div>" + convidados[cont] + "</div>" // Repitir da posição 0 até última posição do vetor
    }
}