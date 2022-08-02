export {}
describe('Common tests', () => {
	beforeEach(() => {
		cy.visit('/')
		cy.visit(
			'/iframe.html?viewMode=story&id=toastcreator--toast-creator-template'
		)
	})

	it('Should contain "Add toast" buttons', () => {
		cy.get('[data-cy=add-error-toast-btn]').should('be.visible')
		cy.get('[data-cy=add-info-toast-btn]').should('be.visible')
		cy.get('[data-cy=add-success-toast-btn]').should('be.visible')
		cy.get('[data-cy=add-warning-toast-btn]').should('be.visible')
	})

	it('Should display only 3 toast after more than 3 click and disappeat after 3 seconds', () => {
		cy.get('[data-cy=add-error-toast-btn]').click()
		cy.get('[data-cy=add-error-toast-btn]').click()
		cy.get('[data-cy=add-error-toast-btn]').click()
		cy.get('[data-cy=add-error-toast-btn]').click()
		cy.get('[data-cy=add-error-toast-btn]').click()
		cy.get('[data-cy=toast-container]').should('have.length', 1)
		cy.get('[data-cy=toast]').should('have.length', 3)
		cy.wait(3000)
		cy.get('[data-cy=toast]').should('have.length', 0)
	})
})
