/// <reference types="Cypress" />



describe("Test 3 stage Parking System page", () => {
    it("Should be able to check title on Page", () => {
        //cypress code
        cy.visit('https://www.rrparkon.com/parking-solution/og-type-dependant-3-level-electromechanical')
        cy.title().should('eq', 'Dependent Car Parking System | RR Parkon')

    });
    it('Checks for content 3 stage Parking System page', () => {
       
        cy.get('h4').should('include.text','OG TYPE DEPENDANT 3 LEVEL')
        cy.log(' All Content is Present')
  
      })


})