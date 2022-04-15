/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/await-async-query */

describe('form', () => {
  // cy.visit('http://localhost:3000');

  it('Successfully submits form', () => {
    cy.visit('http://localhost:3000/');

    cy.contains(/welcome bruce wayne/i);
    cy.findByRole('textbox', {
      name: /credit card number/i,
    }).type('1231123123123123');

    cy.findByRole('textbox', {
      name: /cvc/i,
    }).type('123');

    cy.findByRole('textbox', {
      name: /expiry date/i,
    }).type('1222');

    cy.findByRole('button', {
      name: /submit/i,
    }).click();
  });

  it('Shows error when submitting form', () => {
    cy.visit('http://localhost:3000/');

    cy.contains(/welcome bruce wayne/i);

    //submit incorrect form
    cy.findByRole('textbox', {
      name: /credit card number/i,
    }).type('1233');

    cy.findByRole('textbox', {
      name: /cvc/i,
    }).type('123');

    cy.findByRole('textbox', {
      name: /expiry date/i,
    }).type('1222');

    cy.findByRole('button', {
      name: /submit/i,
    }).click();

    cy.findByText(/invalid credit card/i);

    //fix form
    cy.findByRole('textbox', {
      name: /credit card number/i,
    }).type('123123123123');

    cy.findByRole('textbox', {
      name: /credit card number/i,
    }).should('have.value', '1233 1231 2312 3123');

    cy.findByRole('button', {
      name: /submit/i,
    }).click();

    //check if form was submitted successfully
    cy.findByRole('textbox', {
      name: /cvc/i,
    }).should('have.value', '');
    cy.findByRole('textbox', {
      name: /credit card number/i,
    }).should('have.value', '');
    cy.findByRole('textbox', {
      name: /expiry date/i,
    }).should('have.value', '');
  });
});
