const  editarPost = () => {     
    
    // container principal header
    const ePost = document.createElement("div")
    ePost.setAttribute("id","editar-post")  
    ePost.setAttribute("class","page") 
    ePost.setAttribute("style","display:none;")
   
    

    //titulo da pagina
    const titleEditarText = document.createElement("h4")
    titleEditarText.innerText = "EDITAR"
    titleEditarText.setAttribute("class","titleEditarText")
    ePost.appendChild(titleEditarText)

    //formulario de cadastro do post
    const divForm = document.createElement("div")
    divForm.setAttribute("id", "id-form-cadastrar")
    divForm.setAttribute("class", "id-form-cadastrar")
    //input titulo
    const editPostInputTitulo = document.createElement("input")
    editPostInputTitulo.setAttribute("name", "edit-titulo-post")
    editPostInputTitulo.setAttribute("id", "edit-titulo-post")
    editPostInputTitulo.setAttribute("class", "edit-titulo-post")
    editPostInputTitulo.setAttribute("placeholder", "Digite seu título")
    //input autor
    const editPostInputAutor = document.createElement("input")
    editPostInputAutor.setAttribute("name", "edit-autor-post")
    editPostInputAutor.setAttribute("id", "edit-autor-post")
    editPostInputAutor.setAttribute("class", "edit-autor-post")
    editPostInputAutor.setAttribute("placeholder", "Digite o autor")
    //input data + formatacao de data
    const editPostInputData = document.createElement("input")     
    const dataAtual = new Date()     
    editPostInputData.value = dataAtual.getDay() +"/"+
    +(1+dataAtual.getMonth())+"/"
    +dataAtual.getFullYear()
    editPostInputData.setAttribute("name", "edit-data-post")
    editPostInputData.setAttribute("id", "edit-data-post")
    editPostInputData.setAttribute("class", "edit-data-post")
    editPostInputData.setAttribute("placeholder", "Digite a data")
    editPostInputData.setAttribute("disabled", "")

    //input cnoteudo
    const editPostTextareaConteudo = document.createElement("textarea")
    editPostTextareaConteudo.setAttribute("name", "edit-conteudo-post")
    editPostTextareaConteudo.setAttribute("id", "edit-conteudo-post")
    editPostTextareaConteudo.setAttribute("class", "edit-conteudo-post")
    editPostTextareaConteudo.setAttribute("placeholder", "Digite seu conteudo")  
    
    //input id
    const editPostId = document.createElement("input")
    editPostId.setAttribute("name", "edit-id-post")
    editPostId.setAttribute("id", "edit-id-post")
    editPostId.setAttribute("class", "edit-id-post")     
    editPostId.setAttribute("disabled", "")

    //botao enviar
    const botaoEditar = document.createElement("button")
    botaoEditar.setAttribute("id","edit-botao-editar")
    botaoEditar.setAttribute("class","edit-botao-editar")
    botaoEditar.textContent = "Editar dados"
    //appends
    divForm.appendChild(editPostInputTitulo)
    divForm.appendChild(editPostInputAutor)
    divForm.appendChild(editPostInputData)
    divForm.appendChild(editPostTextareaConteudo)
    divForm.appendChild(editPostId)
    divForm.appendChild(botaoEditar)
    ePost.appendChild(divForm)

    // fim formulario
    return ePost
}

export {editarPost}