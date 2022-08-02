export {}
describe('Tests for check title and description', () => {
	beforeEach(() => {
		cy.visit('/')
	})

	it('should be changed title', () => {
		cy.visit(
			'/iframe.html?viewMode=story&id=toastcreator--toast-creator-template'
		)
		cy.get('[data-cy=add-error-toast-btn]').click()
		cy.get('h2').should('have.text', 'Error')
		cy.visit(
			'/iframe.html?viewMode=story&id=toastcreator--toast-creator-template&args=title:Title-test'
		)
		cy.get('[data-cy=add-error-toast-btn]').click()
		cy.get('h2').should('have.text', 'Title-test')
	})

	it('should be changed description', () => {
		cy.visit(
			'/iframe.html?viewMode=story&id=toastcreator--toast-creator-template'
		)
		cy.get('[data-cy=add-error-toast-btn]').click()
		cy.get('p').should('not.be.visible')
		cy.visit(
			'/iframe.html?viewMode=story&id=toastcreator--toast-creator-template&args=description:Description-test'
		)
		cy.get('[data-cy=add-error-toast-btn]').click()
		cy.get('.styled__Description-sc-1xdckmm-4').should(
			'have.text',
			'Description-test'
		)
	})
})
