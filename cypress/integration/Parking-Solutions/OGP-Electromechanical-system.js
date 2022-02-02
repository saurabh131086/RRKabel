/// <reference types="Cypress" />



describe("Test Electromechanical Parking System page", () => {
    it("Should be able to check title on Page", () => {
        //cypress code
        cy.visit('https://www.rrparkon.com/parking-solution/ogp-electromechanical-system')
        cy.title().should('eq', 'Puzzle Lift Parking System | Puzzle Parking System India | RR Parkon')

    });

    it('Checks for content Electromechanical Parking System page', () => {
       
        cy.get('h4').should('include.text','Electromechanical System')
        cy.log(' All Content is Present')
  
      })


})