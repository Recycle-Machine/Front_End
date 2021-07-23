import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";

class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="backgroundColor" style={{ height: '100vh' }}>
        <div className="background">
            <center>
              <div class="row">
                <div class="col-6">
                  <br />
                  <br />
                  <br />
                  <h1 className="title">Welcome</h1>
                  <br></br>
                  <h3 id="h3">“Never doubt that a small group of thoughtful,
                  committed citizens can change the world;                  indeed, it is the only thing that ever has.”
                  —Margaret Mead</h3>
                </div>
                <div class="col-6">
                  <img
                    className="img"
                    src={
                      "https://www.dropbox.com/s/phupysy1lwgkpm6/Forest-amico_1.svg?raw=1"
                    }
                    alt=""
                  />

                  
                </div>
             
              </div>
              <Link to="/Login">
                <button className="button">Save the world</button>
              </Link>

            
            </center>
          </div>
          </div>
      </React.Fragment>
    );
  }
}

export default Main;
