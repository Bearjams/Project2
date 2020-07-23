module.exports = function(sequelize, DataTypes) {
  var Example = sequelize.define("Example", {
    name: DataTypes.STRING,
    instructions: DataTypes.TEXT,
    ingredients: DataTypes.STRING
  });
  return Example;
};
