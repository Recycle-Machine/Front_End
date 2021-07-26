import React from "react"
import {Link} from "react-router-dom"
import "./css's/UserNavbar.css"

class UserNavbar extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div id="userNavbar">
                    <Link to="/">
                    <img src="https://www.dropbox.com/s/kiv2tlv76m5fond/leaflogo.png?raw=1" alt="leaflogo" id="userLogo" />
                    </Link>
                </div>
            </React.Fragment>
        );
    }
}
export default UserNavbar;