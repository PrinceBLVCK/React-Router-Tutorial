import { 
  Routes,
  Route
} from "react-router-dom";
import  Home  from './components/Home'
import About from './components/About'
import OrderSummary from './components/OrderSummary'
import NoMatch from "./components/NoMatch";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="order-summary" element={<OrderSummary />} />
      <Route path="*" element={<NoMatch/>}/>
    </Routes>
  );
}

export default App;
