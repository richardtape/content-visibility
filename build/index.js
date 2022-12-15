/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/controls/content-visibility-controls.js":
/*!*****************************************************!*\
  !*** ./src/controls/content-visibility-controls.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addContentVisibilityRulesAttribute": () => (/* binding */ addContentVisibilityRulesAttribute),
/* harmony export */   "addContentVisibilityRulesPropOnSave": () => (/* binding */ addContentVisibilityRulesPropOnSave),
/* harmony export */   "contentVisibilityControls": () => (/* binding */ contentVisibilityControls)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blockEditor */ "@wordpress/blockEditor");
/* harmony import */ var _wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/assign */ "./node_modules/lodash/assign.js");
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_assign__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _content_visibility_rules_enabled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./content-visibility-rules-enabled */ "./src/controls/content-visibility-rules-enabled.js");
/* harmony import */ var _content_visibility_displayed_control__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./content-visibility-displayed-control */ "./src/controls/content-visibility-displayed-control.js");
/* harmony import */ var _helpers_is_valid_blocktype__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../helpers/is-valid-blocktype */ "./src/helpers/is-valid-blocktype.js");













let shownIcon = function () {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "24",
    height: "24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M9.973 18h4.054c.132-1.202.745-2.194 1.74-3.277.113-.122.832-.867.917-.973a6 6 0 1 0-9.37-.002c.086.107.807.853.918.974.996 1.084 1.609 2.076 1.741 3.278zM14 20h-4v1h4v-1zm-8.246-5a8 8 0 1 1 12.49.002C17.624 15.774 16 17 16 18.5V21a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2.5C8 17 6.375 15.774 5.754 15zM13 10.004h2.5l-4.5 6v-4H8.5L13 6v4.005z"
  }));
};
let hiddenIcon = function () {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "24",
    height: "24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M9.973 18H11v-5h2v5h1.027c.132-1.202.745-2.194 1.74-3.277.113-.122.832-.867.917-.973a6 6 0 1 0-9.37-.002c.086.107.807.853.918.974.996 1.084 1.609 2.076 1.741 3.278zM10 20v1h4v-1h-4zm-4.246-5a8 8 0 1 1 12.49.002C17.624 15.774 16 17 16 18.5V21a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2.5C8 17 6.375 15.774 5.754 15z"
  }));
};
const contentVisibilityControls = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.createHigherOrderComponent)(BlockEdit => {
  return props => {
    if (!(0,_helpers_is_valid_blocktype__WEBPACK_IMPORTED_MODULE_9__["default"])(props.name)) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props);
    }

    // Add a class to the div contining the rules so we can show/hide them when they are enabled/disabled.
    // Normally this would be props.attributes.contentVisibilityRules for anything registered in core, or in JS. However, as it's
    // possible to register attributes in PHP _alone_ we need to look at props.block.attributes.contentVisibilityRules -- both
    // get updated when a block is updated.
    let showControls = props.attributes.contentVisibilityRules.contentVisibilityRulesEnabled ? 'show-controls' : 'hide-controls';
    if (props.attributes.contentVisibilityRules.contentVisibilityRulesEnabled) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_4__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Visibility', 'content-visibility'),
        className: "content-visibility-controls",
        initialOpen: false
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, {
        className: "content-visibility-rules-enabled"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_content_visibility_rules_enabled__WEBPACK_IMPORTED_MODULE_7__.ContentVisibilityRulesEnabled, {
        props: props
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: showControls + " content-visibility-controls-container"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, {
        className: "content-visibility-displayed-control"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_content_visibility_displayed_control__WEBPACK_IMPORTED_MODULE_8__.ContentVisibilityDisplayedControl, {
        props: props
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Slot, {
        name: "content-visibility-extra-controls",
        fillProps: props
      })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_4__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarGroup, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dropdown, {
        className: "my-container-class-name",
        contentClassName: "content-visibility-toolbar-dropdown",
        position: "bottom right",
        renderToggle: _ref => {
          let {
            isOpen,
            onToggle
          } = _ref;
          return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarButton, {
            icon: props.attributes.contentVisibility === 'shown' ? shownIcon : hiddenIcon,
            label: "Content Visibility",
            onClick: onToggle
          });
        },
        renderContent: () => {
          return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Content Visibility Rules', 'content-visibility'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "This block has content visibility rules which means this block will be ", props.attributes.contentVisibility, " under specific circumstances."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
            variant: "link"
          }, "View Rules"));
        }
      }))));
    } else {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_4__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Visibility', 'content-visibility'),
        className: "content-visibility-controls",
        initialOpen: false
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, {
        className: "content-visibility-rules-enabled"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_content_visibility_rules_enabled__WEBPACK_IMPORTED_MODULE_7__.ContentVisibilityRulesEnabled, {
        props: props
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: showControls + " content-visibility-controls-container"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, {
        className: "content-visibility-displayed-control"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_content_visibility_displayed_control__WEBPACK_IMPORTED_MODULE_8__.ContentVisibilityDisplayedControl, {
        props: props
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Slot, {
        name: "content-visibility-extra-controls",
        fillProps: props
      })))));
    }
  };
}, 'contentVisibilityControls');
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.addFilter)('editor.BlockEdit', 'content-visibility/content-visibility-controls', contentVisibilityControls);

/**
 * Filters registered block settings, extending attributes with our custom data.
 *
 * @param {Object} settings Original block settings.
 *
 * @return {Object} Filtered block settings.
 */
function addContentVisibilityRulesAttribute(settings) {
  // If this is a valid block
  if ((0,_helpers_is_valid_blocktype__WEBPACK_IMPORTED_MODULE_9__["default"])(settings.name)) {
    // Run the rules through a filter so we're able to add rules externally.
    let defaultRules = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.applyFilters)('contentVisibility.defaultContentVisibilityRules', {
      contentVisibilityRulesEnabled: false,
      userAuthenticated: ''
    });

    // Use Lodash's assign to gracefully handle if attributes are undefined
    settings.attributes = lodash_assign__WEBPACK_IMPORTED_MODULE_6___default()(settings.attributes, {
      contentVisibilityRules: {
        type: 'object',
        default: defaultRules
      }
    });
  }
  return settings;
} // end addContentVisibilityRulesAttribute()

/**
 * Override props assigned to save component to inject our custom data.
 * This is only done if the component is a valid block type.
 *
 * @param {Object} extraProps Additional props applied to save element.
 * @param {Object} blockType  Block type.
 * @param {Object} attributes Current block attributes.
 *
 * @return {Object} Filtered props applied to save element.
 */
function addContentVisibilityRulesPropOnSave(extraProps, blockType, attributes) {
  // If the current block is valid, add our prop.
  if ((0,_helpers_is_valid_blocktype__WEBPACK_IMPORTED_MODULE_9__["default"])(blockType.name)) {
    extraProps.contentVisibilityRules = attributes.contentVisibilityRules;
  }
  return extraProps;
} // end addContentVisibilityRulesPropOnSave()

(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.addFilter)('blocks.registerBlockType', 'content-visibility/addContentVisibilityRulesAttribute', addContentVisibilityRulesAttribute);
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.addFilter)('blocks.getSaveContent.extraProps', 'content-visibility/addContentVisibilityRulesPropOnSave', addContentVisibilityRulesPropOnSave);

/* -------------- 

const ContentVisibilityPluginBlockSettingsMenuItem = () => (
    <PluginBlockSettingsMenuItem
        allowedBlocks={ [ 'core/paragraph' ] }
        icon="smiley"
        label="Menu item text"
        onClick={ () => {
            console.log( [wp.data.select( 'core/block-editor' ).getSelectedBlock()] );
        } }
    />
);
 
registerPlugin( 'block-settings-menu-group-test', {
    render: ContentVisibilityPluginBlockSettingsMenuItem,
} );

-------------- */

/***/ }),

/***/ "./src/controls/content-visibility-displayed-control.js":
/*!**************************************************************!*\
  !*** ./src/controls/content-visibility-displayed-control.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentVisibilityDisplayedControl": () => (/* binding */ ContentVisibilityDisplayedControl),
/* harmony export */   "addBlockVisibilityPropOnSave": () => (/* binding */ addBlockVisibilityPropOnSave),
/* harmony export */   "addContentVisibilityAttribute": () => (/* binding */ addContentVisibilityAttribute)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/assign */ "./node_modules/lodash/assign.js");
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_assign__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shown_or_hidden_content_visibility_shown_hidden_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shown-or-hidden/content-visibility-shown-hidden-control */ "./src/controls/shown-or-hidden/content-visibility-shown-hidden-control.js");
/* harmony import */ var _helpers_is_valid_blocktype__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/is-valid-blocktype */ "./src/helpers/is-valid-blocktype.js");








const ContentVisibilityDisplayedControl = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.withState)({
  option: ''
})(_ref => {
  let {
    option,
    setState,
    props
  } = _ref;
  let rulesEnabled = props.attributes.contentVisibilityRules.contentVisibilityRulesEnabled;
  if (!rulesEnabled) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Disabled, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_shown_or_hidden_content_visibility_shown_hidden_control__WEBPACK_IMPORTED_MODULE_6__.ContentVisibilityShownHiddenControl, {
      props: props
    }));
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_shown_or_hidden_content_visibility_shown_hidden_control__WEBPACK_IMPORTED_MODULE_6__.ContentVisibilityShownHiddenControl, {
    props: props
  });
});

/**
 * Filters registered block settings, extending attributes with our custom data.
 *
 * @param {Object} settings Original block settings.
 *
 * @return {Object} Filtered block settings.
 */
