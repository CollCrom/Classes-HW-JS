class Pet {
	constructor(name){
		this.name = name;
		this.owner = ''
	}
	setOwner(owner) {
		this.owner = owner;
	}
}

class Dog extends Pet {
	constructor(name, price){
		super(name);
		this.price = price;
	}
	bark() {
		console.log('bark');
	}
	chaseTail() {
		console.log('oh boy oh boy oh boy');
	}
	getPrice() {
		return this.price;
	}
}

const sparky = new Dog('sparky', 10);

class Cat extends Pet {
	constructor(name, price){
		super(name);
		this.price = price;
	}
	purr() {
		console.log('purrr');
	}
	clean() {
		console.log('cleaning');
	}
	getPrice(){
		return this.price;
	}
}

const sprinkles = new Cat('sprinkles', 100);

