import React from 'react' 
import{ BrowserRouter, Route, Switch} from "react-router-dom"
import Landing from './Pages/Landing/Landing';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing}></Route>
          <Route component={}></Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
