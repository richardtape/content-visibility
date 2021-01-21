import { PanelBody, PanelRow } from '@wordpress/components';
import { withState } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';
import { addFilter } from '@wordpress/hooks';

import SpecialPagePageInserter from './content-visibility-special-page-page-inserter';
import PagePageInserter from './content-visibility-page-page-inserter';
import PostPageInserter from './content-visibility-post-page-inserter';

export const ContentVisibilitySpecialPagePanelBodyControl = withState( {
    option: [],
} )( ( { option, setState, props } ) => {

    return (
        <PanelBody
            title={ __( 'Special Page', 'content-visibility' ) }
            initialOpen={ false }
            className="content-visibility-control-panel block-visibility-special-page-controls"
        >

            <PanelRow className="content-visibility-page-inserter-panel-row">
                <SpecialPagePageInserter props={ props } />
                <PagePageInserter props={ props } />
                <PostPageInserter props={ props } />
            </PanelRow>

            { props.attributes.contentVisibility && (
                <p className="special-page-help-intro content-visibility-help-text">
                    { __( 'Select the types of content upon which this block will be ' + props.attributes.contentVisibility + '.', 'content-visibility' ) }
                </p>
            ) }

        </PanelBody>
    );

} );

// Register our visibility rule in the main rules object.
addFilter( 'contentVisibility.defaultContentVisibilityRules', 'content-visibility-special-page/block-visibility-rules', registerSpecialPageVisibilityRule );

function registerSpecialPageVisibilityRule( defaultRules ) {

    defaultRules.specialPage = {
        pages: [],
        specialPages: [],
        posts: []
    };

    return defaultRules;

}