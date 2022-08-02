export {}
describe('Tests for check position', () => {
	beforeEach(() => {
		cy.visit('/')
	})

	it('should be left-top position', () => {
		cy.visit(
			'/iframe.html?viewMode=story&id=toastcreator--toast-creator-template&args=position:LEFT_TOP'
		)
		cy.get('[data-cy=add-error-toast-btn]').click()
		cy.get('[data-cy=toast-container]')
			.should('have.css', 'position', 'fixed')
			.should('have.css', 'left', '20px')
			.should('have.css', 'top', '20px')
	})

	it('should change postition from default (left-top) to left-bottom', () => {
		cy.visit(
			'/iframe.html?viewMode=story&id=toastcreator--toast-creator-template&args=position:LEFT_BOTTOM'
		)
		cy.get('[data-cy=add-error-toast-btn]').click()
		cy.get('[data-cy=toast-container]')
			.should('have.css', 'position', 'fixed')
			.should('have.css', 'left', '20px')
			.should('have.css', 'bottom', '20px')
	})

	it('should change postition from default (left-top) to right-top', () => {
		cy.visit(
			'/iframe.html?viewMode=story&id=toastcreator--toast-creator-template&args=position:RIGHT_TOP'
		)
		cy.get('[data-cy=add-error-toast-btn]').click()
		cy.get('[data-cy=toast-container]')
			.should('have.css', 'position', 'fixed')
			.should('have.css', 'right', '20px')
			.should('have.css', 'top', '20px')
	})
	it('should change postition from default (left-top) to right-bottom', () => {
		cy.visit(
			'/iframe.html?viewMode=story&id=toastcreator--toast-creator-template&args=position:RIGHT_BOTTOM'
		)
		cy.get('[data-cy=add-error-toast-btn]').click()
		cy.get('[data-cy=toast-container]')
			.should('have.css', 'position', 'fixed')
			.should('have.css', 'right', '20px')
			.should('have.css', 'bottom', '20px')
	})
})
