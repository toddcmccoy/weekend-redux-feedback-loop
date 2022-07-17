import { useState} from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';

function Review(){

    const history = useHistory();
    const feeling = useSelector(state => state.feelingReducer);
    const support = useSelector(state => state.supportReducer);
    const understanding = useSelector(state => state.understandingReducer);
    const comments = useSelector(state => state.commentsReducer);
    

    const onSubmitFeedback = () => {
        axios.post('/feedback', feeling, support, understanding, comments)
        .then(() => {
            console.log(`In POST `)
        })
        .catch((err) => {
            console.log(`ERR in POST`, err)
        })
        alert('THANK YOU FOR TAKING PART')
        history.push('/')
    }

    return(
        <>
        <h3>Review your submission</h3>
        <ul>
            <li>Feeling: {feedback.feeling}</li>
            <li>Understanding: {feedback.understanding}</li>
            <li>Support: {feedback.support}</li>
            <li>Comments: {feedback.comments}</li>
        </ul>
        <button onClick={onSubmitFeedback}>SUBMIT</button>
        </>
    )
}

export default Review;