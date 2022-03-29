import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import "./App.css";
import Home from "./Components/Pages/Home/Home";
import Header from "./Components/Shared Resources/Header";
import SingleProduct from "./Components/Pages/Single Product/SingleProduct";
import AboutUs from "./Components/Pages/AboutUs/AboutUs";
import ContinueShopping from "./Components/Pages/ContinueShopping/ContinueShopping";
import ShoppingTabs from "./Components/Pages/Shopping/ShoppingTabs";
import Footer from "./Components/Shared Resources/Footer";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/cart" exact component={ShoppingTabs} />
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={AboutUs} />
          <Route path={"/product/:id"} exact component={SingleProduct} />
          <Route path="/continue_shopping" exact component={ContinueShopping} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;