import React from 'react'
import {Link} from "react-router-dom"
import "./Landing.css"

class Landing extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="background">
                    <div>
                        <div className="position">
                            <br/><br/><br/><br/><br/><br/>
                            <center className="colocation">
                                <h1 className="title">Welcome</h1>
                                <button className="button">Save the world!</button>
                            </center>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Landing;