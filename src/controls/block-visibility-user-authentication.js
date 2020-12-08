import { Fill, Disabled } from '@wordpress/components';
import { withState } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';

import { registerPlugin } from '@wordpress/plugins';
import { BlockVisibilityUserAuthenticationPanelBodyControl } from './user-authentication/user-authentication-panel-body-control';


export const BlockVisibilityUserAuthenticationControl = withState( {
    option: '',
} )( ( { option, setState, props } ) => {

    let rulesEnabled    = props.attributes.blockVisibilityRules.blockVisibilityRulesEnabled;
    let blockVisibility = props.attributes.hasOwnProperty( 'blockVisibility' );

    if ( ! rulesEnabled || ! blockVisibility ) {
        return (
            <Disabled><BlockVisibilityUserAuthenticationPanelBodyControl props={ props } /></Disabled>
        );
    }

    return (
        <BlockVisibilityUserAuthenticationPanelBodyControl props={ props } />
    );

} );

/**
 * Render the <BlockVisibilityUserAuthenticationControl> component by adding
 * it to the block-visibility-extra-controls Fill.
 *
 * @return {Object} A Fill component wrapping the BlockVisibilityUserAuthenticationControl component.
 */
function BlockVisibilityUserAuthenitcationFill() {
    return (
        <Fill name="block-visibility-extra-controls">
            {
                ( fillProps ) => {
                    return (
                        <BlockVisibilityUserAuthenticationControl props={ fillProps } />
                    )
                }
            }
        </Fill>
    );

}

// Add our component to the Slot provided by BlockVisibilityControls
registerPlugin( 'block-visibility-01-user-authentication-fill', { render: BlockVisibilityUserAuthenitcationFill } );
