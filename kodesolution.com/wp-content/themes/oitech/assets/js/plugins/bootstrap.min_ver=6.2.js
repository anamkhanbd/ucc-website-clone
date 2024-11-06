/*!
  * Bootstrap v5.0.0-beta1 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("@popperjs/core")):"function"==typeof define&&define.amd?define(["@popperjs/core"],t):(e="undefined"!=typeof globalThis?globalThis:e||self).bootstrap=t(e.Popper)}(this,(function(e){"use strict";!function(e){if(e&&e.__esModule)return e;var t=Object.create(null);e&&Object.keys(e).forEach((function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}(e);function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var o,a,s=function(e){var t=e.getAttribute("data-bs-target");if(!t||"#"===t){var n=e.getAttribute("href");t=n&&"#"!==n?n.trim():null}return t},l=function(e){var t=s(e);return t&&document.querySelector(t)?t:null},c=function(e){var t=s(e);return t?document.querySelector(t):null},u=function(e){if(!e)return 0;var t=window.getComputedStyle(e),n=t.transitionDuration,r=t.transitionDelay,i=Number.parseFloat(n),o=Number.parseFloat(r);return i||o?(n=n.split(",")[0],r=r.split(",")[0],1e3*(Number.parseFloat(n)+Number.parseFloat(r))):0},f=function(e){return(e[0]||e).nodeType},d=function(e,t){var n=!1,r=t+5;e.addEventListener("transitionend",(function t(){n=!0,e.removeEventListener("transitionend",t)})),setTimeout((function(){n||function(e){e.dispatchEvent(new Event("transitionend"))}(e)}),r)},g=function(e){return e.offsetHeight},p=function(){var e=window.jQuery;return e&&!document.body.hasAttribute("data-bs-no-jquery")?e:null},h=function(e){"loading"===document.readyState?document.addEventListener("DOMContentLoaded",e):e()},v=(document.documentElement.dir,o={},a=1,{set:function(e,t,n){void 0===e.bsKey&&(e.bsKey={key:t,id:a},a++),o[e.bsKey.id]=n},get:function(e,t){if(!e||void 0===e.bsKey)return null;var n=e.bsKey;return n.key===t?o[n.id]:null},delete:function(e,t){if(void 0!==e.bsKey){var n=e.bsKey;n.key===t&&(delete o[n.id],delete e.bsKey)}}}),m=function(e,t,n){v.set(e,t,n)},b=function(e,t){return v.get(e,t)},y=/[^.]*(?=\..*)\.|.*/,_=/\..*/,E=/::\d+$/,w={},L=1,A={mouseenter:"mouseover",mouseleave:"mouseout"},j=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function T(e,t){return t&&t+"::"+L++||e.uidEvent||L++}function O(e){var t=T(e);return e.uidEvent=t,w[t]=w[t]||{},w[t]}function C(e,t,n){void 0===n&&(n=null);for(var r=Object.keys(e),i=0,o=r.length;i<o;i++){var a=e[r[i]];if(a.originalHandler===t&&a.delegationSelector===n)return a}return null}function k(e,t,n){var r="string"==typeof t,i=r?n:t,o=e.replace(_,""),a=A[o];return a&&(o=a),j.has(o)||(o=e),[r,i,o]}function D(e,t,n,r,i){if("string"==typeof t&&e){n||(n=r,r=null);var o=k(t,n,r),a=o[0],s=o[1],l=o[2],c=O(e),u=c[l]||(c[l]={}),f=C(u,s,a?n:null);if(f)f.oneOff=f.oneOff&&i;else{var d=T(s,t.replace(y,"")),g=a?function(e,t,n){return function r(i){for(var o=e.querySelectorAll(t),a=i.target;a&&a!==this;a=a.parentNode)for(var s=o.length;s--;)if(o[s]===a)return i.delegateTarget=a,r.oneOff&&I.off(e,i.type,n),n.apply(a,[i]);return null}}(e,n,r):function(e,t){return function n(r){return r.delegateTarget=e,n.oneOff&&I.off(e,r.type,t),t.apply(e,[r])}}(e,n);g.delegationSelector=a?n:null,g.originalHandler=s,g.oneOff=i,g.uidEvent=d,u[d]=g,e.addEventListener(l,g,a)}}}function N(e,t,n,r,i){var o=C(t[n],r,i);o&&(e.removeEventListener(n,o,Boolean(i)),delete t[n][o.uidEvent])}var I={on:function(e,t,n,r){D(e,t,n,r,!1)},one:function(e,t,n,r){D(e,t,n,r,!0)},off:function(e,t,n,r){if("string"==typeof t&&e){var i=k(t,n,r),o=i[0],a=i[1],s=i[2],l=s!==t,c=O(e),u=t.startsWith(".");if(void 0===a){u&&Object.keys(c).forEach((function(n){!function(e,t,n,r){var i=t[n]||{};Object.keys(i).forEach((function(o){if(o.includes(r)){var a=i[o];N(e,t,n,a.originalHandler,a.delegationSelector)}}))}(e,c,n,t.slice(1))}));var f=c[s]||{};Object.keys(f).forEach((function(n){var r=n.replace(E,"");if(!l||t.includes(r)){var i=f[n];N(e,c,s,i.originalHandler,i.delegationSelector)}}))}else{if(!c||!c[s])return;N(e,c,s,a,o?n:null)}}},trigger:function(e,t,n){if("string"!=typeof t||!e)return null;var r,i=p(),o=t.replace(_,""),a=t!==o,s=j.has(o),l=!0,c=!0,u=!1,f=null;return a&&i&&(r=i.Event(t,n),i(e).trigger(r),l=!r.isPropagationStopped(),c=!r.isImmediatePropagationStopped(),u=r.isDefaultPrevented()),s?(f=document.createEvent("HTMLEvents")).initEvent(o,l,!0):f=new CustomEvent(t,{bubbles:l,cancelable:!0}),void 0!==n&&Object.keys(n).forEach((function(e){Object.defineProperty(f,e,{get:function(){return n[e]}})})),u&&f.preventDefault(),c&&e.dispatchEvent(f),f.defaultPrevented&&void 0!==r&&r.preventDefault(),f}},S=function(){function e(e){e&&(this._element=e,m(e,this.constructor.DATA_KEY,this))}return e.prototype.dispose=function(){(function(e,t){v.delete(e,t)})(this._element,this.constructor.DATA_KEY),this._element=null},e.getInstance=function(e){return b(e,this.DATA_KEY)},n(e,null,[{key:"VERSION",get:function(){return"5.0.0-beta1"}}]),e}(),P="alert",K=function(e){function t(){return e.apply(this,arguments)||this}i(t,e);var r=t.prototype;return r.close=function(e){var t=e?this._getRootElement(e):this._element,n=this._triggerCloseEvent(t);null===n||n.defaultPrevented||this._removeElement(t)},r._getRootElement=function(e){return c(e)||e.closest(".alert")},r._triggerCloseEvent=function(e){return I.trigger(e,"close.bs.alert")},r._removeElement=function(e){var t=this;if(e.classList.remove("show"),e.classList.contains("fade")){var n=u(e);I.one(e,"transitionend",(function(){return t._destroyElement(e)})),d(e,n)}else this._destroyElement(e)},r._destroyElement=function(e){e.parentNode&&e.parentNode.removeChild(e),I.trigger(e,"closed.bs.alert")},t.jQueryInterface=function(e){return this.each((function(){var n=b(this,"bs.alert");n||(n=new t(this)),"close"===e&&n[e](this)}))},t.handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},n(t,null,[{key:"DATA_KEY",get:function(){return"bs.alert"}}]),t}(S);I.on(document,"click.bs.alert.data-api",'[data-bs-dismiss="alert"]',K.handleDismiss(new K)),h((function(){var e=p();if(e){var t=e.fn[P];e.fn[P]=K.jQueryInterface,e.fn[P].Constructor=K,e.fn[P].noConflict=function(){return e.fn[P]=t,K.jQueryInterface}}}));var Q=function(e){function t(){return e.apply(this,arguments)||this}return i(t,e),t.prototype.toggle=function(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))},t.jQueryInterface=function(e){return this.each((function(){var n=b(this,"bs.button");n||(n=new t(this)),"toggle"===e&&n[e]()}))},n(t,null,[{key:"DATA_KEY",get:function(){return"bs.button"}}]),t}(S);function x(e){return"true"===e||"false"!==e&&(e===Number(e).toString()?Number(e):""===e||"null"===e?null:e)}I.on(document,"click.bs.button.data-api",'[data-bs-toggle="button"]',(function(e){e.preventDefault();var t=e.target.closest('[data-bs-toggle="button"]'),n=b(t,"bs.button");n||(n=new Q(t)),n.toggle()})),h((function(){var e=p();if(e){var t=e.fn.button;e.fn.button=Q.jQueryInterface,e.fn.button.Constructor=Q,e.fn.button.noConflict=function(){return e.fn.button=t,Q.jQueryInterface}}}));var q=function(e){if(!e)return{};var t={};return Object.keys(e.dataset).filter((function(e){return e.startsWith("bs")})).forEach((function(n){var r=n.replace(/^bs/,"");r=r.charAt(0).toLowerCase()+r.slice(1,r.length),t[r]=x(e.dataset[n])})),t},M=function(e,t){var n;return void 0===t&&(t=document.documentElement),(n=[]).concat.apply(n,Element.prototype.querySelectorAll.call(t,e))},Y=function(e,t){return void 0===t&&(t=document.documentElement),Element.prototype.querySelector.call(t,e)},H=function(e,t){var n;return(n=[]).concat.apply(n,e.children).filter((function(e){return e.matches(t)}))},R="collapse",B={toggle:!0,parent:""},F={toggle:"boolean",parent:"(string|element)"},U=function(e){function t(t,n){var r;(r=e.call(this,t)||this)._isTransitioning=!1,r._config=r._getConfig(n),r._triggerArray=M('[data-bs-toggle="collapse"][href="#'+t.id+'"],[data-bs-toggle="collapse"][data-bs-target="#'+t.id+'"]');for(var i=M('[data-bs-toggle="collapse"]'),o=0,a=i.length;o<a;o++){var s=i[o],c=l(s),u=M(c).filter((function(e){return e===t}));null!==c&&u.length&&(r._selector=c,r._triggerArray.push(s))}return r._parent=r._config.parent?r._getParent():null,r._config.parent||r._addAriaAndCollapsedClass(r._element,r._triggerArray),r._config.toggle&&r.toggle(),r}i(t,e);var o=t.prototype;return o.toggle=function(){this._element.classList.contains("show")?this.hide():this.show()},o.show=function(){var e=this;if(!this._isTransitioning&&!this._element.classList.contains("show")){var n,r;this._parent&&0===(n=M(".show, .collapsing",this._parent).filter((function(t){return"string"==typeof e._config.parent?t.getAttribute("data-bs-parent")===e._config.parent:t.classList.contains("collapse")}))).length&&(n=null);var i=Y(this._selector);if(n){var o=n.find((function(e){return i!==e}));if((r=o?b(o,"bs.collapse"):null)&&r._isTransitioning)return}if(!I.trigger(this._element,"show.bs.collapse").defaultPrevented){n&&n.forEach((function(e){i!==e&&t.collapseInterface(e,"hide"),r||m(e,"bs.collapse",null)}));var a=this._getDimension();this._element.classList.remove("collapse"),this._element.classList.add("collapsing"),this._element.style[a]=0,this._triggerArray.length&&this._triggerArray.forEach((function(e){e.classList.remove("collapsed"),e.setAttribute("aria-expanded",!0)})),this.setTransitioning(!0);var s="scroll"+(a[0].toUpperCase()+a.slice(1)),l=u(this._element);I.one(this._element,"transitionend",(function(){e._element.classList.remove("collapsing"),e._element.classList.add("collapse","show"),e._element.style[a]="",e.setTransitioning(!1),I.trigger(e._element,"shown.bs.collapse")})),d(this._element,l),this._element.style[a]=this._element[s]+"px"}}},o.hide=function(){var e=this;if(!this._isTransitioning&&this._element.classList.contains("show")&&!I.trigger(this._element,"hide.bs.collapse").defaultPrevented){var t=this._getDimension();this._element.style[t]=this._element.getBoundingClientRect()[t]+"px",g(this._element),this._element.classList.add("collapsing"),this._element.classList.remove("collapse","show");var n=this._triggerArray.length;if(n>0)for(var r=0;r<n;r++){var i=this._triggerArray[r],o=c(i);o&&!o.classList.contains("show")&&(i.classList.add("collapsed"),i.setAttribute("aria-expanded",!1))}this.setTransitioning(!0),this._element.style[t]="";var a=u(this._element);I.one(this._element,"transitionend",(function(){e.setTransitioning(!1),e._element.classList.remove("collapsing"),e._element.classList.add("collapse"),I.trigger(e._element,"hidden.bs.collapse")})),d(this._element,a)}},o.setTransitioning=function(e){this._isTransitioning=e},o.dispose=function(){e.prototype.dispose.call(this),this._config=null,this._parent=null,this._triggerArray=null,this._isTransitioning=null},o._getConfig=function(e){return(e=r({},B,e)).toggle=Boolean(e.toggle),function(e,t,n){Object.keys(n).forEach((function(r){var i,o=n[r],a=t[r],s=a&&f(a)?"element":null==(i=a)?""+i:{}.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(o).test(s))throw new Error(e.toUpperCase()+': Option "'+r+'" provided type "'+s+'" but expected type "'+o+'".')}))}(R,e,F),e},o._getDimension=function(){return this._element.classList.contains("width")?"width":"height"},o._getParent=function(){var e=this,t=this._config.parent;return f(t)?void 0===t.jquery&&void 0===t[0]||(t=t[0]):t=Y(t),M('[data-bs-toggle="collapse"][data-bs-parent="'+t+'"]',t).forEach((function(t){var n=c(t);e._addAriaAndCollapsedClass(n,[t])})),t},o._addAriaAndCollapsedClass=function(e,t){if(e&&t.length){var n=e.classList.contains("show");t.forEach((function(e){n?e.classList.remove("collapsed"):e.classList.add("collapsed"),e.setAttribute("aria-expanded",n)}))}},t.collapseInterface=function(e,n){var i=b(e,"bs.collapse"),o=r({},B,q(e),"object"==typeof n&&n?n:{});if(!i&&o.toggle&&"string"==typeof n&&/show|hide/.test(n)&&(o.toggle=!1),i||(i=new t(e,o)),"string"==typeof n){if(void 0===i[n])throw new TypeError('No method named "'+n+'"');i[n]()}},t.jQueryInterface=function(e){return this.each((function(){t.collapseInterface(this,e)}))},n(t,null,[{key:"Default",get:function(){return B}},{key:"DATA_KEY",get:function(){return"bs.collapse"}}]),t}(S);I.on(document,"click.bs.collapse.data-api",'[data-bs-toggle="collapse"]',(function(e){"A"===e.target.tagName&&e.preventDefault();var t=q(this),n=l(this);M(n).forEach((function(e){var n,r=b(e,"bs.collapse");r?(null===r._parent&&"string"==typeof t.parent&&(r._config.parent=t.parent,r._parent=r._getParent()),n="toggle"):n=t,U.collapseInterface(e,n)}))})),h((function(){var e=p();if(e){var t=e.fn[R];e.fn[R]=U.jQueryInterface,e.fn[R].Constructor=U,e.fn[R].noConflict=function(){return e.fn[R]=t,U.jQueryInterface}}}));new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]);var z=function(e){function t(){return e.apply(this,arguments)||this}i(t,e);var r=t.prototype;return r.show=function(){var e=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&this._element.classList.contains("active")||this._element.classList.contains("disabled"))){var t,n=c(this._element),r=this._element.closest(".nav, .list-group");if(r){var i="UL"===r.nodeName||"OL"===r.nodeName?":scope > li > .active":".active";t=(t=M(i,r))[t.length-1]}var o=null;if(t&&(o=I.trigger(t,"hide.bs.tab",{relatedTarget:this._element})),!(I.trigger(this._element,"show.bs.tab",{relatedTarget:t}).defaultPrevented||null!==o&&o.defaultPrevented)){this._activate(this._element,r);var a=function(){I.trigger(t,"hidden.bs.tab",{relatedTarget:e._element}),I.trigger(e._element,"shown.bs.tab",{relatedTarget:t})};n?this._activate(n,n.parentNode,a):a()}}},r._activate=function(e,t,n){var r=this,i=(!t||"UL"!==t.nodeName&&"OL"!==t.nodeName?H(t,".active"):M(":scope > li > .active",t))[0],o=n&&i&&i.classList.contains("fade"),a=function(){return r._transitionComplete(e,i,n)};if(i&&o){var s=u(i);i.classList.remove("show"),I.one(i,"transitionend",a),d(i,s)}else a()},r._transitionComplete=function(e,t,n){if(t){t.classList.remove("active");var r=Y(":scope > .dropdown-menu .active",t.parentNode);r&&r.classList.remove("active"),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!1)}e.classList.add("active"),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!0),g(e),e.classList.contains("fade")&&e.classList.add("show"),e.parentNode&&e.parentNode.classList.contains("dropdown-menu")&&(e.closest(".dropdown")&&M(".dropdown-toggle").forEach((function(e){return e.classList.add("active")})),e.setAttribute("aria-expanded",!0)),n&&n()},t.jQueryInterface=function(e){return this.each((function(){var n=b(this,"bs.tab")||new t(this);if("string"==typeof e){if(void 0===n[e])throw new TypeError('No method named "'+e+'"');n[e]()}}))},n(t,null,[{key:"DATA_KEY",get:function(){return"bs.tab"}}]),t}(S);return I.on(document,"click.bs.tab.data-api",'[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',(function(e){e.preventDefault(),(b(this,"bs.tab")||new z(this)).show()})),h((function(){var e=p();if(e){var t=e.fn.tab;e.fn.tab=z.jQueryInterface,e.fn.tab.Constructor=z,e.fn.tab.noConflict=function(){return e.fn.tab=t,z.jQueryInterface}}})),h((function(){p()})),{Alert:K,Button:Q,Collapse:U,Tab:z}}));