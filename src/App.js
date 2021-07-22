import React from 'react' 
import { BrowserRouter, Route, Switch} from "react-router-dom"
import Main from './Pages/Main/Main';
import Login from './Pages/Login/Login';
import Logout from './Pages/Logout/Logout';
import Landing from './Pages/Landing/Landing';
import Storage from './Pages/Storage/Storage';
import NotFound from './Pages/NotFound/NotFound';
import RecycleUser from './UserPages/Recycle/Recycle';
import UserLanding from './UserPages/Landing/UserLanding';
import MaterialsInfo from './Pages/MaterialsInfo/MaterialsInfo';
import RecycleTransactions from './Pages/RecycleTransactions/RecycleTransactions';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/Login" component={Login}></Route>
          <Route exact path="/Logout" component={Logout}></Route>
          <Route exact path="/Landing" component={Landing}></Route>
          <Route exact path="/Storage" component={Storage}></Route>
          <Route exact path="/Recycle" component={RecycleUser}></Route>
          <Route exact path="/UserLanding" component={UserLanding}></Route>
          <Route exact path="/Materials information" component={MaterialsInfo}></Route>
          <Route exact path="/Recycle Transactions" component={RecycleTransactions}></Route>
          <Route component={NotFound}></Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;