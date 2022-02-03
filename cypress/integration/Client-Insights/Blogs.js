/// <reference types="Cypress" />
import rgbHex from 'rgb-hex';


describe("Test Blogs page", () => {
    it("Should be able to check title on Page", () => {
        //cypress code
        //cy.visit('https://www.rrparkon.com/blogs')

        cy.visit(Cypress.env('url')+"/blogs")
        cy.title().should('eq', 'Car Parking Blogs | RR Parkon')

    });
    it('Should Check for content Blogs Page', () => {

        cy.get('h4').should('include.text', 'Blogs')
        cy.log(' All Content is Present')

    })
    it('Should Check for content ', () => {

        cy.contains('The right type of parking')
        cy.get('p').contains('The right type of parking')
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