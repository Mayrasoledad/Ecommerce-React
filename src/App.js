
import './App.css';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Products from './components/Products';
import CheckoutPage from './components/CheckoutPage';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { useEffect } from 'react';
import { auth } from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from "./StateProvider";
import Checkout from './components/CheckoutForm/Checkout';

function App() {
  const [{user}, dispatch] = useStateValue();

  useEffect (()=>{
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser){
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        })
      }
    })
  },[])
  
  
  
  
  
  return (

    <Router>
    <div className="App">
      <Navbar/>
      <Routes>
       <Route path="/signIn" element={<SignIn/>} />
       <Route path="/signUp" element={<SignUp/>} />
       <Route path="/Checkout-page" element={<CheckoutPage/>} />
       <Route path="/Checkout" element={<Checkout/>} />
       <Route path="/" element={<Products/>} />
      </Routes>
    </div>
    </Router>
     
  
  );
};

export default App;
