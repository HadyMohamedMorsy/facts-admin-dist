import{Fa as Y,Ga as J,Ha as Q,Ia as X,Ja as Z,Qa as ee,oa as W,pa as $,va as z,wa as O,ya as H,za as N}from"./chunk-GSCQOV4H.js";import{q as j}from"./chunk-YTGKFTSL.js";import{$ as _,Cb as p,Db as u,Eb as S,H as V,Ib as K,Lb as C,Mb as D,O as E,R,Xb as L,Za as b,Zb as G,da as w,dc as v,kb as k,oc as I,pa as P,pc as A,qa as q,qb as F,ta as M,tb as x,yb as T}from"./chunk-BU7DNSOB.js";import{a as m,b as f,h as d,i as h,k as l}from"./chunk-7SQXNNBM.js";var y=class{constructor(t){this.id=t?.id||null,this.selectUser=t?.selectUser||null,this.user=t?.user?.id||null,this.type=t?.type||"facts",this.slug=t?.slug||null,this.course_name=t?.course_name||null,this.code_certification=t?.code_certification||null,this.date_course=t?.date_course||null,this.description_en=t?.description_en||null,this.description_ar=t?.description_ar||null,this.courses=t?.courses||[null],this.featuredImage=t?.featuredImage||null,this.attachment=t?.attachment||null,this.image_certification=t?.image_certification||null}};function ne(n,t){n&1&&(p(0,"p",5),S(1,"i",6),L(2),I(3,"translate"),u()),n&2&&(b(2),G(" ",A(3,1,"All Fields it will be Required button it will not request"),`
`))}function oe(n,t){if(n&1){let a=K();p(0,"app-form",4),C("onSubmit",function(){P(a);let U=D();return q(U.createUpdateRecord(U.dialogMeta.endpoints))}),u(),F(1,ne,4,3,"p",5)}if(n&2){let a=D();x("form",a.createUpdateForm)("model",a.model)("fields",a.fields)("options",a.options)("withFormPadding",a.dialogMeta.withFormPadding)("showFormActions",a.dialogMeta.showFormActions)("showSubmitButton",a.dialogMeta.showSubmitButton)("showResetButton",a.dialogMeta.showResetButton)("buttonLabel",a.dialogMeta.submitButtonLabel)("submitBtnLoading",a.isLoading()),b(),T(a.dialogMeta.langDesc?1:-1)}}function re(n,t){n&1&&S(0,"app-spinner")}var te=(()=>{var t,a,r,ie;let s=class s extends X{constructor(){super(...arguments);h(this,r);h(this,t,_(H));h(this,a,_(N))}ngOnInit(){this.dialogMeta=f(m({},this.dialogMeta),{endpoints:{store:"graduates/store",update:"graduates/update"}}),this.editData?(this.dialogMeta=f(m({},this.dialogMeta),{dialogTitle:this.translate.instant("Update Graduate"),submitButtonLabel:this.translate.instant("Update Graduate")}),this.model=new y(this.editData)):(this.dialogMeta=f(m({},this.dialogMeta),{dialogTitle:this.translate.instant("Create Graduate"),submitButtonLabel:this.translate.instant("Create Graduate")}),this.model=new y),this.fields=this.configureFields()}configureFields(){return[d(this,t).fieldBuilder([{key:"courses",type:"repeat-field",props:{addBtnText:"Add course",disabledRepeater:!1},hooks:{onInit:e=>e.formControl?.valueChanges.pipe(E(e.model),R(o=>{if(e.props)return o.length===10?e.props.disabledRepeater=!0:e.props.disabledRepeater=!1}))},fieldArray:{type:"floated-input-field",props:{label:"Courses",required:!0}}}]),{key:"slug",type:"floated-input-field",props:{label:"Slug"},hooks:{onInit:e=>e.formControl?.valueChanges.pipe(V(),R(o=>{let i=o.replace(/\s+/g,"-");e.formControl?.setValue(i)}))}},{key:"type"},{key:"selectUser",type:"autocomplete-field",props:{placeholder:"select user",label:"select user",endpoint:"user/front/index",labelTarget:"username",fieldKey:"user"}},{key:"user"},{type:"tabs-field",fieldGroup:d(this,a).languages.map(e=>({props:{label:`(${e.value.toUpperCase()})`},fieldGroup:l(this,r,ie).call(this,e.value)}))},d(this,t).fieldBuilder([{key:"course_name",type:"floated-input-field",props:{label:"course name"}},{key:"code_certification",type:"floated-input-field",props:{label:"code certification"}},{key:"date_course",type:"date-field",props:{label:"date course",view:"date"}}]),d(this,t).fieldBuilder([{key:"featuredImage",type:"file-field",props:{required:!this.editData,chooseLabel:"Avatar",description:"Dimensions Image 1024 px Width & 587 px Height & Format webp"}}]),d(this,t).fieldBuilder([{key:"attachment",type:"file-field",props:{required:!this.editData,chooseLabel:"CV"}}]),d(this,t).fieldBuilder([{key:"image_certification",type:"file-field",props:{required:!this.editData,chooseLabel:"Certification Image"}}])]}};t=new WeakMap,a=new WeakMap,r=new WeakSet,ie=function(e){return[{key:`description_${e}`,type:"textarea-field",className:"col-12",props:{label:"description"}}]},s.\u0275fac=(()=>{let e;return function(i){return(e||(e=M(s)))(i||s)}})(),s.\u0275cmp=w({type:s,selectors:[["app-graduate-Cu"]],standalone:!0,features:[k,v],decls:8,vars:4,consts:[[1,"p-3","border-bottom-1","border-300","bg-white","md:sticky","z-index-1102","top-0"],[1,"flex","align-items-center","justify-content-between","gap-2"],[1,"font-semibold","capitalize","text-lg","line-height-2","my-0"],["pButton","","pRipple","","icon","pi pi-times",1,"flex-shrink-0","p-button-text","p-button-plain","p-button-rounded","w-2rem","h-2rem",3,"click"],[3,"onSubmit","form","model","fields","options","withFormPadding","showFormActions","showSubmitButton","showResetButton","buttonLabel","submitBtnLoading"],[1,"filters-hint","px-4","py-4"],[1,"fas","fa-info-circle","text-primary"]],template:function(o,i){o&1&&(p(0,"div",0)(1,"div",1)(2,"h2",2),L(3),u(),p(4,"button",3),C("click",function(){return i.closeDialog()}),u()()(),F(5,oe,2,11),I(6,"async"),F(7,re,1,0,"app-spinner")),o&2&&(b(3),G(" ",i.dialogMeta.dialogTitle," "),b(2),T(A(6,2,i.dialogMeta.dialogData$)?5:7))},dependencies:[j,$,W,O,z,Q,J],encapsulation:2,changeDetection:0});let n=s;return n})();var ve=(()=>{var t,c;let r=class r extends Z{constructor(){super(...arguments);h(this,t);this.currentLang=_(Y).currentLanguage}ngOnInit(){this.dialogComponent=te,this.indexMeta=f(m({},this.indexMeta),{endpoints:{index:"graduates/index",delete:"graduates/delete"},indexTitle:l(this,t,c).call(this,"Graduate"),indexIcon:"pi pi-comment",createBtnLabel:l(this,t,c).call(this,"Create Graduate"),indexTableKey:"GRADUATES_KEY",columns:[{name:"id",title:l(this,t,c).call(this,"#ID"),searchable:!1,orderable:!0},{name:"user.username",title:l(this,t,c).call(this,"user"),searchable:!0,orderable:!1},{name:"created_by.email",title:l(this,t,c).call(this,"created by"),searchable:!0,orderable:!1},{name:"created_at",title:l(this,t,c).call(this,"created at"),searchable:!1,transform:{type:"date",filter:"MMM d, y"},orderable:!0}]})}};t=new WeakSet,c=function(g){return this.translate.instant(g)},r.\u0275fac=(()=>{let g;return function(e){return(g||(g=M(r)))(e||r)}})(),r.\u0275cmp=w({type:r,selectors:[["app-graduates"]],standalone:!0,features:[k,v],decls:1,vars:17,consts:[["paginatorPosition","both",3,"createBtnClicked","updateBtnClicked","deleteBtnClicked","isActiveChange","onLoadData","headerTitle","titleIcon","headerBtnLabel","columns","dataSource","loading","totalRecords","recordsFiltered","stateKey","indexRole","updateBtnRole","createBtnRole","deleteBtnRole","globalFilterValue","withActionsColumn","reorderableColumns","reorderableRows"]],template:function(B,e){if(B&1&&(p(0,"app-table-wrapper",0),C("createBtnClicked",function(){return e.openCreateRecordDialog()})("updateBtnClicked",function(i){return e.openUpdateRecordDialog(i)})("deleteBtnClicked",function(i){return e.deleteRecord(i)})("isActiveChange",function(i){return e.activeChange(i)})("onLoadData",function(i){return e.loadRecords(i)}),u()),B&2){let o,i;x("headerTitle",e.indexMeta.indexTitle)("titleIcon",e.indexMeta.indexIcon)("headerBtnLabel",e.indexMeta.createBtnLabel)("columns",e.indexMeta.columns)("dataSource",e.records())("loading",e.isLoading())("totalRecords",e.totalRecords())("recordsFiltered",e.recordsFiltered())("stateKey",e.indexMeta.indexTableKey)("indexRole",e.roles().index)("updateBtnRole",e.roles().update)("createBtnRole",e.roles().create)("deleteBtnRole",e.roles().delete)("globalFilterValue",e.globalFilterValue)("withActionsColumn",e.indexMeta.withActionCoulmns)("reorderableColumns",(o=e.indexMeta.reorderableColumns)!==null&&o!==void 0?o:!1)("reorderableRows",(i=e.indexMeta.reorderableRows)!==null&&i!==void 0?i:!1)}},dependencies:[ee],encapsulation:2,changeDetection:0});let n=r;return n})();export{ve as default};