function addContentVisibilityAttribute(settings) {
  // If this is a valid block
  if ((0,_helpers_is_valid_blocktype__WEBPACK_IMPORTED_MODULE_7__["default"])(settings.name)) {
    // Use Lodash's assign to gracefully handle if attributes are undefined
    settings.attributes = lodash_assign__WEBPACK_IMPORTED_MODULE_5___default()(settings.attributes, {
      contentVisibility: {
        type: 'string'
      }
    });
  }
  return settings;
} // end addContentVisibilityAttribute()

/**
 * Override props assigned to save component to inject our custom data.
 * This is only done if the component is a valid block type.
 *
 * @param {Object} extraProps Additional props applied to save element.
 * @param {Object} blockType  Block type.
 * @param {Object} attributes Current block attributes.
 *
 * @return {Object} Filtered props applied to save element.
 */
function addBlockVisibilityPropOnSave(extraProps, blockType, attributes) {
  // If the current block is valid, add our prop.
  if ((0,_helpers_is_valid_blocktype__WEBPACK_IMPORTED_MODULE_7__["default"])(blockType.name)) {
    extraProps.contentVisibility = attributes.contentVisibility;
  }
  return extraProps;
} // end addBlockVisibilityPropOnSave()

(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.addFilter)('blocks.registerBlockType', 'content-visibility/addContentVisibilityAttribute', addContentVisibilityAttribute);
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.addFilter)('blocks.getSaveContent.extraProps', 'content-visibility/addBlockVisibilityPropOnSave', addBlockVisibilityPropOnSave);

/***/ }),

/***/ "./src/controls/content-visibility-rules-enabled.js":
/*!**********************************************************!*\
  !*** ./src/controls/content-visibility-rules-enabled.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentVisibilityRulesEnabled": () => (/* binding */ ContentVisibilityRulesEnabled),
/* harmony export */   "addContentVisibilityRulesEnabledAttribute": () => (/* binding */ addContentVisibilityRulesEnabledAttribute),
/* harmony export */   "addContentVisibilityRulesEnabledPropOnSave": () => (/* binding */ addContentVisibilityRulesEnabledPropOnSave)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/assign */ "./node_modules/lodash/assign.js");
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_assign__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _helpers_is_valid_blocktype__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/is-valid-blocktype */ "./src/helpers/is-valid-blocktype.js");








const ContentVisibilityRulesEnabled = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.withState)({
  rulesEnabled: false
})(_ref => {
  let {
    rulesEnabled,
    setState,
    props
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: props.attributes.contentVisibilityRules.contentVisibilityRulesEnabled ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Rules Enabled', 'content-visibility') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Rules Disabled', 'content-visibility'),
    checked: props.attributes.contentVisibilityRules.contentVisibilityRulesEnabled || rulesEnabled,
    onChange: rulesEnabled => setState(state => {
      let newBVRules = {
        ...props.attributes.contentVisibilityRules
      };
      newBVRules.contentVisibilityRulesEnabled = rulesEnabled;
      props.setAttributes({
        contentVisibilityRules: newBVRules
      });

      // Fire an action so we can see what's happened in other controls. This can be useful,
      // for example when setting rules for roles - pointless if a user isn't signed in.
      (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.doAction)('contentVisibility.onChange.contentVisibilityRulesEnabled', 'content-visibility/onChange', rulesEnabled, props);

      // Sets the state
      return {
        rulesEnabled: !state.rulesEnabled
      };
    })
  });
});

/**
 * Filters registered block settings, extending attributes with our custom data.
 *
 * @param {Object} settings Original block settings.
 *
 * @return {Object} Filtered block settings.
 */
function addContentVisibilityRulesEnabledAttribute(settings) {
  // If this is a valid block
  if ((0,_helpers_is_valid_blocktype__WEBPACK_IMPORTED_MODULE_7__["default"])(settings.name)) {
    // Use Lodash's assign to gracefully handle if attributes are undefined
    settings.attributes = lodash_assign__WEBPACK_IMPORTED_MODULE_6___default()(settings.attributes, {
      contentVisibilityRulesEnabled: {
        type: 'boolean'
      }
    });
  }
  return settings;
} // end addContentVisibilityRulesEnabledAttribute()

/**
 * Override props assigned to save component to inject our custom data.
 * This is only done if the component is a valid block type.
 *
 * @param {Object} extraProps Additional props applied to save element.
 * @param {Object} blockType  Block type.
 * @param {Object} attributes Current block attributes.
 *
 * @return {Object} Filtered props applied to save element.
 */
function addContentVisibilityRulesEnabledPropOnSave(extraProps, blockType, attributes) {
  // If the current block is valid, add our prop.
  if ((0,_helpers_is_valid_blocktype__WEBPACK_IMPORTED_MODULE_7__["default"])(blockType.name)) {
    extraProps.contentVisibilityRulesEnabled = attributes.contentVisibilityRulesEnabled;
  }
  return extraProps;
} // end addContentVisibilityRulesEnabledPropOnSave()

/**
 * Add a custom class name to each block that has content visibility rules enabled.
 *
 * @param {Object} BlockListBlock The current block
 *
 * @return {Object} The block with a custom class name added if the block has rules enabled. The unmodified block otherwise.
 */
const withCustomClassName = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.createHigherOrderComponent)(BlockListBlock => {
  return props => {
    if (!props.attributes.contentVisibility || !props.attributes.contentVisibilityRules.contentVisibilityRulesEnabled) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockListBlock, props);
    }
    let iconClassName = 'content-visibility-rules-enabled-' + props.attributes.contentVisibility;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockListBlock, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      className: iconClassName
    }));
  };
}, 'withCustomClassName');
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.addFilter)('blocks.registerBlockType', 'content-visibility/addContentVisibilityRulesEnabledAttribute', addContentVisibilityRulesEnabledAttribute, 999);
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.addFilter)('blocks.getSaveContent.extraProps', 'content-visibility/addContentVisibilityRulesEnabledPropOnSave', addContentVisibilityRulesEnabledPropOnSave, 999);
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.addFilter)('editor.BlockListBlock', 'content-visibility/add-class-name-for-blocks-with-rules', withCustomClassName, 999);

/***/ }),

/***/ "./src/controls/content-visibility-user-authentication.js":
/*!****************************************************************!*\
  !*** ./src/controls/content-visibility-user-authentication.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentVisibilityUserAuthenticationControl": () => (/* binding */ ContentVisibilityUserAuthenticationControl)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _user_authentication_user_authentication_panel_body_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-authentication/user-authentication-panel-body-control */ "./src/controls/user-authentication/user-authentication-panel-body-control.js");






const ContentVisibilityUserAuthenticationControl = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.withState)({
  option: ''
})(_ref => {
  let {
    option,
    setState,
    props
  } = _ref;
  let rulesEnabled = props.attributes.contentVisibilityRules.contentVisibilityRulesEnabled;
  let contentVisibility = props.attributes.hasOwnProperty('contentVisibility');
  if (!rulesEnabled || !contentVisibility) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Disabled, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_user_authentication_user_authentication_panel_body_control__WEBPACK_IMPORTED_MODULE_5__.ContentVisibilityUserAuthenticationPanelBodyControl, {
      props: props
    }));
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_user_authentication_user_authentication_panel_body_control__WEBPACK_IMPORTED_MODULE_5__.ContentVisibilityUserAuthenticationPanelBodyControl, {
    props: props
  });
});

/**
 * Render the <ContentVisibilityUserAuthenticationControl> component by adding
 * it to the block-visibility-extra-controls Fill.
 *
 * @return {Object} A Fill component wrapping the ContentVisibilityUserAuthenticationControl component.
 */
function BlockVisibilityUserAuthenitcationFill() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Fill, {
    name: "content-visibility-extra-controls"
  }, fillProps => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ContentVisibilityUserAuthenticationControl, {
      props: fillProps
    });
  });
}

// Add our component to the Slot provided by BlockVisibilityControls
(0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_4__.registerPlugin)('content-visibility-01-user-authentication-fill', {
  render: BlockVisibilityUserAuthenitcationFill
});

/***/ }),

/***/ "./src/controls/multiselect/content-visibility-multiselect.js":
/*!********************************************************************!*\
  !*** ./src/controls/multiselect/content-visibility-multiselect.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentVisibilityMultiSelect": () => (/* binding */ ContentVisibilityMultiSelect)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_multi_select_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-multi-select-component */ "./node_modules/react-multi-select-component/dist/esm/index.js");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);




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

const ContentVisibilityMultiSelect = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.withState)({
  option: []
})(_ref => {
  let {
    option,
    setState,
    props,
    data,
    labelledBy,
    type
  } = _ref;
  /**
   * onChange callback for the ContentVisibilityMultiSelect component. This handles setting the props and state for
   * this instance of the component.
   * 
   * @param {array} option current value of what is selected.
   */
  const onChange = option => {
    // Set the state and props.
    setState({
      option
    });
    props.setAttributes({
      contentVisibilityRules: {
        ...props.attributes.contentVisibilityRules,
        specialPage: {
          ...props.attributes.contentVisibilityRules.specialPage,
          [type]: option
        }
      }
    });
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "content-visibility-multi-select"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_multi_select_component__WEBPACK_IMPORTED_MODULE_1__.MultiSelect, {
    options: data,
    value: props.attributes.contentVisibilityRules.specialPage[type] || option,
    onChange: onChange,
    labelledBy: labelledBy,
    ItemRenderer: _ref2 => {
      let {
        checked,
        option,
        onClick,
        disabled
      } = _ref2;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: `item-renderer content-visibility-multi-select-item ${disabled && "disabled"}`
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
        type: "checkbox",
        onChange: onClick,
        checked: checked,
        tabIndex: -1,
        disabled: disabled
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, option.icon || "", " ", option.label));
    }
    // isOpen={ true }
  }));
});

/***/ }),

/***/ "./src/controls/shown-or-hidden/content-visibility-shown-hidden-control.js":
/*!*********************************************************************************!*\
  !*** ./src/controls/shown-or-hidden/content-visibility-shown-hidden-control.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentVisibilityShownHiddenControl": () => (/* binding */ ContentVisibilityShownHiddenControl)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);




