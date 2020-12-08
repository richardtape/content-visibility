import { RadioControl } from '@wordpress/components';
import { withState } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';
import { doAction } from '@wordpress/hooks';

export const BlockVisibilityUserAuthenticationRadioControl = withState( {
    option: '',
} )( ( { option, setState, props } ) => {

    return (

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

    );

} );