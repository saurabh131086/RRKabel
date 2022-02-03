/// <reference types="Cypress" />
import rgbHex from 'rgb-hex';


describe("Test Life at RRparkon page", () => {
    it("Should be able to check title on Page", () => {
        //cypress code
       // cy.visit('https://www.rrparkon.com/career-center/employee-rrparkon')
       cy.visit(Cypress.env('url')+"/career-center/employee-rrparkon")


        cy.title().should('eq', 'Life At RR Parkon')

    });
    it('Checks for content AMC Page', () => {
       
        cy.get('h4').should('include.text','Life at RR Parkon')
        cy.get('h4').should('include.text','We are much more than a technology solution provider.')
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