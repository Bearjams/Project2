module.exports = function(sequelize, DataTypes) {
    var searchHistory = sequelize.define("searchHistory", {
      Search: DataTypes.STRING,
      Name: DataTypes.STRING,
      instructions: DataTypes.TEXT,
      ingredients: DataTypes.STRING
    });
    return searchHistory;
  };