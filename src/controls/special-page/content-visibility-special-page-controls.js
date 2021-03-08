import { Fill, Disabled } from '@wordpress/components';
import { withState } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';

import { registerPlugin } from '@wordpress/plugins';
import { ContentVisibilitySpecialPagePanelBodyControl } from './content-visibility-special-page-panel';


export const ContentVisibilitySpecialPageControls = withState( {
    option: '',
} )( ( { option, setState, props } ) => {

    let rulesEnabled    = props.attributes.contentVisibilityRules.contentVisibilityRulesEnabled;
    let contentVisibility = props.attributes.hasOwnProperty( 'contentVisibility' );

    if ( ! rulesEnabled || ! contentVisibility ) {
        return (
            <Disabled>
                <ContentVisibilitySpecialPagePanelBodyControl props={ props } />
            </Disabled>
        );
    }

    return (
        <ContentVisibilitySpecialPagePanelBodyControl props={ props } />
    );

} );

/**
 * Render the <ContentVisibilitySpecialPageControls> component by adding
 * it to the block-visibility-extra-controls Fill.
 *
 * @return {Object} A Fill component wrapping the ContentVisibilitySpecialPageControls component.
 */
function ContentVisibilitySpecialPageFill() {

    return (
        <Fill name="content-visibility-extra-controls">
            {
                ( fillProps ) => {
                    return (
                        <ContentVisibilitySpecialPageControls props={ fillProps } />
                    )
                }
            }
        </Fill>
    );

}

// Only load the Widgets-related controls on the widgets screen or we're local, due to Widgets Screen bug.
if ( 'appearance_page_gutenberg-widgets' === ContentVisibility.screen || '1' === ContentVisibility.local ) {
    // Add our component to the Slot provided by BlockVisibilityControls
    registerPlugin( 'content-visibility-04-special-page-fill', { render: ContentVisibilitySpecialPageFill } );
}
