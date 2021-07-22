import React from 'react'
import {Link} from "react-router-dom"
import Navbar from '../../components/Navbar';
import "./Login.css"

class Login extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="loginBackground" style={{ height: '100vh' }}>
                    <center>
                        <Navbar></Navbar>
                        <div className="allItemsBackground">
                            <div className="texts">
                                <img className="imgLog" src={"https://cdn.iconscout.com/icon/free/png-256/account-avatar-profile-human-man-user-30448.png"} alt="" />
                                <div className="fixedposition">
                                    <div className="form-group">
                                        <input type="email" className="text" placeholder="Email"/>
                                    </div>
                                    <br/>
                                    <div className="form-group">
                                        <input type="password" className="text1" placeholder="Password"/>
                                    </div>
                                    </div>
                                    <div>
                                </div>
                                    <Link to="/Landing">
                                    <button className="button1">Login</button>
                                    </Link>  
                            </div>
                        </div>
                    </center>
                </div>
            </React.Fragment>
        );
    }
}

export default Login;