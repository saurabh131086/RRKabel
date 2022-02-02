/// <reference types="Cypress" />



describe("Test Hydraulic Twin Parking System page", () => {
    it("Should be able to check title on Page", () => {
        //cypress code
        cy.visit('https://www.rrparkon.com/parking-solution/h-tp-hydraulic-twin-park')
        cy.title().should('eq', 'Hydraulic Twin Car Parking System In India | RR Parkon')

    });
    it('Checks for content AMC Page', () => {
       
        cy.get('h4').should('include.text','HTP')
        cy.log(' All Content is Present')
  
      })


})