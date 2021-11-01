
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

import Services from './Components/Services/Services';
import AddService from './Components/AddService/AddService';
import BookNow from './Components/BookNow/BookNow';

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
          <Route exact path="/services">
           <Services></Services>
          </Route>
          <Route path="/services/:id">
            <BookNow></BookNow>
          </Route>
          <Route exact path="/booking">
            <BookNow></BookNow>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/addService">
           <AddService></AddService>
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
