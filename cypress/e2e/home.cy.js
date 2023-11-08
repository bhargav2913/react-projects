/* eslint-disable no-undef */
describe("template spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("Hello Hii", () => {
    cy.getByData("product").find("button").contains("Add To Cart");
  });
});
