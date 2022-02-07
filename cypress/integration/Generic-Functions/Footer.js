/// <reference types="Cypress" />
import rgbHex from 'rgb-hex';


describe("Should check Footer links of all  Pages", () => {
    it("Should be able to Redirect on About Us page", () => {
        //cypress code

        //cy.visit('https://www.rrparkon.com/')
        cy.visit(Cypress.env('url'))
        
        cy.get('.quick-link-wrp > :nth-child(1) > :nth-child(1) > a').invoke('attr', 'href').should('eq', 'https://www.rrparkon.com/company-overview/')
      //  cy.get('.quick-link-wrp > :nth-child(1) > :nth-child(2) > a').invoke('attr', 'href').should('eq', 'https://www.rrparkon.com/parking-solution/twin-park-system-2/')
        cy.get('.quick-link-wrp > :nth-child(1) > :nth-child(3) > a').invoke('attr', 'href').should('eq', 'https://www.rrparkon.com/amc/annual-maintenance-contract-car-parking-solution/')
        cy.get('.quick-link-wrp > :nth-child(1) > :nth-child(4) > a').invoke('attr', 'href').should('eq', 'https://www.rrparkon.com/media-center/news-car-lift-car-parking-solution/')

        cy.get('.quick-link-wrp > :nth-child(2) > :nth-child(1) > a').invoke('attr', 'href').should('eq', 'https://www.rrparkon.com/client-insight/landmark-projects-smart-car-parking-system-in-india/')
        cy.get('.quick-link-wrp > :nth-child(2) > :nth-child(2) > a').invoke('attr', 'href').should('eq', 'https://www.rrparkon.com/career-center/employee-rrparkon/')
        cy.get('.quick-link-wrp > :nth-child(2) > :nth-child(3) > a').invoke('attr', 'href').should('eq', 'https://www.rrparkon.com/contact-us/')
    });

    it("Should be able to check Privacy policy on Page", () => {
        //cypress code

        var result
        cy.visit(Cypress.env('url'))
        cy.get('.address-ul-list > :nth-child(1) > a').invoke('attr', 'href').should('eq', 'https://www.rrparkon.com/wp-content/uploads/sites/3/2017/07/Privacy-policy.pdf')
        cy.get('.address-ul-list > :nth-child(2) > a').invoke('attr', 'href').should('eq', 'https://www.rrparkon.com/wp-content/uploads/sites/3/2017/07/Terms-of-Use.pdf')
        cy.get('.address-ul-list > :nth-child(3) > a').invoke('attr', 'href').should('eq', 'https://www.rrparkon.com/wp-content/uploads/sites/3/2017/07/Legal-disclaimer.pdf')
      //  cy.get('.address-ul-list > :nth-child(4) > a').invoke('attr', 'href').should('eq', 'https://www.rrparkon.com/sitemap/')
      result = cy.request('https://www.rrparkon.com/sitemap/')
       
      result.its('status')
            .should('equal',200);




    });

    it('Should Check for content Footer Page', () => {
       
        cy.get('h4').should('include.text','Head Office')
        cy.get('h4').should('include.text','Quick Links')
        cy.log(' All Content is Present')
  
      })
      it('Should Check and find Colours on page', () => {
        cy.get('[class=hamburger-menu-mobile]').invoke('css', 'background-color').then((bgcolor) => {expect(rgbHex(bgcolor)).to.eq('00000000')})
          
          
    })
          
          it('Should check Classes on page', () => {
        
          cy.get('*[class^="logo-box"]')
          cy.log('Class2 is Present')
          cy.get('*[class^="hamburger-menu-mobile"]')
          cy.log('Class3 is Present')
          
          })


          





})

