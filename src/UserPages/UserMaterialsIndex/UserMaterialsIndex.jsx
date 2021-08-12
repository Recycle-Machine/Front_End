import React from "react"
import { Link } from "react-router-dom";
import UserNavbar from "../../components/UserNavbar";
import "./UserMaterialsIndex.css"

class UserMaterialsIndex extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="landingBackground" style={{ height: '100vh' }}>
                <UserNavbar></UserNavbar>
                        <div className="iconBackground"> 
                        <div className="ImageContainer">
                            <img src="https://www.dropbox.com/s/td9t6fs54ttdsbd/icons8-botella-de-agua-50.png?raw=1" alt="" />
                        </div>
                        </div>
                        <div className="bottleButtonContainer">
                        <Link to="/User Bottle information">
                        <button className="bottleButton">Plastic Bottles</button>
                        </Link>                    
                        </div>
                        <div className="iconBackground"> 
                        <div className="ImageContainer">
                            <img src="https://www.dropbox.com/s/ewr3ngkalfox4lx/icons8-bote-de-cerveza-50.png?raw=1" alt="" />
                        </div>
                        </div>
                        <div className="bottleButtonContainer">
                        <Link to="/User Can information">
                        <button className="bottleButton">Aluminum Cans</button>
                        </Link>                    
                        </div>
                </div>
            </React.Fragment>
        );
    }
}

export default UserMaterialsIndex;