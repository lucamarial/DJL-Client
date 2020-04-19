import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { connect } from 'react-redux';
import { getSpecificArticle } from '../redux/actions/index';

const SingleArticle = (props) => {
	let { id } = useParams();
	let { specificArticle, errorMessage } = props;
	let article, error;

	useEffect(() => {
		props.getSpecificArticle(id);
	}, []);

	specificArticle
		? (article = (
				<div id={`article-${specificArticle.id}`}>
					<div id={`title-${specificArticle.id}`}>{specificArticle.title}</div>
					<div id={`content-${specificArticle.id}`}>
						{specificArticle.content}
					</div>
					<div id={`author-${specificArticle.id}`}>
						{specificArticle.author}
					</div>
					<div id={`publish_date-${specificArticle.id}`}>
						{specificArticle.publish_date}
					</div>
				</div>
		  ))
		: (error = <p className='error'>{errorMessage}</p>);

	return (
		<>
			{article}
			{error}
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		specificArticle: state.specificArticle,
		errorMessage: state.errorMessage,
	};
};

export default connect(mapStateToProps, { getSpecificArticle })(SingleArticle);
