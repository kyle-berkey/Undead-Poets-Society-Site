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
  
  // music nlides
