(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{htYU:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=function(){return function(){}}(),r=u("Yi/Q"),i=u("rxJI"),o=u("pMnS"),c=u("O2im"),a=u("//LL"),b=u("GPOe"),s=u("9c/x"),f=u("8CNj"),p=u("StRJ"),m=u("Ip0R"),h=u("lIz8"),g=u("qza0"),v=u("HPOf"),d=u("PLeI"),k=u("r6Rv"),y=u("mrSG"),L=(u("htdP"),u("WBsH")),O=u("Yt1J"),C=function(l){function n(n){var u=l.call(this)||this;return u.offlineService=n,u}return y.__extends(n,l),n.prototype.tableClass=function(l){if(this.offlineService.offlineOps.hasOwnProperty(l._id))switch(this.offlineService.offlineOps[l._id]){case"POST":return"table-success";case"PUT":return"table-warning";case"DELETE":return"table-danger"}return""},n}(L.e),w=function(l){function n(n,u,t,r,i){var o=l.call(this,n,u,t,r)||this;return o.loader=n,o.alerts=u,o._resolver=t,o._ref=r,o.offlineService=i,o.refresh=new e.m,o.offlineService.onlineChange.subscribe((function(l){o._ref.detectChanges(),o.refresh.emit({})})),o.components={header:L.g,body:C,footer:L.f},o}return y.__extends(n,l),n.prototype.clearOfflineSubmissions=function(){var l=this;window.confirm("This will clear the offline submission cache. Are you sure?")&&this.offlineService.clearOfflineSubmissions().then((function(){return l.refresh.emit({})}))},n}(L.a),K=u("KzPs"),q=e.pb({encapsulation:2,styles:[],data:{}});function I(l){return e.Kb(0,[(l()(),e.gb(0,null,null,0))],null,null)}function S(l){return e.Kb(0,[(l()(),e.gb(0,null,null,0))],null,null)}function A(l){return e.Kb(0,[(l()(),e.gb(0,null,null,0))],null,null)}function x(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,8,"div",[["class","card card-body bg-light"]],null,null,null,null,null)),(l()(),e.rb(1,0,null,null,7,"table",[["class","table mb-0"]],null,null,null,null,null)),(l()(),e.rb(2,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),e.rb(3,0,null,null,1,"td",[["class","table-success text-center"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Added Offline"])),(l()(),e.rb(5,0,null,null,1,"td",[["class","table-warning text-center"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Changed Offline"])),(l()(),e.rb(7,0,null,null,1,"td",[["class","table-danger text-center"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Deleted Offline"]))],null,null)}function B(l){return e.Kb(0,[(l()(),e.rb(0,16777216,null,null,1,null,null,null,null,null,null,null)),e.qb(1,540672,null,0,m.o,[e.O],{ngTemplateOutlet:[0,"ngTemplateOutlet"]},null),(l()(),e.gb(0,null,null,0))],(function(l,n){l(n,1,0,n.component.header.template)}),null)}function G(l){return e.Kb(0,[(l()(),e.rb(0,16777216,null,null,1,null,null,null,null,null,null,null)),e.qb(1,540672,null,0,m.o,[e.O],{ngTemplateOutlet:[0,"ngTemplateOutlet"]},null),(l()(),e.gb(0,null,null,0))],(function(l,n){l(n,1,0,n.component.body.template)}),null)}function T(l){return e.Kb(0,[(l()(),e.rb(0,16777216,null,null,1,null,null,null,null,null,null,null)),e.qb(1,540672,null,0,m.o,[e.O],{ngTemplateOutlet:[0,"ngTemplateOutlet"]},null),(l()(),e.gb(0,null,null,0))],(function(l,n){l(n,1,0,n.component.footer.template)}),null)}function P(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,2,"button",[["class","btn btn-light"],["type","button"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.clearOfflineSubmissions()&&e),e}),null,null)),(l()(),e.rb(1,0,null,null,0,"i",[["class","fa fa-trash mr-3"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,[" Clear Offline Submissions\n"]))],null,null)}function _(l){return e.Kb(0,[e.Gb(402653184,1,{headerElement:0}),e.Gb(402653184,2,{bodyElement:0}),e.Gb(402653184,3,{footerElement:0}),(l()(),e.gb(16777216,[[1,3],["headerTemplate",2]],null,0,null,I)),(l()(),e.gb(16777216,[[2,3],["bodyTemplate",2]],null,0,null,S)),(l()(),e.gb(16777216,[[3,3],["footerTemplate",2]],null,0,null,A)),(l()(),e.gb(16777216,null,null,1,null,x)),e.qb(7,16384,null,0,m.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.rb(8,0,null,null,11,"div",[["class","formio-grid"]],null,null,null,null,null)),(l()(),e.rb(9,0,null,null,1,"formio-alerts",[],null,null,null,h.b,h.a)),e.qb(10,114688,null,0,g.a,[],{alerts:[0,"alerts"]},null),(l()(),e.rb(11,0,null,null,8,"table",[["class","table table-bordered table-striped table-hover"]],null,null,null,null,null)),(l()(),e.gb(16777216,null,null,1,null,B)),e.qb(13,16384,null,0,m.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.rb(14,0,null,null,1,"formio-loader",[],null,null,null,v.b,v.a)),e.qb(15,49152,null,0,d.a,[k.a],null,null),(l()(),e.gb(16777216,null,null,1,null,G)),e.qb(17,16384,null,0,m.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.gb(16777216,null,null,1,null,T)),e.qb(19,16384,null,0,m.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.gb(16777216,null,null,1,null,P)),e.qb(21,16384,null,0,m.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,7,0,!u.offlineService.isOnline),l(n,10,0,u.alerts),l(n,13,0,u.initialized),l(n,17,0,u.initialized),l(n,19,0,u.initialized),l(n,21,0,!u.offlineService.isOnline)}),null)}var F=u("kVPD"),j=function(l){function n(){return null!==l&&l.apply(this,arguments)||this}return y.__extends(n,l),n}(F.d),D=u("XF9X"),E=u("ZYCi"),H=u("D6yi"),R=e.pb({encapsulation:2,styles:[],data:{}});function W(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,1,"offline-submission-grid",[["createText",""]],null,[[null,"rowSelect"],[null,"error"],[null,"createItem"]],(function(l,n,u){var e=!0,t=l.component;return"rowSelect"===n&&(e=!1!==t.onSelect(u)&&e),"error"===n&&(e=!1!==t.service.onError(u)&&e),"createItem"===n&&(e=!1!==t.onCreateItem()&&e),e}),_,q)),e.qb(1,4833280,null,0,w,[k.a,K.a,e.j,e.h,O.a],{src:[0,"src"],onForm:[1,"onForm"],query:[2,"query"],createText:[3,"createText"]},{rowSelect:"rowSelect",createItem:"createItem",error:"error"})],(function(l,n){var u=n.component;l(n,1,0,u.gridSrc,u.service.formLoaded,u.gridQuery,"")}),null)}function Y(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,1,"app-index",[],null,null,null,W,R)),e.qb(1,114688,null,0,j,[D.a,E.a,E.k,H.a],null,null)],(function(l,n){l(n,1,0)}),null)}var z=e.nb("app-index",j,Y,{},{},[]),J=u("OLPT"),U=(u("qq5e"),function(l){function n(n,u,e,t){var r=l.call(this,n,u,e)||this;return r.service=n,r.route=u,r.auth=e,r.offlineService=t,r}return y.__extends(n,l),n.prototype.getDownloadPDF=function(){var l=this;this.service.onResource.subscribe((function(){l.service.formio.getDownloadUrl().then((function(n){l.downloadUrl=n}))}))},n.prototype.ngOnInit=function(){l.prototype.ngOnInit.call(this),this.getDownloadPDF()},n}(F.a)),M=u("LWLj"),N=e.pb({encapsulation:0,styles:[[""]],data:{}});function X(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,1,"a",[["class","pull-right"],["target","_blank"]],[[8,"href",4]],null,null,null,null)),(l()(),e.rb(1,0,null,null,0,"img",[["src","assets/pdf.png"],["style","height: 2em;"]],null,null,null,null,null))],null,(function(l,n){l(n,0,0,n.component.downloadUrl)}))}function $(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,2,"a",[["class","nav-link"],["routerLink","../../"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Cb(l,1).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t}),null,null)),e.qb(1,671744,null,0,E.n,[E.k,E.a,m.h],{routerLink:[0,"routerLink"]},null),(l()(),e.rb(2,0,null,null,0,"i",[["class","fa fa-chevron-left glyphicon glyphicon-chevron-left"]],null,null,null,null,null))],(function(l,n){l(n,1,0,"../../")}),(function(l,n){l(n,0,0,e.Cb(n,1).target,e.Cb(n,1).href)}))}function Q(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,2,"a",[["class","nav-link"],["routerLink","../"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Cb(l,1).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t}),null,null)),e.qb(1,671744,null,0,E.n,[E.k,E.a,m.h],{routerLink:[0,"routerLink"]},null),(l()(),e.rb(2,0,null,null,0,"i",[["class","fa fa-chevron-left glyphicon glyphicon-chevron-left"]],null,null,null,null,null))],(function(l,n){l(n,1,0,"../")}),(function(l,n){l(n,0,0,e.Cb(n,1).target,e.Cb(n,1).href)}))}function V(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,9,"li",[["class","nav-item"],["routerLinkActive","active"]],null,null,null,null,null)),e.qb(1,1720320,null,2,E.m,[E.k,e.k,e.C,[2,E.l],[2,E.n]],{routerLinkActive:[0,"routerLinkActive"]},null),e.Gb(603979776,5,{links:1}),e.Gb(603979776,6,{linksWithHrefs:1}),(l()(),e.rb(4,0,null,null,5,"a",[["class","nav-link"],["routerLink","edit"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Cb(l,5).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t}),null,null)),e.qb(5,671744,[[8,4],[6,4]],0,E.n,[E.k,E.a,m.h],{routerLink:[0,"routerLink"]},null),e.qb(6,1720320,null,2,E.m,[E.k,e.k,e.C,[2,E.l],[2,E.n]],{routerLinkActive:[0,"routerLinkActive"]},null),e.Gb(603979776,7,{links:1}),e.Gb(603979776,8,{linksWithHrefs:1}),(l()(),e.Ib(-1,null,["Edit"]))],(function(l,n){l(n,1,0,"active"),l(n,5,0,"edit"),l(n,6,0,"active")}),(function(l,n){l(n,4,0,e.Cb(n,5).target,e.Cb(n,5).href)}))}function Z(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,9,"li",[["class","nav-item"],["routerLinkActive","active"]],null,null,null,null,null)),e.qb(1,1720320,null,2,E.m,[E.k,e.k,e.C,[2,E.l],[2,E.n]],{routerLinkActive:[0,"routerLinkActive"]},null),e.Gb(603979776,9,{links:1}),e.Gb(603979776,10,{linksWithHrefs:1}),(l()(),e.rb(4,0,null,null,5,"a",[["class","nav-link"],["routerLink","delete"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Cb(l,5).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t}),null,null)),e.qb(5,671744,[[12,4],[10,4]],0,E.n,[E.k,E.a,m.h],{routerLink:[0,"routerLink"]},null),e.qb(6,1720320,null,2,E.m,[E.k,e.k,e.C,[2,E.l],[2,E.n]],{routerLinkActive:[0,"routerLinkActive"]},null),e.Gb(603979776,11,{links:1}),e.Gb(603979776,12,{linksWithHrefs:1}),(l()(),e.rb(9,0,null,null,0,"span",[["class","fa fa-trash glyphicon glyphicon-trash"]],null,null,null,null,null))],(function(l,n){l(n,1,0,"active"),l(n,5,0,"delete"),l(n,6,0,"active")}),(function(l,n){l(n,4,0,e.Cb(n,5).target,e.Cb(n,5).href)}))}function ll(l){return e.Kb(0,[(l()(),e.gb(16777216,null,null,1,null,X)),e.qb(1,16384,null,0,m.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.rb(2,0,null,null,20,"ul",[["class","nav nav-tabs mb-2"]],null,null,null,null,null)),(l()(),e.rb(3,0,null,null,2,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),e.gb(16777216,null,null,1,null,$)),e.qb(5,16384,null,0,m.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.rb(6,0,null,null,2,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),e.gb(16777216,null,null,1,null,Q)),e.qb(8,16384,null,0,m.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.rb(9,0,null,null,9,"li",[["class","nav-item"],["routerLinkActive","active"]],null,null,null,null,null)),e.qb(10,1720320,null,2,E.m,[E.k,e.k,e.C,[2,E.l],[2,E.n]],{routerLinkActive:[0,"routerLinkActive"]},null),e.Gb(603979776,1,{links:1}),e.Gb(603979776,2,{linksWithHrefs:1}),(l()(),e.rb(13,0,null,null,5,"a",[["class","nav-link"],["routerLink","view"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Cb(l,14).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t}),null,null)),e.qb(14,671744,[[4,4],[2,4]],0,E.n,[E.k,E.a,m.h],{routerLink:[0,"routerLink"]},null),e.qb(15,1720320,null,2,E.m,[E.k,e.k,e.C,[2,E.l],[2,E.n]],{routerLinkActive:[0,"routerLinkActive"]},null),e.Gb(603979776,3,{links:1}),e.Gb(603979776,4,{linksWithHrefs:1}),(l()(),e.Ib(-1,null,["View"])),(l()(),e.gb(16777216,null,null,1,null,V)),e.qb(20,16384,null,0,m.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.gb(16777216,null,null,1,null,Z)),e.qb(22,16384,null,0,m.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.rb(23,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),e.qb(24,212992,null,0,E.p,[E.b,e.O,e.j,[8,null],e.h],null,null)],(function(l,n){var u=n.component;l(n,1,0,u.downloadUrl),l(n,5,0,!u.auth.authenticated),l(n,8,0,u.auth.authenticated),l(n,10,0,"active"),l(n,14,0,"view"),l(n,15,0,"active"),l(n,20,0,!u.offlineService.isOnline||u.perms.edit),l(n,22,0,!u.offlineService.isOnline||u.perms.delete),l(n,24,0)}),(function(l,n){l(n,13,0,e.Cb(n,14).target,e.Cb(n,14).href)}))}function nl(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,1,"app-resource",[],null,null,null,ll,N)),e.qb(1,114688,null,0,U,[D.a,E.a,M.a,O.a],null,null)],(function(l,n){l(n,1,0)}),null)}var ul=e.nb("app-resource",U,nl,{},{},[]),el=u("S8Yu"),tl=u("rJcy"),rl=u("3CKi"),il=u("wLq9"),ol=e.pb({encapsulation:2,styles:[],data:{}});function cl(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,1,"formio",[],null,null,null,r.c,r.b)),e.qb(1,770048,null,0,el.a,[e.y,k.a,[2,tl.a],[2,rl.a]],{form:[0,"form"],submission:[1,"submission"],readOnly:[2,"readOnly"],hideComponents:[3,"hideComponents"],refresh:[4,"refresh"]},null)],(function(l,n){var u=n.component;l(n,1,0,u.service.form,u.service.resource,!0,u.config.parents,u.service.refresh)}),null)}function al(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,1,"ng-component",[],null,null,null,cl,ol)),e.qb(1,49152,null,0,il.a,[D.a,H.a],null,null)],null,null)}var bl=e.nb("ng-component",il.a,al,{},{},[]),sl=u("Et9f"),fl=e.pb({encapsulation:2,styles:[],data:{}});function pl(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,1,"formio",[],null,[[null,"submit"]],(function(l,n,u){var e=!0;return"submit"===n&&(e=!1!==l.component.onSubmit(u)&&e),e}),r.c,r.b)),e.qb(1,770048,null,0,el.a,[e.y,k.a,[2,tl.a],[2,rl.a]],{form:[0,"form"],submission:[1,"submission"],refresh:[2,"refresh"],error:[3,"error"]},{submit:"submit"})],(function(l,n){var u=n.component;l(n,1,0,u.service.form,u.service.resource,u.service.refresh,u.triggerError)}),null)}function ml(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,1,"ng-component",[],null,null,null,pl,fl)),e.qb(1,49152,null,0,sl.a,[D.a,E.a,E.k,H.a],null,null)],null,null)}var hl=e.nb("ng-component",sl.a,ml,{},{},[]),gl=u("rbuc"),vl=e.pb({encapsulation:2,styles:[],data:{}});function dl(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,0,"td",[],[[8,"innerHTML",1]],null,null,null,null))],null,(function(l,n){l(n,0,0,n.component.view(n.parent.context.$implicit,n.context.$implicit))}))}function kl(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,2,"tr",[],[[8,"className",0]],[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.onRowSelect(u,l.context.$implicit)&&e),e}),null,null)),(l()(),e.gb(16777216,[[1,2]],null,1,null,dl)),e.qb(2,278528,null,0,m.j,[e.O,e.L,e.r],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,2,0,n.component.header.headers)}),(function(l,n){l(n,0,0,n.component.tableClass(n.context.$implicit))}))}function yl(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),e.gb(16777216,[[1,2]],null,1,null,kl)),e.qb(2,278528,null,0,m.j,[e.O,e.L,e.r],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,2,0,n.component.rows)}),null)}function Ll(l){return e.Kb(0,[e.Gb(402653184,1,{template:0}),(l()(),e.gb(0,[[1,2]],null,0,null,yl))],null,null)}function Ol(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,1,"app-body",[],null,null,null,Ll,vl)),e.qb(1,49152,null,0,C,[O.a],null,null)],null,null)}var Cl=e.nb("app-body",C,Ol,{header:"header",actionAllowed:"actionAllowed"},{rowSelect:"rowSelect",rowAction:"rowAction"},[]),wl=u("gIcY"),Kl=u("dXze"),ql=u("Vx+w"),Il=function(l){function n(n){var u=l.call(this)||this;return u.config=n,u}return y.__extends(n,l),Object.defineProperty(n.prototype,"name",{get:function(){return this.config.formName},set:function(l){},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"form",{get:function(){return this.config.formPath},set:function(l){},enumerable:!0,configurable:!0}),n}(F.b),Sl=function(l){function n(n,u,t,r){var i=l.call(this,n,u,t,r)||this;return i.appConfig=n,i.config=u,i.loader=t,i.resourcesService=r,i.onResource=new e.m,i}return y.__extends(n,l),n.prototype.setContext=function(n){var u=this;if(this.appConfig.currentForm)return l.prototype.init.call(this),l.prototype.setContext.call(this,n);n.params.subscribe((function(e){u.appConfig.loadForm(!0).then((function(){l.prototype.init.call(u),l.prototype.setContext.call(u,n)}))}))},n.prototype.save=function(n){var u=this;return l.prototype.save.call(this,this.appConfig.submitAlter(n)).then((function(l){u.appConfig.parent.send({formSubmission:l})}))},n.prototype.loadResource=function(n){var u=this;this.resourceLoaded=new Promise((function(e){n.params.subscribe((function(t){u.appConfig.loadForm(!0).then((function(){l.prototype.init.call(u),l.prototype.loadResource.call(u,n).then((function(l){u.onResource.emit(l),e(l)}))}))}))}))},n.prototype.init=function(){},n}(F.e),Al=u("Di7c"),xl=u("ikog"),Bl=u("YCyN"),Gl=u("pP+O"),Tl=u("QMXP"),Pl=u("5YvF");u.d(n,"SubmissionModuleNgFactory",(function(){return _l}));var _l=e.ob(t,[],(function(l){return e.Ab([e.Bb(512,e.j,e.Z,[[8,[r.a,i.a,o.a,c.a,a.a,b.a,s.a,f.a,p.a,z,J.a,ul,bl,hl,gl.a,Cl]],[3,e.j],e.w]),e.Bb(4608,m.m,m.l,[e.t,[2,m.y]]),e.Bb(4608,k.a,k.a,[]),e.Bb(4608,K.a,K.a,[]),e.Bb(4608,wl.g,wl.g,[]),e.Bb(4608,Kl.c,Kl.c,[]),e.Bb(4608,H.a,Il,[ql.a]),e.Bb(4608,D.a,Sl,[ql.a,H.a,k.a,[2,Al.a]]),e.Bb(1073742336,m.c,m.c,[]),e.Bb(1073742336,xl.a,xl.a,[]),e.Bb(1073742336,wl.f,wl.f,[]),e.Bb(1073742336,wl.a,wl.a,[]),e.Bb(1073742336,E.o,E.o,[[2,E.t],[2,E.k]]),e.Bb(1073742336,Kl.d,Kl.d,[]),e.Bb(1073742336,Bl.a,Bl.a,[]),e.Bb(1073742336,Gl.a,Gl.a,[]),e.Bb(1073742336,t,t,[]),e.Bb(1024,E.i,(function(){return[[{path:"",component:j},{path:"new",component:Tl.a},{path:":id",component:U,children:[{path:"",redirectTo:"view",pathMatch:"full"},{path:"view",component:il.a},{path:"edit",component:sl.a},{path:"delete",component:Pl.a}]}]]}),[])])}))}}]);