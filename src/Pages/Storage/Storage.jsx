import React from "react"
import Navbar from "../../components/Navbar";
import "./Storage.css"


class Storage extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="storageBackground" style={{ height: '100vh' }}>
                <Navbar></Navbar>
                    <div className="imgContainer"><img src="https://www.dropbox.com/s/4gylvjg08xizpjg/deer.png?raw=1" alt="Material" /></div>
                    <div className="cardContainer">
                        <div className="imgContainer1"><img src="https://www.dropbox.com/s/f39pivzkx16zk6m/icons8-maquina-expendedora-50_1.png?raw=1" alt="Material" /></div>
                        <br></br>
                        <div className="imgsContainer">
                            <img className="image1" src="https://www.dropbox.com/s/td9t6fs54ttdsbd/icons8-botella-de-agua-50.png?raw=1" alt="Material" />
                            <img className="image2" src="https://www.dropbox.com/s/ewr3ngkalfox4lx/icons8-bote-de-cerveza-50.png?raw=1" alt="Material" />
                        </div>
                        <center>
                        <div className="materialTitle">UTCH BIS</div>
                        <br></br>
                        <div className="pointsText">
                            Dirección: Km 3.5 Carretera
                            Chihuahua a Aldama 
                            Colinas de León, 31313 Chihuahua, Chih.
                            Teléfono: 614 590 8442
                        </div>
                        <br></br>
                        <div className="pointsContainer"><p>Find other machines</p></div>
                        <br></br>
                        </center>
                    </div>
                        <div className="cardInfo">
                            <div>
                                <br/>
                                <div className="textInfo">Pet</div>
                            </div>
                        </div>
                        <div className="cardInfo1">
                            <div>
                                <br/>
                                <div className="textInfo1">Cans</div>
                            </div>
                        </div>
                    </div>
            </React.Fragment>
        );
    }
}

export default Storage;