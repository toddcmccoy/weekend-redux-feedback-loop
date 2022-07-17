import axios from 'axios';
import { useHistory } from "react-router-dom";
import {useSelector} from 'react-redux';

function Review(){
// setting feedback values stored in our redux store to variables in order to post them to the database
    const history = useHistory();
    const feeling = useSelector(store => store.feelingReducer);
    const support = useSelector(store => store.supportReducer);
    const understanding = useSelector(store => store.understandingReducer);
    const comments = useSelector(store => store.commentsReducer);
    
// POSTing the feedback data to the database
    const onSubmitFeedback = () => {
        axios({
            method: 'POST',
            url: '/feedback',
            data: {
                feeling: feeling, 
                understanding: understanding, 
                support: support, 
                comments: comments
            }
        })
        .then(() => {
            console.log(`In POST `)
        })
        .catch((err) => {
            console.log(`ERR in POST`, err)
        })
        alert('Thank you for your cooperation.')
        history.push('/')
    }
// displaying the collected feedback on the page before user confirms final submission
    return(
    <>
        <div className = "container">
        
        <div className = "question-card">
        
        <ul>
            <li><h3>Review your submission</h3></li>
            <li>Feeling: {feeling}</li>
            <li>Understanding: {understanding}</li>
            <li>Support: {support}</li>
            <li>Comments: {comments}</li>
        </ul><br />
        <button type="submit" onClick={onSubmitFeedback}>Submit</button>
        </div>
        </div>
        </>
    )
}

export default Review;