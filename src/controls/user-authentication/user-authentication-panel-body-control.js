import { PanelBody, PanelRow } from '@wordpress/components';
import { withState } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';

import { ContentVisibilityUserAuthenticationRadioControl } from './content-visibility-user-authentication-radio-control';

export const ContentVisibilityUserAuthenticationPanelBodyControl = withState( {
    option: '',
} )( ( { option, setState, props } ) => {

    let hasRulesClass = ( props.attributes.contentVisibilityRules && props.attributes.contentVisibilityRules.userAuthenticated && props.attributes.contentVisibilityRules.userAuthenticated !== '' ) ? ' has-active-rules' : '';

    return (
        <PanelBody
            title={ __( 'User Authentication', 'content-visibility' ) }
            initialOpen={ false }
            className={"content-visibility-control-panel content-visibility-user-authenticated-controls" + hasRulesClass}
        >
            <PanelRow>
                <ContentVisibilityUserAuthenticationRadioControl props={ props } />

                { props.attributes.contentVisibility && (
                    <p className="user-auth-help-intro content-visibility-help-text">
                        { __( 'Select whether this block will be ' + props.attributes.contentVisibility + ' if a user is signed in to this site. If neither is selected, this block will be ' + props.attributes.contentVisibility + ' regardless of whether a user is signed in or not.', 'content-visibility-user-role' ) }
                    </p>
                ) }

            </PanelRow>
        </PanelBody>
    );

} );