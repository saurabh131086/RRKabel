/// <reference types="Cypress" />
import rgbHex from 'rgb-hex';


describe("Test Car AMC Upgrades System page", () => {
    it("Should be able to check title on Page", () => {
        //cypress code
        //cy.visit('https://www.rrparkon.com/amc/upgrade-parking-system-software')

        cy.visit(Cypress.env('url')+"amc/upgrade-parking-system-software")
        cy.title().should('eq', 'System Upgrade | Automated Car Parking | RR Parkon')

    });
    it('Should Check for content AMC Upgrade Page', () => {
       
        cy.get('h1').should('include.text','Software Upgrade*')
        cy.get('h4').should('include.text','Inclusion of RFID, Biometric Systems, Touch Screens Controls')
        cy.get('h4').should('include.text','Integration of Parking Management System')
        cy.get('h4').should('include.text','* Conditions Apply')
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