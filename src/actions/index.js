import axios from 'axios';

export const FETCH_PRICES = 'FETCH_PRICES';

export function fetchPrices() {
  const url = "https://api.coinbase.com/v2/prices/BTC-USD/spot"
  const request = axios.get(url);

  return {
    type: FETCH_PRICES,
    payload: request
  }
}