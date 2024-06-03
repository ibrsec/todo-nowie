describe("login test",()=>{
    it("login", ()=>{
        cy.visit("http://localhost:3000/login").get('[data-test="login-header"]').should("be.visible").contains("Login")
        cy.get('[data-test="login-email-input"]').should("be.visible").type("test@test.com");
        cy.get('[data-test="login-password-input"]').should("be.visible").type("test123");
        cy.get('[data-test="login-submit"]').should("be.visible").contains("Submit").click({force: true})
        cy.get('.Toastify__toast-body').should("be.visible").contains("Logged in successfully!");
        // cy.url().contains("/dashboard");
        cy.title().should('eq', 'Dashboard | Todo Nowie')
        cy.get('[data-test="dashboard-header"').should("be.visible").contains("Today's Todos")


    })
})