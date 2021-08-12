import React from "react";
import QRCode from "qrcode.react";
import './QR.css'
import { Link } from 'react-router-dom'

class QR extends React.Component {
  render() {  
    var id = this.props.location.state;
    return (  
      <React.Fragment>
        
        <div className="backgroundQR" style={{ height: "100vh" }}>
        <br></br>
        <br></br>
        <center><h1 className="title_qr">Scan this QR code to claim your points</h1></center>
         
          <div className="containerQR">
            <QRCode size="180"className="qrcode" value={id} />
          </div>
          <Link to="/Recycle">
              
              <br/>
                <button className="userCardInfoA"><p className="button_text">New Transaction</p></button>
              
            </Link>
            <Link to="/UserLanding">
              
              <br/>
                <button className="userCardInfoB"><p className="button_text">Main Menu</p></button>
              
            </Link>

        </div>
        
      </React.Fragment>
    );
  }
}

export default QR;
