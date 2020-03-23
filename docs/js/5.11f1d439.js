(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"6f89":function(n,e,t){"use strict";t.r(e);var l=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("nq-page",{attrs:{title:"<nq-field>"}},[t("template",{slot:"aside"},[t("fields-menu")],1),t("h2",[n._v("Features")]),t("ul",[t("li",[n._v("Stylized by default with outline and light grey background")])]),t("h2",[n._v("Attributes")]),t("ul",[t("li",[n._v("Inherits any quasar <q-field> attributes and slots")])]),t("nq-form",{attrs:{"no-actions":""}},[t("nq-field",{staticClass:"col-4",attrs:{label:"Select a range",hint:"Slider with value "+n.slider,value:n.slider,clearable:""},on:{input:function(e){return null===e&&(n.slider=50)}},scopedSlots:n._u([{key:"control",fn:function(){return[t("q-slider",{staticClass:"q-mt-lg",attrs:{value:n.slider,min:0,max:100,label:"","label-always":""},on:{change:function(e){n.slider=e}}})]},proxy:!0}])}),t("nq-field",{staticClass:"col-4",attrs:{hint:"Range between "+n.range.min+" and "+n.range.max,value:n.range,clearable:""},on:{input:function(e){return null===e&&(n.range={min:0,max:100})}},scopedSlots:n._u([{key:"control",fn:function(){return[t("q-range",{attrs:{value:n.range,min:0,max:100},on:{change:function(e){n.range=e}}})]},proxy:!0}])}),t("nq-field",{staticClass:"col-4",attrs:{hint:"Knob with value "+n.knob,value:n.knob,clearable:""},on:{input:function(e){return null===e&&(n.knob=50)}},scopedSlots:n._u([{key:"control",fn:function(){return[t("div",{staticClass:"full-width"},[t("q-knob",{attrs:{value:n.knob,min:0,max:100,size:"72px",thickness:1,color:"light-blue","track-color":"grey-8"},on:{change:function(e){n.knob=e}}})],1)]},proxy:!0}])}),t("nq-field",{staticClass:"col-6",attrs:{hint:"Calendar with value "+n.date,label:"Pick a date","stack-label":""},scopedSlots:n._u([{key:"control",fn:function(){return[t("q-date",{staticClass:"q-mt-sm full-width",attrs:{minimal:""},model:{value:n.date,callback:function(e){n.date=e},expression:"date"}})]},proxy:!0}])}),t("nq-field",{attrs:{hint:"Time with value "+n.time,label:"Pick a time","stack-label":""},scopedSlots:n._u([{key:"control",fn:function(){return[t("div",{staticClass:"q-mt-sm full-width"},[t("q-time",{model:{value:n.time,callback:function(e){n.time=e},expression:"time"}})],1)]},proxy:!0}])})],1),t("h3",[n._v("Sample code")]),t("vue-code-highlight",[n._v('\n<nq-form no-actions>\n  <nq-field\n    label="Select a range"\n    :hint="`Slider with value ${ slider }`"\n    :value="slider"\n    @input="val => (val === null && (slider = 50))"\n    clearable\n    class="col-4"\n  >\n    <template v-slot:control>\n      <q-slider\n        :value="slider"\n        @change="val => { slider = val }"\n        :min="0"\n        :max="100"\n        label\n        label-always\n        class="q-mt-lg"\n      />\n    </template>\n  </nq-field>\n\n  <nq-field\n    :hint="`Range between ${ range.min } and ${ range.max }`"\n    :value="range"\n    @input="val => (val === null && (range = { min: 0, max: 100}))"\n    clearable\n    class="col-4"\n  >\n    <template v-slot:control>\n      <q-range\n        :value="range"\n        @change="val => { range = val }"\n        :min="0"\n        :max="100"\n      />\n    </template>\n  </nq-field>\n\n  <nq-field\n    :hint="`Knob with value ${ knob }`"\n    :value="knob"\n    @input="val => (val === null && (knob = 50))"\n    clearable\n    class="col-4"\n  >\n    <template v-slot:control>\n      <div class="full-width">\n        <q-knob\n          :value="knob"\n          @change="val => { knob = val }"\n          :min="0"\n          :max="100"\n          size="72px"\n          :thickness="1"\n          color="light-blue"\n          track-color="grey-8"\n        />\n      </div>\n    </template>\n  </nq-field>\n\n  <nq-field\n    :hint="`Calendar with value ${ date }`"\n    label="Pick a date"\n    stack-label\n    class="col-6">\n    <template v-slot:control>\n      <q-date class="q-mt-sm full-width" minimal v-model="date" />\n    </template>\n  </nq-field>\n\n  <nq-field :hint="`Time with value ${ time }`" label="Pick a time" stack-label>\n    <template v-slot:control>\n      <div class="q-mt-sm full-width">\n        <q-time v-model="time" />\n      </div>\n    </template>\n  </nq-field>\n</nq-form>\n    ')])],2)},a=[],i=t("a186"),s={name:"Field",components:{FieldsMenu:i["a"]},data:function(){return{slider:50,range:{min:10,max:30},knob:50,time:"",date:""}}},r=s,o=t("2877"),c=t("eebe"),u=t.n(c),d=t("9989"),m=t("8572"),v=t("0378"),f=t("c1d0"),b=t("7bbf"),q=t("3845"),h=t("52ee"),p=t("ca78"),g=Object(o["a"])(r,l,a,!1,null,null,null);e["default"]=g.exports;u()(g,"components",{QPage:d["a"],QField:m["a"],QForm:v["a"],QSlider:f["a"],QRange:b["a"],QKnob:q["a"],QDate:h["a"],QTime:p["a"]})},a186:function(n,e,t){"use strict";var l=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("q-list",[t("q-item",{attrs:{to:"field"}},[n._v("NqField")]),t("q-item",{attrs:{to:"input"}},[n._v("NqInput")]),t("q-item",{attrs:{to:"number"}},[n._v("NqNumber")]),t("q-item",{attrs:{to:"currency"}},[n._v("NqCurrency")]),t("q-item",{attrs:{to:"percentage"}},[n._v("NqPercentage")]),t("q-item",{attrs:{to:"select"}},[n._v("NqSelect")])],1)},a=[],i={name:"FieldsMenu"},s=i,r=t("2877"),o=t("eebe"),c=t.n(o),u=t("1c1c"),d=t("66e5"),m=Object(r["a"])(s,l,a,!1,null,null,null);e["a"]=m.exports;c()(m,"components",{QList:u["a"],QItem:d["a"]})}}]);