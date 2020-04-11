'use strict';

const books = [{
  title: 'The Design of Everyday Things',
  author: 'Don Norman',
  image: "https://images-na.ssl-images-amazon.com/images/I/410RTQezHYL._SX326_BO1,204,203,200_.jpg",
  alreadyRead: false
},
{
  title: 'The Most Human Human',
  author: 'Brian Christian',
  image: "https://s.s-bol.com/imgbase0/imagebase3/large/FC/9/0/1/4/1001004011834109.jpg",
  alreadyRead: true
},
{
  title: 'The Pragmatic Programmer',
  author: 'Andrew Hunt',
  image: "https://upload.wikimedia.org/wikipedia/en/8/8f/The_pragmatic_programmer.jpg",
  alreadyRead: true
}
];

function createBookList(books) {
  const booksUl = document.createElement('ul');
  booksUl.style.listStyle = 'none';
  booksUl.style.display = 'flex';
  booksUl.style.flexWrap = 'wrap';
  booksUl.style.padding = '20px';
  booksUl.style.width = 'calc(100% - 41px)';

  books.forEach((element, index) => {
    const booksLi = document.createElement('li');
    booksLi.style.width = 'calc(25% - 51px)';
    booksLi.style.margin = '15px';
    booksLi.style.padding = '10px';
    booksLi.style.minWidth =  '350px';

    const para = document.createElement('p');
    para.innerText = `${element.title} - ${element.author}`;
    booksLi.appendChild(para);

    const img = document.createElement('img');
    img.src = element.image;
    img.style.width = '25%';
    booksLi.appendChild(img);

    if(books[index].alreadyRead){
      booksLi.style.backgroundColor = 'green';
    }
    else{
      booksLi.style.backgroundColor = 'red';
    }
    booksUl.appendChild(booksLi);
  });
  return booksUl; 
}

let ulElement = createBookList(books);

document.querySelector("#bookList").appendChild(ulElement);