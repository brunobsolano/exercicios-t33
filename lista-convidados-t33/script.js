let convidados = [
    {
        nome: "Jão da Silva",
        email: "jao@gmail.com",
        idade: 20
    },
    {
        nome: "Maria da Silva",
        email: "mah@gmail.com",
        idade: 23
    }
]

function carregarLista() {
    let divLista = document.getElementById("lista")
    divLista.innerHTML = ""
    for(let cont = 0; cont < convidados.length; cont++) {
        /**
         *  <tr>
                <td>Jão da Silva</td>
                <td>jao@gmail.com</td>
                <td>20</td>
            </tr>
         */
        divLista.innerHTML += "<tr><td>" + convidados[cont].nome + "</td><td>" + convidados[cont].email + "</td><td>" + convidados[cont].idade + "</td></tr>"
    }
}

function adicionarConvidado() {
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let idade = document.getElementById("idade").value
    
    convidados.push({
        nome: nome,
        email: email,
        idade: idade
    })
    carregarLista()
}