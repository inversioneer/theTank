const express = require('express');
const router = express.Router();

const Calendar = require('../../models/Calendar');

// @route   GET api/calendar/
// @desc    Get all calendar entries from database
// @access  Private

router.get('/', async (req,res) => {
  try {
      const calendar = await Calendar.find().sort({date: -1});
      res.json(calendar);
  } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
  }
});

// @route   GET api/calendar/:symbol
// @desc    Get calendar entry by symbol
// @access  Private
router.get('/:symbol', async (req,res) => {
  try {
      const symbol = await Calendar.find({symbol: req.params.symbol});
      
        res.json(symbol);

  } catch (err) {
      console.error(err.message);

      res.status(500).send('Server Error');
  }
});

// @route   PUT api/calendar
// @desc    Add calendaer entry to database
// @access  Private

router.put('/', async (req, res) => {
  console.log(req.body.symbol);
  console.log(req.body.date);
  try {

    const addnew = new Calendar({
      symbol: req.body.symbol,
      date: req.body.date,
      status: req.body.status
    });
    const put = await addnew.save();
    res.json(put);
  

  } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    
  }
});

// @route   DELETE api/calendar/:id
// @desc    Delete individual ticker by id
// @access  Private

router.delete('/:id', async (req, res) => {

  try {
    const stock = await Calendar.findById(req.params.id);

    if (!stock) {
        return res.status(404).json({msg: 'Stock not found'});
    }

    await stock.remove();
    res.json({msg: 'Stock  removed from calendar'});

} catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
        return res.status(404).json({msg: 'Post not found'});
    }
    res.status(500).send('Server Error');
}
});

module.exports = router;