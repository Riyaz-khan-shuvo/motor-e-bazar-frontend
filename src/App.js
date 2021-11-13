import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './Pages/Home/Home';
import { createContext, useState } from 'react';
import Login from "./Pages/Login/Login";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import About from "./Pages/About/About";
import Shop from "./Pages/Shop/Shop";
import OrderReview from "./Pages/OrderReview/OrderReview";
import ShippingPage from "./Pages/ShippingPage/ShippingPage";
import PrivateRoute from "./Pages/Login/PrivateRoute";
import Contact from "./Pages/ContactPage/Contact";
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/review">
            <OrderReview />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <PrivateRoute path="/shipping">
            <ShippingPage />
          </PrivateRoute>
          <Route path="/details/:key">
            <ProductDetails />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <h3>Page Not Found </h3>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
