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
            </PanelRow>
        </PanelBody>
    );

} );