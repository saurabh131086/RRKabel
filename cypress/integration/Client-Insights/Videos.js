/// <reference types="Cypress" />



describe("Test Videos page", () => {
    it("Should be able to check title on Page", () => {
        //cypress code
        cy.visit('https://www.rrparkon.com/media-center/videos-car-parking-solutions')
        cy.title().should('eq', 'RR Parkon Videos | Smart Parking System')

    });
    it('Checks for content Videos Page', () => {
       
        cy.get('h4').should('include.text','Videos')
        cy.log(' All Content is Present')
  
      })

})