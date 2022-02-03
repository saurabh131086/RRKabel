/// <reference types="Cypress" />
import rgbHex from 'rgb-hex';


describe("Test Current openings page", () => {
    it("Should be able to check title on Page", () => {
        //cypress code
        //cy.visit('https://www.rrparkon.com/career-center/current-openings-car-parking-system')

        cy.visit(Cypress.env('url')+"/career-center/current-openings-car-parking-system")
        cy.title().should('eq', 'RR Parkon Current Openings')

    });
    it('Checks for content Current Openings Page', () => {
       
        cy.get('h4').should('include.text','Current Openings')
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