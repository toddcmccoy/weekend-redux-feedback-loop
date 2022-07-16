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
        <div>
            <h2>How are you feeling?</h2>
            <form>
                {/* <input type="number" min="1" max="5" value="1" /> */}
            </form>
        </div>
    )



}

export default Comments;