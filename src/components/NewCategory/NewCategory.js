import React, {Component} from "react"
import {Redirect} from "react-router-dom"
import {Form, Button} from "react-bootstrap"
import axios from "axios"

class NewCategory extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            error: "",
            category : ""

        }

        this.addCategory = this.addCategory.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    

    componentDidMount()
    {

    }

    onChange(e)
    {
        //console.log(e.target.name + " " + e.target.value);
        this.setState({[e.target.name]: e.target.value})
        //console.log(this.state);
    }


    addCategory()
    {
        this.setState({error : ""});

        //console.log(questionObj);
        
        axios.post("https://api.trojkatygame.tk/api/category/create", {
            category : this.state.category
        }, 
        {
            headers: {
                "Accept" : "application/json",
                "Content-Type" : "application/json",
                "Authorization" : "Bearer " + sessionStorage.getItem("token")
            }
        }).then(res => 
            {
                this.setState({error : "Success"});
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
                    <Form.Label>Category</Form.Label>
                    <Form.Control type="text" name="category"  onChange={this.onChange} placeholder="enter new question"/>
                </Form.Group>
                <Button type="button" onClick={this.addCategory} >Save</Button>
                
          </Form>

            </div>
        );
    }
};

export default NewCategory;