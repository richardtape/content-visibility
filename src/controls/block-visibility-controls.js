import { PanelBody, PanelRow, RadioControl } from '@wordpress/components';
import { createHigherOrderComponent, withState } from '@wordpress/compose';
import { Fragment } from '@wordpress/element';
import { addFilter, applyFilters } from '@wordpress/hooks';
import { InspectorControls } from '@wordpress/blockEditor';
import { __ } from '@wordpress/i18n';

import isValidBlockType from '../helpers/is-valid-blocktype';
import { BlockVisibilityDisplayedControl } from './block-visibility-displayed-control';

export const blockVisibilityControls = createHigherOrderComponent( ( BlockEdit ) => {

    return ( props ) => {

        if ( ! isValidBlockType( props.name ) || ! props.isSelected ) {
            return <BlockEdit { ...props } />;
        }

        return (
            <Fragment>
                <BlockEdit { ...props } />
                <InspectorControls>
                    <PanelBody
                        title={ __( 'Visibility', 'block-visibility' ) }
                        initialOpen={ false }
                        className="block-visibility-controls"
                    >
                        <PanelRow className="block-visibility-displayed-control">
                            <BlockVisibilityDisplayedControl props={ props } />
                        </PanelRow>
                        <PanelRow>
                            { applyFilters( 'blockVisibility.panelRow', '', props ) }
                        </PanelRow>
                    </PanelBody>
                </InspectorControls>
            </Fragment>
        );

    };
}, 'blockVisibilityControls' );

addFilter( 'editor.BlockEdit', 'block-visibility/block-visibility-controls', blockVisibilityControls );