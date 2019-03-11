// if you want to change something on a DIFFERENT element, you have to call it by name (it's "id")
// https://www.w3schools.com/jsref/met_document_getelementbyid.asp
	
// "el" stands for the "element" that was just clicked
a = document.getElementById("first");
b = document.getElementById("second");
c = document.getElementById("third");
d = document.getElementById("key");
e = document.getElementById("stand");
f = document.getElementById("show");
g = document.getElementById("my_arrow");
h = document.getElementById("first_dresser");
i = document.getElementById("your guess");
j = document.getElementById("click");

function nextImage(el){
	if ( el.src.match("image/whitecolor.PNG")){
		el.src = "image/pinkcolor.PNG";
	} else if (el.src.match("image/pinkcolor.PNG")){
		el.src = "image/bluecolor.PNG";
	} else if (el.src.match("image/bluecolor.PNG")){
		el.src = "image/redcolor.PNG";
		} else if (el.src.match("image/redcolor.PNG")){
		el.src = "image/orangecolor.PNG";
			} else if (el.src.match("image/orangecolor.PNG")){
		el.src = "image/whitecolor.PNG";
	} else {
		el.src.match("image/whitecolor.PNG")
	}
}

function nextImage2(el){
	if ( el.src.match("image/whitecolor.PNG")){
		el.src = "image/pinkcolor.PNG";
	} else if (el.src.match("image/pinkcolor.PNG")){
		el.src = "image/orangecolor.PNG";
	} else if (el.src.match("image/orangecolor.PNG")){
		el.src = "image/redcolor.PNG";
		} else if (el.src.match("image/redcolor.PNG")){
		el.src = "image/bluecolor.PNG";
			} else if (el.src.match("image/bluecolor.PNG")){
		el.src = "image/whitecolor.PNG";
	} else {
		el.src.match("image/whitecolor.PNG")
	}
}
 
 
  function nextImage3(el){
		if ( el.src.match("image/whitecolor.PNG")){
		el.src = "image/pinkcolor.PNG";
	} else if (el.src.match("image/pinkcolor.PNG")){
		el.src = "image/orangecolor.PNG";
	} else if (el.src.match("image/orangecolor.PNG")){
		el.src = "image/redcolor.PNG";
		} else if (el.src.match("image/redcolor.PNG")){
		el.src = "image/bluecolor.PNG";
			} else if (el.src.match("image/bluecolor.PNG")){
		el.src = "image/whitecolor.PNG";
	} else {
		el.src.match("image/whitecolor.PNG")
	}
	
}



function changeDresser(el) {
	x=document.getElementById("your guess").value;
	if (x !== "HUNNY") { 
	
	} 
	else { 
	d.classList.remove("invisible");
	h.src="image/dresser.png";
	} 
	
} 	
	
	
 function switchImage(el){
	if (a.src.match("image/pinkcolor") && b.src.match("image/bluecolor") && c.src.match("image/redcolor")){
		f.classList.remove("invisible");
		console.log("Pooh!");
		 

		
	} else{
		
	}
}

 function switchImage(el){
	if (a.src.match("image/pinkcolor") && b.src.match("image/bluecolor") && c.src.match("image/redcolor")){
		f.classList.remove("invisible");
		console.log("Pooh!");
		 

		
	} else{
		
	}
}
/* The function SwitchToDoor is when the key image is clicked it will change the image of the closed door to the open*/ 
function switchToDoor(el){
	
	j.src="image/open_door.PNG";
	
	
	
	
}


 

