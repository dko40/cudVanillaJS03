const cadastrarPost = () => {

    // container principal header
    const cPost = document.createElement("div")
    cPost.setAttribute("id", "cadastrar-post")
    cPost.setAttribute("class", "page")
    cPost.setAttribute("style", "display:none;")  

    //titulo da pagina
    const titleCadText = document.createElement("h4")
    titleCadText.innerText = "EDITAR"
    titleCadText.setAttribute("class","titleCadText")
    cPost.appendChild(titleCadText)

    //formulario de cadastro do post
    const divForm = document.createElement("div")
    divForm.setAttribute("id", "id-form-cadastrar")
    divForm.setAttribute("class", "id-form-cadastrar")
    //input titulo
    const cadPostInputTitulo = document.createElement("input")
    cadPostInputTitulo.setAttribute("name", "titulo-post")
    cadPostInputTitulo.setAttribute("id", "titulo-post")
    cadPostInputTitulo.setAttribute("class", "titulo-post")
    cadPostInputTitulo.setAttribute("placeholder", "Digite seu título")
    //input autor
    const cadPostInputAutor = document.createElement("input")
    cadPostInputAutor.setAttribute("name", "autor-post")
    cadPostInputAutor.setAttribute("id", "autor-post")
    cadPostInputAutor.setAttribute("class", "autor-post")
    cadPostInputAutor.setAttribute("placeholder", "Digite o autor")
    //input data + formatacao de data
    const cadPostInputData = document.createElement("input")     
    const dataAtual = new Date()     
    cadPostInputData.value = dataAtual.getDay() +"/"+
    +(1+dataAtual.getMonth())+"/"
    +dataAtual.getFullYear()
    cadPostInputData.setAttribute("name", "data-post")
    cadPostInputData.setAttribute("id", "data-post")
    cadPostInputData.setAttribute("class", "titulo-post")
    cadPostInputData.setAttribute("placeholder", "Digite a data")
    cadPostInputData.setAttribute("disabled", "")

    //input cnoteudo
    const cadPostTextareaConteudo = document.createElement("textarea")
    cadPostTextareaConteudo.setAttribute("name", "conteudo-post")
    cadPostTextareaConteudo.setAttribute("id", "conteudo-post")
    cadPostTextareaConteudo.setAttribute("class", "conteudo-post")
    cadPostTextareaConteudo.setAttribute("placeholder", "Digite seu conteudo")    
    //botao enviar
    const botaoCadastrar = document.createElement("button")
    botaoCadastrar.setAttribute("id","botao-cadastrar")
    botaoCadastrar.setAttribute("class","botao-cadastrar")
    botaoCadastrar.textContent = "Enviar dados"
    //appends
    divForm.appendChild(cadPostInputTitulo)
    divForm.appendChild(cadPostInputAutor)
    divForm.appendChild(cadPostInputData)
    divForm.appendChild(cadPostTextareaConteudo)
    divForm.appendChild(botaoCadastrar)
    cPost.appendChild(divForm)

    return cPost
}

export { cadastrarPost }