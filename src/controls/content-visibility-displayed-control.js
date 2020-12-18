import { Disabled } from '@wordpress/components';
import { withState } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';
import { addFilter } from '@wordpress/hooks';

import assign from 'lodash/assign';

import { ContentVisibilityShownHiddenControl } from './shown-or-hidden/content-visibility-shown-hidden-control';
import isValidBlockType from '../helpers/is-valid-blocktype';

export const ContentVisibilityDisplayedControl = withState( {
    option: '',
} )( ( { option, setState, props } ) => {

    let rulesEnabled = props.attributes.contentVisibilityRules.contentVisibilityRulesEnabled;

    if ( ! rulesEnabled ) {
        return (
            <Disabled>
                <ContentVisibilityShownHiddenControl props={ props } />
            </Disabled>
        );
    }

    return (
        <ContentVisibilityShownHiddenControl props={ props } />
    );

} );

/**
 * Filters registered block settings, extending attributes with our custom data.
 *
 * @param {Object} settings Original block settings.
 *
 * @return {Object} Filtered block settings.
 */
export function addContentVisibilityAttribute( settings ) {

	// If this is a valid block
	if ( isValidBlockType( settings.name ) ) {

		// Use Lodash's assign to gracefully handle if attributes are undefined
		settings.attributes = assign( settings.attributes, {
			contentVisibility: {
				type: 'string',
			},
		} );
	}

	return settings;

}// end addContentVisibilityAttribute()

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
		extraProps.contentVisibility = attributes.contentVisibility;
	}

	return extraProps;

}// end addBlockVisibilityPropOnSave()

addFilter( 'blocks.registerBlockType', 'content-visibility/addContentVisibilityAttribute', addContentVisibilityAttribute );
addFilter( 'blocks.getSaveContent.extraProps', 'content-visibility/addBlockVisibilityPropOnSave', addBlockVisibilityPropOnSave );