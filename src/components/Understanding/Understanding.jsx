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
            payload: Number(feeling)
        })
        history.push('/support')
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

export default Understanding;