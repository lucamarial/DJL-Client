import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import AllArticles from './components/AllArticles';
import SingleArticle from './components/SingleArticle';
import AOS from 'aos'
import 'aos/dist/aos.css'

const App = () => {
	AOS.init({
		duration: 1000
	})
	
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
