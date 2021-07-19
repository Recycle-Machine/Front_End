import React from "react"
import "./css's/Navbar.css"

class Navbar extends React.Component{
    render(){
        return(
            <React.Fragment>
            <div className="navbar">
                <img src="https://www.dropbox.com/s/kiv2tlv76m5fond/leaflogo.png?raw=1" alt="leaflogo" id="logo" />
                <img src="https://www.dropbox.com/s/1slj6dvgtwi0boz/off.png?raw=1" alt="off" id="off"/>
            </div>
            </React.Fragment>
        );
    }
}

export default Navbar;