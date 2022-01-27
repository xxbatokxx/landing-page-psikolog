const heroImage = document.getElementById('image');

function putHeroImage(){
	heroImage.setAttribute("src", "hero.png");
	heroImage.setAttribute("width", "304");
	heroImage.setAttribute("width", "228");
	document.body.appendChild(heroImage);
}