/// <reference types="Cypress" />
import rgbHex from 'rgb-hex';


describe("Test Accomplishments in About Us", () => {
    it("Should check title on Page", () => {
        //cypress code
      //  cy.visit('https://www.rrparkon.com/accomplishment')

        cy.visit(Cypress.env('url')+"/accomplishment")
        cy.title().should('eq', 'RR Parkon Accomplishment | Parking System')
        cy.get('h4').should('include.text','RR Parkon is pioneering the automated car parking industry')

    
    });


    it('Should check for content Accomplishment Page', () => {
       
        cy.get('h4').should('include.text','RR Parkon is pioneering the automated car parking industry')
        cy.contains('[class=date]','2001').should('have.text', '2001')
        cy.contains('[class=date]','2002').should('have.text', '2002')
        cy.contains('[class=date]','2007').should('have.text', '2007')
        cy.contains('[class=date]','2010').should('have.text', '2010')
        cy.contains('[class=date]','2011').should('have.text', '2011')
        cy.contains('[class=date]','2014').should('have.text', '2014')
        cy.contains('[class=date]','2016').should('have.text', '2016')
        cy.get('h4').should('include.text',' Remarkable Feats')
        cy.log('Content is Present')
  
      })

      it('Should find Colours on page', () => {

      cy.get('[class=date]').invoke('css', 'background-color').then((bgcolor) => {expect(rgbHex(bgcolor)).to.eq('ffde00')})
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