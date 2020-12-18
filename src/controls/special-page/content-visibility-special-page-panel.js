import { PanelBody, PanelRow } from '@wordpress/components';
import { withState } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';

// import { ContentVisibilityUserAuthenticationRadioControl } from './block-visibility-user-authentication-radio-control';

export const ContentVisibilitySpecialPagePanelBodyControl = withState( {
    option: '',
} )( ( { option, setState, props } ) => {

    return (
        <PanelBody
            title={ __( 'Special Page', 'content-visibility' ) }
            initialOpen={ false }
            className="content-visibility-control-panel block-visibility-special-page-controls"
        >
            <PanelRow>
                {/* <ContentVisibilityUserAuthenticationRadioControl props={ props } /> */}
                <p>This does not function properly yet due to a core Gutenberg bug.</p>

                { props.attributes.contentVisibility && (
                    <p class="special-page-help-intro content-visibility-help-text">
                        { __( 'Select which types of pages this block will be ' + props.attributes.contentVisibility + '. Special pages include a search results page, a date or category archive, or the 404 not found page amongst others.', 'content-visibility-special-page' ) }
                    </p>
                ) }

            </PanelRow>
        </PanelBody>
    );

} );