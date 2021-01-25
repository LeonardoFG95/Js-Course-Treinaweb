function Pencil(color, length) {
    var code = 153;

    if (!(this instanceof Pencil)) {
        return new Pencil(color, length);
    }

    this.color = color;
    this.length = length;
    this.write = function (text) {
        console.log(text);
    }

    this.getCode = function () {
        return code;
    }

    this.setCode = function (value) {
        code = value;
    }

}

var myPencil = Pencil('red', 15);
var myPencil2 = new Pencil('blue', 20);

// Herança

function Animal() {
    this.sleep = function () {
        console.log('zzz');
    }
}

function Dog() {
    this.bark = function () {
        console.log('woof');
    }
}
Dog.prototype = new Animal();

var myDog = new Dog();

// Desafio Prototipo e Herança ****************************

class Rect {
    constructor(b, h) {
        this.b = b;
        this.h = h;
    }

    area() {
        return this.b * this.h;
    }
}

class Square extends Rect {
    constructor(l) {
        super(l, l);
    }

}

square = new Rect(5, 2);

// Classe ****************************

class Pen {

    constructor(color) {
        this.color = color;
    }

    write(text) {
        console.log(text);
    }
}

var myPen = new Pen('red');

// Herança ****************************

class Animal2 {
    sleep() {
        console.log('zzzz');
    }
}

class Dog2 extends Animal2 {
    bark() {
        console.log('woof');
    }

    sleep() {
        console.log('The dog will sleep');
        super.sleep();
    }
}

var myDog2 = new Dog2();

// Extendendo objetos nativos ****************************

class MyArray extends Array {

    first() {
        return this[0];
    }

    last() {
        return this[this.length - 1];
    }
}

var myList = new MyArray(5, 8, 13);

// Maps e WeakMaps ****************************

var myObj = new Map();

var a = { value: 1 },
    b = { value: 2 };

myObj.set(a, 5);
myObj.set(b, 10);

//Set e WeakSets ****************************

// var mySet = new Set();

var a = { myValue: 1 },
    b = { myValue: 2 };

/* mySet.add(a);
mySet.add(b);
mySet.add(a); */

var mySet = new Set([a, b]);

// Tratamento de Erros ****************************

function myLooping() {
    "use strict"
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
}

myLooping();

// Gerando e Tratando Erros ****************************

function double(number) {
    if (typeof number !== 'number') {
        throw new Error(`value expected: number, value received: ${typeof number}`);
    }
    return number * 2;
}

try {
    console.log(double('abc'));
} catch (error) {
    console.log(error);
    console.log(double(3));
} finally {
    console.log('finish')
}

// Desafio Evitando Atribuição de Valores ****************************

var valor = {
    _a: 0,
    get a() {
        return this._a;
    },
    set a(value) {
        if (value % 2 !== 0) {
            throw new Error('Permitido apenas números pares.')
        }
        this._a = value;
    }
}

// Expressões Regulares ****************************

// Usar g no final da expressão para encontrar todas as ocorrencias 
var regexp = /a.c/g,
    myString = 'Abc abc Abc abc'

console.log(regexp.test(myString));

console.log(regexp.exec(myString));

console.log(myString.match(regexp));

// Replace 

console.log(myString.replace('a', '1'));

// Usar i no final da expressão para ignorar se as letras são 
// maiúsculas ou minísculas
console.log(myString.replace(/a/gi, '1'))

// Capturar um valor da string
var myString2 = 'abc-123-def'
    myRegex = /abc-(\d{3})-def/;

console.log(myString2.replace(myRegex, 'my number: $1'))


// indexOf e search

var myString3 = 'abc'
 
console.log(myString3.indexOf('b'))

console.log(myString3.search(/b/))


// Looping
var regexp = /a.c/g,
    myString = '234abc123 a4c5',
    match;


while(match = regexp.exec(myString)) {
    console.log(`${match[0]} - ${match.index}`);
}

// Desafio formatando datas

function formatDate(date) {
    return date.replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$3-$2-$1')
}

// Escopo ****************************

// Closure
var add = (function() {
    var counter = 0;
    return function() {
        return counter++;
    }
})()

// Recursividade 

function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        var product = 1;
        for (var i = 1; i <= n; i++) {
            product *= i;
        }
        return product;
    }
}

