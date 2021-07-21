import React from 'react'
import {Link} from "react-router-dom"
import "./Main.css"

class Main extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="mainBackground" style={{ height: '100vh' }}></div>
                <div className="background">
                    <div>
                        <div className="position">
                            <br/><br/><br/><br/><br/><br/>
                            <center>
                                <h1 className="title">Welcome</h1>
                                <img className="img" src={"https://www.dropbox.com/s/4q1uxrp3pcpzwtf/Ecosystem-rafiki.svg?raw=1"} alt="" />
                                <Link to="/Login">
                                <button className="button">Save the world!</button>
                                </Link>
                            </center>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Main;