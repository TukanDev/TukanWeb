const sutniNavSaStrane = () => {
	const selektor = document.querySelector(".jediSelektor");
	const slide = document.querySelector(".linkoviMraleu");
	const slidedrop = document.querySelector(".dropdown");
	const linkovi = document.querySelectorAll(".linkoviMraleu li")
	const dropdown = document.querySelectorAll(".dropdown-content")

	selektor.addEventListener('click', () => {
		slide.classList.toggle('otvoren');
		
		//const delay = 7 + 3.2;
		
		linkovi.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = '';
			} else {
				link.style.animation = `rokaj 0.5s ease forwards ${index / 1.42069}s`;
			}
		});
		
		slidedrop.classList.toggle('otvorend');
		
				dropdown.forEach((linkd, indexd) => {
					  var x = document.getElementById("navcuga");
                     if (x.className === "navigejsn") {
                     x.className += " responsive";
                     } else {
                       x.className = "navigejsn";
                       }
					   
				if (x.className === "dropdownd") {
                     x.className += " responsive";
                     } else {
                       x.className = "dropdownd";
                       }
			if (linkd.style.animation) {
				linkd.style.animation = '';
			} else {
				linkd.style.animation = `rokaj 0.5s ease forwards ${indexd / 1.42069}s`;
			}
		});

		selektor.classList.toggle('metnut');
	});
};

const pocetna = () => {
	location.href = "/";
}

sutniNavSaStrane();