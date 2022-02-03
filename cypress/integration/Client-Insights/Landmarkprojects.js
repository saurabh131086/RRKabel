/// <reference types="Cypress" />
import rgbHex from 'rgb-hex';


describe("Test Landmark Projects page", () => {
    it("Should be able to check title on Page", () => {
        //cypress code
       // cy.visit('https://www.rrparkon.com/client-insight/landmark-projects-smart-car-parking-system-in-india')

        cy.visit(Cypress.env('url')+"/client-insight/landmark-projects-smart-car-parking-system-in-india")
        cy.title().should('eq', 'RR Parkon Major Projects | Smart Car Parking System in India')

    });

    it('Checks for content Landmark Page', () => {
       
        cy.get('h4').should('include.text','Landmark Projects')
        cy.get('[class=container]').contains('Government')
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