describe ('Recruitment task', () => {
    
    it('Add and delete 2 elements', () => {

        //open website
        cy.visit('/')

        //check availability of page title
        cy.contains('Add/Remove Elements')

        //add first element
        cy.get('[onclick="addElement()"]').click()

        //add second element
        cy.get('[onclick="addElement()"]').click()

        //check if 2 elements are added 
        cy.get('#elements').children().should('have.length', 2)

        //delete one element
        cy.get('#elements > button:nth-child(1)').click()

        //check if first elements is deleted
        cy.get('#elements').children().should('have.length', 1)

        //delete second element
        cy.get('#elements > button:nth-child(1)').click()

        //check if second elements is deleted
        cy.get('#elements').children().should('have.length', 0)
    })
})