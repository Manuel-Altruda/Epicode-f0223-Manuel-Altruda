// const apiKey = 'KqtBlxBCYkFFMa3d6Jwb92hOkRsJtamQfKh9tyOZxnUaOc4kVZe2FGC5';
const url = 'https://api.pexels.com/v1/search?query='

const hideColumn = function (context) {
    console.log('context', context)
    let rightColToDelete = context.closest(".col-md-4")
    rightColToDelete.remove()
}

const renderCards = function(photos){
    //elimino le row
    let row = document.querySelector('.album .container .row')
    row.innerHTML = ''
    photos.forEach(photo => {
        let colTemplate = `
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail">
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#55595c" />
              <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                Thumbnail
              </text>
            </svg>
            <div class="card-body">
              <h5 class="card-title">Lorem Ipsum</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">
                    View
                  </button>
                  <button type="button" class="btn btn-sm btn-outline-secondary"
                  onclick="hideColumn(this)">
                    Hide
                  </button>
                </div>
                <small class="text-muted">${photo.id}</small>
              </div>
            </div>
          </div>
        </div>`
        row.innerHTML = colTemplate
    });
}


const getImg = function(query) {
    fetch(url + query,{
        headers: {authorization: 'KqtBlxBCYkFFMa3d6Jwb92hOkRsJtamQfKh9tyOZxnUaOc4kVZe2FGC5',
    },
    })

    .then((res) =>{
        if (res.ok) {
            return res.json()
        }else {
            throw new Error ('Error')
        }
    })
    
    .then((data) => {
        console.log (data)
        renderCards()
    })

    .catch((err) => {
        console.log(err)
    })
}

window.onload = function(){
    let primaryButton = document.querySelector('.btn-primary')
    primaryButton.addEventListener('click',() => {
        getImg('mountains')
    });

    let secondaryButton = document.querySelector('.btn-secondary')
    secondaryButton.addEventListener('click',() => {
        getImg('see')
    });

    let customInputField = document.querySelector('.input group .form control')
    let customSearchButton = document.querySelector('.input group .btn outline secondary')
    customSearchButton.addEventListener('click',() => {
        getImg(customInputField.value)
    })
}