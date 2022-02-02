/// <reference types="Cypress" />



describe("Test Car lifts Parking System page", () => {
    it("Should be able to check title on Page", () => {
        //cypress code
        cy.visit('https://www.rrparkon.com/parking-solution/car-lifts')
        cy.title().should('eq', 'Car Lift Parking System | RR Parkon')

    });

    it('Checks for content Car lifts Parking System page', () => {
       
        cy.get('h4').should('include.text','CAR LIFTS PARKING SYSTEM')
        cy.log(' All Content is Present')
  
      })

})