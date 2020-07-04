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
  if (food !== restaurant.menus.breakfast[0]) {
    if (food.type === "lunch") {
      restaurant.menus.lunch.push(food)
    } else if (food.type === "breakfast") {
      restaurant.menus.breakfast.push(food)
    } else {
      restaurant.menus.dinner.push(food)
    }
  }
}


function removeMenuItem(restaurant, food, menu) {
  if (menu) {
    if (food == restaurant.menus.breakfast[0].name) {
      restaurant.menus.breakfast = [];
    } else if (food == restaurant.menus.dinner[0].name) {
    restaurant.menus.dinner = [];
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
