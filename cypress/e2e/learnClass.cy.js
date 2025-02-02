describe("My 1st Test", () => {
  it('finds the content "type"', () => {
    

    cy.visit("https://example.cypress.io");
    cy.contains("get").click();
    cy.url().should("include", "/querying"); // সঠিক URL কিনা চেক করুন
    cy.get("#query-btn").should("contain", "Button");
    cy.get("#query-btn").should("have.text","\n                Button\n              ");
     
    cy.get("#query-btn")
      .invoke("text")
      .then((text) => {
        expect(text.trim()).to.eq("Button");
      });

//     //   cy.get("#query-btn").should("be.visible");
  });
});

describe("My 2nd Test", () => {
  it("Gets, types and asserts", () => {
    cy.visit("https://example.cypress.io");

    cy.contains("type").click();

    // Should be on a new URL which
    // includes '/commands/actions'
    cy.url().should("include", "/commands/actions");

    // Get an input, type into it
    cy.get(".action-email").type("fake@email.com");

    //  Verify that the value has been updated
    cy.get(".action-email").should("have.value", "fake@email.com");
  });
});