const ContentVisibilityShownHiddenControl = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.withState)({
  option: ''
})(_ref => {
  let {
    option,
    setState,
    props
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Show or Hide', 'content-visibility-user-role'),
    initialOpen: true,
    className: "content-visibility-control-panel content-visibility-user-role-controls"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RadioControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("When the rules below are true, this block will be: ", 'content-visibility'),
    help: "",
    selected: props.attributes.contentVisibility || option,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Shown', 'content-visibility'),
      value: 'shown'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Hidden', 'content-visibility'),
      value: 'hidden'
    }],
    onChange: option => {
      setState({
        option
      });
      props.setAttributes({
        contentVisibility: option
      });
    }
  })));
});

/***/ }),

/***/ "./src/controls/special-page/content-visibility-page-page-inserter.js":
/*!****************************************************************************!*\
  !*** ./src/controls/special-page/content-visibility-page-page-inserter.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_get_pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/get-pages */ "./src/helpers/get-pages.js");
/* harmony import */ var _helpers_keep_popup_open__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/keep-popup-open */ "./src/helpers/keep-popup-open.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_special_page_insert_text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/special-page-insert-text */ "./src/helpers/special-page-insert-text.js");
/* harmony import */ var _helpers_special_pages_insert_button_class__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/special-pages-insert-button-class */ "./src/helpers/special-pages-insert-button-class.js");
/* harmony import */ var _multiselect_content_visibility_multiselect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../multiselect/content-visibility-multiselect */ "./src/controls/multiselect/content-visibility-multiselect.js");









const PagePageInserter = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.withState)({
  isVisible: false
})(_ref => {
  let {
    isVisible,
    setState,
    props
  } = _ref;
  /**
   * Our data, passed from PHP and manipulated to be useful here in JS.
   */
  const data = (0,_helpers_get_pages__WEBPACK_IMPORTED_MODULE_3__["default"])();

  /**
   * This controls the key used where the data is stored.
   */
  const type = 'pages';

  /**
   * Helps with the content of the inserter button.
   */
  const niceName = {
    singular: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Page', 'content-visibility'),
    plural: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Pages', 'content-visibility')
  };

  /**
   * Toggle the visible state. Detemines whether the popup is open or not.
   */
  const toggleVisible = () => {
    setState(state => ({
      isVisible: !state.isVisible
    }));
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "content-visibility-special-page-inserter"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    icon: "networking",
    iconSize: "12"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    isSecondary: true,
    isSmall: true,
    isLink: true,
    onClick: toggleVisible,
    className: (0,_helpers_special_pages_insert_button_class__WEBPACK_IMPORTED_MODULE_7__["default"])(props, type)
  }, (0,_helpers_special_page_insert_text__WEBPACK_IMPORTED_MODULE_6__["default"])(props, type, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Select specific pages', 'content-visibility'), niceName), isVisible && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Popover, {
    position: "middle left",
    className: "content-visibility-special-page-help-instructions-popover",
    onClick: _helpers_keep_popup_open__WEBPACK_IMPORTED_MODULE_4__["default"]
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Select Pages', 'content-visibility')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "content-visibility-help-text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Select the pages upon which you would like this block to be ', 'content-visibility') + props.attributes.contentVisibility), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_multiselect_content_visibility_multiselect__WEBPACK_IMPORTED_MODULE_8__.ContentVisibilityMultiSelect, {
    data: data,
    labelledBy: "Select Page",
    props: props,
    type: type
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "content-visibility-submit-special-pages-button-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    isPrimary: true,
    className: "content-visibility-submit-special-pages",
    onClick: toggleVisible
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Set Selected', 'content-visibility'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.HorizontalRule, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    icon: "editor-help",
    iconSize: "12"
  }), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Help', 'content-visibility'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)(`Selecting one or more pages from this list will mean that this block will only be ${props.attributes.contentVisibility} on those pages. If you want this block to be ${props.attributes.contentVisibility} on ALL pages, please use the 'Special Pages' option and select 'Any Page'`, 'content-visibility')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    className: "content-visibility-close-popover",
    icon: "no",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Close', 'content-visibility'),
    onClick: toggleVisible
  }))));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PagePageInserter);

/***/ }),

/***/ "./src/controls/special-page/content-visibility-post-page-inserter.js":
/*!****************************************************************************!*\
  !*** ./src/controls/special-page/content-visibility-post-page-inserter.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_get_posts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/get-posts */ "./src/helpers/get-posts.js");
/* harmony import */ var _helpers_keep_popup_open__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/keep-popup-open */ "./src/helpers/keep-popup-open.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_special_page_insert_text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/special-page-insert-text */ "./src/helpers/special-page-insert-text.js");
/* harmony import */ var _helpers_special_pages_insert_button_class__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/special-pages-insert-button-class */ "./src/helpers/special-pages-insert-button-class.js");
/* harmony import */ var _multiselect_content_visibility_multiselect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../multiselect/content-visibility-multiselect */ "./src/controls/multiselect/content-visibility-multiselect.js");









const PostPageInserter = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.withState)({
  isVisible: false
})(_ref => {
  let {
    isVisible,
    setState,
    props
  } = _ref;
  /**
   * Our data, passed from PHP and manipulated to be useful here in JS.
   */
  const data = (0,_helpers_get_posts__WEBPACK_IMPORTED_MODULE_3__["default"])();

  /**
   * This controls the key used where the data is stored.
   */
  const type = 'posts';

  /**
   * Helps with the content of the inserter button.
   */
  const niceName = {
    singular: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Post', 'content-visibility'),
    plural: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Posts', 'content-visibility')
  };

  /**
   * Toggle the visible state. Detemines whether the popup is open or not.
   */
  const toggleVisible = () => {
    setState(state => ({
      isVisible: !state.isVisible
    }));
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "content-visibility-special-page-inserter"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    icon: "admin-post",
    iconSize: "12"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    isSecondary: true,
    isSmall: true,
    isLink: true,
    onClick: toggleVisible,
    className: (0,_helpers_special_pages_insert_button_class__WEBPACK_IMPORTED_MODULE_7__["default"])(props, type)
  }, (0,_helpers_special_page_insert_text__WEBPACK_IMPORTED_MODULE_6__["default"])(props, type, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Select specific posts', 'content-visibility'), niceName), isVisible && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Popover, {
    position: "middle left",
    className: "content-visibility-special-page-help-instructions-popover",
    onClick: _helpers_keep_popup_open__WEBPACK_IMPORTED_MODULE_4__["default"]
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Select Posts', 'content-visibility')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "content-visibility-help-text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Select the posts upon which you would like this block to be ', 'content-visibility') + props.attributes.contentVisibility), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_multiselect_content_visibility_multiselect__WEBPACK_IMPORTED_MODULE_8__.ContentVisibilityMultiSelect, {
    data: data,
    labelledBy: "Select Page",
    props: props,
    type: type
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "content-visibility-submit-special-pages-button-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    isPrimary: true,
    className: "content-visibility-submit-special-pages",
    onClick: toggleVisible
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Set Selected', 'content-visibility'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.HorizontalRule, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    icon: "editor-help",
    iconSize: "12"
  }), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Help', 'content-visibility'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)(`Selecting one or more posts from this list will mean that this block will only be ${props.attributes.contentVisibility} on those posts. If you want this block to be ${props.attributes.contentVisibility} on ALL posts, please use the 'Special Pages' option and select 'Any Post'`, 'content-visibility')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    className: "content-visibility-close-popover",
    icon: "no",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Close', 'content-visibility'),
    onClick: toggleVisible
  }))));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostPageInserter);

/***/ }),

/***/ "./src/controls/special-page/content-visibility-special-page-category-inserter.js":
/*!****************************************************************************************!*\
  !*** ./src/controls/special-page/content-visibility-special-page-category-inserter.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_get_categories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/get-categories */ "./src/helpers/get-categories.js");
/* harmony import */ var _helpers_keep_popup_open__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/keep-popup-open */ "./src/helpers/keep-popup-open.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_special_page_insert_text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/special-page-insert-text */ "./src/helpers/special-page-insert-text.js");
/* harmony import */ var _helpers_special_pages_insert_button_class__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/special-pages-insert-button-class */ "./src/helpers/special-pages-insert-button-class.js");
/* harmony import */ var _multiselect_content_visibility_multiselect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../multiselect/content-visibility-multiselect */ "./src/controls/multiselect/content-visibility-multiselect.js");









