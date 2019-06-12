import React, {Component} from "react"
import {Redirect} from "react-router-dom"
import axios from "axios"
import {Row, Col, Card, Container} from "react-bootstrap"
import "./Admin.css"

class Admin extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            usersCount : 0,
            categoriesCount : 0,
            questionsCount : 0,
            groupsCount : 0
        }
    }

    componentDidMount()
    {
        axios.get("https://api.trojkatygame.tk/api/Statistic/categoriesCount", 
            {
            headers: {
                "Accept" : "application/json",
                "Content-Type" : "application/json",
                "Authorization" : "Bearer " + sessionStorage.getItem("token")
            }}).then(res => 
            {
                this.setState({categoriesCount: res.data});
                //console.log(this.state.categories);

            }).catch(error => 
            {
                console.log(error.response);
            });

        axios.get("https://api.trojkatygame.tk/api/Statistic/questionsCount", 
            {
            headers: {
                "Accept" : "application/json",
                "Content-Type" : "application/json",
                "Authorization" : "Bearer " + sessionStorage.getItem("token")
            }}).then(res => 
            {
                this.setState({questionsCount: res.data});
                //console.log(this.state.categories);

            }).catch(error => 
            {
                console.log(error.response);
            });


        axios.get("https://api.trojkatygame.tk/api/Statistic/usersCount", 
            {
            headers: {
                "Accept" : "application/json",
                "Content-Type" : "application/json",
                "Authorization" : "Bearer " + sessionStorage.getItem("token")
            }}).then(res => 
            {
                this.setState({usersCount: res.data});
                //console.log(this.state.categories);

            }).catch(error => 
            {
                console.log(error.response);
            });

        axios.get("https://api.trojkatygame.tk/api/Statistic/groupsCount", 
            {
            headers: {
                "Accept" : "application/json",
                "Content-Type" : "application/json",
                "Authorization" : "Bearer " + sessionStorage.getItem("token")
            }}).then(res => 
            {
                this.setState({groupsCount: res.data});
                //console.log(this.state.categories);

            }).catch(error => 
            {
                console.log(error.response);
            });
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
            <Container>
            <Row>
                <Col md={3} >
                    <Card className="statistic-card" >
                        <Card.Body>
                            <Card.Title>Users</Card.Title>
                            <Card.Text>{this.state.usersCount}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card  className="statistic-card">
                        <Card.Body>
                            <Card.Title>Questions</Card.Title>
                            <Card.Text>{this.state.questionsCount}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card  className="statistic-card">
                        <Card.Body>
                            <Card.Title>Categories</Card.Title>
                            <Card.Text>{this.state.categoriesCount}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className="statistic-card" >
                        <Card.Body>
                            <Card.Title>Groups</Card.Title>
                            <Card.Text>{this.state.groupsCount}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>

            </Container>
        );
    }
};

export default Admin;