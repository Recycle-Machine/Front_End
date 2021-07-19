import React from 'react'
import {Link} from "react-router-dom"
import Navbar from '../../components/Navbar';
import "./Landing.css"

class Landing extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Navbar></Navbar>
                        <div className="column">
                            <div class="Texts">
                                <img className="imgLan" src={"https://cdn.iconscout.com/icon/free/png-256/account-avatar-profile-human-man-user-30448.png"} alt="" />
                                    <div className="buttonsposition">
                                        <Link to="/MaterialsInformation">
                                        <button className="buttonLan">Materials information</button>/button>
                                        </Link>  
                                        <Link to="/Storage">
                                        <button className="buttonLan1">Storage</button>
                                        </Link>  
                                        <Link to="/Recycle Transactions">
                                        <button className="buttonLan2">Recycle Transactions</button>
                                        </Link>
                                    </div>
                            </div>
                        </div>
            </React.Fragment>
        );
    }
}

export default Landing;