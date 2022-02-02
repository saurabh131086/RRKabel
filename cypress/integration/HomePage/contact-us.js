/// <reference types="Cypress" />

describe("Test Contact Us form on HomePage", () => {
  it("Should be able to submit a successful submission via contact us form", () => {
    //cypress code
    cy.visit('https://www.rrparkon.com/')
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
    // cy.get('#MainSelectCountry').select['India',1]
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
    cy.get('.quick-link-wrp > :nth-child(2) > :nth-child(3) > a').click()



    it('Checks for content Homepage h4', () => {
      cy.visit('https://www.rrparkon.com/')
      cy.get('h4').should('include.text','We provide semi-automatic and fully automatic parking solutions')
      cy.get('h4').should('include.text','Our Parking Solutions')
      cy.log('Content is Present')

    })









  });
 
 
 
  








  before("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
    //cypress code
    cy.visit('https://www.rrparkon.com/')


    cy.get('.fixed-button > img').click()
    cy.get(':nth-child(13) > #submit').click()

    cy.get('#wpcf7-f721-o1 > .wpcf7-form > .wpcf7-response-output')
      .should('have.text', 'One or more fields have an error. Please check and try again.')

  });

  









})