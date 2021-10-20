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
    
    it('21. szabály', () => {
        cy.visit('');
        cy.get('body .item-box-blog-date')
            .should(
                'have.css', 
                'top', 
                '-20px'
            );
    });
    
    it('22. szabály', () => {
        cy.visit('');
        cy.get('body .item-box-blog-date')
            .should(
                'have.css', 
                'right', 
                '8px'
            );
    });
    
    it('23. szabály', () => {
        cy.visit('');
        cy.get('body .item-box-blog-date')
            .should(
                'have.css', 
                'background-color', 
                'rgb(112, 129, 152)'
            );
    });
    
    it('24. szabály', () => {
        cy.visit('');
        cy.get('body .item-box-blog-body')
            .should(
                'have.css', 
                'margin', 
                '0px'
            );
    });
    
});
