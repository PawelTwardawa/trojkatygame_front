import React, {Component} from "react"
import {NavLink} from "react-router-dom"
//import {Redirect} from "react-router-dom"

class Navigation extends Component
{
    // constructor(props)
    // {
    //     super(props);
    // }


    render()
    {

        return(
            <div>
                <NavLink to="/">HOME</NavLink>
            </div>
        );
    }
};

export default Navigation;