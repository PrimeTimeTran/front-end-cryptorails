import { combineReducers } from 'redux'
import PriceReducer from './price_reducer'

const rootReducer = combineReducers({
  prices: PriceReducer
})

export default rootReducer
