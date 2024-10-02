const inputBox = document.querySelector("form > input[type=text]");
const btnSearch = document.getElementById('btnSearch');
const btnReset = document.getElementById('btnReset');
const searchResults = document.getElementById('searchResults');

function runSearch() {
	console.log('runSearch called');
	console.log('^^^' + inputBox.value.trim() + '^^^');
	console.log(typeof jsonData);
	console.log(typeof jsonData.countries);
	console.log(jsonData);
	console.log(jsonData.countries);
	console.log(jsonData.temples);
	console.log(jsonData.beaches);
	
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
	
	//matches.forEach((match)=>{console.log(match)});
	
	//jsonData.forEach(()=>{});

	/*
	const input = document.getElementById('conditionInput').value.toLowerCase();
	const resultDiv = document.getElementById('result');
	resultDiv.innerHTML = '';
	*/
	/*
	fetch('./travel_recommendation_api.json')
	.then(response => response.json())
	.catch(error => {
	console.error('Error:', error);
	});
	*/
	
	//return matches;
	if(matches.length > 0){
		formatMatches(matches);
	}

}

function formatMatches(matches){
	var html = '<h2>Matches</h2>';
	matches.forEach((match)=>{
		console.log(match)
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
	console.log('runReset called');
	inputBox.value = '';
	searchResults.innerHTML = '';
	searchResults.style.visibility= "hidden";
}

btnSearch.addEventListener('click', runSearch);

//matches.forEach((match)=>{console.log(match)});

btnReset.addEventListener('click', runReset);

const jsonData = {
    "countries": [
      {
        "id": 1,
        "name": "Australia",
        "cities": [
          {
            "name": "Sydney, Australia",
            "imageUrl": "sydney.jpg",
            "description": "A vibrant city known for its iconic landmarks like the Sydney Opera House and Sydney Harbour Bridge."
          },
          {
            "name": "Melbourne, Australia",
            "imageUrl": "melbourne.jpg",
            "description": "A cultural hub famous for its art, food, and diverse neighborhoods."
          }
        ]
      },
      {
        "id": 2,
        "name": "Japan",
        "cities": [
          {
            "name": "Tokyo, Japan",
            "imageUrl": "tokyo.jpg",
            "description": "A bustling metropolis blending tradition and modernity, famous for its cherry blossoms and rich culture."
          },
          {
            "name": "Kyoto, Japan",
            "imageUrl": "kyoto.jpg",
            "description": "Known for its historic temples, gardens, and traditional tea houses."
          }
        ]
      },
      {
        "id": 3,
        "name": "Brazil",
        "cities": [
          {
            "name": "Rio de Janeiro, Brazil",
            "imageUrl": "rio.jpg",
            "description": "A lively city known for its stunning beaches, vibrant carnival celebrations, and iconic landmarks."
          },
          {
            "name": "São Paulo, Brazil",
            "imageUrl": "sao-paulo.jpg",
            "description": "The financial hub with diverse culture, arts, and a vibrant nightlife."
          }
        ]
      }
    ],
    "temples": [
      {
        "id": 1,
        "name": "Angkor Wat, Cambodia",
        "imageUrl": "angkor-wat.jpg",
        "description": "A UNESCO World Heritage site and the largest religious monument in the world."
      },
      {
        "id": 2,
        "name": "Taj Mahal, India",
        "imageUrl": "taj-mahal.jpg",
        "description": "An iconic symbol of love and a masterpiece of Mughal architecture."
      }
    ],
    "beaches": [
      {
        "id": 1,
        "name": "Bora Bora, French Polynesia",
        "imageUrl": "bora-bora.jpg",
        "description": "An island known for its stunning turquoise waters and luxurious overwater bungalows."
      },
      {
        "id": 2,
        "name": "Copacabana Beach, Brazil",
        "imageUrl": "copacabana.jpg",
        "description": "A famous beach in Rio de Janeiro, Brazil, with a vibrant atmosphere and scenic views."
      }
    ]
};

