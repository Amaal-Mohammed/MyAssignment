export default{

  login(key){
    cy.get('input[type=text]').clear();
    cy.get('input[type=text]').type(key);
    cy.contains('Start').click();

}
,
verifyvalidlogin(){
    cy.contains('Comments').should('exist')
},
verifyusernotlogin(){
   cy.contains('Start').should('exist')
},
verifyloginui(){
    cy.get('input[type=text]').should('be.enabled')
    cy.contains('Start').should('not.be.hidden')
}

}