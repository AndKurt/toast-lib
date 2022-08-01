export {}
describe('Tests for check title and description', () => {
	beforeEach(() => {
		cy.visit('/')
	})

	it('should be changed title', () => {
		cy.visit(
			'/iframe.html?viewMode=story&id=toastcreator--toast-creator-template'
		)
		cy.get('[data-cy=add-toast-btn]').click()
		cy.get('h2').should('have.text', 'Title')
		cy.visit(
			'/iframe.html?viewMode=story&id=toastcreator--toast-creator-template&args=title:Title-test'
		)
		cy.get('[data-cy=add-toast-btn]').click()
		cy.get('h2').should('have.text', 'Title-test')
	})

	it('should be changed description', () => {
		cy.visit(
			'/iframe.html?viewMode=story&id=toastcreator--toast-creator-template'
		)
		cy.get('[data-cy=add-toast-btn]').click()
		cy.get('.components__Description-sc-17nhmwv-4').should(
			'have.text',
			'Description'
		)
		cy.visit(
			'/iframe.html?viewMode=story&id=toastcreator--toast-creator-template&args=description:Description-test'
		)
		cy.get('[data-cy=add-toast-btn]').click()
		cy.get('.components__Description-sc-17nhmwv-4').should(
			'have.text',
			'Description-test'
		)
	})
})
