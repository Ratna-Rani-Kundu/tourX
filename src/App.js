
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import LogIn from './Components/LogIn/LogIn';
import Services from './Components/Services/Services';
import AddService from './Components/AddService/AddService';
import Booking from './Components/Booking/Booking';
function App() {
  return (
    <div >
    <Router>
      <Header></Header>
     <Switch>
          <Route exact path="/">
         <Home/>
          </Route>
          <Route exact path="/home">
         <Home/>
          </Route>
          <Route path="/services">
           <Services></Services>
          </Route>
          <Route path="/booking">
           <Booking></Booking>
          </Route>
          {/* <Route path="/services/:id'">
           <Booking></Booking>
          </Route> */}
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/addService">
           <AddService></AddService>
          </Route>
          <Route path="/login">
            <LogIn></LogIn>
          </Route>
          <Route path="*">
           <NotFound/>
          </Route>
        </Switch>
        <Footer></Footer>
    </Router>
    </div>
  );
}

export default App;
