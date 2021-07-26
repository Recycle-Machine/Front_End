import React from "react";
import { Link } from "react-router-dom";
import "./Qr.css";
import QRCode from "react-qr-code";

class QR extends React.Component {
  render() {
    return (
      <React.Fragment>
          <div className="qrBackgroundColor" style={{ height: '100vh' }}>
          <div>
            <center>
                <br></br>
          <h1 className="qrTitle">Read this with your mobile application</h1>
          <br></br>
            </center>
          </div>
              <center>
            <img
                    className="whale"
                    src={
                      "https://www.dropbox.com/s/ujsidpyyhwjscog/ballena.png?raw=1"
                    }
                    alt=""
                  />
               </center>
            <center>
            <div className="square">
            <QRCode className="QRCode" value="Hola Gueis" size={256} bgColor="#282c34" fgColor="#fff" level="H" />
            </div>
            </center>
              <center>
            <img
                    className="ray"
                    src={
                      "https://www.dropbox.com/s/b242w33jphhdzwr/raya.png?raw=1"
                    }
                    alt=""
                  />
               </center> 
            <Link to="/Login">
                <button className="qrButton">New Transaction</button>
              </Link>
            <Link to="/">
                <button className="qrButton1">Main Menu</button>
              </Link>
            </div>
      </React.Fragment>
    );
  }
}

export default QR;