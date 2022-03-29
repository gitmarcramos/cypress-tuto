describe("Input form", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("focuses input on load", () => {
    cy.focused().should("have.class", "new-todo");
  });

  it("accepts input", () => {
    const typedText = "Buy food for the cat!";
    cy.get(".new-todo")
    .type(typedText)
    .should('have.value', typedText);
  });
});
