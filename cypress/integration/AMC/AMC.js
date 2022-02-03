/// <reference types="Cypress" />
import rgbHex from 'rgb-hex';


describe("Test Annual maintainence contracts System page", () => {
    it("Should be able to check title on Page", () => {
        //cypress code
       // cy.visit('https://www.rrparkon.com/amc/annual-maintenance-contract-car-parking-solution')

       cy.visit(Cypress.env('url')+"/amc/annual-maintenance-contract-car-parking-solution")
        cy.title().should('eq', 'Car Parking Annual Maintenance Contract India | Multi Level Car Parking Amc Mumbai | RR Parkon')

    });
    it('Should Check for content AMC Page', () => {
       
        cy.get('h4').should('include.text','Annual')
        cy.log(' All Content is Present')
  
      })

      it('Should find Colours on page', () => {
      cy.get('[class=hamburger-menu-mobile]').invoke('css', 'background-color').then((bgcolor) => {expect(rgbHex(bgcolor)).to.eq('00000000')})
        
        
  })
        
        it('Should find Classes on page', () => {
        cy.get('*[class^="header-top uk-flex uk-flex-between uk-flex-top bg-blue"]')
        cy.log('Class1 is Present')
        cy.get('*[class^="logo-box"]')
        cy.log('Class2 is Present')
        cy.get('*[class^="hamburger-menu-mobile"]')
        cy.log('Class3 is Present')
        
        })








})