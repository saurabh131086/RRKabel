/// <reference types="Cypress" />
import rgbHex from 'rgb-hex';


describe("Test Business Enquiry page", () => {
    it("Should be able to check title on Page", () => {
        //cypress code
       // cy.visit('https://www.rrparkon.com/contact-us/business-enquiry-car-lift-car-parking-solutions')
        cy.visit(Cypress.env('url')+"/contact-us/business-enquiry-car-lift-car-parking-solutions")
        cy.title().should('eq', 'Business Enquiry | RR Parkon')

    });


    it("Should be able to Submit enquiry on Page", () => {
        //cypress code
       // cy.visit('https://www.rrparkon.com/contact-us/business-enquiry-car-lift-car-parking-solutions')


       cy.visit(Cypress.env('url')+"/contact-us/business-enquiry-car-lift-car-parking-solutions")
        cy.get('#wpcf7-f944-o1 > .wpcf7-form > :nth-child(4) > .wpcf7-form-control-wrap > #first_name').type('Test')
        cy.get('#wpcf7-f944-o1 > .wpcf7-form > :nth-child(5) > .wpcf7-form-control-wrap > #last_name').type('Test')
        cy.get('#wpcf7-f944-o1 > .wpcf7-form > :nth-child(6) > .wpcf7-form-control-wrap > #email').type('test@gmail.com')
        cy.get('#wpcf7-f944-o1 > .wpcf7-form > :nth-child(7) > .wpcf7-form-control-wrap > #phone').type('9123456789')
        cy.get('#wpcf7-f944-o1 > .wpcf7-form > :nth-child(8) > .uk-form-controls > .wpcf7-form-control-wrap > #select_type')
        cy.get('#MainsSelectCountry').select('Mexico')
        cy.wait(2000)
        cy.get('#MainsSelectState').select('Jalisco')
        cy.wait(2000)
        cy.get('#MainsSelectCity').select('Bellavista')
        cy.wait(2000)
        cy.get('#wpcf7-f944-o1 > .wpcf7-form > :nth-child(12) > .wpcf7-form-control-wrap > #message').type('Test comment')
  //  cy.get('#wpcf7-f944-o1 > .wpcf7-form > :nth-child(13) > #submit').click()  
    });
    it('Should Check for content Business Enquiry Page', () => {
       
        cy.get('h4').should('include.text','Business Enquiry')
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