import { RadioControl, PanelBody, PanelRow } from '@wordpress/components';
import { withState } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';

export const BlockVisibilityShownHiddenControl = withState( {
    option: '',
} )( ( { option, setState, props } ) => {

    return (
        <PanelBody
            title={ __( 'Shown or Hidden', 'block-visibility-user-role' ) }
            initialOpen={ true }
            className="block-visibility-control-panel block-visibility-user-role-controls"
        >
            <PanelRow>
                <RadioControl
                    label={ __( "When the rules below are true, this block will be: ", 'block-visibility' ) }
                    help=""
                    selected={ props.attributes.blockVisibility || option }
                    options={ [
                        { label: __( 'Shown', 'block-visibility' ), value: 'shown' },
                        { label: __( 'Hidden', 'block-visibility' ), value: 'hidden' },
                    ] }
                    onChange={ ( option ) => {

                        setState( { option } );

                        props.setAttributes( {
                            blockVisibility: option,
                        } );

                    } }
                />
            </PanelRow>
        </PanelBody>
    );

} );