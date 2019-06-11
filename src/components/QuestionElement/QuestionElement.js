import React, {Component}  from "react"
import {Container, Col, Row, Button} from "react-bootstrap"
import axios from "axios"


class QuestionElement extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            question: {
                id : props.id,
                questionText : props.questionText,
                correctAnswer : props.correctAnswer,
                incorrectAnswer1 : props.incorrectAnswer1,
                incorrectAnswer2 : props.incorrectAnswer2,
                incorrectAnswer3 : props.incorrectAnswer3
            },
            text: props.text
        }

        this.publish = this.publish.bind(this);
        this.notPublish = this.notPublish.bind(this);
    }

    publish()
    {
        //console.log("publish " + this.state.question.id);

        axios.put("https://api.trojkatygame.tk/api/Validate/confirm?id=" + this.props.id + "&publish=true", "", 
        {
            headers: {
                "Accept" : "application/json",
                "Content-Type" : "application/json",
                "Authorization" : "Bearer " + sessionStorage.getItem("token")
            }
        })
        .then(res => 
            {
                

            }).catch(error => 
            {
                console.log(error.response);
            })

            onclick=this.props.delEvent;
    }

    notPublish()
    {
        console.log("dont publish " + this.state.question.id);

        axios.put("https://api.trojkatygame.tk/api/Validate/confirm?id=" + this.props.id + "&publish=false", "", 
        {
            headers: {
                "Accept" : "application/json",
                "Content-Type" : "application/json",
                "Authorization" : "Bearer " + sessionStorage.getItem("token")
            }
        })
        .then(res => 
            {

            }).catch(error => 
            {
                console.log(error.response);
            })

        onclick=this.props.delEvent;
    }


    render()
    {
        return(
            <Container className="border border-dark mt-4">
                <Row >  
                    <Col xs={12} >
                        <h4>Pytanie: </h4> 
                        <h6>{this.props.questionText}</h6>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <h5>Correct answer: </h5> 
                        <h6>{this.props.correctAnswer}</h6>
                    </Col>
                    <Col xs={12} md={6}>
                        <h5>Incorrect answer 1: </h5>  
                        <h6>{this.props.incorrectAnswer1}</h6>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                    <h5>Incorrect answer 2: </h5>  
                        <h6>{this.props.incorrectAnswer2}</h6>
                    </Col>
                    <Col xs={12} md={6}>
                    <h5>Incorrect answer 3: </h5>  
                        <h6>{this.props.incorrectAnswer3}</h6>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} className="mb-2">

                        <Button className="mr-1" variant="outline-primary" onClick={this.publish} >Publish</Button> 

                        <Button variant="outline-danger" onClick={this.notPublish} >Do not publish</Button> 
                    </Col>
                </Row>              
            </Container>
        );
    }
}

export default QuestionElement;