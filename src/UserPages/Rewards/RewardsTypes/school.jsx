import React from "react";
import { Link } from "react-router-dom";
import "../../UserMain/UserMain.css";

class RewardSchool extends React.Component {
  render() {
    return (
      <React.Fragment>
          
        <div className="userMainBackgroundColor" style={{ height: '100vh' }}>
            <div className="mainBackground">
            <center>
                  <br />
                  <br />
                  <br />
                  <h1 className="userTitle">School Discount</h1>
                  <br></br>
                  <h3 id="mainH3">Once you have gathered 500 points you can claim your Scholarship Coupon which will give you a 20% Discount on the elegible brands</h3>
                  <img
                    className="mainImg"
                    src={
                      "https://www.dropbox.com/s/phupysy1lwgkpm6/Forest-amico_1.svg?raw=1"
                    }
                    alt=""
                  />
              <Link to="/Rewards">
                <button className="userButton">Check other Rewards</button>
              </Link>

            </center>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default RewardSchool;