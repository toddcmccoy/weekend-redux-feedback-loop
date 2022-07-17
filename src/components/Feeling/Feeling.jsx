import { useState} from 'react'
import { useHistory } from "react-router-dom"
import { useDispatch } from 'react-redux'; 

function Feeling(){

    const dispatch = useDispatch();
    const history = useHistory();
    const [feeling, setFeeling] = useState(0);

    const handleSubmit = () => {
        if (feeling >=1){
        dispatch ({
            type: 'ADD_FEELING',
            payload: Number(feeling)
        })
        history.push('/understanding')
        } else{
            alert ('You must enter a number between 1 and 5. Thank you for your cooperation.')
        };
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
                value = {feeling}
                onChange={(event) => setFeeling(event.target.value)}
                />
            </form><br />
            <button onClick={handleSubmit}>NEXT</button>
        </div>
    </div>
    )



}

export default Feeling;