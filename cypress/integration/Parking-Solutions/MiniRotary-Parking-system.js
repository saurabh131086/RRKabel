/// <reference types="Cypress" />
import rgbHex from 'rgb-hex';


describe("Test Mini Rotary Parking System page", () => {
    it("Should be able to check title on Page", () => {
        //cypress code
        //cy.visit('https://www.rrparkon.com/parking-solution/mini-rotary')

        cy.visit(Cypress.env('url')+"/parking-solution/mini-rotary")
        cy.title().should('eq', 'Mini Rotary Parking System | RR Parkon')

    });
    it('Should Check for content Mini Rotary Parking System pagee', () => {
       
        cy.get('h4').should('include.text','MINI ROTARY PARKING SYSTEM')
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