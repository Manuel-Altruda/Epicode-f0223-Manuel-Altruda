const striveUrl = "https://striveschool-api.herokuapp.com/api/product/";
const key =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlNDg0Mjg4Zjc0MDAwMTQyODc4ZWUiLCJpYXQiOjE2ODM5MDA0ODIsImV4cCI6MTY4NTExMDA4Mn0.Gx0EWh1OD9-zI_Ti0t691R54i6doihF1bHfoLFHotW0";
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
                <h3>BENEFITS</h3>
                <p>${product.description}</p>
              </div>
              <button class="buy--btn">Aggiungi al carrello</button>
            </div>
            `;
        //    <img class="rounded-2 mt-2" src="${product.imageUrl}">
        //         // <h2 class="mt-3">${product.name}</h2>
        //         // <h4>Brand: ${product.brand}</h4>
        //         // <p class="mt-3">Description: ${product.description}</p>
        //         // <p class="mb-0">Price: ${product.price}$</p>
                
        })
        .catch((err) => {
            console.log(err);
        });
};

window.onload = function () {
    getProducts();
};