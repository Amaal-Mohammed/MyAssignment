import loginpageutil from "../../utils/loginpage"
import commentsutil from "../../utils/commentspage"
/// <reference types="cypress" />


context('Navigation', () => {


  it('Verify login UI', () => {

    cy.fixture("login.json", "binary").then(data => {
      cy.visit(data.url)
      loginpageutil.verifyloginui()

    });


  })

  it('insert invalid key', () => {
    cy.fixture("login.json", "binary").then(data => {
      loginpageutil.login(data.invalidkey)
      loginpageutil.verifyusernotlogin()
    })


  })


  it('insert valid key and login', () => {

    cy.fixture("login.json", "binary").then(data => {
      loginpageutil.login(data.validkey)
      loginpageutil.verifyvalidlogin()
    })
  })
  it('logout', () => {

    cy.fixture("login.json", "binary").then(data => {
      commentsutil.clicklogout()
      loginpageutil.verifyusernotlogin()
    })

  })

})