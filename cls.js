// "use strict";

class Car{
	constructor(brand){
		this.carname = brand;
	}
	print(){
		return 'I drive '+this.carname
	}
}

class Model extends Car{
	constructor(brand, model){
		super(brand);
		this.model = model
	}
	printOut(){
		return 'I drive '+ this.carname + " "+this.model
	}
}
var mycar;

mycar = new Model("volvo", 504)
console.log(mycar.printOut())


//arrow function
const x = (a, b) => a * b;
const y = (c, d) => { return c * d };
console.log(x(5,6))


