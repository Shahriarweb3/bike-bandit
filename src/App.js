import './App.css';
import React from "react";
import { Switch } from 'react-router';
import { Route } from 'react-router';
import Home from './Pages/Home/Home/Home';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import { BrowserRouter } from 'react-router-dom';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import BuyNowBike from './Pages/Home/Service/BuyNowBike/BuyNowBike';
import Explore from './Pages/Home/Explore/Explore';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import MyDashboard from './Pages/Home/Dashboard/MyDashboard';
import Footer from './Shared/Footer/Footer';
import Orders from './Pages/Home/Dashboard/Orders/Orders';
import Navigation from './Shared/Navigation/Navigation';
import NoRoute from './Pages/NoRoute/NoRoute';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navigation></Navigation>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/explore">
              <Explore />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <PrivateRoute path="/motorbikes/:bikeId">
              <BuyNowBike />
            </PrivateRoute>
            <PrivateRoute path="/buynowbike">
              <BuyNowBike />
            </PrivateRoute>
            <Route path="/dashboard">
              <MyDashboard></MyDashboard>
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="*">
              <NoRoute />
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div >
  );
}

export default App;
