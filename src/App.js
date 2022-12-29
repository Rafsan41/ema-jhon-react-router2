
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import OrderReview from './Components/OrderReview/OrderReview';
import Inventory from './Components/Inventory/Inventory'
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import NoResultFound from './NoResultFound/NoResultFound';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AuthProvider from './Components/Hooks/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Shipping from './Components/Shipping/Shipping';

function App() {
  return (
    <div className="App">
      
      <AuthProvider>
         <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
             <Shop></Shop>
          </Route>
{/* ---------------------------------- */}
          <Route exact path="/shop">
             <Shop></Shop>
          </Route>
{/* ---------------------------------- */}
          <Route exact path="/review">
             <OrderReview></OrderReview>
          </Route>
{/* ---------------------------------- */}
          <PrivateRoute  path="/inventory">
          <Inventory></Inventory>
          </PrivateRoute>
{/* ---------------------------------- */}
          <PrivateRoute  path="/shipping">
          <Shipping></Shipping>
          </PrivateRoute>
{/* ---------------------------------- */}
          <PrivateRoute  path="/placeorder">
            <PlaceOrder></PlaceOrder>
          </PrivateRoute >
{/* ---------------------------------- */}
          <Route  path="/login">
            <Login></Login>
          </Route>
{/* ---------------------------------- */}
          <Route exact path="/register">
            <Register></Register>
          </Route>
{/* ---------------------------------- */}
          <Route path="*">
            <NoResultFound>
        </NoResultFound>
          </Route>
{/* ---------------------------------- */}
        </Switch>
      </Router>
     </AuthProvider>
     
    </div>
  );
}

export default App;
