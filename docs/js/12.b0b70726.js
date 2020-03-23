(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{a04d:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nq-page",{attrs:{title:"Layouts","max-width":"md"}},[n("h2",[e._v("nq-layout")]),n("p",[e._v("Creates a layout that includes a header bar that can contain a logo and a menu.")]),n("h3",[e._v("Attributes")]),n("ul",[n("li",[n("code",[e._v("toolbar-class")]),e._v(" Classes to be added to the toolbar, for examle to change the background, if not set, the default is 'bg-primary text-white'")]),n("li",[n("code",[e._v("indicatorColor")]),e._v(" A named color to use as in the indicator, 'secondary' by default")]),n("li",[n("code",[e._v("tabs")]),e._v(" An array to define the tabs menu (see sample below)")]),n("li",[n("code",[e._v("menuIcon")]),e._v(" The named icon to be used as in the button that toggles the hamburger menu in mobile devices. 'menu' (Material Icon) by default, can be set, for example to 'fal fa-bars' if using fontAwesome")])]),n("h3",[e._v("Slots")]),n("ul",[n("li",[n("code",[e._v("title")]),e._v(" Add any element to the title area, for example an image")])]),n("h2",[e._v("Sample code")]),n("vue-code-highlight",[e._v("\n<template>\n  <nq-layout toolbarClass=\"bg-black text-white\" :tabs=\"tabs\">\n    <template slot=\"title\">\n      <q-btn flat label=\"Header\"/>\n    </template>\n    <router-view />\n  </nq-layout>\n</template>\n\n<script>\n\nexport default {\n  name: 'MainLayout',\n  components: {},\n  data () {\n    return {\n      tabs: [\n        {\n          title: 'Layouts',\n          icon: 'code',\n          route: 'layout'\n        },\n        {\n          title: 'Fields',\n          icon: 'code',\n          children: [\n            { title: 'Field', route: 'field' },\n            { title: 'Input', route: 'input' },\n            { title: 'Number', route: 'number' },\n            { title: 'Currency', route: 'currency' },\n            { title: 'Percentage', route: 'percentage' },\n            { title: 'Select', route: 'select' }\n          ]\n        },\n        {\n          title: 'Forms',\n          icon: 'code',\n          route: 'form'\n        },\n        {\n          title: 'Table',\n          icon: 'code',\n          route: 'table'\n        }\n      ]\n    }\n  }\n}\n<\/script>\n")])],1)},o=[],l={name:"Layout",data:function(){return{}}},i=l,r=n("2877"),u=n("eebe"),c=n.n(u),s=n("9989"),d=n("4d5a"),b=n("9c40"),m=Object(r["a"])(i,a,o,!1,null,null,null);t["default"]=m.exports;c()(m,"components",{QPage:s["a"],QLayout:d["a"],QBtn:b["a"]})}}]);