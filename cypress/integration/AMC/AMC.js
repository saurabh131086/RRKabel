/// <reference types="Cypress" />



describe("Test Annual maintainence contracts System page", () => {
    it("Should be able to check title on Page", () => {
        //cypress code
        cy.visit('https://www.rrparkon.com/amc/annual-maintenance-contract-car-parking-solution')
        cy.title().should('eq', 'Car Parking Annual Maintenance Contract India | Multi Level Car Parking Amc Mumbai | RR Parkon')

    });
    it('Checks for content AMC Page', () => {
       
        cy.get('h4').should('include.text','Annual')
        cy.log(' All Content is Present')
  
      })

})