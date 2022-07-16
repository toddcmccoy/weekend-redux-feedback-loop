import { useState} from 'react'
import { useHistory } from "react-router-dom"
import { useDispatch } from 'react-redux'; 

function Support(){

    const dispatch = useDispatch();
    const history = useHistory();
    const [support, setSupport] = useState(1);

    const handleSubmit = () => {
        dispatch ({
            type: 'ADD_SUPPORT',
            payload: Number(support)
        })
        history.push('/comments')
    }
    return(
        <div className = "container">
        <div className = "question-card">
            <h1>How supported are you feeling?</h1>
            <h2>Please select a number between 1 and 5.</h2>
            <h3>1 being 'I'm not alone??'</h3>
            <h3>5 being 'I feel like I am surrounded by hugs and puppies.'</h3>
            <form>
                <input
                className= "number-input"
                type="number"
                min="1"
                max="5"
                value = {support}
                onChange={(event) => setSupport(event.target.value)}
                />
            </form>
            <button onClick={handleSubmit}>NEXT</button>
        </div>
    </div>
    )



}

export default Support;