// Create document new element

let newElement = document.createElement('input');
console.log(newElement);
document.body.appendChild(newElement);
let head = document.createElement('h1');
head = "Hello ruban"
console.log(head);
document.write(head)
let btn = document.createElement('button');
document.write(btn)

//  SetAttribute

document.getElementById("myinput").setAttribute("value", "Water bottle");
 
const myElement = document.createElement('div');
myElement.setAttribute('class','Ruban');
document.body.appendChild(myElement);
 
//textcontent

const title1 = document.getElementById("title")
title1.textContent = "Mangoes and banans"


// AppendChild in JS

const myList = document.getElementById("myList");
let newList = document.createElement('li')
newList.textContent="Bananas";
myList.appendChild(newList);
const names = ['ruban','ELon','bill','water','grape'];
for(let list of names){
    let item = document.createElement('li');
    item.textContent = list
    myList.appendChild(item);
}

//Class List Property

const myPara = document.getElementById('myPara');
myPara.classList.add('bold','big-font')
myPara.classList.replace("bold",'red-bg')
console.log(myPara.classList);



// About Node
console.log(Node.ELEMENT_NODE) //logs 1, one is the numeric code value for element nodes
for(var key in Node){
    console.log(key,"="+Node[key]);
}
var nodeAnchor = document.querySelector('a');
var props = [];
for(var key in nodeAnchor){
    props.push(key);   
}
console.log(props.sort());

//This is DOCUMENT_TYPE_NODE or nodeType 10 because Node.DOCUMENT_TYPE_NODE === 10
console.log(
	document.doctype.nodeName, //logs 'html' also try document.doctype to get <!DOCTYPE html>
	document.doctype.nodeType //logs 10 which maps to DOCUMENT_TYPE_NODE
);
//This is DOCUMENT_NODE or nodeType 9 because Node.DOCUMENT_NODE === 9
console.log(
	document.nodeName, //logs '#document'
	document.nodeType //logs 9 which maps to DOCUMENT_NODE
);
//This is DOCUMENT_FRAGMENT_NODE or nodeType 11 because Node.DOCUMENT_FRAGMENT_NODE === 11
console.log(
	document.createDocumentFragment().nodeName, //logs '#document-fragment'
	document.createDocumentFragment().nodeType //logs 11 which maps to DOCUMENT_FRAGMENT_NODE
);
//This is ELEMENT_NODE or nodeType 1 because Node. ELEMENT_NODE === 1
console.log(
	document.querySelector('a').nodeName, //logs 'A'
	document.querySelector('a').nodeType //logs 1 which maps to ELEMENT_NODE
);

//This is TEXT_NODE or nodeType 3 because Node.TEXT_NODE === 3
console.log(
	document.querySelector('a').firstChild.nodeName, //logs '#text'
	document.querySelector('a').firstChild.nodeType //logs 3 which maps to TEXT_NODE
);


//is <a> a ELEMENT_NODE?
// console.log(document.querySelector('a').nodeType === 1); //logs true, <a> is an Element node

console.log(document.doctype.nodeValue);
console.log(document.nodeValue);
console.log(document.createDocumentFragment().nodeValue);
console.log(document.querySelector('a').nodeVale);
console.log(document.querySelector('a').firstChild.nodeValue); //logs 'Hi'

//createElement



var element = document.createElement('div');
console.log(element,element.nodeType);
var text = document.createTextNode('Hi');
console.log(text,text.nodeType);

// Creating and adding element and text nodes to the DOM using JavaScript strings
//innerHTML,outerHTML,textContent

document.getElementById("A").innerHTML = "<strong>HI</strong>"
document.getElementById('B').outerHTML = '<div id="B" class="new">Whats Shaking</div>'
document.getElementById('C').textContent = 'dude';
document.getElementById('D').innerText = 'Keep it';
document.getElementById('E').outerText = 'real!';
console.log(document.body.innerHTML);

//insertAdjacentHTML
var elm = document.getElementById('elm');
elm.insertAdjacentElement('beforebegin','<span>Hey</span>')
elm.insertAdjacentHTML('afterbegin', '<span>dude-</span>'); 
elm.insertAdjacentHTML('beforeend', '<span>-are</span>'); 
elm.insertAdjacentHTML('afterend', '<span>-you?</span>');  
console.log(document.body.innerHTML);
console.log(document.getElementById('A').innerHTML); //logs '<i>Hi</i>'


//Extracting parts of the DOM tree as JavaScript strings

console.log(document.getElementById('A').innerHTML); //logs '<i>Hi</i>'


//Adding node objects to the DOM using appendChild()& insertBefore()
var elementNode = document.createElement('strong');
var textnode = document.createTextNode('dude');
// append these nodes to the DOM
document.querySelector('p').appendChild(elementNode);
document.querySelector('strong').appendChild(textNode);
console.log(document.body.innerHTML);

var text1 = document.createTextNode("1");
var li = document.createElement('li');
li.appendChild(text1);
var ul =document.querySelector('ul');
ul.insertBefore(li,ul.firstChild)
console.log(document.body.innerHTML);

//Removing and replacing nodes using removeChild() and replaceChild()

// remove element node
var divA = document.getElementById("A");
divA.parentNode.removeChild(divA)
//  remove text node
var divB = document.getElementById("B").firstChild(divB);
divB.parentNode.removeChild(divB)

//Replacing an element or text node 


var divA = document.getElementById("A");
var newSpan = document.createElement("span");
newSpan.textContent ="Ruban";
divA.parentNode.removeChild(newSpan,divA);



//2.CHAPTER

//Document Nodes
console.log(window.document.constructor); //logs function HTMLDocument() { [native code] }
console.log(window.document.nodeType); //logs 9, which is a numeric key mapping to DOCUMENT_NODE

// document owm properties
console.log(object.keys(document).sort());

var d = document;
console.log('title = ' +d.title);
console.log('url = ' +d.URL);
console.log('referrer = ' +d.referrer);
console.log('lastModified = ' +d.lastModified);

//logs either BackCompat (Quirks Mode) or CSS1Compat (Strict Mode)
console.log('compatibility mode = ' +d.compatMode);
console.log(document.childNodes[0].nodeType); //logs 10, which is a numeric key mapping to DOCUMENT_TYPE_NODE

//Chapter 3 - Element Nodes
console.log(document.querySelector('a').constructor);


//3.3 Creating Elements
var elen = document.createElement(textarea);
document.body.appendChild(elen);
console.log(document.querySelector('textarea')); //verify it's now in the DOM











































