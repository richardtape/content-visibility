import { RadioControl, PanelBody, PanelRow, Fill } from '@wordpress/components';
import { withState } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';
import { doAction } from '@wordpress/hooks';
import { registerPlugin } from '@wordpress/plugins';

export const BlockVisibilityUserAuthenticationControl = withState( {
    option: '',
} )( ( { option, setState, props } ) => (

    <PanelBody
        title={ __( 'User Authentication', 'block-visibility' ) }
        initialOpen={ false }
        className="block-visibility-control-panel block-visibility-user-authenticated-controls"
    >
        <PanelRow>
            <RadioControl
                label=''
                help=''
                className="block-visibility-user-authenticated-control"
                selected={ props.attributes.blockVisibilityRules.userAuthenticated || option }
                options={ [
                    { label: __( 'Signed Out', 'block-visibility' ), value: 'logged-out' },
                    { label: __( 'Signed In', 'block-visibility' ), value: 'logged-in' },
                ] }
                onChange={ ( option ) => {

                    // Set the state and props.
                    setState( { option } );

                    let newBVRules = { ...props.attributes.blockVisibilityRules };
                    newBVRules.userAuthenticated = option;

                    props.setAttributes( {
                        blockVisibilityRules: newBVRules,
                    } );

                    // Fire an action so we can see what's happened in other controls. This can be useful,
                    // for example when setting rules for roles - pointless if a user isn't signed in.
                    doAction( 'blockVisibility.onChange.userAuthenticated', 'block-visibility/onChange', option, props );

                } }
            />
        </PanelRow>
    </PanelBody>

) );

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
registerPlugin( 'block-visibility-user-authentication-fill', { render: BlockVisibilityUserAuthenitcationFill } );
