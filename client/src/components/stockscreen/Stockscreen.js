import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getTradeableSymbols} from '../../actions/financialmodelingprep';
import {putCalendar} from '../../actions/calendar';


const Stockscreen = ({
  symbols,
  getTradeableSymbols,
  getEarningsCalendar,
  putCalendar
}) => {

  // these actions will need to be scheduled on server instead of triggered here
  useEffect(() =>{getTradeableSymbols();}, [getTradeableSymbols]);

  useEffect(() =>{if(symbols.length !== 0 && putCalendar(symbols));}, [symbols, putCalendar]);

  

  return (
    <div class="container">
      <h1 className="large text-primary">Stockscreen</h1>
      <p> Under construction</p>
    </div>
  )
}

Stockscreen.propTypes = {
  getTradeableSymbols: PropTypes.func.isRequired,
  getEarningsCalendar: PropTypes.func.isRequired,
  putCalendar: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  symbols: state.calendar.symbols,
  calendar: state.calendar,
});

export default connect(mapStateToProps, {getTradeableSymbols, putCalendar})(Stockscreen);