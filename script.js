console.log('no dude');

var mobile = document.getElementById('mobile');
var mobileMenu = document.getElementById('mobileMenu');

mobile.onclick = function() {
	
	if (mobileMenu.style.display == 'none') {
		  return mobileMenu.style.display = 'block';
	}
	else {
			return mobileMenu.style.display = 'none';
	}
}