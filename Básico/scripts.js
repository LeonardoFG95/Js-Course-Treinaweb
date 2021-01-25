/* Desafio Listas */

var list2 = [1,2,3],
	listElement2 = document.querySelector('ul');

function insert (event) {
	if (event.keyCode === 13) {
		list2.push(event.target.value);
		event.target.value = '';
		render();
	}
}

function remove(index) {
	list2.splice(index, 1);
	render();
}

function render() {
	listElement2.innerHTML = list2.map((item, index) => {
		return `<li onclick="remove(${index})" >${item}</li>`;
	}).join('');
}

render();

/* Eventos */

var myFunc = function() {
	console.log(this.value);
}

document.querySelector('#myInput').addEventListener('keyup', myFunc);

document.querySelector('li').addEventListener('click', function() {
	event.stopPropagation();
	console.log(this);
})

document.querySelector('ul').addEventListener('click', function() {
	console.log(this);
})

document.querySelector('button').addEventListener('contextmenu', function() {
	event.preventDefault();
	console.log(this);
})

document.querySelector('input').addEventListener('keyup', function(event) {
	if (event.keyCode == 13) {
		if(this.value !== '') {
			this.style.backgroundColor = 'green';
		} else {
			this.style.backgroundColor = 'red';
		}
	}
});

var myTimeout = setTimeout(function() {
	console.log('Hello 2');
}, 5000);

clearTimeout(myTimeout)

var myInterval = setInterval(function() {
	console.log("Oi")
}, 5000)

clearInterval(myInterval)

// Deboucing

var myDiv = document.querySelector("div"),
	myInput = document.querySelector('input');

var myTimeout2;

myInput.addEventListener('keyup', function() {
	clearTimeout(myTimeout);
	myTimeout2 = setTimeout(() => {
		myDiv.textContent = this.value;
	}, 1000)
})

/* Desafio: Crair lista */

/*
var list = [1,2,3,'chocolate'],
	listElement = document.querySelector('ul');

function render() {
	var html = '';
	for (let item of list) {
		html += `<li>Item ${item}</li>`;
	}
	listElement.innerHTML = html;
}

render();
*/

/* Desafio: Tabuleiro */

var Table = {
	field: [
		['','',''],
		['','',''],
		['','','']
	],
	position: [0,0],

	up() {
		if (this.position[0] > 0) {
			this.position[0]--;
		}
		this.print();
	},

	down() {
		if (this.position[0] < this.field.length-1) {
			this.position[0]++;
		}
		this.print();
	},

	left() {
		if (this.position[1] > 0) {
			this.position--;
		}
		this.print();
	},

	right() {
		if (this.position[1] < this.field[this.position[0]].length-1) {
			this.position[1]++;
		}
		this.print();
	},

	print() {
		var lineStr = '';
		for (var i = 0; i < this.field.length; i++) {
			var line = this.field[i];
			for (var j = 0; j < line.length; j++) {
				if (this.position[0] === i && this.position[1] === j){
					lineStr += '| X |';
				} else {
					lineStr += '|   |';
				}
			}
			lineStr += '\n';
		}
		console.log(lineStr);
	}
		
}

Table.print();

/* Métodos Objeto */

var _d = 5;

var myObj3 = {
	a: 2,
	b: 4,
	c: 6,
	get d() {
		console.log('acesso');
		return _d;
	},
	set d(value) {
		_d = value;
	}
}

console.log(Object.keys(myObj3));
console.log(Object.values(myObj3));
console.log(Object.entries(myObj3));
// Object.seal(myObj3);


/* Arrays */

var myArray5 = [5, 9, 10, 7, 6]

console.log(myArray5.every(n => n % 2 === 0));
console.log(myArray5.filter(n => n % 2 !== 0));
console.log(myArray5.find(n => n > 5));
console.log(myArray5.reduce((acumulado, atual) => acumulado + atual));
console.log(myArray5.sort((a, b) => a > b ? 1 : -1));
myArray5.forEach(n => {
	console.log(n);
})
console.log(myArray5.map(n => n * 2));

