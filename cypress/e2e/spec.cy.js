/// <reference types="Cypress" />

describe("Google Search Test", () => {
  it('Should search for "Cypress" on Google', () => {
    // Step 1: Go to google.com
    cy.visit("https://www.daraz.com.bd/#?");

    // Wait for 3 seconds (3000 milliseconds)
    cy.wait(3000);
    // Step 2: Click on the search input box (Google's search box)
    cy.xpath("//span[text()='SHOP ALL PRODUCTS']").click();

    // cy.xpath('(//input[@name="btnK"])[1]').click({ force: true });
  });
});
