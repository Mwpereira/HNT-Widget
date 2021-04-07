export function getByAutoId(id: string) {
    return cy.get(`[auto-id=${id}]`);
}
