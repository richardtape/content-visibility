import { Disabled } from '@wordpress/components';
import { withState } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';
import { addFilter } from '@wordpress/hooks';

import assign from 'lodash/assign';

import { BlockVisibilityShownHiddenControl } from './shown-or-hidden/block-visibility-shown-hidden-control';
import isValidBlockType from '../helpers/is-valid-blocktype';

export const BlockVisibilityDisplayedControl = withState( {
    option: '',
} )( ( { option, setState, props } ) => {

    let rulesEnabled = props.attributes.blockVisibilityRules.blockVisibilityRulesEnabled;

    if ( ! rulesEnabled ) {
        return (
            <Disabled>
                <BlockVisibilityShownHiddenControl props={ props } />
            </Disabled>
        );
    }

    return (
        <BlockVisibilityShownHiddenControl props={ props } />
    );

} );

/**
 * Filters registered block settings, extending attributes with our custom data.
 *
 * @param {Object} settings Original block settings.
 *
 * @return {Object} Filtered block settings.
 */
export function addBlockVisibilityAttribute( settings ) {

	// If this is a valid block
	if ( isValidBlockType( settings.name ) ) {

		// Use Lodash's assign to gracefully handle if attributes are undefined
		settings.attributes = assign( settings.attributes, {
			blockVisibility: {
				type: 'string',
			},
		} );
	}

	return settings;

}// end addBlockVisibilityAttribute()

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
export function addBlockVisibilityPropOnSave( extraProps, blockType, attributes ) {

	// If the current block is valid, add our prop.
	if ( isValidBlockType( blockType.name ) ) {
		extraProps.blockVisibility = attributes.blockVisibility;
	}

	return extraProps;

}// end addBlockVisibilityPropOnSave()

addFilter( 'blocks.registerBlockType', 'block-visibility/addBlockVisibilityAttribute', addBlockVisibilityAttribute );
addFilter( 'blocks.getSaveContent.extraProps', 'block-visibility/addBlockVisibilityPropOnSave', addBlockVisibilityPropOnSave );