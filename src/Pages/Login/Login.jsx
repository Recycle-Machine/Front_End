import React from 'react'
import {Link} from "react-router-dom"
import "./Login.css"

class Login extends React.Component{
    render(){
        return(
            <React.Fragment>
                    <center>
                        <div class="Texts">
                            <img className="img1" src={"https://cdn.iconscout.com/icon/free/png-256/account-avatar-profile-human-man-user-30448.png"} alt="" />
                            <div className="fixedposition">
                                <div class="form-group">
                                    <input type="email" class="text" placeholder="Email"/>
                                </div>
                                <br/>
                                <div class="form-group">
                                    <input type="password" class="text" placeholder="Password"/>
                                </div>
                                </div>
                                <div>
                            </div>
                                <Link to="/">
                                <button className="button1">Login</button>
                                </Link>  
                        </div>
                    </center>
            </React.Fragment>
        );
    }
}

export default Login;