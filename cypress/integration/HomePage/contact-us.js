/// <reference types="Cypress" />
import rgbHex from 'rgb-hex';


describe("Test Contact Us form on HomePage", () => {
  it.skip("Should be able to submit a successful submission via contact us form", () => {
    //cypress code
    cy.visit(Cypress.env('url'))
    cy.get('.fixed-button > img').click()
    cy.get('#first_name').type('Test')
    cy.get('#last_name').type('new')
    cy.get(':nth-child(6) > .wpcf7-form-control-wrap > #email').type('test@gmail.com')
    cy.get('#phone').type('9123456789')
    cy.get('#select_type').select('Twin Parking System')
    cy.get('#MainSelectCountry').select('Mexico')
    cy.get('#MainSelectState').select('Jalisco')
    cy.get('#MainSelectCity').select('Zula')
    cy.wait(3000)
    //  cy.get('#MainSelectCountry').select(0).should('have.value', 'India')
    //cy.get('#MainSelectCountry').select('India').should ('have.value', 'India')
     cy.get('#MainSelectCountry').select['India',1]
    ///cy.get('#MainSelectCountry').then($country => {$country.val("India")}).click()   
    // cy.wait(3000)
    //cy.wait('#MainSelectCountry').its('Select Country').should('eq', 'India')
    //   cy.get('#MainSelectState').then($State => {$State.val("Jalisco")})
    //  //cy.get('#MainSelectCity').select('Pune')
    //  cy.wait(3000)
    //  cy.get('#MainSelectCity').then($city => {$city.val("Zula")})
    //  cy.wait(3000)
    cy.get('#message').type('new')
    cy.get('#my-id > .uk-modal-dialog > .uk-modal-close-outside > svg').click()
    // cy.get(':nth-child(13) > #submit').click()  

    cy.wait(2000)
    // cy.get('#wpcf7-response-output wpcf7-display-none wpcf7-mail-sent-ok')
    // .should('have.text', 'Thank you for your message. It has been sent.')
    // cy.get('Contact us').xpath("//a[contains(@href, 'contact-us')]").click();
  });


it.skip('Should Check for content Homepage', () => {
  cy.visit(Cypress.env('url'))
  cy.get('h4').should('include.text', 'We provide semi-automatic and fully automatic parking solutions')
  cy.get('h4').should('include.text', 'Our Parking Solutions')
  cy.log('Content is Present')

})
  


  it.skip('Should Check and find Colours on page', () => {
  cy.get('[class=hamburger-menu-mobile]').invoke('css', 'background-color').then((bgcolor) => { expect(rgbHex(bgcolor)).to.eq('00000000') })


})
      
      it.skip('Should check Classes on page', () => {
  
  cy.get('*[class^="logo-box"]')
  cy.log('Class2 is Present')
  cy.get('*[class^="hamburger-menu-mobile"]')
  cy.log('Class3 is Present')

})


it('Should check Video on page', () => {
        
  cy.visit(Cypress.env('url'))
  
  cy.wait(3000);
 // cy.contains('a[href*="small-img"]').click()
 cy.visit(Cypress.env('url'))

 cy.get('a[href*="q2UaDebjuSQ"]').click()
 cy.get('.uk-lightbox-toolbar-icon > svg').click()
 cy.log('Video1 is Present')

})









      






})