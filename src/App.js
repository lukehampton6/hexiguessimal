import './App.css';
import GenerateColors from './components/GenerateColors';
import { Provider } from "react-redux";
import store from "./utils/store";

function App() {
  return (
    <Provider store={store}>
      <GenerateColors />
    </Provider>
  );
}

export default App;
