import { __ } from '@wordpress/i18n';

/**
 * PHP sends through a list of all the pages on the site (in any status). We massage that data to be
 * usable by our Dropdown.
 *
 */
function getPages() {

    const pages = [];

    if ( ContentVisibility.pages.length === 0 ) {
        return [ {
            label: __( 'No pages found.', 'content-visibility' ),
            value: 0,
            notes: '',
        } ]
    }

    for ( const page in ContentVisibility.pages ) {
    
        pages.push( { 
            label: ContentVisibility.pages[page].label,
            value: ContentVisibility.pages[page].id,
            notes: ContentVisibility.pages[page].notes
        } );
    
    }

    return pages;

}// end getPages()

export default getPages;