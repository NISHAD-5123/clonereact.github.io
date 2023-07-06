import React from 'react';
import OrderForm from '../public'
import Restaurants from "./component/basics/Restaurants";
import {Routes , Route, NavLink} from 'react-router-dom';



const App = () => {
  return(
  <>
  <Restaurants /> 
  <Routes>
    <Route path="/Order" Component={OrderForm}>
     <NavLink to="/Order">Order</NavLink>
    </Route>
  </Routes>
  </>
  );  
};
export default App;