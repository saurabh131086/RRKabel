/// <reference types="Cypress" />



describe("Test Accomplishments in About Us", () => {
    it("Should be able to check title on Page", () => {
        //cypress code
        cy.visit('https://www.rrparkon.com/accomplishment')
        cy.title().should('eq', 'RR Parkon Accomplishment | Parking System')
        cy.get('h4').should('include.text','RR Parkon is pioneering the automated car parking industry')

    
    });


    it('Checks for content Accomplishment h4', () => {
       
        cy.get('h4').should('include.text','RR Parkon is pioneering the automated car parking industry')
   
        cy.log('Content is Present')
  
      })
    
    before("Should log to website and Check for Redirect", () => {
         //cypress code
       cy.visit('https://www.rrparkon.com/')
       cy.get('a:contains(About)').should('be.visible')
    });
})