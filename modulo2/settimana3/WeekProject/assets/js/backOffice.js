const FETCH_URL = "https://striveschool-api.herokuapp.com/api/product/"

let addressBarContent = new URLSearchParams(window.location.search)

let productId = addressBarContent.get('productId')

console.log('EVENTID', productId)

if (productId) {

    document.getElementsByTagName('h2')[0].innerText =
        'Backoffice page - Modifica Dei Prodotti'

    document.getElementById('save-button').innerText = 'MODIFICA PRODOTTO'

    let deleteButton = document.getElementById('delete-button')
    deleteButton.classList.remove('d-none')
    deleteButton.addEventListener('click', () => {
        fetch(FETCH_URL + productId, {
            method: 'DELETE',
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlNDg0Mjg4Zjc0MDAwMTQyODc4ZWUiLCJpYXQiOjE2ODM5MDA0ODIsImV4cCI6MTY4NTExMDA4Mn0.Gx0EWh1OD9-zI_Ti0t691R54i6doihF1bHfoLFHotW0"
            }

        })
            .then((res) => {
                if (res.ok) {
                    alert('eliminazione completata con successo')
                    location.assign('main.html')
                } else {
                    throw new Error("Problema nell'eliminazione del prodotto")
                }
            })
            .catch((err) => {
                console.log(err)
            })
    })
}


fetch(FETCH_URL + productId, {
    headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlNDg0Mjg4Zjc0MDAwMTQyODc4ZWUiLCJpYXQiOjE2ODM5MDA0ODIsImV4cCI6MTY4NTExMDA4Mn0.Gx0EWh1OD9-zI_Ti0t691R54i6doihF1bHfoLFHotW0"
    },
})

    .then((res) => {
        if (res.ok) {
            return res.json()
        } else {
            throw new Error("Errore nella ricezione del prodotto")
        }
    })
    .then((product) => {
        console.log(
            'DATI DEL SINGOLO PODOTTO RECUPERATO TRAMITE GET SINGOLA',
            product
        )
        // ripopoliamo il form, finalmente
        document.getElementById('name').value = product.name
        document.getElementById('description').value = product.description
        document.getElementById('image').value = product.imageUrl
        document.getElementById('brand').value = product.brand
        document.getElementById('price').value = product.price
    })
    .catch((error) => {
        console.log(error)
    })



const productForm = document.getElementById('product-form')
productForm.addEventListener('submit', function (e) {
    e.preventDefault()
    console.log('invio i dati')

    let nameInput = document.getElementById('name')
    let imageInput = document.getElementById('image')
    let descriptionInput = document.getElementById('description')
    let brandInput = document.getElementById('brand')
    let priceInput = document.getElementById('price')


    let newProduct = {
        name: nameInput.value,
        imageUrl: imageInput.value,
        description: descriptionInput.value,
        brand: brandInput.value,
        price: priceInput.value,
    }
    console.log('evento pronto da inviare alle API', newProduct)

    fetch(productId ? FETCH_URL + productId : FETCH_URL, {

        method: productId ? 'PUT' : 'POST',
        body: JSON.stringify(newProduct),
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlNDg0Mjg4Zjc0MDAwMTQyODc4ZWUiLCJpYXQiOjE2ODM5MDA0ODIsImV4cCI6MTY4NTExMDA4Mn0.Gx0EWh1OD9-zI_Ti0t691R54i6doihF1bHfoLFHotW0",
            'Content-Type': 'application/json',
        },
    })
        .then((res) => {

            console.log('RESPONSE DELLA CHIAMATA POST', res)
            if (res.ok) {

                alert(productId ? 'PRODOTTO MODIFICATO!' : 'PRODOTTO CREATO!')
                location.assign('main.html')
            } else {

                alert('ERRORE NEL SALVATAGGIO')
                throw new Error('ERRORE NEL SALVATAGGIO')
            }
        })
        .catch((err) => {
            console.log(err)
        })
})

    