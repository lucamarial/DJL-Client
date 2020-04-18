import React from 'react'
import { Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import SingleArticle from './components/SingleArticle'

const App = () => {
  return (
    <div className="App">
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/article/:id' component={SingleArticle} />
    </div>
  )
}

export default App
