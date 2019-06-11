import React, {Component} from "react"
import {Redirect} from "react-router-dom"
import {Form, Button, Dropdown} from "react-bootstrap"
import axios from "axios"
import "./NewQuestion.css"

class NewQuestion extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            error: "",
            question : "",
            correctAnswer : "",
            incorrectAnswer1 : "",
            incorrectAnswer2 : "",
            incorrectAnswer3 : "",
            categoryName : "NONE",
            categoryId : 0,
            categories: []

        }

        this.addQuestion = this.addQuestion.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSelect = this.onSelect.bind(this);
    }

    

    componentDidMount()
    {
        axios.get("https://api.trojkatygame.tk/api/category/all", 
        {
            headers: {
                "Accept" : "application/json",
                "Content-Type" : "application/json",
                "Authorization" : "Bearer " + sessionStorage.getItem("token")
            }
        }).then(res => 
            {
                this.setState({categories : res.data});
                //console.log(this.state.categories);

            }).catch(error => 
            {
                //console.log(error.response);
                if(error.response.status === 400)
                this.setState({error : error.response.data.message});
            })
    }

    onChange(e)
    {
        //console.log(e.target.name + " " + e.target.value);
        this.setState({[e.target.name]: e.target.value})
        //console.log(this.state);
    }

    onSelect(e)
    {
        //console.log(e);
        this.setState({categoryName : e});

        this.state.categories.forEach(c => {
            if(c.name === e)
            {
                this.setState({categoryName : e, categoryId : c.id});
                //console.log(c.id);
            }
        });

        //console.log(this.state.categoryName + " " + this.state.categoryId);
    }

    addQuestion()
    {
        this.setState({error : ""});
        if(this.state.categoryId === 0)
        {
            this.setState({error : "Choose category"});
            return;
        }

        //console.log(questionObj);
        
        axios.post("https://api.trojkatygame.tk/api/question/create", {
            question : this.state.question,
            correctAnswer : this.state.correctAnswer,
            incorrectAnswer1 : this.state.incorrectAnswer1,
            incorrectAnswer2 : this.state.incorrectAnswer2,
            incorrectAnswer3 : this.state.incorrectAnswer3,
            categoryId : this.state.categoryId,
            public : true
        }, 
        {
            headers: {
                "Accept" : "application/json",
                "Content-Type" : "application/json",
                "Authorization" : "Bearer " + sessionStorage.getItem("token")
            }
        }).then(res => 
            {
                //console.log(res);
            }).catch(error => 
            {
                //console.log(error.response);
                if(error.response.status === 400)
                this.setState({error : error.response.data.message});
            })
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
            <div className="question-form">
            <Form>
                <Form.Label id="error-label">{this.state.error}</Form.Label>
                <Form.Group controlId="text">
                    <Form.Label>Question</Form.Label>
                    <Form.Control type="text" name="question"  onChange={this.onChange} placeholder="enter new question"/>
                </Form.Group>
                <Form.Group controlId="text">
                    <Form.Label>Correct answer</Form.Label>
                    <Form.Control type="text" name="correctAnswer"  onChange={this.onChange} placeholder="enter correct answer"/>
                </Form.Group>
                <Form.Group controlId="text">
                    <Form.Label>Incorrect answer</Form.Label>
                    <Form.Control type="text" name="incorrectAnswer1"  onChange={this.onChange} placeholder="enter incorrect answer"/>
                </Form.Group>
                <Form.Group controlId="text">
                    <Form.Label>Incorrect answer</Form.Label>
                    <Form.Control type="text" name="incorrectAnswer2"  onChange={this.onChange} placeholder="enter incorrect answer"/>
                </Form.Group>
                <Form.Group controlId="text">
                    <Form.Label>Incorrect answer</Form.Label>
                    <Form.Control type="text" name="incorrectAnswer3"  onChange={this.onChange} placeholder="enter incorrect answer"/>
                </Form.Group>
                <Form.Group controlId="text">
                    <Form.Label>Category</Form.Label>
                    <Dropdown  onSelect={this.onSelect}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            {this.state.categoryName}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                        {this.state.categories.map((category, index) => {
                            return(
                                <Dropdown.Item key={index} eventKey={category.name} >{category.name}</Dropdown.Item>
                            );
                        })}                            
                        </Dropdown.Menu>
                    </Dropdown>
                </Form.Group>
                <Button type="button" onClick={this.addQuestion} >Save</Button>
                
          </Form>

            </div>
        );
    }
};

export default NewQuestion;