import MultiSelect from "react-multi-select-component";
import { withState } from '@wordpress/compose';

/**
 * Reusable, accessible multi-select component which includes a fuzzy search, select all/none using the react-multi-select-component
 * by Harsh Zalavadiya : https://github.com/harshzalavadiya/react-multi-select-component#readme.
 *
 * I've expanded it slightly, by allowing the data passed in to accept an `icon` property which should be a WordPress Icon compnent.
 *
 * Requires passing in the onChange function to handle data saving. i.e. import this component and then use it like:
 *
 * ```
 * <ContentVisibilityMultiSelect data={ fruits } labelledBy="Select Page Type" props={ props } onChange={ onChange } />
 * ```
 *
 * the `onChange` function can look like this:
 *
 * ```
 * const onChange = ( option ) => {
 *     // Set the state and props.
 *     setState( { option } );
 *     props.setAttributes( {
 *         contentVisibilityRules: {
 *             ...props.attributes.contentVisibilityRules,
 *             specialPage: {
 *                 ...props.attributes.contentVisibilityRules.specialPage,
 *                 pages: option
 *             }
 *         },
 *     } );
 *
 * }
 * ```
 *
 * `data` should be an array of objects which contains label (string), a value (string) and an optional icon (WordPress Icon compnent)
 */

export const ContentVisibilityMultiSelect = withState( {
    option: [],
} )( ( { option, setState, props, data, labelledBy, type } ) => {

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
                    [type]: option
                }
            },
        } );

    };

    return (
        <div className="content-visibility-multi-select">
            <MultiSelect
                options={ data }
                value={ props.attributes.contentVisibilityRules.specialPage[type] || option }
                onChange={ onChange }
                labelledBy={ labelledBy }
                ItemRenderer={ ( { checked, option, onClick, disabled, } ) => {
                    return (
                        <div className={`item-renderer content-visibility-multi-select-item ${disabled && "disabled"}`}>
                            <input type="checkbox" onChange={ onClick } checked={ checked } tabIndex={ -1 } disabled={ disabled } />
                            <span>{option.icon || ""} {option.label}</span>
                        </div>
                    );
                } }
                // isOpen={ true }
            />
        </div>
    );

} );