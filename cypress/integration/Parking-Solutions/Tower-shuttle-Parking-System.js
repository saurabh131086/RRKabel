/// <reference types="Cypress" />



describe("Test Shuttle Parking System", () => {
    it("Should be able to check title on Page", () => {
        //cypress code
        cy.visit('https://www.rrparkon.com/parking-solution/shuttle-parking-system')
        cy.title().should('eq', 'Shuttle Car Parking System | RR Parkon')
        

    
    });

    

    it('Checks for content AMC Page', () => {
       
        cy.get('h4').should('include.text','SHUTTLE PARKING SYSTEM')
        cy.log(' All Content is Present')
  
      })


    
})