import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getData } from '../redux/actions/index';
import { NavLink } from 'react-router-dom';

const LandingPage = (props) => {
  useEffect(() => {
    props.articles.length > 0 || props.getData();
  }, []);

  return (
    <>
      <ul className='list articles'>
        {props.articles.map((art) => (
          <NavLink
            to={`/article/${art.id}`}
            id={`article-${art.id}`}
            key={art.id}
          >
            <li id={`article-${art.id}`} key={art.id}>
              <div id={`title-${art.id}`}>{art.title}</div>
              <div id={`content-${art.id}`}>{art.content}</div>
              <div id={`author-${art.id}`}>{art.author}</div>
              <div id={`publish_date-${art.id}`}>{art.publish_date}</div>
            </li>
          </NavLink>
        ))}
      </ul>
      {props.errorMessage ? <p id='error'>{props.errorMessage}</p> : null}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    articles: state.articles,
    errorMessage: state.errorMessage,
  };
};

export default connect(mapStateToProps, { getData })(LandingPage);
