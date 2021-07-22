import React from "react"
import Navbar from "../../components/Navbar";
import "./MaterialsInfo.css"

class MaterialsInfo extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="landingBackground" style={{ height: '100vh' }}>
                <Navbar></Navbar>
                <div className="row" id="row">
                    <div className="col-5">
                        <div className="CardInfo">
                            <div className="img_container"><img src="https://www.dropbox.com/s/ewr3ngkalfox4lx/icons8-bote-de-cerveza-50.png?raw=1" alt="Material" /></div>
                            <br></br>
                            <div className="material_title">Soda Cans</div>
                            <br></br>
                            <div className="points_text">Points per unit</div>
                            <br></br>
                            <div className="points_container">35</div>
                            <br></br>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="Suggestions_container">
                            <div className="label"><p>Suggestions</p></div>
                            <div className="text_field"><p></p></div>
                        <br />
                            <div className="text_field"><p></p></div>
                        <br />
                            <div className="text_field"><p></p></div>
                        <br />
                    </div>
                    </div>
                </div>
                </div>
            </React.Fragment>
        );
    }
}

export default MaterialsInfo;