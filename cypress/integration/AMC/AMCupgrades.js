/// <reference types="Cypress" />



describe("Test Car AMC Upgrades System page", () => {
    it("Should be able to check title on Page", () => {
        //cypress code
        cy.visit('https://www.rrparkon.com/amc/upgrade-parking-system-software')
        cy.title().should('eq', 'System Upgrade | Automated Car Parking | RR Parkon')

    });
    it('Checks for content AMC Upgrade Page', () => {
       
        cy.get('h1').should('include.text','Software Upgrade*')
        cy.get('h4').should('include.text','Inclusion of RFID, Biometric Systems, Touch Screens Controls')
        cy.get('h4').should('include.text','Integration of Parking Management System')
        cy.get('h4').should('include.text','* Conditions Apply')
        cy.log(' All Content is Present')
  
      })

})