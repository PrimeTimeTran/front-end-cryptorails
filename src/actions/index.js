import axios from 'axios';

// Fetch Prices
export const FETCH_PRICES = 'FETCH_PRICES';
export function fetchPrices() {
  const url = "https://api.coinbase.com/v2/prices/BTC-USD/spot"
  const request = axios.get(url);

  return {
    type: FETCH_PRICES,
    payload: request
  }
}

// Select Exchange
export const SELECT_EXCHANGE = 'SELECT_EXCHANGE';
export function selectExchange(exchange) {
  const exchanges = ['Coinbase', 'Bitfinex', 'Bittrex']

  function correctExchange(element) {
    return element === exchange;
  }

  const pickedExchange = exchanges.findIndex(correctExchange) + 1
  const url = `http://localhost:3000/home/${pickedExchange}`

  const request = axios.get(url);
  console.log('Request', request);
  return {
    type: SELECT_EXCHANGE,
    payload: request
  }
}

function whichExchange(id) {
  const exchanges = ['Coinbase', 'Bitfinex', 'Bittrex']
}



// Select Coin
export const SELECT_COIN = 'SELECT_COIN';
export function selectedCoin(coin) {
  return {
    type: SELECT_COIN,
    payload: coin
  }
}