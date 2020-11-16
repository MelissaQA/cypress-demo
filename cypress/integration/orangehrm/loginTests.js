describe('Login Test Cases', ()=>{

    beforeEach(() => {
        cy.visit('http://opensource-demo.orangehrmlive.com/');
    })

    it('Signs into OrangeHRM website', () =>{
        cy.get('#txtUsername').type('admin');
        cy.get('#txtPassword').type('admin123');
        cy.get('#btnLogin').click();
        cy.get('#welcome').should('be.visible');
    });

    it('Does not sign into OrangeHRM website', ()=>{
        cy.get('#txtUsername').type('invalid');
        cy.get('#txtPassword').type('credentials');
        cy.get('#btnLogin').click();
        cy.get('#spanMessage').should('be.visible');
    });

})