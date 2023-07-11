// PRIMO ESERCIZIO
class User {
    constructor(firstName, lastName, age, location) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.location = location;
    }
  
    compareAge(otherUser) {
      if (this.age > otherUser.age) {
        return `${this.firstName} è più vecchio di ${otherUser.firstName}`;
      } else if (this.age < otherUser.age) {
        return `${this.firstName} è più giovane di ${otherUser.firstName}`;
      } else {
        return `${this.firstName} ha la stessa età di ${otherUser.firstName}`;
      }
    }
}
  
    const user1 = new User('Mario', 'Rossi', 35, 'Roma');
    const user2 = new User('Luigi', 'Verdi', 40, 'Milano');

    console.log(user1.compareAge(user2));
    console.log(user2.compareAge(user1)); 

// SECONDO ESERCIZIO

// Definizione della classe Pet
class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }

    // Metodo per verificare se due pet condividono lo stesso padrone
    sameOwner(otherPet) {
        return this.ownerName === otherPet.ownerName;
    }
}

// Aggiunta di un evento di submit al form
    const form = document.getElementById('pet-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();

    // Recupero dei valori dal form
    const petName = document.getElementById('pet-name').value;
    const ownerName = document.getElementById('owner-name').value;
    const species = document.getElementById('species').value;
    const breed = document.getElementById('breed').value;

    // Creazione di un oggetto Pet
    const pet = new Pet(petName, ownerName, species, breed);

    // Aggiunta dell'oggetto alla lista
    const petList = document.getElementById('pet-list');
    const petItem = document.createElement('li');

    petItem.textContent = `Nome: ${pet.petName}, Proprietario: ${pet.ownerName}, 
    Specie: ${pet.species}, Razza: ${pet.breed}`;

    petList.appendChild(petItem);

    // Reset del form
    form.reset();

    });



