describe('Login Test Cases', ()=>{

    beforeEach(() => {
        cy.visit('http://opensource-demo.orangehrmlive.com/');
    })

    it('Should Login into OrangeHRM website', () =>{
        cy.login('admin','admin123');
        cy.get('#welcome').should('be.visible');
    });

    it('Should not login into OrangeHRM website', ()=>{
        cy.login('wrong', 'credentials');
        cy.get('#spanMessage').should('be.visible');
    });

})