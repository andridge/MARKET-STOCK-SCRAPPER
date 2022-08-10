const stock_ctrl = require("./../controllers/stock_ctrl");
module.exports = function(express) {
    const route = express.Router();
    //
    route.get("/stock/",stock_ctrl.getData);
    route.post("/save_stock/",stock_ctrl.save);
    return route;  
};