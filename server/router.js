var {
  getAllWidgets,
  getWidgetsByCategory,
  getWidgetsBySize,
  getWidgetsByFinish,
  updateWidgetQuantity,
  addNewWidget } = require('./controllers/widgetsController');

var {
  createOrder,
  addWidgetToOrder,
  removeWidetFromOrder,
  deleteOrder } = require('./controllers/ordersController');

module.exports = function(app, express) {
  app.get('/api/widgets', getAllWidgets);
  //get Widgets By Category
  app.get('/api/widgets/category/:category', getWidgetsByCategory);
  //get Widgets By Size
  app.get('/api/size/:size', getWidgetsBySize);
  //get Widgets By Finish
  app.get('/api/finish/:finish', getWidgetsByFinish);
  //create a new order
  app.post('/api/order', createOrder);
  //add Widget To an Order
  app.post('/api/order/:orderId/widget/:widgetId', addWidgetToOrder);
  //remove Widet From an Order
  app.delete('/api/order/:orderId/widget/:widgetId', removeWidetFromOrder);
  //delete Order
  app.delete('/api/order/:orderId', deleteOrder);
  //update Widget Quantity
  app.put('/api/widget/:widgetId/quantity/:quantity', updateWidgetQuantity);
  //add New Widget
  app.post('/api/newWidget', addNewWidget);
};