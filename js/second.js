var template=document.getElementsByClassName('template')[0].innerHTML;
var compiled =_.template(template);
var parent=document.getElementsByClassName('content')[0];
var items= new Items(catalog);
items.setNumberOfItems(12,12,8);
items.sortDate();
items.addDiscountPercent();
items.filterByCategory('category','women');
items.filterByCategory('fashion','Casual style');
parent.innerHTML=(compiled(items));
//dropdownList
var filtUL=document.getElementsByClassName('filtUL');
filtUL[0].addEventListener('click', toggleList);
var prewItem;
function toggleList(event){
var dropList=document.getElementsByClassName('dropList');
var elem=event.target.closest('.filtItem');
var item=elem.getElementsByClassName('dropList');
if(prewItem && prewItem!=item[0]){
prewItem.style.display="none";
}
if(elem && item[0])
toggle(item[0]);
prewItem=item[0];
}
var dropList=document.getElementsByClassName('dropList');
for(let i=0; i<dropList.length; i++){
dropList[i].addEventListener('click',selectItem);
}
let filtList=document.getElementsByClassName('filtList');
for(let i=0; i<filtList.length; i++){
	filtList[i].addEventListener('click', getName);
}
function selectItem(e){
	if(e.target.closest('p')){
	if(e.target.closest('.disabled'))
		return;
	var filtItem=e.target.closest('.filtItem');
	addNametoList(e.target.innerText, filtItem.getElementsByTagName('span')[0].innerText);
	addNameToString(e.target.innerText, filtItem.getElementsByTagName('span')[0].innerText);
}
}
function addNametoList(name, nameOfCategory){
	var filtItems=document.getElementsByClassName('filtUL')[0].getElementsByClassName('filtItem');
	for(let i=0; i<filtItems.length; i++){
		var item=filtItems[i].getElementsByTagName('span')[0];
		if(item.innerText==nameOfCategory){
			item.classList.add('span_selected');
			var filtItem=filtItems[i];
			filtItem.style.lineHeight='30px';
			filtItem.style.backgroundColor='rgb(247,247,247)';
	}
	}
	var p= filtItem.getElementsByClassName('selected');
	if(p.length!=0){
		p[0].innerText=name;
		return;
	}
	else{
		p=document.createElement('p');
		p.innerText=name;
		p.classList.add('selected');
		filtItem.insertBefore(p,event.target.closest('dropList'));
	}
}
//DropListForTablets
let wrap=document.getElementsByClassName('wrapFilter')[0];
let string=document.getElementsByClassName('string');
for(let i=0; i<string.length;i++)
string[i].addEventListener('click', showFilter);
function showFilter(){
toggle(wrap);
fixHeader();
}
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
function getName(e){
	var elem=e.target.closest('.filtItem');
	if(elem){
	var name=elem.innerText;
	var category=e.target.closest('.filtList');
	var items=category.getElementsByClassName('filtItem');
	for(let i=0; i<items.length; i++){
		items[i].style.color="";
	}
	elem.style.color="red";
	if(category)
	var nameOfCategory=category.getElementsByClassName('nameOfCategory')[0].innerText;
	addNameToString(name,nameOfCategory);
	addNametoList(name, nameOfCategory);
}
}
function addNameToString(name, nameOfCategory){
for(let j=0; j<string.length; j++){
	var num;
	var spans=string[j].getElementsByClassName('nameOfCategory');
	for(let i=0; i<filtList.length; i++){
		if(filtList[i].getElementsByClassName('nameOfCategory')[0].innerText==nameOfCategory)
			num=i;
	}
	if(name=="Not selected"){
	name=nameOfCategory;
	spans[num].innerText=name;
	spans[num].classList.remove('red');
	}
	else{
	spans[num].innerText=name;
	spans[num].classList.add('red');
	}
}
}