const CategoryPageInserter = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.withState)({
  isVisible: false
})(_ref => {
  let {
    isVisible,
    setState,
    props
  } = _ref;
  /**
   * Our data, passed from PHP and manipulated to be useful here in JS.
   */
  const data = (0,_helpers_get_categories__WEBPACK_IMPORTED_MODULE_3__["default"])();

  /**
   * This controls the key used where the data is stored.
   */
  const type = 'categories';

  /**
   * Helps with the content of the inserter button.
   */
  const niceName = {
    singular: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Category', 'content-visibility'),
    plural: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Categories', 'content-visibility')
  };

  /**
   * Toggle the visible state. Detemines whether the popup is open or not.
   */
  const toggleVisible = () => {
    setState(state => ({
      isVisible: !state.isVisible
    }));
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "content-visibility-special-page-inserter"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    icon: "category",
    iconSize: "12"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    isSecondary: true,
    isSmall: true,
    isLink: true,
    onClick: toggleVisible,
    className: (0,_helpers_special_pages_insert_button_class__WEBPACK_IMPORTED_MODULE_7__["default"])(props, type)
  }, (0,_helpers_special_page_insert_text__WEBPACK_IMPORTED_MODULE_6__["default"])(props, type, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Select specific categories', 'content-visibility'), niceName), isVisible && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Popover, {
    position: "middle left",
    className: "content-visibility-special-page-help-instructions-popover",
    onClick: _helpers_keep_popup_open__WEBPACK_IMPORTED_MODULE_4__["default"]
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Select Categories', 'content-visibility')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "content-visibility-help-text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Select the categories upon which you would like this block to be ', 'content-visibility') + props.attributes.contentVisibility), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_multiselect_content_visibility_multiselect__WEBPACK_IMPORTED_MODULE_8__.ContentVisibilityMultiSelect, {
    data: data,
    labelledBy: "Select Category",
    props: props,
    type: type
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "content-visibility-submit-categories-button-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    isPrimary: true,
    className: "content-visibility-submit-categories",
    onClick: toggleVisible
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Set Selected', 'content-visibility'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.HorizontalRule, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    icon: "editor-help",
    iconSize: "12"
  }), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Help', 'content-visibility'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)(`Selecting one or more categories from this list will mean that this block will only be ${props.attributes.contentVisibility} when the post being viewed is in that category. If you want this block to be ${props.attributes.contentVisibility} on ALL categories, please use the 'Special Pages' option and select 'Any Category'`, 'content-visibility')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    className: "content-visibility-close-popover",
    icon: "no",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Close', 'content-visibility'),
    onClick: toggleVisible
  }))));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoryPageInserter);

/***/ }),

/***/ "./src/controls/special-page/content-visibility-special-page-controls.js":
/*!*******************************************************************************!*\
  !*** ./src/controls/special-page/content-visibility-special-page-controls.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentVisibilitySpecialPageControls": () => (/* binding */ ContentVisibilitySpecialPageControls)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _content_visibility_special_page_panel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content-visibility-special-page-panel */ "./src/controls/special-page/content-visibility-special-page-panel.js");






const ContentVisibilitySpecialPageControls = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.withState)({
  option: ''
})(_ref => {
  let {
    option,
    setState,
    props
  } = _ref;
  let rulesEnabled = props.attributes.contentVisibilityRules.contentVisibilityRulesEnabled;
  let contentVisibility = props.attributes.hasOwnProperty('contentVisibility');
  if (!rulesEnabled || !contentVisibility) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Disabled, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_content_visibility_special_page_panel__WEBPACK_IMPORTED_MODULE_5__.ContentVisibilitySpecialPagePanelBodyControl, {
      props: props
    }));
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_content_visibility_special_page_panel__WEBPACK_IMPORTED_MODULE_5__.ContentVisibilitySpecialPagePanelBodyControl, {
    props: props
  });
});

/**
 * Render the <ContentVisibilitySpecialPageControls> component by adding
 * it to the block-visibility-extra-controls Fill.
 *
 * @return {Object} A Fill component wrapping the ContentVisibilitySpecialPageControls component.
 */
function ContentVisibilitySpecialPageFill() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Fill, {
    name: "content-visibility-extra-controls"
  }, fillProps => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ContentVisibilitySpecialPageControls, {
      props: fillProps
    });
  });
}

// Only load the Widgets-related controls on the widgets screen or we're local, due to Widgets Screen bug.
if ('appearance_page_gutenberg-widgets' === ContentVisibility.screen || 'widgets' === ContentVisibility.screen || '1' === ContentVisibility.local) {
  // Add our component to the Slot provided by BlockVisibilityControls
  (0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_4__.registerPlugin)('content-visibility-04-special-page-fill', {
    render: ContentVisibilitySpecialPageFill
  });
}

/***/ }),

/***/ "./src/controls/special-page/content-visibility-special-page-page-inserter.js":
/*!************************************************************************************!*\
  !*** ./src/controls/special-page/content-visibility-special-page-page-inserter.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_get_special_pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/get-special-pages */ "./src/helpers/get-special-pages.js");
/* harmony import */ var _helpers_keep_popup_open__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/keep-popup-open */ "./src/helpers/keep-popup-open.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_special_page_insert_text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/special-page-insert-text */ "./src/helpers/special-page-insert-text.js");
/* harmony import */ var _helpers_special_pages_insert_button_class__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/special-pages-insert-button-class */ "./src/helpers/special-pages-insert-button-class.js");
/* harmony import */ var _multiselect_content_visibility_multiselect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../multiselect/content-visibility-multiselect */ "./src/controls/multiselect/content-visibility-multiselect.js");









const SpecialPagePageInserter = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.withState)({
  isVisible: false
})(_ref => {
  let {
    isVisible,
    setState,
    props
  } = _ref;
  /**
   * A list of special pages, their associated title and icon are passed in from PHP as ContentVisibility.specialPages
   * We manipulate this associative PHP array (which in turn becomes a JS object) into something usable for our dropdown.
   */
  const specialPages = (0,_helpers_get_special_pages__WEBPACK_IMPORTED_MODULE_3__["default"])();

  /**
   * This controls the key used where the data is stored.
   */
  const type = 'specialPages';

  /**
   * Helps with the content of the inserter button.
   */
  const niceName = {
    singular: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Special Page', 'content-visibility'),
    plural: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Special Pages', 'content-visibility')
  };

  /**
   * Toggle the visible state. Detemines whether the popup is open or not.
   */
  const toggleVisible = () => {
    setState(state => ({
      isVisible: !state.isVisible
    }));
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "content-visibility-special-page-inserter"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    icon: "text-page",
    iconSize: "12"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    isSecondary: true,
    isSmall: true,
    isLink: true,
    onClick: toggleVisible,
    className: (0,_helpers_special_pages_insert_button_class__WEBPACK_IMPORTED_MODULE_7__["default"])(props, type)
  }, (0,_helpers_special_page_insert_text__WEBPACK_IMPORTED_MODULE_6__["default"])(props, type, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Select special pages', 'content-visibility'), niceName), isVisible && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Popover, {
    position: "middle left",
    className: "content-visibility-special-page-help-instructions-popover",
    onClick: _helpers_keep_popup_open__WEBPACK_IMPORTED_MODULE_4__["default"]
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Insert Special Pages', 'content-visibility')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "content-visibility-help-text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Select the special pages upon which you would like this block to be ', 'content-visibility') + props.attributes.contentVisibility), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_multiselect_content_visibility_multiselect__WEBPACK_IMPORTED_MODULE_8__.ContentVisibilityMultiSelect, {
    data: specialPages,
    labelledBy: "Select Page Type",
    props: props,
    type: type
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "content-visibility-submit-special-pages-button-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    isPrimary: true,
    className: "content-visibility-submit-special-pages",
    onClick: toggleVisible
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Set Selected', 'content-visibility'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.HorizontalRule, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    icon: "editor-help",
    iconSize: "12"
  }), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('What are Special Pages?', 'content-visibility'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('By default, WordPress websites contain more than just the posts and pages you create here in the dashboard. Content Visibility allows you to display your blocks on any of the following types of pages that your theme can make available to your visitors. ', 'content-visibility-special-page')), specialPages.map(specialPage => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, specialPage.label), ": ", specialPage.notes)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    className: "content-visibility-close-popover",
    icon: "no",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Close', 'content-visibility'),
    onClick: toggleVisible
  }))));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SpecialPagePageInserter);

/***/ }),

/***/ "./src/controls/special-page/content-visibility-special-page-panel.js":
/*!****************************************************************************!*\
  !*** ./src/controls/special-page/content-visibility-special-page-panel.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentVisibilitySpecialPagePanelBodyControl": () => (/* binding */ ContentVisibilitySpecialPagePanelBodyControl)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _content_visibility_special_page_page_inserter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content-visibility-special-page-page-inserter */ "./src/controls/special-page/content-visibility-special-page-page-inserter.js");
/* harmony import */ var _content_visibility_page_page_inserter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./content-visibility-page-page-inserter */ "./src/controls/special-page/content-visibility-page-page-inserter.js");
/* harmony import */ var _content_visibility_post_page_inserter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./content-visibility-post-page-inserter */ "./src/controls/special-page/content-visibility-post-page-inserter.js");
/* harmony import */ var _content_visibility_special_page_category_inserter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./content-visibility-special-page-category-inserter */ "./src/controls/special-page/content-visibility-special-page-category-inserter.js");
/* harmony import */ var _content_visibility_special_page_tag_inserter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./content-visibility-special-page-tag-inserter */ "./src/controls/special-page/content-visibility-special-page-tag-inserter.js");
/* harmony import */ var _helpers_has_rules__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../helpers/has-rules */ "./src/helpers/has-rules.js");











const ContentVisibilitySpecialPagePanelBodyControl = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.withState)({
  option: []
})(_ref => {
  let {
    option,
    setState,
    props
  } = _ref;
  let hasRulesClass = (0,_helpers_has_rules__WEBPACK_IMPORTED_MODULE_10__["default"])(props, 'specialPage') ? ' has-active-rules' : '';
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Special Page', 'content-visibility'),
    initialOpen: false,
    className: "content-visibility-control-panel block-visibility-special-page-controls" + hasRulesClass
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, {
    className: "content-visibility-page-inserter-panel-row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_content_visibility_special_page_page_inserter__WEBPACK_IMPORTED_MODULE_5__["default"], {
    props: props
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_content_visibility_page_page_inserter__WEBPACK_IMPORTED_MODULE_6__["default"], {
    props: props
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_content_visibility_post_page_inserter__WEBPACK_IMPORTED_MODULE_7__["default"], {
    props: props
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_content_visibility_special_page_category_inserter__WEBPACK_IMPORTED_MODULE_8__["default"], {
    props: props
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_content_visibility_special_page_tag_inserter__WEBPACK_IMPORTED_MODULE_9__["default"], {
    props: props
  })), props.attributes.contentVisibility && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "special-page-help-intro content-visibility-help-text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Select the types of content upon which this block will be ' + props.attributes.contentVisibility + '.', 'content-visibility')));
});

// Register our visibility rule in the main rules object.
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.addFilter)('contentVisibility.defaultContentVisibilityRules', 'content-visibility-special-page/block-visibility-rules', registerSpecialPageVisibilityRule);
function registerSpecialPageVisibilityRule(defaultRules) {
  defaultRules.specialPage = {
    pages: [],
    specialPages: [],
    posts: [],
    categories: [],
    tags: []
  };
  return defaultRules;
}

/***/ }),

