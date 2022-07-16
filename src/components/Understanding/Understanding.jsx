import { useState} from 'react'
import { useHistory } from "react-router-dom"
import { useDispatch } from 'react-redux'; 

function Understanding(){

    const dispatch = useDispatch();
    const history = useHistory();
    const [understanding, setUnderstanding] = useState(1);

    const handleSubmit = () => {
        dispatch ({
            type: 'ADD_UNDERSTANDING',
            payload: Number(understanding)
        })
        history.push('/support')
    }
    return(
        <div className = "container">
        <div className = "question-card">
            <h1>How would you rate your understanding?</h1>
            <h2>Please select a number between 1 and 5.</h2>
            <h3>1 being 'What am I supposed to understand'</h3>
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
            </form>
            <button onClick={handleSubmit}>NEXT</button>
        </div>
    </div>
    )



}

export default Understanding;