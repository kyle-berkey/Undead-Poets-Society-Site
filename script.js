// popup
function popUpGen(title, desc) {
	if($('#popUp').length == 1) popUp.remove();
	
	body = document.getElementsByTagName("body")[0];
	popUp = document.createElement("div");
	popUp.id = "popUp";
  
	popUpTitle = document.createElement("div");
	popUpTitle.innerHTML = title;
	popUpTitle.id = "popUpTitle";
  
	popUpDesc = document.createElement("div");
	popUpDesc.innerHTML = desc;
	popUpDesc.id = "popUpDesc";
  
	close = document.createElement("button");
	close.setAttribute("onClick","popUp.remove()");
	close.innerHTML = "Close";
  
	popUp.appendChild(popUpTitle);
	popUp.appendChild(popUpDesc);
	popUp.appendChild(close);
	
	body.appendChild(popUp);
  }
  
  // music slides

  // starts with newest, goes to oldest
	let slides = document.getElementsByClassName("slide");
	let songs = document.getElementsByClassName('song');
	let albums = document.getElementsByClassName('songs');

  class Slide {
	constructor() {
		this.songList = [];
		this.albumSongs = albums[slideIndex-1].children;;
		for (let i = 0; i < this.albumSongs.length; i++) {	
			this.songList.push(songs[i]);
		}
	}
}

  let slideIndex = 1;
  let current = new Slide;
  showSlides(slideIndex);
  
  function plusSlides(n) {
	showSlides(slideIndex += n);
	return current = new Slide;
  }
  
  function currentSlide(n) {
	showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName("slide");
	if (n > slides.length) {slideIndex = 1}    
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";  
	}
	slides[slideIndex-1].style.display = "block"; 
  }

let modal = document.getElementById('modal');
function play(url) {
	let iframe = document.getElementById('iframe');
	iframe.src = url;
	modal.style.display = 'block';
}

let clse = document.getElementById('close');
clse.onclick = function closeModal() {
modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