/***/ "./src/controls/special-page/content-visibility-special-page-tag-inserter.js":
/*!***********************************************************************************!*\
  !*** ./src/controls/special-page/content-visibility-special-page-tag-inserter.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_get_tags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/get-tags */ "./src/helpers/get-tags.js");
/* harmony import */ var _helpers_keep_popup_open__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/keep-popup-open */ "./src/helpers/keep-popup-open.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_special_page_insert_text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/special-page-insert-text */ "./src/helpers/special-page-insert-text.js");
/* harmony import */ var _helpers_special_pages_insert_button_class__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/special-pages-insert-button-class */ "./src/helpers/special-pages-insert-button-class.js");
/* harmony import */ var _multiselect_content_visibility_multiselect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../multiselect/content-visibility-multiselect */ "./src/controls/multiselect/content-visibility-multiselect.js");









const TagPageInserter = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.withState)({
  isVisible: false
})(_ref => {
  let {
    isVisible,
    setState,
    props
  } = _ref;
  /**
   * Our data, passed from PHP and manipulated to be useful here in JS.
   */
  const data = (0,_helpers_get_tags__WEBPACK_IMPORTED_MODULE_3__["default"])();

  /**
   * This controls the key used where the data is stored.
   */
  const type = 'tags';

  /**
   * Helps with the content of the inserter button.
   */
  const niceName = {
    singular: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Tag', 'content-visibility'),
    plural: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Tags', 'content-visibility')
  };

  /**
   * Toggle the visible state. Detemines whether the popup is open or not.
   */
  const toggleVisible = () => {
    setState(state => ({
      isVisible: !state.isVisible
    }));
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "content-visibility-special-page-inserter"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    icon: "tag",
    iconSize: "12"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    isSecondary: true,
    isSmall: true,
    isLink: true,
    onClick: toggleVisible,
    className: (0,_helpers_special_pages_insert_button_class__WEBPACK_IMPORTED_MODULE_7__["default"])(props, type)
  }, (0,_helpers_special_page_insert_text__WEBPACK_IMPORTED_MODULE_6__["default"])(props, type, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Select specific tags', 'content-visibility'), niceName), isVisible && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Popover, {
    position: "middle left",
    className: "content-visibility-special-page-help-instructions-popover",
    onClick: _helpers_keep_popup_open__WEBPACK_IMPORTED_MODULE_4__["default"]
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Select Tags', 'content-visibility')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "content-visibility-help-text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Select the tags upon which you would like this block to be ', 'content-visibility') + props.attributes.contentVisibility), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_multiselect_content_visibility_multiselect__WEBPACK_IMPORTED_MODULE_8__.ContentVisibilityMultiSelect, {
    data: data,
    labelledBy: "Select Tag",
    props: props,
    type: type
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "content-visibility-submit-tags-button-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    isPrimary: true,
    className: "content-visibility-submit-tags",
    onClick: toggleVisible
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Set Selected', 'content-visibility'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.HorizontalRule, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    icon: "editor-help",
    iconSize: "12"
  }), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Help', 'content-visibility'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)(`Selecting one or more tags from this list will mean that this block will only be ${props.attributes.contentVisibility} when the post being viewed is in that tag. If you want this block to be ${props.attributes.contentVisibility} on ALL tags, please use the 'Special Pages' option and select 'Any tag'`, 'content-visibility')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    className: "content-visibility-close-popover",
    icon: "no",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Close', 'content-visibility'),
    onClick: toggleVisible
  }))));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TagPageInserter);

/***/ }),

/***/ "./src/controls/user-authentication/content-visibility-user-authentication-radio-control.js":
/*!**************************************************************************************************!*\
  !*** ./src/controls/user-authentication/content-visibility-user-authentication-radio-control.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentVisibilityUserAuthenticationRadioControl": () => (/* binding */ ContentVisibilityUserAuthenticationRadioControl)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__);





const ContentVisibilityUserAuthenticationRadioControl = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.withState)({
  option: ''
})(_ref => {
  let {
    option,
    setState,
    props
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RadioControl, {
    label: "",
    help: "",
    className: "content-visibility-user-authenticated-control",
    selected: props.attributes.contentVisibilityRules.userAuthenticated || option,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Signed Out', 'content-visibility'),
      value: 'logged-out'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Signed In', 'content-visibility'),
      value: 'logged-in'
    }],
    onChange: option => {
      // Set the state and props.
      setState({
        option
      });
      let newBVRules = {
        ...props.attributes.contentVisibilityRules
      };
      newBVRules.userAuthenticated = option;
      props.setAttributes({
        contentVisibilityRules: newBVRules
      });

      // Fire an action so we can see what's happened in other controls. This can be useful,
      // for example when setting rules for roles - pointless if a user isn't signed in.
      (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.doAction)('contentVisibility.onChange.userAuthenticated', 'content-visibility/onChange', option, props);
    }
  });
});

/***/ }),

/***/ "./src/controls/user-authentication/user-authentication-panel-body-control.js":
/*!************************************************************************************!*\
  !*** ./src/controls/user-authentication/user-authentication-panel-body-control.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentVisibilityUserAuthenticationPanelBodyControl": () => (/* binding */ ContentVisibilityUserAuthenticationPanelBodyControl)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _content_visibility_user_authentication_radio_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content-visibility-user-authentication-radio-control */ "./src/controls/user-authentication/content-visibility-user-authentication-radio-control.js");





const ContentVisibilityUserAuthenticationPanelBodyControl = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.withState)({
  option: ''
})(_ref => {
  let {
    option,
    setState,
    props
  } = _ref;
  let hasRulesClass = props.attributes.contentVisibilityRules && props.attributes.contentVisibilityRules.userAuthenticated && props.attributes.contentVisibilityRules.userAuthenticated !== '' ? ' has-active-rules' : '';
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('User Authentication', 'content-visibility'),
    initialOpen: false,
    className: "content-visibility-control-panel content-visibility-user-authenticated-controls" + hasRulesClass
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_content_visibility_user_authentication_radio_control__WEBPACK_IMPORTED_MODULE_4__.ContentVisibilityUserAuthenticationRadioControl, {
    props: props
  }), props.attributes.contentVisibility && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "user-auth-help-intro content-visibility-help-text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Select whether this block will be ' + props.attributes.contentVisibility + ' if a user is signed in to this site. If neither is selected, this block will be ' + props.attributes.contentVisibility + ' regardless of whether a user is signed in or not.', 'content-visibility-user-role'))));
});

/***/ }),

/***/ "./src/helpers/get-categories.js":
/*!***************************************!*\
  !*** ./src/helpers/get-categories.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);


/**
 * PHP sends through a list of all the categories on the site. We massage that data to be
 * usable by our Dropdown.
 *
 */
function getCategories() {
  const categories = [];
  if (ContentVisibility.categories.length === 0) {
    return [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('No categories found.', 'content-visibility'),
      value: 0,
      notes: ''
    }];
  }
  for (const category in ContentVisibility.categories) {
    categories.push({
      label: ContentVisibility.categories[category].label,
      value: ContentVisibility.categories[category].id,
      notes: ContentVisibility.categories[category].notes
    });
  }
  return categories;
} // end getCategories()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCategories);

/***/ }),

/***/ "./src/helpers/get-pages.js":
/*!**********************************!*\
  !*** ./src/helpers/get-pages.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);


/**
 * PHP sends through a list of all the pages on the site (in any status). We massage that data to be
 * usable by our Dropdown.
 *
 */
function getPages() {
  const pages = [];
  if (ContentVisibility.pages.length === 0) {
    return [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('No pages found.', 'content-visibility'),
      value: 0,
      notes: ''
    }];
  }
  for (const page in ContentVisibility.pages) {
    pages.push({
      label: ContentVisibility.pages[page].label,
      value: ContentVisibility.pages[page].id,
      notes: ContentVisibility.pages[page].notes
    });
  }
  return pages;
} // end getPages()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getPages);

/***/ }),

/***/ "./src/helpers/get-posts.js":
/*!**********************************!*\
  !*** ./src/helpers/get-posts.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);


/**
 * PHP sends through a list of all the posts on the site (in any status). We massage that data to be
 * usable by our Dropdown.
 *
 */
function getPosts() {
  const posts = [];
  if (ContentVisibility.posts.length === 0) {
    return [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('No posts found.', 'content-visibility'),
      value: 0,
      notes: ''
    }];
  }
  for (const post in ContentVisibility.posts) {
    posts.push({
      label: ContentVisibility.posts[post].label,
      value: ContentVisibility.posts[post].id,
      notes: ContentVisibility.posts[post].notes
    });
  }
  return posts;
} // end getPosts()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getPosts);

/***/ }),

/***/ "./src/helpers/get-special-pages.js":
/*!******************************************!*\
  !*** ./src/helpers/get-special-pages.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



/**
 * A list of special pages, their associated title and icon are passed in from PHP as ContentVisibility.specialPages
 * We manipulate this associative PHP array (which in turn becomes a JS object) into something usable for our dropdown.
 *
 */
function getSpecialPages() {
  const specialPages = [];
  for (const specialPage in ContentVisibility.specialPages) {
    specialPages.push({
      label: ContentVisibility.specialPages[specialPage].label,
      value: ContentVisibility.specialPages[specialPage].keyValue,
      notes: ContentVisibility.specialPages[specialPage].notes,
      icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {
        size: "12",
        icon: ContentVisibility.specialPages[specialPage].icon
      })
    });
  }
  return specialPages;
} // end getSpecialPages()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getSpecialPages);

