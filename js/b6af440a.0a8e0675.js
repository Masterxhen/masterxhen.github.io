(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["b6af440a"],{4724:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{attrs:{padding:""}},[s("div",[s("h3",[t._v("List Of Chapters")]),s("div",{staticClass:"text-left uppercase row",attrs:{id:"lessons"}},[s("q-list",{attrs:{highlight:"",link:"","inset-separator":""}},t._l(t.chapters,function(e){return s("q-item",{key:e[".key"],nativeOn:{click:function(s){t.$router.push("/lessons/"+t.$route.params.id+"/chapters/"+e[".key"])}}},[s("q-item-side",{attrs:{inverted:"",letter:e.title[0].toUpperCase(),color:"secondary"}}),s("q-item-main",{attrs:{"sublabel-lines":"1",label:""+e.title}})],1)}))],1)])])},i=[];n._withStripped=!0;var r={data:function(){return{}},methods:{showChapter:function(t){console.log(t)}},firestore:function(){return{chapters:this.$db.collection("lessons").doc(this.$route.params.id).collection("chapters")}}},a=r,o=(s("6c06"),s("2877")),c=Object(o["a"])(a,n,i,!1,null,null,null);c.options.__file="lesson.vue";e["default"]=c.exports},"6c06":function(t,e,s){"use strict";var n=s("f4c5"),i=s.n(n);i.a},f4c5:function(t,e,s){}}]);