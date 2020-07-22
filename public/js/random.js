function getRandomCocktail() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }

                // Examine the text in the response
                response.json().then(function (data) {
                    //console.log(data.drinks[0].strDrink);
                    displayRandomCocktail(data);
                });
            }
        )
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });
}

getRandomCocktail();

function displayRandomCocktail(cocktail) {
    console.log(cocktail.drinks[0].strDrink);

    var drinkSection = $("<div class='random-drink'>");

    var name = cocktail.drinks[0].strDrink;

    var pOne = $("<p>").text("Random Drink: " + name);

    drinkSection.append(pOne);

    var instructions = cocktail.drinks[0].strInstructions;

    var pTwo = $("<p>").text("Instructions: " + instructions);

    drinkSection.append(pTwo);

    var imgURL = cocktail.drinks[0].strDrinkThumb;

    var image = $("<img>").attr("src", imgURL);

    drinkSection.append(image);

    var drink = cocktail.drinks[0];
    let index = 1;
    let ingredientArray = [];
    while (drink['strIngredient' + index]) {
        ingredientArray.push({ name: drink['strIngredient' + index], amount: drink['strMeasure' + index] ? drink['strMeasure' + index] : "A dash " });
        index++;
    }
    console.log('Ingredients: ');
    ingredientArray.forEach((ingredient) => {
        console.log(`${ingredient.amount} of ${ingredient.name}`)
    });

    var text = '';
    text += `<b>Glass: </b><br/>${drink.strGlass}<br/><br/>`;
    text += '<b>Ingredients:</b></br>';
    ingredientArray.forEach((ingredient) => {
        text += `<li>${ingredient.amount} of ${ingredient.name}</li>`;
    });



    $("#drink-section").html(text);

    $("#drink-section").prepend(drinkSection);
}