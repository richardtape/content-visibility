import { __ } from '@wordpress/i18n';

/**
 * PHP sends through a list of all the categories on the site. We massage that data to be
 * usable by our Dropdown.
 *
 */
function getCategories() {

    const categories = [];

    if ( ContentVisibility.categories.length === 0 ) {
        return [ {
            label: __( 'No categories found.', 'content-visibility' ),
            value: 0,
            notes: '',
        } ]
    }

    for ( const category in ContentVisibility.categories ) {
    
        categories.push( { 
            label: ContentVisibility.categories[category].label,
            value: ContentVisibility.categories[category].id,
            notes: ContentVisibility.categories[category].notes
        } );
    
    }

    return categories;

}// end getCategories()

export default getCategories;