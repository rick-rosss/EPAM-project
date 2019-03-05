//localStorage.setItem('mas',JSON.stringify([]));
var template=document.getElementsByClassName('template')[0].innerHTML;
var compiled =_.template(template);
var parent=document.getElementsByClassName('container')[0];
var masForLS=getMasFromLS();
function render(mas){
var items= new Items(mas);
items.quantity();
parent.innerHTML=(compiled(items));	
}
render(masForLS);
var empty=document.getElementById('empty');
empty.addEventListener('click', funcEmpty);
var buy=document.getElementsByClassName('butBuy');
buy[0].addEventListener('click', funcBuy);
function funcBuy(){
	emptyBag("Thank you for your purchase");
}
function funcEmpty(){
	emptyBag("Your shopping bag is empty. Use Catalog to add new items");
}
function emptyBag(string){
	if(getMasFromLS().length!=0){
	localStorage.setItem('mas',JSON.stringify([]));
	priceOfGoods();
	numOfGoods();
	var templ=document.getElementsByClassName('template1')[0].innerHTML;
	var comp =_.template(templ);
	var obj={};
	obj.string=string
	parent.innerHTML=(comp(obj));
}
}
if(getMasFromLS().length!=0){
bindFunk(removeItem, 'remove');
}
function removeItem(){
	var obj={};
	getParams(event, obj);
	var mas=getMasFromLS();
	for(let i=0; i<mas.length; i){
		if(mas[i].title==obj.name && mas[i].size==obj.size && mas[i].color==obj.color)
			mas.splice(i,1);
		else
			i++;
}
	Update(mas);
}
priceOfGoods();
bindFunk(plusItem,'plus');
bindFunk(minusItem, 'minus');
function plusItem(event){
	var obj={};
	getParams(event, obj);
	var mas=getMasFromLS();
	for(let i=0; i<mas.length; i++){
		if(mas[i].title==obj.name && mas[i].size==obj.size && mas[i].color==obj.color){
		mas.push(mas[i]);
		break;
	}
	};
	Update(mas);
}
function Update(mas){
	localStorage.setItem('mas',JSON.stringify(mas));
	priceOfGoods();
	render(mas);
	bindFunk(plusItem,'plus');
	bindFunk(minusItem,'minus');
	bindFunk(removeItem, 'remove');
}
function getParams(event, ob){
	ob.name=event.target.closest('.prod').getElementsByClassName('prodName')[0].innerText;
	ob.size=event.target.closest('.prod').getElementsByClassName('prodSize')[0].innerText.split(': ')[1];
	ob.color=event.target.closest('.prod').getElementsByClassName('prodColor')[0].innerText.split(': ')[1];
}
function minusItem(event){
	var obj={};
	getParams(event, obj);
	var mas=getMasFromLS();
	for(let i=0; i<mas.length; i++){
		if(mas[i].title==obj.name && mas[i].size==obj.size && mas[i].color==obj.color){
		mas.splice(i,1);
		break;
	}
	}
	Update(mas);
}