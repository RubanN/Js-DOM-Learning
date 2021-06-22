//8.3 Adding a DocumentFragment to the live DOM
// var elm = document.querySelector('ul');
// var docFrag = document.createDocumentFragment();

// ['blue','green','red','blue','pink'].forEach((e)=>{
//     var li = document.createElement('li');
//     li.textContent = e;
//     docFrag.appendChild(li);
// })
// elm.appendChild(docFrag);
// console.log(document.body.innerHTML);

// var divElm= document.createElement('div');
// var docFrag = document.createDocumentFragment();

//append div to document fragment
// docFrag.appendChild(divElm);
//create a DOM structure from a string
// docFrag.querySelector('div').innerHTML = "<ul><li>foo</li><li>bars</li></ul>"

//the string becomes a DOM structure I can call methods on like querySelectorAll()
//Just don't forget the DOM structure is wrapped in a <div>


// console.log(docFrag.querySelectorAll('li').length); //logs 2

//Chapter 10 - JavaScript in the DOM

/*notice that I am passing the addEventListener() a boolean parameter of true so capture events fire, not just bubbling events*/

//1 capture phase
window.addEventListener('click',function(){console.log(1);},true);

//2 capture phase
document.addEventListener('click',function(){console.log(2);},true);

//3 capture phase
document.documentElement.addEventListener('click',function(){console.log(3);},true);

//4 capture phase
document.body.addEventListener('click',function(){console.log(4);},true);

//5 target phase occurs during capture phase
document.querySelector('div').addEventListener('click',function(){console.log(5);},true);

//6 target phase occurs during bubbling phase
document.querySelector('div').addEventListener('click',function(){console.log(6);},false);

//7 bubbling phase
document.body.addEventListener('click',function(){console.log(7);},false);

//8 bubbling phase
document.documentElement.addEventListener('click',function(){console.log(8);},false);

//9 bubbling phase
document.addEventListener('click',function(){console.log(9);},false);

//10 bubbling phase
window.addEventListener('click',function(){console.log(10)},false);


//11.4 Adding event listeners to Element nodes, window object, and Document object
//add a mousemove event to the window object, invoking the event during the bubbling phase
window.addEventListener('mousemove',function(){console.log('Moving over the mouse');},true);
//add a mousemove event to the document object, invoking the event during the bubbling phase
document.addEventListener('mousemove',function(){console.log('moving over document');},false);

//11.5 Removing event listeners
var sayHi = function(){console.log('hi');};
//adding event listener using anonymous function
document.body.addEventListener('click',function(){console.log('dude');},false)
//adding event listener using function reference
document.querySelector('div').addEventListener('click',sayHi,false)
//attempt to remove both event listeners, but only the listener added with a funtions reference is removed
document.removeEventListener('click',sayHi,false);
//this of course does not work as the function passed to removeEventListener is a new and different function
document.body.removeEventListener('click',function(){console.log('dude');},false);
