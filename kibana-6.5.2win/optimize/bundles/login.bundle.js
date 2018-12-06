/*! Copyright Elasticsearch B.V. and/or license to Elasticsearch B.V. under one or more contributor license agreements
 * Licensed under the Elastic License; you may not use this file except in compliance with the Elastic License. */
webpackJsonp([9],{5138:function(module,exports,__webpack_require__){"use strict";__webpack_require__(132);__webpack_require__(134);__webpack_require__(135);__webpack_require__(136);__webpack_require__(137);__webpack_require__(138);__webpack_require__(139);__webpack_require__(140);__webpack_require__(141);__webpack_require__(142);__webpack_require__(143);__webpack_require__(144);__webpack_require__(145);__webpack_require__(146);__webpack_require__(147);__webpack_require__(148);__webpack_require__(149);__webpack_require__(150);__webpack_require__(151);__webpack_require__(152);__webpack_require__(153);__webpack_require__(154);__webpack_require__(155);__webpack_require__(156);__webpack_require__(157);__webpack_require__(158);__webpack_require__(159);__webpack_require__(160);__webpack_require__(161);__webpack_require__(162);__webpack_require__(163);__webpack_require__(164);__webpack_require__(165);__webpack_require__(166);__webpack_require__(167);__webpack_require__(168);__webpack_require__(169);__webpack_require__(170);__webpack_require__(171);__webpack_require__(172);__webpack_require__(173);__webpack_require__(174);__webpack_require__(175);__webpack_require__(176);__webpack_require__(177);__webpack_require__(178);__webpack_require__(179);__webpack_require__(180);__webpack_require__(181);__webpack_require__(182);__webpack_require__(183);__webpack_require__(110);__webpack_require__(184);__webpack_require__(185);__webpack_require__(186);__webpack_require__(187);__webpack_require__(188);__webpack_require__(189);__webpack_require__(190);__webpack_require__(191);__webpack_require__(192);__webpack_require__(193);__webpack_require__(194);__webpack_require__(195);__webpack_require__(196);__webpack_require__(197);__webpack_require__(198);__webpack_require__(199);__webpack_require__(200);__webpack_require__(201);__webpack_require__(202);__webpack_require__(203);__webpack_require__(204);__webpack_require__(205);__webpack_require__(206);__webpack_require__(207);__webpack_require__(208);__webpack_require__(209);__webpack_require__(210);__webpack_require__(211);__webpack_require__(212);__webpack_require__(213);__webpack_require__(214);__webpack_require__(215);__webpack_require__(216);__webpack_require__(217);__webpack_require__(218);__webpack_require__(219);__webpack_require__(220);__webpack_require__(221);var _i18n=__webpack_require__(18);var _kibanaCore__=__webpack_require__(222);var injectedMetadata=JSON.parse(document.querySelector("kbn-injected-metadata").getAttribute("data"));_i18n.i18n.init(injectedMetadata.legacyMetadata.translations);new _kibanaCore__.CoreSystem({injectedMetadata:injectedMetadata,rootDomElement:document.body,requireLegacyFiles:function requireLegacyFiles(){__webpack_require__(5139)}}).start()},5139:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});__webpack_require__(5140)},5140:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var tslib_1=__webpack_require__(5);var lodash_1=__webpack_require__(1);var parse_next_1=__webpack_require__(5141);var components_1=__webpack_require__(5142);var login_html_1=tslib_1.__importDefault(__webpack_require__(5149));var react_1=tslib_1.__importDefault(__webpack_require__(0));var react_dom_1=__webpack_require__(14);__webpack_require__(366);var chrome_1=tslib_1.__importDefault(__webpack_require__(9));var url_1=__webpack_require__(82);__webpack_require__(5150);var messageMap={SESSION_EXPIRED:"Your session has timed out. Please log in again."};chrome_1.default.setVisible(false).setRootTemplate(login_html_1.default).setRootController("login",function($scope,$http,$window,secureCookies,loginState){var basePath=chrome_1.default.getBasePath();var next=parse_next_1.parseNext($window.location.href,basePath);var isSecure=!!$window.location.protocol.match(/^https/);$scope.$$postDigest(function(){var domNode=document.getElementById("reactLoginRoot");var msgQueryParam=url_1.parse($window.location.href,true).query.msg||"";react_dom_1.render(react_1.default.createElement(components_1.LoginPage,{http:$http,window:$window,infoMessage:lodash_1.get(messageMap,msgQueryParam),loginState:loginState,isSecureConnection:isSecure,requiresSecureConnection:secureCookies,next:next}),domNode)})})},5141:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var url_1=__webpack_require__(82);function parseNext(href){var basePath=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";var _url_1$parse=url_1.parse(href,true),query=_url_1$parse.query,hash=_url_1$parse.hash;if(!query.next)return basePath+"/";var next=void 0;next=Array.isArray(query.next)&&query.next.length>0?query.next[0]:query.next;var _url_1$parse2=url_1.parse(next,false,true),protocol=_url_1$parse2.protocol,hostname=_url_1$parse2.hostname,port=_url_1$parse2.port,pathname=_url_1$parse2.pathname;if(null!==protocol||null!==hostname||null!==port)return basePath+"/";if(!String(pathname).startsWith(basePath))return basePath+"/";return query.next+(hash||"")}exports.parseNext=parseNext},5142:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var login_page_1=__webpack_require__(5143);exports.LoginPage=login_page_1.LoginPage},5143:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var login_page_1=__webpack_require__(5144);exports.LoginPage=login_page_1.LoginPage},5144:function(module,exports,__webpack_require__){"use strict";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;"value"in descriptor&&(descriptor.writable=true);Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){protoProps&&defineProperties(Constructor.prototype,protoProps);staticProps&&defineProperties(Constructor,staticProps);return Constructor}}();function _defineProperty(obj,key,value){key in obj?Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true}):obj[key]=value;return obj}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!==typeof call&&"function"!==typeof call?self:call}function _inherits(subClass,superClass){if("function"!==typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:true});var tslib_1=__webpack_require__(5);var react_1=tslib_1.__importStar(__webpack_require__(0));var react_2=__webpack_require__(10);var eui_1=__webpack_require__(2);var classnames_1=tslib_1.__importDefault(__webpack_require__(7));var basic_login_form_1=__webpack_require__(5145);var disabled_login_form_1=__webpack_require__(5147);var LoginPage=function(_react_1$Component){_inherits(LoginPage,_react_1$Component);function LoginPage(){_classCallCheck(this,LoginPage);var _this=_possibleConstructorReturn(this,(LoginPage.__proto__||Object.getPrototypeOf(LoginPage)).apply(this,arguments));_this.allowLogin=function(){if(_this.props.requiresSecureConnection&&!_this.props.isSecureConnection)return false;return _this.props.loginState.allowLogin&&"form"===_this.props.loginState.layout};_this.getLoginForm=function(){if(_this.props.requiresSecureConnection&&!_this.props.isSecureConnection)return react_1.default.createElement(disabled_login_form_1.DisabledLoginForm,{title:react_1.default.createElement(react_2.FormattedMessage,{id:"kbn.login.requiresSecureConnectionTitle",defaultMessage:"A secure connection is required for log in"}),message:react_1.default.createElement(react_2.FormattedMessage,{id:"kbn.login.requiresSecureConnectionMessage",defaultMessage:"Contact your system administrator."})});var layout=_this.props.loginState.layout;switch(layout){case"form":return react_1.default.createElement(basic_login_form_1.BasicLoginForm,Object.assign({},_this.props));case"error-es-unavailable":return react_1.default.createElement(disabled_login_form_1.DisabledLoginForm,{title:react_1.default.createElement(react_2.FormattedMessage,{id:"kbn.login.esUnavailableTitle",defaultMessage:"Cannot connect to the Elastiscearch cluster"}),message:react_1.default.createElement(react_2.FormattedMessage,{id:"kbn.login.esUnavailableMessage",defaultMessage:"See the Kibana logs for details and try reloading the page."})});case"error-xpack-unavailable":return react_1.default.createElement(disabled_login_form_1.DisabledLoginForm,{title:react_1.default.createElement(react_2.FormattedMessage,{id:"kbn.login.xpackUnavailableTitle",defaultMessage:"Cannot connect to the Elasticsearch cluster currently configured for Kibana."}),message:react_1.default.createElement(react_2.FormattedMessage,{id:"kbn.login.xpackUnavailableMessage",defaultMessage:"To use the full set of free features in this distribution of Kibana, please update Elasticsearch to the default distribution."})});default:return react_1.default.createElement(disabled_login_form_1.DisabledLoginForm,{title:react_1.default.createElement(react_2.FormattedMessage,{id:"kbn.login.unknownLayoutTitle",defaultMessage:"Unsupported login form layout."}),message:react_1.default.createElement(react_2.FormattedMessage,{id:"kbn.login.unknownLayoutMessage",defaultMessage:"Refer to the Kibana logs for more details and refresh to try again."})})}};return _this}_createClass(LoginPage,[{key:"render",value:function render(){var allowLogin=this.allowLogin();var contentHeaderClasses=classnames_1.default("loginWelcome__content","eui-textCenter",_defineProperty({},"loginWelcome__contentDisabledForm",!allowLogin));var contentBodyClasses=classnames_1.default("loginWelcome__content","loginWelcome-body",_defineProperty({},"loginWelcome__contentDisabledForm",!allowLogin));return react_1.default.createElement(react_2.I18nProvider,null,react_1.default.createElement("div",{className:"loginWelcome login-form"},react_1.default.createElement("header",{className:"loginWelcome__header"},react_1.default.createElement("div",{className:contentHeaderClasses},react_1.default.createElement(eui_1.EuiSpacer,{size:"xxl"}),react_1.default.createElement("span",{className:"loginWelcome__logo"},react_1.default.createElement(eui_1.EuiIcon,{type:"logoKibana",size:"xxl"})),react_1.default.createElement(eui_1.EuiTitle,{size:"l",className:"loginWelcome__title"},react_1.default.createElement("h1",null,react_1.default.createElement(react_2.FormattedMessage,{id:"kbn.login.welcomeTitle",defaultMessage:"Welcome to Kibana"}))),react_1.default.createElement(eui_1.EuiText,{size:"s",color:"subdued",className:"loginWelcome__subtitle"},react_1.default.createElement("p",null,react_1.default.createElement(react_2.FormattedMessage,{id:"kbn.login.welcomeDescription",defaultMessage:"Your window into the Elastic Stack"}))),react_1.default.createElement(eui_1.EuiSpacer,{size:"xl"}))),react_1.default.createElement("div",{className:contentBodyClasses},react_1.default.createElement(eui_1.EuiFlexGroup,{gutterSize:"l"},react_1.default.createElement(eui_1.EuiFlexItem,null,this.getLoginForm())))))}}]);return LoginPage}(react_1.Component);exports.LoginPage=LoginPage},5145:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var basic_login_form_1=__webpack_require__(5146);exports.BasicLoginForm=basic_login_form_1.BasicLoginForm},5146:function(module,exports,__webpack_require__){"use strict";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;"value"in descriptor&&(descriptor.writable=true);Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){protoProps&&defineProperties(Constructor.prototype,protoProps);staticProps&&defineProperties(Constructor,staticProps);return Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!==typeof call&&"function"!==typeof call?self:call}function _inherits(subClass,superClass){if("function"!==typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:true});var tslib_1=__webpack_require__(5);var eui_1=__webpack_require__(2);var react_1=tslib_1.__importStar(__webpack_require__(0));var BasicLoginForm=function(_react_1$Component){_inherits(BasicLoginForm,_react_1$Component);function BasicLoginForm(){_classCallCheck(this,BasicLoginForm);var _this=_possibleConstructorReturn(this,(BasicLoginForm.__proto__||Object.getPrototypeOf(BasicLoginForm)).apply(this,arguments));_this.state={hasError:false,isLoading:false,username:"",password:"",message:""};_this.renderMessage=function(){if(_this.state.message)return react_1.default.createElement(react_1.Fragment,null,react_1.default.createElement(eui_1.EuiCallOut,{size:"s",color:"danger","data-test-subj":"loginErrorMessage",title:_this.state.message,role:"alert"}),react_1.default.createElement(eui_1.EuiSpacer,{size:"l"}));if(_this.props.infoMessage)return react_1.default.createElement(react_1.Fragment,null,react_1.default.createElement(eui_1.EuiCallOut,{size:"s",color:"primary","data-test-subj":"loginInfoMessage",title:_this.props.infoMessage,role:"status"}),react_1.default.createElement(eui_1.EuiSpacer,{size:"l"}));return null};_this.isFormValid=function(){var _this$state=_this.state,username=_this$state.username,password=_this$state.password;return username&&password};_this.onUsernameChange=function(e){_this.setState({username:e.target.value})};_this.onPasswordChange=function(e){_this.setState({password:e.target.value})};_this.submit=function(e){e.preventDefault();if(!_this.isFormValid())return;_this.setState({isLoading:true,message:""});var _this$props=_this.props,http=_this$props.http,window=_this$props.window,next=_this$props.next;var _this$state2=_this.state,username=_this$state2.username,password=_this$state2.password;http.post("./api/security/v1/login",{username:username,password:password}).then(function(){return window.location.href=next},function(error){var _ref=error.data||{},_ref$statusCode=_ref.statusCode,statusCode=void 0===_ref$statusCode?500:_ref$statusCode;var message="Oops! Error. Try again.";401===statusCode&&(message="Invalid username or password. Please try again.");_this.setState({hasError:true,message:message,isLoading:false})})};return _this}_createClass(BasicLoginForm,[{key:"render",value:function render(){return react_1.default.createElement(react_1.Fragment,null,this.renderMessage(),react_1.default.createElement(eui_1.EuiPanel,null,react_1.default.createElement("form",{onSubmit:this.submit},react_1.default.createElement(eui_1.EuiFormRow,{label:"Username"},react_1.default.createElement(eui_1.EuiFieldText,{id:"username",name:"username","data-test-subj":"loginUsername",value:this.state.username,onChange:this.onUsernameChange,disabled:this.state.isLoading,isInvalid:false,"aria-required":true,inputRef:this.setUsernameInputRef})),react_1.default.createElement(eui_1.EuiFormRow,{label:"Password"},react_1.default.createElement(eui_1.EuiFieldText,{id:"password",name:"password","data-test-subj":"loginPassword",type:"password",value:this.state.password,onChange:this.onPasswordChange,disabled:this.state.isLoading,isInvalid:false,"aria-required":true})),react_1.default.createElement(eui_1.EuiButton,{fill:true,type:"submit",color:"primary",onClick:this.submit,isLoading:this.state.isLoading,"data-test-subj":"loginSubmit"},"Log in"))))}},{key:"setUsernameInputRef",value:function setUsernameInputRef(ref){ref&&ref.focus()}}]);return BasicLoginForm}(react_1.Component);exports.BasicLoginForm=BasicLoginForm},5147:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var disabled_login_form_1=__webpack_require__(5148);exports.DisabledLoginForm=disabled_login_form_1.DisabledLoginForm},5148:function(module,exports,__webpack_require__){"use strict";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;"value"in descriptor&&(descriptor.writable=true);Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){protoProps&&defineProperties(Constructor.prototype,protoProps);staticProps&&defineProperties(Constructor,staticProps);return Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!==typeof call&&"function"!==typeof call?self:call}function _inherits(subClass,superClass){if("function"!==typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:true});var tslib_1=__webpack_require__(5);var eui_1=__webpack_require__(2);var react_1=tslib_1.__importStar(__webpack_require__(0));var DisabledLoginForm=function(_react_1$Component){_inherits(DisabledLoginForm,_react_1$Component);function DisabledLoginForm(){_classCallCheck(this,DisabledLoginForm);return _possibleConstructorReturn(this,(DisabledLoginForm.__proto__||Object.getPrototypeOf(DisabledLoginForm)).apply(this,arguments))}_createClass(DisabledLoginForm,[{key:"render",value:function render(){return react_1.default.createElement(eui_1.EuiPanel,null,react_1.default.createElement(eui_1.EuiText,{color:"danger",style:{textAlign:"center"}},react_1.default.createElement("p",null,this.props.title)),react_1.default.createElement(eui_1.EuiText,{style:{textAlign:"center"}},react_1.default.createElement("p",null,this.props.message)))}}]);return DisabledLoginForm}(react_1.Component);exports.DisabledLoginForm=DisabledLoginForm},5149:function(module,exports){module.exports='<div id="reactLoginRoot" />'},5150:function(module,exports){}},[5138]);