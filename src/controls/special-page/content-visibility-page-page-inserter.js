import { Button, Popover, Icon, HorizontalRule, IconButton } from '@wordpress/components';
import { withState } from '@wordpress/compose';
import getPages from '../../helpers/get-pages';
import keepPopupOpen from '../../helpers/keep-popup-open';
import { __ } from '@wordpress/i18n';

import specialPagesInsertText from '../../helpers/special-page-insert-text';
import specialPagesInsertButtonClass from '../../helpers/special-pages-insert-button-class';

import { ContentVisibilityMultiSelect } from '../multiselect/content-visibility-multiselect';

const PagePageInserter = withState( {
    isVisible: false,
} )( ( { isVisible, setState, props } ) => {

    /**
     * Our data, passed from PHP and manipulated to be useful here in JS.
     */
    const data = getPages();

    /**
     * This controls the key used where the data is stored.
     */
    const type = 'pages';

    /**
     * Toggle the visible state. Detemines whether the popup is open or not.
     */
    const toggleVisible = () => {
        setState( ( state ) => ( { isVisible: ! state.isVisible } ) );
    };

    return (
        <div className="content-visibility-special-page-inserter">
            <Icon icon="networking" iconSize="12" />
            <Button isSecondary isSmall isLink onClick={ toggleVisible } className={ specialPagesInsertButtonClass( props, type ) }>
                { specialPagesInsertText( props, type, __( 'Select specific pages', 'content-visibility' ) ) }
                { isVisible && (
                    <Popover position="middle left" className="content-visibility-special-page-help-instructions-popover" onClick={keepPopupOpen}>

                        <h1>{ __( 'Select Pages', 'content-visibility' ) }</h1>

                        <p className="content-visibility-help-text">{ __( 'Select the pages upon which you would like this block to be ', 'content-visibility' ) + props.attributes.contentVisibility }</p>
                        <ContentVisibilityMultiSelect data={ data } labelledBy="Select Page" props={ props } type={ type } />
                        <p className="content-visibility-submit-special-pages-button-container">
                            <Button isPrimary className="content-visibility-submit-special-pages" onClick={toggleVisible}>{ __( 'Set Selected', 'content-visibility' ) }</Button>
                        </p>

                        <HorizontalRule />

                        <p><Icon icon="editor-help" iconSize="12" /> <strong>{ __( 'Help', 'content-visibility' ) }</strong></p>
                        <p>{ __( `Selecting one or more pages from this list will mean that this block will only be ${props.attributes.contentVisibility} on those pages. If you want this block to be ${props.attributes.contentVisibility} on ALL pages, please use the 'Special Pages' option and select 'Any Page'`, 'content-visibility' ) }</p>

                        <IconButton className="content-visibility-close-popover" icon="no" label={ __( 'Close', 'content-visibility' ) } onClick={ toggleVisible } />
                    </Popover>
                ) }
            </Button>
        </div>
    );
} );

export default PagePageInserter;