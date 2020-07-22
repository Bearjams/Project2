function downloadCocktail() {
  
    let cocktailName = $('#cocktail').val();
      console.log('Downloading details for: ', cocktailName);
      var cocktail = encodeURIComponent(cocktailName);
      $.ajax({
          type: 'GET',
          url:  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + cocktail,
          timeout:5000,
          crossDomain: true,
          dataType:'json',
          success: function(result, status){
              if (!result.drinks || result.drinks.length <= 0) {
                  $( "#drink-section" ).html('No drinks found!!');
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
  
    var drinkSection = $("<div class='random-drink'>");
  
    var name = drink.strDrink;
  
    var pOne = $("<p>").text("Your Drink: " + name);
  
    drinkSection.append(pOne);
  
    var instructions = drink.strInstructions;
  
    var pTwo = $("<p>").text("Instructions: " + instructions);
  
    drinkSection.append(pTwo);
  
    var imgURL = drink.strDrinkThumb;
  
    var image = $("<img>").attr("src", imgURL);
  
    drinkSection.append(image);
  
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