
import React from "react";
import { 
  Routes,
  Route
} from "react-router-dom";
import  Home  from './components/Home'
import OrderSummary from './components/OrderSummary'
import Products from "./components/Products";
import Featured from "./components/featured";
import New from "./components/new-products";
import All from "./components/all-products";
import Users from "./components/users";
import UserDetails from "./components/user-details";
import Admin from "./components/admin";

const NoMatch  = React.lazy(() => import( "./components/NoMatch"))
const About = React.lazy(() => import( './components/About'))

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={
        <React.Suspense fallback='loading...'>
          <About />
        </React.Suspense>} />
      <Route path="/order-summary" element={<OrderSummary />} />
      <Route path="/products" element={<Products />}>
        <Route index element={<All />}/>
        <Route path="featured" element={<Featured />}/>
        <Route path="new" element={<New />} />
      </Route>
      <Route path="/users" element={<Users/>}>
        <Route path=":userId" element={<UserDetails />} />
        <Route path="admin" element={<Admin />} />
      </Route>
      

      <Route path="*" element={
        <React.Suspense fallback='loading'>
          <NoMatch/> 
        </React.Suspense>
      }/>
    </Routes>
  );
}

export default App;
