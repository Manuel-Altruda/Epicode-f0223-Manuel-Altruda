// Funzione per aggiungere un libro al carrello
function addBookCart(button) {
    const card = button.closest('.card');
    const title = card.querySelector('.card-title').textContent;
    const price = card.querySelector('.card-text').textContent;
  
    const book = {
      title: title,
      price: price
    };
  
    let cart = localStorage.getItem('cart');
    if (cart) {
      cart = JSON.parse(cart);
      cart.push(book);
    } else {
      cart = [book];
    }
  
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  // Funzione per rimuovere un libro dal carrello
  function removeBook(button) {
    const card = button.closest('.card');
    const title = card.querySelector('.card-title').textContent;
  
    let cart = localStorage.getItem('cart');
    if (cart) {
      cart = JSON.parse(cart);
      cart = cart.filter(book => book.title !== title);
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }
  

fetch("https://striveschool-api.herokuapp.com/books")

.then(response => response.json())
	.then(books => {
		const bookList = document.getElementById('book-list');
			books.forEach(libro => {
				const card = `
				    <div class="col-sm-6 col-md-4 col-lg-3">
						<div class="card">
							<img src="${libro.img}" class="card-img-top" alt="${libro.title}">
							<div class="card-body">
								<h5 class="card-title">${libro.title}</h5>
								<p class="card-text">${libro.price} €</p>
                                <button class="btn btn-danger" onclick="addBookCart(this)">AGGIUNGI AL CARRELLO</button>
								<button class="btn btn-danger" onclick="removeBook(this)">SCARTA</button>
							</div>
						</div>
					</div>
				`;
				bookList.insertAdjacentHTML('beforeend', card);
			});

    })
.catch(error => console.error(error));

        