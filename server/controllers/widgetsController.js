var db = require('../db');

var getAllWidgets = function(req, res) {

  db.Widget.all()
    .then(widgets => {
      console.log(widgets);
      res.status(200).json(widgets || {});
    });

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

  db.Widget.update({
    quantity: req.params.quantity
  },
    {where: {id: req.params.widgetId}}
  )
  .then(() => {
    res.status(201).send('widget quantity updated to: ' + req.params.quantity);
  });
};

var addNewWidget = function(req, res) {
  var categoryName = req.body.category;
  var sizeName = req.body.size;
  var colorName = req.body.color;
  var quantity = 1;

  var params = {
    categoryId: null,
    sizeId: null,
    finishId: null
  };

  var setCategoryId = function() {
    return db.Category.findOrCreate({ where: {name: categoryName}})
    .then(category => {
      if (!category) {
        console.log('category not found in DB');
      } else {
        params.categoryId = category.id;
      }
    });
  };

  var setSizeId = function() {
    return db.Size.findOrCreate({ where: {name: sizeName}})
    .then(size => {
      if (!size) {
        console.log('size not found in DB');
      } else {
        params.sizeId = size.id;
      }
    });
  };

  var setColorId = function() {
    return db.Finish.findOrCreate({ where: {name: colorName}})
    .then(finish => {
      if (!finish) {
        console.log('finish not found in DB');
      } else {
        params.finishId = finish.id;
      }
    });
  };

  var addWidget = function () {
    db.Widget.create(params);
  };

  setCategoryId()
    .then(setSizeId)
    .then(setColorId)
    .then(addWidget)
    .then(() => {
      res.status(201).send('new widget added');
    });
};


module.exports = {
  getAllWidgets: getAllWidgets,
  getWidgetsByCategory: getWidgetsByCategory,
  getWidgetsBySize: getWidgetsBySize,
  getWidgetsByFinish: getWidgetsByFinish,
  updateWidgetQuantity: updateWidgetQuantity,
  addNewWidget: addNewWidget
};