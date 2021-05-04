context('Assesment', () => {
  beforeEach(() => {
    cy.visit('https://digitalmotors.com/')
  })

  it('Validating Home Page', () => {


  cy.title().should('include','Solutions | Digital Motors is the industry’s premier online sales solution.')
  cy.scrollTo('bottom')

  cy.get('.link_wrap').should('be.visible') //Request Demo button






  })
  })

