/// <reference types="Cypress" />



describe("Test OGP Hydraulic Parking System page", () => {
    it("Should be able to check title on Page", () => {
        //cypress code
        cy.visit('https://www.rrparkon.com/parking-solution/ogp-hydraulic-system')
        cy.title().should('eq', 'Hydraulic Puzzle Parking System | RR Parkon')

    });

    it('Checks for content Hydraulic Parking System page', () => {
       
        cy.get('h4').should('include.text','Hydraulic System')
        cy.log(' All Content is Present')
  
      })


})