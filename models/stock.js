'use strict';
const { v4 : uuidv4 }= require("uuid");
module.exports = (sequelize, DataTypes) => {
  const Stock = sequelize.define('Stock',{
    price: DataTypes.DECIMAL,
    daysLow: DataTypes.DECIMAL,
    daysHigh: DataTypes.DECIMAL,
    fiftyLow: DataTypes.DECIMAL,
    fiftyHigh: DataTypes.DECIMAL,
    previousClose: DataTypes.DECIMAL,
    open: DataTypes.DECIMAL,
    date: DataTypes.DATE
  },{});
 /* Stock.beforeCreate((stock)=>{
    return stock.id = uuidv4();
  });*/
  return Stock;
};