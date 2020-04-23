import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import AllArticles from './components/AllArticles';
import SingleArticle from './components/SingleArticle';

const App = () => {
	return (
		<div className='App'>
			<NavBar />
			<main>
				<Route exact path='/' component={LandingPage} />
				<Route exact path='/articles' component={AllArticles} />
				<Route exact path='/article/:id' component={SingleArticle} />
			</main>
		</div>
	);
};

export default App;
