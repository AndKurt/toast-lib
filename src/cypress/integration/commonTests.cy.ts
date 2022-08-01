export {}
describe('Common tests', () => {
	beforeEach(() => {
		cy.visit('/')
		cy.visit(
			'/iframe.html?viewMode=story&id=toastcreator--toast-creator-template'
		)
	})

	it('Should contain "Add toast" button', () => {
		cy.get('[data-cy=add-toast-btn]').should('be.visible')
	})

	it('Should display toast with default params', () => {
		cy.get('[data-cy=add-toast-btn]').click()
		cy.get('[data-cy=toast-container]').should('have.length', 1)
		cy.get('[data-cy=toast]')
			.should('have.length', 1)
			.should('have.css', 'background-color', 'rgb(226, 88, 55)')
		cy.get('[data-cy=toast-close-btn]')
			.should('be.visible')
			.should('have.length', 1)
	})

	it('Should display only 3 toast after more than 3 click and disappeat after 3 seconds', () => {
		cy.get('[data-cy=add-toast-btn]').click()
		cy.get('[data-cy=add-toast-btn]').click()
		cy.get('[data-cy=add-toast-btn]').click()
		cy.get('[data-cy=add-toast-btn]').click()
		cy.get('[data-cy=add-toast-btn]').click()
		cy.get('[data-cy=toast-container]').should('have.length', 1)
		cy.get('[data-cy=toast]').should('have.length', 3)
		cy.wait(3000)
		cy.get('[data-cy=toast]').should('have.length', 0)
	})
})
