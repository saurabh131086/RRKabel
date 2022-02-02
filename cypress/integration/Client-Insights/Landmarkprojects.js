/// <reference types="Cypress" />



describe("Test Landmark Projects page", () => {
    it("Should be able to check title on Page", () => {
        //cypress code
        cy.visit('https://www.rrparkon.com/client-insight/landmark-projects-smart-car-parking-system-in-india')
        cy.title().should('eq', 'RR Parkon Major Projects | Smart Car Parking System in India')

    });

    it('Checks for content Landmark Page', () => {
       
        cy.get('h4').should('include.text','Landmark Projects')
        cy.get('[class=container]').contains('Government')
        cy.log(' All Content is Present')
  
      })

})