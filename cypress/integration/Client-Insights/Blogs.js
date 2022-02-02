/// <reference types="Cypress" />



describe("Test Blogs page", () => {
    it("Should be able to check title on Page", () => {
        //cypress code
        cy.visit('https://www.rrparkon.com/blogs')
        cy.title().should('eq', 'Car Parking Blogs | RR Parkon')

    });
    it('Checks for content Blogs Page', () => {
       
        cy.get('h4').should('include.text','Blogs')
        cy.log(' All Content is Present')
  
      })

})