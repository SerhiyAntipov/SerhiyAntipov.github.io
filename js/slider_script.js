let sliderPage = document.getElementsByClassName('sliderPage');
let slider = document.querySelector('.slider');
let centerSlider = Math.floor(sliderPage.length/2);
let numClick = centerSlider;
let arrSlider = Array.from(sliderPage);//створюємо масив з псевдомасива 


let slider_wrapp = document.querySelector('#slider_wrapp');

window.onresize = resizeSlider;

resizeSlider();
function resizeSlider(){
    let slider_wrapp = document.querySelector('#slider_wrapp');
    slider_width = slider_wrapp.offsetWidth;
    slider_wrapp.style.height = slider_wrapp.offsetWidth/3 + "px";
}


for(let i = 0; i< arrSlider.length; i++){
		arrSlider[i].setAttribute('position', i);
	}

slider.onclick = function fSlider(event){	
	if (event.target.className == "sliderPage"){  //перевіряємо чи клік по картинці
		event.target.setAttribute('slide','click'); //присвоюємо атрибут для відслідковування 
		for(let i = 0; i< sliderPage.length; i++){ //шукаємо в масиві порядковий номер з атрибутом 'position','1'
			if(sliderPage[i].getAttribute('slide') ==  'click'){
				numClick = i;
				sliderPage[i].removeAttribute('slide');
			}
		}
	}
	render()
}

function render(){
	if(numClick < centerSlider ){
			for(let i = 0; i< (centerSlider - numClick); i++ ){
				arrSlider.unshift(arrSlider.pop());
			}
		}
		else if(numClick > centerSlider){
			for(let i = 0; i< (numClick - centerSlider); i++ ){
				arrSlider.push(arrSlider.shift());
			}
		}
		centerSlider = numClick;
		
	for(let i = 0; i< arrSlider.length; i++){
		arrSlider[i].setAttribute('position', i);
	}
	unHideLinks()
}

autoSlide ()

function autoSlide (){
	render();
	numClick == numClick++;
	if(numClick > arrSlider.length -1) numClick = 0;
 	setTimeout(autoSlide, 3000);
}

function unHideLinks(){
	for(let i = 0; i< arrSlider.length; i++ ){
	sliderPage[i].children[0].style.display = 'none';
	}
	sliderPage[numClick].children[0].style.display = 'inline-block';
}
