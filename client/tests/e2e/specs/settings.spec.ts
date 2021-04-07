describe('Settings', () => {
    it('check styling', () => {
        cy.visit('/');
        cy.contains('h1', 'Welcome to Your Vue.js + TypeScript App');
    });
});
