import React, {Component} from "react"
import {Redirect} from "react-router-dom";
import {Button, Form} from "react-bootstrap"
import axios from "axios"
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
        axios.post("https://api.trojkatygame.tk/api/users/authenticate", this.state, 
        {
            headers: {
                "Accept" : "application/json",
                "Content-Type" : "application/json",
            }
        }).then(res => 
            {
                sessionStorage.setItem("userData", res.data.token);
                sessionStorage.setItem("token", res.data.token);
                this.props.changeLoggedState(true);
            }).catch(error => 
            {
                //console.log(error.response);
                if(error.response.status === 400)
                this.setState({error : error.response.data.message});
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