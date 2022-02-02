/// <reference types="Cypress" />



describe("Test Electromechanical Twin Parking System page", () => {
    it("Should be able to check title on Page", () => {
        //cypress code
        cy.visit('https://www.rrparkon.com/parking-solution/e-tp-electromechanical-twin-park')
        cy.title().should('eq', 'Electromechanical Twin Car Parking System | RR Parkon')

    });
    it('Checks for content Electromechanical Twin Parking System page', () => {
       
        cy.get('h4').should('include.text','ETP')
        cy.log(' All Content is Present')
  
      })

})