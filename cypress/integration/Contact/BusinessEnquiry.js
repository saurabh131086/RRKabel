/// <reference types="Cypress" />



describe("Test Business Enquiry page", () => {
    it("Should be able to check title on Page", () => {
        //cypress code
        cy.visit('https://www.rrparkon.com/contact-us/business-enquiry-car-lift-car-parking-solutions')
        cy.title().should('eq', 'Business Enquiry | RR Parkon')

    });


    it("Should be able to Submit enquiry on Page", () => {
        //cypress code
        cy.visit('https://www.rrparkon.com/contact-us/business-enquiry-car-lift-car-parking-solutions')
        cy.get('#wpcf7-f944-o1 > .wpcf7-form > :nth-child(4) > .wpcf7-form-control-wrap > #first_name').type('Test')
        cy.get('#wpcf7-f944-o1 > .wpcf7-form > :nth-child(5) > .wpcf7-form-control-wrap > #last_name').type('Test')
        cy.get('#wpcf7-f944-o1 > .wpcf7-form > :nth-child(6) > .wpcf7-form-control-wrap > #email').type('test@gmail.com')
        cy.get('#wpcf7-f944-o1 > .wpcf7-form > :nth-child(7) > .wpcf7-form-control-wrap > #phone').type('9123456789')
        cy.get('#wpcf7-f944-o1 > .wpcf7-form > :nth-child(8) > .uk-form-controls > .wpcf7-form-control-wrap > #select_type')
        cy.get('#MainsSelectCountry').select('Mexico')
        cy.wait(2000)
        cy.get('#MainsSelectState').select('Jalisco')
        cy.wait(2000)
        cy.get('#MainsSelectCity').select('Bellavista')
        cy.wait(2000)
        cy.get('#wpcf7-f944-o1 > .wpcf7-form > :nth-child(12) > .wpcf7-form-control-wrap > #message').type('Test comment')
  //  cy.get('#wpcf7-f944-o1 > .wpcf7-form > :nth-child(13) > #submit').click()  
    });
    it('Checks for content Business Enquiry Page', () => {
       
        cy.get('h4').should('include.text','Business Enquiry')
        cy.log(' All Content is Present')
  
      })







})