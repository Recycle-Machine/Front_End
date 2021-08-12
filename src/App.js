import React from 'react' 
import { BrowserRouter, Route, Switch} from "react-router-dom"
import Login from './Pages/Login/Login';
import Logout from './Pages/Logout/Logout';
import Landing from './Pages/Landing/Landing';
import Storage from './Pages/Storage/Storage';
import NotFound from './Pages/NotFound/NotFound';
import Rewards from './UserPages/Rewards/Rewards';
import UserMain from './UserPages/UserMain/UserMain';
import RecycleUser from './UserPages/Recycle/Recycle';
import UserLanding from './UserPages/Landing/UserLanding';
import MaterialsInfo from './Pages/MaterialsInfo/MaterialsInfo';
import MaterialsIndex from './Pages/MaterialsIndex/MaterialsIndex';
import CanMaterialInfo from './Pages/CanMaterialInfo/CanMaterialInfo';
import RecycleForm from './UserPages/Recycle/RecycleForm';
import RecycleTransactions from './Pages/RecycleTransactions/RecycleTransactions';
import UserMaterialsIndex from './UserPages/UserMaterialsIndex/UserMaterialsIndex';
import UserCanMaterialInfo from './UserPages/UserCanMaterialInfo/UserCanMaterialInfo';
import UserBottleMaterialInfo from './UserPages/UserBottleMaterialInfo/UserBottleMaterialInfo';
import RecycleTest from './UserPages/Recycle/putTest';
import QR from './UserPages/Qr/Qr';
import QRinfo from './UserPages/Qr/QRinfo';
import RewardDrinks from './UserPages/Rewards/RewardsTypes/drinks.jsx';
import RewardFood from './UserPages/Rewards/RewardsTypes/food.jsx';
import RewardSchool from './UserPages/Rewards/RewardsTypes/school.jsx';
import About from './UserPages/About Us/about';
import testQR from './UserPages/Qr/test';
function App() {
  return (
    <BrowserRouter>
        <Switch>
          
          <Route exact path="/qr" component={QR}></Route>
          <Route exact path="/" component={UserMain}></Route>
          <Route exact path="/Login" component={Login}></Route>
          <Route exact path="/Logout" component={Logout}></Route>
          <Route exact path="/Landing" component={Landing}></Route>
          <Route exact path="/Storage" component={Storage}></Route>
          <Route exact path="/Rewards" component={Rewards}></Route>
          <Route exact path="/Recycle" component={RecycleForm}></Route>
          <Route exact path="/UserLanding" component={UserLanding}></Route>
          <Route exact path="/Materials" component={MaterialsIndex}></Route>
          <Route exact path="/Can information" component={CanMaterialInfo}></Route>
          <Route exact path="/Bottle information" component={MaterialsInfo}></Route>
          <Route exact path="/User Materials" component={UserMaterialsIndex}></Route>
          <Route exact path="/User Can information" component={UserCanMaterialInfo}></Route>
          <Route exact path="/Recycle Transactions" component={RecycleTransactions}></Route>
          <Route exact path="/User bottle information" component={UserBottleMaterialInfo}></Route>
          <Route exact path="/Rewards/Drinks/" component={RewardDrinks}></Route>
          <Route exact path="/Rewards/Foods/" component={RewardFood}></Route>
          <Route exact path="/Rewards/School/" component={RewardSchool}></Route>
          <Route exact path="/test/" component={RecycleTest}></Route>
          <Route exact path="/about/" component={About}></Route>
           

          <Route component={NotFound}></Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;

// <Route exact path="/qrinfo/:id/" component={QR} ></Route>