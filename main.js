/*
class Subject {
	constructor() {
		this.observers = [];
	}
	addObserver(observer) {
		this.observers.push(observer);
	}
	removeObserver(observer) {
		const index = this.observers.indexOf(observer);
		if(index > -1) {
			this.observers.splice(index, 1);
		}
	}
	notifyObservers() {
		for(let observer of this.observers) {
			observer.update();
		}
	}
}

class Observer {
	update() {
		console.log('it works!');
	}
}

let subject = new Subject();

let kim = new Observer();
let jim = new Observer();
subject.addObserver(kim);
subject.addObserver(jim);


subject.notifyObservers(); 
*/
//excercise 2
const person = {
	name: 'John',
	age: 30,
	address: {
		city: 'New York',
		country: 'USA',
	},
};
//deconstructed obj
let name = person.name;
let age= person.age;


const fruits = ['apple', 'banana', 'cherry', 'date'];
//deconsturcted array
const [a,b,c,d] = fruits;
console.log([,b,,d])
//nested deconstructor
const {address: {city, country}} = person
console.log(city);
console.log(country);

//excercise 3
async function fetchPosts() {
	try{const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10';}
	catch{ console.log('error found');}
}

// Call the function to fetch posts
fetchPosts();

//excercise 4
class Subject {
	constructor() {
		this.observers = [];
	}

	addObserver(observer) {
		this.observers.push(observer);
	}

	removeObserver(observer) {
		this.observers = this.observers.filter(obs => obs !== observer)
	}

	notifyObservers(data) {
		this.observers.forEach(observer => observer.update(data))	;
	}

	async fetchAndNotify() {
		const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10';
		try{
			const response = await fetch(url);
			const data = await response.json();
			thhis.notifyObservers(data);
		} catch (error){
			this.notifyObservers('Error: ${error.messafe}');
		}
	}
}

class Observer {
	update(data) {
		if (typeof data === 'string') {
			console.log(data);
		}else {
			const [{title}] = data;
			console.log(title);
		}
	}
}
//initaing subject
const subject = new subject();

//add observers
subject.addObserver(new Observer());
subject.addObserver(new Observer());

//call the fetch&notify 
subject.fetchAndNotify();