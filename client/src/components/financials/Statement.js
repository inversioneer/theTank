import React, {Fragment} from 'react';
import Spinner from '../layout/Spinner';

const Statement = ({
    loading,
    statementKeys,
    statement,
    styles
}) => {

    var numeral = require('numeral'); //numeral.js package has lots of number formatting options
    numeral.defaultFormat('0,0');


    return ( loading===true ? <Spinner/> :
        <Fragment>
            {loading===false ? 
                <div className="fs-grid bg-white "> 
                    <div className={`fs-fixed ${styles}`}>  
                        {statementKeys.map(e => (
                            <div className="fs-item" key={e}>{e}</div>
                        ))}
                    </div>
                    <div className={`fs-scroll ${styles}`}>      
                        {statement.map(year => (
                            statementKeys.map(e => (
                                <div className="fs-item" key={e}>{(e === "date"? year[e]:numeral(year[e]).format())}</div>
                            ))
                        ))}
                    </div>
            </div> : <div>Failed to retrieve data</div>}
        </Fragment>
    )
}

export default Statement;
