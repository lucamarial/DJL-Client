describe('User can view a specific article', () => {
	beforeEach(() => {
		cy.server();
		cy.visit('http://localhost:3001');
		cy.route({
			method: 'GET',
			url: 'http://localhost:3000/api/v1/articles',
			response: 'fixture:articles.json',
		});
	});

	it('successfully', () => {
		cy.route({
			method: 'GET',
			url: 'http://localhost:3000/api/v1/articles/1',
			response: 'fixture:specific-article.json',
		});

		cy.get('.list.articles').within(() => {
			cy.get('li#article-1').click();
		});

		cy.get('#article-1').within(() => {
			cy.get('#title-1').should('contain', 'Leonardo da Vinci');
			cy.get('#content-1').should('contain', 'The Louvre museum in Paris,');
			cy.get('#author-1').should('contain', 'Lauren Lion');
			cy.get('#publish_date-1').should('contain', '20 October 2019');
		});
	});

	it('unsuccessfully', () => {
		cy.route({
			method: 'GET',
			url: 'http://localhost:3000/api/v1/articles/1',
			response: 'fixture:specific-article-error.json',
			status: 404,
		});

		cy.get('.list.articles').within(() => {
			cy.get('li#article-1').click();
		});

		cy.get('.error').should('contain', 'The article could not be found');
	});
});