function factorial2(n) {
    if(n === 0) {
        return 1;
    } else {
        return n * factorial2(n - 2);
    }

}

// Call, Aplly e Blind


var myObj4 = {
    name: 'TreinaWeb', 
    sayName: function() {
        console.log(this.name);
        setTimeout(function() {
            console.log(this.name);
        }.bind(this), 1000);
    }
}

myObj4.sayName();

// myFunc.call(this, 1, 2, 3);
// myFunc.apply(this, [1, 2, 3]);

// Executando funções de Arrays em Strings

var Tiger = {
    name: 'Rajah',
    sayName: function() {
        console.log(this.name);
    }
}

var Lion = {
    name: 'Gumball'
}

Tiger.sayName.call(Lion);

[].forEach.call('my string', function(letter){
    console.log(letter);
}) 

// Desafio soma ****************************

function sum(n1) {
    return function(n2) {
        return n1 + n2;
    }
}

// Controlando o navegador ****************************

// Window

// window.open('https://treinaweb.com.br', '_blank', 'resizable=no, top=200, left=200, width=300, height=200')

// History

function setState(){
    var values = getValues();
    history.pushState({values}, 'checkboxes');
}

function getValues() {
    var a = document.querySelector('#a').checked,
        b = document.querySelector('#b').checked,
        c = document.querySelector('#c').checked;
    return {a, b, c};
}

window.onpopstate = function() {
    var values = history.state.values;

    document.querySelector('#a').checked = values.a;
    document.querySelector('#b').checked = values.b;
    document.querySelector('#c').checked = values.c;
}

// Popup

// alert(), confirm(), prompt()

// Desafio controlando navegação de uma janela

var myWindow = null, 
    urlElement = document.querySelector('#myURL');

function go(){
    var url = 'http://' + urlElement.value;
    if (myWindow && !myWindow.closed) {
        myWindow.location.href = url;
    } else {
        myWindow = window.open(url, 'My Window', 'width=300, height=200');
    }
}

// Lendo Arquivos

function handleFileSelect(){
	var myFile = document.querySelector('#myFile').files[0];

	var reader = new FileReader();

	reader.onload = function(){
		var content = reader.result;
		document.querySelector('#fileContent').value = content;
	}

	reader.readAsText(myFile);
}


function saveFile(){
	var element = document.createElement('a'),
		content = document.querySelector('#fileContent').value;

	element.setAttribute('href', 'data:plain/text;charse=utf-8,'+ encodeURIComponent(content) );
	element.setAttribute('download', 'myNewFile.txt');
	element.click();
}

// Desafio Salvando estado de um formulario **********************

function readForm() {
    var form = document.myForm,
        text = form.myText.value,
        select = form.mySelect.value,
        checkbox = form.myCheck.checked;

        return {text, select, checkbox};
}

function writeForm(obj) {
    var form = document.myForm;

        form.myText.value = obj.text; 
        form.myselect.value = obj.select;
        form.myCheck.checked = obj.checkbox;
}

function writeFile(content) {
    var element =  document.createElement('a');

    element.setAttribute('href', 'data:plain/text;charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download', 'formContent.txt');
    element.click();
}

function readFile(callbak) {
    var element = document.createElement('input');

    element.setAttribute('type', 'file');
    element.onchange = function() {
        var reader = new FileReader();

        reader.onload = function(){
            var content = reader.result;
            callbak(content);
        }

        reader.readAsText(element.files[0]);
    }
    element.click();
}

function save() {
    var formContent = JSON.stringify(readForm());
    writeFile(formContent);
}

function load() {
    readFile(function(content){
        writeForm(JSON.parse(content));
    });
}

// AJAX **********************

var myReq = new XMLHttpRequest();
myReq.onload = function() {
    console.log(JSON.parse(this.responseText))
}

myReq.open('get', 'https://api.github.com/search/repositories?q=javascript', true);
myReq.send();

// JQuery *****************************

document.querySelector('#abc').addEventListener('click', function(){
    console.log('abc')
})

$('#abc').on('click', function(){
    console.log('abc2')
})

// Requisição AJAX

// $.ajax('https://api.github.com/search/repositories?q=javascript').then(function(response){
//     console.log(response)
// })