import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getData } from '../redux/actions/index'

const LandingPage = (props) => {
  useEffect(() => {
    props.getData()
  }, [])

  return (
    <>
      <ul>
        {props.articles.map(art => (
          <li key={art.id}>{art.title}</li>
        ))}
      </ul>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    articles: state.articles
  }
}

export default connect(
  mapStateToProps,
  { getData }
)(LandingPage)