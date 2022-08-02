export {}
describe('Tests for check types of toasts', () => {
	beforeEach(() => {
		cy.visit('/')
	})

	it('should be error type', () => {
		cy.visit(
			'/iframe.html?viewMode=story&id=toastcreator--toast-creator-template&args=type:error'
		)
		cy.get('[data-cy=add-error-toast-btn]').click()
		cy.get('[data-cy=toast]').should(
			'have.css',
			'background-color',
			'rgb(226, 88, 55)'
		)
	})

	it('should be warning type', () => {
		cy.visit(
			'/iframe.html?viewMode=story&id=toastcreator--toast-creator-template&args=type:warning'
		)
		cy.get('[data-cy=add-warning-toast-btn]').click()
		cy.get('[data-cy=toast]').should(
			'have.css',
			'background-color',
			'rgb(244, 224, 72)'
		)
	})

	it('should be info type', () => {
		cy.visit(
			'/iframe.html?viewMode=story&id=toastcreator--toast-creator-template&args=type:info'
		)
		cy.get('[data-cy=add-info-toast-btn]').click()
		cy.get('[data-cy=toast]').should(
			'have.css',
			'background-color',
			'rgb(154, 64, 211)'
		)
	})

	it('should be success type', () => {
		cy.visit(
			'/iframe.html?viewMode=story&id=toastcreator--toast-creator-template&args=type:success'
		)
		cy.get('[data-cy=add-success-toast-btn]').click()
		cy.get('[data-cy=toast]').should(
			'have.css',
			'background-color',
			'rgb(55, 226, 154)'
		)
	})
})
