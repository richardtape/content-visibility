import { PanelBody, PanelRow, Slot } from '@wordpress/components';
import { createHigherOrderComponent } from '@wordpress/compose';
import { Fragment } from '@wordpress/element';
import { addFilter, applyFilters } from '@wordpress/hooks';
import { InspectorControls } from '@wordpress/blockEditor';
import { __ } from '@wordpress/i18n';

import assign from 'lodash/assign';

import { BlockVisibilityRulesEnabled } from './block-visibility-rules-enabled';
import { BlockVisibilityDisplayedControl } from './block-visibility-displayed-control';

import isValidBlockType from '../helpers/is-valid-blocktype';

export const blockVisibilityControls = createHigherOrderComponent( ( BlockEdit ) => {

    return ( props ) => {

        if ( ! isValidBlockType( props.name ) || ! props.isSelected ) {
            return <BlockEdit { ...props } />;
        }

        //  Add a class to the div contining the rules so we can show/hide them when they are enabled/disabled.
        let showControls = ( props.attributes.blockVisibilityRules.blockVisibilityRulesEnabled ) ? 'show-controls' : 'hide-controls';

        return (
            <Fragment>
                <BlockEdit { ...props } />
                <InspectorControls>
                    <PanelBody title={ __( 'Block Visibility', 'block-visibility' ) } className="block-visibility-controls" initialOpen={ false }>

                        <PanelRow className="block-visibility-rules-enabled">
                            <BlockVisibilityRulesEnabled props={ props } />
                        </PanelRow>

                        <div className={ showControls  + " block-visibility-controls-container" }>
                            <PanelRow className="block-visibility-displayed-control">
                                <BlockVisibilityDisplayedControl props={ props } />
                            </PanelRow>

                            <Slot name="block-visibility-extra-controls" fillProps={ props } />
                        </div>

                    </PanelBody>
                </InspectorControls>
            </Fragment>
        );

    };
}, 'blockVisibilityControls' );

addFilter( 'editor.BlockEdit', 'block-visibility/block-visibility-controls', blockVisibilityControls );

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

        // Run the rules through a filter so we're able to add rules externally.
        let defaultRules = applyFilters( 'blockVisibility.defaultBlockVisibilityRules', {
            blockVisibilityRulesEnabled: false,
            userAuthenticated: ''
        } );

		// Use Lodash's assign to gracefully handle if attributes are undefined
		settings.attributes = assign( settings.attributes, {
			blockVisibilityRules: {
                type: 'object',
                default: defaultRules
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