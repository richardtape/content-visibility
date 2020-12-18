import { RadioControl } from '@wordpress/components';
import { withState } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';
import { doAction } from '@wordpress/hooks';

export const ContentVisibilityUserAuthenticationRadioControl = withState( {
    option: '',
} )( ( { option, setState, props } ) => {

    return (

        <RadioControl
            label=''
            help=''
            className="content-visibility-user-authenticated-control"
            selected={ props.attributes.contentVisibilityRules.userAuthenticated || option }
            options={ [
                { label: __( 'Signed Out', 'content-visibility' ), value: 'logged-out' },
                { label: __( 'Signed In', 'content-visibility' ), value: 'logged-in' },
            ] }
            onChange={ ( option ) => {

                // Set the state and props.
                setState( { option } );

                let newBVRules = { ...props.attributes.contentVisibilityRules };
                newBVRules.userAuthenticated = option;

                props.setAttributes( {
                    contentVisibilityRules: newBVRules,
                } );

                // Fire an action so we can see what's happened in other controls. This can be useful,
                // for example when setting rules for roles - pointless if a user isn't signed in.
                doAction( 'contentVisibility.onChange.userAuthenticated', 'content-visibility/onChange', option, props );

            } }
        />

    );

} );