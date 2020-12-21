import { ToggleControl } from '@wordpress/components';
import { withState, createHigherOrderComponent } from '@wordpress/compose';
import { addFilter, doAction } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

import assign from 'lodash/assign';

import isValidBlockType from '../helpers/is-valid-blocktype';

export const ContentVisibilityRulesEnabled = withState( {
    rulesEnabled: false,
} )( ( { rulesEnabled, setState, props } ) => (
    <ToggleControl
        label={ props.attributes.contentVisibilityRules.contentVisibilityRulesEnabled ? __( 'Rules Enabled', 'content-visibility' ) : __( 'Rules Disabled', 'content-visibility' ) }
        checked={ props.attributes.contentVisibilityRules.contentVisibilityRulesEnabled || rulesEnabled }
        onChange={ ( rulesEnabled ) => setState( ( state ) => {

            let newBVRules = { ...props.attributes.contentVisibilityRules };
            newBVRules.contentVisibilityRulesEnabled = rulesEnabled;

            props.setAttributes( {
                contentVisibilityRules: newBVRules,
            } );

            // Fire an action so we can see what's happened in other controls. This can be useful,
            // for example when setting rules for roles - pointless if a user isn't signed in.
            doAction( 'contentVisibility.onChange.contentVisibilityRulesEnabled', 'content-visibility/onChange', rulesEnabled, props );

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
export function addContentVisibilityRulesEnabledAttribute( settings ) {

	// If this is a valid block
	if ( isValidBlockType( settings.name ) ) {

		// Use Lodash's assign to gracefully handle if attributes are undefined
		settings.attributes = assign( settings.attributes, {
			contentVisibilityRulesEnabled: {
				type: 'boolean',
			},
		} );
	}

	return settings;

}// end addContentVisibilityRulesEnabledAttribute()

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
export function addContentVisibilityRulesEnabledPropOnSave( extraProps, blockType, attributes ) {

	// If the current block is valid, add our prop.
	if ( isValidBlockType( blockType.name ) ) {
		extraProps.contentVisibilityRulesEnabled = attributes.contentVisibilityRulesEnabled;
    }

	return extraProps;

}// end addContentVisibilityRulesEnabledPropOnSave()

/**
 * Add a custom class name to each block that has content visibility rules enabled.
 *
 * @param {Object} BlockListBlock The current block
 *
 * @return {Object} The block with a custom class name added if the block has rules enabled. The unmodified block otherwise.
 */
const withCustomClassName = createHigherOrderComponent( ( BlockListBlock ) => {

    return ( props ) => {

        if ( ! props.attributes.contentVisibility ) {
            return <BlockListBlock {...props} />;
        }

        let iconClassName = 'content-visibility-rules-enabled-' + props.attributes.contentVisibility;

        return <BlockListBlock {...props} className={ iconClassName } />

    };
}, 'withCustomClassName' );

addFilter( 'blocks.registerBlockType', 'content-visibility/addContentVisibilityRulesEnabledAttribute', addContentVisibilityRulesEnabledAttribute, 999 );
addFilter( 'blocks.getSaveContent.extraProps', 'content-visibility/addContentVisibilityRulesEnabledPropOnSave', addContentVisibilityRulesEnabledPropOnSave, 999 );

addFilter( 'editor.BlockListBlock', 'content-visibility/add-class-name-for-blocks-with-rules', withCustomClassName, 999 );