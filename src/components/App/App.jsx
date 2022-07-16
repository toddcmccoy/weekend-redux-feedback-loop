import react from 'react';
import Header from '../Header/Header';
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
					<Comment />
				</Route>
				<Route path='/admin' exact>
					<Admin />
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
