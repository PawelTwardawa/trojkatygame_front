import React, {Component} from "react"
//import {Redirect} from "react-router-dom"

import {Navbar, Nav, Button} from "react-bootstrap"

class Navigation extends Component
{
    constructor(props)
    {
        super(props);

        this.logout = this.logout.bind(this);
        this.isLoggedFunc = this.isLoggedFunc.bind(this);
    }

    isLoggedFunc()
    {
        return this.props.isLoggedIn();
    }

    logout()
    {
        //console.log("logout")
        //this.setState({isLogged: false})
        this.props.changeLoggedState(false);
        sessionStorage.setItem("userData", "");
        sessionStorage.clear();
    }

    render()
    {
        if(this.isLoggedFunc())
        {
            return(
                <Navbar bg="dark" variant="dark" expand="md">
                    <Navbar.Brand href="/admin">Trojkaty Game</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/ValidateQuestion">Validate Questions</Nav.Link>
                        <Nav.Link href="/newCategory">New Category</Nav.Link>
                        <Nav.Link href="/newQuestion">New Question</Nav.Link>
                    </Nav>
                    <Button variant="outline-info" onClick={this.logout}>Logout</Button>
                    </Navbar.Collapse>
                </Navbar>
            );

        }
        else
        {
            return(
                <Navbar bg="dark" variant="dark" expand="sm">
                    <Navbar.Brand href="/">Trojkaty Game</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="https://nertax.itch.io/trojkatytest">Download</Nav.Link>
                            <Nav.Link href="/login">Login</Nav.Link>
                            
                        </Nav>
                    </Navbar.Collapse>
                    {/* <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form> */} 

                    
                </Navbar>
            );
        }
    }
};

export default Navigation;