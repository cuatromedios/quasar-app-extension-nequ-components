(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{a186:function(e,t,n){"use strict";var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-list",[n("q-item",{attrs:{to:"field"}},[e._v("NqField")]),n("q-item",{attrs:{to:"input"}},[e._v("NqInput")]),n("q-item",{attrs:{to:"number"}},[e._v("NqNumber")]),n("q-item",{attrs:{to:"currency"}},[e._v("NqCurrency")]),n("q-item",{attrs:{to:"percentage"}},[e._v("NqPercentage")]),n("q-item",{attrs:{to:"select"}},[e._v("NqSelect")])],1)},a=[],o={name:"FieldsMenu"},r=o,i=n("2877"),s=n("eebe"),c=n.n(s),u=n("1c1c"),d=n("66e5"),p=Object(i["a"])(r,l,a,!1,null,null,null);t["a"]=p.exports;c()(p,"components",{QList:u["a"],QItem:d["a"]})},d52b:function(e,t,n){"use strict";n.r(t);var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nq-page",{attrs:{title:"<nq-input-number>"}},[n("template",{slot:"aside"},[n("fields-menu")],1),n("h2",[e._v("Features")]),n("ul",[n("li",[e._v("Auto right aligned")])]),n("h2",[e._v("Attributes")]),n("ul",[n("li",[n("code",[e._v("pattern")]),e._v(" Any pattern of NumeralJS: http://numeraljs.com/ for example 0,0.00")]),n("li",[n("code",[e._v("prefix")]),e._v(" Any string to put before the number")]),n("li",[n("code",[e._v("sufix")]),e._v(" Any string to put after the number")])]),n("h3",[e._v("Emitted Model: "),n("code",[e._v(e._s(e.theModel))])]),n("nq-form",{attrs:{"submit-label":"","cancel-label":"","no-actions":""}},[n("nq-input-number",{staticClass:"col-6",attrs:{pattern:"0,0",hint:"Pattern: 0,0"},model:{value:e.theModel,callback:function(t){e.theModel=t},expression:"theModel"}}),n("nq-input-number",{staticClass:"col-6",attrs:{pattern:"0,0.0",hint:"Pattern: 0,0.0"},model:{value:e.theModel,callback:function(t){e.theModel=t},expression:"theModel"}}),n("nq-input-number",{staticClass:"col-6",attrs:{pattern:"0,0.00",prefix:"Gold",hint:"Pattern: 0,0.00, prefix: 'Gold'"},model:{value:e.theModel,callback:function(t){e.theModel=t},expression:"theModel"}}),n("nq-input-number",{staticClass:"col-6",attrs:{pattern:"0,0.000",hint:"Pattern: 0,0.000"},model:{value:e.theModel,callback:function(t){e.theModel=t},expression:"theModel"}}),n("nq-input-number",{staticClass:"col-6",attrs:{pattern:"0 b",align:"left",hint:"Pattern: 0 b, align: left"},model:{value:e.theModel,callback:function(t){e.theModel=t},expression:"theModel"}}),n("nq-input-number",{staticClass:"col-6",attrs:{before:"! ",pattern:"0",hint:"Pattern: 0, before: '!'"},model:{value:e.theModel,callback:function(t){e.theModel=t},expression:"theModel"}})],1),n("h3",[e._v("Sample code")]),n("vue-code-highlight",[e._v('\n<nq-form submit-label="" cancel-label="" no-actions>\n  <nq-input-number v-model="theModel" pattern="0,0" hint="Pattern: 0,0" class="col-6" />\n  <nq-input-number v-model="theModel" pattern="0,0.0" hint="Pattern: 0,0.0" class="col-6" />\n  <nq-input-number v-model="theModel" pattern="0,0.00" prefix="Gold"  hint="Pattern: 0,0.00, prefix: \'Gold\'" class="col-6" />\n  <nq-input-number v-model="theModel" pattern="0,0.000" hint="Pattern: 0,0.000" class="col-6" />\n  <nq-input-number v-model="theModel" pattern="0 b" align="left" hint="Pattern: 0 b, align: left" class="col-6" />\n  <nq-input-number v-model="theModel" before="! " pattern="0" hint="Pattern: 0, before: \'!\'" class="col-6" />\n</nq-form>\n    ')])],2)},a=[],o=n("a186"),r={name:"Number",components:{FieldsMenu:o["a"]},data:function(){return{theModel:12345.678}}},i=r,s=n("2877"),c=n("eebe"),u=n.n(c),d=n("9989"),p=n("27f9"),m=n("0378"),h=Object(s["a"])(i,l,a,!1,null,null,null);t["default"]=h.exports;u()(h,"components",{QPage:d["a"],QInput:p["a"],QForm:m["a"]})}}]);