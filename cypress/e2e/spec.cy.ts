describe('Snake spec', () => {
  it('should show canvas', () => {
    cy.visit('http://localhost:1235');
    cy.get('canvas');
  })
})

