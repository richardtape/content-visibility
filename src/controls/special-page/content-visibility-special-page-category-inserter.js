import { Button, Popover, Icon, HorizontalRule, IconButton } from '@wordpress/components';
import { withState } from '@wordpress/compose';
import getCategories from '../../helpers/get-categories';
import keepPopupOpen from '../../helpers/keep-popup-open';
import { __ } from '@wordpress/i18n';

import specialPagesInsertText from '../../helpers/special-page-insert-text';
import specialPagesInsertButtonClass from '../../helpers/special-pages-insert-button-class';

import { ContentVisibilityMultiSelect } from '../multiselect/content-visibility-multiselect';

const CategoryPageInserter = withState( {
    isVisible: false,
} )( ( { isVisible, setState, props } ) => {

    /**
     * Our data, passed from PHP and manipulated to be useful here in JS.
     */
    const data = getCategories();

    /**
     * This controls the key used where the data is stored.
     */
    const type = 'categories';

    /**
     * Helps with the content of the inserter button.
     */
    const niceName = {
        singular: __( 'Category', 'content-visibility' ),
        plural: __( 'Categories', 'content-visibility' ),
    }

    /**
     * Toggle the visible state. Detemines whether the popup is open or not.
     */
    const toggleVisible = () => {
        setState( ( state ) => ( { isVisible: ! state.isVisible } ) );
    };

    return (
        <div className="content-visibility-special-page-inserter">
            <Icon icon="category" iconSize="12" />
            <Button isSecondary isSmall isLink onClick={ toggleVisible } className={ specialPagesInsertButtonClass( props, type ) }>
                { specialPagesInsertText( props, type, __( 'Select specific categories', 'content-visibility' ), niceName ) }
                { isVisible && (
                    <Popover position="middle left" className="content-visibility-special-page-help-instructions-popover" onClick={keepPopupOpen}>

                        <h1>{ __( 'Select Categories', 'content-visibility' ) }</h1>

                        <p className="content-visibility-help-text">{ __( 'Select the categories upon which you would like this block to be ', 'content-visibility' ) + props.attributes.contentVisibility }</p>
                        <ContentVisibilityMultiSelect data={ data } labelledBy="Select Category" props={ props } type={ type } />
                        <p className="content-visibility-submit-categories-button-container">
                            <Button isPrimary className="content-visibility-submit-categories" onClick={toggleVisible}>{ __( 'Set Selected', 'content-visibility' ) }</Button>
                        </p>

                        <HorizontalRule />

                        <p><Icon icon="editor-help" iconSize="12" /> <strong>{ __( 'Help', 'content-visibility' ) }</strong></p>
                        <p>{ __( `Selecting one or more categories from this list will mean that this block will only be ${props.attributes.contentVisibility} when the post being viewed is in that category. If you want this block to be ${props.attributes.contentVisibility} on ALL categories, please use the 'Special Pages' option and select 'Any Category'`, 'content-visibility' ) }</p>

                        <IconButton className="content-visibility-close-popover" icon="no" label={ __( 'Close', 'content-visibility' ) } onClick={ toggleVisible } />
                    </Popover>
                ) }
            </Button>
        </div>
    );
} );

export default CategoryPageInserter;