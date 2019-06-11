import React, {Component} from "react"
import PostData from "../../services/PostData"
import {Redirect} from "react-router-dom";
import {Button, Form} from "react-bootstrap"
import "./Login.css"


class Login extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            Email: '',
            password: '',
            redirect: false,
            error: ""
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
                sessionStorage.setItem("userData", responseJSON);
                sessionStorage.setItem("token", responseJSON.token);
                this.props.changeLoggedState(true);
                //this.setState({redirect: true});
            }
            else{
                //console.log(responseJSON.message);
                this.setState({error: responseJSON.message});
            }
        })
    }

    onChange(e)
    {
        this.setState({[e.target.name]: e.target.value})
        //console.log(this.state);
    }

    render() {
           
        if(this.props.isLoggedIn())
        {
            return(
                <Redirect to="/admin" />
                );
        }

        return(
                <div className="Login">
                    <Form>
                        <Form.Group controlId="text">
                            <Form.Label>Email</Form.Label>
                            <Form.Control autoFocus type="email" name="Email" onChange={this.onChange} />
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" onChange={this.onChange} />
                        </Form.Group>
                        <Button block type="button" onClick={this.login} >Login</Button>
                        <Form.Label id="error-label">{this.state.error}</Form.Label>
                    </Form>
                </div>
            );
    }
}

export default Login;