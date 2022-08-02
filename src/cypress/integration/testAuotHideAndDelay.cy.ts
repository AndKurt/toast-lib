export {}
describe('Tests auto delete toast and check delay', () => {
	beforeEach(() => {
		cy.visit('/')
	})

	it('should be toast if autoDelete = false', () => {
		cy.visit(
			'/iframe.html?viewMode=story&id=toastcreator--toast-creator-template&args=autoDelete:false'
		)
		cy.get('[data-cy=add-error-toast-btn]').click()
		cy.get('[data-cy=toast]').should('have.length', 1)
		cy.wait(3000)
		cy.get('[data-cy=toast]').should('have.length', 1)
	})

	it('should be deleted toast if autoDelete = true', () => {
		cy.visit(
			'/iframe.html?viewMode=story&id=toastcreator--toast-creator-template&args=autoDelete:true'
		)
		cy.get('[data-cy=add-error-toast-btn]').click()
		cy.get('[data-cy=toast]').should('have.length', 1)
		cy.wait(3000)
		cy.get('[data-cy=toast]').should('have.length', 0)
	})

	it('should be deleted toast if autoDelete = true and delay = 4000 ms', () => {
		cy.visit(
			'/iframe.html?viewMode=story&id=toastcreator--toast-creator-template&args=delayForDelete:4000'
		)
		cy.get('[data-cy=add-error-toast-btn]').click()
		cy.get('[data-cy=toast]').should('have.length', 1)
		cy.wait(3000)
		cy.get('[data-cy=toast]').should('have.length', 1)
		cy.wait(1000)
		cy.get('[data-cy=toast]').should('have.length', 0)
	})
})
