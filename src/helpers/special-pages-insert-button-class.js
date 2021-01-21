/**
 * The class which is given to the button used to toggle the popover where people can select which content to select.
 * We add a 'has-items' class if someone has chosen at least one item.
 *
 * @return string
 */
const specialPagesInsertButtonClass = ( props, type ) => {

    // If we don't have any items selected, just basic class.
    if ( props.attributes.contentVisibilityRules.specialPage[type] === undefined || props.attributes.contentVisibilityRules.specialPage[type].length === 0 ) {
        return 'content-visibility-special-page-inserter-toggle';
    }

    // We have some items selected, so we have a couple classes.
    return 'content-visibility-special-page-inserter-toggle has-items';
    
};

export default specialPagesInsertButtonClass;