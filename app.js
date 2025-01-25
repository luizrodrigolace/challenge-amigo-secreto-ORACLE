//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação.
// Aqui você deverá desenvolver a lógica para resolver o problema.

// array para armazenar os nomes dos amigos para sorteio
let amigosParaSorteio = [];

// Função para capturar o valor do campo de entrada utilizando document.getElementById 
// para obter o texto inserido pelo usuário.
// Valida a entrada garantir que o campo não esteja vazio com um aviso
// Adiciona um novo nome ao array amigosParaSorteio e limpa o campo de input
function adicionarAmigo (){
    let novoAmigo = document.getElementById('amigo').value
    console.log('novoamigo',novoAmigo)
    
    if(novoAmigo==''){
        alert('Por favor, insira um nome.')
    }
    else{
        amigosParaSorteio.push(novoAmigo)
    }

    console.log(amigosParaSorteio)

    document.getElementById('amigo').value = ''
    atualizaLista();
}

//Crie uma função que percorra o array amigos e
//  adicione cada nome como um elemento <li> dentro de uma lista HTML.
//  Use innerHTML para limpar a lista antes de adicionar novos elementos.

//Obter o elemento da lista: Utilize document.getElementById() ou document.querySelector()
//  para selecionar a lista onde os amigos serão exibidos.

// Limpar a lista existente: Defina lista.innerHTML = "" 
// para garantir que não haja duplicados ao atualizar.

//Percorrer o array: Use um loop for para percorrer o array
//  amigos e criar elementos de lista (<li>) para cada nome.

//Adicionar elementos à lista: Para cada amigo,
//  crie um novo elemento de lista.

function atualizaLista() {
    const lista = document.getElementById('listaAmigos');

    lista.innerHTML = '';
    
    lista.innerHTML = amigosParaSorteio.map(amigo => `<li>${amigo}</li>`).join('');
}


//Escreva uma função que selecione aleatoriamente um dos nomes armazenados no array amigos.

//Use Math.random() e Math.floor() para obter um índice aleatório.

//Validar que há amigos disponíveis: Antes de sortear, verificar se o array amigos não está vazio.

//Gerar um índice aleatório: Usar Math.random() e Math.floor() para selecionar um índice aleatório do array.

//Obter o nome sorteado: Utilizar o índice aleatório para acessar o nome correspondente no array.

//Mostrar o resultado: Atualizar o conteúdo do elemento de
//  resultado usando document.getElementById() e innerHTML para exibir o amigo sorteado.

function sortearAmigo(){
    if(amigosParaSorteio.length == 0){
        alert('Lista de amigos vazia')
    }
    else{
        let resultado = document.getElementById('resultado')
        resultado.innerHTML = amigosParaSorteio[Math.floor(Math.random() * amigosParaSorteio.length)]
    }
}