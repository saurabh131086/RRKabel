/// <reference types="Cypress" />



describe("Test Tower Parking page Title", () => {
    it("Should be able to check title on Page", () => {
        //cypress code
        cy.visit('https://www.rrparkon.com/parking-solution/tower-parking-system')
        cy.title().should('eq', 'Tower Parking System In Mumbai | RR Parkon')
        

    
    });

    it('Checks for content Tower Parking page', () => {
       
        cy.get('h4').should('include.text','TOWER PARKING SYSTEM')
        cy.log(' All Content is Present')
  
      })
    
    
})