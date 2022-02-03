/// <reference types="Cypress" />
import rgbHex from 'rgb-hex';


describe("Test Pit type 2 & 3 Parking System page", () => {
    it("Should be able to check title on Page", () => {
        //cypress code
       // cy.visit('https://www.rrparkon.com/parking-solution/pit-type-dependant-2-level-3-level-electromechanical')

        cy.visit(Cypress.env('url')+"/parking-solution/pit-type-dependant-2-level-3-level-electromechanical")
        cy.title().should('eq', 'Dependent Type Parking System In Mumbai | RR Parkon')

    });

    it('Should Check for content 2and3 pit Page', () => {
       
        cy.get('h4').should('include.text','PIT TYPE DEPENDANT 2 LEVEL & 3 LEVEL – ELECTROMECHANICAL')
        cy.log(' All Content is Present')
  
      })


      it('Should Check and find Colours on page', () => {
        cy.get('[class=hamburger-menu-mobile]').invoke('css', 'background-color').then((bgcolor) => {expect(rgbHex(bgcolor)).to.eq('00000000')})
          
          
    })
          
          it('Should check Classes on page', () => {
          cy.get('*[class^="header-top uk-flex uk-flex-between uk-flex-top bg-blue"]')
          cy.log('Class1 is Present')
          cy.get('*[class^="logo-box"]')
          cy.log('Class2 is Present')
          cy.get('*[class^="hamburger-menu-mobile"]')
          cy.log('Class3 is Present')
          
          })







})