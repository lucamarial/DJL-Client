import { ARTICLES_LOADED, DATA_ERROR, SPECIFIC_ARTICLE } from "../constants";

const initialState = {
  articles: [],
  specificArticle: null,
  errorMessage: ''
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ARTICLES_LOADED:
      return Object.assign({}, state, {
        articles: state.articles.concat(action.payload)
      })
    case SPECIFIC_ARTICLE:
      return { ...state, specificArticle: action.payload }
    case DATA_ERROR:
      return { ...state, errorMessage: action.payload.error_message }
    default:
      return state
  }
}

export default rootReducer