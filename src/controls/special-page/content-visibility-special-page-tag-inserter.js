import { Button, Popover, Icon, HorizontalRule } from '@wordpress/components';
import { withState } from '@wordpress/compose';
import getTags from '../../helpers/get-tags';
import keepPopupOpen from '../../helpers/keep-popup-open';
import { __ } from '@wordpress/i18n';

import specialPagesInsertText from '../../helpers/special-page-insert-text';
import specialPagesInsertButtonClass from '../../helpers/special-pages-insert-button-class';

import { ContentVisibilityMultiSelect } from '../multiselect/content-visibility-multiselect';

const TagPageInserter = withState( {
    isVisible: false,
} )( ( { isVisible, setState, props } ) => {

    /**
     * Our data, passed from PHP and manipulated to be useful here in JS.
     */
    const data = getTags();

    /**
     * This controls the key used where the data is stored.
     */
    const type = 'tags';

    /**
     * Helps with the content of the inserter button.
     */
    const niceName = {
        singular: __( 'Tag', 'content-visibility' ),
        plural: __( 'Tags', 'content-visibility' ),
    }

    /**
     * Toggle the visible state. Detemines whether the popup is open or not.
     */
    const toggleVisible = () => {
        setState( ( state ) => ( { isVisible: ! state.isVisible } ) );
    };

    return (
        <div className="content-visibility-special-page-inserter">
            <Icon icon="tag" iconSize="12" />
            <Button isSecondary isSmall isLink onClick={ toggleVisible } className={ specialPagesInsertButtonClass( props, type ) }>
                { specialPagesInsertText( props, type, __( 'Select specific tags', 'content-visibility' ), niceName ) }
                { isVisible && (
                    <Popover position="middle left" className="content-visibility-special-page-help-instructions-popover" onClick={keepPopupOpen}>

                        <h1>{ __( 'Select Tags', 'content-visibility' ) }</h1>

                        <p className="content-visibility-help-text">{ __( 'Select the tags upon which you would like this block to be ', 'content-visibility' ) + props.attributes.contentVisibility }</p>
                        <ContentVisibilityMultiSelect data={ data } labelledBy="Select Tag" props={ props } type={ type } />
                        <p className="content-visibility-submit-tags-button-container">
                            <Button isPrimary className="content-visibility-submit-tags" onClick={toggleVisible}>{ __( 'Set Selected', 'content-visibility' ) }</Button>
                        </p>

                        <HorizontalRule />

                        <p><Icon icon="editor-help" iconSize="12" /> <strong>{ __( 'Help', 'content-visibility' ) }</strong></p>
                        <p>{ __( `Selecting one or more tags from this list will mean that this block will only be ${props.attributes.contentVisibility} when the post being viewed is in that tag. If you want this block to be ${props.attributes.contentVisibility} on ALL tags, please use the 'Special Pages' option and select 'Any tag'`, 'content-visibility' ) }</p>

                        <Button className="content-visibility-close-popover" icon="no" label={ __( 'Close', 'content-visibility' ) } onClick={ toggleVisible } />
                    </Popover>
                ) }
            </Button>
        </div>
    );
} );

export default TagPageInserter;