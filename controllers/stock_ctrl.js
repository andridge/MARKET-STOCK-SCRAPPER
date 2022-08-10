const{Stock} =  require("./../models/");
var puppeteer = require('puppeteer');
let self= {};
self.save = async(error,res,req)=>{
    try{
        let body = req.body;
        let data = Stock.create(body);
        return res.json({
            status:"ok",
            data:data
        })
    }catch(error){
        res.status(500).json({
            status:"error",
            data:error
        })
    }

}
self.getData = async(error, res, req,)=>{
    try{
        // let ticker = req.ticker;
        let ticker = 'GBPUSD=X';
         let url = 'https://finance.yahoo.com/quote/'+ticker+'?p='+ticker+'&.tsrc=fin-srch';
         const browser = await puppeteer.launch({
             headless: false
           });
           const page = await browser.newPage();
       
         await page.goto(url,{
             waitUntil: 'load',
             timeout: 0
         });
         
         for(var k = 1; k < 2; k++){
         var element = await page.waitForXPath('/html/body/div[1]/div/div/div[1]/div/div[2]/div/div/div[6]/div/div/div/div[3]/div[1]/div[1]/fin-streamer[1]');
         var price = await page.evaluate(element => element.textContent, element);
         var element2 = await page.waitForXPath('/html/body/div[1]/div/div/div[1]/div/div[3]/div[1]/div/div[1]/div/div/div/div[2]/div[2]/table/tbody/tr[1]/td[2]');
         var daysRange = await page.evaluate(element2 => element2.textContent,element2);
         var element3 = await page.waitForXPath('/html/body/div[1]/div/div/div[1]/div/div[3]/div[1]/div/div[1]/div/div/div/div[2]/div[2]/table/tbody/tr[2]/td[2]');
         var fiftyTwoWeekRage = await page.evaluate(element3 => element3.textContent,element3);
         var element4 = await page.waitForXPath('/html/body/div[1]/div/div/div[1]/div/div[3]/div[1]/div/div[1]/div/div/div/div[2]/div[1]/table/tbody/tr[1]/td[2]');
         var previousClose = await page.evaluate(element4 => element4.textContent,element4);
         var element5 = await page.waitForXPath('/html/body/div[1]/div/div/div[1]/div/div[3]/div[1]/div/div[1]/div/div/div/div[2]/div[1]/table/tbody/tr[2]/td[2]');
         var open = await  page.evaluate(element5 => element5.textContent,element5);
         var split1 = daysRange.split(/[-]/);
         daysLow = split1[0];
         dayHigh = split1[1];
         var split2 = fiftyTwoWeekRage.split(/[-]/);
         fiftyLow = split2[0];
         fiftyHigh = split2[1];
         //const now = new Date();
         //date.format(now, 'hh:mm A [GMT]Z', true);    // => '2015/01/02 23:14:05'
         console.log(price,daysLow,dayHigh,fiftyLow,fiftyHigh,previousClose,open);
         await page.waitForTimeout(600);
         }
     await browser.close();
     res.send({price,daysLow,dayHigh,fiftyLow,fiftyHigh,previousClose,open});
       }catch (error){
       res.status(500).json({
           status:"error",
           data:error
       })
   }
}
//export models
module.exports = self;