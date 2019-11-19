 let close = document.getElementById('close');
		close.style.opacity = '0';





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

let nav = document.getElementsByTagName('nav');
let linkPandemonium = document.getElementById('linkPandemonium');

linkPandemonium.addEventListener('mousedown',(e)=> {
	nav[0].classList.toggle('class_todisapearmenu');
	nav[0].classList.toggle('class_toapearmenu');
	}
);
/*Interactividad boton proyectos de circle menu*/



let createSlider = json =>{


		let slider_container = document.createElement('div'),
			frame_container  = document.createElement('div'),
			pleft 			 = document.createElement('p'),
			prigth 			 = document.createElement('p');

			slider_container.setAttribute('class', 'slider_container');
			frame_container.setAttribute('class', 'frame_container');
			pleft.setAttribute('class', 'pleft');
			prigth.setAttribute('class', 'prigth');


			pcontentl = document.createTextNode('<');
			pcontentr = document.createTextNode('>');


			pleft.appendChild(pcontentl);
			prigth.appendChild(pcontentr);
		
			let imagenes = json[0].image;
			for (let i = 0; i < imagenes.length; i++) {
				let image=document.createElement('img') ;
					image.setAttribute('src', imagenes[i]);
					image.setAttribute('class','image-slider');
					frame_container.appendChild(image);

			};

			
			let sectionJson = document.getElementById(json[0].id);


			slider_container.appendChild(frame_container);
			slider_container.appendChild(pleft);
			slider_container.appendChild(prigth);
			sectionJson.appendChild(slider_container);

	frame_container.style.width = imagenes.length * 100 + "%";
	let posx = document.getElementsByClassName('frame_container');
	console.log(posx[0].style.left);


pleft.onclick = function(){
		posx[0].style.transform = 'translateX(' + 100 +'%)'
		
}

prigth.onclick = function(){


	console.log(frame_container.style.width);
}


}



let ul = document.getElementsByClassName('navigation');

let createSections = (json)=>{
	let section = document.createElement('section'),
		h1		= document.createElement('h1'),
		p 		= document.createElement('p'),
		button_1= document.createElement('button'),
		button_2= document.createElement('button'),
		i 		= document.createElement('i')
		a 		= document.createElement('a');

		contenth1 		= document.createTextNode(json[0].titulo);
		contentp 		=document.createTextNode(json[0].description);
		content_btn1	=document.createTextNode(json[0].copy_1);
		a_content 		=document.createTextNode(json[0].copy_2);
			section.setAttribute('id',json[0].id );
			button_1.setAttribute('type', json[0].type);
			i.setAttribute('class', 'fa fa-hotdog');
			a.setAttribute('href', json[0].href );
			a.appendChild(a_content);
			button_2.appendChild(a);
			h1.appendChild(contenth1);
			p.appendChild(contentp)
			button_1.appendChild(content_btn1);
			button_1.appendChild(i)
 		section.appendChild(h1)
 		section.appendChild(p);
 		section.appendChild(button_1);
 		section.appendChild(button_2)
 		document.body.appendChild(section);


 		close.style.opacity = '1';


 		createSlider(json);
}
let createContact = (json)=>{
let labels = [];
let inputs = []
	let section = document.createElement('section');
	section.setAttribute('id',json[0].id )
	let form = document.createElement('form');
	let h1 = document.createElement('h1');

		let contenth1= document.createTextNode(json[0].titulo);
		h1.appendChild(contenth1);
	for (let i = 0; i < 4; i++) {
		let label= document.createElement('label');
		let input = document.createElement('input');
			labels.push(label);
			inputs.push(input);
				if(i % 2 == 0){
					inputs[i].setAttribute('type',json[0].type);
				}else if(i!==3){
					inputs[i].setAttribute('type', json[0].type2);
				}else{
					inputs[i].setAttribute('type', json[0].type3);
					inputs[i].setAttribute('value', 'ENVIAR');
				}
				labelscontentnombre = document.createTextNode(json[0].label1);
				labelscontentcorreo = document.createTextNode(json[0].label2);
				labelscontentcopy= document.createTextNode(json[0].label3)
	};
			contentlabel0 = document.createTextNode(json[0].label1);
			contentlabel1 = document.createTextNode(json[0].label2);
			contetlabel2  = document.createTextNode(json[0].label3);
				labels[0].appendChild(labelscontentnombre);
				labels[1].appendChild(labelscontentcorreo);
				labels[2].appendChild(labelscontentcopy);
				section.appendChild(h1)
				form.appendChild(labels[0]);
				form.appendChild(inputs[0]);
				form.appendChild(labels[1]);
				form.appendChild(inputs[1]);
				form.appendChild(labels[2])
				form.appendChild(inputs[2])
				form.appendChild(inputs[3])
				section.appendChild(form);
				document.body.appendChild(section);
}
let contentsCall = (e) =>{
	let route = "./../../assets/json/"+e.target.id+".json";
		fetch(route)
		  .then(function(response) {
		    return response.json();
		  })
		  .then(function(json) {

		  		if(e.target.id != "contacto"){
				  createSections(json);
		  		}else{
		  			createContact(json);
		  		}
		})
}
for(let i = 0; i < ul.length; i++) {
	ul[i].addEventListener('mousedown', (e)=>{
		contentsCall(e)
	})
};





close.addEventListener('mousedown', (e)=>{

	let sectionremove =document.getElementsByTagName('section');



	for (let i = 0; i < sectionremove.length; i++) {
		sectionremove[i+1].remove()
		close.style.opacity = '0';
	};
})