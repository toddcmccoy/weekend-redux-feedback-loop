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
            <h1>How are you feeling?</h1>
            <h2>Please select a number between 1 and 5.</h2>
            <h3>1 being 'I feel like a dumpster fire'</h3>
            <h3>5 being 'If I was any better I'd be twins'</h3>
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