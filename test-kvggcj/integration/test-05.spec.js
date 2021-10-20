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
    
    it('17. szabály', () => {
        cy.visit('');
        cy.get('body .item-box-blog-date')
            .should(
                'have.css', 
                'position', 
                'absolute'
            );
    });
    
    it('18. szabály', () => {
        cy.visit('');
        cy.get('body .item-box-blog-date')
            .should(
                'have.css', 
                'z-index', 
                '5'
            );
    });
    
    it('19. szabály', () => {
        cy.visit('');
        cy.get('body .item-box-blog-date')
            .should(
                'have.css', 
                'padding-top', 
                '4px'
            );
        cy.get('body .item-box-blog-date')
            .should(
                'have.css', 
                'padding-bottom', 
                '4px'
            );
    });
    
    it('20. szabály', () => {
        cy.visit('');
        cy.get('body .item-box-blog-date')
            .should(
                'have.css', 
                'padding-right', 
                '20px'
            );
        cy.get('body .item-box-blog-date')
            .should(
                'have.css', 
                'padding-left', 
                '20px'
            );
    });
    
});
