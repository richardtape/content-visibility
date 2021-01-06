import { PanelBody, PanelRow, Icon, Button, Popover } from '@wordpress/components';
import { withState } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';
import { addFilter } from '@wordpress/hooks';
import getSpecialPages from '../../helpers/get-special-pages';

import { ContentVisibilityMultiSelect } from '../multiselect/content-visibility-multiselect';

/**
 * A list of special pages, their associated title and icon are passed in from PHP as ContentVisibility.specialPages
 * We manipulate this associative PHP array (which in turn becomes a JS object) into something usable for our dropdown.
 */
const specialPages = getSpecialPages();

const SpecialPageHelpInstructions = withState( {
    isVisible: false,
} )( ( { isVisible, setState } ) => {
    const toggleVisible = () => {
        setState( ( state ) => ( { isVisible: ! state.isVisible } ) );
    };
    return (
        <Button isSecondary isSmall isTertiary icon="editor-help" iconSize="12" onClick={ toggleVisible } className="content-visibility-special-page-help-instructions-toggle">
            { __( 'What are Special Pages?',  'content-visibility-special-page' ) }
            { isVisible && (
                <Popover position="middle left" className="content-visibility-special-page-help-instructions-popover">
                    <h1>What are special pages?</h1>
                    <p>By default, WordPress websites contain more than just the posts and pages you create here in the dashboard. Content Visibility allows you to display your blocks on any of the following types of pages that your theme can make available to your visitors.</p>

                    { specialPages.map( specialPage => (
                        <p><span>{ specialPage.label }</span>: { specialPage.notes }</p>
                    ) ) }
                </Popover>
            ) }
        </Button>
    );
} );

export const ContentVisibilitySpecialPagePanelBodyControl = withState( {
    option: [],
} )( ( { option, setState, props } ) => {

    /**
     * onChange callback for the ContentVisibilityMultiSelect component. This handles setting the props and state for
     * this instance of the component.
     * 
     * @param {array} option current value of what is selected.
     */
    const onChange = ( option ) => {

        // Set the state and props.
        setState( { option } );

        props.setAttributes( {
            contentVisibilityRules: {
                ...props.attributes.contentVisibilityRules,
                specialPage: {
                    ...props.attributes.contentVisibilityRules.specialPage,
                    pages: option
                }
            },
        } );

    }

    return (
        <PanelBody
            title={ __( 'Special Page', 'content-visibility' ) }
            initialOpen={ false }
            className="content-visibility-control-panel block-visibility-special-page-controls"
        >
            <PanelRow>
                <ContentVisibilityMultiSelect data={ specialPages } labelledBy="Select Page Type" props={ props } onChange={ onChange } />
            </PanelRow>

            { props.attributes.contentVisibility && (
                <p className="special-page-help-intro content-visibility-help-text">
                    { __( 'Select which types of pages upon which this block will be ' + props.attributes.contentVisibility + '. Special pages include a search results page, a date or category archive, or the 404 not found page amongst others.', 'content-visibility-special-page' ) }
                    { <SpecialPageHelpInstructions /> }
                </p>
            ) }

        </PanelBody>
    );

} );

// Register our visibility rule in the main rules object.
addFilter( 'contentVisibility.defaultContentVisibilityRules', 'content-visibility-special-page/block-visibility-rules', registerSpecialPageVisibilityRule );

function registerSpecialPageVisibilityRule( defaultRules ) {

    defaultRules.specialPage = {
        pages: []
    };

    return defaultRules;

}