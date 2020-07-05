function nameMenuItem(name) {
return 'Delicious ' + name
}

function createMenuItem(name, price, type) {
  return {
    name: name,
    price: price,
    type: type
  }
}

function addIngredients(ingredient, ingredientArray) {
  if (!ingredientArray.includes(ingredient)) {
    ingredientArray.push(ingredient)
  }
}

function formatPrice(dollaBillYo) {
  return '$' + dollaBillYo
}

function decreasePrice(price) {
  return (price * .9)
}

function createRecipe(title, ingredients , menuItemType) {
  return {
    title: title,
    ingredients: ingredients,
    type: menuItemType
  }
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
