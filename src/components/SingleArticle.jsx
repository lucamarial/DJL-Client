import React, { useEffect } from 'react';
import { useParams } from 'react-router'
import { connect } from 'react-redux'
import { getSpecificArticle } from '../redux/actions/index'

const SingleArticle = (props) => {
  let { id } = useParams()

  useEffect(() => {
    props.getSpecificArticle(id)
  }, [])

  return (
    <>
      
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    article: state.article,
    errorMessage: state.errorMessage
  };
};

export default connect(mapStateToProps, { getSpecificArticle })(SingleArticle)