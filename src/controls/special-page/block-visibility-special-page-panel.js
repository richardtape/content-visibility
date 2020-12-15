import { PanelBody, PanelRow } from '@wordpress/components';
import { withState } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';

// import { BlockVisibilityUserAuthenticationRadioControl } from './block-visibility-user-authentication-radio-control';

export const BlockVisibilitySpecialPagePanelBodyControl = withState( {
    option: '',
} )( ( { option, setState, props } ) => {

    return (
        <PanelBody
            title={ __( 'Special Page', 'block-visibility' ) }
            initialOpen={ false }
            className="block-visibility-control-panel block-visibility-special-page-controls"
        >
            <PanelRow>
                {/* <BlockVisibilityUserAuthenticationRadioControl props={ props } /> */}
                <p>This does not function properly yet due to a core Gutenberg bug.</p>

                { props.attributes.blockVisibility && (
                    <p class="special-page-help-intro block-visibility-help-text">
                        { __( 'Select which types of pages this block will be ' + props.attributes.blockVisibility + '. Special pages include a search results page, a date or category archive, or the 404 not found page amongst others.', 'block-visibility-special-page' ) }
                    </p>
                ) }

            </PanelRow>
        </PanelBody>
    );

} );