import React from "react";
import './about.css'
import { Link } from 'react-router-dom'

class About extends React.Component {
  render() {
      return(
      <React.Fragment>
        
        <div className="backgroundQR" style={{ height: "100vh" }}>
        <br></br>
        <br></br>
        <center><h1 className="title_qr">Salvage</h1></center>

        <p className="aboutParagraph"> Salvage is a company compromised with the environment, 100% of the earnings gathered by recycling are
            focused on either the companies growth or other environmental causes, this company is not lucrative and 
            it's mere purpose is to create and support the recycling culture.
        </p>
         
        
          <Link to="/">
              <div>
              <br/>
                <button className="userCardInfoAbout"><p className="button_text">Back to the Landing Page</p></button>
              </div>
            </Link>

        </div>
        
      </React.Fragment>
    );
  }
}

export default About;
