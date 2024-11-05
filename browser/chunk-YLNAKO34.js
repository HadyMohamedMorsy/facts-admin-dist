import{Fa as W,Ga as H,Ha as Y,Ia as J,Ja as Q,Qa as X,la as K,oa as j,pa as z,va as O,wa as q,ya as G,za as N}from"./chunk-GLL4IFIG.js";import{q as $}from"./chunk-YTGKFTSL.js";import{$ as b,Cb as u,Db as c,Eb as T,Ib as V,Lb as B,Mb as k,Xb as L,Za as _,Zb as S,da as w,dc as R,kb as F,oc as I,pa as P,pc as A,qa as U,qb as x,ta as M,tb as v,yb as D}from"./chunk-BU7DNSOB.js";import{a as p,b as m,h as g,i as h,k as l}from"./chunk-7SQXNNBM.js";var C=class{constructor(t){this.id=t?.id||null,this.order=t?.order||null,this.title_en=t?.title_en||null,this.title_ar=t?.title_ar||null,this.page=t?.page||null,this.short_description_en=t?.short_description_en||null,this.short_description_ar=t?.short_description_ar||null,this.is_active=t?.is_active||null,this.featuredImage=t?.featuredImage||null}};function ne(a,t){a&1&&(u(0,"p",5),T(1,"i",6),L(2),I(3,"translate"),c()),a&2&&(_(2),S(" ",A(3,1,"All Fields it will be Required button it will not request"),`
`))}function ie(a,t){if(a&1){let n=V();u(0,"app-form",4),B("onSubmit",function(){P(n);let E=k();return U(E.createUpdateRecord(E.dialogMeta.endpoints))}),c(),x(1,ne,4,3,"p",5)}if(a&2){let n=k();v("form",n.createUpdateForm)("model",n.model)("fields",n.fields)("options",n.options)("withFormPadding",n.dialogMeta.withFormPadding)("showFormActions",n.dialogMeta.showFormActions)("showSubmitButton",n.dialogMeta.showSubmitButton)("showResetButton",n.dialogMeta.showResetButton)("buttonLabel",n.dialogMeta.submitButtonLabel)("submitBtnLoading",n.isLoading()),_(),D(n.dialogMeta.langDesc?1:-1)}}function ae(a,t){a&1&&T(0,"app-spinner")}var Z=(()=>{var t,n,o,ee;let d=class d extends J{constructor(){super(...arguments);h(this,o);h(this,t,b(G));h(this,n,b(N).languages)}ngOnInit(){this.dialogMeta=m(p({},this.dialogMeta),{endpoints:{store:"banner/store",update:"banner/update"}}),this.editData?(this.dialogMeta=m(p({},this.dialogMeta),{dialogTitle:this.translate.instant("Update banner"),submitButtonLabel:this.translate.instant("Update banner")}),this.model=new C(this.editData)):(this.dialogMeta=m(p({},this.dialogMeta),{dialogTitle:this.translate.instant("Create banner"),submitButtonLabel:this.translate.instant("Create banner")}),this.model=new C),this.fields=this.configureFields()}configureFields(){return[{key:"order",type:"floated-input-field",props:{type:"number",label:"Order"}},{key:"page",type:"floated-input-field",props:{label:"page"}},{type:"tabs-field",fieldGroup:g(this,n).map(e=>({props:{label:`${e.label} (${e.value.toUpperCase()})`},fieldGroup:l(this,o,ee).call(this,e.value)}))},g(this,t).fieldBuilder([{key:"featuredImage",type:"file-field",props:{chooseLabel:"Featured Image",description:"Dimensions Image 1280 px Width & 853 px Height & max image size 100 kb"}}])]}};t=new WeakMap,n=new WeakMap,o=new WeakSet,ee=function(e){return[g(this,t).fieldBuilder([{key:`title_${e}`,type:"floated-input-field",props:{label:"title"}}]),g(this,t).fieldBuilder([{key:`short_description_${e}`,type:"textarea-field",props:{label:"short description"}}])]},d.\u0275fac=(()=>{let e;return function(i){return(e||(e=M(d)))(i||d)}})(),d.\u0275cmp=w({type:d,selectors:[["app-banner-dialog"]],standalone:!0,features:[F,R],decls:8,vars:4,consts:[[1,"p-3","border-bottom-1","border-300","bg-white","md:sticky","z-index-1102","top-0"],[1,"flex","align-items-center","justify-content-between","gap-2"],[1,"font-semibold","capitalize","text-lg","line-height-2","my-0"],["pButton","","pRipple","","icon","pi pi-times",1,"flex-shrink-0","p-button-text","p-button-plain","p-button-rounded","w-2rem","h-2rem",3,"click"],[3,"onSubmit","form","model","fields","options","withFormPadding","showFormActions","showSubmitButton","showResetButton","buttonLabel","submitBtnLoading"],[1,"filters-hint","px-4","py-4"],[1,"fas","fa-info-circle","text-primary"]],template:function(r,i){r&1&&(u(0,"div",0)(1,"div",1)(2,"h2",2),L(3),c(),u(4,"button",3),B("click",function(){return i.closeDialog()}),c()()(),x(5,ie,2,11),I(6,"async"),x(7,ae,1,0,"app-spinner")),r&2&&(_(3),S(" ",i.dialogMeta.dialogTitle," "),_(2),D(A(6,2,i.dialogMeta.dialogData$)?5:7))},dependencies:[$,z,j,K,q,O,Y,H],encapsulation:2,changeDetection:0});let a=d;return a})();var xe=(()=>{var t,s;let o=class o extends Q{constructor(){super(...arguments);h(this,t);this.currentLang=b(W).currentLanguage}ngOnInit(){this.dialogComponent=Z,this.dialogConfig=m(p({},this.dialogConfig),{width:"1200px"}),this.indexMeta=m(p({},this.indexMeta),{endpoints:{index:"banner/index",delete:"banner/delete"},indexTitle:l(this,t,s).call(this,"Banner"),indexIcon:"pi pi-book",createBtnLabel:l(this,t,s).call(this,"Create Banner"),indexTableKey:"BANNER_KEY",columns:[{name:"id",title:l(this,t,s).call(this,"#ID"),searchable:!1,orderable:!0},{name:"order",title:l(this,t,s).call(this,"order"),searchable:!1,orderable:!0},{name:"page",title:l(this,t,s).call(this,"page"),searchable:!1,orderable:!0},{name:`title_${this.currentLang()}`,title:l(this,t,s).call(this,"title"),searchable:!0,orderable:!0},{name:"created_by.email",title:l(this,t,s).call(this,"created by"),searchable:!0,orderable:!1},{name:"created_at",title:l(this,t,s).call(this,"created at"),searchable:!1,transform:{type:"date",filter:"MMM d, y"},orderable:!0}]})}};t=new WeakSet,s=function(f){return this.translate.instant(f)},o.\u0275fac=(()=>{let f;return function(e){return(f||(f=M(o)))(e||o)}})(),o.\u0275cmp=w({type:o,selectors:[["app-banner"]],standalone:!0,features:[F,R],decls:1,vars:17,consts:[["paginatorPosition","both",3,"createBtnClicked","updateBtnClicked","deleteBtnClicked","isActiveChange","onLoadData","headerTitle","titleIcon","headerBtnLabel","columns","dataSource","loading","totalRecords","recordsFiltered","stateKey","indexRole","updateBtnRole","createBtnRole","deleteBtnRole","globalFilterValue","withActionsColumn","reorderableColumns","reorderableRows"]],template:function(y,e){if(y&1&&(u(0,"app-table-wrapper",0),B("createBtnClicked",function(){return e.openCreateRecordDialog()})("updateBtnClicked",function(i){return e.openUpdateRecordDialog(i)})("deleteBtnClicked",function(i){return e.deleteRecord(i)})("isActiveChange",function(i){return e.activeChange(i)})("onLoadData",function(i){return e.loadRecords(i)}),c()),y&2){let r,i;v("headerTitle",e.indexMeta.indexTitle)("titleIcon",e.indexMeta.indexIcon)("headerBtnLabel",e.indexMeta.createBtnLabel)("columns",e.indexMeta.columns)("dataSource",e.records())("loading",e.isLoading())("totalRecords",e.totalRecords())("recordsFiltered",e.recordsFiltered())("stateKey",e.indexMeta.indexTableKey)("indexRole",e.roles().index)("updateBtnRole",e.roles().update)("createBtnRole",e.roles().create)("deleteBtnRole",e.roles().delete)("globalFilterValue",e.globalFilterValue)("withActionsColumn",e.indexMeta.withActionCoulmns)("reorderableColumns",(r=e.indexMeta.reorderableColumns)!==null&&r!==void 0?r:!1)("reorderableRows",(i=e.indexMeta.reorderableRows)!==null&&i!==void 0?i:!1)}},dependencies:[X],encapsulation:2,changeDetection:0});let a=o;return a})();export{xe as default};
