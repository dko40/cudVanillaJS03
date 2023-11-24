const execHome = document.getElementById("nHome")
execHome.onclick = () => {
    navegacao("page-home")
}

 
const execCadastrarPost = document.getElementById("nCadastrarPost")
execCadastrarPost.onclick = () => {
    navegacao("cadastrar-post")
}


//execucao para trazer a listagem dos dados
buscarDados();

//execucao cadastrar o post
const enviarNovoPost = document.getElementById("botao-cadastrar")
enviarNovoPost.onclick = () => {
    pegarDadosCadastrarPost()
}
//execucao editar o post
 


//execucao cadastrar o post
const editarPostCorrenteAgora = document.getElementById("edit-botao-editar")
editarPostCorrenteAgora.onclick = () => {
    pegarDadosEditarPost()
 
}


