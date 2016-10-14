var iphone6S = new getWarrantyCost("Apple", "gravity", 1999);
var samsungGalaxy = new getWarrantyCost("Samsung", "zloty", 2100);
var onePLusOne = new getWarrantyCost("OnePlus", "srebrny", 1559);

function Phone(brand, color, price) {
  this.brand = brand;
  this.color = color;
  this.price = price;  
}

function getWarrantyCost(brand, color, price, warranty) {
  Phone.call(this, brand, color, price);
  warranty = 0.1 * this.price;
  this.warranty = warranty;
}

getWarrantyCost.prototype.printInfo = function() {
  console.log(`Marka telefonu to ${this.brand}, kolor ${this.color}, kosztuje ${this.price} a przedluzenie gwarancji ${this.warranty}`);
}

iphone6S.printInfo();
samsungGalaxy.printInfo();
onePLusOne.printInfo();