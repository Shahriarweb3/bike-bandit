import './App.css';
import React from "react";
import { Router } from 'react-router';
import { Switch } from 'react-router';
import { Route } from 'react-router';
import Home from './Pages/Home/Home/Home';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import { BrowserRouter } from 'react-router-dom';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import BuyNowBike from './Pages/Home/Service/BuyNowBike/BuyNowBike';
import AddProduct from './Pages/Home/Service/AddProduct/AddProduct';
import ManageAllOrders from './Pages/Home/Orders/MyOrders/ManageOrders';
import Dashboard from './Pages/Home/Dashboard/Dashboard';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/orders">
              <ManageAllOrders />
            </Route>
            <Route path="/addproduct">
              <AddProduct />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/motorbikes/:bikeId">
              <BuyNowBike />
            </Route>
            <Route path="/buynowbike">
              <BuyNowBike />
            </Route>

            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div >
  );
}

export default App;
