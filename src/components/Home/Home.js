import React, {Component} from "react"
import "./Home.css"

class Home extends Component
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
        // if(!this.props.isLoggedIn())
        // {
        //     return(
        //         <Redirect to="/login" />
        //     )
        // }

        return(
            <div className="text display-1">
                Let's play in game. <br/> triangles.

            </div>
        );
    }
};

export default Home;