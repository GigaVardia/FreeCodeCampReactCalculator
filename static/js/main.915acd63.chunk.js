(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(_,e,t){"use strict";t.r(e);var a=t(0),s=t(1),r=t.n(s),l=t(8),c=t.n(l),i=(t(16),t(9));c.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(i.a,{})}),document.getElementById("root"))},16:function(_,e,t){},17:function(_,e,t){},9:function(module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__),C_Users_Giga_Desktop_Web_Dev_React_ReactCalculator_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),C_Users_Giga_Desktop_Web_Dev_React_ReactCalculator_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),C_Users_Giga_Desktop_Web_Dev_React_ReactCalculator_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),C_Users_Giga_Desktop_Web_Dev_React_ReactCalculator_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(6),C_Users_Giga_Desktop_Web_Dev_React_ReactCalculator_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(5),_scss_calculator_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(17),_scss_calculator_scss__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_scss_calculator_scss__WEBPACK_IMPORTED_MODULE_6__),react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__),isNum=["0","1","2","3","4","5","6","7","8","9"],isOperator=["/","\xd7","-","+"],endsWithOperator=/[x+\u2011/]$/,Calculator=function(_Component){Object(C_Users_Giga_Desktop_Web_Dev_React_ReactCalculator_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(Calculator,_Component);var _super=Object(C_Users_Giga_Desktop_Web_Dev_React_ReactCalculator_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__.a)(Calculator);function Calculator(_){var e;return Object(C_Users_Giga_Desktop_Web_Dev_React_ReactCalculator_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.a)(this,Calculator),(e=_super.call(this,_)).state={currentVal:"0",prevVal:"0",formula:"",evaluated:!1,lastClicked:""},e.handleNumbers=e.handleNumbers.bind(Object(C_Users_Giga_Desktop_Web_Dev_React_ReactCalculator_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.a)(e)),e.handleOperators=e.handleOperators.bind(Object(C_Users_Giga_Desktop_Web_Dev_React_ReactCalculator_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.a)(e)),e.handleEvaluate=e.handleEvaluate.bind(Object(C_Users_Giga_Desktop_Web_Dev_React_ReactCalculator_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.a)(e)),e.handleDecimal=e.handleDecimal.bind(Object(C_Users_Giga_Desktop_Web_Dev_React_ReactCalculator_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.a)(e)),e.initialize=e.initialize.bind(Object(C_Users_Giga_Desktop_Web_Dev_React_ReactCalculator_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.a)(e)),e.maxDigitWarning=e.maxDigitWarning.bind(Object(C_Users_Giga_Desktop_Web_Dev_React_ReactCalculator_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.a)(e)),e}return Object(C_Users_Giga_Desktop_Web_Dev_React_ReactCalculator_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.a)(Calculator,[{key:"maxDigitWarning",value:function(){var _=this,e=this.state.currentVal;this.setState({currentVal:"Digit Limit Met",prevVal:e}),setTimeout((function(){return _.setState({currentVal:_.state.prevVal})}),1e3)}},{key:"handleEvaluate",value:function handleEvaluate(e){var val=e.target.value,_this$state=this.state,formula=_this$state.formula,evaluated=_this$state.evaluated,expression=formula;for(expression=expression.replaceAll("\xd7","*").replaceAll("--","+0+0+0+0+0+0+");endsWithOperator.test(expression);)expression=expression.slice(0,-1);if(!evaluated){var answer=Math.round(1e4*eval(expression))/1e4;this.setState({currentVal:answer.toString(),formula:endsWithOperator.test(formula)?formula.slice(0,-1)+val+answer.toString():formula+val+answer.toString(),evaluated:!0})}}},{key:"handleOperators",value:function(_){var e=_.target.value,t=this.state,a=t.currentVal,s=t.formula,r=t.evaluated,l=t.lastClicked;r?this.setState({currentVal:e,formula:a+e,lastClicked:e,evaluated:!1}):isNum.includes(l)?this.setState({currentVal:e,formula:s+e,prevVal:a,lastClicked:e}):isOperator.includes(l)?"-"===e&&"-"!==s[s.length-2]&&this.setState({currentVal:e,formula:s+e,prevVal:a,lastClicked:e}):""===s?(console.log("here"),this.setState({currentVal:e,formula:s+e,prevVal:a,lastClicked:e})):this.setState({currentVal:e,formula:s.slice(0,-1)+e,prevVal:a,lastClicked:e})}},{key:"handleNumbers",value:function(_){var e=_.target.value,t=this.state,a=t.currentVal,s=t.formula,r=t.evaluated,l=t.lastClicked;a.includes("Limit")||(a.length>=30?this.maxDigitWarning():r?r&&(this.initialize(),this.setState({currentVal:e,formula:e,lastClicked:e})):isNum.includes(e)?this.setState({prevVal:a,currentVal:"0"===a||isOperator.includes(a)?e:a+e,formula:s+e,lastClicked:e}):"."===l&&this.setState({currentVal:a+e,prevVal:a,lastClicked:e,formula:s+e}))}},{key:"handleDecimal",value:function(_){var e=_.target.value,t=this.state,a=t.currentVal,s=t.formula,r=t.evaluated,l=t.lastClicked;r?(this.initialize(),this.setState({currentVal:"0"+e,lastClicked:e})):isNum.includes(l)?this.setState({currentVal:a+e,formula:s+e,prevVal:a,lastClicked:e}):""===s&&this.setState({currentVal:a+e,formula:a+e,prevVal:a,lastClicked:e})}},{key:"initialize",value:function(){this.setState({currentVal:"0",prevVal:"0",formula:"",evaluated:!1,lastClicked:""})}},{key:"render",value:function(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"calculator calculator-outer",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"calculator-inner",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Formula,{formula:this.state.formula}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Output,{currentValue:this.state.currentVal}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Buttons,{numbers:this.handleNumbers,operator:this.handleOperators,init:this.initialize,equals:this.handleEvaluate,decimal:this.handleDecimal})]})})}}]),Calculator}(react__WEBPACK_IMPORTED_MODULE_7__.Component),Formula=function(_){Object(C_Users_Giga_Desktop_Web_Dev_React_ReactCalculator_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(t,_);var e=Object(C_Users_Giga_Desktop_Web_Dev_React_ReactCalculator_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__.a)(t);function t(){return Object(C_Users_Giga_Desktop_Web_Dev_React_ReactCalculator_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.a)(this,t),e.apply(this,arguments)}return Object(C_Users_Giga_Desktop_Web_Dev_React_ReactCalculator_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.a)(t,[{key:"render",value:function(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"calculator-inner-formulaScreen",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"calculator-inner-formulaScreen-formula",children:this.props.formula})})}}]),t}(react__WEBPACK_IMPORTED_MODULE_7__.Component),Output=function(_){Object(C_Users_Giga_Desktop_Web_Dev_React_ReactCalculator_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(t,_);var e=Object(C_Users_Giga_Desktop_Web_Dev_React_ReactCalculator_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__.a)(t);function t(){return Object(C_Users_Giga_Desktop_Web_Dev_React_ReactCalculator_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.a)(this,t),e.apply(this,arguments)}return Object(C_Users_Giga_Desktop_Web_Dev_React_ReactCalculator_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.a)(t,[{key:"render",value:function(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"calculator-inner-output",id:"display",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"calculator-inner-output-value",children:this.props.currentValue})})}}]),t}(react__WEBPACK_IMPORTED_MODULE_7__.Component),Buttons=function(_){Object(C_Users_Giga_Desktop_Web_Dev_React_ReactCalculator_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(t,_);var e=Object(C_Users_Giga_Desktop_Web_Dev_React_ReactCalculator_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__.a)(t);function t(){return Object(C_Users_Giga_Desktop_Web_Dev_React_ReactCalculator_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.a)(this,t),e.apply(this,arguments)}return Object(C_Users_Giga_Desktop_Web_Dev_React_ReactCalculator_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.a)(t,[{key:"render",value:function(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"calculator-inner-buttons",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{className:"calculator-inner-buttons-item item-AC",id:"clear",value:"AC",onClick:this.props.init,children:"AC"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{className:"calculator-inner-buttons-item",id:"divide",value:"/",onClick:this.props.operator,children:"/"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{className:"calculator-inner-buttons-item",id:"multiply",value:"\xd7",onClick:this.props.operator,children:"X"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{className:"calculator-inner-buttons-item",id:"seven",onClick:this.props.numbers,value:"7",children:"7"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{className:"calculator-inner-buttons-item",id:"eight",onClick:this.props.numbers,value:"8",children:"8"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{className:"calculator-inner-buttons-item",id:"nine",onClick:this.props.numbers,value:"9",children:"9"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{className:"calculator-inner-buttons-item",id:"subtract",value:"-",onClick:this.props.operator,children:"-"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{className:"calculator-inner-buttons-item",id:"four",onClick:this.props.numbers,value:"4",children:"4"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{className:"calculator-inner-buttons-item",id:"five",onClick:this.props.numbers,value:"5",children:"5"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{className:"calculator-inner-buttons-item",id:"six",onClick:this.props.numbers,value:"6",children:"6"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{className:"calculator-inner-buttons-item",id:"add",value:"+",onClick:this.props.operator,children:"+"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{className:"calculator-inner-buttons-item",id:"one",onClick:this.props.numbers,value:"1",children:"1"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{className:"calculator-inner-buttons-item",id:"two",onClick:this.props.numbers,value:"2",children:"2"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{className:"calculator-inner-buttons-item",id:"three",onClick:this.props.numbers,value:"3",children:"3"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{className:"calculator-inner-buttons-item item-equals",id:"equals",value:"=",onClick:this.props.equals,children:"="}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{className:"calculator-inner-buttons-item item-zero",id:"zero",onClick:this.props.numbers,value:"0",children:"0"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{className:"calculator-inner-buttons-item",id:"decimal",onClick:this.props.decimal,value:".",children:"."})]})}}]),t}(react__WEBPACK_IMPORTED_MODULE_7__.Component);__webpack_exports__.a=Calculator}},[[10,1,2]]]);
//# sourceMappingURL=main.915acd63.chunk.js.map