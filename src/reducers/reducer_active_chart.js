export default function(state = null, action) {
  switch(action.type) {
  case 'CHART_SELECTED':
    return action.payload
  default:
    return state
  }
}