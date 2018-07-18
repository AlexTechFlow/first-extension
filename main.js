var allImages = document.getElementsByTagName('img');
console.log(allImages);




for(var i=0; i < allImages.length; i++ ) {

	allImages[i].addEventListener("mouseover", function(){
		
	});

	var imageHeight = allImages[i].clientHeight;
	var imageWidth = allImages[i].clientWidth;

	allImages[i].setAttribute("src", "http://placekitten.com/" + imageWidth + "/" + imageHeight);


	document.body.style = "transition: 5s; transform: rotate(360deg);";
	document.body.style.backgroundColor = "steelblue";
	// document.body.style = "transition: 5s; transform: rotate(5deg);";

};



		// document.body.style.backgroundColor = "steelblue";
		// document.body.style = "transition: 5s; transform: rotate(5deg);";



	// allImages.addEventListener("click", transitionA);







// console.log("Hello World");
// document.body.style.backgroundColor = "steelblue";
// document.body.style = "transition: 5s; transform: rotate(5deg);";

