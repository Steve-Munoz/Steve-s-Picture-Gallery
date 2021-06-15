
import './App.css';
import {Switch, Route} from "react-router-dom"
import Photo from "./Pages/Photo"
import Cart from "./Pages/Cart"

function App() {
  return (
    
    <Switch>
      <Route exact path = "/">
        <Photo/>

      </Route>
      <Route path = "/cart">
        <Cart/>
      </Route>
    </Switch>
)
  
}

export default App;
