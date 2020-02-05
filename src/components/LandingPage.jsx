import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getData } from '../redux/actions/index'

const LandingPage = props => {
  useEffect(() => {
    props.getData()
  }, [])

  return (
    <>
      <ul>
        {props.articles.map(art => (
          <li id={`article-${art.id}`} key={art.id}>
            <div id={`title-${art.id}`}>{art.title}</div>
            <div id={`content-${art.id}`}>{art.content}</div>
            <div id={`author-${art.id}`}>{art.author}</div>
            <div id={`publish_date-${art.id}`}>{art.publish_date}</div>
          </li>
        ))}
      </ul>
    </>
  )
}

const mapStateToProps = state => {
  return {
    articles: state.articles
  }
}

export default connect(mapStateToProps, { getData })(LandingPage)
