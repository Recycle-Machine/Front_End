import React from "react";
import { Link } from "react-router-dom";
import "./Qr.css";
import QRCode from "react-qr-code";

class QR extends React.Component {
  render() {
    return (
      <React.Fragment>
          <div className="backgroundColor" style={{ height: '100vh' }}>
          <div>
            <center>
                <br></br>
          <h1 className="title">Read this with your mobile application</h1>
          <br></br>
            </center>
          </div>
          <div class="row">
          <div class="col-4">
              <center>
            <img
                    className="whale"
                    src={
                      "https://www.dropbox.com/s/ujsidpyyhwjscog/ballena.png?raw=1"
                    }
                    alt=""
                  />
               </center>   
          </div>
          <div class="col-4">
            <center>
            <div className="square">
            <QRCode className="QRCode" value="Hola Gueis" size={256} bgColor="#282c34" fgColor="#fff" level="H" />
            </div>
            </center>
          </div>
          <div class="col-4">
              <center>
            <img
                    className="ray"
                    src={
                      "https://www.dropbox.com/s/b242w33jphhdzwr/raya.png?raw=1"
                    }
                    alt=""
                  />
               </center>   
          </div>
          </div>
          <div class="row">
            <div class="col-6">
            <Link to="/Login">
                <button className="button">New Transaction</button>
              </Link>
            </div>
            <div class="col-6">
            <Link to="/Recycle Transactions">
                <button className="button">Main Menu</button>
              </Link>
            </div>
          </div>
              
          </div>
      </React.Fragment>
    );
  }
}

export default QR;
