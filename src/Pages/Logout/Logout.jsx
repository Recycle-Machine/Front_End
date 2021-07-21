import React from 'react'
import {Link} from "react-router-dom"
import Navbar from '../../components/Navbar';
import "./Logout.css"

class Logout extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="logoutBackground" style={{ height: '100vh' }}>
                    <Navbar></Navbar>
                        <div className="logoutContentBackground">
                            <div class="textslog">
                                <div className="logoutPosition">
                                    <h1 className="titleLogout">Are you sure you want to exit the application?</h1>
                                    <Link to="/">
                                    <button className="buttonLogout">Yes</button>
                                    </Link>  
                                    <Link to="/">
                                    <button className="buttonLogout1">No, go back</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Logout;