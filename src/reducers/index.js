import { combineReducers } from 'redux'
import SelectExchangeReducer from './select_exchange_reducer'
import SelectedChartData from './chart_data_reducer'

const rootReducer = combineReducers({
  selectedExchange: SelectExchangeReducer,
  chartData: SelectedChartData
})

export default rootReducer
