import { PanelBody, PanelRow, Slot } from '@wordpress/components';
import { createHigherOrderComponent } from '@wordpress/compose';
import { Fragment } from '@wordpress/element';
import { addFilter, applyFilters } from '@wordpress/hooks';
import { InspectorControls } from '@wordpress/blockEditor';
import { __ } from '@wordpress/i18n';

import assign from 'lodash/assign';

import { ContentVisibilityRulesEnabled } from './content-visibility-rules-enabled';
import { ContentVisibilityDisplayedControl } from './content-visibility-displayed-control';

import isValidBlockType from '../helpers/is-valid-blocktype';

export const contentVisibilityControls = createHigherOrderComponent((BlockEdit) => {

    return (props) => {

        if (!isValidBlockType(props.name) || !props.isSelected) {
            return <BlockEdit {...props} />;
        }

        // Add a class to the div contining the rules so we can show/hide them when they are enabled/disabled.
        // Normally this would be props.attributes.contentVisibilityRules for anything registered in core, or in JS. However, as it's
        // possible to register attributes in PHP _alone_ we need to look at props.block.attributes.contentVisibilityRules -- both
        // get updated when a block is updated.
        let showControls = (props.attributes.contentVisibilityRules.contentVisibilityRulesEnabled) ? 'show-controls' : 'hide-controls';

        return (
            <Fragment>
                <BlockEdit {...props} />
                <InspectorControls>
                    <PanelBody title={__('Visibility', 'content-visibility')} className="content-visibility-controls" initialOpen={false}>

                        <PanelRow className="content-visibility-rules-enabled">
                            <ContentVisibilityRulesEnabled props={props} />
                        </PanelRow>

                        <div className={showControls + " content-visibility-controls-container"}>
                            <PanelRow className="content-visibility-displayed-control">
                                <ContentVisibilityDisplayedControl props={props} />
                            </PanelRow>

                            <Slot name="content-visibility-extra-controls" fillProps={props} />
                        </div>

                    </PanelBody>
                </InspectorControls>
            </Fragment>
        );

    };
}, 'contentVisibilityControls');

addFilter('editor.BlockEdit', 'content-visibility/content-visibility-controls', contentVisibilityControls);

/**
 * Filters registered block settings, extending attributes with our custom data.
 *
 * @param {Object} settings Original block settings.
 *
 * @return {Object} Filtered block settings.
 */
export function addContentVisibilityRulesAttribute(settings) {

    // If this is a valid block
    if (isValidBlockType(settings.name)) {

        // Run the rules through a filter so we're able to add rules externally.
        let defaultRules = applyFilters('contentVisibility.defaultContentVisibilityRules', {
            contentVisibilityRulesEnabled: false,
            userAuthenticated: ''
        });

        // Use Lodash's assign to gracefully handle if attributes are undefined
        settings.attributes = assign(settings.attributes, {
            contentVisibilityRules: {
                type: 'object',
                default: defaultRules
            },
        });
    }

    return settings;

}// end addContentVisibilityRulesAttribute()

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
export function addContentVisibilityRulesPropOnSave(extraProps, blockType, attributes) {

    // If the current block is valid, add our prop.
    if (isValidBlockType(blockType.name)) {
        extraProps.contentVisibilityRules = attributes.contentVisibilityRules;
    }

    return extraProps;

}// end addContentVisibilityRulesPropOnSave()

addFilter('blocks.registerBlockType', 'content-visibility/addContentVisibilityRulesAttribute', addContentVisibilityRulesAttribute);
addFilter('blocks.getSaveContent.extraProps', 'content-visibility/addContentVisibilityRulesPropOnSave', addContentVisibilityRulesPropOnSave);