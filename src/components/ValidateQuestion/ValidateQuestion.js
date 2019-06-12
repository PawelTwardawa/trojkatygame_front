import React, {Component} from "react"
import {Redirect} from "react-router-dom"
import QuestionComponent from "../QuestionElement/QuestionElement"
import axios from "axios"

class ValidateQuestion extends Component
{

    constructor(props)
    {
        super(props);

        this.state = {
            questions : []
        }
    }

    componentDidMount()
    {
        if(this.props.isLoggedIn())
        {
            axios.get("https://api.trojkatygame.tk/api/Validate/all", 
            {
            headers: {
                "Accept" : "application/json",
                "Content-Type" : "application/json",
                "Authorization" : "Bearer " + sessionStorage.getItem("token")
            }
        }).then(res => 
            {
                this.setState({questions: res.data});
                //console.log(this.state.categories);

            }).catch(error => 
            {
                console.log(error.response);
            })
        }
    }

    deleteQuestion(index, e)
    {
        //console.log("tab index " + index);
        const question = Object.assign([], this.state.questions);
        question.splice(index, 1);
        this.setState({questions:question});
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
            <div>
                {this.state.questions.map((question, index) => {
                    return(
                    <QuestionComponent 
                    key = {question.id}
                    id = {question.id}
                    questionText={question.question}
                    correctAnswer={question.correctAnswer}
                    incorrectAnswer1={question.incorrectAnswer1}
                    incorrectAnswer2={question.incorrectAnswer2}
                    incorrectAnswer3={question.incorrectAnswer3}
                    category={question.category}
                    delEvent={this.deleteQuestion.bind(this, index)}
                />
                    );
                })
            }
                
            </div>
        );
    }
};

export default ValidateQuestion;