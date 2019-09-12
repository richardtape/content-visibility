import { RadioControl, PanelBody, PanelRow, Fill } from '@wordpress/components';
import { withState } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';
import { addFilter, doAction } from '@wordpress/hooks';
import { registerPlugin } from '@wordpress/plugins';

import assign from 'lodash/assign';

import isValidBlockType from '../helpers/is-valid-blocktype';

export const BlockVisibilityUserAuthenticationControl = withState( {
    option: 'logged-out',
} )( ( { option, setState, props } ) => (

    <PanelBody
        title={ __( 'User Authentication', 'block-visibility' ) }
        initialOpen={ false }
        className="block-visibility-user-authenticated-controls"
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
 * Filters registered block settings, extending attributes with our custom data.
 *
 * @param {Object} settings Original block settings.
 *
 * @return {Object} Filtered block settings.
 */
export function addBlockVisibilityRulesAttribute( settings ) {

	// If this is a valid block
	if ( isValidBlockType( settings.name ) ) {

		// Use Lodash's assign to gracefully handle if attributes are undefined
		settings.attributes = assign( settings.attributes, {
			blockVisibilityRules: {
                type: 'object',
                default: {
                    userAuthenticated: 'logged-out',
                }
			},
		} );
	}

	return settings;

}// end addBlockVisibilityRulesAttribute()

/**
 * Override props assigned to save component to inject our custom data.
 * This is only done if the component is a valid block type.
 *
 * @param {Object} extraProps Additional props applied to save element.
 * @param {Object} blockType  Block type.
 * @param {Object} attributes Current block attributes.
 *
 * @return {Object} Filtered props applied to save element.
 */
export function addBlockVisibilityRulesPropOnSave( extraProps, blockType, attributes ) {

	// If the current block is valid, add our prop.
	if ( isValidBlockType( blockType.name ) ) {
		extraProps.blockVisibilityRules = attributes.blockVisibilityRules;
	}

	return extraProps;

}// end addBlockVisibilityRulesPropOnSave()

addFilter( 'blocks.registerBlockType', 'block-visibility/addBlockVisibilityRulesAttribute', addBlockVisibilityRulesAttribute );
addFilter( 'blocks.getSaveContent.extraProps', 'block-visibility/addBlockVisibilityRulesPropOnSave', addBlockVisibilityRulesPropOnSave );

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
