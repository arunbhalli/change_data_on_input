describe('User data change on input', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  describe('successfully', () => {
    it('is expected to update data on user input', () => {
      cy.get('[data-cy=title]').should('contain', 'Update Data from an input');
      cy.get('[data-cy=display-name]').should('contain', 'Display Name:');
      cy.get('[data-cy=display-age]').should('contain', 'Display Age:');
      cy.get('[data-cy=name]').type('William');
      cy.get(['[data-cy=age]']).type('25');
    });
  });
});
