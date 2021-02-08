import { Button, Popover, Icon, HorizontalRule, IconButton } from '@wordpress/components';
import { withState } from '@wordpress/compose';
import getSpecialPages from '../../helpers/get-special-pages';
import keepPopupOpen from '../../helpers/keep-popup-open';
import { __ } from '@wordpress/i18n';

import specialPagesInsertText from '../../helpers/special-page-insert-text';
import specialPagesInsertButtonClass from '../../helpers/special-pages-insert-button-class';

import { ContentVisibilityMultiSelect } from '../multiselect/content-visibility-multiselect';

const SpecialPagePageInserter = withState( {
    isVisible: false,
} )( ( { isVisible, setState, props } ) => {

    /**
     * A list of special pages, their associated title and icon are passed in from PHP as ContentVisibility.specialPages
     * We manipulate this associative PHP array (which in turn becomes a JS object) into something usable for our dropdown.
     */
    const specialPages = getSpecialPages();

    /**
     * This controls the key used where the data is stored.
     */
    const type = 'specialPages';

    /**
     * Helps with the content of the inserter button.
     */
    const niceName = {
        singular: __( 'Special Page', 'content-visibility' ),
        plural: __( 'Special Pages', 'content-visibility' ),
    }

    /**
     * Toggle the visible state. Detemines whether the popup is open or not.
     */
    const toggleVisible = () => {
        setState( ( state ) => ( { isVisible: ! state.isVisible } ) );
    };

    return (
        <div className="content-visibility-special-page-inserter">
            <Icon icon="text-page" iconSize="12" />
            <Button isSecondary isSmall isLink onClick={ toggleVisible } className={ specialPagesInsertButtonClass( props, type ) }>
                { specialPagesInsertText( props, type, __( 'Select special pages', 'content-visibility' ), niceName ) }
                { isVisible && (
                    <Popover position="middle left" className="content-visibility-special-page-help-instructions-popover" onClick={keepPopupOpen}>

                        <h1>{ __( 'Insert Special Pages', 'content-visibility' ) }</h1>

                        <p className="content-visibility-help-text">{ __( 'Select the special pages upon which you would like this block to be ', 'content-visibility' ) + props.attributes.contentVisibility }</p>
                        <ContentVisibilityMultiSelect data={ specialPages } labelledBy="Select Page Type" props={ props } type={ type } />
                        <p className="content-visibility-submit-special-pages-button-container">
                            <Button isPrimary className="content-visibility-submit-special-pages" onClick={toggleVisible}>{ __( 'Set Selected', 'content-visibility' ) }</Button>
                        </p>

                        <HorizontalRule />

                        <p><Icon icon="editor-help" iconSize="12" /> <strong>{ __( 'What are Special Pages?', 'content-visibility' ) }</strong></p>
                        <p>{ __( 'By default, WordPress websites contain more than just the posts and pages you create here in the dashboard. Content Visibility allows you to display your blocks on any of the following types of pages that your theme can make available to your visitors. ', 'content-visibility-special-page' ) }</p>

                        { specialPages.map( specialPage => (
                            <p><span>{ specialPage.label }</span>: { specialPage.notes }</p>
                        ) ) }

                        <IconButton className="content-visibility-close-popover" icon="no" label={ __( 'Close', 'content-visibility' ) } onClick={ toggleVisible } />
                    </Popover>
                ) }
            </Button>
        </div>
    );
} );

export default SpecialPagePageInserter;