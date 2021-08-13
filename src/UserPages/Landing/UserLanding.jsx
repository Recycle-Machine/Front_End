import React from "react"
import { Link } from "react-router-dom";
import UserNavbar from "../../components/UserNavbar";
import "./UserLanding.css"


class UserLanding extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="userLandingBackground" style={{ height: '100vh' }}>
                <UserNavbar></UserNavbar>
                    <div className="userImgContainer"><img src="" alt="" /></div>
                    <div className="userCardContainer">
                        <div className="userImgContainer1"><img src="https://www.dropbox.com/s/f39pivzkx16zk6m/icons8-maquina-expendedora-50_1.png?raw=1" alt="Material" /></div>
                        <br></br>
                        <div className="userImgsContainer">
                            <img className="userImage1" src="https://www.dropbox.com/s/td9t6fs54ttdsbd/icons8-botella-de-agua-50.png?raw=1" alt="Material" />
                            <img className="userImage2" src="https://www.dropbox.com/s/ewr3ngkalfox4lx/icons8-bote-de-cerveza-50.png?raw=1" alt="Material" />
                        </div>
                        <center>
                        <div className="userMaterialTitle">UTCH BIS</div>
                        <br></br>
                        <div className="userPointsText">
                            Dirección: Km 3.5 Carretera
                            Chihuahua a Aldama 
                            Colinas de León, 31313 Chihuahua, Chih.
                            Teléfono: 614 590 8442
                        </div>
                        <br></br>
                        <div className="userPointsContainer"><p>Salvage</p></div>
                        <br></br>
                        </center>
                    </div>
                        <div>
                        <Link to="/User Materials">
                            <div>
                                <br/>
                                <button className="userCardInfo"><p className="button_text">Materials Info</p></button>
                            </div>
                        </Link>
                        </div>
                        <div>
                        <Link to="/Rewards">
                            <div>
                                <br/>
                                <button className="userCardInfo1"><p className="button_text">Rewards</p></button>
                            </div>
                        </Link>
                        </div>
                        <div >
                        <Link to="/Recycle">
                            <div>
                                <br/>
                                <button className="userCardInfo2"><p className="button_text">Start Recycling</p></button>
                            </div>
                        </Link>
                        </div>
                    </div>
                       
            </React.Fragment>
        );
    }
}

export default UserLanding;