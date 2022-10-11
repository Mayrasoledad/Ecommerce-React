
import './App.css';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Products from './components/Products';
import CheckoutPage from './components/CheckoutPage';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
function App() {
  return (

    <Router>
    <div className="App">
      <Navbar/>
      <Routes>
       <Route path="/signIn" element={<SignIn/>} />
       <Route path="/signUp" element={<SignUp/>} />
       <Route path="/Checkout-page" element={<CheckoutPage/>} />
       <Route path="/" element={<Products/>} />
      </Routes>
    </div>
    </Router>
     
  
  );
};

export default App;
