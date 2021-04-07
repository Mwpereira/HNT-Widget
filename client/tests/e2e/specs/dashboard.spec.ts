import {getByAutoId} from '../support/support';

describe('Dashboard', () => {
    it('check styling', () => {
        cy.visit('/');
        getByAutoId('hnt-header').should('contain', 'HNT/USDT');
        getByAutoId('hnt-price').should('be.visible');
        getByAutoId('hnt-high').should('be.visible');
        getByAutoId('hnt-low').should('be.visible');

        getByAutoId('hnt-price').should('be.visible');
        getByAutoId('hnt-price').should('be.visible');
        getByAutoId('hnt-price').should('be.visible');
        getByAutoId('hnt-price').should('be.visible');

        getByAutoId('binance-footer').should('be.visible').should('contain', 'All Crypto Data Provided by Binance').find('a').should('have.attr', 'href').and('include', 'https://www.binance.com/en');
        getByAutoId('last-updated').should('be.visible').should('contain', 'Last Updated:');
    });
});
