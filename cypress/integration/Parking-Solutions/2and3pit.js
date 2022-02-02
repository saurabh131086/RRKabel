/// <reference types="Cypress" />



describe("Test Pit type 2 & 3 Parking System page", () => {
    it("Should be able to check title on Page", () => {
        //cypress code
        cy.visit('https://www.rrparkon.com/parking-solution/pit-type-dependant-2-level-3-level-electromechanical')
        cy.title().should('eq', 'Dependent Type Parking System In Mumbai | RR Parkon')

    });

    it('Checks for content 2and3 pit Page', () => {
       
        cy.get('h4').should('include.text','PIT TYPE DEPENDANT 2 LEVEL & 3 LEVEL – ELECTROMECHANICAL')
        cy.log(' All Content is Present')
  
      })
})