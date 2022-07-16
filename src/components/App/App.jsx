import react from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import Header from '../Header/Header';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';


import './App.css';

function App() {

return(
<>
<Header />

<Router>

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
	{/* <Route path='/admin' exact>
		<Admin />
	</Route> */}
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
