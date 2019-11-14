 const menuAppear = () => {
    console.log('menu');
    document.getElementById("arrow").style.display = "none"; 
    document.getElementById("navbarList").style.display = "flex"; 
}

const floatButton = document.getElementById('float-button'),
circularMenu = document.getElementById('circular-menu');
      
floatButton.addEventListener('click', () => {
  floatButton.classList.toggle('pulsed');
  circularMenu.classList.toggle('expand');
}) 


 