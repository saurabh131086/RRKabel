/// <reference types="Cypress" />



describe("Test Horizontal Parking System", () => {
    it("Should be able to check title on Page", () => {
        //cypress code
        cy.visit('https://www.rrparkon.com/parking-solution/horizontal-circulation')
        cy.title().should('eq', 'Horizontal Circulation Type Car Parking System | RR Parkon')

    });

    it('Checks for content Horizontal Parking System page', () => {
       
        cy.get('h4').should('include.text','HORIZONTAL')
        cy.log(' All Content is Present')
  
      })




 
})