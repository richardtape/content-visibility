import { applyFilters } from '@wordpress/hooks';

/**
 * Determine if the passed block props contain rules of the passed type.
 *
 * @param {object} props The currently selected block's props.
 * @param {string} type The type of the rules i.e. userAuthenticated or specialPage (or ones from add-ons).
 *
 * @return {bool} true if the passed props contain non-empty rules of the passed type. False otherwise.
 */
 function hasRules( props, type ) {

    if ( ! props.attributes.contentVisibilityRules ) {
        return false;
    }

    if ( ! props.attributes.contentVisibilityRules[type] ) {
        return false;
    }

    // Default to false. Passed through a filter later.
    let hasRules = false;

    switch ( type ) {
        
        case 'userAuthenticated':

            if ( props.attributes.contentVisibilityRules[type] !== '' ) {
                hasRules = true;
            }

            break;
        
        case 'specialPage':

            let allSpecialPageRules = props.attributes.contentVisibilityRules.specialPage;

            // If *any* of the special pages contains rules, then this is true. Is an array of arrays.
            let specialPageRulesValues = Object.values( allSpecialPageRules );

            // if any of the arrays in specialPageRulesValues is non-empty then we have SOME rules.
            hasRules = specialPageRulesValues.some( function( el ) {
                return el.length > 0;
            });

            break;

        default:
            break;
    }

    return applyFilters( 'content-visibility-has-rules', hasRules, props, type );

}// end hasRules()

export default hasRules;