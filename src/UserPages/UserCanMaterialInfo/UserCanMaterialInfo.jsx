import React from "react"
import UserNavbar from "../../components/UserNavbar";
import "./UserCanMaterialInfo.css"

class UserCanMaterialInfo extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="landingBackground" style={{ height: '100vh' }}>
                <UserNavbar></UserNavbar>
                <div id="row">
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
                        <div id="Suggestions_container">
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
            </React.Fragment>
        );
    }
}

export default UserCanMaterialInfo;