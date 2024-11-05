import{a as y}from"./chunk-HWUDIIYC.js";import{Ja as R,Qa as M}from"./chunk-GLL4IFIG.js";import"./chunk-YTGKFTSL.js";import{Cb as f,Db as C,Lb as g,da as c,dc as B,kb as h,ta as _,tb as b}from"./chunk-BU7DNSOB.js";import{a as p,b as m,i as u,k as r}from"./chunk-7SQXNNBM.js";var U=(()=>{var a,l;let i=class i extends R{constructor(){super(...arguments);u(this,a)}ngOnInit(){this.dialogComponent=y,this.indexMeta=m(p({},this.indexMeta),{endpoints:{index:"user/index",delete:"user/delete"},indexTitle:this.translate.instant("Users"),indexIcon:"pi pi-fw pi-users",createBtnLabel:this.translate.instant("Create Users"),indexTableKey:"USER_KEY",columns:[{name:"id",title:r(this,a,l).call(this,"#ID"),searchable:!1,orderable:!0},{name:"username",title:r(this,a,l).call(this,"username"),searchable:!0,orderable:!1},{name:"role.name",title:r(this,a,l).call(this,"role"),searchable:!0,orderable:!1},{name:"email",title:r(this,a,l).call(this,"email"),searchable:!0,orderable:!1},{name:"gender",title:r(this,a,l).call(this,"gender"),searchable:!0,orderable:!1},{name:"is_active",title:r(this,a,l).call(this,"is active"),searchable:!1,orderable:!1},{name:"created_at",title:r(this,a,l).call(this,"created at"),searchable:!1,orderable:!0,transform:{type:"date",filter:"MMM d, y"}}]})}};a=new WeakSet,l=function(o){return this.translate.instant(o)},i.\u0275fac=(()=>{let o;return function(e){return(o||(o=_(i)))(e||i)}})(),i.\u0275cmp=c({type:i,selectors:[["app-users"]],standalone:!0,features:[h,B],decls:1,vars:17,consts:[["paginatorPosition","both",3,"createBtnClicked","updateBtnClicked","deleteBtnClicked","isActiveChange","onLoadData","headerTitle","titleIcon","headerBtnLabel","columns","dataSource","loading","totalRecords","recordsFiltered","stateKey","indexRole","updateBtnRole","createBtnRole","deleteBtnRole","globalFilterValue","withActionsColumn","reorderableColumns","reorderableRows"]],template:function(d,e){if(d&1&&(f(0,"app-table-wrapper",0),g("createBtnClicked",function(){return e.openCreateRecordDialog()})("updateBtnClicked",function(t){return e.openUpdateRecordDialog(t)})("deleteBtnClicked",function(t){return e.deleteRecord(t)})("isActiveChange",function(t){return e.activeChange(t)})("onLoadData",function(t){return e.loadRecords(t)}),C()),d&2){let n,t;b("headerTitle",e.indexMeta.indexTitle)("titleIcon",e.indexMeta.indexIcon)("headerBtnLabel",e.indexMeta.createBtnLabel)("columns",e.indexMeta.columns)("dataSource",e.records())("loading",e.isLoading())("totalRecords",e.totalRecords())("recordsFiltered",e.recordsFiltered())("stateKey",e.indexMeta.indexTableKey)("indexRole",e.roles().index)("updateBtnRole",e.roles().update)("createBtnRole",e.roles().create)("deleteBtnRole",e.roles().delete)("globalFilterValue",e.globalFilterValue)("withActionsColumn",e.indexMeta.withActionCoulmns)("reorderableColumns",(n=e.indexMeta.reorderableColumns)!==null&&n!==void 0?n:!1)("reorderableRows",(t=e.indexMeta.reorderableRows)!==null&&t!==void 0?t:!1)}},dependencies:[M],encapsulation:2,changeDetection:0});let s=i;return s})();export{U as default};
