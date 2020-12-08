/**
 * Is the passed block name one which supports our custom field?
 *
 * @param {string} name The name of the block.
 */
function isValidBlockType( name ) {

    const validBlockTypes = [
        'core/paragraph',
        'core/image',
        'core/heading',
    ];

    return validBlockTypes.includes( name );

}// end isValidBlockType()

export default isValidBlockType;