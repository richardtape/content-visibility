import { Fill, Disabled } from '@wordpress/components';
import { withState } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';

import { registerPlugin } from '@wordpress/plugins';
import { BlockVisibilitySpecialPagePanelBodyControl } from './block-visibility-special-page-panel';


export const BlockVisibilitySpecialPageControls = withState( {
    option: '',
} )( ( { option, setState, props } ) => {

    let rulesEnabled    = props.attributes.blockVisibilityRules.blockVisibilityRulesEnabled;
    let blockVisibility = props.attributes.hasOwnProperty( 'blockVisibility' );

    if ( ! rulesEnabled || ! blockVisibility ) {
        return (
            <Disabled>
                <BlockVisibilitySpecialPagePanelBodyControl props={ props } />
            </Disabled>
        );
    }

    return (
        <BlockVisibilitySpecialPagePanelBodyControl props={ props } />
    );

} );

/**
 * Render the <BlockVisibilitySpecialPageControls> component by adding
 * it to the block-visibility-extra-controls Fill.
 *
 * @return {Object} A Fill component wrapping the BlockVisibilitySpecialPageControls component.
 */
function BlockVisibilitySpecialPageFill() {
    return (
        <Fill name="block-visibility-extra-controls">
            {
                ( fillProps ) => {
                    return (
                        <BlockVisibilitySpecialPageControls props={ fillProps } />
                    )
                }
            }
        </Fill>
    );

}

// Only load the Widgets-related controls on the widgets screen
if ( 'appearance_page_gutenberg-widgets' === BlockVisibility.screen ) {
    // Add our component to the Slot provided by BlockVisibilityControls
    registerPlugin( 'block-visibility-04-special-page-fill', { render: BlockVisibilitySpecialPageFill } );
}
