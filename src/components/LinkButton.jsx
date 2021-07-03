import React from "react"
import {Link} from "react-router-dom"
import "./css's/LinkButton.css"

const LinkButton = props => {
    return(
        <React.Fragment>
            <div className="Button">
            <Link className={props.theme} to={props.link}>
                <p>{props.contentText}</p>
            </Link>
            </div>
        </React.Fragment>
    )
}

export default LinkButton;