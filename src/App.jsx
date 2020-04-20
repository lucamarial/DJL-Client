import React from 'react'
import { Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import AllArticles from './components/AllArticles'
import SingleArticle from './components/SingleArticle'

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Route exact path='/articles' component={AllArticles} />
      <Route exact path='/article/:id' component={SingleArticle} />
    </div>
  )
}

export default App
