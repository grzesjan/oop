var iphone = new Phone("apple", "gold", 2999);
var galaxy = new Phone("samsung", "silver", 3900);
var zuk = new Phone("lenovo", "black", 1999);

function Phone(brand, color, price) {
  this.brand = brand;
  this.color = color;
  this.price = price;  
  //this.getWarrantyCost = 0.1 * this.price;
  //this.getWarrantyCost = function() {
  //  return 0.1 * this.price;
  //}
}

Phone.prototype.getWarrantyCost = function() {
  return 0.1 * this.price;
}

Phone.prototype.printInfo = function() {
  console.log(`Marka telefonu ${this.brand}, kolor ${this.color}, cena ${this.price}, gwarancja ${this.getWarrantyCost()}`);
}

iphone.printInfo();
galaxy.printInfo();
zuk.printInfo();

