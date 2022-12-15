import { RadioControl, PanelBody, PanelRow } from '@wordpress/components';
import { withState } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';

export const ContentVisibilityShownHiddenControl = withState( {
    option: '',
} )( ( { option, setState, props } ) => {

    return (
        <PanelBody
            title={ __( 'Show or Hide', 'content-visibility-user-role' ) }
            initialOpen={ true }
            className="content-visibility-control-panel content-visibility-user-role-controls"
        >
            <PanelRow>
                <RadioControl
                    label={ __( "When the rules below are true, this block will be: ", 'content-visibility' ) }
                    help=""
                    selected={ props.attributes.contentVisibility || option }
                    options={ [
                        { label: __( 'Shown', 'content-visibility' ), value: 'shown' },
                        { label: __( 'Hidden', 'content-visibility' ), value: 'hidden' },
                    ] }
                    onChange={ ( option ) => {

                        setState( { option } );

                        props.setAttributes( {
                            contentVisibility: option,
                        } );

                    } }
                />
            </PanelRow>
        </PanelBody>
    );

} );