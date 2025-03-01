describe("My 1st Test", () => {
  it('finds the content "type"', () => {
    cy.visit("https://example.cypress.io");
    cy.contains("get").click();
    cy.url().should("include", "/querying"); // সঠিক URL কিনা চেক করুন
    cy.get("#query-btn").should("contain", "Button");
    cy.get("#query-btn").should(
      "have.text",
      "\n                Button\n              "
    );

    cy.get("#query-btn")
      .invoke("text")
      .then((text) => {
        expect(text.trim()).to.eq("Button");
      });
cy.wait(2000);
    cy.get(".query-list")
      .contains("more apples")
      .scrollIntoView() // Scroll to the element
      .should("have.class", "fourth"); // Verify it has the expected class
    cy.xpath("//span[normalize-space()='Save Form']").click();
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

    cy.xpath("//input[@id='password1']").type("my name is sabbir");
    // cy.scrollTo("#fullName1");
    cy.scrollTo(0,1000);
    cy.get("#fullName1").type("sabbir");
    cy.get("#description").scrollIntoView().type("this is cypress learning page . best test plan.").clear();
    
    cy.get("#couponCode1").type("code");

    // cy.xpath("//button[normalize-space()='Submit']").click();
    cy.wait(3000);
    cy.xpath("//button[normalize-space()='Submit']").next().should('contain', 'Your form has been submitted!');
  });
});


describe("3rd Test", () =>{


    it("click diffrent places", () => {
    cy.visit("https://example.cypress.io");

    cy.contains("type").click();
    cy.url().should("include", "/commands/actions");



    cy.get("#action-canvas").scrollIntoView().click();

    cy.get("#action-canvas").click("topLeft");
    cy.get("#action-canvas").click("top");
    cy.get("#action-canvas").click("topRight");
    cy.get("#action-canvas").click("left");
    cy.get("#action-canvas").click("right");
    cy.get("#action-canvas").click("bottomLeft");
    cy.get("#action-canvas").click("bottom");
    cy.get("#action-canvas").click("bottomRight");
  })


});