export default{

   selectpositivvisibleeoption(){
       
      cy.get(':nth-child(2) > .media >').find('[value=positive]').click();
      cy.get(':nth-child(2) > .media >').find('[value=visible]').click();
       cy.get(':nth-child(2) > .media >').find('.button').click();
   },

   selectnegativehidoption(){
      cy.get(':nth-child(3) > .media >').find('[value=negative]').click();
      cy.get(':nth-child(3) > .media >').find('[value=hidden]').click();
       cy.get(':nth-child(3) > .media >').find('.button').click();
   },
   selectneutraloption(){
      cy.get(':nth-child(4) > .media >').find('[value=neutral]').click();
      cy.get(':nth-child(4) > .media >').find('.button').click();
   },
   clickonshowmore(){
      cy.contains('Show More').click();
      cy.scrollTo('bottom')
   },

   clicklogout(){
      cy.contains('Logout').click();
   }


  }