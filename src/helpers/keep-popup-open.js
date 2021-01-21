import hasParentWithClass from './has-parent-with-class';

/**
 * The Popup component closes if it loses focus by default. For us, we want to ensure it
 * stays open until someone intentially closes it via either setting the selected items,
 * pressing a close button, or clicking the button they initially used to open the popup.
 *
 * @param {event} event The click event.
 * @return null
 */
const keepPopupOpen = ( event ) => {

    if ( false === event ) {
        return;
    }

    // Determine if what has been clicked on is in the popover or not.
    let eTarget = event.target;

    if ( hasParentWithClass( eTarget, 'components-popover__content' ) ) {
        event.stopPropagation();
    }

    return;
};

export default keepPopupOpen;