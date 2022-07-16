import { useState} from 'react'
import { useHistory } from "react-router-dom"
import { useDispatch } from 'react-redux'; 

function Comments(){

    const dispatch = useDispatch();
    const history = useHistory();
    const [comments, setComments] = useState('');

    const handleSubmit = () => {
        dispatch ({
            type: 'ADD_COMMENTS',
            payload: ''
        })
        history.push('/')
    }
    return(
        <div className = "container">
        <div className = "question-card">
            <h1>Do you have any additional comments you would like to add?</h1>
            <form>
                <input
                type="text"
                className="text-box"
                value = {comments}
                onChange={(event) => setComments(event.target.value)}
                />
            </form>
            <button onClick={handleSubmit}>NEXT</button>
        </div>
    </div>
    )



}

export default Comments;