import { Fill, Disabled } from '@wordpress/components';
import { withState } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';

import { registerPlugin } from '@wordpress/plugins';
import { ContentVisibilityUserAuthenticationPanelBodyControl } from './user-authentication/user-authentication-panel-body-control';


export const ContentVisibilityUserAuthenticationControl = withState( {
    option: '',
} )( ( { option, setState, props } ) => {

    let rulesEnabled    = props.attributes.contentVisibilityRules.contentVisibilityRulesEnabled;
    let contentVisibility = props.attributes.hasOwnProperty( 'contentVisibility' );

    if ( ! rulesEnabled || ! contentVisibility ) {
        return (
            <Disabled><ContentVisibilityUserAuthenticationPanelBodyControl props={ props } /></Disabled>
        );
    }

    return (
        <ContentVisibilityUserAuthenticationPanelBodyControl props={ props } />
    );

} );

/**
 * Render the <ContentVisibilityUserAuthenticationControl> component by adding
 * it to the block-visibility-extra-controls Fill.
 *
 * @return {Object} A Fill component wrapping the ContentVisibilityUserAuthenticationControl component.
 */
function BlockVisibilityUserAuthenitcationFill() {
    return (
        <Fill name="content-visibility-extra-controls">
            {
                ( fillProps ) => {
                    return (
                        <ContentVisibilityUserAuthenticationControl props={ fillProps } />
                    )
                }
            }
        </Fill>
    );

}

// Add our component to the Slot provided by BlockVisibilityControls
registerPlugin( 'content-visibility-01-user-authentication-fill', { render: BlockVisibilityUserAuthenitcationFill } );
