var template=document.getElementsByClassName('template')[0].innerHTML;
var compiled =_.template(template);
var parent=document.getElementsByClassName('content')[0];
var items= new Items(catalog);
items.setNumberOfItems(4,3,2);
items.sortDate();
items.filterByCategory('category','women');
items.filterByCategory('fashion','Casual style');
parent.innerHTML=(compiled(items));
//Slider
var sliderBlock=document.getElementsByClassName('slider');
bindFunk(leftSlider,'leftArrow');
bindFunk(rightSlider,'rightArrow');
currentImg=1;
function restartInterval(){
	clearInterval(interval);
	interval=setInterval(toRightChange, 10000);
	for(let i=0; i<sliderBlock.length; i++){
		var elm = sliderBlock[i];
		var newone = elm.cloneNode(true);
		elm.parentNode.replaceChild(newone, elm);
	}
	 bindFunk(leftSlider,'leftArrow');
	 bindFunk(rightSlider,'rightArrow');
}
function leftSlider(){
	toLeftChange();
	restartInterval();
}
function rightSlider(){
	toRightChange();
	restartInterval();
}
function changeSliderImg(){
let size='';
let href='';
var dots=document.querySelectorAll('[class^=state');
for(let j=0; j<dots.length; j++){
dots[j].style.backgroundColor='grey';
}	
for(var i=0; i<sliderBlock.length; i++){
	switch(sliderBlock[i].classList[1]){
		case 'small':
		size='S';
		break;
		case 'large':
		size='L';
		break;
		case 'middle':
		size='M';
		break;
	}
	switch(currentImg){
		case 1:
		href='2.html';
		break;
		case 2:
		href='3.html';
		break;
		case 3:
		href='2.html';
		break;
	}
//console.log(dots[currentImg+sliderBlock.length*i-1]);
dots[currentImg-1].style.backgroundColor='red';
sliderBlock[i].style.backgroundImage="url(\'images/"+currentImg+size+".jpg\')";
sliderBlock[i].getElementsByTagName('a')[0].href=href;
}
}
function toRightChange(){
currentImg++;
if(currentImg==4)
currentImg=1;
changeSliderImg();
}
function toLeftChange(){
currentImg--;
if(currentImg==0)
currentImg=3;
changeSliderImg();
}
var interval=setInterval(toRightChange, 10000);
var Cont_of_dots=document.getElementsByClassName('bottom_of_Slider');
for(var i=0; i<Cont_of_dots.length; i++){
	Cont_of_dots[i].addEventListener('click',toImg);
}
function toImg(e){
let elem= e.target.closest('[class^=state]');
if(elem){
elem.style.backgroundColor="red";
currentImg=+elem.classList[0].replace(/\D/g,'');
changeSliderImg();
restartInterval();
}
}
priceOfGoods();
