import React from "react"
import Navbar from "../../components/Navbar";
import "./MaterialsIndex.css"

class MaterialsIndex extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="landingBackground" style={{ height: '100vh' }}>
                <Navbar></Navbar>
                    <div className="MaterialContainer">
                        <div className="ImageContainer">
                            <img src="https://www.dropbox.com/s/td9t6fs54ttdsbd/icons8-botella-de-agua-50.png?raw=1" alt="" />
                        </div>
                        <p>Bottles</p>
                    </div>
                    <div className="MaterialContainer">
                        <div className="ImageContainer">
                            <img src="https://www.dropbox.com/s/ewr3ngkalfox4lx/icons8-bote-de-cerveza-50.png?raw=1" alt="" />
                        </div>
                        <p>Cans</p>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default MaterialsIndex;