const inputBox = document.querySelector("form > input[type=text]");
const btnSearch = document.getElementById('btnSearch');
const btnReset = document.getElementById('btnReset');
const searchResults = document.getElementById('searchResults');

function runSearch() {
    fetch('./travel_recommendation_api.json')
	.then(response => response.json())
    .then((jsonData)=>{
		var needle = inputBox.value.trim().toLowerCase();
		var len = needle.length;
		var minLen = 2;
		var matches = [];
		jsonData.countries.forEach(function(country){
			country.cities.forEach(function(city){
				var temp = 'country. ' + city.name.toLowerCase() + '. ' + city.description.toLowerCase();
				if (temp.includes(needle) && len > minLen) {
					matches.push(city);
				}
			});
		});
		jsonData.temples.forEach(function(temple){
			var temp = 'temple. ' + temple.name.toLowerCase() + '. ' + temple.description.toLowerCase();
			if (temp.includes(needle) && len > minLen) {
				matches.push(temple);
			}
		});
		jsonData.beaches.forEach(function(beach){
			var temp = 'beach. ' + beach.name.toLowerCase() + '. ' + beach.description.toLowerCase();
			if (temp.includes(needle) && len > minLen) {
				matches.push(beach);
			}
		});
		if(matches.length > 0){
			formatMatches(matches);
		}
    })
	.catch(error => {
	console.error('Error:', error);
	});
}

function formatMatches(matches){
	var html = '<h2>Matches</h2>';
	matches.forEach((match)=>{
		html += `
		<div class="match">
		<div class="imageUrl"><img src="${match.imageUrl}" /></div>
		<div class="name">${match.name}</div>
		<div class="description">${match.description}</div>
		<button>Visit</button>
		</div>
		`;
	});
	searchResults.innerHTML = html;
	searchResults.style.visibility= "visible";
}

function runReset() {
	inputBox.value = '';
	searchResults.innerHTML = '';
	searchResults.style.visibility= "hidden";
}

btnSearch.addEventListener('click', runSearch);

btnReset.addEventListener('click', runReset);
