import { __ } from '@wordpress/i18n';

/**
 * Determine the text for the button which opens the popup for the special pages inserter. By default, if there are
 * no special pages selected, it will be 'Select special pages'. However, if there are special pages set, it will
 * list those pages, comma separated.
 *
 * @param {object} props the props for this current iteration of the inserter.
 * @return {string} the text to be used for the button.
 */
const specialPagesInsertText = ( props, type, defaultVal ) => {
    
    // if nothing is set, return a prompt to select special pages.
    if ( props.attributes.contentVisibilityRules.specialPage[type] === undefined || props.attributes.contentVisibilityRules.specialPage[type].length === 0 ) {
        return defaultVal;
    }

    let specialPages = props.attributes.contentVisibilityRules.specialPage[type];

    // if this value is non-empty it is an array of objects. We want the label property from each of those objects.
    let labels = [];

    specialPages.forEach( element => {
        labels.push( element.label );
    } );

    let insertText = __( 'This block will be ', 'content-visibility' ) + props.attributes.contentVisibility + __( ' on: ', 'content-visibility' );

    // If we have more than (magic number) 3 items we only list the first 3 and then "...and others"
    let excerptCount = 2;

    // this is horrible and I am ashamed.
    if ( labels.length <= excerptCount ) {
        insertText += labels.join( ', ' );
    } else {

        let otherOrOthers = ( (excerptCount + 1) === labels.length ) ? __( ' other', 'content-visibility' ) : __( ' others', 'content-visibility' );

        let firstN = labels.slice( 0, excerptCount );
        let lastN  = labels.length - excerptCount;

        insertText += firstN.join( ', ' ) + __( ', and ', 'content-visibility' ) + lastN + otherOrOthers;
    }

    return insertText;
    
};

export default specialPagesInsertText;