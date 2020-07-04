function takeOrder(order, orderList) {
  if (orderList.length < 3) {
    orderList.push(order)
  }
}

function refundOrder(num, orderList) {
  orderList.splice(num-1, 1)
}

function listItems(deliveryOrders) {
  var first = true;
  var names = '';
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (first === true) {
      names += `${deliveryOrders[i].item}`;
      first = false
    } else {
      names += `, ${deliveryOrders[i].item}`
    }
  }
  return names
}

function searchOrder(deliveryOrders, name) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].item === name) {
      return true
    } else {
      return false
    }
  }
}



module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
