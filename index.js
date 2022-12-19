function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch(url)
    .then(resp => resp.json())
    .then(json => renderBooks(json))
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});


//function fetchBooks() should include a fetch request to GoT API ('https://anapioficeandfire.com/api/books')
let url = 'https://anapioficeandfire.com/api/books'


  //returned response should be converted to JSON
  //then call 2nd fxn, renderBooks, 
    //pass in the JSON-ified data as argument

//open index.html page to see if you did it correctly, should see list of GoT titles on webpage
