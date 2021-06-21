// var element = document.createElement("textarea");
// document.body.appendChild(element);
// console.log(document.querySelector('textarea')); //verify it's now in the DOM
//Get the tag name of an element


// var attr = document.querySelector('a');
// attr.removeAttribute('href');
// attr.removeAttribute('title');
// attr.removeAttribute('style');
// attr.removeAttribute('data-foo');
// attr.removeAttribute('class');
// attr.removeAttribute('foo');
// attr.removeAttribute('hidden');


//set (really re-set) attributes
// attr.setAttribute('href',"#");
// attr.setAttribute('title','javascript HeadFirst');
// attr.setAttribute('style','red');
// attr.setAttribute('data-foo','SQL');
// attr.setAttribute('class','yes');
// attr.setAttribute('foo','foo');
// var atts = document.querySelector('a');
// var ele = document.querySelector('input');
// console.log(ele.hasAttribute('checked'));
// console.log(attr);

//Getting a list of class attribute values
// console.log(document.querySelector("li").textContent);
// console.log(document.getElementById('last').textContent);

// console.log(document.querySelectorAll('li'));
// console.log(document.getElementsByTagName('li'));
// console.log(document.getElementsByClassName('liClass'));
// var uiElement = document.querySelectorAll('ul').children;
// console.log(uiElement);

// var div = document.querySelector('div');
// console.log(div.querySelector('ul'));
// console.log(div.querySelectorAll('li'));
// console.log(div.getElementsByTagName('li'));
// console.log(div.getElementsByClassName('liClass'));

//Verify an element will be selected using matchesSelector()

//Chapter 6 - Element Node Inline Styles

// var divStyle = document.querySelector('div').style;
// console.log(divStyle);

//set 
// divStyle.backgroundColor ='blue';
// divStyle.border = '1px solid black';
// divStyle.width = '100px';
// divStyle.height = '100px';


//get 


// console.log(divStyle.backgroundColor);
// console.log(divStyle.border);
// console.log(divStyle.width);
// console.log(divStyle.height);


// removeAttribute
// divStyle.backgroundColor=""

// var divStyle = document.querySelector('div').style;
//set attribute

// divStyle.setProperty('background-color','red');
// divStyle.setProperty('border','2px solid black');
// divStyle.setProperty('width','100px');
// divStyle.setProperty('height','100px');

//Getting an elements computed styles (i.e. actual styles including any from the cascade) using getComputedStyle()
// var div = document.querySelector('div');

// console.log(window.getComputedStyle(div).backgroundColor);
// console.log(window.getComputedStyle(div).border);
// console.log(window.getComputedStyle(div).height);
// console.log(window.getComputedStyle(div).width);


//Chapter 7 - Text Nodes

// var text = document.querySelector('p').firstChild;

// console.log(Object.keys(text).sort());

// var textPropertiesIncludeInherted = [];
// for(var p in text){
//     textPropertiesIncludeInherted.push(p)
// }
// console.log(textPropertiesIncludeInherited.sort());

//White space creates Text nodes
// console.log(document.querySelector('#p1').firstChild.nodeName);
// console.log(document.querySelector('#p2').firstChild.nodeName) //logs #text


//7.4 Creating & Injecting Text Nodes
// var textNode = document.createTextNode("Hi");
// document.querySelector('div').appendChild(textNode);
// console.log(document.querySelector('div').innerText); // logs Hi

//Combine sibling Text nodes into one text node using normalize()
// var pElementNode = document.createElement('p');
// var textNodeHi = document.createTextNode('Hi');
// var textNodeCody = document.createTextNode('copy')

// pElementNode.appendChild(textNodeHi);
// pElementNode.appendChild(textNodeCody )

// document.querySelector('div').appendChild(pElementNode);

//7.11 Splitting a text node using splitText()

console.log(document.querySelector('p').firstChild.splitText(4).data);
console.log(document.querySelector('p').firstChild.textContent); //logs Hey






























