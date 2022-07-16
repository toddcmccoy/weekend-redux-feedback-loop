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

export default Support;