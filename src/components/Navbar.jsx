import React from "react"
import "./styles/navbar.css"
import logo from "../img/leaflogo.png"
import offbutton from "../img/off.png"

class Navbar extends React.Component{
    render(){
        return(
            <React.Fragment>
            <div className="navbar">
                <img src={logo} alt="leaflogo" id="logo" />
                <img src={offbutton} alt="off" id="off"/>
            </div>
            </React.Fragment>
        );
    }
}

export default Navbar;