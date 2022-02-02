/// <reference types="Cypress" />



describe("Test News page", () => {
    it("Should be able to check title on Page", () => {
        //cypress code
        cy.visit('https://www.rrparkon.com/media-center/news-car-lift-car-parking-solution')
        cy.title().should('eq', 'RR Parkon News | Underground Parking System')

    });

    it('Checks for content News Page', () => {
       
        cy.get('h4').should('include.text','News')
        cy.log(' All Content is Present')
  
      })


})