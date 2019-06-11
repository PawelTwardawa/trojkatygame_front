import React, {Component} from "react"
import {Redirect} from "react-router-dom"
import QuestionComponent from "../QuestionElement/QuestionElement"
import GetData from "../../services/GetData"

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
            GetData(sessionStorage.getItem("token"), "https://api.trojkatygame.tk/api/Validate/all").then((result) => {
                let responseJSON = result;
                //console.log(responseJSON);
                //console.log(responseJSON);
                if(responseJSON)
                {
                    //questions = [];

                    this.setState({questions: responseJSON});
                    //console.log("Ok");

                    //this.setState({redirect: true});
                }
                else{
                    //console.log(responseJSON.status);
                }
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