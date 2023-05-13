const PRODUCT_URL = "https://striveschool-api.herokuapp.com/api/product/"

const getProducts = function () {

    fetch(PRODUCT_URL, {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlNDg0Mjg4Zjc0MDAwMTQyODc4ZWUiLCJpYXQiOjE2ODM5MDA0ODIsImV4cCI6MTY4NTExMDA4Mn0.Gx0EWh1OD9-zI_Ti0t691R54i6doihF1bHfoLFHotW0"
        }
    })

        .then((res) => {
            console.log('RESPONSE PRODUCTS', res)
            if (res.ok) {

                return res.json()
            } else {
                throw new Error('error loading products')
            }
        })
        .then((data) => {
            console.log('CHECK PRODOTTI IN STORE', data)
            
            data.forEach((product) => {

                let colProduct = `<div class="col mb-4"> 
                <div class="card h-100">
                <div class="card-header ">
                    <h2>${product.name}</h2>
                    <img src="${product.imageUrl}" class="card-img-top" alt="Img"/>
                </div>
                <div class="card-body">
                    <p>
                    ${product.brand}
                    </p>
                    <p>${product.description}</p>
                    <div class="card-price ">
                        ${product.price}€
                    </div>
                    </div>
                    <a href="./backOffice.html?productId=${product._id}" class="btn btn-danger">MODIFICA</a>
                    <a href="./details.html?productId=${product._id}" class="btn btn-primary py-1">Scopri di più</a>
                    </div>
                </div>
            </div>
            </div>
            </div>
         `

         ///////////
                let rowReference = document.getElementById('products-container') 
                rowReference.innerHTML += colProduct
            })
        })
        .catch((error) => {
            console.log(error)
        })
}

window.onload = () => {
    

    getProducts()
}


//CARDS JS


//  <div class="col-12 col-md-4">
//            <div class="card">
//             <img src="${product.imageUrl}" class="card-img-top" alt="Img"/>
//              <div class="card-body">
//                <h5 class="card-title">${product.name}</h5>
//                <p class="card-text">
//                  ${product.description}
//                </p>
//                <p> ${product.brand}€</p>
//                <p> ${product.price}€</p>
//                <a href="./backOffice.html?productId=${product._id}" class="btn btn-primary">MODIFICA</a>
//              </div>
//            </div>
//          </div>

//2 metodo
/* <div class="centered col-12 col-md-4">
                <div class="cards">
                  <div class="card">
                    <div class="border"></div>
                    <div class="content"><img src="${product.imageUrl}" class="card-img-top" alt="Img""/>
                      <h2>${product.name}</h2>
                      <p>${product.description}</p>
                      <p>${product.brand}€</p>
                      <p>${product.price}€</p>
                      <a href="./backOffice.html?productId=${product._id}" class="btn btn-primary">MODIFICA</a>
                    </div>
                  </div> */