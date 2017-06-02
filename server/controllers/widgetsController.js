var db = require('../db.js');

var getAllWidgets = function(req, res) {
  console.log('getAllWidgets');
};

var getWidgetsByCategory = function(req, res) {
  console.log('getWidgetsByCategory');
};

var getWidgetsBySize = function(req, res) {
  console.log('getWidgetsBySize');
};

var getWidgetsByFinish = function(req, res) {
  console.log('getWidgetsByFinish');
};

var updateWidgetQuantity = function(req, res) {
  console.log('updateWidgetQuantity');
};

var addNewWidget = function(req, res) {
  console.log('addNewWidget');
};


module.exports = {
  getAllWidgets: getAllWidgets,
  getWidgetsByCategory: getWidgetsByCategory,
  getWidgetsBySize: getWidgetsBySize,
  getWidgetsByFinish: getWidgetsByFinish,
  updateWidgetQuantity: updateWidgetQuantity,
  addNewWidget: addNewWidget
};