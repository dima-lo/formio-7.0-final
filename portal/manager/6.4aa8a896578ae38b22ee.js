(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Yj9t:function(t,e,r){"use strict";r.r(e),r.d(e,"AuthModule",function(){return h});var n,o=r("ofXK"),i=r("tyNb"),c=r("oiZh"),a=r("4Fw/"),s=r("Mr5W"),u=r("fXoL"),p=(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});function f(t,e){1&t&&(u.Pb(0,"li",3),u.Pb(1,"a",7),u.wc(2,"Reset Password"),u.Ob(),u.Ob())}var b=function(t){function e(e){var r=t.call(this)||this;return r.service=e,r.resetPassForm=null,r}return p(e,t),e.prototype.ngOnInit=function(){var t=this;new s.Formio(this.service.resetPassForm).loadForm().then(function(e){return t.resetPassForm=e}).catch(function(t){return console.log(t)})},e.\u0275fac=function(t){return new(t||e)(u.Jb(a.f))},e.\u0275cmp=u.Db({type:e,selectors:[["app-auth"]],features:[u.ub],decls:9,vars:1,consts:[[1,"card","card-primary","panel","panel-default"],[1,"card-header","panel-heading"],[1,"nav","nav-tabs","card-header-tabs"],["role","presentation","routerLinkActive","active",1,"nav-item"],["routerLink","login","routerLinkActive","active",1,"nav-link"],["class","nav-item","role","presentation","routerLinkActive","active",4,"ngIf"],[1,"card-body","panel-body"],["routerLink","resetpass","routerLinkActive","active",1,"nav-link"]],template:function(t,e){1&t&&(u.Pb(0,"div",0),u.Pb(1,"div",1),u.Pb(2,"ul",2),u.Pb(3,"li",3),u.Pb(4,"a",4),u.wc(5,"Login"),u.Ob(),u.Ob(),u.uc(6,f,3,0,"li",5),u.Ob(),u.Ob(),u.Pb(7,"div",6),u.Kb(8,"router-outlet"),u.Ob(),u.Ob()),2&t&&(u.xb(6),u.dc("ngIf",e.resetPassForm))},directives:[i.c,i.d,o.j,i.f],styles:[""]}),e}(a.b),l=function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();function m(t,e){if(1&t){var r=u.Qb();u.Pb(0,"formio",1),u.Wb("submit",function(t){return u.nc(r),u.Yb().service.onLoginSubmit(t)}),u.Ob()}if(2&t){var n=u.Yb();u.dc("src",n.adminLoginForm)}}var v=function(t){function e(e){var r=t.call(this,e)||this;r.service=e,r.loginFormReady=!1;var n=r.service.appConfig.appUrl+"/admin/login";return r.adminLoginForm="",new s.Formio(n).loadForm().then(function(){r.adminLoginForm=r.service.appConfig.appUrl+"/admin/login",r.loginFormReady=!0}).catch(function(){r.adminLoginForm=r.service.appConfig.appUrl+"/user/login",r.loginFormReady=!0}),r}return l(e,t),e.\u0275fac=function(t){return new(t||e)(u.Jb(a.f))},e.\u0275cmp=u.Db({type:e,selectors:[["app-login"]],features:[u.ub],decls:1,vars:1,consts:[[3,"src","submit",4,"ngIf"],[3,"src","submit"]],template:function(t,e){1&t&&u.uc(0,m,1,1,"formio",0),2&t&&u.dc("ngIf",e.loginFormReady)},directives:[o.j,c.e],styles:[""]}),e}(a.d),d=r("5eHb"),y=function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),g=function(t){function e(e,r,n,o){var i=t.call(this,e)||this;return i.service=e,i.router=r,i.route=n,i.toastr=o,i}return y(e,t),e.prototype.ngOnInit=function(){this.route.queryParamMap.subscribe(function(t){var e=t.get("x-jwt-token");e&&s.Formio.setToken(e)})},e.prototype.onSubmit=function(t){s.Formio.getToken()||t.password?(this.toastr.success(t&&t.message),this.router.navigate(["../login"],{relativeTo:this.route})):(this.toastr.success("Password reset was sent. Check your mailbox"),this.router.navigate(["../login"],{relativeTo:this.route}))},e.prototype.beforeSubmit=function(t){var e=s.Formio.getUser();return t.data.email=e.data.email,t},e.\u0275fac=function(t){return new(t||e)(u.Jb(a.f),u.Jb(i.b),u.Jb(i.a),u.Jb(d.b))},e.\u0275cmp=u.Db({type:e,selectors:[["app-reset-pass"]],features:[u.ub],decls:1,vars:1,consts:[[3,"src","submit","beforeSubmit"]],template:function(t,e){1&t&&(u.Pb(0,"formio",0),u.Wb("submit",function(t){return e.onSubmit(t)})("beforeSubmit",function(t){return e.beforeSubmit(t)}),u.Ob()),2&t&&u.dc("src",e.service.resetPassForm)},directives:[c.e],encapsulation:2}),e}(a.g),h=function(){function t(){}return t.\u0275mod=u.Hb({type:t}),t.\u0275inj=u.Gb({factory:function(e){return new(e||t)},imports:[[o.b,c.g,a.a,i.e.forChild(Object(a.e)({auth:b,login:v,resetpass:g}))]]}),t}()}}]);