describe('User can view articles on landing page', () => {
  beforeEach(() => {
    cy.server()
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000',
      response: 'fixture:articles.json'
    })
    cy.visit('http://localhost:3000')
  })

  it('successfully', () => {
    cy.get('article-1')
    .within(() => {
      cy.get('title-1').should('contain', 'Leonardo da Vinci')
    })
  })
})
