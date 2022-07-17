import { useState} from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';

function Review(){

    const history = useHistory();
    const feeling = useSelector(store => store.feelingReducer);
    const support = useSelector(store => store.supportReducer);
    const understanding = useSelector(store => store.understandingReducer);
    const comments = useSelector(store => store.commentsReducer);
    

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
        alert('THANK YOU FOR TAKING PART')
        history.push('/')
    }

    return(
        <>
        <h3>Review your submission</h3>
        <ul>
            <li>Feeling: {feeling}</li>
            <li>Understanding: {understanding}</li>
            <li>Support: {support}</li>
            <li>Comments: {comments}</li>
        </ul>
        <button onClick={onSubmitFeedback}>SUBMIT</button>
        </>
    )
}

export default Review;