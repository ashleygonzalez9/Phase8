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
k = document.getElementById("next");
l = document.getElementById("switch");
m = document.getElementById("words");



/* each of the nextImage functions have cycling images and there's 3 for each individual box inside the bog color box. the images will just switch from one to the other*/ 
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


/*this function is when the correct word is typed in the text box it would make the key appear that has the invisible class  */
function changeDresser(el) {
	x=document.getElementById("your guess").value;
	if (x !== "HUNNY") { 
	
	} 
	else { 
	d.classList.remove("invisible");
	h.src="image/dresser.png";
	} 
	
} 	
	
	/* the swithImage function is when the images that are in the colorbox I have inside the bigger div all match up to the images that are in the correct order of the variables, then the image with the f variable will remove the invisible class and it would then appear on the screen */
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
		g.classList.remove("invisible");
		m.classList.remove("invisible");
		i.classList.remove("invisible");
		console.log("Pooh!");
		 

		
	} else{
		
	}
}
/* The function SwitchToDoor is when the key image is clicked it will change the image of the closed door to the open. I have the function switchToDoor on the key image inside my html so it knows that when the key is clicking it will do what's in this function.*/ 
function switchToDoor(el){
	
	j.classList.add ("invisible") 
	k.classList.remove ("invisible") 
	
	
	
}

function appearText(el){
	
	l.classList.add ("invisible") 
	k.classList.remove ("invisible") 
	
	
	
}


function nextRoom (el) { 
	document.location.href = "https://dannyramirez1.github.io/phaseeight/homepage.html";
} 
 
/*
	j.src="image/open_door.PNG";
	*/