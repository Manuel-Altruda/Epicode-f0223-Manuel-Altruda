const striveUrl = "https://striveschool-api.herokuapp.com/api/product/";
const key ="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlNDg0Mjg4Zjc0MDAwMTQyODc4ZWUiLCJpYXQiOjE2ODM5MDA0ODIsImV4cCI6MTY4NTExMDA4Mn0.Gx0EWh1OD9-zI_Ti0t691R54i6doihF1bHfoLFHotW0";
let addressContent = new URLSearchParams(window.location.search);
let productId = addressContent.get("productId");


const getProducts = function () {
    fetch(striveUrl + productId, {
        headers: {
            Authorization: key,
        },
    })
        .then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error('error');
            }
        })
        .then((product) => {
            let colDet = document.getElementById("colDet");
            colDet.innerHTML = `<section class="product">
            <div class="product__photo">
              <div class="photo-container">
                <div class="photo-main">
                  <img src="${product.imageUrl}" alt="telephone">
                </div>
                <div class="photo-album">
                  <ul>
                    <li><img src="${product.imageUrl}" alt="telephone prospective"></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="product__info">
              <div class="title">
                <h1>${product.name}</h1>
                <span>COD: ${product._id}</span>
              </div>
              <div class="price">
                € <span>${product.price}</span>
              </div>
      
              <div class="description">
                <h3>Descrizione del prodotto</h3>
                <p>${product.description}</p>
              </div>
                <button class="buy--btn" onclick="addToCart('${product._id}', '${product.name}', ${product.price})">Aggiungi al carrello</button>
                
              </div>
              </section>
            `;
        })
        .catch((err) => {
            console.log(err);
        });
};

window.onload = function () {
    getProducts();
};


  function addToCart(productId, productName, productPrice) {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || []; // se il prodotto non esiste nel carrello lo inizializzo con un'array vuoto nel localStorage
    let itemPresenti = cartItems.find((item) => item.productId === productId);

    if (itemPresenti) {
      itemPresenti.quantity++;
    } else {
      let newItem = {
        productId: productId,
        name: productName,
        price: productPrice,
        quantity: 1
      };
      cartItems.push(newItem);
    }

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    updateCartDropdown();
  }

  function removeFromCart(productId) {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    let updatedItems = cartItems.filter((item) => item.productId !== productId);

    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
    updateCartDropdown();
  }

  function updateCartDropdown() {
    let cartDropdown = document.getElementById("cartDropdown");
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    cartDropdown.innerHTML = "";

    if (cartItems.length === 0) {
      cartDropdown.innerHTML = "<p>Il carrello è vuoto</p>";
    } else {
      let cartList = document.createElement("ul"); // da qui in poi comincio a creare una lista dove poter inserire gli articoli nel carrello

      cartItems.forEach((item) => {
        let cartItem = document.createElement("li");
        cartItem.textContent = `${item.name} x ${item.quantity}`;
        
        let removeButton = document.createElement("button");
        removeButton.textContent = "x";
        removeButton.setAttribute("data-product-id", item.productId);
        removeButton.addEventListener("click", (event) => {
        let productId = event.target.getAttribute("data-product-id");
        removeFromCart(productId);
        });
        
        cartItem.appendChild(removeButton);
        cartList.appendChild(cartItem);
      });

      cartDropdown.appendChild(cartList);
    }
  }