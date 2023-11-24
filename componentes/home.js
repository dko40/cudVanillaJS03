 const  pageHome = () => {     
    
    //container principal header
    const home = document.createElement("div")
    home.setAttribute("id","page-home")  
    home.setAttribute("class","page") 
    home.setAttribute("style","display:block;")   
    
    const titleHomeText = document.createElement("h4")
    titleHomeText.innerText = "HOME"
    titleHomeText.setAttribute("class","titleHomeText")
    home.appendChild(titleHomeText)

    
    return home
}

export {pageHome}