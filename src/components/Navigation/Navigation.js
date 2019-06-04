import React, {Component} from "react"
//import {Redirect} from "react-router-dom"

import {Navbar, Nav} from "react-bootstrap"

class Navigation extends Component
{
    constructor(props)
    {
        super(props);

        this.logout = this.logout.bind(this);
    }

    logout()
    {
        console.log("logout")
    }

    render()
    {
        return(
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Trojkaty Game</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Validate Questions</Nav.Link>
                    <Nav.Link href="/newCategory">New Category</Nav.Link>
                    <Nav.Link href="/newQuestion">New Question</Nav.Link>
                </Nav>

                {/* <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form> */}
            </Navbar>
        );
        
        // return(
        //     <div>
        //         <NavLink to="/">HOME</NavLink>
        //     </div>
        // );
    }
};

export default Navigation;