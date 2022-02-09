/// <reference types="Cypress" />



describe("Should check links of all  Pages", () => {
    it("Should be check redirect content to all pages", () => {

       cy.visit('https://www.rrparkon.com/sitemap/')
       cy.get(':nth-child(1) > :nth-child(1) > .n-parent-list > :nth-child(1) > a').should('include.text', 'Company Overview')
       cy.get(':nth-child(1) > :nth-child(1) > .n-parent-list > :nth-child(2)').should('include.text', 'Manufacturing Facilities')
       cy.get(':nth-child(1) > :nth-child(1) > .n-parent-list > :nth-child(3)').should('include.text', 'Accomplishments')

//AMC
       cy.get(':nth-child(2) > :nth-child(1) > .n-parent-list > :nth-child(1) > a').should('include.text', 'AMC Products')
       cy.get(':nth-child(2) > :nth-child(1) > .n-parent-list > :nth-child(2) > a').should('include.text', 'Upgrades')

 //Parking solutions

//Twin parking solutions
 cy.get(':nth-child(1) > .n-inner-list > :nth-child(1) > a').should('include.text', 'Electromechanical Twin Park')
 cy.get(':nth-child(1) > .n-inner-list > :nth-child(2) > a').should('include.text','Hydraulic Twin Park')
  
//Stack parking system

cy.get(':nth-child(2) > .n-inner-list > :nth-child(1) > a').should('include.text', '3 Stage Over Groun')
cy.get(':nth-child(2) > .n-inner-list > :nth-child(2) > a').should('include.text', '2 & 3 Stage Pit Type')


//PUZZLE PARKING PARKING SYSTEM..
cy.get(':nth-child(3) > .n-inner-list > :nth-child(1) > a').should('include.text', 'OGP – Electromechanical System')
cy.get(':nth-child(3) > .n-inner-list > :nth-child(2) > a').should('include.text', 'OGP – Hydraulic System')


//PIT PUZZLE PARKING SYSTEM
cy.get(':nth-child(4) > .n-inner-list > :nth-child(1) > a').should('include.text', 'Electromechanical System')
cy.get(':nth-child(4) > .n-inner-list > :nth-child(2) > a').should('include.text', 'Hydraulic System')

//MINI ROTARY PARKING SYSTEM
cy.get(':nth-child(1) > :nth-child(2) > .n-parent-list > :nth-child(5) > a').should('include.text', 'MINI ROTARY PARKING SYSTEM')

///HORIZONTAL CIRCULATION PARKING SYSTEM
cy.get(':nth-child(1) > :nth-child(2) > .n-parent-list > :nth-child(6) > a').should('include.text', 'HORIZONTAL CIRCULATION PARKING SYSTEM')

//TOWER PARKING SYSTEM
cy.get(':nth-child(1) > :nth-child(2) > .n-parent-list > :nth-child(7) > a').should('include.text', 'TOWER PARKING SYSTEM')


//SHUTTLE PARKING SYSTEM
cy.get(':nth-child(1) > :nth-child(2) > .n-parent-list > :nth-child(8) > a').should('include.text', 'SHUTTLE PARKING SYSTEM')

//CAR LIFTS PARKING SYSTEM
cy.get(':nth-child(1) > :nth-child(2) > .n-parent-list > :nth-child(9) > a').should('include.text', 'CAR LIFTS PARKING SYSTEM')


//Client Insight
cy.get(':nth-child(2) > :nth-child(2) > .n-parent-list > :nth-child(1) > a').should('include.text', 'Landmark Projects')

cy.get(':nth-child(2) > :nth-child(2) > .n-parent-list > :nth-child(2) > a').should('include.text', 'Blogs')

cy.get(':nth-child(2) > :nth-child(2) > .n-parent-list > :nth-child(3) > a').should('include.text', 'FAQ')


cy.get(':nth-child(2) > :nth-child(2) > .n-parent-list > :nth-child(4) > a').should('include.text', 'DO')

cy.get(':nth-child(2) > :nth-child(2) > .n-parent-list > :nth-child(5) > a').should('include.text', 'Testimonials')

cy.get(':nth-child(2) > :nth-child(2) > .n-parent-list > :nth-child(6) > a').should('include.text', 'News')

cy.get(':nth-child(2) > :nth-child(2) > .n-parent-list > :nth-child(7) > a').should('include.text', 'Videos')

cy.get(':nth-child(2) > :nth-child(2) > .n-parent-list > :nth-child(8) > a').should('include.text', 'Download Brochure')

//Career Centre

cy.get(':nth-child(3) > .n-parent-list > :nth-child(1) > a').should('include.text', 'Life at RR Parkon')

cy.get(':nth-child(3) > .n-parent-list > :nth-child(2) > a').should('include.text', 'Current Openings')

//Contact Us
cy.get(':nth-child(4) > .n-parent-list > :nth-child(1) > a').should('include.text', 'Contact Us')
cy.get(':nth-child(4) > .n-parent-list > :nth-child(2) > a').should('include.text', 'Business Enquiry')

//Customized Solutions

cy.get(':nth-child(5) > :nth-child(1) > a').should('include.text', 'Customized Solutions')
//Privacy policy
cy.get(':nth-child(5) > :nth-child(2) > a').should('include.text', 'Privacy Policy')
//terms of use.
cy.get(':nth-child(5) > :nth-child(3) > a').should('include.text', 'Terms of Use')
cy.log('terms of use checked')


//Legal Disclaimer
cy.get(':nth-child(5) > :nth-child(4) > a').should('include.text', 'Legal Disclaimera')









        


    });




})