import './App.css';
import Header from './Header';
import Home from './Home'
import Checkout from './Checkout';
import Login from './Login'
import { BrowserRouter as Router, Switch, Route}
from "react-router-dom"

function App() {
  return (
    //BEM
    <Router>
    <div className="App">
      <Switch>
        <Route path="/Checkout">
          <Header/>
          <Checkout />
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/">
          <Header/>
          <Home/>
        </Route>
      </Switch>
    </div>
    </Router>
    // {Home}
  );
}

export default App;
