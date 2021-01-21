import { __ } from '@wordpress/i18n';

/**
 * PHP sends through a list of all the posts on the site (in any status). We massage that data to be
 * usable by our Dropdown.
 *
 */
function getPosts() {

    const posts = [];

    if ( ContentVisibility.posts.length === 0 ) {
        return [ {
            label: __( 'No posts found.', 'content-visibility' ),
            value: 0,
            notes: '',
        } ]
    }

    for ( const post in ContentVisibility.posts ) {
    
        posts.push( { 
            label: ContentVisibility.posts[post].label,
            value: ContentVisibility.posts[post].id,
            notes: ContentVisibility.posts[post].notes
        } );
    
    }

    return posts;

}// end getPosts()

export default getPosts;