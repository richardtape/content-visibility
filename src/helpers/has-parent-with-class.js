/**
 * Is the passed element a child of an element that has a class of the passed parentClassName.
 * From: https://codepen.io/ross-angus/pen/eYJRmZR
 *
 * @param {object} element The name of the block.
 * @param {string} parentClassName the name of the class on the parent to check for.
 */
function hasParentWithClass( element, classname ) {

    // SVGs are weird, man.
    if ( typeof element.className !== 'object' && element.className.split(' ').indexOf(classname) >= 0 ) {
        return true;
    } else if ( element.tagName !== 'HTML' ) { // If you've reached the body, you've gone too far
        return element.parentNode && hasParentWithClass( element.parentNode, classname );
    } else {
        return false;
    }

}//end hasParentWithClass()

export default hasParentWithClass;