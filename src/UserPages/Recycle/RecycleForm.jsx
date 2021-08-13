import React, { Component } from 'react';
import api from '../../libs/fetch';
import "./RecycleForm.css";
import { Link} from 'react-router-dom'

class RecycleForm extends Component {
    
    state = {
        loading: false,
        error: null,
        data: {
            glass: Math.floor(Math.random()*20),
            aluminum: Math.floor(Math.random()*20),
            username:"Fredy",
            machine: "1",
        },
    };
    
    handlePress = async (e) => {
        e.preventDefault();
        this.setState({loading: true, error: null });

        try{
            const id = await api.transactions.create(this.state.data);
            this.setState({ loading: false, error: null});
            this.props.history.push('/qr', id);
            
        } catch (error) {
            this.setState({ loading: false, error: error});
        }
            
        
    };

    render() {
        var aluminio = this.state.data.aluminum
        aluminio.toString();
        var vidrio = this.state.data.glass
        vidrio.toString();
        return (
            <React.Fragment>              
                  <div className="backgroundRecycleForm" style={{ height: '100vh' }}>
                                <div className="infoRecycle">
                                    <div className="imageItem"><img src="https://www.dropbox.com/sh/2efk6rmts9zqhit/AABHHWavRc1s0Y3lzQWjDhipa/icons8-botella-de-agua-50.png?raw=1" alt="" /></div>
                                    <div classname="bgPlastico">
                                    <label className = "plasticoTitulo">
                                        Plastic
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
                                    <p className="plasticoTexto">{vidrio}</p>
                                </div>
                            <button type="submit" className="qr-code" onClick={this.handlePress}>Capture</button>
                            <Link to="/UserLanding">
                            <button  className="end">Main Menu</button>
                            </Link>
                        </div>
                        
            </React.Fragment>
        )
    }
}

export default RecycleForm;