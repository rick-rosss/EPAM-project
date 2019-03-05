function Items(mas){
	this.mas=mas;
};
Items.prototype.quantity=function quantity(){
		for(let i=0; i<this.mas.length; i++){
			this.mas[i].totalPrice=this.mas[i].discountedPrice;
			this.mas[i].quantity=1;
			for(let j=i+1; j<this.mas.length; j){
				if(this.mas[i].title==this.mas[j].title && this.mas[i].color==this.mas[j].color && this.mas[i].size==this.mas[j].size){
					this.mas.splice(j,1);
					this.mas[i].quantity+=1;
					this.mas[i].totalPrice+=this.mas[i].discountedPrice;
				}
				else
					j++;
			}
			this.mas[i].discountedPrice=this.mas[i].totalPrice.toFixed(2);
		}
	}
Items.prototype.setNumberOfItems=function setNumberOfItems(desc,table,mob){
		this.num_of_items_large=desc;
		this.num_of_items_middle=table;
		this.num_of_items_small=mob;
	}
Items.prototype.sortDate=	function sortDate(){
		this.mas.sort(function(a,b){
			return new Date(b.dateAdded)-new Date(a.dateAdded);
		});
}
Items.prototype.addDiscountPercent=function addDiscountPercent(){
	this.mas.forEach(function(item){
			if(item.price && item.discountedPrice){
				if(item.price != item.discountedPrice){
					item.discountedPercent=Math.round(100-100*(item.discountedPrice/item.price));
				}
			}
	});
	}
Items.prototype.filterByCategory=function filterByCategory(parameter,value){
		this.mas=this.mas.filter(function(item){
			return item[parameter]==value;
		});
	}