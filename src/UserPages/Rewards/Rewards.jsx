import React from 'react'
import Navbar from '../../components/Navbar';
import './Rewards.css'

class Rewards extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="backgroundRecycle" style={{ height: '100vh' }}>
                <Navbar></Navbar>
                    <div className="rewardsScholarship">
                        <h1>Scholarship</h1>
                        <img src="https://www.dropbox.com/s/te167zmrfq8cf0p/icons8-edificio-escolar-30.png?raw=1" alt="" />
                        <button>50% discount school enrollment</button>
                    </div>
                    <div className="rewardsFood">
                        <h1>Food</h1>
                        <img src="https://www.dropbox.com/s/cosu0jlbct1ifeg/icons8-salami-pizza-30.png?raw=1" alt="" />
                        <button>20% discount on food</button>
                    </div>
                    <div className="rewardsDrinks">
                        <h1>Drinks</h1>
                        <img src="https://www.dropbox.com/s/hhxakdq0rnf6vfd/icons8-cup-with-straw-50.png?raw=1" alt="" />
                        <button>5% discount on drinks</button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Rewards;