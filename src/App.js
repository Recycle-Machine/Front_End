import React from 'react' 
import{ BrowserRouter, Route, Switch} from "react-router-dom"
import Main from './Pages/Main/Main';
import Login from './Pages/Login/Login';
import Landing from './Pages/Landing/Landing';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/Login" component={Login}></Route>
          <Route exact path="/Landing" component={Landing}></Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
