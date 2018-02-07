import axios from 'axios';

// Select Exchange
export const SELECT_EXCHANGE = 'SELECT_EXCHANGE';
export function selectExchange(exchange) {
  const exchanges = ['Coinbase', 'Bitfinex', 'Bittrex']

  function correctExchange(element) {
    return element === exchange;
  }
  const pickedExchange = exchanges.findIndex(correctExchange) + 1

  return {
    type: SELECT_EXCHANGE,
    payload: exchanges[pickedExchange - 1]
  }
}

export const SELECTED_CHART = 'SELECTED_CHART'
export function selectChartData(data) {
  return {
    type: SELECTED_CHART,
    payload: data
  }
}

// Select Coin
export const SELECT_COIN = 'SELECT_COIN';
export function selectCoin(coin) {
  return {
    type: SELECT_COIN,
    payload: coin
  }
}