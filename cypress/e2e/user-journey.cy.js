/* eslint-disable no-undef */
describe("User Journey", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("a user can shop the items and checkout from the cart", () => {
    cy.getByData("product").find("button").contains("Add To Cart").click();
    cy.getByData("cart").click();
    cy.location("pathname").should("eq", "/cart");
    cy.getByData("cartitems");
    cy.getByData("add").click();
    cy.getByData("quantity").should("have.attr", "value", "2");
    cy.getByData("subtract").click();
    cy.getByData("quantity").should("have.attr", "value", "1");
    cy.getByData("continue-btn").click();
    cy.location("pathname").should("eq", "/");
  });
});
