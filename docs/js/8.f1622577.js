(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"96ae":function(e,t,l){"use strict";l.r(t);var o=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("nq-page",{attrs:{title:"<nq-select>"}},[l("template",{slot:"aside"},[l("fields-menu")],1),l("h2",[e._v("Features")]),l("ul",[l("li",[e._v("Basically the same Quasar select but with default styles for NuQu")])]),l("h2",[e._v("Attributes")]),l("ul",[l("li",[l("code",[e._v("option-label")]),e._v(": The property of the option to use as label, for example 'name'")]),l("li",[l("code",[e._v("option-value")]),e._v(": The property of the option to use as value, for example 'id'")]),l("li",[l("code",[e._v("emit-value")]),e._v(": If set, it will only emit the value, if not, the whole option")])]),l("p",[e._v("Model: "),l("code",[e._v(e._s(e.theModel))])]),l("p",[l("nq-select",{attrs:{label:"With emit-value",options:e.options,"option-label":"name","option-value":"id","emit-value":""},model:{value:e.theModel,callback:function(t){e.theModel=t},expression:"theModel"}})],1),l("p",[l("nq-select",{attrs:{label:"With emit-value and map-options",options:e.options,"option-label":"name","option-value":"id","emit-value":"","map-options":""},model:{value:e.theModel,callback:function(t){e.theModel=t},expression:"theModel"}})],1),l("p",[l("nq-select",{attrs:{label:"Without emit-value",options:e.options,"option-label":"name","option-value":"id"},model:{value:e.theModel,callback:function(t){e.theModel=t},expression:"theModel"}})],1)],2)},a=[],n=l("a186"),i={name:"Select",components:{FieldsMenu:n["a"]},data:function(){return{theModel:null,options:[{id:"uuid-a",name:"Opción A",label:"x"},{id:"uuid-b",name:"Opción B"}]}}},s=i,u=l("2877"),p=l("eebe"),c=l.n(p),r=l("9989"),d=l("ddd8"),m=Object(u["a"])(s,o,a,!1,null,null,null);t["default"]=m.exports;c()(m,"components",{QPage:r["a"],QSelect:d["a"]})},a186:function(e,t,l){"use strict";var o=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("q-list",[l("q-item",{attrs:{to:"field"}},[e._v("NqField")]),l("q-item",{attrs:{to:"input"}},[e._v("NqInput")]),l("q-item",{attrs:{to:"number"}},[e._v("NqNumber")]),l("q-item",{attrs:{to:"currency"}},[e._v("NqCurrency")]),l("q-item",{attrs:{to:"percentage"}},[e._v("NqPercentage")]),l("q-item",{attrs:{to:"select"}},[e._v("NqSelect")])],1)},a=[],n={name:"FieldsMenu"},i=n,s=l("2877"),u=l("eebe"),p=l.n(u),c=l("1c1c"),r=l("66e5"),d=Object(s["a"])(i,o,a,!1,null,null,null);t["a"]=d.exports;p()(d,"components",{QList:c["a"],QItem:r["a"]})}}]);