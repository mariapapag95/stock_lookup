import React from 'react';
// any file that is defining a component you need this

function TickerInput(props) {
    return(
        <div className = "TickerInput">
            <form>
                <input id="ticker" placeholder="Stock symbol"/>
                <button onClick={props.clicked} id="lookup"> Look up price</button>
            </form>
        </div>
    );
}

export default TickerInput