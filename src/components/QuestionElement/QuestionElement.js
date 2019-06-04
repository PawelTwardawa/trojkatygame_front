import React, {Component}  from "react"
import PutData from "../../services/PutData"


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

        PutData(sessionStorage.getItem("token"), "https://api.trojkatygame.tk/api/Validate/confirm?id=" + this.props.id + "&publish=true").then((result) => {
            let responseJSON = result;
            //console.log(responseJSON);
            if(responseJSON)
            {
                //console.log("question submited");

                onclick=this.props.delEvent;
            }
            else{
                //console.log(responseJSON.status);
            }
        });

        onclick=this.props.delEvent;
    }

    notPublish()
    {
        console.log("dont publish " + this.state.question.id);

        PutData(sessionStorage.getItem("token"), "https://api.trojkatygame.tk/api/Validate/confirm?id=" + this.props.id + "&publish=false").then((result) => {
            let responseJSON = result;
            //console.log(responseJSON);
            if(responseJSON)
            {
                //console.log("question submited");
            }
            else{
                //console.log(responseJSON.status);
            }
        });

        onclick=this.props.delEvent;
    }


    render()
    {
        return(
            <div>
                Pytanie: {this.props.questionText} <br/>
                Correct answer: {this.props.correctAnswer} <br/>
                Incorrect answer 1: {this.props.incorrectAnswer1} <br/>
                Incorrect answer 2:{this.props.incorrectAnswer2} <br/>
                Incorrect answer 3:{this.props.incorrectAnswer3} <br/>

                <button onClick={this.publish} >Publish</button> 
                <button onClick={this.notPublish} >Do not publish</button> 
                <br/><br/>

            </div>
        );
    }
}

export default QuestionElement;