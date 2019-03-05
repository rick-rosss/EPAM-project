var menuList=document.getElementsByClassName('menuList')[0];
menuList.addEventListener('click', changeColor);
//for closest
if (!Element.prototype.matches)
    Element.prototype.matches = Element.prototype.msMatchesSelector || 
                                Element.prototype.webkitMatchesSelector;

if (!Element.prototype.closest)
    Element.prototype.closest = function(s) {
        var el = this;
        if (!document.documentElement.contains(el)) return null;
        do {
            if (el.matches(s)) return el;
            el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1); 
        return null;
    };

function changeColor(e){
var elem=e.target.closest('.menuItem');
if(elem){
let menuItems=menuList.getElementsByClassName('menuItem');
for(let i=0; i<menuItems.length; i++){
	menuItems[i].style.color='';
}
	elem.style.color='red';
}
}
function toggle(item){
	if(item.style.display=="" || item.style.display=="none"){
		item.style.display="block";
	}
	else{
		item.style.display="none";
	}
}
var body=document.getElementsByTagName('body')[0];
function priceOfGoods(){
	var mas=getMasFromLS();
	var totalPrice=document.getElementsByClassName('totalPrice')[0];
	var price=0;
	  var num=document.getElementsByClassName('priceOfItems');
	  for(let i=0; i<mas.length; i++){
	  	price+=mas[i].discountedPrice;
	  }
	  for(let i=0; i<num.length; i++)
	  	 num[i].innerText="Bag "+'£'+price.toFixed(2)+' ('+numOfGoods()+')';
	  if(totalPrice)
		totalPrice.innerText='£'+price.toFixed(2);
}
function numOfGoods(){
    var mas=getMasFromLS();
  	return mas.length;
}
function getMasFromLS(){
	if(localStorage.getItem('mas'))
		var mas=JSON.parse(localStorage.getItem('mas'));
	else mas=[];
		return mas;
}
var menu=document.getElementsByClassName('menu')[0];
menu.addEventListener('click', showMenu);
function showMenu(e){
var menuList=document.getElementsByClassName('menuList')[0];
if(e.target==menu){
toggle(menuList);
if(body.style.overflowY=='' || body.style.overflowY=='auto'){
body.style.overflowY='hidden';
menu.innerText=	'✖';
menu.style.color='red';
}
else{
menu.innerText=	'☰';
menu.style.color='';
body.style.overflowY='auto';
}
}
}
function fixHeader(){
	let header=document.getElementsByTagName('header')[0];
	if(header.style.position=="static" || header.style.position==""){
		header.style.position="fixed";
	}
	else{
		header.style.position="static";
	}
}
priceOfGoods();
var icon=document.getElementsByClassName('icon')[0];
icon.addEventListener('click', toggleSearchFild);
function toggleSearchFild(){
	var sF=document.getElementsByClassName('searchFild')[0];
	toggle(sF);
}
function bindFunk(func,clas){
var elem=document.getElementsByClassName(clas);
for(let i=0; i<elem.length; i++){
elem[i].addEventListener('click',func);
}
}

