/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");


/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */





/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

function Edit(_ref) {
  let {
    attributes,
    setAttributes
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Searchbar einstellen', 'searchbar')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Searchbar Dropdowns ein und ausstellen', 'searchbar')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CheckboxControl, {
    label: "Bergbahntickets kaufen",
    checked: attributes.bergbhntickets,
    onChange: val => setAttributes({
      bergbhntickets: val
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CheckboxControl, {
    label: "\xDCbernachtung buchen",
    checked: attributes.uebernachtungbuchn,
    onChange: val => setAttributes({
      uebernachtungbuchn: val
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CheckboxControl, {
    label: "Alpk\xE4sereibesuch buchen",
    checked: attributes.kaesereibesuch,
    onChange: val => setAttributes({
      kaesereibesuch: val
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CheckboxControl, {
    label: "Gutscheine bestellen",
    checked: attributes.gutschein,
    onChange: val => setAttributes({
      gutschein: val
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CheckboxControl, {
    label: "Fondue-Iglu reservieren",
    checked: attributes.fondures,
    onChange: val => setAttributes({
      fondures: val
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CheckboxControl, {
    label: "Racletteh\xFCtte reservieren",
    checked: attributes.raclettres,
    onChange: val => setAttributes({
      raclettres: val
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Unterkategorien', 'searchbar')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tisch reservieren', 'searchbar')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CheckboxControl, {
    label: "Fondue-Iglu reservieren",
    checked: attributes.tischres_fondue,
    onChange: val => setAttributes({
      tischres_fondue: val
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CheckboxControl, {
    label: "Racletteh\xFCtte reservieren",
    checked: attributes.tischres_raclett,
    onChange: val => setAttributes({
      tischres_raclett: val
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Vorauswahl', 'searchbar')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    value: attributes.dropdn_firstselected,
    onChange: val => setAttributes({
      dropdn_firstselected: val
    }),
    options: [{
      label: 'Angebot Auswahl auswählen',
      value: ''
    }, {
      label: 'Bergbahntickets kaufen',
      value: 'bahn'
    }, {
      label: 'Übernachtung buchen',
      value: 'hotel'
    }, {
      label: 'Tisch reservieren',
      value: 'restaurant'
    }, {
      label: 'Fondue-Iglu reservieren',
      value: 'fondures'
    }, {
      label: 'Raclettehütte reservieren',
      value: 'raclettres'
    }, {
      label: 'Alpkäsereibesuch buchen',
      value: 'kaserei'
    }, {
      label: 'Gutscheine bestellen',
      value: 'gutschein'
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    value: attributes.dropdn_restselected,
    onChange: val => setAttributes({
      dropdn_restselected: val
    }),
    options: [{
      label: 'Wähle Auswahl Tisch reservieren aus',
      value: ''
    }, {
      label: 'Raclettehütte',
      value: 'raclett'
    }, {
      label: 'Fondue-Iglu',
      value: 'fondue'
    }]
  }));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],

  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

function save(_ref) {
  let {
    attributes
  } = _ref;
  var bergbhntickets;
  var uebernachtungbuchn;
  var tischres;
  var kaesereibesuch;
  var gutschein;
  var fondures;
  var raclettres;
  var tischres_fondue;
  var tischres_raclett;

  if (attributes.bergbhntickets) {
    if (attributes.dropdn_firstselected == "bahn") {
      bergbhntickets = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
        value: "bahn",
        selected: true
      }, 'Bergbahntickets kaufen');
    } else {
      bergbhntickets = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
        value: "bahn"
      }, 'Bergbahntickets kaufen');
    }
  }

  if (attributes.uebernachtungbuchn) {
    if (attributes.dropdn_firstselected == "hotel") {
      uebernachtungbuchn = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
        value: "hotel",
        selected: true
      }, 'Übernachtung buchen');
    } else {
      uebernachtungbuchn = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
        value: "hotel"
      }, 'Übernachtung buchen');
    }
  }

  if (attributes.tischres_raclett || attributes.tischres_fondue) {
    if (attributes.dropdn_firstselected == "restaurant") {
      tischres = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
        value: "restaurant",
        selected: true
      }, 'Tisch reservieren');
    } else {
      tischres = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
        value: "restaurant"
      }, 'Tisch reservieren');
    }
  }

  if (attributes.kaesereibesuch) {
    if (attributes.dropdn_firstselected == "kaserei") {
      kaesereibesuch = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
        value: "kaserei",
        selected: true
      }, 'Alpkäsereibesuch buchen');
    } else {
      kaesereibesuch = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
        value: "kaserei"
      }, 'Alpkäsereibesuch buchen');
    }
  }

  if (attributes.gutschein) {
    if (attributes.dropdn_firstselected == "gutschein") {
      gutschein = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
        value: "gutschein",
        selected: true
      }, 'Gutscheine bestellen');
    } else {
      gutschein = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
        value: "gutschein"
      }, 'Gutscheine bestellen');
    }
  }

  if (attributes.fondures) {
    if (attributes.dropdn_firstselected == "fondures") {
      fondures = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
        value: "fondures",
        selected: true
      }, 'Fondue-Inglo reservieren');
    } else {
      fondures = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
        value: "fondures"
      }, 'Fondue-Inglo reservieren');
    }
  }

  if (attributes.raclettres) {
    if (attributes.dropdn_firstselected == "raclettres") {
      raclettres = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
        value: "raclettres",
        selected: true
      }, 'Raclettehütte reservieren');
    } else {
      raclettres = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
        value: "raclettres"
      }, 'Raclettehütte reservieren');
    }
  }

  if (attributes.tischres_raclett) {
    if (attributes.dropdn_restselected == "raclett") {
      tischres_fondue = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
        value: "raclett",
        selected: true
      }, 'Raclettehütte');
    } else {
      tischres_fondue = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
        value: "raclett"
      }, 'Raclettehütte');
    }
  }

  if (attributes.tischres_fondue) {
    if (attributes.dropdn_restselected == "fondue") {
      tischres_raclett = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
        value: "fondue",
        selected: true
      }, 'Fondue-Iglu');
    } else {
      tischres_raclett = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
        value: "fondue"
      }, 'Fondue-Iglu');
    }
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    id: "searchBox",
    class: "searchBox"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    dangerouslySetInnerHTML: {
      __html: `<style>
                .form-label {
                    color: #f8f9fa !important;
                }

                .displaynone{
                    display: none;
                }

                .btn-searchbox {
                    display: none;
                }
                
                .form-control:focus {
                	color: unset;
                }

                .searchBox input, .searchBox select{
					background-color: unset;
				}
            </style>
            <script type="text/javascript" src="https://cdn.jsdelivr.net/momentjs/latest/moment.min.js"></script>
            <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js"></script>
            <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css" />`
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "triagles_effects ondesktop",
    style: "top:0; z-index: -1;"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "right_top_blue right_bottom_green aos-init aos-animate",
    "data-aos": "flip-right",
    "data-aos-delay": "600"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "left_top_blue aos-init aos-animate",
    "data-aos": "flip-right",
    "data-aos-delay": "700"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "left_top_blue aos-init aos-animate",
    "data-aos": "flip-right",
    "data-aos-delay": "800"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "right_top_lightblue aos-init aos-animate",
    "data-aos": "flip-right",
    "data-aos-delay": "900"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "aos-init aos-animate",
    "data-aos": "flip-right"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "aos-init aos-animate",
    "data-aos": "flip-right"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "aos-init",
    "data-aos": "flip-right"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "triagles_effects onmobile",
    style: "top:0"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "left_top_green right_bottom_blue"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "left_top_green right_bottom_grey"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "left_top_green"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: ""
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "left_top_blue right_bottom_grey"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "left_top_grey"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: ""
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: ""
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "left_top_blue"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "max_90_d"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "col-lg-12 "
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
    class: "row card card_searchbox"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "col-12 "
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    class: "mb-4 heading text-light"
  }, 'Buchen & Reservieren')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "col-sm-12 col-md-3"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "searchbox-dropdown",
    class: "form-label"
  }, 'Angebot'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    id: "searchbox-dropdown",
    class: "form-select form-select-lg mb-3",
    "aria-label": ".form-select-lg example"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    disabled: true,
    selected: true
  }, 'Angebot auswählen'), bergbhntickets, uebernachtungbuchn, tischres, fondures, raclettres, kaesereibesuch, gutschein)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "col-sm-12 col-md-7 row searchbox-changes searchbox-hotel displaynone"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "col-md-5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "hoteldate",
    class: "form-label"
  }, 'Zeitraum'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "input-group mb-3",
    dangerouslySetInnerHTML: {
      __html: '<input type="text" id="hoteldate" name="range" class="datepicker_range form-control form-control-lg"><i onclick="document.getElementById(\'hoteldate\').focus()" class="bi bi-calendar-date input-group-text"></i>'
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "col-md-2",
    dangerouslySetInnerHTML: {
      __html: '<label for="hotelerw" class="form-label">Erwachsene</label><input id="hotelerw" type="number" class="form-control form-control-lg mb-3" value="2" min="0" max="4" required>'
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "col-md-2",
    dangerouslySetInnerHTML: {
      __html: '<label for="hotelkin" class="form-label">Kinder</label><input id="hotelkin" type="number" class="form-control form-control-lg mb-3" value="0" min="0" max="8" required>'
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "col-sm-12 col-md-7 row searchbox-changes searchbox-reservieren displaynone"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "col-md-6"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "chooseRestaurant",
    class: "form-label"
  }, 'Restaurant wählen'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "input-group"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    class: "form-select form-select-lg mb-3",
    id: "chooseRestaurant",
    required: true
  }, tischres_fondue, tischres_raclett)))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "col-sm-12 col-md-7 row searchbox-changes searchbox-ticket displaynone"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "col-md-4"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "chooseFahrt",
    class: "form-label"
  }, "Ticket w\xE4hlen"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "input-group"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    class: "form-select form-select-lg mb-3",
    id: "chooseFahrt",
    required: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "ufe",
    selected: true
  }, "Bergfahrt"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "abe"
  }, "Talfahrt"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "retour"
  }, "Retour")))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "col-md-4"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "bahndatum",
    class: "form-label"
  }, 'Datum'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "input-group mb-3",
    dangerouslySetInnerHTML: {
      __html: '<input id="bahndatum" type="text" class="datepicker_input form-control form-control-lg " required><i onclick="document.getElementById(\'bahndatum\').focus()" class="bi bi-calendar-date input-group-text"></i></div>'
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "col-md-2",
    dangerouslySetInnerHTML: {
      __html: '<label for="bahnerw" class="form-label">Erwachsene</label><input id="bahnerw" type="number" class="form-control form-control-lg mb-3" value="2" min="0" required>'
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "col-md-2",
    dangerouslySetInnerHTML: {
      __html: `<label for="bahnkin" class="form-label">Kinder</label><input id="bahnkin" type="number" class="form-control form-control-lg mb-3" value="0" min="0" required>`
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "col-sm-12 col-md-7 row searchbox-changes searchbox-leer displaynone"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "col-sm-12 col-md-2 text-end"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "button",
    class: "btn btn-success btn-rounded btn-searchbox",
    style: "margin-top: 27px;"
  }))))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    dangerouslySetInnerHTML: {
      __html: `
            <script src="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js"></script><script>
            //document.querySelectorAll("html.skrollr.skrollr-mobile").removeEventListener("touchend", function (a){})
            jQuery(document).ready(function ($) {

                $(".card_searchbox #searchbox-dropdown").change(function () {
                    searchboxHtml();
                })

                function searchboxHtml() {
                    if ($(".card_searchbox #searchbox-dropdown").val() == "hotel") {
                        $(".card_searchbox .searchbox-changes").addClass("displaynone");
                        $(".card_searchbox .searchbox-hotel").removeClass("displaynone");
                        $(".card_searchbox .btn-success").html('Jetzt buchen');
                        $(".card_searchbox .btn-searchbox").show();
                        console.log(dataLayer.push({'changeSearchbox': 'Hotel'}));
                    } else if ($(".card_searchbox #searchbox-dropdown").val() == "restaurant") {
                        $(".card_searchbox .searchbox-changes").addClass("displaynone");
                        $(".card_searchbox .searchbox-reservieren").removeClass("displaynone");
                        $(".card_searchbox .btn-success").html('Jetzt reservieren');
                        $(".card_searchbox .btn-searchbox").show();
                        console.log(dataLayer.push({'changeSearchbox': 'Restaurant'}));
                    } else if ($(".card_searchbox #searchbox-dropdown").val() == "fondures") {
                        $(".card_searchbox .searchbox-changes").addClass("displaynone");
                        $(".card_searchbox .searchbox-leer").removeClass("displaynone");
                        $(".card_searchbox .btn-success").html('Jetzt reservieren');
                        $(".card_searchbox .btn-searchbox").show();
                        console.log(dataLayer.push({'changeSearchbox': 'Fondue Reservieren'}));
                    } else if ($(".card_searchbox #searchbox-dropdown").val() == "raclettres") {
                        $(".card_searchbox .searchbox-changes").addClass("displaynone");
                        $(".card_searchbox .searchbox-leer").removeClass("displaynone");
                        $(".card_searchbox .btn-success").html('Jetzt reservieren');
                        $(".card_searchbox .btn-searchbox").show();
                        console.log(dataLayer.push({'changeSearchbox': 'Raclett reservieren'}));
                    } else if ($(".card_searchbox #searchbox-dropdown").val() == "kaserei") {
                        $(".card_searchbox .searchbox-changes").addClass("displaynone");
                        $(".card_searchbox .searchbox-leer").removeClass("displaynone");
                        $(".card_searchbox .btn-success").html('Jetzt buchen');
                        $(".card_searchbox .btn-searchbox").show();
                        console.log(dataLayer.push({'changeSearchbox': 'Käserei'}));
                    } else if ($(".card_searchbox #searchbox-dropdown").val() == "gutschein") {
                        $(".card_searchbox .searchbox-changes").addClass("displaynone");
                        $(".card_searchbox .searchbox-leer").removeClass("displaynone");
                        $(".card_searchbox .btn-success").html('Jetzt bestellen');
                        $(".card_searchbox .btn-searchbox").show();
                        console.log(dataLayer.push({'changeSearchbox': 'Gutscheine'}));
                    } else if ($(".card_searchbox #searchbox-dropdown").val() == "bahn") {
                        $(".card_searchbox .searchbox-changes").addClass("displaynone");
                        $(".card_searchbox .searchbox-ticket").removeClass("displaynone");
                        $(".card_searchbox .btn-success").html('Jetzt lösen');
                        $(".card_searchbox .btn-searchbox").show();
                        console.log(dataLayer.push({'changeSearchbox': 'Bergbahnen'}));
                    }
                };

                $(".card_searchbox .btn-success").click(function (e) {
                    e.preventDefault();
                    if ($(".card_searchbox #searchbox-dropdown").val() == "hotel") {
                        dataLayer.push({'Searchbox': 'Hotel'});
                        var persondetail = "";
                        i = 0;
                        while (i < parseInt($("#hotelerw").val())) {
                            persondetail += "A,";
                            i++;
                        }
                        i = 0;
                        while (i < parseInt($("#hotelkin").val())) {
                            persondetail += "12,";
                            i++;
                        }
                        console.log(persondetail.slice(0, -1));
                        window.open(("https://www.simplebooking.it/ibe/hotelbooking/search?hid=7607&amp;lang=de&amp;guests=" +
                            persondetail.slice(0, -1) +
                            "&amp;in=" +
                            $("#hoteldate").val().split("-")[0].trim().split(".")[2] + "-" + $("#hoteldate").val().split("-")[0].trim().split(".")[1] + "-" + $("#hoteldate").val().split("-")[0].trim().split(".")[0] +
                            "&amp;out=" +
                            $("#hoteldate").val().split("-")[1].trim().split(".")[2] + "-" + $("#hoteldate").val().split("-")[1].trim().split(".")[1] + "-" + $("#hoteldate").val().split("-")[1].trim().split(".")[0] +
                            "&amp;coupon=").replaceAll("amp;", ""))
                    } else if ($(".card_searchbox #searchbox-dropdown").val() == "restaurant") {
                        dataLayer.push({'Searchbox': 'Restaurant'});
                        if ($("#chooseRestaurant").val() == "raclett") {
                            window.open("https://mytools.aleno.me/reservations/v2.0/reservations.html?k=eyJrIjoid2l2dTVrM2lsNm15cnBiOWlwdzZ4bmViajhycnVkaWRpZ280bGZwODBsbzlhNGlweTEiLCJyIjoiRUx0TUNMeHk3d3F0ZGJLRGoiLCJzIjoiaHR0cHM6Ly9teXRvb2xzLmFsZW5vLm1lLyJ9")
                        } else if ($("#chooseRestaurant").val() == "fondue") {
                            window.open("https://mytools.aleno.me/reservations/v2.0/reservations.html?k=eyJrIjoid2l2dTVrM2lsNm15cnBiOWlwdzZ4bmViajhycnVkaWRpZ280bGZwODBsbzlhNGlweTEiLCJyIjoiQVJ4THJ0cllHNXEyMkZ6ZzIiLCJzIjoiaHR0cHM6Ly9teXRvb2xzLmFsZW5vLm1lLyJ9")
                        }
                        if ($("#chooseRestaurant").val() == "fondue") {
                            window.open("https://mytools.aleno.me/reservations/v2.0/reservations.html?k=eyJrIjoid2l2dTVrM2lsNm15cnBiOWlwdzZ4bmViajhycnVkaWRpZ280bGZwODBsbzlhNGlweTEiLCJyIjoiQVJ4THJ0cllHNXEyMkZ6ZzIiLCJzIjoiaHR0cHM6Ly9teXRvb2xzLmFsZW5vLm1lLyJ9")
                        }
                    } else if ($(".card_searchbox #searchbox-dropdown").val() == "fondures") {
                        dataLayer.push({'Searchbox': 'Restaurant Fondue'});
                        window.open("https://mytools.aleno.me/reservations/v2.0/reservations.html?k=eyJrIjoid2l2dTVrM2lsNm15cnBiOWlwdzZ4bmViajhycnVkaWRpZ280bGZwODBsbzlhNGlweTEiLCJyIjoiQVJ4THJ0cllHNXEyMkZ6ZzIiLCJzIjoiaHR0cHM6Ly9teXRvb2xzLmFsZW5vLm1lLyJ9")
                    } else if ($(".card_searchbox #searchbox-dropdown").val() == "raclettres") {
                        dataLayer.push({'Searchbox': 'Restaurant Raclett'});
                        window.open("https://mytools.aleno.me/reservations/v2.0/reservations.html?k=eyJrIjoid2l2dTVrM2lsNm15cnBiOWlwdzZ4bmViajhycnVkaWRpZ280bGZwODBsbzlhNGlweTEiLCJyIjoiRUx0TUNMeHk3d3F0ZGJLRGoiLCJzIjoiaHR0cHM6Ly9teXRvb2xzLmFsZW5vLm1lLyJ9")
                    } else if ($(".card_searchbox #searchbox-dropdown").val() == "kaserei") {
                        dataLayer.push({'Searchbox': 'Käserei'});
                        window.open("https://mytools.aleno.me/reservations/v2.0/reservations.html?k=eyJrIjoid2l2dTVrM2lsNm15cnBiOWlwdzZ4bmViajhycnVkaWRpZ280bGZwODBsbzlhNGlweTEiLCJyIjoiajhaZm9yWnpleWs4OEtnQ3oiLCJzIjoiaHR0cHM6Ly9teXRvb2xzLmFsZW5vLm1lLyJ9");
                    } else if ($(".card_searchbox #searchbox-dropdown").val() == "gutschein") {
                        dataLayer.push({'Searchbox': 'Gutscheine'});
                        window.open("https://shop.e-guma.ch/engstligenalp/de/gutscheine");
                    } else if ($(".card_searchbox #searchbox-dropdown").val() == "bahn") {
                        dataLayer.push({'Searchbox': 'Bergbahn'});
                        var persondetail = "";
                        i = 0;
                        ii = 0;
                        while (i < parseInt($("#bahnerw").val())) {
                            persondetail += "&sk%5B" + ii + "%5D%5Bcc%5D=ADULT";
                            i++;
                            ii++;
                        }
                        i = 0;
                        while (i < parseInt($("#bahnkin").val())) {
                            persondetail += "&sk%5B" + ii + "%5D%5Bcc%5D=CHILD";
                            i++;
                            ii++;
                        }
                        if ($("#chooseFahrt").val() == "ufe") {
                            window.open(("https://shop.engstligenalp.ch/de/forfait-ski/engstligen-bergfahrt-web/?s=" +
                                $("#bahndatum").val().trim().split(".")[2] + "-" + $("#bahndatum").val().trim().split(".")[1] + "-" + $("#bahndatum").val().trim().split(".")[0] +
                                persondetail +
                                "&amp;dp=0").replaceAll("amp;", ""));
                        } else if ($("#chooseFahrt").val() == "abe") {
                            window.open(("https://shop.engstligenalp.ch/de/forfait-ski/engstligen-talfahrt-web/?s=" +
                                $("#bahndatum").val().trim().split(".")[2] + "-" + $("#bahndatum").val().trim().split(".")[1] + "-" + $("#bahndatum").val().trim().split(".")[0] +
                                persondetail +
                                "&amp;dp=0").replaceAll("amp;", ""));
                        } else if ($("#chooseFahrt").val() == "retour") {
                            window.open(("https://shop.engstligenalp.ch/de/forfait-ski/engstligen-retourfahrt-web/?s=" +
                                $("#bahndatum").val().trim().split(".")[2] + "-" + $("#bahndatum").val().trim().split(".")[1] + "-" + $("#bahndatum").val().trim().split(".")[0] +
                                persondetail +
                                "&amp;dp=0").replaceAll("amp;", ""));
                        }
                    }
                })
                searchboxHtml();
                jQuery('.card_searchbox #hoteldate').daterangepicker({
                    "showWeekNumbers": true,
                    "autoApply": true,
                    "locale": {
                        "format": "DD.MM.YYYY",
                        "separator": " - ",
                        "applyLabel": "Apply",
                        "cancelLabel": "Abbrechen",
                        "fromLabel": "Von",
                        "toLabel": "Bis",
                        "customRangeLabel": "Custom",
                        "weekLabel": "W",
                        "daysOfWeek": [
                            "So",
                            "Mo",
                            "Di",
                            "Mi",
                            "Do",
                            "Fr",
                            "Sa"
                        ],
                        "monthNames": [
                            "Januar",
                            "Februar",
                            "März",
                            "April",
                            "Mai",
                            "Juni",
                            "Juli",
                            "August",
                            "September",
                            "Oktober",
                            "November",
                            "Dezember"
                        ],
                        "firstDay": 1
                    },
                    "minDate": new Date()
                });

                jQuery('.card_searchbox #bahndatum').daterangepicker({
                    "singleDatePicker": true,
                    "showWeekNumbers": true,
                    "autoApply": true,
                    "locale": {
                        "format": "DD.MM.YYYY",
                        "separator": " - ",
                        "applyLabel": "Apply",
                        "cancelLabel": "Abbrechen",
                        "fromLabel": "Von",
                        "toLabel": "Bis",
                        "customRangeLabel": "Custom",
                        "weekLabel": "W",
                        "daysOfWeek": [
                            "So",
                            "Mo",
                            "Di",
                            "Mi",
                            "Do",
                            "Fr",
                            "Sa"
                        ],
                        "monthNames": [
                            "Januar",
                            "Februar",
                            "März",
                            "April",
                            "Mai",
                            "Juni",
                            "Juli",
                            "August",
                            "September",
                            "Oktober",
                            "November",
                            "Dezember"
                        ],
                        "firstDay": 1
                    },
                    "minDate": new Date()
                });
            })
        </script>`
    }
  }));
}
;

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ ((module) => {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"create-block/searchbar","version":"0.1.0","title":"Searchbar","category":"widgets","icon":"smiley","description":"Example static block scaffolded with Create Block tool.","supports":{"html":false},"textdomain":"searchbar","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","attributes":{"bergbhntickets":{"type":"boolean"},"uebernachtungbuchn":{"type":"boolean"},"kaesereibesuch":{"type":"boolean"},"gutschein":{"type":"boolean"},"fondures":{"type":"boolean"},"raclettres":{"type":"boolean"},"tischres_fondue":{"type":"boolean"},"tischres_raclett":{"type":"boolean"},"dropdn_firstselected":{"type":"string"},"dropdn_restselected":{"type":"string"}}}');

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
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
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
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
/******/ 		var chunkLoadingGlobal = self["webpackChunksearchbar"] = self["webpackChunksearchbar"] || [];
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