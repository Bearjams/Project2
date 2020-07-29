//How do you want it too look?
// I want a table that has the drink search recorded with a link to that drink

// Get references to page elements
var $cocktail = $("#cocktail");

// The API object contains methods for each kind of request we'll make
var API = {
  searchHistory: function(search){
    return $.ajax({
        headers: {
            "Content-Type": "application/json"
        },
        type: "GET",
        url: "api/examples",
        data: JSON.stringify(search)
    })
  }},