import { Button, Popover, Icon, HorizontalRule } from '@wordpress/components';
import { withState } from '@wordpress/compose';
import getPosts from '../../helpers/get-posts';
import keepPopupOpen from '../../helpers/keep-popup-open';
import { __ } from '@wordpress/i18n';

import specialPagesInsertText from '../../helpers/special-page-insert-text';
import specialPagesInsertButtonClass from '../../helpers/special-pages-insert-button-class';

import { ContentVisibilityMultiSelect } from '../multiselect/content-visibility-multiselect';

const PostPageInserter = withState( {
    isVisible: false,
} )( ( { isVisible, setState, props } ) => {

    /**
     * Our data, passed from PHP and manipulated to be useful here in JS.
     */
    const data = getPosts();

    /**
     * This controls the key used where the data is stored.
     */
    const type = 'posts';

    /**
     * Helps with the content of the inserter button.
     */
    const niceName = {
        singular: __( 'Post', 'content-visibility' ),
        plural: __( 'Posts', 'content-visibility' ),
    }

    /**
     * Toggle the visible state. Detemines whether the popup is open or not.
     */
    const toggleVisible = () => {
        setState( ( state ) => ( { isVisible: ! state.isVisible } ) );
    };

    return (
        <div className="content-visibility-special-page-inserter">
            <Icon icon="admin-post" iconSize="12" />
            <Button isSecondary isSmall isLink onClick={ toggleVisible } className={ specialPagesInsertButtonClass( props, type ) }>
                { specialPagesInsertText( props, type, __( 'Select specific posts', 'content-visibility' ), niceName ) }
                { isVisible && (
                    <Popover position="middle left" className="content-visibility-special-page-help-instructions-popover" onClick={keepPopupOpen}>

                        <h1>{ __( 'Select Posts', 'content-visibility' ) }</h1>

                        <p className="content-visibility-help-text">{ __( 'Select the posts upon which you would like this block to be ', 'content-visibility' ) + props.attributes.contentVisibility }</p>
                        <ContentVisibilityMultiSelect data={ data } labelledBy="Select Page" props={ props } type={ type } />
                        <p className="content-visibility-submit-special-pages-button-container">
                            <Button isPrimary className="content-visibility-submit-special-pages" onClick={toggleVisible}>{ __( 'Set Selected', 'content-visibility' ) }</Button>
                        </p>

                        <HorizontalRule />

                        <p><Icon icon="editor-help" iconSize="12" /> <strong>{ __( 'Help', 'content-visibility' ) }</strong></p>
                        <p>{ __( `Selecting one or more posts from this list will mean that this block will only be ${props.attributes.contentVisibility} on those posts. If you want this block to be ${props.attributes.contentVisibility} on ALL posts, please use the 'Special Pages' option and select 'Any Post'`, 'content-visibility' ) }</p>

                        <Button className="content-visibility-close-popover" icon="no" label={ __( 'Close', 'content-visibility' ) } onClick={ toggleVisible } />
                    </Popover>
                ) }
            </Button>
        </div>
    );
} );

export default PostPageInserter;