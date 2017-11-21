window.addEventListener("load",getcomname)
window.addEventListener("load",getlogo)
window.addEventListener("load",getcoverpic)
window.addEventListener("load",getTheme)

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

function getTheme(){
	console.log("getTheme")
	if(localStorage.Theme=="A"){
			ThemeA();
		}
		else if(localStorage.Theme=="B"){
			ThemeB();
		}
		else{
			
		}
}

function ThemeA(){
	var PreHeader = document.getElementById("Pheader");
	var PreBody = document.getElementById("PBody");
	var PreProduct1 = document.getElementById("ThemeProductList1");
	var PreProduct2 = document.getElementById("ThemeProductList2");
	var PreProduct3 = document.getElementById("ThemeProductList3");
	var PreProduct4 = document.getElementById("ThemeProductList4");
	var PreProductStyle1 = document.getElementById("prod1");
	var PreProductStyle2 = document.getElementById("prod2");
	var PreProductStyle3 = document.getElementById("prod3");
	var PreProductStyle4 = document.getElementById("prod4");
	
	PreHeader.className = "PreviewHeader Theme-A-Header-Color Theme-A-Font-Color";
	PreBody.className = "PreviewBody Theme-A-Font-Family";
	PreProduct1.className = "Theme-A-Product";
	PreProduct2.className = "Theme-A-Product";
	PreProduct3.className = "Theme-A-Product";
	PreProduct4.className = "Theme-A-Product";
	PreProductStyle1.className = "Theme-A-ProductStyle";
	PreProductStyle2.className = "Theme-A-ProductStyle";
	PreProductStyle3.className = "Theme-A-ProductStyle";
	PreProductStyle4.className = "Theme-A-ProductStyle";
}

function ThemeB(){
	var PreHeader = document.getElementById("Pheader");
	var PreBody = document.getElementById("PBody");
	var PreProduct1 = document.getElementById("ThemeProductList1");
	var PreProduct2 = document.getElementById("ThemeProductList2");
	var PreProduct3 = document.getElementById("ThemeProductList3");
	var PreProduct4 = document.getElementById("ThemeProductList4");
	var PreProductStyle1 = document.getElementById("prod1");
	var PreProductStyle2 = document.getElementById("prod2");
	var PreProductStyle3 = document.getElementById("prod3");
	var PreProductStyle4 = document.getElementById("prod4");
	
	PreHeader.className = "PreviewHeader Theme-B-Header-Color Theme-B-Font-Color";
	PreBody.className = "PreviewBody Theme-B-Font-Family";
	PreProduct1.className = "Theme-B-Product";
	PreProduct2.className = "Theme-B-Product";
	PreProduct3.className = "Theme-B-Product";
	PreProduct4.className = "Theme-B-Product";
	PreProductStyle1.className = "Theme-B-ProductStyle";
	PreProductStyle2.className = "Theme-B-ProductStyle";
	PreProductStyle3.className = "Theme-B-ProductStyle";
	PreProductStyle4.className = "Theme-B-ProductStyle";
}