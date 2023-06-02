<<<<<<< HEAD
// Recupero il valore precedentemente salvato dal LocalStorage
const savedName = localStorage.getItem('name');
if (savedName) {
  document.getElementById('savedName').textContent = 'Il tuo nome salvato è: ' + savedName;
}

// Aggiungo l'evento al pulsante Salva
const saveBtn = document.getElementById('saveBtn');
    saveBtn.addEventListener('click', function() {
    const name = document.getElementById('name').value;
    localStorage.setItem('name', name);
    document.getElementById('savedName').textContent = 'Il tuo nome salvato è: ' + name;
});

// Aggiungo l'evento al pulsante Rimuovi
const clearBtn = document.getElementById('clearBtn');
    clearBtn.addEventListener('click', function() {
    localStorage.removeItem('name');
    document.getElementById('savedName').textContent = '';
});

// Creo un contatore che tenga conto del tempo trascorso utilizzando sessionStorage
let counter = sessionStorage.getItem('counter') || 0;
    setInterval(function() { 
    counter++;
    sessionStorage.setItem('counter', counter);
    document.getElementById('counter').textContent = 'Tempo trascorso: ' + counter + ' secondi';
}, 1000);
=======
// Recupero il valore precedentemente salvato dal LocalStorage, se presente
const savedName = localStorage.getItem('name');
if (savedName) {
  document.getElementById('savedName').textContent = 'Il tuo nome salvato è: ' + savedName;
}

// Aggiungo l'evento al pulsante Salva
const saveBtn = document.getElementById('saveBtn');
    saveBtn.addEventListener('click', function() {
    const name = document.getElementById('name').value;
    localStorage.setItem('name', name);
    document.getElementById('savedName').textContent = 'Il tuo nome salvato è: ' + name;
});

// Aggiungo l'evento al pulsante Rimuovi
const clearBtn = document.getElementById('clearBtn');
    clearBtn.addEventListener('click', function() {
    localStorage.removeItem('name');
    document.getElementById('savedName').textContent = '';
});

// Creo un contatore che tenga conto del tempo trascorso utilizzando sessionStorage
let counter = sessionStorage.getItem('counter') || 0;
    setInterval(function() {
    counter++;
    sessionStorage.setItem('counter', counter);
    document.getElementById('counter').textContent = 'Tempo trascorso: ' + counter + ' secondi';
}, 1000);
>>>>>>> ff596c00807040fb14a60d577becd26baf5a4f28
