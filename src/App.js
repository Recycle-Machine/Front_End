import React from 'react' 
import{ BrowserRouter, Route, Switch} from "react-router-dom"
import Landing from './Pages/Landing/Landing';
import Login from './Pages/Login/Login';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing}></Route>
          <Route exact path="/Login" component={Login}></Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
