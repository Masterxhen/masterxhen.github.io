(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["69e40057"],{"974c":function(t,e,r){"use strict";var a=r("990d"),i=r.n(a);i.a},"990d":function(t,e,r){},db5f:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("q-page",{attrs:{padding:""}},[r("h3",[t._v(t._s("Name: "+t.chapter.title))]),r("div",[r("q-input",{attrs:{"float-label":"Chapter Title"},model:{value:t.chapter.title,callback:function(e){t.$set(t.chapter,"title",e)},expression:"chapter.title"}}),r("q-input",{attrs:{rows:"5",type:"textarea","float-label":"Description"},model:{value:t.chapter.description,callback:function(e){t.$set(t.chapter,"description",e)},expression:"chapter.description"}}),r("q-input",{attrs:{rows:"5",type:"textarea","float-label":"Overview"},model:{value:t.chapter.overview,callback:function(e){t.$set(t.chapter,"overview",e)},expression:"chapter.overview"}}),r("q-btn",{attrs:{label:"Add Chapter"},on:{click:t.addLesson}})],1)])},i=[];a._withStripped=!0;var c={data:function(){return{categories:[],types:[],chapter:{title:"",description:"",creator:this.$store.getters["getUser"].email,creatorId:this.$store.getters["getUser"].uid,createdAt:Date.now()}}},methods:{addLesson:function(){var t=this;this.$db.collection("lessons").doc(this.$route.params.id).collection("chapters").add(this.chapter).then(function(){t.clearChapter()})},clearChapter:function(){this.chapter.title="",this.chapter.genre="",this.chapter.description="",this.chapter.overview=""}},firestore:function(){return{categories:this.$db.collection("categories"),types:this.$db.collection("types")}}},s=c,o=(r("974c"),r("2877")),n=Object(o["a"])(s,a,i,!1,null,null,null);n.options.__file="create_chapter.vue";e["default"]=n.exports}}]);