/***/ }),

/***/ "./src/helpers/get-tags.js":
/*!*********************************!*\
  !*** ./src/helpers/get-tags.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);


/**
 * PHP sends through a list of all the tags on the site. We massage that data to be
 * usable by our Dropdown.
 *
 */
function getTags() {
  const tags = [];
  if (ContentVisibility.tags.length === 0) {
    return [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('No tags found.', 'content-visibility'),
      value: 0,
      notes: ''
    }];
  }
  for (const tag in ContentVisibility.tags) {
    tags.push({
      label: ContentVisibility.tags[tag].label,
      value: ContentVisibility.tags[tag].id,
      notes: ContentVisibility.tags[tag].notes
    });
  }
  return tags;
} // end getTags()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTags);

/***/ }),

/***/ "./src/helpers/has-parent-with-class.js":
/*!**********************************************!*\
  !*** ./src/helpers/has-parent-with-class.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Is the passed element a child of an element that has a class of the passed parentClassName.
 * From: https://codepen.io/ross-angus/pen/eYJRmZR
 *
 * @param {object} element The name of the block.
 * @param {string} parentClassName the name of the class on the parent to check for.
 */
function hasParentWithClass(element, classname) {
  // SVGs are weird, man.
  if (typeof element.className !== 'object' && element.className.split(' ').indexOf(classname) >= 0) {
    return true;
  } else if (element.tagName !== 'HTML') {
    // If you've reached the body, you've gone too far
    return element.parentNode && hasParentWithClass(element.parentNode, classname);
  } else {
    return false;
  }
} //end hasParentWithClass()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hasParentWithClass);

/***/ }),

/***/ "./src/helpers/has-rules.js":
/*!**********************************!*\
  !*** ./src/helpers/has-rules.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Determine if the passed block props contain rules of the passed type.
 *
 * @param {object} props The currently selected block's props.
 * @param {string} type The type of the rules i.e. userAuthenticated or specialPage (or ones from add-ons).
 *
 * @return {bool} true if the passed props contain non-empty rules of the passed type. False otherwise.
 */
function hasRules(props, type) {
  if (!props.attributes.contentVisibilityRules) {
    return false;
  }
  if (!props.attributes.contentVisibilityRules[type]) {
    return false;
  }

  // Default to false. Passed through a filter later.
  let hasRules = false;
  switch (type) {
    case 'userAuthenticated':
      if (props.attributes.contentVisibilityRules[type] !== '') {
        hasRules = true;
      }
      break;
    case 'specialPage':
      let allSpecialPageRules = props.attributes.contentVisibilityRules.specialPage;

      // If *any* of the special pages contains rules, then this is true. Is an array of arrays.
      let specialPageRulesValues = Object.values(allSpecialPageRules);

      // if any of the arrays in specialPageRulesValues is non-empty then we have SOME rules.
      hasRules = specialPageRulesValues.some(function (el) {
        return el.length > 0;
      });
      break;
    default:
      break;
  }
  return (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.applyFilters)('content-visibility-has-rules', hasRules, props, type);
} // end hasRules()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hasRules);

/***/ }),

/***/ "./src/helpers/is-valid-blocktype.js":
/*!*******************************************!*\
  !*** ./src/helpers/is-valid-blocktype.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Is the passed block name one which supports our custom field?
 *
 * @param {string} name The name of the block.
 */
function isValidBlockType(name) {
  const invalidBlockTypes = ['something/unsupported'];
  return !invalidBlockTypes.includes(name);
} // end isValidBlockType()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isValidBlockType);

/***/ }),

/***/ "./src/helpers/keep-popup-open.js":
/*!****************************************!*\
  !*** ./src/helpers/keep-popup-open.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _has_parent_with_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./has-parent-with-class */ "./src/helpers/has-parent-with-class.js");


/**
 * The Popup component closes if it loses focus by default. For us, we want to ensure it
 * stays open until someone intentially closes it via either setting the selected items,
 * pressing a close button, or clicking the button they initially used to open the popup.
 *
 * @param {event} event The click event.
 * @return null
 */
const keepPopupOpen = event => {
  if (false === event) {
    return;
  }

  // Determine if what has been clicked on is in the popover or not.
  let eTarget = event.target;
  if ((0,_has_parent_with_class__WEBPACK_IMPORTED_MODULE_0__["default"])(eTarget, 'components-popover__content')) {
    event.stopPropagation();
  }
  return;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (keepPopupOpen);

/***/ }),

/***/ "./src/helpers/special-page-insert-text.js":
/*!*************************************************!*\
  !*** ./src/helpers/special-page-insert-text.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Determine the text for the button which opens the popup for the special pages inserter. By default, if there are
 * no special pages selected, it will be 'Select special pages'. However, if there are special pages set, it will
 * say how many.
 *
 * @param object props the props for this current iteration of the inserter.
 * @param string type the key in the object data store for specialPages
 * @param string defaultVal the original, default, text for the button (which is shown we no special pages are selected)
 * @param object niceName the text-friendly versions of the type of special page. i.e. "Special Pages" as opposed to 'special-page'.
 *                        object contains a singular and plural property.
 * @return string the text to be used for the button.
 */
const specialPagesInsertText = (props, type, defaultVal, niceName) => {
  // if nothing is set, return a prompt to select special pages.
  if (props.attributes.contentVisibilityRules.specialPage[type] === undefined || props.attributes.contentVisibilityRules.specialPage[type].length === 0) {
    return defaultVal;
  }
  let shownOrHidden = props.attributes.contentVisibility;
  let specialPages = props.attributes.contentVisibilityRules.specialPage[type];
  let specialPagesCount = specialPages.length;
  let niceType = specialPagesCount === 1 ? niceName.singular : niceName.plural;
  let insertText = shownOrHidden + (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(' on ') + specialPagesCount + ' ' + niceType;
  return insertText;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (specialPagesInsertText);

/***/ }),

/***/ "./src/helpers/special-pages-insert-button-class.js":
/*!**********************************************************!*\
  !*** ./src/helpers/special-pages-insert-button-class.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * The class which is given to the button used to toggle the popover where people can select which content to select.
 * We add a 'has-items' class if someone has chosen at least one item.
 *
 * @return string
 */
const specialPagesInsertButtonClass = (props, type) => {
  // If we don't have any items selected, just basic class.
  if (props.attributes.contentVisibilityRules.specialPage[type] === undefined || props.attributes.contentVisibilityRules.specialPage[type].length === 0) {
    return 'content-visibility-special-page-inserter-toggle';
  }

  // We have some items selected, so we have a couple classes.
  return 'content-visibility-special-page-inserter-toggle has-items';
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (specialPagesInsertButtonClass);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _controls_content_visibility_controls_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controls/content-visibility-controls.js */ "./src/controls/content-visibility-controls.js");
/* harmony import */ var _controls_content_visibility_user_authentication__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controls/content-visibility-user-authentication */ "./src/controls/content-visibility-user-authentication.js");
/* harmony import */ var _controls_special_page_content_visibility_special_page_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controls/special-page/content-visibility-special-page-controls */ "./src/controls/special-page/content-visibility-special-page-controls.js");






/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_apply.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_apply.js ***!
  \***************************************/
/***/ ((module) => {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "./node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "./node_modules/lodash/_assignValue.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_assignValue.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ "./node_modules/lodash/_baseAssignValue.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseAssignValue.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js");

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "./node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_baseKeys.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseKeys.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ "./node_modules/lodash/_nativeKeys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseRest.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js"),
    overRest = __webpack_require__(/*! ./_overRest */ "./node_modules/lodash/_overRest.js"),
    setToString = __webpack_require__(/*! ./_setToString */ "./node_modules/lodash/_setToString.js");

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),

/***/ "./node_modules/lodash/_baseSetToString.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseSetToString.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var constant = __webpack_require__(/*! ./constant */ "./node_modules/lodash/constant.js"),
    defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js"),
    identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js");

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "./node_modules/lodash/_copyObject.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_copyObject.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js");

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "./node_modules/lodash/_createAssigner.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_createAssigner.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseRest = __webpack_require__(/*! ./_baseRest */ "./node_modules/lodash/_baseRest.js"),
    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ "./node_modules/lodash/_isIterateeCall.js");

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),

/***/ "./node_modules/lodash/_defineProperty.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_defineProperty.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

module.exports = freeGlobal;


/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "./node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "./node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "./node_modules/lodash/_isIterateeCall.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_isIterateeCall.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "./node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_nativeKeys.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;


/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "./node_modules/lodash/_overRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_overRest.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var apply = __webpack_require__(/*! ./_apply */ "./node_modules/lodash/_apply.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_setToString.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setToString.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseSetToString = __webpack_require__(/*! ./_baseSetToString */ "./node_modules/lodash/_baseSetToString.js"),
    shortOut = __webpack_require__(/*! ./_shortOut */ "./node_modules/lodash/_shortOut.js");

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),

/***/ "./node_modules/lodash/_shortOut.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_shortOut.js ***!
  \******************************************/
