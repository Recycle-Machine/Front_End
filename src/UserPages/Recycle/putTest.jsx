import React, { Component } from 'react';
import api from '../../libs/fetch';
import "./RecycleForm.css";
import { Link } from 'react-router-dom'

class RecycleTest extends Component {

    state = {
        loading: false,
        error: null,
        data: {
            glass: "4",
            aluminum: "5",
            username: "Fredy",
            machine: "1",
        },
    };
    
    handlePress = async (e) => {
        e.preventDefault();
        this.setState({loading: true, error: null });

        try{
            const id = await api.transactions.create(this.state.data);

            this.setState({ loading: false, error: null});

            this.props.history.push('/Recycle')
        } catch (error) {
            this.setState({ loading: false, error: error});
        }
            
    };

    render() {   
        var aluminio = "5"
        var plastico ="4"
        var url = `/qrinfo/${this.handlePress.id}/`
        return (
            <React.Fragment>
                  <div className="form-group-recycle">
                                <div className="infoRecycle">
                                    <div className="imageItem"><img src="https://www.dropbox.com/sh/2efk6rmts9zqhit/AABHHWavRc1s0Y3lzQWjDhipa/icons8-botella-de-agua-50.png?raw=1" alt="" /></div>
                                    <div classname="bgPlastico">
                                    <label className = "plasticoTitulo">
                                        Glass
                                    </label>
                                    </div>
                                    <p className="plasticoTexto">{aluminio}</p>
                                </div>
                                <div className="infoRecycle1">
                                    <div className="imageItem"><img src="https://www.dropbox.com/sh/2efk6rmts9zqhit/AADmW7ECznpGKulCILOK4ydMa/icons8-bote-de-cerveza-50.png?raw=1" alt="" /></div>
                                    <div classname="bgPlastico">
                                    <label className = "aluminioTitulo">
                                        Aluminum
                                    </label>
                                    </div>
                                    <p className="plasticoTexto">{plastico}</p>
                                </div>
                            <Link to={url}>
                            <button type="submit" className="qr-code" onClick={this.handlePress}>Capture</button>
                            </Link>
                            <Link to="/UserLanding">
                            <button  className="end">Main Menu</button>
                            </Link>
                    </div>
            </React.Fragment>
        )
    }
}

export default RecycleTest;