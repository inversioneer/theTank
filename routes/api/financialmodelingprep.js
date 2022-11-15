const express = require('express');
const request = require('request');
const router = express.Router();
const {format, subDays} = require('date-fns');

// @route    Get api/financialmodelingprep/income/:ticker/:period
// @desc     GET income statement from financialmodelingprep
// @access   Public
router.get('/income/:ticker/:period', async (req,res ) => {
  try {
    const options = {
      uri: `https://financialmodelingprep.com/api/v3/income-statement/${req.params.ticker}?period=${req.params.period}&apikey=${process.env.apiKey}`,
      method: 'GET',
      headers: {'user-agent': 'node.js'}
    };

    request(options, (error, response, body) => {
      if(error) console.error(error);

      if(response.statusCode !== 200) {
        return res.status(404).json({msg: 'No income statement found'});
      }
      res.json(JSON.parse(body));
    });
  } catch (err) {
    console.log.error(err.message);
    res.status(500).send('Server Error');
  }
})

// @route    Get api/financialmodelingprep/cashflow/:ticker
// @desc     GET cashflow statement from financialmodelingprep
// @access   Public
router.get('/cashflow/:ticker/:period', async (req,res ) => {
  try {
    const options = {
      uri: `https://financialmodelingprep.com/api/v3/cash-flow-statement/${req.params.ticker}?period=${req.params.period}&apikey=${process.env.apiKey}`,
      method: 'GET',
      headers: {'user-agent': 'node.js'}
    };

    request(options, (error, response, body) => {
      if(error) console.error(error);

      if(response.statusCode !== 200) {
        return res.status(404).json({msg: 'No cashflow statement found'});
      }
      res.json(JSON.parse(body));
    });
  } catch (err) {
    console.log.error(err.message);
    res.status(500).send('Server Error');
  }
})

// @route    Get api/financialmodelingprep/balance/:ticker
// @desc     GET balance sheet from financialmodelingprep
// @access   Public
router.get('/balance/:ticker/:period', async (req,res ) => {
  try {
    const options = {
      uri: `https://financialmodelingprep.com/api/v3/balance-sheet-statement/${req.params.ticker}?period=${req.params.period}&apikey=${process.env.apiKey}`,
      method: 'GET',
      headers: {'user-agent': 'node.js'}
    };

    request(options, (error, response, body) => {
      if(error) console.error(error);

      if(response.statusCode !== 200) {
        return res.status(404).json({msg: 'No balance sheet found'});
      }
      res.json(JSON.parse(body));
    });
  } catch (err) {
    console.log.error(err.message);
    res.status(500).send('Server Error');
  }
})

// @route    Get api/financialmodelingprep/prices/:ticker
// @desc     GET daily prices from financialmodelingprep
// @access   Public
router.get('/prices/:ticker', async (req,res ) => {
  try {
    const options = {
      uri: `https://financialmodelingprep.com/api/v3/historical-price-full/${req.params.ticker}?timeseries=15000&apikey=${process.env.apiKey}`,
      method: 'GET',
      headers: {'user-agent': 'node.js'}
    };

    request(options, (error, response, body) => {
      if(error) console.error(error);

      if(response.statusCode !== 200) {
        return res.status(404).json({msg: 'No historical prices found'});
      }
      res.json(JSON.parse(body));
    });
  } catch (err) {
    console.log.error(err.message);
    res.status(500).send('Server Error');
  }
})

// @route    Get api/financialmodelingprep/earningsCalendar
// @desc     GET earnings calendar from financialmodelingprep
// @access   Private
router.get('/earningsCalendar', async (req,res ) => {
  try {

    // need to test this to see if it bridges years correctly
    var today = new Date();
      var start = format(subDays(today, 90), 'yyyy-MM-dd').toString();
      var end = format(today, 'yyyy-MM-dd').toString();
        
    const options = {
      uri: `https://financialmodelingprep.com/api/v4/earning-calendar-confirmed?from=${start}&to=${end}&apikey=${process.env.apiKey}`,
      method: 'GET',
      headers: {'user-agent': 'node.js'}
    };

    request(options, (error, response, body) => {
      if(error) console.error(error);

      if(response.statusCode !== 200) {
        return res.status(404).json({msg: 'No earnings calendar found'});
      }
      res.json(JSON.parse(body));
    });

  } catch (err) {
    console.log.error(err.message);
    res.status(500).send('Server Error');
  }
})

// @route    Get api/financialmodelingprep/tradeableSymbols
// @desc     GET NYSE tradeable symbols from financialmodelingprep
// @access   Private
router.get('/tradeableSymbols', async (req,res ) => {
  try {
        
    const options = {
      uri: `https://financialmodelingprep.com/api/v3/available-traded/list?apikey=${process.env.apiKey}`,
      method: 'GET',
      headers: {'user-agent': 'node.js'}
    };

    request(options, (error, response, body) => {
      if(error) console.error(error);

      if(response.statusCode !== 200) {
        return res.status(404).json({msg: 'No tradeable symbols found'});
      }
      res.json(JSON.parse(body));
    });

  } catch (err) {
    console.log.error(err.message);
    res.status(500).send('Server Error');
  }
})

module.exports = router;


module.exports = router;