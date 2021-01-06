import { Icon } from '@wordpress/components';

/**
 * A list of special pages, their associated title and icon are passed in from PHP as ContentVisibility.specialPages
 * We manipulate this associative PHP array (which in turn becomes a JS object) into something usable for our dropdown.
 *
 */
function getSpecialPages() {

    const specialPages = [];

    for ( const specialPage in ContentVisibility.specialPages ) {
    
        specialPages.push( { 
            label: ContentVisibility.specialPages[specialPage].label,
            value: ContentVisibility.specialPages[specialPage].keyValue,
            notes: ContentVisibility.specialPages[specialPage].notes,
            icon: <Icon size="12" icon={ ContentVisibility.specialPages[ specialPage ].icon } /> 
        } );
    
    }

    return specialPages;

}// end getSpecialPages()

export default getSpecialPages;