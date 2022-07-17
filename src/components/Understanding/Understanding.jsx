import { useState} from 'react'
import { useHistory } from "react-router-dom"
import { useDispatch } from 'react-redux'; 

function Understanding(){

    const dispatch = useDispatch();
    const history = useHistory();
    const [understanding, setUnderstanding] = useState(1);

    const handleGoBack = () => {
        history.push('/')
    };
// sending the selected rating to the store and ensuring that the submission is in the range of 1 to 5
    const handleSubmit = () => {
        if (understanding >= 1){
        dispatch ({
            type: 'ADD_UNDERSTANDING',
            payload: Number(understanding)
        })
        history.push('/support')
        } else{
            alert ('You must enter a number between 1 and 5. Thank you for your cooperation.')
        };
    }
    return(
        <div className = "container">
        <div className = "question-card">
            <h1>How would you rate your understanding?</h1>
            <h2>Please select a number between 1 and 5.</h2>
            <h3>1 being 'What am I supposed to understand?'</h3>
            <h3>5 being 'I got this. Could probably teach it.'</h3>
            <form>
                <input
                className= "number-input"
                type="number"
                min="1"
                max="5"
                value = {understanding}
                onChange={(event) => setUnderstanding(event.target.value)}
                />
            </form><br />
            <button onClick={handleGoBack}>Previous</button>
            <button onClick={handleSubmit}>Next</button>
        </div>
    </div>
    )



}

export default Understanding;