import React from "react"
import Navbar from "../../components/Navbar";
import "./Storage.css"


class Storage extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Navbar></Navbar>
                <div className="Card">
                    <div className="img_container"><img src="https://www.dropbox.com/s/ehnguodprx1wybx/cardboard.png?raw=1" alt="Material" /></div>
                    <br></br>
                    <center>
                    <div className="material_title">Machine ID</div>
                    <br></br>
                    <div className="points_text">Deposits done today</div>
                    <br></br>
                    <div className="points_container"><p>Open Machine</p></div>
                    <br></br>
                    </center>
                </div>
                <div className="CardInfoPosition">
                    <div className="CardInfo">
                        <div>
                            <br/>
                            <div className="Cardboard"><img src="https://www.dropbox.com/s/ehnguodprx1wybx/cardboard.png?raw=1" alt="Material" /></div>
                            <div className="TextInfo">Pet</div>
                            <div className="Numberback">
                            <div className="NumberInfo">25</div>
                            </div>
                        </div>
                    </div>
                    <div className="CardInfo">
                        <div>
                            <br/>
                            <div className="Cardboard"><img src="https://www.dropbox.com/s/ehnguodprx1wybx/cardboard.png?raw=1" alt="Material" /></div>
                            <div className="TextInfo">Cans</div>
                            <div className="Numberback">
                            <div className="NumberInfo">25</div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Storage;