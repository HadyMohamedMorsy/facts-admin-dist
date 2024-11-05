import{Fa as Y,Ga as N,Ha as W,Ia as H,Ja as J,La as Q,Qa as X,oa as $,pa as j,va as q,wa as G,za as z}from"./chunk-GLL4IFIG.js";import{q as O}from"./chunk-YTGKFTSL.js";import{$ as y,Cb as m,Db as u,Eb as R,H as E,Ib as K,Lb as _,Mb as S,R as U,Xb as L,Za as C,Zb as k,da as B,dc as T,kb as w,oc as D,pa as V,pc as I,qa as P,qb as F,ta as M,tb as v,yb as x}from"./chunk-BU7DNSOB.js";import{a as g,b as f,h as A,i as h,k as l}from"./chunk-7SQXNNBM.js";var b=class{constructor(t){this.id=t?.id||null,this.order=t?.order||null,this.name_en=t?.name_en||null,this.name_ar=t?.name_ar||null,this.is_active=t?.is_active||null,this.slug=t?.slug||null}};function ne(i,t){i&1&&(m(0,"p",5),R(1,"i",6),L(2),D(3,"translate"),u()),i&2&&(C(2),k(" ",I(3,1,"All Fields it will be Required button it will not request"),`
`))}function ie(i,t){if(i&1){let n=K();m(0,"app-form",4),_("onSubmit",function(){V(n);let s=S();return P(s.createUpdateRecord(s.dialogMeta.endpoints))}),u(),F(1,ne,4,3,"p",5)}if(i&2){let n=S();v("form",n.createUpdateForm)("model",n.model)("fields",n.fields)("options",n.options)("withFormPadding",n.dialogMeta.withFormPadding)("showFormActions",n.dialogMeta.showFormActions)("showSubmitButton",n.dialogMeta.showSubmitButton)("showResetButton",n.dialogMeta.showResetButton)("buttonLabel",n.dialogMeta.submitButtonLabel)("submitBtnLoading",n.isLoading()),C(),x(n.dialogMeta.langDesc?1:-1)}}function ae(i,t){i&1&&R(0,"app-spinner")}var Z=(()=>{var t,n,ee;let s=class s extends H{constructor(){super(...arguments);h(this,n);h(this,t,y(z))}ngOnInit(){this.dialogMeta=f(g({},this.dialogMeta),{endpoints:{store:"category/store",update:"category/update"}}),this.editData?(this.dialogMeta=f(g({},this.dialogMeta),{dialogTitle:this.translate.instant("Update Category"),submitButtonLabel:this.translate.instant("Update Category")}),this.model=new b(this.editData)):(this.dialogMeta=f(g({},this.dialogMeta),{dialogTitle:this.translate.instant("Create Category"),submitButtonLabel:this.translate.instant("Create Category")}),this.model=new b),this.fields=this.configureFields()}configureFields(){return[{key:"order",type:"floated-input-field",props:{type:"number",required:!0,label:"Order"}},{key:"slug",type:"floated-input-field",props:{label:"Slug"},hooks:{onInit:o=>o.formControl?.valueChanges.pipe(E(),U(e=>{let a=e.replace(/\s+/g,"-");o.formControl?.setValue(a)}))}},{type:"tabs-field",fieldGroup:A(this,t).languages.map(o=>({props:{label:`(${o.value.toUpperCase()})`},fieldGroup:l(this,n,ee).call(this,o.value)}))}]}};t=new WeakMap,n=new WeakSet,ee=function(o){return[{key:`name_${o}`,type:"floated-input-field",props:{label:"name"}}]},s.\u0275fac=(()=>{let o;return function(a){return(o||(o=M(s)))(a||s)}})(),s.\u0275cmp=B({type:s,selectors:[["app-category-Cu"]],standalone:!0,features:[w,T],decls:8,vars:4,consts:[[1,"p-3","border-bottom-1","border-300","bg-white","md:sticky","z-index-1102","top-0"],[1,"flex","align-items-center","justify-content-between","gap-2"],[1,"font-semibold","capitalize","text-lg","line-height-2","my-0"],["pButton","","pRipple","","icon","pi pi-times",1,"flex-shrink-0","p-button-text","p-button-plain","p-button-rounded","w-2rem","h-2rem",3,"click"],[3,"onSubmit","form","model","fields","options","withFormPadding","showFormActions","showSubmitButton","showResetButton","buttonLabel","submitBtnLoading"],[1,"filters-hint","px-4","py-4"],[1,"fas","fa-info-circle","text-primary"]],template:function(e,a){e&1&&(m(0,"div",0)(1,"div",1)(2,"h2",2),L(3),u(),m(4,"button",3),_("click",function(){return a.closeDialog()}),u()()(),F(5,ie,2,11),D(6,"async"),F(7,ae,1,0,"app-spinner")),e&2&&(C(3),k(" ",a.dialogMeta.dialogTitle," "),C(2),x(I(6,2,a.dialogMeta.dialogData$)?5:7))},dependencies:[O,j,$,G,q,W,N],encapsulation:2,changeDetection:0});let i=s;return i})();var Te=(()=>{var t,d;let p=class p extends J{constructor(){super(...arguments);h(this,t);this.currentLang=y(Y).currentLanguage}ngOnInit(){this.dialogComponent=Z,this.indexMeta=f(g({},this.indexMeta),{endpoints:{index:"category/index",delete:"category/delete"},indexTitle:l(this,t,d).call(this,"Category"),indexIcon:"pi pi-comment",createBtnLabel:l(this,t,d).call(this,"Create Category"),indexTableKey:"CATEGOYIES_KEY",columns:[{name:"id",title:l(this,t,d).call(this,"#ID"),searchable:!1,orderable:!0},{name:"order",title:l(this,t,d).call(this,"order"),searchable:!1,orderable:!0},{name:`name_${this.currentLang()}`,title:l(this,t,d).call(this,"name"),searchable:!0,orderable:!1},{name:"slug",title:l(this,t,d).call(this,"slug"),searchable:!0,orderable:!1},{name:"created_by.email",title:l(this,t,d).call(this,"created by"),searchable:!0,orderable:!1},{name:"created_at",title:l(this,t,d).call(this,"created at"),searchable:!1,transform:{type:"date",filter:"MMM d, y"},orderable:!0}]})}};t=new WeakSet,d=function(c){return this.translate.instant(c)},p.\u0275fac=(()=>{let c;return function(e){return(c||(c=M(p)))(e||p)}})(),p.\u0275cmp=B({type:p,selectors:[["app-categories"]],standalone:!0,features:[w,T],decls:1,vars:17,consts:[["paginatorPosition","both",3,"createBtnClicked","updateBtnClicked","deleteBtnClicked","isActiveChange","onLoadData","headerTitle","titleIcon","headerBtnLabel","columns","dataSource","loading","totalRecords","recordsFiltered","stateKey","indexRole","updateBtnRole","createBtnRole","deleteBtnRole","globalFilterValue","withActionsColumn","reorderableColumns","reorderableRows"]],template:function(o,e){if(o&1&&(m(0,"app-table-wrapper",0),_("createBtnClicked",function(){return e.openCreateRecordDialog()})("updateBtnClicked",function(r){return e.openUpdateRecordDialog(r)})("deleteBtnClicked",function(r){return e.deleteRecord(r)})("isActiveChange",function(r){return e.activeChange(r)})("onLoadData",function(r){return e.loadRecords(r)}),u()),o&2){let a,r;v("headerTitle",e.indexMeta.indexTitle)("titleIcon",e.indexMeta.indexIcon)("headerBtnLabel",e.indexMeta.createBtnLabel)("columns",e.indexMeta.columns)("dataSource",e.records())("loading",e.isLoading())("totalRecords",e.totalRecords())("recordsFiltered",e.recordsFiltered())("stateKey",e.indexMeta.indexTableKey)("indexRole",e.roles().index)("updateBtnRole",e.roles().update)("createBtnRole",e.roles().create)("deleteBtnRole",e.roles().delete)("globalFilterValue",e.globalFilterValue)("withActionsColumn",e.indexMeta.withActionCoulmns)("reorderableColumns",(a=e.indexMeta.reorderableColumns)!==null&&a!==void 0?a:!1)("reorderableRows",(r=e.indexMeta.reorderableRows)!==null&&r!==void 0?r:!1)}},dependencies:[X,Q],encapsulation:2,changeDetection:0});let i=p;return i})();export{Te as default};
