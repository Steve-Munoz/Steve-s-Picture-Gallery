
import './App.css';
import {Switch, Route} from "react-router-dom"
import Photos from "./Pages/Photos"
import Cart from "./Pages/Cart"

function App() {
  return (
    
    <Switch>
      <Route exact path = "/">
        <Photos/>

      </Route>
      <Route path = "/cart">
        <Cart/>
      </Route>
    </Switch>
)
  
}

export default App;
