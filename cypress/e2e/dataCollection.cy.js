describe('Data Collection Form', () => {
    it('should submit data collection form successfully', () => {
        cy.visit('/data-collection'); // Ensure this URL matches the route in your application
        cy.get('input[name="coralSize"]').type('10cm');
        cy.get('input[name="healthStatus"]').type('healthy');
        cy.get('button[type="submit"]').click();
        cy.contains('Data submitted successfully').should('be.visible');
    });
});