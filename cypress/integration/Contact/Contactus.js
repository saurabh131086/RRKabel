/// <reference types="Cypress" />



describe("Test Contact Us page", () => {
    it("Should be able to check title on Page", () => {
        //cypress code
        cy.visit('https://www.rrparkon.com/contact-us')
        cy.title().should('eq', 'Contact Us | RR Parkon')

    });
    it('Checks for content Contact Us Page', () => {
       
        cy.get('h4').should('include.text','Mumbai (Head office)')
        cy.log(' All Content is Present')
  
      })

})