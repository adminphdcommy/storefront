window.addEventListener("load",getcomname)
window.addEventListener("load",getlogo)
window.addEventListener("load",getcoverpic)

function getcomname(){
	console.log("getcomname")
	document.getElementById("comname1").innerHTML = localStorage.newComName;
	document.getElementById("comname2").innerHTML = localStorage.newComName;
	document.getElementById("comname3").innerHTML = localStorage.newComName;
}

function getlogo(){
	console.log("getlogo")
	document.getElementById("Plogo").removeAttribute("src");
	document.getElementById("Plogo").setAttribute("src",localStorage.newlogo);
}

function getcoverpic(){
	console.log("getcoverpic")
	document.getElementById("PCoverPic").removeAttribute("style");
	document.getElementById("PCoverPic").setAttribute("style","background-image:url(" + localStorage.newcoverpic +")");
}