import axios from 'axios'
import { ARTICLES_LOADED, DATA_ERROR, SPECIFIC_ARTICLE } from '../constants'

export const getData = () => {
  return async dispatch => {
    try {
      let response = await axios.get('http://localhost:3000/api/v1/articles')
      return dispatch({type: ARTICLES_LOADED, payload: response.data.articles})
    } catch(error) {
      return dispatch({ type: DATA_ERROR, payload: error.response.data })
    }
  }
}

export const getSpecificArticle = (articleId) => {
  return async dispatch => {
    try {
      let response = await axios.get(`http://localhost:3000/api/v1/articles/${articleId}`)
      return dispatch({ type: SPECIFIC_ARTICLE, payload: response.data.article })
    } catch(error) {
      return dispatch({ type: DATA_ERROR, payload: error.response.data })
    }
  }
}