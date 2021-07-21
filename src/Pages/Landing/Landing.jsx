import React from 'react'
import {Link} from "react-router-dom"
import Navbar from '../../components/Navbar';
import "./Landing.css"

class Landing extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="landingBackground" style={{ height: '100vh' }}>
                    <Navbar></Navbar>
                        <div className="contentBackground">
                            <div class="textsLan">
                                <div className="imagesPosition">
                                    <img className="imgLan" src={"https://cdn.iconscout.com/icon/free/png-256/account-avatar-profile-human-man-user-30448.png"} alt="" />
                                    <img className="imgLan1" src={"https://www.dropbox.com/s/zar83qgkkupd86i/Jellyfish-amico.svg?raw=1"} alt="" />
                                </div>
                                <div className="buttonsPosition">
                                    <Link to="/MaterialsInformation">
                                    <button className="buttonLan">Materials information</button>
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
                </div>
            </React.Fragment>
        );
    }
}

export default Landing;