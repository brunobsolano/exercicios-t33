let convidados = []

let perguntas = [
    {
        titulo: "Você tem fluxo de caixa?",
        respostas: [
            {
                titulo: "Não tenho",
                diagnostico: "Aí complica ein..."    
            },
            {
                titulo: "Tenho em planilha",
                diagnostico: "Mais ou menos..."    
            },
            {
                titulo: "Tenho em sistema",
                diagnostico: "Tá jóia!"    
            }
        ]
    }
]

let posicaoEdicao

function carregarLista() {
    let tbody = document.getElementById("lista")
    tbody.innerHTML = "" // "limpa"
    for (let cont = 0; cont < convidados.length; cont++) {
        tbody.innerHTML += `
        <tr>
            <td>${convidados[cont].nome}</td>
            <td>${convidados[cont].email}</td>
            <td>${convidados[cont].idade}</td>
            <td>
                <img class="icone" src="edit.svg" onclick="editar(${cont})">
                <img class="icone" src="delete.svg" onclick="remover(${cont})">
            </td>
        </tr>
        `
    }
}

function salvar() {
    let convidado = {} // Objeto novo
    convidado.nome = document.getElementById("nome").value
    convidado.email = document.getElementById("email").value
    convidado.idade = document.getElementById("idade").value

    // edita ou adiciona
    if (posicaoEdicao >= 0) {
        convidados[posicaoEdicao] = convidado
        posicaoEdicao = undefined
    } else {
        convidados.push(convidado)
    }

    carregarLista()
    limparFormulario()
}

function limparFormulario() {
    document.getElementById("nome").value = ""
    document.getElementById("email").value = ""
    document.getElementById("idade").value = ""
}

function editar(posicao) {
    document.getElementById("nome").value = convidados[posicao].nome
    document.getElementById("email").value = convidados[posicao].email
    document.getElementById("idade").value = convidados[posicao].idade
    posicaoEdicao = posicao
}

function cancelar() {
    limparFormulario()
    posicaoEdicao = undefined
}

function remover(posicao) {
    convidados.splice(posicao, 1)
    carregarLista()
}