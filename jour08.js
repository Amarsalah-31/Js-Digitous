/// COUNTRIES////
const axios = require("axios");

let countriesNames = [];

function getCountries() {
	axios.get("https://restcountries.eu/rest/v2/all").then((res) => {
		let countries = res.data;

		countriesNames = countries.map(function (country) {
			return country.name;
		});

		console.log(countriesNames.join("-"));
	});
}

getCountries();
/// CHUCK ///const axios = require("axios");

//02 - Chuck Norris
function getFact() {
	axios.get("https://api.chucknorris.io/jokes/random").then((res) => {
		let fact = res.data;

		console.log(fact.value);
	});
}

getFact();
 ///POKEMON///const axios = require("axios");

function catchPokemon(id, lang) {
	axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`).then((res) => {
		let pokemon = res.data;
		let translatedName = pokemon.names.find((element) => {
			return element.language.name === lang;
		});

		console.log(`Mon pokemon numéro ${pokemon.id} s'appelle: ${translatedName.name}`);
	});
}

catchPokemon(1, "fr");
///BONUS- BLAK JACK ///
var prompt = require("prompt");

let playerScore = 0;
let bankScore = ["16", "17", "18", "19", "20", "21"];
bankScore = parseInt(bankScore[Math.floor(Math.random() * bankScore.length)]);

function blackJack() {
	prompt.get(
		{
			name: "turn",
			description:
				"Black Jack : tapez 'draw' pour avoir une nouvelle carte ou 'pass' pour voir le résultat",
		},
		function (err, res) {
			if (err) {
				console.log(err);
			}

			let draw = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

			if (res.turn === "draw") {
				playerScore += parseInt(
					draw[Math.floor(Math.random() * draw.length)]
				);

				if (playerScore > 21) {
					return console.log(
						`GAME OVER : vous avez obtenu ${playerScore} et dépassé 21`
					);
				}

				console.log(playerScore);
				blackJack();
			} else if (res.turn === "pass") {
				if (playerScore > 21) {
					console.log(
						`GAME OVER : vous avez obtenu ${playerScore} et dépassé 21`
					);
				} else if (playerScore <= bankScore) {
					console.log(
						`GAME OVER : vous avez obtenu ${playerScore}, la banque a obtenu ${bankScore} et vous a battu`
					);
				} else if (playerScore === 21) {
					console.log("BLACK JACK !!!");
				} else if (playerScore > bankScore) {
					console.log(
						`BRAVO : vous avez obtenu ${playerScore} et battu la banque qui a obtenu ${bankScore}`
					);
				}
			}
		}
	);
}

blackJack();