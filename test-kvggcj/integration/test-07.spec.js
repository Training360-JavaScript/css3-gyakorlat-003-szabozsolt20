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
    
    it('25. szabály', () => {
        cy.visit('');
        cy.get('body .item-box-blog-body')
            .should(
                'have.css', 
                'line-height', 
                '24px'
            );
    });
    
    it('26. szabály', () => {
        cy.visit('');
        cy.get('body .item-box-blog-body')
            .should(
                'have.css', 
                'text-decoration', 
                'none solid rgb(33, 37, 41)'
            );
    });
    
    it('27. szabály', () => {
        cy.visit('');
        cy.get('body .item-box-blog-body')
            .should(
                'have.css', 
                'transition', 
                'all 0s ease 0s'
            );
    });
    
    it('28. szabály', () => {
        cy.visit('');
        cy.get('body .btn.bg-blue-ui.white.read')
            .should(
                'have.css', 
                'transition', 
                'color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s'
            );
    });
    
});
