/// <reference types="Cypress" />



describe("Test Puzzle parking System", () => {
    it("Should be able to check title on Page", () => {
        //cypress code
        cy.visit('https://www.rrparkon.com/parking-solution/over-ground-puzzle-parking-system')
        cy.title().should('eq', 'Puzzle Parking System | RR Parkon')
       
    });

    it('Checks for content Puzzle parking System', () => {
       
        cy.get('h4').should('include.text','OVER GROUND PUZZLE PARKING SYSTEM')
        cy.log(' All Content is Present')
  
      })
  
})