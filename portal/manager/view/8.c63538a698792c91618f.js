(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{jvjA:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),r=function(){return function(){}}(),t=u("Yi/Q"),i=u("rxJI"),o=u("pMnS"),c=u("O2im"),a=u("//LL"),s=u("GPOe"),b=u("9c/x"),f=u("8CNj"),p=u("StRJ"),v=u("Ip0R"),d=u("lIz8"),m=u("qza0"),h=u("HPOf"),g=u("PLeI"),k=u("r6Rv"),y=u("GDim"),q=u("KzPs"),L=e.pb({encapsulation:0,styles:[".formio-grid[_ngcontent-%COMP%] { position: relative; width: 100%; } .grid-refresh[_ngcontent-%COMP%] { height: 400px; width: 100%; }"],data:{}});function w(l){return e.Kb(0,[(l()(),e.gb(0,null,null,0))],null,null)}function S(l){return e.Kb(0,[(l()(),e.gb(0,null,null,0))],null,null)}function C(l){return e.Kb(0,[(l()(),e.gb(0,null,null,0))],null,null)}function I(l){return e.Kb(0,[(l()(),e.rb(0,16777216,null,null,1,null,null,null,null,null,null,null)),e.qb(1,540672,null,0,v.o,[e.O],{ngTemplateOutlet:[0,"ngTemplateOutlet"]},null),(l()(),e.gb(0,null,null,0))],(function(l,n){l(n,1,0,n.component.header.template)}),null)}function K(l){return e.Kb(0,[(l()(),e.rb(0,16777216,null,null,1,null,null,null,null,null,null,null)),e.qb(1,540672,null,0,v.o,[e.O],{ngTemplateOutlet:[0,"ngTemplateOutlet"]},null),(l()(),e.gb(0,null,null,0))],(function(l,n){l(n,1,0,n.component.body.template)}),null)}function O(l){return e.Kb(0,[(l()(),e.rb(0,16777216,null,null,1,null,null,null,null,null,null,null)),e.qb(1,540672,null,0,v.o,[e.O],{ngTemplateOutlet:[0,"ngTemplateOutlet"]},null),(l()(),e.gb(0,null,null,0))],(function(l,n){l(n,1,0,n.component.footer.template)}),null)}function A(l){return e.Kb(0,[e.Gb(402653184,1,{headerElement:0}),e.Gb(402653184,2,{bodyElement:0}),e.Gb(402653184,3,{footerElement:0}),(l()(),e.gb(16777216,[[1,3],["headerTemplate",2]],null,0,null,w)),(l()(),e.gb(16777216,[[2,3],["bodyTemplate",2]],null,0,null,S)),(l()(),e.gb(16777216,[[3,3],["footerTemplate",2]],null,0,null,C)),(l()(),e.rb(6,0,null,null,11,"div",[["class","formio-grid"]],null,null,null,null,null)),(l()(),e.rb(7,0,null,null,1,"formio-alerts",[],null,null,null,d.b,d.a)),e.qb(8,114688,null,0,m.a,[],{alerts:[0,"alerts"]},null),(l()(),e.rb(9,0,null,null,8,"table",[["class","table table-bordered table-striped table-hover"]],null,null,null,null,null)),(l()(),e.gb(16777216,null,null,1,null,I)),e.qb(11,16384,null,0,v.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.rb(12,0,null,null,1,"formio-loader",[],null,null,null,h.b,h.a)),e.qb(13,49152,null,0,g.a,[k.a],null,null),(l()(),e.gb(16777216,null,null,1,null,K)),e.qb(15,16384,null,0,v.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.gb(16777216,null,null,1,null,O)),e.qb(17,16384,null,0,v.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,8,0,u.alerts),l(n,11,0,u.initialized),l(n,15,0,u.initialized),l(n,17,0,u.initialized)}),null)}var G=u("mrSG"),x=u("kVPD"),P=u("Yt1J"),T=u("WBsH"),_=function(l){function n(){return null!==l&&l.apply(this,arguments)||this}return G.__extends(n,l),n}(T.d),B=function(l){function n(){return null!==l&&l.apply(this,arguments)||this}return G.__extends(n,l),n.prototype.getMethod=function(l){switch(l){case"POST":return"Create";case"PUT":return"Update";case"DELETE":return"Delete"}},n}(T.b),E=function(l){function n(){return null!==l&&l.apply(this,arguments)||this}return G.__extends(n,l),n}(T.c),Q=function(l){function n(n,u,r,t,i){var o=l.call(this,n,u,r,t)||this;return o.service=n,o.route=u,o.router=r,o.config=t,o.offlineService=i,o.refreshGrid=new e.m,o.gridComps={header:_,body:B,footer:E},o}return G.__extends(n,l),n.prototype.emptyQueue=function(){var l=this;window.confirm("This will delete all queued offline tasks. Are you sure?")&&this.offlineService.emptyQueue().then((function(){return l.refreshGrid.emit({})}))},n.prototype.clearOffline=function(){var l=this;window.confirm("This will delete all offline data. Are you sure?")&&this.offlineService.clearAll().then((function(){l.offlineService.emptyQueue(),l.grid.refreshGrid()}))},n}(x.d),j=u("XF9X"),M=u("ZYCi"),z=u("D6yi"),D=e.pb({encapsulation:0,styles:[[""]],data:{}});function R(l){return e.Kb(0,[e.Gb(671088640,1,{grid:0}),(l()(),e.rb(1,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Offline Tasks"])),(l()(),e.rb(3,0,null,null,1,"formio-grid",[["createText",""]],null,[[null,"rowSelect"],[null,"error"]],(function(l,n,u){var e=!0,r=l.component;return"rowSelect"===n&&(e=!1!==r.onSelect(u)&&e),"error"===n&&(e=!1!==r.service.onError(u)&&e),e}),A,L)),e.qb(4,4833280,[[1,4]],0,y.a,[k.a,q.a,e.j,e.h],{src:[0,"src"],items:[1,"items"],onForm:[2,"onForm"],query:[3,"query"],refresh:[4,"refresh"],components:[5,"components"],createText:[6,"createText"]},{rowSelect:"rowSelect",error:"error"}),(l()(),e.rb(5,0,null,null,5,"button",[["class","btn btn-warning mr-3"],["type","button"]],[[1,"disabled",0]],[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.offlineService.dequeueSubmissions()&&e),e}),null,null)),(l()(),e.rb(6,0,null,null,3,"i",[["class","fa mr-1"]],null,null,null,null,null)),e.Fb(512,null,v.t,v.u,[e.r,e.s,e.k,e.C]),e.qb(8,278528,null,0,v.i,[v.t],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.Eb(9,{"fa-spin fa-refresh":0,"fa-send":1}),(l()(),e.Ib(-1,null,[" Process Tasks\n"])),(l()(),e.rb(11,0,null,null,2,"button",[["class","btn btn-light mr-3"],["type","button"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.emptyQueue()&&e),e}),null,null)),(l()(),e.rb(12,0,null,null,0,"i",[["class","fa fa-trash mr-2"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,[" Empty Queue"])),(l()(),e.rb(14,0,null,null,2,"button",[["class","btn btn-light"],["type","button"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.clearOffline()&&e),e}),null,null)),(l()(),e.rb(15,0,null,null,0,"i",[["class","fa fa-trash mr-2"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,[" Clear Offline Data"]))],(function(l,n){var u=n.component;l(n,4,0,u.gridSrc,u.offlineService.offlineSubmissions,u.service.formLoaded,u.gridQuery,u.refreshGrid,u.gridComps,"");var e=l(n,9,0,u.offlineService.sync,!u.offlineService.sync);l(n,8,0,"fa mr-1",e)}),(function(l,n){l(n,5,0,n.component.offlineService.isOnline?null:"")}))}function F(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,1,"app-offline",[],null,null,null,R,D)),e.qb(1,114688,null,0,Q,[j.a,M.a,M.k,z.a,P.a],null,null)],(function(l,n){l(n,1,0)}),null)}var H=e.nb("app-offline",Q,F,{},{},[]),W=u("OLPT"),Y=function(l){function n(){return null!==l&&l.apply(this,arguments)||this}return G.__extends(n,l),n}(x.a),J=u("LWLj"),U=e.pb({encapsulation:0,styles:[[""]],data:{}});function N(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,34,"ul",[["class","nav nav-tabs"],["style","margin-bottom: 10px"]],null,null,null,null,null)),(l()(),e.rb(1,0,null,null,3,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),e.rb(2,0,null,null,2,"a",[["class","nav-link"],["routerLink","../"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var r=!0;return"click"===n&&(r=!1!==e.Cb(l,3).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&r),r}),null,null)),e.qb(3,671744,null,0,M.n,[M.k,M.a,v.h],{routerLink:[0,"routerLink"]},null),(l()(),e.rb(4,0,null,null,0,"i",[["class","fa fa-chevron-left glyphicon glyphicon-chevron-left"]],null,null,null,null,null)),(l()(),e.rb(5,0,null,null,9,"li",[["class","nav-item"],["routerLinkActive","active"]],null,null,null,null,null)),e.qb(6,1720320,null,2,M.m,[M.k,e.k,e.C,[2,M.l],[2,M.n]],{routerLinkActive:[0,"routerLinkActive"]},null),e.Gb(603979776,1,{links:1}),e.Gb(603979776,2,{linksWithHrefs:1}),(l()(),e.rb(9,0,null,null,5,"a",[["class","nav-link"],["routerLink","view"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var r=!0;return"click"===n&&(r=!1!==e.Cb(l,10).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&r),r}),null,null)),e.qb(10,671744,[[4,4],[2,4]],0,M.n,[M.k,M.a,v.h],{routerLink:[0,"routerLink"]},null),e.qb(11,1720320,null,2,M.m,[M.k,e.k,e.C,[2,M.l],[2,M.n]],{routerLinkActive:[0,"routerLinkActive"]},null),e.Gb(603979776,3,{links:1}),e.Gb(603979776,4,{linksWithHrefs:1}),(l()(),e.Ib(-1,null,["View"])),(l()(),e.rb(15,0,null,null,9,"li",[["class","nav-item"],["routerLinkActive","active"]],null,null,null,null,null)),e.qb(16,1720320,null,2,M.m,[M.k,e.k,e.C,[2,M.l],[2,M.n]],{routerLinkActive:[0,"routerLinkActive"]},null),e.Gb(603979776,5,{links:1}),e.Gb(603979776,6,{linksWithHrefs:1}),(l()(),e.rb(19,0,null,null,5,"a",[["class","nav-link"],["routerLink","edit"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var r=!0;return"click"===n&&(r=!1!==e.Cb(l,20).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&r),r}),null,null)),e.qb(20,671744,[[8,4],[6,4]],0,M.n,[M.k,M.a,v.h],{routerLink:[0,"routerLink"]},null),e.qb(21,1720320,null,2,M.m,[M.k,e.k,e.C,[2,M.l],[2,M.n]],{routerLinkActive:[0,"routerLinkActive"]},null),e.Gb(603979776,7,{links:1}),e.Gb(603979776,8,{linksWithHrefs:1}),(l()(),e.Ib(-1,null,["Edit"])),(l()(),e.rb(25,0,null,null,9,"li",[["class","nav-item"],["routerLinkActive","active"]],null,null,null,null,null)),e.qb(26,1720320,null,2,M.m,[M.k,e.k,e.C,[2,M.l],[2,M.n]],{routerLinkActive:[0,"routerLinkActive"]},null),e.Gb(603979776,9,{links:1}),e.Gb(603979776,10,{linksWithHrefs:1}),(l()(),e.rb(29,0,null,null,5,"a",[["class","nav-link"],["routerLink","delete"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var r=!0;return"click"===n&&(r=!1!==e.Cb(l,30).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&r),r}),null,null)),e.qb(30,671744,[[12,4],[10,4]],0,M.n,[M.k,M.a,v.h],{routerLink:[0,"routerLink"]},null),e.qb(31,1720320,null,2,M.m,[M.k,e.k,e.C,[2,M.l],[2,M.n]],{routerLinkActive:[0,"routerLinkActive"]},null),e.Gb(603979776,11,{links:1}),e.Gb(603979776,12,{linksWithHrefs:1}),(l()(),e.rb(34,0,null,null,0,"span",[["class","fa fa-trash glyphicon glyphicon-trash"]],null,null,null,null,null)),(l()(),e.rb(35,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),e.qb(36,212992,null,0,M.p,[M.b,e.O,e.j,[8,null],e.h],null,null)],(function(l,n){l(n,3,0,"../"),l(n,6,0,"active"),l(n,10,0,"view"),l(n,11,0,"active"),l(n,16,0,"active"),l(n,20,0,"edit"),l(n,21,0,"active"),l(n,26,0,"active"),l(n,30,0,"delete"),l(n,31,0,"active"),l(n,36,0)}),(function(l,n){l(n,2,0,e.Cb(n,3).target,e.Cb(n,3).href),l(n,9,0,e.Cb(n,10).target,e.Cb(n,10).href),l(n,19,0,e.Cb(n,20).target,e.Cb(n,20).href),l(n,29,0,e.Cb(n,30).target,e.Cb(n,30).href)}))}function X(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,1,"app-resource",[],null,null,null,N,U)),e.qb(1,114688,null,0,Y,[j.a,M.a,J.a,e.h],null,null)],(function(l,n){l(n,1,0)}),null)}var $=e.nb("app-resource",Y,X,{},{},[]),V=u("S8Yu"),Z=u("rJcy"),ll=u("3CKi"),nl=function(l){function n(n,u,e){var r=l.call(this,n,u)||this;return r.service=n,r.config=u,r.offlineService=e,r}return G.__extends(n,l),n}(x.f),ul=e.pb({encapsulation:2,styles:[],data:{}});function el(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,1,"formio",[],null,null,null,t.c,t.b)),e.qb(1,770048,null,0,V.a,[e.y,k.a,[2,Z.a],[2,ll.a]],{form:[0,"form"],submission:[1,"submission"],readOnly:[2,"readOnly"],hideComponents:[3,"hideComponents"],refresh:[4,"refresh"]},null)],(function(l,n){var u=n.component;l(n,1,0,u.service.form,u.service.resource.request.data,!0,u.config.parents,u.service.refresh)}),null)}function rl(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,11,"div",[["class","card card-body bg-light"]],null,null,null,null,null)),(l()(),e.rb(1,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Offline Queue Information"])),(l()(),e.rb(3,0,null,null,8,"ul",[],null,null,null,null,null)),(l()(),e.rb(4,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Ib(5,null,["Created: ",""])),(l()(),e.rb(6,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Ib(7,null,["Request ID: ",""])),(l()(),e.rb(8,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Ib(9,null,["Method: ",""])),(l()(),e.rb(10,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Ib(11,null,["URL: ",""])),(l()(),e.gb(16777216,null,null,1,null,el)),e.qb(13,16384,null,0,v.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,13,0,n.component.service.resource.request)}),(function(l,n){var u=n.component;l(n,5,0,null==u.service.resource?null:null==u.service.resource.request?null:null==u.service.resource.request.data?null:u.service.resource.request.data.created),l(n,7,0,null==u.service.resource?null:null==u.service.resource.request?null:u.service.resource.request._id),l(n,9,0,null==u.service.resource?null:null==u.service.resource.request?null:u.service.resource.request.method),l(n,11,0,null==u.service.resource?null:null==u.service.resource.request?null:u.service.resource.request.url)}))}function tl(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,1,"app-view",[],null,null,null,rl,ul)),e.qb(1,49152,null,0,nl,[j.a,z.a,P.a],null,null)],null,null)}var il=e.nb("app-view",nl,tl,{},{},[]),ol=function(l){function n(){return null!==l&&l.apply(this,arguments)||this}return G.__extends(n,l),n.prototype.onSubmit=function(l){var n=this;this.service.save(l).then((function(){n.router.navigate(["../","view"],{relativeTo:n.route})})).catch((function(l){return n.triggerError.emit(l)}))},n}(x.c),cl=e.pb({encapsulation:2,styles:[],data:{}});function al(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,9,"div",[["class","card card-body bg-light"]],null,null,null,null,null)),(l()(),e.rb(1,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Offline Information"])),(l()(),e.rb(3,0,null,null,6,"ul",[],null,null,null,null,null)),(l()(),e.rb(4,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Ib(5,null,["Request ID: ",""])),(l()(),e.rb(6,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Ib(7,null,["Method: ",""])),(l()(),e.rb(8,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Ib(9,null,["URL: ",""])),(l()(),e.rb(10,0,null,null,1,"formio",[],null,[[null,"submit"]],(function(l,n,u){var e=!0;return"submit"===n&&(e=!1!==l.component.onSubmit(u)&&e),e}),t.c,t.b)),e.qb(11,770048,null,0,V.a,[e.y,k.a,[2,Z.a],[2,ll.a]],{form:[0,"form"],submission:[1,"submission"],refresh:[2,"refresh"],error:[3,"error"]},{submit:"submit"})],(function(l,n){var u=n.component;l(n,11,0,u.service.form,null==u.service.resource?null:null==u.service.resource.request?null:u.service.resource.request.data,u.service.refresh,u.triggerError)}),(function(l,n){var u=n.component;l(n,5,0,null==u.service.resource?null:null==u.service.resource.request?null:u.service.resource.request._id),l(n,7,0,null==u.service.resource?null:null==u.service.resource.request?null:u.service.resource.request.method),l(n,9,0,null==u.service.resource?null:null==u.service.resource.request?null:u.service.resource.request.url)}))}function sl(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,1,"app-edit",[],null,null,null,al,cl)),e.qb(1,49152,null,0,ol,[j.a,M.a,M.k,z.a],null,null)],null,null)}var bl=e.nb("app-edit",ol,sl,{},{},[]),fl=u("rbuc"),pl=e.pb({encapsulation:2,styles:[],data:{}});function vl(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,7,"thead",[],null,null,null,null,null)),(l()(),e.rb(1,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),e.rb(2,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Created"])),(l()(),e.rb(4,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Operation"])),(l()(),e.rb(6,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Url"]))],null,null)}function dl(l){return e.Kb(0,[e.Gb(402653184,1,{template:0}),(l()(),e.gb(0,[[1,2]],null,0,null,vl))],null,null)}function ml(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,1,"app-header",[],null,null,null,dl,pl)),e.qb(1,49152,null,0,_,[],null,null)],null,null)}var hl=e.nb("app-header",_,ml,{actionAllowed:"actionAllowed"},{sort:"sort"},[]),gl=e.pb({encapsulation:2,styles:[],data:{}});function kl(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,6,"tr",[],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.onRowSelect(u,l.context.$implicit)&&e),e}),null,null)),(l()(),e.rb(1,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Ib(2,null,["",""])),(l()(),e.rb(3,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Ib(4,null,["",""])),(l()(),e.rb(5,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Ib(6,null,["",""]))],null,(function(l,n){var u=n.component;l(n,2,0,n.context.$implicit.created),l(n,4,0,u.getMethod(n.context.$implicit.method)),l(n,6,0,n.context.$implicit.url)}))}function yl(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),e.gb(16777216,[[1,2]],null,1,null,kl)),e.qb(2,278528,null,0,v.j,[e.O,e.L,e.r],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,2,0,n.component.rows)}),null)}function ql(l){return e.Kb(0,[e.Gb(402653184,1,{template:0}),(l()(),e.gb(0,[[1,2]],null,0,null,yl))],null,null)}function Ll(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,1,"app-body",[],null,null,null,ql,gl)),e.qb(1,49152,null,0,B,[],null,null)],null,null)}var wl=e.nb("app-body",B,Ll,{header:"header",actionAllowed:"actionAllowed"},{rowSelect:"rowSelect",rowAction:"rowAction"},[]),Sl=e.pb({encapsulation:2,styles:[],data:{}});function Cl(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,0,"tfoot",[["class","formio-grid-footer"]],null,null,null,null,null))],null,null)}function Il(l){return e.Kb(0,[e.Gb(402653184,1,{template:0}),(l()(),e.gb(0,[[1,2]],null,0,null,Cl))],null,null)}function Kl(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,1,"app-footer",[],null,null,null,Il,Sl)),e.qb(1,49152,null,0,E,[],null,null)],null,null)}var Ol=e.nb("app-footer",E,Kl,{header:"header",body:"body",createText:"createText",size:"size",actionAllowed:"actionAllowed"},{pageChanged:"pageChanged",createItem:"createItem"},[]),Al=u("gIcY"),Gl=u("dXze"),xl=u("Vx+w"),Pl=function(l){function n(n){var u=l.call(this)||this;return u.config=n,u}return G.__extends(n,l),Object.defineProperty(n.prototype,"name",{get:function(){return this.config.formName},set:function(l){},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"form",{get:function(){return this.config.formPath},set:function(l){},enumerable:!0,configurable:!0}),n}(x.b),Tl=(u("htdP"),function(l){function n(n,u,e,r,t){var i=l.call(this,n,u,e,r)||this;return i.appConfig=n,i.config=u,i.loader=e,i.resourcesService=r,i.offlineService=t,i}return G.__extends(n,l),n.prototype.loadResource=function(l){var n=this;return this.setContext(l),this.loader.loading=!0,this.resourceLoading=this.resourceLoaded=new Promise((function(u,e){l.params.subscribe((function(l){n.offlineService.offlinePlugin.ready.then((function(){var r=n.offlineService.offlinePlugin.getSubmissionQueueSubmission(l.form,l.id);r?(n.resource=r,n.loader.loading=!1,n.refresh.emit({property:"submission",value:n.resource}),u(r)):(n.onSubmissionError("Submission not found"),e("Submission not found"))}))}))})),this.resourceLoading},n.prototype.save=function(l){var n=this;return this.offlineService.offlinePlugin.ready.then((function(){return n.offlineService.offlinePlugin.updateSubmissionQueueSubmission(l)}))},n.prototype.remove=function(){var l=this;return this.offlineService.offlinePlugin.ready.then((function(){return l.offlineService.offlinePlugin.removeSubmissionQueueSubmission(l.resource.request)}))},n}(x.e)),_l=u("Di7c"),Bl=u("ikog"),El=u("YCyN"),Ql=u("pP+O"),jl=u("QMXP"),Ml=u("5YvF");u.d(n,"OfflineModuleNgFactory",(function(){return zl}));var zl=e.ob(r,[],(function(l){return e.Ab([e.Bb(512,e.j,e.Z,[[8,[t.a,i.a,o.a,c.a,a.a,s.a,b.a,f.a,p.a,H,W.a,$,il,bl,fl.a,hl,wl,Ol]],[3,e.j],e.w]),e.Bb(4608,v.m,v.l,[e.t,[2,v.y]]),e.Bb(4608,k.a,k.a,[]),e.Bb(4608,q.a,q.a,[]),e.Bb(4608,ll.a,ll.a,[]),e.Bb(4608,Al.g,Al.g,[]),e.Bb(4608,Gl.c,Gl.c,[]),e.Bb(4608,z.a,Pl,[xl.a]),e.Bb(4608,j.a,Tl,[xl.a,z.a,k.a,[2,_l.a],P.a]),e.Bb(1073742336,v.c,v.c,[]),e.Bb(1073742336,Bl.a,Bl.a,[]),e.Bb(1073742336,Al.f,Al.f,[]),e.Bb(1073742336,Al.a,Al.a,[]),e.Bb(1073742336,M.o,M.o,[[2,M.t],[2,M.k]]),e.Bb(1073742336,Gl.d,Gl.d,[]),e.Bb(1073742336,El.a,El.a,[]),e.Bb(1073742336,Ql.a,Ql.a,[]),e.Bb(1073742336,r,r,[]),e.Bb(1024,M.i,(function(){return[[{path:"",component:Q},{path:"new",component:jl.a},{path:":id",component:Y,children:[{path:"",redirectTo:"view",pathMatch:"full"},{path:"view",component:nl},{path:"edit",component:ol},{path:"delete",component:Ml.a}]}]]}),[])])}))}}]);