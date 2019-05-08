import React from 'react';
// any file that is defining a component you need this

function PriceOutput(props) {
    if (props.priceError) {
        return (
            <div className="PriceOutput">
            Could not find this ticker symbol, please try again.
            </div>
        )
    }
    return(
        <div className = "PriceOutput">
            ${props.priceValue}
        </div>
    );
}

export default PriceOutput