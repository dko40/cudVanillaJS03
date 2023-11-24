//funcao para carregar os posts
const urlDados = "http://localhost:3000/posts/"

 

//manipulador de paginas
function navegacao(idPagina) {
  //esconder todas as páginas
  const paginas = document.querySelectorAll('.page');
  paginas.forEach(p => {
    p.style.display = 'none';
  });

  //mostra a página desejada
  const paginaAlvo = document.getElementById(idPagina);
  if (paginaAlvo) {
    paginaAlvo.style.display = 'block';
  }
}

//buscar dados para a home
function buscarDados() {
  fetch(urlDados)//url dos meus dados
    .then(response => response.json())
    .then(data => {
      if (Array.isArray(data) && data.length > 0) {
        // Manipule os dados para exibir cada post
        const conteudoDiv = document.getElementById('page-home')

        data.forEach(post => {
          const postDiv = document.createElement('div')
          postDiv.setAttribute("id", "contentPost")

          //console.log("ID: "+post.id+" Post título: "+post.titulo)
          const dataSpan = document.createElement('span')
          dataSpan.textContent = `Data: ${post.dataPost}`
          postDiv.appendChild(dataSpan);

          const tituloH3 = document.createElement('h3')
          tituloH3.textContent = post.tituloPost
          postDiv.appendChild(tituloH3)

          const conteudoP = document.createElement('p')
          conteudoP.textContent = post.conteudoPost
          postDiv.appendChild(conteudoP)

          const autorSpan = document.createElement('span')
          autorSpan.textContent = `Autor: ${post.autorPost}`
          postDiv.appendChild(autorSpan);

          const br1 = document.createElement('br');
          postDiv.appendChild(br1)

          const editarPost = document.createElement('a')
          editarPost.textContent = "Editar "
          editarPost.setAttribute("href", "#")
          editarPost.setAttribute("id", "editarPostLink")
          editarPost.setAttribute("class", "editarPostLink")
          editarPost.onclick = () => {
            navegacao("editar-post")
            buscarDados2(post.id)
          }
          postDiv.appendChild(editarPost)

          const excluirPost = document.createElement('a')
          excluirPost.textContent = " Excluir"
          excluirPost.setAttribute("href", "#")
          excluirPost.setAttribute("id", "excluirPostLink")
          excluirPost.setAttribute("class", "excluirPostLink")
          excluirPost.onclick = () => {
            const mensagem = function (param) {
             return param
            }
            if(mensagem( confirm("Gostaria realmente de deletar o post?")) === true) {deletePost(post.id)  }
            
            navegacao("page-home")
            
          }
          
          postDiv.appendChild(excluirPost)

          // Adiciona a div do post ao conteúdo principal
          conteudoDiv.appendChild(postDiv)

        })
      } else {
        console.error('Dados inválidos ou ausentes.')
      }
    })
    .catch(error => console.error('Erro ao buscar dados:', error))
}


// funcao para cadastrar novo post
function cadastrarNovoPost(novoPost) {
  fetch(urlDados, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(novoPost),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Novo post cadastrado:', data)
      // resetarFormulario(); // Resetar o formulário após o envio bem-sucedido
    })
    .catch(error => console.error('Erro ao cadastrar novo post:', error))
}


//funcao para pegar dados do formulario do cadastro do post
function pegarDadosCadastrarPost() {

  const titulo = document.getElementById('titulo-post').value
  const autor = document.getElementById('autor-post').value
  const data = document.getElementById('data-post').value
  const conteudoPost = document.getElementById('conteudo-post').value

  const novoPost = {
    tituloPost: titulo,
    autorPost: autor,
    dataPost: data,
    conteudoPost: conteudoPost
  };

  cadastrarNovoPost(novoPost)
  console.log(novoPost.autorPost)
  console.log(novoPost.conteudoPost)
  console.log(novoPost.dataPost)
  console.log(novoPost.tituloPost)

}

//buscar dados para a home


//manipulador de paginas
function navegacao(idPagina) {
  //esconder todas as páginas
  const paginas = document.querySelectorAll('.page');
  paginas.forEach(p => {
    p.style.display = 'none';
  });

  //mostra a página desejada
  const paginaAlvo = document.getElementById(idPagina);
  if (paginaAlvo) {
    paginaAlvo.style.display = 'block';
  }
}

function preparaEditarDados(autorPost, dataPost, conteudoPost, tituloPost, idPost) {
  document.getElementById("edit-autor-post").value = autorPost
  document.getElementById("edit-data-post").value = dataPost
  document.getElementById("edit-conteudo-post").value = conteudoPost
  document.getElementById("edit-titulo-post").value = tituloPost
  document.getElementById("edit-id-post").value = idPost
}

//buscar dados para a home
function buscarDados2(c) {

  fetch(urlDados)//url dos meus dados
    .then(response => response.json())
    .then(data => {
      if (Array.isArray(data) && data.length > 0) {
        //anipule os dados para exibir cada post
        const conteudoDiv = document.getElementById('editar-post')

        //testando a condicao de listagem
        const teste = (m) => m.id === c
        const reg = data.find(teste)

        //preparando o campo data
        const dataAtual = new Date()
        const dia = dataAtual.getDay()
        const mes = +(1 + dataAtual.getMonth())
        const ano = dataAtual.getFullYear()
        const dataCompleta = dia + "/" + mes + "/" + ano

        //respostas
        preparaEditarDados(
          reg.autorPost,
          dataCompleta,
          reg.conteudoPost,
          reg.tituloPost,
          reg.id
        )
      } else {
        console.error('Dados inválidos ou inexistente.')
      }
    })
    .catch(error => console.error('Erro ao buscar dados:', error))
}




////////////////////////////////////
///////////////////////////////////
////////////////////////////////////
//////////////////////////////////////
///////////////////////////////////




// funcao para editar novo post
function editarPostCorrente(editPost, idPost) {

  console.log(editPost)
  const fetchConfig = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      // Outros cabeçalhos conforme necessário
    },
    body: JSON.stringify(editPost),
  };

  const urlEdit = urlDados + idPost
  fetch(urlEdit, fetchConfig)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Erro HTTP! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log('Post atualizado:', data);
    })
    .catch(error => {
      console.error('Erro durante a solicitação:', error);
    });
}


function pegarDadosEditarPost() {

  const titulo = document.getElementById('edit-titulo-post').value
  const autor = document.getElementById('edit-autor-post').value
  const data = document.getElementById('edit-data-post').value
  const conteudo = document.getElementById('edit-conteudo-post').value
  const id = document.getElementById('edit-id-post').value

  const postCorrent = {
    tituloPost: titulo,
    autorPost: autor,
    dataPost: data,
    conteudoPost: conteudo,

  };

  editarPostCorrente(postCorrent, id)
  console.log(postCorrent.autorPost)
  console.log(postCorrent.conteudoPost)
  console.log(postCorrent.dataPost)
  console.log(postCorrent.tituloPost)
  console.log(postCorrent.idPost)

}




 
function deletePost(id) {

  
const urlDeletar  =  urlDados+id;
  
  const fetchConfig = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      // Outros cabeçalhos conforme necessário
    },
  }

  fetch(urlDeletar, fetchConfig)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Erro HTTP! Status: ${response.status}`)
      }
      console.log('Post excluído com sucesso!')
    })
    .catch(error => {
      console.error('Erro durante a solicitação:', error)
    })
}