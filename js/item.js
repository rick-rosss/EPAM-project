var template=document.getElementsByClassName('template')[0].innerHTML;
var compiled =_.template(template);
var parent=document.getElementsByClassName('wrap')[0];
var items= new Items(catalog);
parent.innerHTML=(compiled(items));
var param=document.getElementsByClassName('param');
for(let i=0; i<param.length; i++)
param[i].addEventListener('click', chooseElem);
//var prevElem;
var currentSize="";
var currentColor="";
function chooseElem(e){
	var elem=e.target.closest('.paramItem');
	if(elem){
		var items=elem.closest('.param').getElementsByClassName('paramItem');
		if(elem.closest('.param').getElementsByClassName('categoryName')[0].innerText=='Size')
			currentSize=elem.innerText;
		if(elem.closest('.param').getElementsByClassName('categoryName')[0].innerText=='Color')
			currentColor=elem.innerText;
		for(let i=0; i<items.length; i++){
			items[i].style.border='none';
		}
		elem.style.border='1px solid gray';
	}
}
var thumbnails=document.getElementsByClassName('thumbnails')[0];
thumbnails.addEventListener('click', switcher);
function switcher(e){
	var elem=e.target.closest("[class*=img]");
	if(elem){
		var full=document.getElementsByClassName('full')[0];
		var num=elem.classList[1].replace(/\D/g, '');
		for(let i=0; i<thumbnails.children.length; i++)
			for(let j=0; j<full.classList.length; j++){
				if(full.classList[j].replace(/\d/g, '')=='background')
				full.classList.remove(full.classList[j]);
			}
		full.classList.add('background'+ num);
		var allActives=thumbnails.getElementsByClassName('active');
		for(let i=0; i<allActives.length; i++)
			allActives[i].style.display='none';
		var active=elem.getElementsByClassName('active')[0];
		toggle(active);
	}
}
var but=document.getElementsByClassName('button');
for(let i=0;i<but.length;i++)
	but[i].addEventListener('click', buyItem);
function buyItem(){
if(!currentSize){
	alert('Select size');
	return;
}
if(!currentColor){
	alert('Choose color');
	return;
}
var masForLS;
var nameOfItem=document.getElementById('nameOfItem');
masForLS=getMasFromLS();
catalog.forEach(function(item){
	if(item.title==nameOfItem.innerText){
		item.color=currentColor;
		item.size=currentSize;
		masForLS.push(item);
	}
});
localStorage.setItem('mas',JSON.stringify(masForLS));
priceOfGoods();
numOfGoods();
}
priceOfGoods();
