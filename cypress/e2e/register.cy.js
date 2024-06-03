

const credentials = {
    username: "test-cy2",
    email: "test-cy2@test.com",
    password: "test-cy2-123",
    imageUrl: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  };



describe("register test",()=>{
    it("register", ()=>{
        cy.visit("http://localhost:3000/register").get('[data-test="register-header"]').should("be.visible").contains("Register")
        cy.get('[data-test="register-username-input"]').should("be.visible").type(credentials.username);
        cy.get('[data-test="register-imageurl-input"]').should("be.visible").type(credentials.imageUrl);
        cy.get('[data-test="register-email-input"]').should("be.visible").type(credentials.email);
        cy.get('[data-test="register-password-input"]').should("be.visible").type(credentials.password);
        cy.get('[data-test="register-submit"]').should("be.visible").contains("Submit").click({force: true})
        cy.contains('Registered successfully!').should("be.visible");
        // cy.url().contains("/dashboard");
        cy.title().should('eq', 'Dashboard | Todo Nowie')
        cy.get('[data-test="dashboard-header"').should("be.visible").contains("Today's Todos")


    })
})