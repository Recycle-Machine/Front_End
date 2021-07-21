import React from "react"
import "./MaterialsInfo.css"

class MaterialsInfo extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="row">
                    <div className="col-4">
                        <div className="Card">
                            <div className="img_container"><img src="https://www.dropbox.com/s/ewr3ngkalfox4lx/icons8-bote-de-cerveza-50.png?raw=1" alt="Material" /></div>
                            <br></br>
                            <div className="material_title">Soda Cans</div>
                            <br></br>
                            <div className="points_text">Points per unit</div>
                            <br></br>
                            <div className="points_container"><p>35</p></div>
                            <br></br>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="Suggestions_container">
                            <div className="label"><p>Suggestions</p></div>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                            <div className="text_field"><p></p></div>
                        <br />
                            <div className="text_field"><p></p></div>
                        <br />
                            <div className="text_field"><p></p></div>
                        <br />
                    </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default MaterialsInfo;