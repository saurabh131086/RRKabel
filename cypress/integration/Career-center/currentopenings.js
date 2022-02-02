/// <reference types="Cypress" />



describe("Test Current openings page", () => {
    it("Should be able to check title on Page", () => {
        //cypress code
        cy.visit('https://www.rrparkon.com/career-center/current-openings-car-parking-system')
        cy.title().should('eq', 'RR Parkon Current Openings')

    });
    it('Checks for content Current Openings Page', () => {
       
        cy.get('h4').should('include.text','Current Openings')
        cy.log(' All Content is Present')
  
      })

})