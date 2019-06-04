import React, {Component} from "react"
import {Redirect} from "react-router-dom"
import QuestionComponent from "../QuestionElement/QuestionElement"
import GetData from "../../services/GetData"

class Home extends Component
{

    constructor(props)
    {
        super(props);

        this.state = {
            redirect: false,
            // questions : [ {
            //     id : 0,
            //     question : "pytanie",
            //     correctAnswer : "odp poprawna",
            //     incorrectAnswer1 : "odp nie popr1",
            //     incorrectAnswer2 : "odp nie popr2",
            //     incorrectAnswer3 : "odp nie pop3",
            // },
            // {
            //     id : 1,
            //     question : "pytanie2",
            //     correctAnswer : "odp poprawna",
            //     incorrectAnswer1 : "odp nie popr1",
            //     incorrectAnswer2 : "odp nie popr2",
            //     incorrectAnswer3 : "odp nie pop3",
            // }
            // ]
            questions : []
        }

        this.logout = this.logout.bind(this);
    }

    componentDidMount()
    {
        if(sessionStorage.getItem("userData"))
        {
            //console.log("user logged");
        }
        else{
            this.setState({redirect: true});
        }

        //console.log(sessionStorage.getItem("token"));

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

    logout()
    {
        sessionStorage.setItem("userData", "");
        sessionStorage.clear();
        this.setState({redirect: true});
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
        if(this.state.redirect)
        {
            return(
                <Redirect to="/login" />
            )
        }

        return(
            <div>
                <button onClick={this.logout} >LOGOUT</button>
                {
                this.state.questions.map((question, index) => {
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

export default Home;