/// <reference types="Cypress" />



describe("Test FAQs page", () => {
    it("Should be able to check title on Page", () => {
        //cypress code
        cy.visit('https://www.rrparkon.com/client-insight/faq-car-parking-solution')
        cy.title().should('eq', 'Frequently Asked Questions | Smart Parking System | RR Parkon')

    });

    it('Checks for content FAQs Page', () => {
       
        cy.get('h4').should('include.text','FAQ')
        cy.log(' All Content is Present')
  
      })
})