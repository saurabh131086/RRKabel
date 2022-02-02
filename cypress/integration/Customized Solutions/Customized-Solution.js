/// <reference types="Cypress" />



describe("Test Customized Soultions page", () => {
    it("Should be able to check title on Page", () => {
        //cypress code
        cy.visit('https://www.rrparkon.com/customized-solutions')
        cy.title().should('eq', 'Customised Car Parking Solutions | RR Parkon')

    });
    it('Checks for content Customized Soultions page', () => {
       
        cy.get('h4').should('include.text','Customized Solutions')
        cy.log(' All Content is Present')
  
      })

})