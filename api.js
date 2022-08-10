var router = require('express').Router();
//var schedule = require('node-schedule');
var CronJob = require('cron').CronJob;
const axios = require('axios');
//scheduler
var myFuncCalls = 0;
const now = new Date();
var job = new CronJob(
	'*/60 * * * * *',
	 function(){
//
axios
.get('http://localhost:1003/api_v1/stock/')
.then(res => {
  //console.log(`statusCode: ${res.status}`);
  console.log(res.data);
  let stock = res.data;
  savingData(stock);
  //
})
/*.catch(error => {
  console.error(error);
});*/
        myFuncCalls++;
        console.log('que sera sera run ' + myFuncCalls +' turns ' + now);   
        
	},
	null,//
	false
);
function savingData(stock){
  console.log(stock)
  //
  axios.post('/api_v1/save_stock/', {
    price:stock.price,
    daysLow:stock.daysLow,
    daysHigh:stock.dayHigh,
    fiftyHigh:stock.fiftyHigh,
    fiftyLow:stock.fiftyLow,
    previousClose:stock.previousClose,
    open:stock.open,
    //date:now
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  //
/*  axios({
    method: 'post',
    url: 'http://localhost:1003/api_v1/save_stock/',
    headers: {
      'Authorization': 'token'
    },
    data: {
      price:stock.price,
      daysLow:stock.daysLow,
      daysHigh:stock.dayHigh,
      fiftyHigh:stock.fiftyHigh,
      fiftyLow:stock.fiftyLow,
      previousClose:stock.previousClose,
      open:stock.open,
      //date:now
    }
  });*/
    }
// Use this if the 4th param is default value(false)
//job.start()
 module.exports = router;