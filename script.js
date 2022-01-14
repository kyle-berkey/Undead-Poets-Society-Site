console.log('no dude');

var mobile = document.getElementById('mobile');
var mobileMenu = document.getElementById('mobileMenu');

mobile.onclick = function() {
	
	if (mobileMenu.style.display != 'none') {
		  mobileMenu.style.display = 'none';
	}
	else {
			mobileMenu.style.display = 'block';
	}
}