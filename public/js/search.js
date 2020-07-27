function downloadCocktail() {

    let cocktailName = $('#cocktail').val();
    console.log('Downloading details for: ', cocktailName);
    var cocktail = encodeURIComponent(cocktailName);
    $.ajax({
        type: 'GET',
        url: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + cocktail,
        timeout: 5000,
        crossDomain: true,
        dataType: 'json',
        success: function (result, status) {
            if (!result.drinks || result.drinks.length <= 0) {
                $("#drink-section").html('No drinks found!!');
                return;
            }

            // Get the first drink.
            var drink = result.drinks[0];
            displayRandomCocktail(drink);
        },
        error: function (errorMessage) {
            console.error(errorMessage);
        }
    });
}

downloadCocktail();

function displayRandomCocktail(drink) {
    //console.log(cocktail.drinks[0].strDrink);
    var name = drink.strDrink;
    var instructions = drink.strInstructions;
    var imgURL = drink.strDrinkThumb;
    var glassIn = text;

    var newCardCol = $("<div>").addClass("col-sm-5")
    var newCard = $("<div>").addClass("card hoverable");
    var cardImg = $("<div>").addClass("card-image").append($("<img>").attr("src", imgURL));
    newCard.append(cardImg);

    var cardContent = $("<div>").addClass("card-content");
    var cardTitle = $("<p>").addClass("truncate").text(name);
    cardContent.append(cardTitle);
    var cardPrice = $("<p>").text(instructions);
    cardContent.append(cardPrice);
    
    

    
    

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

    var carIng = $("<p>").html(text);
    cardContent.append(carIng);
    newCard.append(cardContent);


    newCardCol.append(newCard);
    $("#drink-section").prepend(newCardCol);
    
}