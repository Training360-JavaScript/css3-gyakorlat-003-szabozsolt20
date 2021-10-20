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
    
    it('13. szabály', () => {
        cy.visit('');
        cy.get('body .blog .carousel-indicators li')
            .should(
                'have.css', 
                'background-color', 
                'rgb(15, 201, 175)'
            );
    });
    
    it('14. szabály', () => {
        cy.visit('');
        cy.get('body .blog .carousel-indicators li')
            .should(
                'have.css', 
                'border-radius', 
                '50%'
            );
    });
    
    it('15. szabály', () => {
        cy.visit('');
        cy.get('body .blog .carousel-indicators li')
            .should(
                'have.css', 
                'width', 
                '8px'
            );
    });
    
    it('16. szabály', () => {
        cy.visit('');
        cy.get('body .blog .carousel-indicators li')
            .should(
                'have.css', 
                'height', 
                '8px'
            );
    });
    
});
