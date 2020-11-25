/* Overlay appearance */
let openBtn = document.getElementById('openBtn');
let closeBtn = document.getElementById('closeBtn');
let overlay = document.getElementById('overlay');
let body = document.getElementsByTagName('body')[0];

openBtn.onclick = function() {
  overlay.style.display = 'block';
  body.style.overflow = 'hidden';
  closeBtn.classList.add('closeBtnActive');
  openBtn.classList.remove('openBtnActive');
}
closeBtn.onclick = function() {
  overlay.style.display = 'none';
  body.style.overflow = 'auto';
  openBtn.classList.add('openBtnActive');
  closeBtn.classList.remove('closeBtnActive')
}

/* Input field label animation */
$('input').on('focusin', function() {
  $(this).parent().find('label').addClass('active');
});

$('input').on('focusout', function() {
  if (!this.value) {
    $(this).parent().find('label').removeClass('active');
  }
});

/* Add new book to library list */
function addItem(text) {
  /* Complete and remove icons in SVG format */
  let completeSVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48px" height="48px"><path class="fill" d="M 22.59375 3.5 L 8.0625 18.1875 L 1.40625 11.5625 L 0 13 L 8.0625 21 L 24 4.9375 Z"/></svg>';
  let removeSVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48px" height="48px"><path class="fill" d="M 10.3125 -0.03125 C 8.589844 -0.03125 7.164063 1.316406 7 3 L 2 3 L 2 5 L 6.96875 5 L 6.96875 5.03125 L 17.03125 5.03125 L 17.03125 5 L 22 5 L 22 3 L 17 3 C 16.84375 1.316406 15.484375 -0.03125 13.8125 -0.03125 Z M 10.3125 2.03125 L 13.8125 2.03125 C 14.320313 2.03125 14.695313 2.429688 14.84375 2.96875 L 9.15625 2.96875 C 9.296875 2.429688 9.6875 2.03125 10.3125 2.03125 Z M 4 6 L 4 22.5 C 4 23.300781 4.699219 24 5.5 24 L 18.59375 24 C 19.394531 24 20.09375 23.300781 20.09375 22.5 L 20.09375 6 Z M 7 9 L 8 9 L 8 22 L 7 22 Z M 10 9 L 11 9 L 11 22 L 10 22 Z M 13 9 L 14 9 L 14 22 L 13 22 Z M 16 9 L 17 9 L 17 22 L 16 22 Z"/></svg>';
  
  let list = document.getElementById('unreadList');
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let pages = document.getElementById('pages').value;

  /* If there is any text inside the input field, Add items to library list */
  if (title) {
    let item = document.createElement('li');
    item.innerText = text;
    console.log(item);

    let content = document.createElement('div');
    content.classList.add('book');

    let h3 = document.createElement('h3');
    h3.innerText = title;

    let span = document.createElement('span');
    span.innerText = author;

    let h5 = document.createElement('h5');
    h5.innerText = pages;

    let buttons = document.createElement('div');
    buttons.classList.add('bookBtns');

    let complete = document.createElement('button');
    complete.classList.add('complete');
    complete.innerHTML = completeSVG;

    let remove = document.createElement('button');
    remove.classList.add('remove');
    remove.innerHTML = removeSVG;

    content.appendChild(h3);
    content.appendChild(span);
    content.appendChild(h5);
    
    buttons.appendChild(complete);
    buttons.appendChild(remove);
    
    item.appendChild(content);
    item.appendChild(buttons);

    list.appendChild(item);

    overlay.style.display = 'none';
  }
}

document.getElementById('add').addEventListener('click', addItem);