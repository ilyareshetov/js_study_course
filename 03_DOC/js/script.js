document.body.style['background-color'] = prompt('Какой будет фон у страницы?');

document.querySelector('.page').style['color'] = prompt('Какой будет цвет текста на странице?');

document.querySelector('span.name').innerHTML = prompt('Как зовут человека, который вас вдохновляет');

document.querySelector('img').setAttribute('src', prompt('Введите адрес картинки'));

const text = document.querySelector('.shortBio');
document.querySelector('.shortBio').innerHTML = prompt('Введите текст страницы');

text.className += ' animated';