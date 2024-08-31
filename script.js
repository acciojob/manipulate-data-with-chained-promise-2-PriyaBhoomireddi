//your JS code here. If required.
describe('Promise Chaining Test', () => {
    const baseUrl = 'http://localhost:3000'; // Update with your actual base URL
    
    it('should display the correct output after promises resolve', () => {
        cy.visit(baseUrl + "/main.html"); // Always check this "visit" in your test case that it is set to - baseUrl + "/main.html"

        cy.get("#output").should("be.empty"); // Ensure output starts empty

        // Adjusted with increased timeout
        cy.get("#output", { timeout: 6000 }).should("contain", "2,4"); // First Promise output
        cy.wait(1000); 
        cy.get("#output", { timeout: 8000 }).should("contain", "4,8"); // Second Promise output
    });
});

