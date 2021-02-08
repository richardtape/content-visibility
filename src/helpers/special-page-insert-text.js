import { __ } from '@wordpress/i18n';

/**
 * Determine the text for the button which opens the popup for the special pages inserter. By default, if there are
 * no special pages selected, it will be 'Select special pages'. However, if there are special pages set, it will
 * say how many.
 *
 * @param object props the props for this current iteration of the inserter.
 * @param string type the key in the object data store for specialPages
 * @param string defaultVal the original, default, text for the button (which is shown we no special pages are selected)
 * @param object niceName the text-friendly versions of the type of special page. i.e. "Special Pages" as opposed to 'special-page'.
 *                        object contains a singular and plural property.
 * @return string the text to be used for the button.
 */
const specialPagesInsertText = ( props, type, defaultVal, niceName ) => {
    
    // if nothing is set, return a prompt to select special pages.
    if ( props.attributes.contentVisibilityRules.specialPage[type] === undefined || props.attributes.contentVisibilityRules.specialPage[type].length === 0 ) {
        return defaultVal;
    }

    let shownOrHidden     = props.attributes.contentVisibility;
    let specialPages      = props.attributes.contentVisibilityRules.specialPage[type];    
    let specialPagesCount = specialPages.length;

    let niceType = ( specialPagesCount === 1 ) ? niceName.singular : niceName.plural;

    let insertText = shownOrHidden + __( ' on ' ) + specialPagesCount  + ' ' + niceType;

    return insertText;

};

export default specialPagesInsertText;