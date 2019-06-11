import React, {Component} from "react"
import {Redirect} from "react-router-dom"

class Admin extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
        }
    }

    componentDidMount()
    {
    }

    render()
    {
        if(!this.props.isLoggedIn())
        {
            return(
                <Redirect to="/login" />
            )
        }

        return(
            <div>
            <a href="/ValidateQuestion" >ValidateQuestion</a>
            <br/><br/>Tu moze kiedys bedą jakies statystyki

            </div>
        );
    }
};

export default Admin;