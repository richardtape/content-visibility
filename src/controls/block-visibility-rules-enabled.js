import { ToggleControl } from '@wordpress/components';
import { withState, createHigherOrderComponent } from '@wordpress/compose';
import { addFilter, doAction } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

import assign from 'lodash/assign';

import isValidBlockType from '../helpers/is-valid-blocktype';

export const BlockVisibilityRulesEnabled = withState( {
    rulesEnabled: false,
} )( ( { rulesEnabled, setState, props } ) => (
    <ToggleControl
        label={ props.attributes.blockVisibilityRules.blockVisibilityRulesEnabled ? __( 'Rules Enabled', 'block-visibility' ) : __( 'Rules Disabled', 'block-visibility' ) }
        checked={ props.attributes.blockVisibilityRules.blockVisibilityRulesEnabled || rulesEnabled }
        onChange={ ( rulesEnabled ) => setState( ( state ) => {

            let newBVRules = { ...props.attributes.blockVisibilityRules };
            newBVRules.blockVisibilityRulesEnabled = rulesEnabled;

            props.setAttributes( {
                blockVisibilityRules: newBVRules,
            } );

            // Fire an action so we can see what's happened in other controls. This can be useful,
            // for example when setting rules for roles - pointless if a user isn't signed in.
            doAction( 'blockVisibility.onChange.blockVisibilityRulesEnabled', 'block-visibility/onChange', rulesEnabled, props );

            // Sets the state
            return (
                { rulesEnabled: ! state.rulesEnabled }
            );
        } ) }
    />
) );


/**
 * Filters registered block settings, extending attributes with our custom data.
 *
 * @param {Object} settings Original block settings.
 *
 * @return {Object} Filtered block settings.
 */
export function addBlockVisibilityRulesEnabledAttribute( settings ) {

	// If this is a valid block
	if ( isValidBlockType( settings.name ) ) {

		// Use Lodash's assign to gracefully handle if attributes are undefined
		settings.attributes = assign( settings.attributes, {
			blockVisibilityRulesEnabled: {
				type: 'boolean',
			},
		} );
	}

	return settings;

}// end addBlockVisibilityRulesEnabledAttribute()

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
export function addBlockVisibilityRulesEnabledPropOnSave( extraProps, blockType, attributes ) {

	// If the current block is valid, add our prop.
	if ( isValidBlockType( blockType.name ) ) {
		extraProps.blockVisibilityRulesEnabled = attributes.blockVisibilityRulesEnabled;
    }

	return extraProps;

}// end addBlockVisibilityRulesEnabledPropOnSave()

const withCustomClassName = createHigherOrderComponent( ( BlockListBlock ) => {
    return ( props ) => {

        if ( props.attributes.blockVisibilityRules.blockVisibilityRulesEnabled ) {
            return <BlockListBlock {...props} className={ "block-visibility-rules-enabled" } />
        }

        return <BlockListBlock {...props} />

    };
}, 'withCustomClassName' );

addFilter( 'blocks.registerBlockType', 'block-visibility/addBlockVisibilityRulesEnabledAttribute', addBlockVisibilityRulesEnabledAttribute );
addFilter( 'blocks.getSaveContent.extraProps', 'block-visibility/addBlockVisibilityRulesEnabledPropOnSave', addBlockVisibilityRulesEnabledPropOnSave );

addFilter( 'editor.BlockListBlock', 'my-plugin/with-client-id-class-name', withCustomClassName );