var startSearch = document.querySelector(".start-search");
var greetingContainer = document.querySelector(".greeting-container");
var searchCriterionContainer = document.querySelector(".search-criterion-container")
var findOrganizations = document.querySelector(".find-organizations");
var containerNameOrganization = document.querySelector(".container-name-organization")
var hideShowListName = document.querySelector(".hide-show-list-name")
var containerAddressOrganization = document.querySelector(".container-address-organization")
var hideShowListAddress = document.querySelector(".hide-show-list-address")
var containerСountriesOrganization = document.querySelector(".container-countries-organization")
var hideShowListСountries = document.querySelector(".hide-show-list-countries")
var containerTownOrganization = document.querySelector(".container-town-organization")
var hideShowListTown = document.querySelector(".hide-show-list-town")
var containerResultSearchOrganizations = document.querySelector(".container-result-search-organizations")



var url = "https://api.globalgiving.org/api/public/orgservice/all/organizations/?api_key=ecfad408-93c0-4678-b010-822998d984ed"

var urlOraganization = "https://api.globalgiving.org/api/public/orgservice/organization/bridge/"

var apiKey = "?api_key=ecfad408-93c0-4678-b010-822998d984ed"

var dataNameOrganizations = []
var bridgeOrganization = []

/*var urlWather = "http://api.weatherstack.com/current?access_key=655c5c4874475e0103c32e2cffb6174f&query=москва"*/
containerResultSearchOrganizations.style.display = "none"
searchCriterionContainer.style.display = "none"

 $.getJSON(url, function (data){
 		for(var i = 0; i < data["organizations"]["organization"].length; i++){
			console.log(data["organizations"]["organization"][i])
			dataNameOrganizations.push(data["organizations"]["organization"][i]["name"])

		}

	hideShowListName.addEventListener("click", function(){
		for(var i = 0; i < dataNameOrganizations.length; i++){
			/*console.log(dataNameOrganizations[i])*/
			boxNameOrganizations = document.createElement("div")
			boxNameOrganizations.classList.add("name-organization")
			containerNameOrganization.appendChild(boxNameOrganizations)
			boxNameOrganizations.innerHTML = dataNameOrganizations[i]
			boxNameOrganizations.setAttribute("brigeId", data["organizations"]["organization"][i]["bridgeId"])
				boxNameOrganizations.addEventListener("click", function(){
					var elementName = event.target
					elementName.style.background = "orange"
					var idName = elementName.getAttribute("brigeId")
					brigeIdOrganization = idName
					console.log(idName)
				})
				boxNameOrganizations.addEventListener("mouseover", function(){
					var elementName = event.target
					elementName.style.background = "#00f3ff91"
				})
				boxNameOrganizations.addEventListener("mouseout", function(){
					var elementName = event.target
					elementName.style.background = "#00000000"
				})
		}

		
	})	
	hideShowListAddress.addEventListener("click", function(){
		for(var i = 0; i < dataNameOrganizations.length; i++){
			boxAddressOrganizations = document.createElement("div")
			boxAddressOrganizations.classList.add("address-organization")
			containerAddressOrganization.appendChild(boxAddressOrganizations)
			boxAddressOrganizations.innerHTML = data["organizations"]["organization"][i]["addressLine1"]
			boxAddressOrganizations.setAttribute("brigeId", data["organizations"]["organization"][i]["bridgeId"])
				boxAddressOrganizations.addEventListener("click", function(){
					var elementAddress = event.target
					elementAddress.style.background = "orange"
					var idAddress = elementAddress.getAttribute("brigeId")
					brigeIdOrganization = idAddress
					console.log(idAddress)
				})
				boxAddressOrganizations.addEventListener("mouseover", function(){
					var elementName = event.target
					elementName.style.background = "#00f3ff91"
				})
				boxAddressOrganizations.addEventListener("mouseout", function(){
					var elementName = event.target
					elementName.style.background = "#00000000"
				})
		}
		
	})
	hideShowListСountries.addEventListener("click", function(){
		for(var i = 0; i < dataNameOrganizations.length; i++){
			boxCountriesOrganizations = document.createElement("div")
			boxCountriesOrganizations.classList.add("countries-organization")
			containerСountriesOrganization.appendChild(boxCountriesOrganizations)
			boxCountriesOrganizations.innerHTML = data["organizations"]["organization"][i]["country"]
			boxCountriesOrganizations.setAttribute("brigeId", data["organizations"]["organization"][i]["bridgeId"])
				boxCountriesOrganizations.addEventListener("click", function(){
					var elementCountries = event.target
					elementCountries.style.background = "orange"
					var idCountries = elementCountries.getAttribute("brigeId")
					brigeIdOrganization = idCountries
					console.log(idCountries)
				})
				boxCountriesOrganizations.addEventListener("mouseover", function(){
					var elementName = event.target
					elementName.style.background = "#00f3ff91"
				})
				boxCountriesOrganizations.addEventListener("mouseout", function(){
					var elementName = event.target
					elementName.style.background = "#00000000"
				})
		}
	})
	hideShowListTown.addEventListener("click", function(){
		for(var i = 0; i < dataNameOrganizations.length; i++){
			boxTownOrganizations = document.createElement("div");
			boxTownOrganizations.classList.add("town-organization");
			containerTownOrganization.appendChild(boxTownOrganizations)
			boxTownOrganizations.innerHTML = data["organizations"]["organization"][i]["city"]
			boxTownOrganizations.setAttribute("brigeId", data["organizations"]["organization"][i]["bridgeId"])
				boxTownOrganizations.addEventListener("click", function(){
					var elementTwon = event.target
					elementTwon.style.background = "orange"
					var idTown = elementTwon.getAttribute("brigeId")
					brigeIdOrganization = idTown
					console.log(idTown)
				})
				boxTownOrganizations.addEventListener("mouseover", function(){
					var elementName = event.target
					elementName.style.background = "#00f3ff91"
				})
				boxTownOrganizations.addEventListener("mouseout", function(){
					var elementName = event.target
					elementName.style.background = "#00000000"
				})
		}
	})
	
})




