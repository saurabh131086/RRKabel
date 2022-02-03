/// <reference types="Cypress" />
import rgbHex from 'rgb-hex';


describe("Test Company overview form on About Us", () => {
    it("Should be able to check title on Page", () => {
        //cypress code
       // cy.visit('https://www.rrparkon.com/company-overview')

       cy.visit(Cypress.env('url')+"/company-overview")

        cy.title().should('eq', 'RR Parkon Company Overview | Automated Parking System')
    });

    it('Should Check for content Company overview Page', () => {
       
        cy.get('h4').should('include.text','RR Parkon completes 20 successful years')
        cy.get('h3').should('include.text','RR Parkon is a part of RR Global')
        cy.get('h3').should('include.text','Vision & Mission')
        cy.get('h3').should('include.text','Leadership')
        cy.log(' All Content is Present')
  
      })

      it('Should find Colours on page', () => {

        cy.get('[class=leadership-wrp-full]').invoke('css', 'background-color').then((bgcolor) => {expect(rgbHex(bgcolor)).to.eq('fffce5')})
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