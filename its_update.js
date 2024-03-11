async function changeMenu() {
	var response = await fetch("https://raw.githubusercontent.com/dariusk/corpora/master/data/technology/programming_languages_popular.json");
	const data = await response.json();
	const menu = document.getElementById("menu-menu-its")

	var languages = data.programming_languages_popular.slice(0, menu.childElementCount);
	menu.innerHTML = "";

	languages.forEach((element) => {
		menu.innerHTML += `
		<li id="nav-menu-item-${element}" class="menu-item menu-item-type-post_type menu-item-object-page narrow">
			<a href="https://it.wikipedia.org/wiki/${element}" target="_blank" class="">
				<span class="item_outer">
					<span class="item_text">${element}</span>
				</span>
			</a>
		</li>`
	});
	
	document.getElementsByClassName("eltdf-normal-logo")[0].src = "https://www.w3schools.com/images/w3schools_logo_500_04AA6D.png";
	document.getElementsByClassName("eltdf-dark-logo")[0].src = "https://www.w3schools.com/images/w3schools_logo_500_04AA6D.png";
	document.getElementsByClassName("eltdf-light-logo")[0].src = "https://www.w3schools.com/images/w3schools_logo_500_04AA6D.png";
}

changeMenu();
