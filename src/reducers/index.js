import { combineReducers } from 'redux'
import SelectExchangeReducer from './select_exchange_reducer'
import SelectCoinReducer from './select_coin_reducer'
import SelectChartDataReducer from './select_chart_data_reducer'

const rootReducer = combineReducers({
  selectedExchange: SelectExchangeReducer,
  chartData: SelectChartDataReducer,
  selectedCoin: SelectCoinReducer
})

export default rootReducer
