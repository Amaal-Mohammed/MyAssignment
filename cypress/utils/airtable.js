export default{
 gotostatus(){
    cy.get('#dataLeftPane > .paneInnerContent > .firstRow > .cell > .flex-auto').click();
    cy.get('#dataLeftPane > .paneInnerContent > .firstRow > .cell > .flex-auto').type('{rightarrow}{rightarrow}{rightarrow}{rightarrow}')
} ,

verifystatus(statusstr){
    cy
    .get('div[class="flex-auto truncate"]').first().contains(statusstr)
},
gotoconfig(){
    cy.get('#dataLeftPane > .paneInnerContent > .firstRow > .cell > .flex-auto').type('{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}')
 
},
verifyconfig(index,value){
    cy
  .get('div[class="flex-auto truncate"]').eq(index).contains(value)
}
}