
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
function App() {
  return (
    <div >
    <Router>
     <Switch>
          <Route exact path="/">
         <Home/>
          </Route>
          <Route exact path="/home">
         <Home/>
          </Route>
          <Route path="/service">
            {/* <Services/> */}
          </Route>
          <Route path="*">
           <NotFound/>
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
