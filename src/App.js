
import './App.css';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Products from './components/Products';
import CheckoutPage from './components/CheckoutPage';
import { Route, Link, Switch, BrowserRouter as Router, Routes } from "react-router-dom";
function App() {
  return (

    <Router>
    <div className="App">
      <Navbar/>
      <Routes>
       <Route path="/Checkout-page" element={<CheckoutPage/>} />
       <Route path="/" element={<Products/>} />
      </Routes>
    </div>
    </Router>
  
  );
};

export default App;
