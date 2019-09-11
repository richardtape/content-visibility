import { RadioControl, PanelBody, PanelRow } from '@wordpress/components';
import { withState } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';
import { addFilter, doAction } from '@wordpress/hooks';
import { Fragment } from '@wordpress/element';

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

export const addUserAuthenticationControl = function( panelRow, sentProps ) {

    return (
        <Fragment>
            { panelRow }
            <BlockVisibilityUserAuthenticationControl props={ sentProps } />
        </Fragment>
    );

}

addFilter( 'blocks.registerBlockType', 'block-visibility/addBlockVisibilityRulesAttribute', addBlockVisibilityRulesAttribute );
addFilter( 'blocks.getSaveContent.extraProps', 'block-visibility/addBlockVisibilityRulesPropOnSave', addBlockVisibilityRulesPropOnSave );
addFilter( 'blockVisibility.panelRow', 'block-visibility/addUserAuthenticationControl', addUserAuthenticationControl );