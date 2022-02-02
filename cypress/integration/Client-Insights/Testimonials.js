/// <reference types="Cypress" />



describe("Test Testimonials page", () => {
    it("Should be able to check title on Page", () => {
        //cypress code
        cy.visit('https://www.rrparkon.com/client-insight/testimonial-smart-car-parking-system')
        cy.title().should('eq', 'RR Parkon Testimonials | Car Parking Lift')

    });

    

    it('Checks for content Testimonials Page', () => {
       
        cy.get('h4').should('include.text','Our esteemed clients made us feel proud by sharing')
        cy.log(' All Content is Present')
  
      })
    

})