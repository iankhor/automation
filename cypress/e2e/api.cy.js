context("GET localhost:3000", () => {
  it("hello world test", () => {
    cy.request("GET", "http://app:3000").then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.eq("Hello World!")
    })
  })
})