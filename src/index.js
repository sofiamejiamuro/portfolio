const menuAppear = () => {
    console.log('menu');
    document.getElementById("arrow").style.display = "none"; 
    document.getElementById("navbarList").style.display = "flex"; 
}

const changeNav  = () => {
    document.getElementById("projects").style.display = "none"; 
    document.getElementById("contact").style.display = "block"; 
}


const changeNav2  = () => {
    document.getElementById("contact").style.display = "none"; 
    document.getElementById("projects").style.display = "block"; 
}