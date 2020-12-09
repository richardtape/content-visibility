/**
 * Is the passed block name one which supports our custom field?
 *
 * @param {string} name The name of the block.
 */
function isValidBlockType( name ) {

    const invalidBlockTypes = [
        'something/unsupported',
    ];

    return ! invalidBlockTypes.includes( name );

}// end isValidBlockType()

export default isValidBlockType;