function unquote(str) {
    return str.replace(/(^")|("$)/g, '');
}

Cypress.Commands.add(
    'before',
    {
        prevSubject: 'element',
    },
    (el, property) => {
        const win = el[0].ownerDocument.defaultView;
        const before = win.getComputedStyle(el[0], 'before');
        return unquote(before.getPropertyValue(property));
    },
);

Cypress.Commands.add(
    'after',
    {
        prevSubject: 'element',
    },
    (el, property) => {
        const win = el[0].ownerDocument.defaultView;
        const after = win.getComputedStyle(el[0], 'after');
        return unquote(after.getPropertyValue(property));
    },
);

describe('Ellenőrzések', () => {
    it('1. szabály', () => {
        cy.visit('');
        cy.get('body .cta-100').should('have.css', 'margin-top', '100px');
    });
    
    it('2. szabály', () => {
        cy.visit('');
        cy.get('body .cta-100').should('have.css', 'padding-left', '70px');
    });
    
    it('3. szabály', () => {
        cy.visit('');
        cy.get('body .cta-100')
            .should(
                'have.css', 
                'padding-top', 
                '70px'
            );
    });
    
    it('4. szabály', () => {
        cy.visit('');
        cy.get('body .col-md-4')
            .should(
                'have.css', 
                'padding-bottom', 
                '20px'
            );
    });
    
});