/***/ ((module) => {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "./node_modules/lodash/assign.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/assign.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    createAssigner = __webpack_require__(/*! ./_createAssigner */ "./node_modules/lodash/_createAssigner.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns own enumerable string keyed properties of source objects to the
 * destination object. Source objects are applied from left to right.
 * Subsequent sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object` and is loosely based on
 * [`Object.assign`](https://mdn.io/Object/assign).
 *
 * @static
 * @memberOf _
 * @since 0.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assignIn
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assign({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'c': 3 }
 */
var assign = createAssigner(function(object, source) {
  if (isPrototype(source) || isArrayLike(source)) {
    copyObject(source, keys(source), object);
    return;
  }
  for (var key in source) {
    if (hasOwnProperty.call(source, key)) {
      assignValue(object, key, source[key]);
    }
  }
});

module.exports = assign;


/***/ }),

/***/ "./node_modules/lodash/constant.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/constant.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/***/ ((module) => {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "./node_modules/lodash/identity.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/identity.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "./node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/***/ ((module) => {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "./node_modules/lodash/stubFalse.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;


/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "./node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "./node_modules/lodash/keys.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/keys.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeys = __webpack_require__(/*! ./_baseKeys */ "./node_modules/lodash/_baseKeys.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/react-multi-select-component/dist/esm/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-multi-select-component/dist/esm/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dropdown": () => (/* binding */ Q),
/* harmony export */   "MultiSelect": () => (/* binding */ je),
/* harmony export */   "SelectItem": () => (/* binding */ N),
/* harmony export */   "SelectPanel": () => (/* binding */ q)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function V(e,{insertAt:n}={}){if(!e||typeof document>"u")return;let t=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",n==="top"&&t.firstChild?t.insertBefore(r,t.firstChild):t.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}V(`.rmsc{--rmsc-main: #4285f4;--rmsc-hover: #f1f3f5;--rmsc-selected: #e2e6ea;--rmsc-border: #ccc;--rmsc-gray: #aaa;--rmsc-bg: #fff;--rmsc-p: 10px;--rmsc-radius: 4px;--rmsc-h: 38px}.rmsc *{box-sizing:border-box;transition:all .2s ease}.rmsc .gray{color:var(--rmsc-gray)}.rmsc .dropdown-content{position:absolute;z-index:1;top:100%;width:100%;padding-top:8px}.rmsc .dropdown-content .panel-content{overflow:hidden;border-radius:var(--rmsc-radius);background:var(--rmsc-bg);box-shadow:0 0 0 1px #0000001a,0 4px 11px #0000001a}.rmsc .dropdown-container{position:relative;outline:0;background-color:var(--rmsc-bg);border:1px solid var(--rmsc-border);border-radius:var(--rmsc-radius)}.rmsc .dropdown-container[aria-disabled=true]:focus-within{box-shadow:var(--rmsc-gray) 0 0 0 1px;border-color:var(--rmsc-gray)}.rmsc .dropdown-container:focus-within{box-shadow:var(--rmsc-main) 0 0 0 1px;border-color:var(--rmsc-main)}.rmsc .dropdown-heading{position:relative;padding:0 var(--rmsc-p);display:flex;align-items:center;width:100%;height:var(--rmsc-h);cursor:default;outline:0}.rmsc .dropdown-heading .dropdown-heading-value{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1}.rmsc .clear-selected-button{cursor:pointer;background:none;border:0;padding:0;display:flex}.rmsc .options{max-height:260px;overflow-y:auto;margin:0;padding-left:0}.rmsc .options li{list-style:none;margin:0}.rmsc .select-item{box-sizing:border-box;cursor:pointer;display:block;padding:var(--rmsc-p);outline-offset:-1px;outline-color:var(--rmsc-primary)}.rmsc .select-item:hover{background:var(--rmsc-hover)}.rmsc .select-item.selected{background:var(--rmsc-selected)}.rmsc .no-options{padding:var(--rmsc-p);text-align:center;color:var(--rmsc-gray)}.rmsc .search{width:100%;position:relative;border-bottom:1px solid var(--rmsc-border)}.rmsc .search input{background:none;height:var(--rmsc-h);padding:0 var(--rmsc-p);width:100%;outline:0;border:0;font-size:1em}.rmsc .search input:focus{background:var(--rmsc-hover)}.rmsc .search-clear-button{cursor:pointer;position:absolute;top:0;right:0;bottom:0;background:none;border:0;padding:0 calc(var(--rmsc-p) / 2)}.rmsc .search-clear-button [hidden]{display:none}.rmsc .item-renderer{display:flex;align-items:baseline}.rmsc .item-renderer input{margin:0 5px 0 0}.rmsc .item-renderer.disabled{opacity:.5}.rmsc .spinner{animation:rotate 2s linear infinite}.rmsc .spinner .path{stroke:var(--rmsc-border);stroke-width:4px;stroke-linecap:round;animation:dash 1.5s ease-in-out infinite}@keyframes rotate{to{transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1,150;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-35}to{stroke-dasharray:90,150;stroke-dashoffset:-124}}
`);var Me={allItemsAreSelected:"All items are selected.",clearSearch:"Clear Search",clearSelected:"Clear Selected",noOptions:"No options",search:"Search",selectAll:"Select All",selectAllFiltered:"Select All (Filtered)",selectSomeItems:"Select...",create:"Create"},De={value:[],hasSelectAll:!0,className:"multi-select",debounceDuration:200,options:[]},re=react__WEBPACK_IMPORTED_MODULE_0___default().createContext({}),ne=({props:e,children:n})=>{let[t,r]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(e.options),a=c=>{var u;return((u=e.overrideStrings)==null?void 0:u[c])||Me[c]};return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{r(e.options)},[e.options]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(re.Provider,{value:{t:a,...De,...e,options:t,setOptions:r},children:n})},w=()=>react__WEBPACK_IMPORTED_MODULE_0___default().useContext(re);function se(e,n){let t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{t.current?e():t.current=!0},n)}var He={when:!0,eventTypes:["keydown"]};function R(e,n,t){let r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>Array.isArray(e)?e:[e],[e]),a=Object.assign({},He,t),{when:c,eventTypes:u}=a,b=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(n),{target:s}=a;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{b.current=n});let p=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(i=>{r.some(l=>i.key===l||i.code===l)&&b.current(i)},[r]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(c&&typeof window<"u"){let i=s?s.current:window;return u.forEach(l=>{i&&i.addEventListener(l,p)}),()=>{u.forEach(l=>{i&&i.removeEventListener(l,p)})}}},[c,u,r,s,n])}var f={ARROW_DOWN:"ArrowDown",ARROW_UP:"ArrowUp",ENTER:"Enter",ESCAPE:"Escape",SPACE:"Space"};var le=(e,n)=>{let t;return function(...r){clearTimeout(t),t=setTimeout(()=>{e.apply(null,r)},n)}};function ie(e,n){return n?e.filter(({label:t,value:r})=>t!=null&&r!=null&&t.toLowerCase().includes(n.toLowerCase())):e}var T=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg",{width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"dropdown-search-clear-icon gray",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]});var Ue=({checked:e,option:n,onClick:t,disabled:r})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:`item-renderer ${r?"disabled":""}`,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input",{type:"checkbox",onChange:t,checked:e,tabIndex:-1,disabled:r}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{children:n.label})]}),pe=Ue;var Ye=({itemRenderer:e=pe,option:n,checked:t,tabIndex:r,disabled:a,onSelectionChanged:c,onClick:u})=>{let b=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),s=l=>{p(),l.preventDefault()},p=()=>{a||c(!t)},i=l=>{p(),u(l)};return R([f.ENTER,f.SPACE],s,{target:b}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label",{className:`select-item ${t?"selected":""}`,role:"option","aria-selected":t,tabIndex:r,ref:b,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(e,{option:n,checked:t,onClick:i,disabled:a})})},N=Ye;var ze=({options:e,onClick:n,skipIndex:t})=>{let{disabled:r,value:a,onChange:c,ItemRenderer:u}=w(),b=(s,p)=>{r||c(p?[...a,s]:a.filter(i=>i.value!==s.value))};return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:e.map((s,p)=>{let i=p+t;return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(N,{tabIndex:i,option:s,onSelectionChanged:l=>b(s,l),checked:!!a.find(l=>l.value===s.value),onClick:l=>n(l,i),itemRenderer:u,disabled:s.disabled||r})},(s==null?void 0:s.key)||p)})})},ue=ze;var Je=()=>{let{t:e,onChange:n,options:t,setOptions:r,value:a,filterOptions:c,ItemRenderer:u,disabled:b,disableSearch:s,hasSelectAll:p,ClearIcon:i,debounceDuration:l,isCreatable:L,onCreateOption:y}=w(),O=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),g=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),[m,M]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),[v,K]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(t),[x,D]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),[E,I]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),W=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(le(o=>D(o),l),[]),A=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{let o=0;return s||(o+=1),p&&(o+=1),o},[s,p]),_={label:e(m?"selectAllFiltered":"selectAll"),value:""},H=o=>{let d=v.filter(C=>!C.disabled).map(C=>C.value);if(o){let Ae=[...a.map(U=>U.value),...d];return(c?v:t).filter(U=>Ae.includes(U.value))}return a.filter(C=>!d.includes(C.value))},B=o=>{let d=H(o);n(d)},h=o=>{W(o.target.value),M(o.target.value),I(0)},P=()=>{var o;D(""),M(""),(o=g==null?void 0:g.current)==null||o.focus()},Z=o=>I(o),we=o=>{switch(o.code){case f.ARROW_UP:ee(-1);break;case f.ARROW_DOWN:ee(1);break;default:return}o.stopPropagation(),o.preventDefault()};R([f.ARROW_DOWN,f.ARROW_UP],we,{target:O});let Oe=()=>{I(0)},j=async()=>{let o={label:m,value:m,__isNew__:!0};y&&(o=await y(m)),r([o,...t]),P(),n([...a,o])},Re=async()=>c?await c(t,x):ie(t,x),ee=o=>{let d=E+o;d=Math.max(0,d),d=Math.min(d,t.length+Math.max(A-1,0)),I(d)};(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{var o,d;(d=(o=O==null?void 0:O.current)==null?void 0:o.querySelector(`[tabIndex='${E}']`))==null||d.focus()},[E]);let[ke,Ee]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{let o=v.filter(d=>!d.disabled);return[o.every(d=>a.findIndex(C=>C.value===d.value)!==-1),o.length!==0]},[v,a]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{Re().then(K)},[x,t]);let te=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();R([f.ENTER],j,{target:te});let Ie=L&&m&&!v.some(o=>(o==null?void 0:o.value)===m);return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"select-panel",role:"listbox",ref:O,children:[!s&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"search",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input",{placeholder:e("search"),type:"text","aria-describedby":e("search"),onChange:h,onFocus:Oe,value:m,ref:g,tabIndex:0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{type:"button",className:"search-clear-button",hidden:!m,onClick:P,"aria-label":e("clearSearch"),children:i||(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(T,{})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("ul",{className:"options",children:[p&&Ee&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(N,{tabIndex:A===1?0:1,checked:ke,option:_,onSelectionChanged:B,onClick:()=>Z(1),itemRenderer:u,disabled:b}),v.length?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ue,{skipIndex:A,options:v,onClick:(o,d)=>Z(d)}):Ie?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li",{onClick:j,className:"select-item creatable",tabIndex:1,ref:te,children:`${e("create")} "${m}"`}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li",{className:"no-options",children:e("noOptions")})]})]})},q=Je;var ge=({expanded:e})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"dropdown-heading-dropdown-arrow gray",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:e?"M18 15 12 9 6 15":"M6 9L12 15 18 9"})});var xe=()=>{let{t:e,value:n,options:t,valueRenderer:r}=w(),a=n.length===0,c=n.length===t.length,u=r&&r(n,t);return a?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:"gray",children:u||e("selectSomeItems")}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{children:u||(c?e("allItemsAreSelected"):(()=>n.map(s=>s.label).join(", "))())})};var Se=({size:e=24})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{style:{width:e,marginRight:"0.2rem"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{width:e,height:e,className:"spinner",viewBox:"0 0 50 50",style:{display:"inline",verticalAlign:"middle"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle",{cx:"25",cy:"25",r:"20",fill:"none",className:"path"})})});var Xe=()=>{let{t:e,onMenuToggle:n,ArrowRenderer:t,shouldToggleOnHover:r,isLoading:a,disabled:c,onChange:u,labelledBy:b,value:s,isOpen:p,defaultIsOpen:i,ClearSelectedIcon:l,closeOnChangedValue:L}=w();(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{L&&m(!1)},[s]);let[y,O]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0),[g,m]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(i),[M,v]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),K=t||ge,x=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();se(()=>{n&&n(g)},[g]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{i===void 0&&typeof p=="boolean"&&(O(!1),m(p))},[p]);let D=h=>{var P;["text","button"].includes(h.target.type)&&[f.SPACE,f.ENTER].includes(h.code)||(y&&(h.code===f.ESCAPE?(m(!1),(P=x==null?void 0:x.current)==null||P.focus()):m(!0)),h.preventDefault())};R([f.ENTER,f.ARROW_DOWN,f.SPACE,f.ESCAPE],D,{target:x});let E=h=>{y&&r&&m(h)},I=()=>!M&&v(!0),W=h=>{!h.currentTarget.contains(h.relatedTarget)&&y&&(v(!1),m(!1))},A=()=>E(!0),_=()=>E(!1),H=()=>{y&&m(a||c?!1:!g)},B=h=>{h.stopPropagation(),u([]),y&&m(!1)};return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{tabIndex:0,className:"dropdown-container","aria-labelledby":b,"aria-expanded":g,"aria-readonly":!0,"aria-disabled":c,ref:x,onFocus:I,onBlur:W,onMouseEnter:A,onMouseLeave:_,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"dropdown-heading",onClick:H,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"dropdown-heading-value",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(xe,{})}),a&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Se,{}),s.length>0&&l!==null&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{type:"button",className:"clear-selected-button",onClick:B,disabled:c,"aria-label":e("clearSelected"),children:l||(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(T,{})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(K,{expanded:g})]}),g&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"dropdown-content",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"panel-content",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(q,{})})})]})},Q=Xe;var Ze=e=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ne,{props:e,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:`rmsc ${e.className||"multi-select"}`,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Q,{})})}),je=Ze;


/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-runtime.development.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-runtime.development.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "react");

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types.
var REACT_ELEMENT_TYPE = Symbol.for('react.element');
var REACT_PORTAL_TYPE = Symbol.for('react.portal');
var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
var REACT_CONTEXT_TYPE = Symbol.for('react.context');
var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
var REACT_MEMO_TYPE = Symbol.for('react.memo');
var REACT_LAZY_TYPE = Symbol.for('react.lazy');
var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      printWarning('error', format, args);
    }
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    } // eslint-disable-next-line react-internal/safe-string-coercion


    var argsWithFormat = args.map(function (item) {
      return String(item);
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// -----------------------------------------------------------------------------

var enableScopeAPI = false; // Experimental Create Event Handle API.
var enableCacheElement = false;
var enableTransitionTracing = false; // No known bugs, but needs performance testing

var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
// stuff. Intended to enable React core members to more easily debug scheduling
// issues in DEV builds.

var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

var REACT_MODULE_REFERENCE;

{
  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
}

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
    // types supported by any Flight configuration anywhere since
    // we don't know which Flight build this will end up being used
    // with.
    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var displayName = outerType.displayName;

  if (displayName) {
    return displayName;
  }

  var functionName = innerType.displayName || innerType.name || '';
  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
} // Keep in sync with react-reconciler/getComponentNameFromFiber


function getContextName(type) {
  return type.displayName || 'Context';
} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


function getComponentNameFromType(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';

  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        var outerName = type.displayName || null;

        if (outerName !== null) {
          return outerName;
        }

        return getComponentNameFromType(type.type) || 'Memo';

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentNameFromType(init(payload));
          } catch (x) {
            return null;
          }
        }

      // eslint-disable-next-line no-fallthrough
    }
  }

  return null;
}

var assign = Object.assign;

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: assign({}, props, {
          value: prevLog
        }),
        info: assign({}, props, {
          value: prevInfo
        }),
        warn: assign({}, props, {
          value: prevWarn
        }),
        error: assign({}, props, {
          value: prevError
        }),
        group: assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if ( !fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
                // but we have a user-provided "displayName"
                // splice it in to make the stack more readable.


                if (fn.displayName && _frame.includes('<anonymous>')) {
                  _frame = _frame.replace('<anonymous>', fn.displayName);
                }

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var hasOwnProperty = Object.prototype.hasOwnProperty;

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            // eslint-disable-next-line react-internal/prod-error-codes
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

function isArray(a) {
  return isArrayImpl(a);
}

/*
 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
 *
 * The functions in this module will throw an easier-to-understand,
 * easier-to-debug exception with a clear errors message message explaining the
 * problem. (Instead of a confusing exception thrown inside the implementation
 * of the `value` object).
 */
// $FlowFixMe only called in DEV, so void return is not possible.
function typeName(value) {
  {
    // toStringTag is needed for namespaced types like Temporal.Instant
    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
    return type;
  }
} // $FlowFixMe only called in DEV, so void return is not possible.


function willCoercionThrow(value) {
  {
    try {
      testStringCoercion(value);
      return false;
    } catch (e) {
      return true;
    }
  }
}

function testStringCoercion(value) {
  // If you ended up here by following an exception call stack, here's what's
  // happened: you supplied an object or symbol value to React (as a prop, key,
  // DOM attribute, CSS property, string ref, etc.) and when React tried to
  // coerce it to a string using `'' + value`, an exception was thrown.
  //
  // The most common types that will cause this exception are `Symbol` instances
  // and Temporal objects like `Temporal.Instant`. But any object that has a
  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
  // exception. (Library authors do this to prevent users from using built-in
  // numeric operators like `+` or comparison operators like `>=` because custom
  // methods are needed to perform accurate arithmetic or comparison.)
  //
  // To fix the problem, coerce this object or symbol value to a string before
  // passing it to React. The most reliable way is usually `String(value)`.
  //
  // To find which value is throwing, check the browser or debugger console.
  // Before this exception was thrown, there should be `console.error` output
  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
  // problem and how that type was used: key, atrribute, input value prop, etc.
  // In most cases, this console output also shows the component and its
  // ancestor components where the exception happened.
  //
  // eslint-disable-next-line react-internal/safe-string-coercion
  return '' + value;
}
function checkKeyStringCoercion(value) {
  {
    if (willCoercionThrow(value)) {
      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      {
        checkKeyStringCoercion(maybeKey);
      }

      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      {
        checkKeyStringCoercion(config.key);
      }

      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */


function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentNameFromType(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentNameFromType(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    if (type === REACT_FRAGMENT_TYPE) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev
// even with the prod transform. This means that jsxDEV is purely
// opt-in behavior for better messages but that we won't stop
// giving you warnings if you use production apis.

function jsxWithValidationStatic(type, props, key) {
  {
    return jsxWithValidation(type, props, key, true);
  }
}
function jsxWithValidationDynamic(type, props, key) {
  {
    return jsxWithValidation(type, props, key, false);
  }
}

var jsx =  jsxWithValidationDynamic ; // we may want to special case jsxs internally to take advantage of static children.
// for now we can ship identical prod functions

var jsxs =  jsxWithValidationStatic ;

exports.Fragment = REACT_FRAGMENT_TYPE;
exports.jsx = jsx;
exports.jsxs = jsxs;
  })();
}


/***/ }),

/***/ "./node_modules/react/jsx-runtime.js":
/*!*******************************************!*\
  !*** ./node_modules/react/jsx-runtime.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-runtime.development.js */ "./node_modules/react/cjs/react-jsx-runtime.development.js");
}


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "@wordpress/blockEditor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/plugins":
/*!*********************************!*\
  !*** external ["wp","plugins"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["plugins"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkcontent_visibility"] = globalThis["webpackChunkcontent_visibility"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map