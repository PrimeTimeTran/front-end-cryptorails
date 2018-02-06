import { combineReducers } from 'redux'
import SelectCoinReducer from './select_coin_reducer'
import SelectExchangeReducer from './select_exchange_reducer'

const rootReducer = combineReducers({
  selectedExchange: SelectExchangeReducer,
  selectedCoin: SelectCoinReducer,
  selectedCoinPrice: 8000
})


const initialReducer = combineReducers({

})


export default rootReducer
