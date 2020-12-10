describe('Edit My Info Test Cases', ()=>{

    before(() => {
        cy.visit('/');
        cy.login('admin', 'admin123');
        cy.updateMyInfo();
    })

    it('Should update mandatory fields', () =>{
        cy.get('#personal_txtEmpFirstName').should('be.enabled').type(' Modified')
        cy.get('#personal_txtEmpLastName').should('be.enabled').type(' Modified')
    });

    it.only('Should update datebirth field', () =>{
        cy.get('#personal_DOB').should('be.enabled').click()
        cy.get('td').contains('17').click()
        //cy.get('[data-handler="selectDay"]').contains('17').click()
    });
})