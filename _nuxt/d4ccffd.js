(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{310:function(e,t,n){"use strict";var o=n(323);t.a=o.a},356:function(e,t,n){"use strict";function o(e){if("function"!=typeof e.getRootNode){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}var t=e.getRootNode();return t!==document&&t.getRootNode({composed:!0})!==document?null:t}n.d(t,"a",(function(){return o}))},357:function(e,t,n){"use strict";var o={inserted:function(e,t,n){var o=t.value,r=t.options||{passive:!0};window.addEventListener("resize",o,r),e._onResize=Object(e._onResize),e._onResize[n.context._uid]={callback:o,options:r},t.modifiers&&t.modifiers.quiet||o()},unbind:function(e,t,n){var o;if(null===(o=e._onResize)||void 0===o?void 0:o[n.context._uid]){var r=e._onResize[n.context._uid],c=r.callback,l=r.options;window.removeEventListener("resize",c,l),delete e._onResize[n.context._uid]}}};t.a=o},387:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var o=n(149);var r=n(159),c=n(122);function l(e){return function(e){if(Array.isArray(e))return Object(o.a)(e)}(e)||Object(r.a)(e)||Object(c.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},393:function(e,t,n){"use strict";n.r(t);var o=n(448),r=n(320),c=n(444),l=n(443),m=n(445),d=(n(32),{data:function(){return{name:"",email:"",message:""}},methods:{submitForm:function(){}}}),f=n(68),component=Object(f.a)(d,(function(){var e=this,t=e._self._c;return t(r.a,{staticClass:"ml-10 mb-12",staticStyle:{clear:"both"},attrs:{"max-width":"60%",dark:"",transparent:"",flat:""}},[t("h1",[e._v("Contact")]),e._v(" "),t(c.a,{attrs:{method:"POST",action:"https://formspree.io/f/xyyaorrp"},on:{submit:function(t){return t.preventDefault(),e.submitForm.apply(null,arguments)}}},[t(l.a,{attrs:{label:"Name",id:"name",name:"user_name",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),t(l.a,{attrs:{label:"E-mail",id:"mail",name:"user_mail",type:"email",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),t(m.a,{attrs:{label:"Message",id:"msg",name:"user_message",required:""},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}}),e._v(" "),t(o.a,{attrs:{type:"submit",color:"primary"}},[e._v("Send your message")])],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);