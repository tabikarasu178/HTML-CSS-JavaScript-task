const title = document.getElementById('title');
console.log('<h1>タグの中身のテキストは ${title.textContent} です。');

const list = document.querySelector('.list');
console.log('<ul>タグの2つめの子要素のテキストは ${list.children[1].textContent} です。');

const newItem = document.createElement('li');
newItem.textContent = 'もも';
list.appendChild(newItem);

const button = document.getElementById('button');
button.addEventListener('click', event => {
    confirm("削除してよろしいですか？")
});

