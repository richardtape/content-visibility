import { PanelBody, PanelRow, Slot } from '@wordpress/components';
import { createHigherOrderComponent } from '@wordpress/compose';
import { Fragment } from '@wordpress/element';
import { addFilter, applyFilters } from '@wordpress/hooks';
import { InspectorControls } from '@wordpress/blockEditor';
import { __ } from '@wordpress/i18n';

import { ToolbarGroup, ToolbarButton, Icon, Dropdown, Button } from '@wordpress/components';
import { BlockControls } from '@wordpress/blockEditor';

import assign from 'lodash/assign';

import { ContentVisibilityRulesEnabled } from './content-visibility-rules-enabled';
import { ContentVisibilityDisplayedControl } from './content-visibility-displayed-control';

import isValidBlockType from '../helpers/is-valid-blocktype';

let shownIcon = function() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M9.973 18h4.054c.132-1.202.745-2.194 1.74-3.277.113-.122.832-.867.917-.973a6 6 0 1 0-9.37-.002c.086.107.807.853.918.974.996 1.084 1.609 2.076 1.741 3.278zM14 20h-4v1h4v-1zm-8.246-5a8 8 0 1 1 12.49.002C17.624 15.774 16 17 16 18.5V21a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2.5C8 17 6.375 15.774 5.754 15zM13 10.004h2.5l-4.5 6v-4H8.5L13 6v4.005z"/></svg>
    );
};

let hiddenIcon = function() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M9.973 18H11v-5h2v5h1.027c.132-1.202.745-2.194 1.74-3.277.113-.122.832-.867.917-.973a6 6 0 1 0-9.37-.002c.086.107.807.853.918.974.996 1.084 1.609 2.076 1.741 3.278zM10 20v1h4v-1h-4zm-4.246-5a8 8 0 1 1 12.49.002C17.624 15.774 16 17 16 18.5V21a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2.5C8 17 6.375 15.774 5.754 15z"/></svg>
    );
}

export const contentVisibilityControls = createHigherOrderComponent((BlockEdit) => {

    return (props) => {

        if ( ! isValidBlockType( props.name ) || ! props.attributes.contentVisibilityRules ) {
            return <BlockEdit {...props} />;
        }

        // Add a class to the div contining the rules so we can show/hide them when they are enabled/disabled.
        // Normally this would be props.attributes.contentVisibilityRules for anything registered in core, or in JS. However, as it's
        // possible to register attributes in PHP _alone_ we need to look at props.block.attributes.contentVisibilityRules -- both
        // get updated when a block is updated.
        let showControls = (props.attributes.contentVisibilityRules.contentVisibilityRulesEnabled) ? 'show-controls' : 'hide-controls';

        if ( props.attributes.contentVisibilityRules.contentVisibilityRulesEnabled ) {

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
                    <BlockControls>
                        <ToolbarGroup>
                            <Dropdown
                                className="my-container-class-name"
                                contentClassName="content-visibility-toolbar-dropdown"
                                position="bottom right"
                                renderToggle={ ( { isOpen, onToggle } ) => (
                                    <ToolbarButton
                                        icon={
                                            ( props.attributes.contentVisibility === 'shown' ) ? shownIcon : hiddenIcon
                                        }
                                        label="Content Visibility"
                                        onClick={ onToggle }
                                    />
                                ) }
                                renderContent={ () => {
                                    return (
                                        <Fragment>
                                            <p><strong>{ __( 'Content Visibility Rules', 'content-visibility' ) }</strong></p>
                                            <p>This block has content visibility rules which means this block will be {props.attributes.contentVisibility} under specific circumstances.</p>
                                            <Button variant="link">View Rules</Button>
                                        </Fragment>
                                    );
                                } }
                            />
                        </ToolbarGroup>
                    </BlockControls>
                </Fragment>
            );

        } else {

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

        }        

    };
}, 'contentVisibilityControls');

addFilter( 'editor.BlockEdit', 'content-visibility/content-visibility-controls', contentVisibilityControls );

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

addFilter( 'blocks.registerBlockType', 'content-visibility/addContentVisibilityRulesAttribute', addContentVisibilityRulesAttribute );
addFilter( 'blocks.getSaveContent.extraProps', 'content-visibility/addContentVisibilityRulesPropOnSave', addContentVisibilityRulesPropOnSave );



/* -------------- 

const ContentVisibilityPluginBlockSettingsMenuItem = () => (
    <PluginBlockSettingsMenuItem
        allowedBlocks={ [ 'core/paragraph' ] }
        icon="smiley"
        label="Menu item text"
        onClick={ () => {
            console.log( [wp.data.select( 'core/block-editor' ).getSelectedBlock()] );
        } }
    />
);
 
registerPlugin( 'block-settings-menu-group-test', {
    render: ContentVisibilityPluginBlockSettingsMenuItem,
} );

-------------- */
