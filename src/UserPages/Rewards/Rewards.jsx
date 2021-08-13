import React from 'react'
import UserNavbar from '../../components/UserNavbar';
import { Link } from 'react-router-dom'
import './Rewards.css'

class Rewards extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="backgroundRecycle" style={{ height: '100vh' }}>
                <UserNavbar></UserNavbar>
                    <div className="rewardsScholarship">
                        <h1 className="titleRewards">Scholarship</h1>
                        <img src="https://www.dropbox.com/s/r3ju9xorpq1u4ru/Professor-rafiki.png?raw=1" alt="" />
                        <Link to='/Rewards/School/'>
                        <button className="buttonRewards">20% discount school enrollment</button>
                        </Link>
                    </div>
                    <div className="rewardsFood">
                        <h1 className="titleRewards">Food</h1>
                        <img src="https://www.dropbox.com/s/cr20fmv2n58401k/Street_Food-amico.png?raw=1" alt="" />
                        <Link to='/Rewards/Foods/'>
                        <button className="buttonRewards">30% discount on food</button>
                        </Link>
                    </div>
                    <div className="rewardsDrinks">
                        <h1 className="titleRewards">Drinks</h1>
                        <Link to='/Rewards/Drinks/'>
                        <img src="https://www.dropbox.com/s/vtg6kdrhoj3c8or/Craft_beer_manufacturing-cuate.png?raw=1" alt="" />
                        <button className="buttonRewards">50% discount on drinks</button>
                        </Link>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Rewards;