var myArray6 = Array.of(1, 2, 3);

console.log(myArray6.push(10));
console.log(myArray6.pop());
console.log(myArray6.unshift(10));
console.log(myArray6.shift());
console.log(myArray6.splice(2, 0, 15));
console.log('abc'.split('').reverse().join(''));
console.log(myArray6.join(', '));
console.log(myArray6.indexOf(10));
console.log(myArray6.includes(3));
console.log(myArray6.concat(myArray5));

// Array Multidimensional 

var arrayMulti = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
]

console.log(arrayMulti[1][1]);

/* Date */

let myDate = new Date('10/11/2009');

function weekDay(year, month, day) {
	var date = (new Date(year, month-1, day)).getDay();
	var days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex'];
	return days[date];
}

console.log(myDate.getDay().toString());

/* Desafio: Strings */

function missingLetters(text) {
	var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
	text = text.toLowerCase();
	var missing = [];
	for (let letter of letters) {
		if (text.indexOf(letter) === -1) {
			missing.push(letter);
		}
	}
	return missing;
} 

/* Strings */

var nome = 'TreinaWeb';

console.log('Olá, ' + nome + '!');
console.log(`Olá, ${nome}!`);
console.log(nome.length);
console.log('a'.repeat(5));
console.log('Hello World'.substr(2, 5));

var myStr = '05/10/2020'; 
var myRegex = /\d{2}\/\d{2}\/\d{4}/;

myStr.match(myRegex);

/* Números e Objeto Math: Desafio Mensagem */

function message() {
	var number = Math.trunc((Math.random()*3)+1)
	switch (number) {
		case 1:
			console.log('Olá');
			break;
		case 2:
			console.log('Salut');
			break;
		case 3:
			console.log('Hello');
			break;
	}
}

/* Números e Objeto Math */

console.log(Math.trunc());

/* Desafio: Elevador */

var Elevator = {
	floor: 0,
	total: 3,
	up() {
		if (this.floor < this.total) {
			this.floor++;
		}
		this.print();
	},
	down() {
		if (this.floor > 0) {
			this.floor--;
		}
		this.print();
	},
	print() {
		console.log(`Andar: ${this.floor}`);
	}	
}

/* Desfio: Menor número */
 
function min(numbers) {
	var min = numbers[0];
	for(var i = 0; i < numbers.length; i++) {
		if (numbers[i] < min) {
			min = numbers[i];
		} 
	}
	return min;
}

/* Laços de repetição para Objetos/Arrays */

var myArray4 = [5, 10, 15, 20];
var myObj2 = {
	d: 10,
	e: 20,
	f: 30
}

for(var a in myObj2) {
	console.log(myObj2[a]);
}

/* Spread */

 function sum2(n1, n2, n3) {
 	return n1 + n2 +n3;
 }

 var myArray2 = [1, 2, 3];
 var myArray3 = [4, 5, 6];

console.log(sum2(...myArray2));

/* Objetos e Arrays */

var myObj = {
	length: 15,
	color: 'yellow',
	write: function() {
		console.log('Hello');
	}
}

var myArray = [5, 8, 4, 12];

var [a, b, c, d] = myArray;

var {length, color, write} = myObj;

/* Function */

function fatorial(n) {
	if (n === 0) {
		return 1;
	}
	return n * fatorial(n - 1);
}

function isPrime(num) {
	for(var i = 2; i < num; i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return num !== 1;
}

function sum(n1, n2) {
	var total = 0;
	for (var i = 0; i < 10; i++) {
		console.log(i);
		if (i === 2 ) {
			return 'finish'
		}
	}
}

/* Arrow Function */

var myTimeout = setTimeout(() => {
	console.log('Hello');
}, 5000);

function myFunc(otherFunc) {
	console.log(otherFunc());
}

myFunc(myFunc => 10 + 5);

