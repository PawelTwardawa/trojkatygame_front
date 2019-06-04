import React, {Component} from "react"
import PostData from "../../services/PostData"
import {Redirect} from "react-router-dom";
import {Button, FormGroup, FormControl, Form} from "react-bootstrap"
import "./Login.css"


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
                <div className="Login">
                    <Form>
                        <FormGroup controlId="text">
                            <label>Email</label>
                            <FormControl autoFocus type="email" name="Email" onChange={this.onChange} />
                        </FormGroup>
                        <FormGroup controlId="password">
                            <label>Password</label>
                            <FormControl type="password" name="password" onChange={this.onChange} />
                        </FormGroup>
                        <Button block type="button" onClick={this.login} >Login</Button>
                    </Form>
                </div>
            );


        // return(
        //     <div className="Login">
        //         <form>
        //             <label>Username</label>
        //             <input type="text" name="Email" onChange={this.onChange} />
                
        //             <label>Password</label>
        //             <input type="password" name="password" onChange={this.onChange} />
                
        //         <input type="button" name="login" onClick={this.login} value="Login"/>
        //         </form>
        //     </div>
        // );
    }
}

export default Login;