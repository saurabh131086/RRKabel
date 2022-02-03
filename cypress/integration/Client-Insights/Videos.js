/// <reference types="Cypress" />
import rgbHex from 'rgb-hex';


describe("Test Videos page", () => {
    it("Should be able to check title on Page", () => {
        //cypress code
        //cy.visit('https://www.rrparkon.com/media-center/videos-car-parking-solutions')

        cy.visit(Cypress.env('url')+"/media-center/videos-car-parking-solutions")
        cy.title().should('eq', 'RR Parkon Videos | Smart Parking System')

    });
    it('Checks for content Videos Page', () => {
       
        cy.get('h4').should('include.text','Videos')
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

          it('Should check Video on page', () => {
          
          cy.get('a[href*="Testimonial-1-RRP"]').click()
          cy.get('.uk-lightbox-toolbar-icon > svg').click()

        })


})