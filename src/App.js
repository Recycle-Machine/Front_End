import React from 'react' 
import { BrowserRouter, Route, Switch} from "react-router-dom"
import QR from './UserPages/Qr/Qr';
import Main from './Pages/Main/Main';
import Login from './Pages/Login/Login';
import Logout from './Pages/Logout/Logout';
import Landing from './Pages/Landing/Landing';
import Storage from './Pages/Storage/Storage';
import NotFound from './Pages/NotFound/NotFound';
import UserMain from './UserPages/UserMain/UserMain';
import RecycleUser from './UserPages/Recycle/Recycle';
import UserLanding from './UserPages/Landing/UserLanding';
import MaterialsInfo from './Pages/MaterialsInfo/MaterialsInfo';
import MaterialsIndex from './Pages/MaterialsIndex/MaterialsIndex';
import CanMaterialInfo from './Pages/CanMaterialInfo/CanMaterialInfo';
import RecycleTransactions from './Pages/RecycleTransactions/RecycleTransactions';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/QR" component={QR}></Route>
          <Route exact path="/Login" component={Login}></Route>
          <Route exact path="/Logout" component={Logout}></Route>
          <Route exact path="/Landing" component={Landing}></Route>
          <Route exact path="/Storage" component={Storage}></Route>
          <Route exact path="/UserMain" component={UserMain}></Route>
          <Route exact path="/Recycle" component={RecycleUser}></Route>
          <Route exact path="/UserLanding" component={UserLanding}></Route>
          <Route exact path="/Materials" component={MaterialsIndex}></Route>
          <Route exact path="/Bottle information" component={MaterialsInfo}></Route>
          <Route exact path="/Can information" component={CanMaterialInfo}></Route>
          <Route exact path="/Recycle Transactions" component={RecycleTransactions}></Route>
          <Route component={NotFound}></Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;