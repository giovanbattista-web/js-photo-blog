const myName = [
	{
		"id": 1,
		"title": "Skate Park",
		"date": "01-07-2024",
		"url": "https://marcolanci.it/boolean/assets/pictures/1.png"
	},
	{
		"id": 2,
		"title": "Passeggiata",
		"date": "16-07-2024",
		"url": "https://marcolanci.it/boolean/assets/pictures/2.png"
	},
	{
		"id": 3,
		"title": "Alpi",
		"date": "01-07-2024",
		"url": "https://marcolanci.it/boolean/assets/pictures/3.png"
	},
	{
		"id": 4,
		"title": "Sagra",
		"date": "21-08-2024",
		"url": "https://marcolanci.it/boolean/assets/pictures/4.png"
	},
	{
		"id": 5,
		"title": "Watergun",
		"date": "23-08-2024",
		"url": "https://marcolanci.it/boolean/assets/pictures/5.png"
	},
	{
		"id": 6,
		"title": "Riviera",
		"date": "30-08-2024",
		"url": "https://marcolanci.it/boolean/assets/pictures/6.png"
	}
]

// RECUPERO DEGLI ELEMENTI 
const contenitore = document.getElementById('row');

// DICHIARO UNA VARIABILE VUOTA CHE MI CONTERRA' LE CARD
let cards = '';

// CICLO L'ARRAY
for (let i = 0; i < myName.length; i++) {

	// DESTRUTTURO L'ELEMENTO CHE STO ATTUALMENTE CICLANDO
	const { id, title, date, url } = myName[i];

	// CREO LA CARD 
	cards += `<div class="col">
                <div class="card">
                  <div class="card-img">
				   <img src= "${url}" class="img-fluid h-150" alt="">
				  </div>
                   <div class="card-text">
                    <img class="button position-absolute d-flex" src="./img/pin.svg" alt="">
				    <h6 class="visibility">${id}</h6>
				    <h6>${date}</h6>
					<h3>${title}</h3>
				  </div>
                </div>
              </div>`
}

// INSERIRE NEL DOM IL CONTENUTO DI cards
contenitore.innerHTML = cards;






