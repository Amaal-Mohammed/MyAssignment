import comments from "../../utils/commentspage"
import airtable from "../../utils/airtable"
/// <reference types="cypress" />

context('Navigation', () => {


    it('open facebook', () => {

        cy.fixture("login.json", "binary").then(data => {
        cy.login(data.validkey)
        comments.selectpositivvisibleeoption();
        })

    })

    it('send negative', () => {

        comments.selectnegativehidoption();


    })

    it('send neutral', () => {

        comments.selectneutraloption();



    })




    it('Click show more', () => {

        comments.clickonshowmore();

    })



    it('Open airtable and verify', () => {

        cy.fixture("airtable.json", "binary").then(data => {
            cy.loginairtable(data.email, data.password)
            airtable.gotostatus()
            airtable.verifystatus(data.statusvisible)
            airtable.gotoconfig();
            airtable.verifyconfig(data.positiveindx, data.positivevalue)
            airtable.verifyconfig(data.negativeindx, data.negativevalue)
            airtable.verifyconfig(data.neutralindx, data.neutralvalue)
          });
        


    })

})