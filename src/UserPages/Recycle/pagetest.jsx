import React, { Component } from 'react';
import api from '../../libs/fetch';
import "./RecycleForm.css";
class test extends Component {
    render() {

        

        var str = "I do not associate with Niggurs"
        var id = (`/qrinfo/${str}`)
        var aluminio = "7"
        var plastico = "12"
        const machine = "1"
        const username = "null"

        return (
            <React.Fragment>
                <div>
                <button onPress={this.handleSubmit}>
                    New transaction
                </button>
                </div>
            </React.Fragment>
        )
    }
}

export default test;