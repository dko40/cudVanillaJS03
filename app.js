import { containerHeader } from "./componentes/header.js";
import {navegacaoLinks} from "./componentes/navLinks.js"
import { pageHome } from "./componentes/home.js";
import { cadastrarPost } from "./componentes/cadastrarPost.js";
import { editarPost } from "./componentes/editarPosts.js";
import { footer } from "./componentes/footer.js";

 function inicializarApp() {
    const main = document.getElementById("main")
    main.appendChild(containerHeader())
    main.appendChild(navegacaoLinks()) 
    main.appendChild(pageHome())  
    main.appendChild(cadastrarPost())  
    main.appendChild(editarPost())   
    main.appendChild(footer()) 
}

export {inicializarApp}