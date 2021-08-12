import React from 'react'
import UserNavbar from '../../components/UserNavbar';
import "./Recycle.css"
import RecycleForm from "../Recycle/RecycleForm"

class RecycleUser extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="backgroundRecycle" style={{ height: '100vh' }}>
                <UserNavbar></UserNavbar>
                <RecycleForm
                ></RecycleForm>       
                </div>
            </React.Fragment>
        );
    }
}

export default RecycleUser;