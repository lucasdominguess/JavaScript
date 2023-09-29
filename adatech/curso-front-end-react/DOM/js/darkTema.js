//Dark tema de um jeito simplificado 
let darkTheme;
window.onload = () => { 
    const isDarkthemeStorage = localStorage.getItem("IsDarkTheme"); 

    darkTheme = isDarkthemeStorage=== "true" ; 
    const body = document.querySelector("body") ; 

    if (darkTheme) { 
        body.style.backgroundColor = "black";
        body.style.color = "white" ; 
    }else { 
        body.style.backgroundColor = "white"
        body.style.color = "black"
    }
};
themebutton.addEventlistener("click" , () => { 
    darkTheme=!darkTheme; //mudando o valor true para false ou vice versa

    localStorage.setItem('isDarkTheme' , darkTheme);

    const body = document.querySelector("body") ; 

    if (darkTheme) { //se for true
        body.style.backgroundColor = "black";
        body.style.color = "white" ; 
    }else { 
        body.style.backgroundColor = "white"
        body.style.color = "black"
    }
    

} );