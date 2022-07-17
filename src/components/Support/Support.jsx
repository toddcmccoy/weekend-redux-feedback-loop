import { useState} from 'react'
import { useHistory } from "react-router-dom"
import { useDispatch } from 'react-redux'; 

function Support(){

    const dispatch = useDispatch();
    const history = useHistory();
    const [support, setSupport] = useState(1);

    const handleGoBack = () => {
        history.push('/understanding')
    };

// sending the selected rating to the store and ensuring that the submission is in the range of 1 to 5
    const handleSubmit = () => {
        if (support >= 1) {
            dispatch ({
            type: 'ADD_SUPPORT',
            payload: Number(support)
        })
        history.push('/comments')
        } else {
            alert ('You must enter a number between 1 and 5. Thank you for your cooperation.')
        };
        
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
            </form><br />
            <button onClick={handleGoBack}>Previous</button>
            <button onClick={handleSubmit}>Next</button>
        </div>
    </div>
    )



}

export default Support;