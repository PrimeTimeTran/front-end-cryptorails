import { combineReducers } from 'redux'
import SelectExchangeReducer from './select_exchange_reducer'

const rootReducer = combineReducers({
  selectedExchange: SelectExchangeReducer,
})

export default rootReducer
