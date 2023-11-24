const  footer = () => {     
    
    //container principal header
    const footer = document.createElement("div")
    footer.setAttribute("id","footer")  
    footer.setAttribute("class","footer")  
     
    const pFooter = document.createElement("p")
    pFooter.innerText = "Projeto de programação com scripts"
    pFooter.setAttribute("id","paragrafo-footer")
    pFooter.setAttribute("class","paragrafo-footer")
    
    //appends 
    footer.appendChild(pFooter)
    return footer
}

export {footer}