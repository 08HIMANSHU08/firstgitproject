// console.log(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title=123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent="hello";
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID

// console.log(document.getElementById("header-title"));
// let headerTitle=document.getElementById("header-title");
// let header=document.getElementById("main-header");
// //console.log(headerTitle);
// //headerTitle.textContent="Hello World";
// //headerTitle.innerText="goodbye";
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);
// // headerTitle.innerText="<h3>Hello</h3>";
// header.style.borderBottom="solid 3px #000";

//GETELEMENTBYCLASSNAME

// var items=document.getElementsByClassName("list-group-item");
// console.log('items');
// console.log('items[1]');
// items[1]=textContent='Hello 2';
// items[1].style.fontWeight='bold';
// items[1].style.backgroungColor='yellow';
// for(let i=0;i<items.length;i++)
// {
//     items[i].style.backgroundColor="#f4f4";
// }

// items[2].style.backgroundColor='green';

// for(let i=0;i<items.length;i++)
// {
//     items[i].style.fontWeight='bold';
// }

//GETELEMENTBYTAGNAME

var li=document.getElementsByTagName('li');
 //console.log(li);
// console.log(li[1]);
// li[1]=textContent='Hello 2';
// li[1].style.fontWeight='bold';
// li[1].style.backgroungColor='yellow';
// for(let i=0;i<li.length;i++)
// {
//     li[i].style.backgroundColor="#f4f4";
// }

li[2].style.backgroundColor='green';

for(let i=0;i<li.length;i++)
{
    li[i].style.fontWeight='bold';
}
//Edit item 5 by Classname
// var li=document.getElementsByClassName('list-group-item');
// li[4].style.backgroundColor='blue';

// Edit item 5 by tagname
li[4].style.backgroundColor='red';