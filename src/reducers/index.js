import { combineReducers } from 'redux'
import ActiveChart from './active_chart'

const rootReducer = combineReducers({
  activeChart: ActiveChart
})

export default rootReducer
