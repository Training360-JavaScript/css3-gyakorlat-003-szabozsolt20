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
    
    it('9. szabály', () => {
        cy.visit('');
        cy.get('body #blogCarousel')
            .should(
                'have.css', 
                'padding-bottom', 
                '100px'
            );
    });
    
    it('10. szabály', () => {
        cy.visit('');
        cy.get('body .blog .carousel-indicators')
            .should(
                'have.css', 
                'left', 
                '0px'
            );
    });
    
    it('11. szabály', () => {
        cy.visit('');
        cy.get('body .blog .carousel-indicators')
            .should(
                'have.css', 
                'top', 
                '-50px'
            );
    });
    
    it('12. szabály', () => {
        cy.visit('');
        cy.get('body .blog .carousel-indicators')
            .should(
                'have.css', 
                'height', 
                '280px'
            );
    });
    
});
