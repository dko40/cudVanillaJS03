const  navegacaoLinks = () => {     
    
    //container principal header
    const ulLinks = document.createElement("ul")
    ulLinks.setAttribute("id","ul-navegacao")
    ulLinks.setAttribute("class","ul-navegacao")  
    
    //li navegacao
    const li1 = document.createElement("li")
    li1.setAttribute("id","dli1")    
    
    /* const li2 = document.createElement("li")
    li2.setAttribute("id","dli2")     */
    
    const li3 = document.createElement("li")
    li3.setAttribute("id","dli3")    
    
    //a navegacao
    const aHome = document.createElement("a")
    aHome.setAttribute("class","home")
    aHome.setAttribute("id","nHome")
    aHome.setAttribute("href","#")
    aHome.innerText = "Home"


    //links dos posts

    const aEditarPosts = document.createElement("a")
    aEditarPosts.setAttribute("class","editarPost")
    aEditarPosts.setAttribute("id","nEditarPost")
    aEditarPosts.setAttribute("href","#")
    aEditarPosts.innerText = "Editar posts"

    const aCadastrarPosts = document.createElement("a")
    aCadastrarPosts.setAttribute("class","cadastrarPost")
    aCadastrarPosts.setAttribute("id","nCadastrarPost")
    aCadastrarPosts.setAttribute("href","#")
    aCadastrarPosts.innerText = "Cadastrar posts"
    
    //append child li->a
    li1.appendChild(aHome)
   /*  li2.appendChild(aEditarPosts) */
    li3.appendChild(aCadastrarPosts)

    //append child ul->li
    ulLinks.appendChild(li1)
   /*  ulLinks.appendChild(li2) */
    ulLinks.appendChild(li3)

    //retorno navegacao
    return ulLinks
}

export {navegacaoLinks}