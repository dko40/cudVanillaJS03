const textoLogo = ""
const urlLogo = "assets/img/js-logo.png"


const  containerHeader = () => {     
    
    //container principal header
    const cHead = document.createElement("div")
    cHead.setAttribute("id","header")    
    
    //texto da logo
    const pHead = document.createElement("span")
    pHead.innerText = textoLogo

    //url imagem logo
    const imgHead = document.createElement("img")
    imgHead.setAttribute("src",urlLogo)
    imgHead.setAttribute("width",40)
    imgHead.setAttribute("class","logo-header")
    imgHead.setAttribute("id","logo-header")
    
    //appends
    cHead.appendChild(imgHead) 
    cHead.appendChild(pHead)     

    return cHead
}

export {containerHeader}