import React from 'react'
import { Route } from 'react-router-dom'
import AllArticles from './components/AllArticles'
import SingleArticle from './components/SingleArticle'

const App = () => {
  return (
    <div className="App">
      <Route exact path='/articles' component={AllArticles} />
      <Route exact path='/article/:id' component={SingleArticle} />
    </div>
  )
}

export default App
