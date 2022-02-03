/// <reference types="Cypress" />
import rgbHex from 'rgb-hex';


describe("Test FAQs page", () => {
    it("Should be able to check title on Page", () => {
        //cypress code
        // cy.visit('https://www.rrparkon.com/client-insight/faq-car-parking-solution')
        cy.visit(Cypress.env('url') + "/client-insight/faq-car-parking-solution")
        cy.title().should('eq', 'Frequently Asked Questions | Smart Parking System | RR Parkon')

    });

    it('Checks for content FAQs Page', () => {

        cy.get('h4').should('include.text', 'FAQ')
        cy.log(' All Content is Present')

    })

    it('Should Check and find Colours on page', () => {
        cy.get('[class=hamburger-menu-mobile]').invoke('css', 'background-color').then((bgcolor) => { expect(rgbHex(bgcolor)).to.eq('00000000') })


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