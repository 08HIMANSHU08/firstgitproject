// Query Selector

// let header=document.querySelector('#main-header');
// header.getElementsByClassName.borderBottom='solid 4px #ccc';

// let input=document.querySelector('input');
// input.value='Hello World';

// let submit=document.querySelector('input[type="submit"]');
// submit.value='Send';

// let item=document.querySelector('.list-group-item');
// item.style.color='red';

// let lastItem=document.querySelector('.list-group-item:last-child');
// lastItem.style.color='blue';

let secondItem=document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color='coral';
secondItem.style.backgroundColor='green';

let thirdItem=document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.display='none';

//Query SelectorAll

let titles=document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent='Hello';

// let odd=document.querySelectorAll('li:nth-child(odd)');
// let even=document.querySelectorAll('li:nth-child(even)');

// for(let i=0;i<odd.length;i++)
// {
//     odd[i].style.backgroundColor='#f4f4f4';
// }
// for(let i=0;i<even.length;i++)
// {
//     even[i].style.backgroundColor='#ccc';
// }
let secondItemfont=document.querySelectorAll('li');
secondItemfont[1].style.color='darkgreen';

let oddbg=document.querySelectorAll('li:nth-child(odd)');
for(let i=0;i<oddbg.length;i++)
{
     oddbg[i].style.backgroundColor='green';
}