// Fase di preparazione
const endpoint = "https://lanciweb.github.io/demo/api/pictures/";

// Recupero degli elementi di interesse dal DOM
const overlay = document.querySelector('.overlay');
const preview = document.querySelector('.preview');
const container = document.querySelector('.container');
const closeButton = document.querySelector('.close-button');

axios.get(endpoint).then(res => {
	const images = res.data;

	let figures = '';

	images.forEach(image => {

		const { id, title, url, date } = image;

		figures += `
	            <figure data-id="${id}">
				  <img src = "img/pin.svg" alt = "pin" class="pin">
				  <img src = "${url}" alt= "${title}" class="pic">
				  <figcaption>
				    <time>${date}</time>
					<h3>${title}</h3>
                  </figcaption>
				</figure>
               `
	})

	container.innerHTML = figures;

	figures = document.querySelectorAll('figure');


	// Per ognuna delle figure
	figures.forEach(figure => {
		figure.addEventListener('click', () => {

			// Recupera l'immagine cliccata
			const clickedPicture = figure.querySelector('img.pic');

			// Copia "src" e "alt" nell'immagine di preview
			preview.alt = clickedPicture.alt;
			preview.src = clickedPicture.src;

			// Compare l'overlay togliendo la classe 'hidden'
			overlay.classList.remove('hidden');

			// BONUS : blocco la scrollbar 
			document.body.style.overflow = 'hidden';
		})

	});

	closeButton.addEventListener('click', () => {
		// L'overlay sparisce nuovamente aggiungendo la classe 'hidden'
		overlay.classList.add('hidden');

		// BONUS : ripristino della scrollbar
		document.body.style.overflow = 'auto';

	})

})





