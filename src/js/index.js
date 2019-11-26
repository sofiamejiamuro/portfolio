 let close = document.getElementById('close');
let boutSelf = document.getElementById('selfAbout');

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
let menuProyectos = document.getElementById('proyectos');


let buttonClose  = (e)=> {
		nav[0].classList.toggle('class_toapearmenu');
		nav[0].classList.toggle('class_todisapearmenu');
	}








/*Interactividad boton proyectos de circle menu*/


let createSlider = json =>{


		let slider_container = document.createElement('div'),
			frame_container  = document.createElement('div'),
			pleft 			 = document.createElement('a'),
			prigth 			 = document.createElement('a'),
			div_menorque	 = document.createElement('div'),
			div_mayorque	 =document.createElement('div');

			slider_container.setAttribute('class', 'slider_container');
			frame_container.setAttribute('id', 'frame_container');
			div_mayorque.setAttribute('id', 'prigth');
			div_menorque.setAttribute('id', 'pleft');
			pleft.setAttribute('class', 'pleft');
			prigth.setAttribute('class', 'prigth');


		let pcontentl = document.createTextNode('<'),
			pcontentr = document.createTextNode('>');


			pleft.appendChild(pcontentl);
			prigth.appendChild(pcontentr);

			let imagenes = json[0].image;
			for (let i = 0; i < imagenes.length; i++) {
				var image=document.createElement('img');
					image.setAttribute('src', imagenes[i]);
					image.setAttribute('class','image_slider');
					frame_container.appendChild(image);

			};

			let sectionJson = document.getElementById(json[0].id);

				div_mayorque.appendChild(prigth);
				div_menorque.appendChild(pleft);
				slider_container.appendChild(frame_container);
				slider_container.appendChild(div_mayorque);
				slider_container.appendChild(div_menorque);
				sectionJson.appendChild(slider_container);

			let frame_containerX = document.getElementById('frame_container');
			let image_slider = document.getElementsByClassName('image_slider');
				frame_containerX.style.width = imagenes.length * 70 + 'vw';
				let measuerFrame = 100/imagenes.length;
				for (var i = 0; i < image_slider.length; i++) {
					image_slider[i].style.width = measuerFrame + '%';
				};


			let boton_r = document.querySelector('#prigth');
			let boton_l = document.querySelector('#pleft');
			let conunter = 1;



			let moves = () =>{


				let counter = 0;

				boton_r.addEventListener('click', e => {
				frame_containerX.style.transition = 'transform 0.3s ease-out';
					counter++
							if (counter>=imagenes.length){
								counter = imagenes.length-1;
							}
				frame_containerX.style.transform = 'translate(-' +counter* measuerFrame +'%)'
				})


				boton_l.addEventListener('click', e => {
				frame_containerX.style.transition = 'transform 0.3s ease-out';
					counter--;

							if (counter<=0){
								counter = 0;
							}
				frame_containerX.style.transform = 'translate(-' +counter* measuerFrame +'%)'
				})
			

				frame_containerX.addEventListener('transitionend',(e)=>{

				})


			}



			




			moves();
}

let ul = document.getElementsByClassName('navigation');
let contacto = document.getElementById('contacto');


let createSections = (json)=>{
	let section = document.createElement('section'),
		h1		= document.createElement('h1'),
		p 		= document.createElement('p'),
		button_1= document.createElement('button'),
		button_2= document.createElement('button'),
		i 		= document.createElement('i'),
		a 		= document.createElement('a'),

		contenth1 		= document.createTextNode(json[0].titulo),
		contentp 		=document.createTextNode(json[0].description),
		content_btn1	=document.createTextNode(json[0].copy_1),
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
	section.setAttribute('id',json[0].id+'_' )
	let form = document.createElement('form');
	let h1 = document.createElement('h1');
	let textarea = document.createElement('textarea');

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


	};

	form.setAttribute('name', 'formulario');
	form.setAttribute('method','POST');
	form.setAttribute('action', 'src/php/enviamail.php');
			inputs[0].setAttribute('name', 'nombre');
			inputs[1].setAttribute('name', 'correo');
			inputs[2].setAttribute('name', 'mensaje');
			inputs[3].setAttribute('name','submit')
			let labelscontentnombre = document.createTextNode(json[0].label1);
			let labelscontentcorreo = document.createTextNode(json[0].label2);
			let contenttextarea	= document.createTextNode(json[0].label3);

				labels[0].appendChild(labelscontentnombre);
				labels[1].appendChild(labelscontentcorreo);
				labels[2].appendChild(contenttextarea);
				section.appendChild(h1)
				form.appendChild(labels[0]);
				form.appendChild(inputs[0]);
				form.appendChild(labels[1]);
				form.appendChild(inputs[1]);
				form.appendChild(labels[2]);
				form.appendChild(inputs[2]);
				form.appendChild(inputs[3]);
				section.appendChild(form);
				document.body.appendChild(section);
				 		close.style.opacity = '1';


}










/*_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

contacto

_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_*/

























let contentsCall = (e) =>{
	let route = "assets/json/"+e.target.id+".json";
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

contacto.addEventListener('mousedown',(e)=>{
	

	if(document.getElementById('contacto_')){
		let sectionremove =document.getElementsByTagName('section');
		for (let i = 0; i < sectionremove.length; i++) {
			sectionremove[i+1].remove()
			close.style.opacity = '0';
		};

	}else{
		contentsCall(e);
	}

	
})




let closeSection = (e)=>{
	

	let sectionremove =document.getElementsByTagName('section');


		if (e.target.id =='selfAbout' && nav[0].classList[0] !== 'class_todisapearmenu') {
						 buttonClose(e)
			for (let i = 0; i < sectionremove.length; i++) {
				sectionremove[i+1].remove()
				close.style.opacity = '0';
				}
		}else if(e.target.id == 'close') {
			for (var i = sectionremove.length; i >1; i--) {
				sectionremove[i-1].remove()
				}
				close.style.opacity = '0';
			}else{
				for (var i = sectionremove.length; i >1; i--) {
				sectionremove[i-1].remove()
								close.style.opacity = '0';

				}
			}


}

menuProyectos.addEventListener('mousedown',buttonClose);

selfAbout.addEventListener('mousedown', closeSection)

close.addEventListener('mousedown', closeSection)

























