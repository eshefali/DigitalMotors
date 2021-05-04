context('Assesment1', () => {
  beforeEach(() => {
    cy.visit('https://digitalmotors.com/')
  })

  it('Validating Event Page', () => {



cy.get('#menu-item-2104').click()
cy.get('h4.vc_custom_heading').should('contain','Event').and('have.attr', 'style','color: #ee1b41;text-align: left')
//this validates title 'Event' in h4 has red font and is right aligned. 






  })
  })