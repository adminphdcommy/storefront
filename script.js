window.addEventListener("load",getLocalStorage)

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
	PreProduct1.className = " Theme-A-Product ";
	PreProduct2.className = " Theme-A-Product ";
	PreProduct3.className = " Theme-A-Product ";
	PreProduct4.className = " Theme-A-Product ";
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

document.getElementById("cname").addEventListener("blur", setComName);

function setComName(){
	var companyName1 = document.getElementById("comname1");
	var companyName2 = document.getElementById("comname2");
	var companyName3 = document.getElementById("comname3");
	var newComName = document.getElementById("cname").value.toUpperCase();
	console.log(companyName1)
	console.log(companyName2.innerHTML)
	if(newComName==""){
		
		document.getElementById("cnameerror").innerHTML = "Company Name can't be empty";
		
	}
	else{
		document.getElementById("cnameerror").innerHTML = "";
		companyName1.innerHTML = newComName;
		companyName2.innerHTML = newComName;
		companyName3.innerHTML = newComName;
		console.log(document.getElementById('cname').value);
		
	}
}


document.getElementById("logourl").addEventListener("blur", setlogo);

function setlogo(){
	var newlogo = document.getElementById("logourl").value;
	var logolocation = document.getElementById("Plogo");
		
	if(!newlogo.match(/http/)){
		document.getElementById("logourlerror").innerHTML = "Please put a valid URL";
	}
	else{
		document.getElementById("logourlerror").innerHTML = "";
		console.log(newlogo)
		logolocation.removeAttribute("src");
		logolocation.setAttribute("src",newlogo);
	}
	
}

document.getElementById("coverpic").addEventListener("blur", setcoverpic);

function setcoverpic(){
	var newcoverpic = document.getElementById("coverpic").value;
	var coverpiclocation = document.getElementById("PCoverPic");
		
	if(!newcoverpic.match(/http/)){
		document.getElementById("coverpicerror").innerHTML = "Please put a valid URL";
	}
	else{
		document.getElementById("coverpicerror").innerHTML = "";
		console.log(newcoverpic)
		coverpiclocation.removeAttribute("style");
		coverpiclocation.setAttribute("style","background-image:url(" + newcoverpic +")");
	}
	
}

function setLocalStorage(){
	var newComName = document.getElementById("cname").value.toUpperCase();
	var newlogo = document.getElementById("logourl").value;
	var newcoverpic = document.getElementById("coverpic").value;
	if (typeof(Storage) !== "undefined") {
		localStorage.setItem("newComName", newComName)
		localStorage.setItem("newlogo", newlogo)
		localStorage.setItem("newcoverpic", newcoverpic)
		document.getElementById("submiterror").innerHTML = ""
		document.getElementById("submiterror").innerHTML = "Successfully Saved"
		
	} else {
		document.getElementById("submiterror").innerHTML = "Sorry! No Web Storage support.."
	}

}

document.getElementById("ThemeAbtn").addEventListener("click", function(){setThemeLocalStorage("A")});
document.getElementById("ThemeBbtn").addEventListener("click", function(){setThemeLocalStorage("B")});


function setThemeLocalStorage(x){
	console.log("setThemeLocalStorage "+ x)
	if (typeof(Storage) !== "undefined") {
		localStorage.setItem("Theme", x)
		document.getElementById("themeerror").innerHTML = ""
		document.getElementById("themeerror").innerHTML = "Successfully Saved"
	} else {
		document.getElementById("themeerror").innerHTML = "Sorry! No Web Storage support.."
	}
	

}

function getLocalStorage(){
	
		document.getElementById("cname").value = localStorage.newComName;
		document.getElementById("cname").focus();
		document.getElementById("logourl").value = localStorage.newlogo;
		document.getElementById("logourl").focus();
		document.getElementById("coverpic").value = localStorage.newcoverpic;
		document.getElementById("coverpic").focus();
		document.getElementById("coverpic").blur();
		document.getElementById("geterror").innerHTML = ""
		document.getElementById("geterror").innerHTML = "Successfully Retrieve"
		if(localStorage.Theme=="A"){
			document.getElementById("ThemeAbtn").click()
		}
		else if(localStorage.Theme=="B"){
			document.getElementById("ThemeBbtn").click()
		}
		else{
			
		}
	
}


























