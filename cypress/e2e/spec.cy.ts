describe('Snake spec', () => {
  it('should show canvas', () => {
    cy.visit('http://localhost:3000');
    cy.get('canvas');
  })

  it('should show play button', () => {
    cy.visit('http://localhost:3000');
    cy.get('button').contains('Play');
  });

  it('should show score', () => {
    cy.visit('http://localhost:3000');
    cy.get('span').contains('Score: 0');
  })
})

