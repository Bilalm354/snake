describe('Snake spec', () => {
  it('should show canvas', () => {
    cy.visit('http://localhost:1234');
    cy.get('canvas');
  })

  it('should show a 10x10 grid on the canvas', () => {

  })
})

