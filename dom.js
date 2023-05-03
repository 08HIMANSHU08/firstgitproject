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
let headerTitle=document.getElementById("header-title");
let header=document.getElementById("main-header");
console.log(headerTitle);
headerTitle.textContent="Hello World";
headerTitle.innerText="goodbye";
console.log(headerTitle.innerText);
// headerTitle.innerText="<h3>Hello</h3>";
header.style.borderBottom="solid 3px #000";
let title=document.getElementsByClassName("title");
title[0].style.color="green";
title[0].style.fontWeight="bold";