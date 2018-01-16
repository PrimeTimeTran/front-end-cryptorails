import ActionCable from "actioncable";
const App = {};
App.cable = ActionCable.createConsumer('ws://localhost:3000/cable');
export default App.cable