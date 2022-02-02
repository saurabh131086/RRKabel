/// <reference types="Cypress" />



describe("Test Company overview form on About Us", () => {
    it("Should be able to check title on Page", () => {
        //cypress code
        cy.visit('https://www.rrparkon.com/company-overview')
        cy.title().should('eq', 'RR Parkon Company Overview | Automated Parking System')
    });

    it('Checks for content Company overview Page', () => {
       
        cy.get('h4').should('include.text','RR Parkon completes 20 successful years')
        cy.get('h3').should('include.text','RR Parkon is a part of RR Global')
        cy.get('h3').should('include.text','Vision & Mission')
        cy.get('h3').should('include.text','Leadership')
        cy.log(' All Content is Present')
  
      })


      







    
    before("Should log to website", () => {
        //cypress code
      cy.visit('https://www.rrparkon.com/')
      cy.get('a:contains(About)').should('be.visible')
   });
})