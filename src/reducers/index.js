import { combineReducers } from 'redux'
import ActiveChart from './reducer_active_chart'

const rootReducer = combineReducers({
  activeChart: ActiveChart
})

export default rootReducer
