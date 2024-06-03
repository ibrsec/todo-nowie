describe('home test', () => { 
  it('home', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-test="home-hero"]').should("be.visible")
    cy.get('[data-test="home-getstartted"]').should("be.visible").click({force: true}).url().should("includes","/login")
    cy.get('[data-test="login-header"]').should("be.visible").contains("Login")
    cy.get('[data-test="login-signup-button"]').should("be.visible").contains("Sign up").click({force: true}).url().should("includes","/register")
    cy.get('[data-test="register-header"]').should("be.visible").contains("Register")
  })
  
})

describe('home public navbar test', () => {
  it('home navbar to login', () => {
    cy.home()
    .get('[data-test="navbar"').should("be.visible")
    .get('[data-test="navbar-logo"]').should("be.visible")
    .get('[data-test="navbar-profile"]').click({force: true}).should("be.visible")
    .get('[data-test="login-link"]').should("be.visible").contains("Login").click({force: true}).url().should("includes","/login")
    cy.get('[data-test="login-header"]').should("be.visible").contains("Login")
  })

  it('home navbar to register', () => {
    cy.home()
    .get('[data-test="navbar"').should("be.visible")
    .get('[data-test="navbar-logo"]').should("be.visible")
    .get('[data-test="navbar-profile"]').click({force: true}).should("be.visible")
    .get('[data-test="register-link"]').should("be.visible").contains("Register").click({force: true}).url().should("includes","/register")
    cy.get('[data-test="register-header"]').should("be.visible").contains
  })



  
})