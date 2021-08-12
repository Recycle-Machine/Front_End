import React from 'react';
import { Link } from 'react-router-dom';


class QRinfo extends React.Component{
    
    render () {
    var str = "Hola Sigala y Lua donde esta Leo?";
    var id = (`/qrinfo/${str}`)
    return(
    
    <React.Fragment>
        <div>
        <Link to={id}>
        <p>Hola</p>
        </Link>
        </div>
    </React.Fragment>
        
    );
}
}

export default QRinfo
