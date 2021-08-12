import React from "react"
import UserNavbar from "../../components/UserNavbar";
import "./UserBottleMaterialInfo.css"

class UserBottleMaterialInfo extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="landingBackground" style={{ height: '100vh' }}>
                <UserNavbar></UserNavbar>
                <div id="row">
                        <div className="CardInfo">
                            <div className="img_container"><img src="https://www.dropbox.com/s/td9t6fs54ttdsbd/icons8-botella-de-agua-50.png?raw=1" alt="Material" /></div>
                            <br></br>
                            <div className="material_title">Plastic Bottle</div>
                            <br></br>
                            <div className="points_text">Points per unit</div>
                            <br></br>
                            <div className="points_container">35</div>
                            <br></br>
                        </div>
                        <div id="Suggestions_container">
                            <div className="label"><p className="tittleSuggestions">Suggestions</p></div>
                            <div className="text_field"><p className="bottleSuggestions">Ciel 600ml Coca Cola Family Bottle</p></div>
                        <br />
                            <div className="text_field"><p className="bottleSuggestions">Fanta 600ml Coca Cola Family Bottle</p></div>
                        <br />
                            <div className="text_field"><p className="bottleSuggestions">Coca Cola 600ml Coca Cola Family Bottle</p></div>
                        <br />
                    </div>
                </div>
                </div>
            </React.Fragment>
        );
    }
}

export default UserBottleMaterialInfo;