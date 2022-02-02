/// <reference types="Cypress" />



describe("Test Manufacturing in About us", () => {
    it("Should be able to check title on Page", () => {
        //cypress code
        cy.visit('https://www.rrparkon.com/company-overview/manufacturing-facilities-car-parking-system-manufacturer')
        cy.title().should('eq', 'RR Parkon Manufacturing Facilities | Smart Parking')
       
    });

    it('Checks for content Manufacturing Page', () => {
       
        cy.get('h4').should('include.text','We deliver only the highest quality products, made possible by our state')
        cy.log(' All Content is Present')
  
      })






    
    before("Should log to website", () => {
        //cypress code
      cy.visit('https://www.rrparkon.com/')
      cy.get('a:contains(About)').should('be.visible')
   });
})