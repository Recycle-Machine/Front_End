import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar';
import "./userRecycle.css"

class recycleUser extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Navbar></Navbar>
                <div className="backgroundRecycle" style={{ height: '100vh' }}>
                    <div className="row">
                        <div className="col-6">
                            <div className="form-group-recycle">
                                <div className="info-recycle">
                                    <div className="imageItem"><img src="https://www.dropbox.com/sh/2efk6rmts9zqhit/AABHHWavRc1s0Y3lzQWjDhipa/icons8-botella-de-agua-50.png?raw=1" alt="" /></div>
                                    <div className="infoItem"><p>222 miligrams</p></div>
                                </div>
                                <div className="info-recycle">
                                    <div className="imageItem"><img src="https://www.dropbox.com/sh/2efk6rmts9zqhit/AADmW7ECznpGKulCILOK4ydMa/icons8-bote-de-cerveza-50.png?raw=1" alt="" /></div>
                                    <div className="infoItem"><p>2.1 Kilograms</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <button className="qr-code">Scan</button>
                            <button className="end">End Recycling</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default recycleUser