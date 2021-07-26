import React from "react";
import { Link } from "react-router-dom";
import "./UserMain.css";

class UserMain extends React.Component {
  render() {
    return (
      <React.Fragment>
          
        <div className="userMainBackgroundColor" style={{ height: '100vh' }}>
            <div className="mainBackground">
            <center>
                  <br />
                  <br />
                  <br />
                  <h1 className="userTitle">Welcome</h1>
                  <br></br>
                  <h3 id="mainH3">“Never doubt that a small group of thoughtful,
                  committed citizens can change the world;                  indeed, it is the only thing that ever has.”
                  —Margaret Mead</h3>
                  <img
                    className="mainImg"
                    src={
                      "https://www.dropbox.com/s/phupysy1lwgkpm6/Forest-amico_1.svg?raw=1"
                    }
                    alt=""
                  />
              <Link to="/UserLanding">
                <button className="userButton">Save the world</button>
              </Link>
              <Link to="/Login">
              <button className="userButton1"></button>
                <img className="mainImg1"
                    src={
                      "https://www.dropbox.com/s/0tdmcc0elkcg17e/icons8-usuario-30_1.png?raw=1"
                    }
                    alt=""/>
              </Link>
            </center>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UserMain;