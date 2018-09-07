var orm = require("../config/orm.js");


var burger = {
    all: function(results) {
        orm.all("burgers", function(res) {
            results(res);
        });
    },
    create: function(cols, vals, results) {
        orm.create("burgers", cols, vals, function(res) {
            results(res);
        });
    },
    update: function(objColVals, condition, results) {
        orm.update("burgers", objColVals, condition, function(res) {
            results(res);
        });
    }
};

module.exports = burger;