var iphone6S = new Phone("Apple", "gravity", "1999pln");
var samsungGalaxy = new Phone("Samsung", "zloty", "2100pln");
var onePLusOne = new Phone("OnePlus", "srebrny", "1559pln");

function Phone(brand, color, price){
  this.brand = brand;
  this.color = color;
  this.price = price;  
}

Phone.prototype.propertyInfo = function() {
  console.log(`Marka telefonu to ${this.brand}, kolor ${this.color}, kosztuje ${this.price}.`)
}

iphone6S.propertyInfo();
samsungGalaxy.propertyInfo();
onePLusOne.propertyInfo();