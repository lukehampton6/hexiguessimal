import './App.css';
import GenerateColors from './components/GenerateColors';
import Answer from './components/Answer';
import Footer from './components/Footer';
import { Provider } from "react-redux";
import store from "./utils/store";

function App() {
  return (
    <Provider store={store}>
      <GenerateColors />
      <Answer />
      <Footer />
    </Provider>
  );
}

export default App;
