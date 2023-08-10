context("API Test", () => {
  it("GET /", () => {
    cy.request("GET", "http://localrouter").then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.eq("this is /")
    })
  })

  it("GET /api", () => {
    cy.request("GET", "http://localrouter/api").then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.eq("this is /api2")
    })
  })
})