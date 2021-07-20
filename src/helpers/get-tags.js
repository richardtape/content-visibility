import { __ } from '@wordpress/i18n';

/**
 * PHP sends through a list of all the tags on the site. We massage that data to be
 * usable by our Dropdown.
 *
 */
function getTags() {

    const tags = [];

    if ( ContentVisibility.tags.length === 0 ) {
        return [ {
            label: __( 'No tags found.', 'content-visibility' ),
            value: 0,
            notes: '',
        } ]
    }

    for ( const tag in ContentVisibility.tags ) {
    
        tags.push( { 
            label: ContentVisibility.tags[tag].label,
            value: ContentVisibility.tags[tag].id,
            notes: ContentVisibility.tags[tag].notes
        } );
    
    }

    return tags;

}// end getTags()

export default getTags;