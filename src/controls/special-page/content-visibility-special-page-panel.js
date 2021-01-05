import { PanelBody, PanelRow, Icon } from '@wordpress/components';
import { withState } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';
import { addFilter } from '@wordpress/hooks';

import { ContentVisibilityMultiSelect } from '../multiselect/content-visibility-multiselect';

const CloseIcon = () => (
    <Icon
        icon={ () => (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
        ) }
    />
);

const fruits = [
    { label: "Search Results", value: "search", icon: <Icon size="12" icon="search" /> },
    { label: "404 Not Found", value: "404", icon: <Icon size="12" icon="no" /> },
    { label: "Date Archive", value: "date", icon: <Icon size="12" icon="calendar-alt" /> },
    { label: "Category Archive", value: "category", icon: <Icon size="12" icon="category" /> },
    { label: "Tag Archive", value: "tag", icon: <Icon size="12" icon="tag" /> },
    { label: "Front Page", value: "front-page", icon: <Icon size="12" icon="slides" /> },
    { label: "Home", value: "home", icon: <Icon size="12" icon="admin-home" /> },
    { label: "Blog Home", value: "blog", icon: <Icon size="12" icon="welcome-write-blog" /> },
    { label: "Any Post", value: "post", icon: <Icon size="12" icon="admin-post" /> },
    { label: "Any Page", value: "page", icon: <Icon size="12" icon="admin-page" /> },
];

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
                <ContentVisibilityMultiSelect data={ fruits } labelledBy="Select Page Type" props={ props } onChange={ onChange } />
            </PanelRow>

            { props.attributes.contentVisibility && (
                <p className="special-page-help-intro content-visibility-help-text">
                    { __( 'Select which types of pages this block will be ' + props.attributes.contentVisibility + '. Special pages include a search results page, a date or category archive, or the 404 not found page amongst others.', 'content-visibility-special-page' ) }
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