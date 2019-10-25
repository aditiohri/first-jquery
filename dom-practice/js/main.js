// this is the best practice
let titleEl = document.getElementById('title');
titleEl.style.textAlign = 'center';

// will only return the first div
let divEl = document.querySelector('div');

let pEl = document.querySelector('p.cool');

// pEl.textContent = 'Comments for <strong>Today</strong>'

// console.log(pEl);
pEl.innerHTML = 'Comments for <strong>Today</strong>'
pEl.style.color = 'purple';

document.querySelector('a').setAttribute('href', 'https://www.google.com');

let commentEls = document.querySelectorAll('.comment');
console.log(commentEls);

for (let commentEl of commentEls) {
    commentEl.style.fontSize = '30px';
}