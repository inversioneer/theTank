import React from 'react';
import PropTypes from 'prop-types';

const PriceItem = ({
    historical: {date, open, high, low, close, adjClose, volume}
}) => {

  var numeral = require('numeral'); //numeral.js package has lots of number formatting options
  numeral.defaultFormat('0.00');

  return (
    <tr>
        <td>{date}</td>
        <td>{numeral(open).format()}</td>
        <td>{numeral(high).format()}</td>
        <td>{numeral(low).format()}</td>
        <td>{numeral(close).format()}</td>
        <td>{numeral(adjClose).format()}</td>
        <td>{volume}</td>
    </tr>
  )
}

PriceItem.propTypes = {
    historical: PropTypes.array.isRequired
}

export default PriceItem