(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{cAcB:function(n,l,u){"use strict";u.r(l);var t=u("CcnG"),o=u("mrSG"),i=u("qq5e"),r=u("Vx+w"),a=u("htdP").Formio,s=function(n){function l(l){var u=n.call(this)||this;return u.config=l,u.showLogin=!0,u}return o.__extends(l,n),l.prototype.ngOnInit=function(){(window.APP_SSO||this.config.query.sso||this.config.query.saml)&&(this.showLogin=!1,a.authUrl=window.SSO_PROJECT,a.ssoInit(window.APP_SSO||this.config.query.sso||"saml",{forceAuth:!0}))},l}(i.a),c=(Object(i.b)({auth:s}),function(){return function(){}}()),e=u("Yi/Q"),b=u("rxJI"),p=u("pMnS"),f=u("ZYCi"),m=u("Ip0R"),d=t.qb({encapsulation:0,styles:[[""]],data:{}});function h(n){return t.Hb(0,[(n()(),t.sb(0,0,null,null,2,"div",[["class","card-body panel-body"]],null,null,null,null,null)),(n()(),t.sb(1,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),t.rb(2,212992,null,0,f.p,[f.b,t.P,t.j,[8,null],t.h],null,null)],function(n,l){n(l,2,0)},null)}function g(n){return t.Hb(0,[(n()(),t.sb(0,0,null,null,1,"div",[["class","card-body panel-body"]],null,null,null,null,null)),(n()(),t.sb(1,0,null,null,0,"div",[["class","loader"]],null,null,null,null,null))],null,null)}function v(n){return t.Hb(0,[(n()(),t.sb(0,0,null,null,6,"div",[["class","card card-primary panel panel-default"]],null,null,null,null,null)),(n()(),t.sb(1,0,null,null,1,"div",[["class","card-header panel-heading"]],null,null,null,null,null)),(n()(),t.Gb(-1,null,["Login to your account"])),(n()(),t.hb(16777216,null,null,1,null,h)),t.rb(4,16384,null,0,m.j,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(n()(),t.hb(16777216,null,null,1,null,g)),t.rb(6,16384,null,0,m.j,[t.P,t.M],{ngIf:[0,"ngIf"]},null)],function(n,l){var u=l.component;n(l,4,0,u.showLogin),n(l,6,0,!u.showLogin)},null)}function w(n){return t.Hb(0,[(n()(),t.sb(0,0,null,null,1,"app-auth",[],null,null,null,v,d)),t.rb(1,114688,null,0,s,[r.a],null,null)],function(n,l){n(l,1,0)},null)}var y=t.ob("app-auth",s,w,{},{},[]),A=u("S8Yu"),S=u("r6Rv"),O=u("rJcy"),P=u("X5MQ"),H=u("LWLj"),q=t.qb({encapsulation:2,styles:[],data:{}});function I(n){return t.Hb(0,[(n()(),t.sb(0,0,null,null,2,"formio",[],null,[[null,"submit"]],function(n,l,u){var t=!0;return"submit"===l&&(t=!1!==n.component.service.onLoginSubmit(u)&&t),t},e.c,e.b)),t.rb(1,770048,null,0,A.a,[S.a,[2,O.a]],{src:[0,"src"],submitOptions:[1,"submitOptions"]},{submit:"submit"}),t.Cb(2,{skipQueue:0})],function(n,l){var u=l.component.service.loginForm,t=n(l,2,0,!0);n(l,1,0,u,t)},null)}function L(n){return t.Hb(0,[(n()(),t.sb(0,0,null,null,1,"ng-component",[],null,null,null,I,q)),t.rb(1,49152,null,0,P.a,[H.a],null,null)],null,null)}var j=t.ob("ng-component",P.a,L,{},{},[]),k=u("o3Vl"),M=t.qb({encapsulation:2,styles:[],data:{}});function C(n){return t.Hb(0,[(n()(),t.sb(0,0,null,null,2,"formio",[],null,[[null,"submit"]],function(n,l,u){var t=!0;return"submit"===l&&(t=!1!==n.component.service.onRegisterSubmit(u)&&t),t},e.c,e.b)),t.rb(1,770048,null,0,A.a,[S.a,[2,O.a]],{src:[0,"src"],submitOptions:[1,"submitOptions"]},{submit:"submit"}),t.Cb(2,{skipQueue:0})],function(n,l){var u=l.component.service.registerForm,t=n(l,2,0,!0);n(l,1,0,u,t)},null)}function J(n){return t.Hb(0,[(n()(),t.sb(0,0,null,null,1,"ng-component",[],null,null,null,C,M)),t.rb(1,49152,null,0,k.a,[H.a],null,null)],null,null)}var _=t.ob("ng-component",k.a,J,{},{},[]),x=u("KzPs"),F=u("ikog"),Q=u("sd+H");u.d(l,"AuthModuleNgFactory",function(){return R});var R=t.pb(c,[],function(n){return t.zb([t.Ab(512,t.j,t.cb,[[8,[e.a,b.a,p.a,y,j,_]],[3,t.j],t.y]),t.Ab(4608,m.l,m.k,[t.v,[2,m.x]]),t.Ab(4608,S.a,S.a,[]),t.Ab(4608,x.a,x.a,[]),t.Ab(1073742336,m.b,m.b,[]),t.Ab(1073742336,F.a,F.a,[]),t.Ab(1073742336,f.o,f.o,[[2,f.t],[2,f.k]]),t.Ab(1073742336,Q.a,Q.a,[]),t.Ab(1073742336,c,c,[]),t.Ab(1024,f.i,function(){return[[{path:"",component:s,children:[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:P.a},{path:"register",component:k.a}]}]]},[])])})}}]);