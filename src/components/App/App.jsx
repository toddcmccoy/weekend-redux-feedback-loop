import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { HashRouter as Router, Route } from "react-router-dom";
import axios from 'axios';
import Header from '../Header/Header';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';

import './App.css';
// creating a GET request. not needed for base functions, but helps to be able to check the console to see if the database is working correctly
function App() {
	const dispatch = useDispatch();
	const getFeedback = () => {
		axios
			.get('/feedback')
			.then((response) => {
				dispatch({ type: 'GET_FEEDBACK', 
				payload: response.data });
			})
			.catch((err) => 
			alert('Error with get', err));
	};

	useEffect(() => getFeedback(), []);

return(
<>
{/* bringing in the header component */}
<Header />

<Router>
{/* declaring the route paths for each component */}
<Route path='/' exact>
		<Feeling />
	</Route>
	<Route path='/understanding' exact>
		<Understanding />
	</Route>
	<Route path='/support' exact>
		<Support />
	</Route>
	<Route path='/comments' exact>
		<Comments />
	</Route>
	<Route path='/review' exact>
		<Review />
	</Route>
</Router>
</>

);

  // return 
  //   <div className='App'>
  //     <header className='App-header'>
  //       <h1 className='App-title'>Feedback!</h1>
  //       <h4>Don't forget it!</h4>
  //     </header>
  //   </div>
  // ;
}

export default App;