startSearch.addEventListener("click", function(){
	greetingContainer.style.display = "none"
	searchCriterionContainer.style.display = "block"
	/*var testTree = "https://api.globalgiving.org/api/public/projectservice/organizations/189/projects?api_key=ecfad408-93c0-4678-b010-822998d984ed"
	var testTwo = "https://api.globalgiving.org/api/public/projectservice/regions?api_key=ecfad408-93c0-4678-b010-822998d984ed"
	var test = "https://api.globalgiving.org/api/public/projectservice/countries/IN/projects?api_key=ecfad408-93c0-4678-b010-822998d984ed"*/
})




findOrganizations.addEventListener("click", function(){
containerResultSearchOrganizations.style = "block"
searchCriterionContainer.style.display = "none"

var query = urlOraganization + brigeIdOrganization + apiKey


 $.getJSON(query, function (data){
 	console.log(query)
 	console.log(data["organization"])
 	
 	var boxOrganizationSearchResult = document.createElement("div")
 	boxOrganizationSearchResult.classList.add("box-organization-search-result")
 	containerResultSearchOrganizations.appendChild(boxOrganizationSearchResult)
 	var nameOrganonization = document.createElement("div")
 	nameOrganonization.classList.add("name-organization-result");
 	boxOrganizationSearchResult.appendChild(nameOrganonization)
 	nameOrganonization.innerHTML = data["organization"]["name"]
 	var adressOrganization = document.createElement("div")
 	adressOrganization.classList.add("adress-organization")
 	boxOrganizationSearchResult.appendChild(adressOrganization)
 	adressOrganization.innerHTML = data["organization"]["addressLine1"]
 	var goalsOrganization = document.createElement("div")
 	goalsOrganization.classList.add("goals-organization");
 	boxOrganizationSearchResult.appendChild(goalsOrganization)
 	goalsOrganization.innerHTML = data["organization"]["mission"]
 	var logotipOrganization = document.createElement("img")
 	logotipOrganization.classList.add("logotip-organization")
 	goalsOrganization.appendChild(logotipOrganization)
 	logotipOrganization.setAttribute("src", data["organization"]["logoUrl"])
 	var urlOrganizations = document.createElement("div")
 	urlOrganizations.classList.add("url-organization")
 	boxOrganizationSearchResult.appendChild(urlOrganizations)
 	var url = document.createElement("a")
 	url.setAttribute("href", data["organization"]["url"])
 	urlOrganizations.appendChild(url)
 	url.innerHTML = "Ссылка на сайт организации"
 	console.log(url)

 })









})
 	/*	var xhrWater = new XMLHttpRequest()
			xhrWater.open("GET", url)
 			xhrWater.responseType = "document"
 			xhrWater.onload = () => {
 				var data = xhrWater
 	
 				console.log(data)
 			}

 	xhrWater.send()*/

/* 	var request = new XMLHttpRequest();
	request.open('GET', urlWather, true);

	request.onload = function() {
  	if (this.status >= 200 && this.status < 400) {

   	 var data = JSON.parse(this.response);
   	 console.log(data)
  	} else {

	}
};

request.onerror = function() {

};

request.send();*/


/*
var request = new XMLHttpRequest();
request.open('GET', urlWather, true);
request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
request.send(data);*/
/*

var request = new XMLHttpRequest();
request.open('GET', url, true);

request.onload = function() {
  if (this.status >= 200 && this.status < 400) {
    // Success!
    var resp = this.response;
    console.log(resp)
  } else {
    // We reached our target server, but it returned an error

  }
};

request.onerror = function() {
  // There was a connection error of some sort
};

request.send();*/




/*var request = new XMLHttpRequest();
request.open('GET', url, true);

request.onload = function() {
  if (this.status >= 200 && this.status < 400) {
    // Success!
    var data = JSON.parse(this.response);
    console.log(data)
  } else {
    // We reached our target server, but it returned an error

  }
};

request.onerror = function() {
  // There was a connection error of some sort
};

request.send();*/



/*var request = new XMLHttpRequest();
request.open('GET', url);
request.onload = function() {
	var data = this.response
	console.log(data)
}
*/

/*request.onload = function() {
  if (this.status >= 200 && this.status < 400) {
    // Success!
    var data = this.response
    console.log(data)

	var data = JSON.parse(this.response);
    console.log(data)

	} else {
    // We reached our target server, but it returned an error

  }
};

request.onerror = function() {
  // There was a connection error of some sort
};*/
/*
request.send();
*/
