(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20eb66"],{b112:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{app:""}},[s("v-row",{attrs:{align:"center",justify:"center"}},[s("v-col",{attrs:{cols:"12",xl:"11",lg:"11",md:"11",sm:"12",xs:"12"}},[s("h3",[t._v("撰写文章")]),s("v-divider"),s("v-text-field",{attrs:{label:"标题","hide-details":"auto","prepend-icon":"mdi-format-title"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),s("br"),s("Mdedit",{ref:"editor"}),s("v-combobox",{attrs:{items:t.tag,"search-input":t.search,clearable:"",hint:"最多4个",label:"添加标签","item-text":"name","item-value":"_id",multiple:"","persistent-hint":"","small-chips":"","prepend-icon":"mdi-tag-plus"},on:{"update:searchInput":function(e){t.search=e},"update:search-input":function(e){t.search=e}},scopedSlots:t._u([{key:"no-data",fn:function(){return[s("v-list-item",[s("v-list-item-content",[s("v-list-item-title",[t._v(' 没有搜索到 "'),s("strong",[t._v(t._s(t.search))]),t._v('". 请手动前往标签管理添加 ')])],1)],1)]},proxy:!0}]),model:{value:t.selectTag,callback:function(e){t.selectTag=e},expression:"selectTag"}}),s("v-divider"),s("v-combobox",{attrs:{label:"选择分类",items:t.classifications,"item-text":"name","item-value":"_id","prepend-icon":"mdi-book-plus"},model:{value:t.selectClass,callback:function(e){t.selectClass=e},expression:"selectClass"}}),s("v-divider"),s("v-text-field",{attrs:{label:"大头图url","prepend-icon":"mdi-image-plus"},model:{value:t.cover,callback:function(e){t.cover=e},expression:"cover"}}),s("v-text-field",{attrs:{label:"小头图url","prepend-icon":"mdi-image-plus"},model:{value:t.coverSmall,callback:function(e){t.coverSmall=e},expression:"coverSmall"}}),s("v-row",{attrs:{justify:"end"}},[s("v-spacer"),s("v-btn",{staticClass:"ma-3",attrs:{color:"#2196f3",outlined:""},on:{click:t.draft}},[t._v("存为草稿")]),s("v-btn",{staticClass:"ma-3",attrs:{color:"success"},on:{click:t.send}},[t._v("发布")])],1)],1)],1),s("v-btn",{attrs:{color:"success"},on:{click:t.mdtheme}},[t._v("text")])],1)},a=[],o=(s("2f2f"),s("6b41")),l={components:{Mdedit:o["a"]},data(){return{tag:[],classifications:[],title:"",cover:"",coverSmall:"",selectTag:[],selectClass:"",search:null}},created(){this.getTag(),this.getClassification()},methods:{mdtheme(){this.$refs.editor.settheme()},async draft(){let t={text:this.$refs.editor.getHTML(),mdText:this.$refs.editor.getData(),isPublish:!0,allowComment:!1};const e=await this.$http.createContent(t);let s={title:this.title,contentsId:e[0]._id,tag:this.selectTag.map(t=>t._id),classification:this.selectClass._id,cover:this.cover,coverSmall:this.coverSmall,commentsNum:0,isDraft:!0,view:0};const i=await this.$http.createField(s);let a={fieldsId:i[0]._id,ContentTd:e[0]._id};await this.$http.addField(a),await this.$http.createdToc(e[0]._id);i[0].contentsId===e[0]._id?(this.success("保存成功"),this.$router.push("/write/draft")):this.error("保存失败")},async send(){let t={text:this.$refs.editor.getHTML(),mdText:this.$refs.editor.getData(),isPublish:!0,allowComment:!1};const e=await this.$http.createContent(t);let s={title:this.title,contentsId:e[0]._id,tag:this.selectTag,classification:this.selectClass._id,cover:this.cover,coverSmall:this.coverSmall,commentsNum:0,isDraft:!1,view:0};const i=await this.$http.createField(s);await this.$http.ClassificationContentsNum(this.selectClass._id,1),await this.$http.TagContentsNum(this.selectTag.map(t=>t._id),1);let a={fieldsId:i[0]._id,ContentTd:e[0]._id};await this.$http.addField(a);const o=await this.$http.createdToc(e[0]._id);console.log(o),i[0].contentsId===e[0]._id?(this.success("发送成功"),this.$router.push("/manage/manageArticles")):this.error("发送失败")},async getTag(){const t=await this.$http.getTag();this.tag=t[0].data},async getClassification(){const t=await this.$http.getClassification();this.classifications=t[0].data},success(t){this.$toast.success(t,{position:"bottom-right",timeout:5e3,closeOnClick:!0,pauseOnFocusLoss:!0,pauseOnHover:!0,draggable:!0,draggablePercent:.6,showCloseButtonOnHover:!1,hideProgressBar:!0,closeButton:"button",icon:!0,rtl:!1})},error(t){this.$toast.error(t,{position:"bottom-right",timeout:5e3,closeOnClick:!0,pauseOnFocusLoss:!0,pauseOnHover:!0,draggable:!0,draggablePercent:.6,showCloseButtonOnHover:!1,hideProgressBar:!0,closeButton:"button",icon:!0,rtl:!1})}},watch:{model(t){t.length>5&&this.$nextTick(()=>this.model.pop())},theme(t){}}},c=l,n=s("2877"),r=s("6544"),d=s.n(r),h=s("8336"),m=s("62ad"),u=s("2b5d"),p=s("a523"),v=s("ce7e"),g=s("da13"),f=s("5d23"),b=s("0fd9"),w=s("2fa4"),C=s("8654"),_=Object(n["a"])(c,i,a,!1,null,null,null);e["default"]=_.exports;d()(_,{VBtn:h["a"],VCol:m["a"],VCombobox:u["a"],VContainer:p["a"],VDivider:v["a"],VListItem:g["a"],VListItemContent:f["a"],VListItemTitle:f["c"],VRow:b["a"],VSpacer:w["a"],VTextField:C["a"]})}}]);
//# sourceMappingURL=chunk-2d20eb66.167010da.js.map