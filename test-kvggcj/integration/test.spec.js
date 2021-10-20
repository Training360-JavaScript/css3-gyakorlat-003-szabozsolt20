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
    
    it('5. szabály', () => {
        cy.visit('');
        cy.get('body .white')
            .should(
                'have.css', 
                'color', 
                'rgb(255, 255, 255)'
            );
    });
    
    it('6. szabály', () => {
        cy.visit('');
        cy.get('body .mt')
            .should(
                'have.css', 
                'float', 
                'left'
            );
    });
    
    it('7. szabály', () => {
        cy.visit('');
        cy.get('body .mt')
            .should(
                'have.css', 
                'margin-top', 
                '-20px'
            );
    });
    
    it('8. szabály', () => {
        cy.visit('');
        cy.get('body .mt')
            .should(
                'have.css', 
                'padding-top', 
                '20px'
            );
    });
    
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
    
    /*it('2. szelektor', () => {
        cy.visit('');
        cy.get('body .menu__sidebar')
            .should('have.css', 'position', 'fixed');
        cy.get('body .menu__sidebar')
            .should('have.css', 'display', 'flex');
    });
    
    it('3. szelektor', () => {
        cy.visit('');
        cy.get('body .menu__content')
            .should('have.css', 'position', 'fixed');
        cy.get('body .menu__content')
            .should('have.css', 'z-index', '9');
    });
    
    it('4. szelektor', () => {
        cy.visit('');
        cy.get('body .menu__items')
            .should('have.css', 'font-size', '32px');
    });
    
    it('5. szelektor', () => {
        cy.visit('');
        cy.get('body .menu__item')
            .should('have.css', 'list-style', 'outside none none');
    });
    
    it('6. szelektor', () => {
        cy.visit('');
        cy.get('body .menu__item-link')
            .should('have.css', 'text-decoration', 'none solid rgb(85, 85, 85)');
    });
    
    it('7. szelektor', () => {
        cy.visit('');
        cy.get('body .menu__hamburger')
            .should('have.css', 'cursor', 'pointer');
        cy.get('body .menu__hamburger')
            .should('have.css', 'appearance', 'none');
    });
    
    it('8. szelektor', () => {
        cy.visit('');
        cy.get('body .menu__hamburger').focus();
        cy.get('body .menu__hamburger:focus')
            .should('have.css', 'outline', 'none');
    });
    
    it('9. szelektor', () => {
        cy.visit('');
        cy.get('body .menu__hamburger span')
            .should('have.css', 'position', 'absolute');
        cy.get('body .menu__hamburger span')
            .should('have.css', 'height', '5px');
    });
    
    it('10. szelektor', () => {
        cy.visit('');
        cy.get('body .menu__hamburger span')
            .before('width')
            .should('eq', '40px');
        cy.get('body .menu__hamburger span')
            .after('width')
            .should('eq', '40px');
    });
    
    it('11. szelektor', () => {
        cy.visit('');
        cy.get('body .menu__hamburger span')
            .before('top')
            .should('eq', '-15px');
    });
    
    it('12. szelektor', () => {
        cy.visit('');
        cy.get('body .menu__hamburger span')
            .after('bottom')
            .should('eq', '-15px');
    });
    
    it('13. szelektor', () => {
        cy.visit('');
        cy.get('body .menu__hamburger--htx span')
            .should('have.css', 'transition', 'background 0s ease 0.3s');
    });
    
    it('14. szelektor', () => {
        cy.visit('');
        cy.get('body .menu__hamburger--htx span')
            .before('transition-duration')
            .should('eq', '0.3s, 0.3s');
        cy.get('body .menu__hamburger--htx span')
            .after('transition-duration')
            .should('eq', '0.3s, 0.3s');
    });
    
    it('15. szelektor', () => {
        cy.visit('');
        cy.get('body .menu__hamburger--htx span')
            .before('transition-property')
            .should('eq', 'top, transform');
    });
    
    it('16. szelektor', () => {
        cy.visit('');
        cy.get('body .menu__hamburger--htx span')
            .after('transition-property')
            .should('eq', 'bottom, transform');
    });
    
    it('17. szelektor', () => {
        cy.visit('');
        cy.get('body .menu__hamburger--htx').click();
        cy.get('body .menu__hamburger--htx.is-active span')
            .should('have.css', 'background', 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box');
    });
    
    it('18. szelektor', () => {
        cy.visit('');
        cy.get('body .menu__hamburger--htx').click();
        cy.get('body .menu__hamburger--htx.is-active span')
            .before('transform')
            .should('eq', 'matrix(1, 0, 0, 1, 0, 0)');
    });
    
    it('19. szelektor', () => {
        cy.visit('');
        cy.get('body .menu__hamburger--htx').click();
        cy.get('body .menu__hamburger--htx.is-active span')
            .after('transform')
            .should('eq', 'matrix(1, 0, 0, 1, 0, 0)');
    });
    
    it('20. szelektor', () => {
        cy.visit('');
        cy.get('body .menu__hamburger--htx').click();
        cy.get('body .menu__hamburger--htx.is-active span')
            .before('transition-delay')
            .should('eq', '0s, 0.3s');
        cy.get('body .menu__hamburger--htx.is-active span')
            .after('transition-delay')
            .should('eq', '0s, 0.3s');
    });*/
});
