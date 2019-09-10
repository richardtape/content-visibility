import { RadioControl } from '@wordpress/components';
import { withState } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';
import { addFilter } from '@wordpress/hooks';

import assign from 'lodash/assign';

import isValidBlockType from '../helpers/is-valid-blocktype';

export const BlockVisibilityDisplayedControl = withState( {
    option: 'shown',
} )( ( { option, setState, props } ) => (
    <RadioControl
        label={ __( "When the rules set below are true, this block will be: ", 'block-visibility' ) }
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
) );

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