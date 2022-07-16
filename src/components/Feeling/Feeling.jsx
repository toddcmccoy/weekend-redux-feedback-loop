import { useState} from 'react'
import { useHistory } from "react-router-dom"
import { useDispatch } from 'react-redux'; 

function Feeling(){

    const dispatch = useDispatch();
    const history = useHistory();
    const [feeling, setFeeling] = useState(1);

    const handleSubmit = () => {
        dispatch ({
            type: 'ADD_FEELING',
            payload: Number(feeling)
        })
        history.push('/understanding')
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