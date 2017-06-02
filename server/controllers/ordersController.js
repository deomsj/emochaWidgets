var db = require('../db.js');

var createOrder = function (req, res) {
  console.log('createOrder');
};

var addWidgetToOrder = function (req, res) {
  console.log('addWidgetToOrder');
};

var removeWidetFromOrder = function (req, res) {
  console.log('removeWidetFromOrder');

};

var deleteOrder = function (req, res) {
  console.log('deleteOrder');
};


module.exports = {
  createOrder: createOrder,
  addWidgetToOrder: addWidgetToOrder,
  removeWidetFromOrder: removeWidetFromOrder,
  deleteOrder: deleteOrder
};