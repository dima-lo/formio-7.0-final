(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{fOiM:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),e=function(){return function(){}}(),s=u("Yi/Q"),i=u("rxJI"),o=u("pMnS"),r=u("Ip0R"),a=u("2p+7"),c=u("dXze"),b=u("gIcY"),p=u("Vx+w"),g=u("LvDl"),h=(u("htdP"),u("htdP").Formio),f=function(){function l(l,n,u,t,e){this.config=l,this.alerts=n,this.router=u,this.route=t,this.ref=e,this.stages=[],this.sort="asc",this.page=0,this.projects=[],this.getBase=localStorage.getItem("formioBase"),this.firstItem=0,this.lastItem=0,this.total=0,this.query={limit:10,skip:0,sort:""}}return l.prototype.ngAfterViewInit=function(){this.config.rootProject?this.router.navigate(["tenant"]):(this.config.currentProject=null,this.config.currentTenant=null,this.loadProjects())},l.prototype.loadProjects=function(){var l=this;this.config.request(p.a.apiUrl+"/project?plan=commercial&type=project").get().subscribe(function(n){l.projects=n})},l.prototype.getTenants=function(l){var n=this;this.stages=[],this.config.request(p.a.apiUrl+"/project").get().subscribe(function(l){n.stages=l,n.firstItem=n.query.skip+1,n.lastItem=n.firstItem+n.stages.length-1})},l.prototype.onRowAction=function(l,n,u){this.config.currentProject=n,this.router.navigate(["project",n._id,u])},l.prototype.sortColumn=function(l){switch(l){case"asc":l="desc",this.query.sort="-title";break;case"desc":l="asc",delete this.query.sort;break;case"":l="asc",this.query.sort="title"}this.refreshGrid(this.query)},l.prototype.setPage=function(l){void 0===l&&(l=-1),this.page=-1!==l?l:this.page,this.query.hasOwnProperty("limit")||(this.query.limit=10),this.query.hasOwnProperty("skip")||(this.query.skip=0),this.query.skip=this.page*this.query.limit,this.refreshGrid(this.query)},l.prototype.pageChanged=function(l){this.setPage(l.page-1)},l.prototype.refreshGrid=function(l){this.alerts.setAlerts([]),l=l||{},(l=Object(g.assign)(l,this.query)).hasOwnProperty("limit")||(l.limit=10),l.hasOwnProperty("skip")||(l.skip=0),this.ref.detectChanges(),h.cache={},this.getTenants(l)},l}(),d=u("KzPs"),m=u("ZYCi"),y=t.qb({encapsulation:0,styles:[[""]],data:{}});function C(l){return t.Lb(0,[(l()(),t.sb(0,0,null,null,3,"span",[["class","glyphicon fa"]],null,null,null,null,null)),t.Gb(512,null,r.A,r.B,[t.t,t.u,t.k,t.E]),t.rb(2,278528,null,0,r.j,[r.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t.Eb(3,{"glyphicon-triangle-top fa-caret-up":0,"glyphicon-triangle-bottom fa-caret-down":1})],function(l,n){var u=n.component,t=l(n,3,0,"asc"===u.sort,"desc"===u.sort);l(n,2,0,"glyphicon fa",t)},null)}function v(l){return t.Lb(0,[(l()(),t.sb(0,0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),t.sb(1,0,null,null,10,"td",[],null,null,null,null,null)),(l()(),t.sb(2,0,null,null,9,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.sb(3,0,null,null,3,"div",[["class","col-sm-10"]],null,null,null,null,null)),(l()(),t.sb(4,0,null,null,2,"a",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onRowAction(u,l.context.$implicit,"tenant")&&t),t},null,null)),(l()(),t.sb(5,0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),t.Jb(6,null,["",""])),(l()(),t.sb(7,0,null,null,4,"div",[["class","col-sm-2"]],null,null,null,null,null)),(l()(),t.sb(8,0,null,null,2,"button",[["class","btn btn-secondary btn-sm form-btn"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onRowAction(u,l.context.$implicit,"tenant")&&t),t},null,null)),(l()(),t.sb(9,0,null,null,0,"span",[["class","fa fa-pencil"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,[" Manage Tenants"])),(l()(),t.Jb(-1,null,["\xa0 "]))],null,function(l,n){l(n,6,0,n.context.$implicit.title)})}function P(l){return t.Lb(0,[(l()(),t.sb(0,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),t.hb(16777216,null,null,1,null,v)),t.rb(2,278528,null,0,r.k,[t.P,t.M,t.t],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,2,0,n.component.projects)},null)}function k(l){return t.Lb(0,[(l()(),t.sb(0,0,null,null,26,"table",[["class","table table-bordered table-striped table-hover"]],null,null,null,null,null)),(l()(),t.sb(1,0,null,null,10,"thead",[],null,null,null,null,null)),(l()(),t.sb(2,0,null,null,9,"tr",[],null,null,null,null,null)),(l()(),t.sb(3,0,null,null,8,"th",[],null,null,null,null,null)),(l()(),t.sb(4,0,null,null,7,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.sb(5,0,null,null,4,"div",[["class","col-sm-10"]],null,null,null,null,null)),(l()(),t.sb(6,0,null,null,3,"a",[],null,[[null,"click"]],function(l,n,u){var t=!0,e=l.component;return"click"===n&&(t=!1!==e.sortColumn(e.sort)&&t),t},null,null)),(l()(),t.Jb(-1,null,[" Projects "])),(l()(),t.hb(16777216,null,null,1,null,C)),t.rb(9,16384,null,0,r.l,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(l()(),t.sb(10,0,null,null,1,"div",[["class","col-sm-2"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,[" Operations "])),(l()(),t.hb(16777216,null,null,1,null,P)),t.rb(13,16384,null,0,r.l,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(l()(),t.sb(14,0,null,null,12,"tfoot",[["class","formio-grid-footer"]],null,null,null,null,null)),(l()(),t.sb(15,0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),t.sb(16,0,null,null,10,"td",[],[[8,"colSpan",0]],null,null,null,null)),(l()(),t.sb(17,0,null,null,3,"span",[["class","pull-right float-right item-counter"]],null,null,null,null,null)),(l()(),t.sb(18,0,null,null,1,"span",[["class","page-num"]],null,null,null,null,null)),(l()(),t.Jb(19,null,[""," - ",""])),(l()(),t.Jb(20,null,[" / "," total"])),(l()(),t.sb(21,0,null,null,5,"pagination",[["class","justify-content-center pagination-sm"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"pageChanged"]],function(l,n,u){var t=!0,e=l.component;return"ngModelChange"===n&&(t=!1!==(e.stages.skip=u)&&t),"pageChanged"===n&&(t=!1!==e.pageChanged(u)&&t),t},a.b,a.a)),t.rb(22,114688,null,0,c.b,[t.k,c.c,t.h],{maxSize:[0,"maxSize"],itemsPerPage:[1,"itemsPerPage"],totalItems:[2,"totalItems"]},{pageChanged:"pageChanged"}),t.Gb(1024,null,b.c,function(l){return[l]},[c.b]),t.rb(24,671744,null,0,b.f,[[8,null],[8,null],[8,null],[6,b.c]],{model:[0,"model"]},{update:"ngModelChange"}),t.Gb(2048,null,b.d,null,[b.f]),t.rb(26,16384,null,0,b.e,[[4,b.d]],null,null)],function(l,n){var u=n.component;l(n,9,0,u.sort),l(n,13,0,u.stages),l(n,22,0,7,u.stages.limit,u.stages.total),l(n,24,0,u.stages.skip)},function(l,n){var u=n.component;l(n,16,0,2),l(n,19,0,u.firstItem,u.lastItem),l(n,20,0,u.projects.total),l(n,21,0,t.Cb(n,26).ngClassUntouched,t.Cb(n,26).ngClassTouched,t.Cb(n,26).ngClassPristine,t.Cb(n,26).ngClassDirty,t.Cb(n,26).ngClassValid,t.Cb(n,26).ngClassInvalid,t.Cb(n,26).ngClassPending)})}function j(l){return t.Lb(0,[(l()(),t.sb(0,0,null,null,1,"app-index",[],null,null,null,k,y)),t.rb(1,4243456,null,0,f,[p.a,d.a,m.k,m.a,t.h],null,null)],null,null)}var A=t.ob("app-index",f,j,{},{},[]),I=function(){return function(l){this.config=l}}(),q=t.qb({encapsulation:0,styles:[[""]],data:{}});function w(l){return t.Lb(0,[(l()(),t.sb(0,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.Jb(1,null,["",""]))],null,function(l,n){l(n,1,0,n.component.config.currentProject.title)})}function M(l){return t.Lb(0,[(l()(),t.hb(16777216,null,null,1,null,w)),t.rb(1,16384,null,0,r.l,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(l()(),t.sb(2,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),t.rb(3,212992,null,0,m.p,[m.b,t.P,t.j,[8,null],t.h],null,null)],function(l,n){l(n,1,0,!n.component.config.query.iframe),l(n,3,0)},null)}function J(l){return t.Lb(0,[(l()(),t.sb(0,0,null,null,1,"app-project",[],null,null,null,M,q)),t.rb(1,49152,null,0,I,[p.a],null,null)],null,null)}var x=t.ob("app-project",I,J,{},{},[]),L=u("r6Rv"),O=u("ikog"),G=function(){return function(){}}();u.d(n,"ProjectModuleNgFactory",function(){return T});var T=t.pb(e,[],function(l){return t.zb([t.Ab(512,t.j,t.cb,[[8,[s.a,i.a,o.a,A,x]],[3,t.j],t.y]),t.Ab(4608,r.n,r.m,[t.v,[2,r.D]]),t.Ab(4608,b.i,b.i,[]),t.Ab(4608,L.a,L.a,[]),t.Ab(4608,d.a,d.a,[]),t.Ab(4608,c.c,c.c,[]),t.Ab(1073742336,r.b,r.b,[]),t.Ab(1073742336,b.h,b.h,[]),t.Ab(1073742336,b.a,b.a,[]),t.Ab(1073742336,O.a,O.a,[]),t.Ab(1073742336,m.o,m.o,[[2,m.t],[2,m.k]]),t.Ab(1073742336,G,G,[]),t.Ab(1073742336,c.d,c.d,[]),t.Ab(1073742336,e,e,[]),t.Ab(1024,m.i,function(){return[[{path:"",component:f},{path:":id",component:I,children:[{path:"tenant",loadChildren:"../tenant/tenant.module#TenantModule"}]}]]},[])])})}}]);