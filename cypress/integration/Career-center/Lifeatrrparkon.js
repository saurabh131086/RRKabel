/// <reference types="Cypress" />



describe("Test Life at RRparkon page", () => {
    it("Should be able to check title on Page", () => {
        //cypress code
        cy.visit('https://www.rrparkon.com/career-center/employee-rrparkon')
        cy.title().should('eq', 'Life At RR Parkon')

    });
    it('Checks for content AMC Page', () => {
       
        cy.get('h4').should('include.text','Life at RR Parkon')
        cy.get('h4').should('include.text','We are much more than a technology solution provider.')
        cy.log(' All Content is Present')
  
      })

})