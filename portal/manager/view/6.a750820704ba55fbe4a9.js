(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{cAcB:function(n,l,u){"use strict";u.r(l),u.d(l,"AuthModuleNgFactory",(function(){return z}));var t=u("CcnG"),o=u("mrSG"),a=u("qq5e"),e=u("htdP"),r=u("Vx+w"),i=function(n){function l(l,u){var t=n.call(this)||this;return t.config=l,t.auth=u,t.showLogin=!0,t}return Object(o.b)(l,n),l.prototype.ngOnInit=function(){(window.APP_SSO||this.config.query.sso||this.config.query.saml)&&(this.showLogin=!1,e.a.authUrl=window.SSO_PROJECT,e.a.ssoInit(window.APP_SSO||this.config.query.sso||"saml",{forceAuth:!0})),this.auth.authenticated||(localStorage.removeItem(e.a.namespace+"Token"),localStorage.removeItem(e.a.namespace+"User"),localStorage.removeItem(e.a.namespace+"AppUser"))},l}(a.a),c=(Object(a.b)({auth:i}),function(){return function(){}}()),b=u("Yi/Q"),s=u("rxJI"),p=u("pMnS"),m=u("ZYCi"),f=u("Ip0R"),d=u("LWLj"),g=t.vb({encapsulation:0,styles:[[""]],data:{}});function h(n){return t.Wb(0,[(n()(),t.xb(0,0,null,null,2,"div",[["class","card-body panel-body"]],null,null,null,null,null)),(n()(),t.xb(1,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),t.wb(2,212992,null,0,m.p,[m.b,t.P,t.j,[8,null],t.h],null,null)],(function(n,l){n(l,2,0)}),null)}function w(n){return t.Wb(0,[(n()(),t.xb(0,0,null,null,1,"div",[["class","card-body panel-body"]],null,null,null,null,null)),(n()(),t.xb(1,0,null,null,0,"div",[["class","loader"]],null,null,null,null,null))],null,null)}function v(n){return t.Wb(0,[(n()(),t.xb(0,0,null,null,6,"div",[["class","card card-primary panel panel-default"]],null,null,null,null,null)),(n()(),t.xb(1,0,null,null,1,"div",[["class","card-header panel-heading"]],null,null,null,null,null)),(n()(),t.Tb(-1,null,["Login to your account"])),(n()(),t.gb(16777216,null,null,1,null,h)),t.wb(4,16384,null,0,f.j,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(n()(),t.gb(16777216,null,null,1,null,w)),t.wb(6,16384,null,0,f.j,[t.P,t.M],{ngIf:[0,"ngIf"]},null)],(function(n,l){var u=l.component;n(l,4,0,u.showLogin),n(l,6,0,!u.showLogin)}),null)}function y(n){return t.Wb(0,[(n()(),t.xb(0,0,null,null,1,"app-auth",[],null,null,null,v,g)),t.wb(1,114688,null,0,i,[r.a,d.a],null,null)],(function(n,l){n(l,1,0)}),null)}var x=t.tb("app-auth",i,y,{},{},[]),S=u("S8Yu"),K=u("rJcy"),I=u("3CKi"),P=u("X5MQ"),W=t.vb({encapsulation:2,styles:[],data:{}});function j(n){return t.Wb(0,[(n()(),t.xb(0,0,null,null,1,"formio",[],null,[[null,"submit"]],(function(n,l,u){var t=!0;return"submit"===l&&(t=!1!==n.component.service.onLoginSubmit(u)&&t),t}),b.c,b.b)),t.wb(1,770048,null,0,S.a,[t.z,[2,K.a],[2,I.a]],{src:[0,"src"]},{submit:"submit"})],(function(n,l){n(l,1,0,l.component.service.loginForm)}),null)}function L(n){return t.Wb(0,[(n()(),t.xb(0,0,null,null,1,"ng-component",[],null,null,null,j,W)),t.wb(1,49152,null,0,P.a,[d.a],null,null)],null,null)}var O=t.tb("ng-component",P.a,L,{},{},[]),k=u("o3Vl"),A=t.vb({encapsulation:2,styles:[],data:{}});function J(n){return t.Wb(0,[(n()(),t.xb(0,0,null,null,1,"formio",[],null,[[null,"submit"]],(function(n,l,u){var t=!0;return"submit"===l&&(t=!1!==n.component.service.onRegisterSubmit(u)&&t),t}),b.c,b.b)),t.wb(1,770048,null,0,S.a,[t.z,[2,K.a],[2,I.a]],{src:[0,"src"]},{submit:"submit"})],(function(n,l){n(l,1,0,l.component.service.registerForm)}),null)}function M(n){return t.Wb(0,[(n()(),t.xb(0,0,null,null,1,"ng-component",[],null,null,null,J,A)),t.wb(1,49152,null,0,k.a,[d.a],null,null)],null,null)}var q=t.tb("ng-component",k.a,M,{},{},[]),C=u("KzPs"),T=u("ikog"),Y=u("sd+H"),z=t.ub(c,[],(function(n){return t.Jb([t.Kb(512,t.j,t.Y,[[8,[b.a,s.a,p.a,x,O,q]],[3,t.j],t.x]),t.Kb(4608,f.l,f.k,[t.u]),t.Kb(4608,C.a,C.a,[]),t.Kb(4608,I.a,I.a,[]),t.Kb(1073742336,f.b,f.b,[]),t.Kb(1073742336,T.a,T.a,[]),t.Kb(1073742336,m.o,m.o,[[2,m.t],[2,m.k]]),t.Kb(1073742336,Y.a,Y.a,[]),t.Kb(1073742336,c,c,[]),t.Kb(1024,m.i,(function(){return[[{path:"",component:i,children:[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:P.a},{path:"register",component:k.a}]}]]}),[])])}))}}]);