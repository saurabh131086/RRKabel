

/// <reference types="Cypress" />



describe("Test Brochure page", () => {
    it("Should be able to check title on Page", () => {
        //cypress code
        cy.visit('https://www.rrparkon.com/client-insight/brochure')
        cy.title().should('eq', 'RR Parkon Brochure')

    });
    it("Should be able to Download Brochure Page", () => {
        //cypress code
        cy.visit('https://www.rrparkon.com/client-insight/brochure')
        cy.get('#name').type('Test')
        cy.get('#email_address').type('test@gmail.com')
        cy.get(':nth-child(4) > .wpcf7-form-control-wrap > #contact_number').type('9123456789')
        cy.get('#current_organisation').type('Test')
        cy.get('#Designation').type('test')
        cy.get('#SelectCountry').select('Mexico')
        cy.wait(2000)
        cy.get('#select_state').select('Jalisco')
        cy.wait(2000)
        cy.get('#select_city').select('Bellavista')
        cy.wait(2000)

       // cy.get('.w-100 > .wpcf7-form-control').click()
    });

    it('Checks for content Brochure Page', () => {
       
        cy.get('h4').should('include.text','Fill in the form to download the brochure')
        cy.log(' All Content is Present')
  
      })



})