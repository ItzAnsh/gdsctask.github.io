async function fetchCategories() {
	const response = await fetch("https://api.chucknorris.io/jokes/categories");

	const data = await response.json();
	return data;
}

async function fetchJoke(category) {
	const response = await fetch(
		`https://api.chucknorris.io/jokes/random?category=${category}`
	);

	const data = await response.json();
	return data.value;
}

//Category Fetcher
window.onload = async function () {
	const jokesText = document.querySelector(".jokesText");

	data = await fetchCategories();

	/* Array.from(data).forEach((category) => {
		const a = document.querySelector(".jokesText");
		a.innerHTML = category;
	}); */

	const row = document.createElement("div");
	row.className = "row";

	Array.from(data).forEach((category) => {
		const categoryDiv = document.createElement("div");
		categoryDiv.name = "category";
		categoryDiv.id = category;
		categoryDiv.className = "col-lg-3 col-md-3 categoryChoices text-center";

		categoryDiv.addEventListener("click", () => {
			currentCategory = event.target.id;
		});

		const label = document.createElement("label");
		label.htmlFor = category;
		label.innerHTML =
			category +
			"&emsp;<label class='container1' + id='" +
			category +
			"'><br class='d-lg-none d-md-block'/><input type='checkbox' id='" +
			category +
			"' class='cat'><div class='checkmark'></div></label>";

		categoryDiv.appendChild(label);
		row.appendChild(categoryDiv);

		document.querySelector(".abcdef").append(row);
	});
};

/* Array of categories */
var a = [];

// Add Elements to the array taken out from categories
function addElements() {
	var checkboxes = document.querySelectorAll("input[type=checkbox]:checked");

	for (var i = 0; i < checkboxes.length; i++) {
		var b = checkboxes[i].id;
		a.push(b);
		/* console.log("Ansh"); */
	}
	valueSet = new Set(a);
	var newA = Array.from(valueSet);
	console.log(newA);
	JokeShower(newA);
}

/* Category Switcher */
let currCategory;

/* Joke Printer */
async function JokeShower(categories) {
	for (var i = 0; i < categories.length; i++) {
		currCategory = categories[0];
		const value = await fetchJoke(currCategory);
		var jokesText = document.querySelector(".jokesText");
		jokesText.classList;
		jokesText.innerHTML += value + "<br /><br />";
		categories.shift();
	}
}

//Fetch Joke
/* const getJoke = document.querySelector(".getJoke");
getJoke.addEventListener("click", async function (currentCategory) {
	const value = await fetchJoke(currentCategory);
}); */
