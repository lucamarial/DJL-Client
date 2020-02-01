import axios from 'axios'

export const getData = async () => {
  return dispatch => {
    try {
      let response = await axios.get('http://localhost:3000/articles')
      return dispatch({type: 'ARTICLES_LOADED', payload: response.data})
    } catch(error) {
      return dispatch({ type: 'DATA_ERROR', payload: error.response.data })
    }
  }
}