const menuAppear = () => {
    console.log('menu');
    document.getElementById("arrow").style.display = "none"; 
    document.getElementById("navbarList").style.display = "flex"; 
}

const floatButton = document.getElementById('float-button'),
circularMenu = document.getElementById('circular-menu');
      
floatButton.addEventListener('click', (e) => {
  floatButton.classList.toggle('pulsed');
  circularMenu.classList.toggle('expand');
}) 


 




 



/*Interactividad boton proyectos de circle menu*/
var nav = document.getElementsByTagName('nav');
var linkPandemonium = document.getElementById('linkPandemonium');




linkPandemonium.addEventListener('mousedown',(e)=> {
	nav[0].classList.toggle('class_todisapearmenu');
	nav[0].classList.toggle('class_toapearmenu');
	}
);
/*Interactividad boton proyectos de circle menu*/


var ul = document.getElementsByClassName('navigation');






let createSections = (json)=>{
	console.log(json[0].titulo);




	let section = document.createElement('section'),
		h1		= document.createElement('h1'),
		p 		= document.createElement('p'),
		button_1= document.createElement('button'),
		button_2= document.createElement('button');


		contenth1 		= document.createTextNode(json[0].titulo);
		contentp 		=document.createTextNode(json[0].description);
		content_btn1	=document.createTextNode(json[0].copy_1);
		content_btn2 	=document.createTextNode(json[0].copy_2);



					section.setAttribute('id',json[0].id )
			
			h1.appendChild(contenth1);
			p.appendChild(contentp)
			button_1.appendChild(content_btn1);
			button_2.appendChild(content_btn2);

 		section.appendChild(h1);
 		section.appendChild(p);
 		document.body.appendChild(section);
}





let contentsCall = (e) =>{

	var route = "../../assets/json/"+e.target.id+".json";

		fetch(route)
		  .then(function(response) {
		    return response.json();
		  })
		  .then(function(json) {


				  createSections(json);
		})
}







 
for(var i = 0; i < ul.length; i++) {
	ul[i].addEventListener('mousedown', (e)=>{
		contentsCall(e)
	})
};











