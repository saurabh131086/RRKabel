/// <reference types="Cypress" />



describe("Test Mini Rotary Parking System page", () => {
    it("Should be able to check title on Page", () => {
        //cypress code
        cy.visit('https://www.rrparkon.com/parking-solution/mini-rotary')
        cy.title().should('eq', 'Mini Rotary Parking System | RR Parkon')

    });
    it('Checks for content Mini Rotary Parking System pagee', () => {
       
        cy.get('h4').should('include.text','MINI ROTARY PARKING SYSTEM')
        cy.log(' All Content is Present')
  
      })

   
})