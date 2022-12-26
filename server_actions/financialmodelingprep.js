const axios =  require('axios');
const Calendar = require('../models/Calendar');
const UpdateLog = require('../models/UpdateLog');

// Get NYSE tradeable symbols from Financial Modeling Prep API
const getTradeableSymbolList = async () => {
    try {

        const res = await axios.get('https://financialmodelingprep.com/api/v3/available-traded/list?apikey=d54c6a064dc58b5e943e47f5fdecdf06');

        const symArray = [];
        res.data.map(e => {
            if(e.exchangeShortName === "NYSE") {
                return symArray.push({
                    "symbol": e.symbol
                })
            } else {
                return null;
            }
        });
        return symArray;

    } catch (err) {
        console.error(err.message);
    };
}
//temporarily set all stocks as inactive
const inactiveAll = async () => {
    try {
        await Calendar.updateMany( {}, {"status" : "inactive"});
        console.log("All stocks statused inactive")
    } catch (err) {
        console.log('Error making all db entries inactive')
    };
}

const updateTradeableStocks = async () => {
    //Get latest list of tradeable stock symbols
    const tradeableSymbols = await getTradeableSymbolList();
    //Make status "inactive" for all entries
    await inactiveAll();

    // for each line in tradeableSymbols, make active if symbol is in database and add symbol if missing
    var newStocks = [];
    for (let i = 0; i < tradeableSymbols.length; i++) {
        try {
            
            const res = await Calendar.findOneAndUpdate(
                  { symbol: tradeableSymbols[i].symbol },
                  { "status" : "active" }
             );
            
            if(res === null) {
                const newSymbol = new Calendar({
                    "symbol": tradeableSymbols[i].symbol,
                    "filing_date": "1900-01-01",
                    "status": "active"
                });
                
                try {
                    const symbol = await newSymbol.save();
                    newStocks.push(symbol.symbol)
                } catch (err) {
                    console.log('Failed to save record to database')
                };
            }
            
        } catch (err) {
            console.log('Failed to get data from database')
        };
    };
    
    //log changes to db
    var today = new Date();
    var common = "Tradeable symbols update completed with the following new stocks added to database..."
    var fullUpdate = common + newStocks.join();
    console.log(fullUpdate);

    const newUpdate = new UpdateLog({
        "update": fullUpdate,
        "date": today
    });
    
    try {
        const update = await newUpdate.save();
    } catch (err) {
        console.log('Failed to save update log to database')
    };

};

module.exports = updateTradeableStocks