describe('User data change on input', () => {
  beforeEach(() => {
    cy.get('/');
  });
  describe('successfully', () => {
    it('is expected to update data on user input', () => {
      cy.get('[data-cy=name]').type('William');
      cy.get(['[data-cy=age]']).type('25');
    });
  });
});
