/// <reference types="Cypress" />



describe("Test Do's amd Dont's page", () => {
    it("Should be able to check title on Page", () => {
        //cypress code
        cy.visit('https://www.rrparkon.com/client-insight/do-dont-car-parking-solution-car-parking-system')
        cy.title().should('eq', 'Dos And Donts Of Car Parking System | Car Lift Manufacturers In India | RR Parkon')

    });

    it('Checks for content Do and Donts Page', () => {
       
        cy.get('h4').should('include.text','Do')
        cy.log(' All Content is Present')
  
      })
})