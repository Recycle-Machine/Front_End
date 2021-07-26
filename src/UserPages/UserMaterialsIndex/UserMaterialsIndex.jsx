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
                    <div className="MaterialContainer">
                        <div className="ImageContainer">
                            <img src="https://www.dropbox.com/s/td9t6fs54ttdsbd/icons8-botella-de-agua-50.png?raw=1" alt="" />
                        </div>
                        <Link to="/User Bottle information">
                        <p>Bottles</p>
                        </Link>
                    </div>
                    <div className="MaterialContainer">
                        <div className="ImageContainer">
                            <img src="https://www.dropbox.com/s/ewr3ngkalfox4lx/icons8-bote-de-cerveza-50.png?raw=1" alt="" />
                        </div>
                        <Link to="/User Can information">
                        <p>Cans</p>
                        </Link>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default UserMaterialsIndex;