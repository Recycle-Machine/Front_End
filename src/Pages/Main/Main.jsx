import React from 'react'
import {Link} from "react-router-dom"
import "./Main.css"

class Main extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="background">
                    <div>
                        <div className="position">
                            <br/><br/><br/><br/><br/><br/>
                            <center>
                                <h1 className="title">Welcome</h1>
                                <img className="img" src={"https://thumbs.dreamstime.com/b/mountain-lake-camp-ecological-landscape-flat-design-national-park-wildlife-sanctuary-scene-summer-camping-vector-minimal-style-68244632.jpg"} alt="" />
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