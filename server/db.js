var Sequelize = require('sequelize');

var db;
//initialize Sequelize with postgres with remote url
if (process.env.DATABASE_URL) {
  db = new Sequelize(process.env.DATABASE_URL, {dialect: 'postgres', logging: false });
} else {
  // otherwise initialize Sequelize with postgres on local machine
  db = new Sequelize('widgets', process.env.POSTGRES_USER, '', {dialect: 'postgres', logging: false });
}

db
  .authenticate()
  .then(() => {
    console.log('Successful connection to database.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

//create Widget table
var Widget = db.define('Widget', {
  quantity: Sequelize.INTEGER,
  //id (auto-generated)
  //createdAt (auto-generated)
  //updatedAt (auto-generated)
  //CategoryId (generated by join)
  //SizeId (generated by join)
  //ColorId (generated by join)
});

//create Category table
var Category = db.define('Category', {
  name: Sequelize.TEXT,
  //id (auto-generated)
  //createdAt (auto-generated)
  //updatedAt (auto-generated)
});

//create Size table
var Size = db.define('Size', {
  name: Sequelize.TEXT,
  //id (auto-generated)
  //createdAt (auto-generated)
  //updatedAt (auto-generated)
});

//create Finish table
var Finish = db.define('Finish', {
  name: Sequelize.TEXT,
  //id (auto-generated)
  //createdAt (auto-generated)
  //updatedAt (auto-generated)
});

//create Order table
var Order = db.define('Order', {
  orderNumber: Sequelize.INTEGER,
  //id (auto-generated)
  //createdAt (auto-generated)
  //updatedAt (auto-generated)
});

//create OrderItem table
var OrderItem = db.define('OrderItem');
//WidgetId (generated by join)
//OrderId (generated by join)
//createdAt (auto-generated)
//updatedAt (auto-generated)

//sync individual tables listed above and create join tables
Widget.sync({force: true})
  .then(() => Widget.belongsTo(Category, {foreignKey: 'CategoryId'}))
  .then(() => Category.hasMany(Widget, {foreignKey: 'CategoryId'}))
  .then(() => Category.sync())
  .then(() => Widget.belongsTo(Size, {foreignKey: 'SizeId'}))
  .then(() => Size.hasMany(Widget, {foreignKey: 'SizeId'}))
  .then(() => Size.sync())
  .then(() => Widget.belongsTo(Finish, {foreignKey: 'FinishId'}))
  .then(() => Finish.hasMany(Widget, {foreignKey: 'FinishId'}))
  .then(() => Finish.sync())
  .then(() => Order.belongsToMany(Widget, {through: OrderItem }))
  .then(() => Widget.belongsToMany(Order, {through: OrderItem }))
  .then(() => Order.sync())
  .then(() => Widget.sync())
  .then(() => OrderItem.sync());

module.exports = {
  Widget: Widget,
  Category: Category,
  Size: Size,
  Finish: Finish,
  Order: Order,
  OrderItem: OrderItem
};
