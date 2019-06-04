import React, {Component} from "react"
import PostData from "../../services/PostData"
import {Redirect} from "react-router-dom";


class Login extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            Email: '',
            password: '',
            redirect: false

        }
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    login()
    {
        //console.log(this.state);
        PostData(this.state, "https://api.trojkatygame.tk/api/users/authenticate").then((result) => {
            let responseJSON = result;
            //console.log(responseJSON);
            if(responseJSON.token)
            {
                sessionStorage.setItem('userData', responseJSON);
                sessionStorage.setItem('token', responseJSON.token);
                this.setState({redirect: true});
            }
            else{
                //console.log(responseJSON.message);
            }
        })
    }

    onChange(e)
    {
        this.setState({[e.target.name]: e.target.value})
        //console.log(this.state);
    }

    render() {

        if(this.state.redirect)
        {
            return(
                <Redirect to="/" />
                );
        }

        if(sessionStorage.getItem('userData'))
        {
            return(
                <Redirect to="/" />
                );
        }


        return(
            <div>
                <header>
                    <h1>Trojkaty game</h1>
                    <h3>Login</h3>
                </header>
                <div className="body">
                    <p>
                        <label>Username</label>
                        <input type="text" name="Email" onChange={this.onChange} />
                    </p>
                    <p>
                        <label>Password</label>
                        <input type="password" name="password" onChange={this.onChange} />
                    </p>
                    <input type="button" name="login" onClick={this.login} value="Login"/>
                </div>
                <footer>

                </footer>
            </div>
        );
    }
}

export default Login;