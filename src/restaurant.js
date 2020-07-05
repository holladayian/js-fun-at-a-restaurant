function createRestaurant(name) {
  return {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }
}

function addMenuItem(restaurant, food) {
  if (!restaurant.menus[food.type].includes(food)) {
    restaurant.menus[food.type].push(food)
  }
}


function removeMenuItem(restaurant, food, menu) {
  if (menu) {
    for (var i = 0; i < restaurant.menus[menu].length; i++) {
      if (food == restaurant.menus[menu][i].name) {
        restaurant.menus[menu].splice(food, 1)
      }
    }
    return `No one is eating our ${food} - it has been removed from the ${menu} menu!`
  } else {
    return `Sorry, we don't sell ${food}, try adding a new recipe!`
  }
}

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
