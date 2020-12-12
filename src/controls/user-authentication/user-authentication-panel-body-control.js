import { PanelBody, PanelRow } from '@wordpress/components';
import { withState } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';

import { BlockVisibilityUserAuthenticationRadioControl } from './block-visibility-user-authentication-radio-control';

export const BlockVisibilityUserAuthenticationPanelBodyControl = withState( {
    option: '',
} )( ( { option, setState, props } ) => {

    return (
        <PanelBody
            title={ __( 'User Authentication', 'block-visibility' ) }
            initialOpen={ false }
            className="block-visibility-control-panel block-visibility-user-authenticated-controls"
        >
            <PanelRow>
                <BlockVisibilityUserAuthenticationRadioControl props={ props } />

                { props.attributes.blockVisibility && (
                    <p class="user-auth-help-intro block-visibility-help-text">
                        { __( 'Select whether this block will be ' + props.attributes.blockVisibility + ' if a user is signed in to this site. If neither is selected, this block will be ' + props.attributes.blockVisibility + ' regardless of whether a user is signed in or not.', 'block-visibility-user-role' ) }
                    </p>
                ) }

            </PanelRow>
        </PanelBody>
    );

} );