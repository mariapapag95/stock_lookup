import React, {Component} from 'react';
import PriceOutput from './components/PriceOutput'
import TickerInput from './components/TickerInput'
import NumberDisplay from './components/NumberDisplay'
import './App.css';

class App extends Component {
    state = {
        tickerSym: '',
        priceValue: '',
        priceError: false,
        someNums : [1,2,3,4,546,3245,74,34,53]
    }
    updatePrice = (event) => {
        event.preventDefault()
        const symbol = document.getElementById("ticker").value
        const promise = fetch(`https://api.iextrading.com/1.0/stock/${symbol}/quote`)
        // backticks used whenever you need to insert a variable like formating a string 
        // in this case for the ${symbol}
        promise.then(blob => blob.json()).then(json=>{
            this.setState({
                priceValue: json.latestPrice,
                priceError: false
            })
            }).catch (error =>{
                this.setState({
                    priceError: true
                })
            });
    }
    render () {
        const outputNums = this.state.someNums.map((element, i) => {
            return <NumberDisplay numValue={element} key={i} />
            // need to set a key when youre create a list of react elements 
        })
        return (
            <div className="App">
                <TickerInput clicked={this.updatePrice}/>
                <PriceOutput priceError={this.state.showError} priceValue={this.state.priceValue}/>
                {outputNums}
            </div>
        );
    }    
}

export default App;


// top level application state
// the changes cascade down to components
// updating state will cause the elements that use that value to update dynamically

// anything other than a string takes curly brackets 
// basically always use curly braces beacuse it takes strings in there as well
