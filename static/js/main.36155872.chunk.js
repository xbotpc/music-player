(this["webpackJsonpmusic-player"]=this["webpackJsonpmusic-player"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports={container:"playlist_container__1p4ek",songName:"playlist_songName__oZiCb",buttonContainer:"playlist_buttonContainer__2_qku"}},,,,function(e,t,n){e.exports={playing:"audioControls_playing__3SN37",popUp:"audioControls_popUp__3ZsAY",controls:"audioControls_controls__3INyv"}},function(e,t,n){e.exports={container:"App_container__1G6IT",playerContainer:"App_playerContainer__34gTN"}},,,,,,function(e,t,n){},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r,l=n(0),i=n(4),a=n.n(i),c=(n(17),n(2));function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}function p(e,t){var n=e.title,i=e.titleId,a=u(e,["title","titleId"]);return l.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",enableBackground:"new 0 0 24 24",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",ref:t,"aria-labelledby":i},a),n?l.createElement("title",{id:i},n):null,r||(r=l.createElement("g",null,l.createElement("path",{d:"M0,0h24v24H0V0z",fill:"none"}),l.createElement("path",{d:"M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"}))))}var s,f,d=l.forwardRef(p),b=(n.p,n(5)),v=n(3),h="PLAY_PAUSE",y="ADD_SONG",O="REMOVE_SONG",j={playing:!1,currentAudio:{id:"",audio:"",name:""}},g={playlist:[]},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=void 0===n?"":n,l=t.payload;switch(r){case h:return Object(v.a)(Object(v.a)({},e),{},{currentAudio:l,playing:!e.playing||e.currentAudio.audio!==l.audio});default:return e}},x=n(12),w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=void 0===n?"":n,l=t.payload;switch(r){case y:return Object(v.a)(Object(v.a)({},e),{},{playlist:[].concat(Object(x.a)(e.playlist),Object(x.a)(l))});case O:var i=e.playlist.filter((function(e){return e.id!==l}));return Object(v.a)(Object(v.a)({},e),{},{playlist:i});default:return e}},E=Object(b.a)({playback:m,playlist:w}),P=Object(b.b)(E);function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function S(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}function z(e,t){var n=e.title,r=e.titleId,i=S(e,["title","titleId"]);return l.createElement("svg",I({xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",ref:t,"aria-labelledby":r},i),n?l.createElement("title",{id:r},n):null,s||(s=l.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),f||(f=l.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"})))}var C,k,M=l.forwardRef(z),_=(n.p,n(22),n(1)),H=function(e){var t=e.id,n=e.children,r=e.type,l=void 0===r?"hidden":r,a=e.styleClass,c=Object(_.jsx)(_.Fragment,{children:Object(_.jsx)("div",{className:a,children:n})});if(null===document.querySelector("body>div#".concat(t))){var o,u=document.createElement("div");u.setAttribute("id",t),null===(o=document.querySelector("body"))||void 0===o||o.appendChild(u)}else{var p;null===(p=document.querySelector("body>div#".concat(t)))||void 0===p||p.setAttribute("class",l)}return Object(i.createPortal)(c,document.getElementById(t))},N=function(){var e=Object(c.b)(),t=Object(c.c)((function(e){return e.playlist})).playlist,n=Object(l.useRef)(null);return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("button",{type:"button",onClick:function(){var e;null===n||void 0===n||null===(e=n.current)||void 0===e||e.click()},children:Object(_.jsx)(M,{})}),Object(_.jsx)(H,{id:"hiddenModal-1",children:Object(_.jsx)("input",{ref:n,type:"file",name:"audioSelector",onChange:function(n){var r,l=null===n||void 0===n||null===(r=n.target)||void 0===r?void 0:r.files;if(null!==l){var i=Array.from(l).map((function(e,t){return{id:"".concat(e.name,"-").concat(e.size,"-").concat(e.type),name:e.name,audio:URL.createObjectURL(e)}}));0!==t.length&&(i=i.filter((function(e){return void 0===t.find((function(t){return t.id===e.id}))}))),e({type:y,payload:i})}},multiple:!0,accept:"audio/*"})})]})};function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function R(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}function V(e,t){var n=e.title,r=e.titleId,i=R(e,["title","titleId"]);return l.createElement("svg",A({xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",ref:t,"aria-labelledby":r},i),n?l.createElement("title",{id:r},n):null,C||(C=l.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),k||(k=l.createElement("path",{d:"M12 3v9.28c-.47-.17-.97-.28-1.5-.28C8.01 12 6 14.01 6 16.5S8.01 21 10.5 21c2.31 0 4.2-1.75 4.45-4H15V6h4V3h-7z"})))}var B,L,F=l.forwardRef(V);n.p;function U(){return(U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function q(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}function T(e,t){var n=e.title,r=e.titleId,i=q(e,["title","titleId"]);return l.createElement("svg",U({xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",ref:t,"aria-labelledby":r},i),n?l.createElement("title",{id:r},n):null,B||(B=l.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),L||(L=l.createElement("path",{d:"M6 19h4V5H6v14zm8-14v14h4V5h-4z"})))}var D,G,Y=l.forwardRef(T);n.p;function J(){return(J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Z(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}function K(e,t){var n=e.title,r=e.titleId,i=Z(e,["title","titleId"]);return l.createElement("svg",J({xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",ref:t,"aria-labelledby":r},i),n?l.createElement("title",{id:r},n):null,D||(D=l.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),G||(G=l.createElement("path",{d:"M8 5v14l11-7z"})))}var Q,W,X=l.forwardRef(K);n.p;function $(){return($=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ee(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}function te(e,t){var n=e.title,r=e.titleId,i=ee(e,["title","titleId"]);return l.createElement("svg",$({xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",ref:t,"aria-labelledby":r},i),n?l.createElement("title",{id:r},n):null,Q||(Q=l.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),W||(W=l.createElement("path",{d:"M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"})))}var ne,re,le=l.forwardRef(te);n.p;function ie(){return(ie=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ae(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}function ce(e,t){var n=e.title,r=e.titleId,i=ae(e,["title","titleId"]);return l.createElement("svg",ie({xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",ref:t,"aria-labelledby":r},i),n?l.createElement("title",{id:r},n):null,ne||(ne=l.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),re||(re=l.createElement("path",{d:"M6 6h2v12H6zm3.5 6l8.5 6V6z"})))}var oe,ue,pe=l.forwardRef(ce),se=(n.p,n(24),function(e){var t=e.children,n=e.styleClass,r=void 0===n?"":n,l=e.type,i=e.onClick;return Object(_.jsx)("button",{type:"button",className:"".concat(l," ").concat(r),onClick:i,children:t})}),fe=n(10),de=n.n(fe),be=function(){var e=Object(c.c)((function(e){return e.playback})),t=e.currentAudio,n=e.playing,r=Object(c.b)();return Object(_.jsx)(_.Fragment,{children:""!==t.audio||n?Object(_.jsxs)("footer",{className:"".concat(""!==t.audio||n?de.a.playing:""),children:[Object(_.jsx)(F,{}),Object(_.jsx)("h2",{children:t.name}),Object(_.jsxs)("div",{className:de.a.controls,children:[Object(_.jsx)(se,{type:"invisible",onClick:function(){r({type:h,payload:t})},children:Object(_.jsx)(pe,{})}),Object(_.jsx)(se,{type:"invisible",onClick:function(){r({type:h,payload:t})},children:n?Object(_.jsx)(Y,{}):Object(_.jsx)(X,{})}),Object(_.jsx)(se,{type:"invisible",onClick:function(){r({type:h,payload:t})},children:Object(_.jsx)(le,{})})]})]}):null})},ve=function(){var e=Object(c.c)((function(e){return e.playback})),t=e.currentAudio,n=e.playing,r=Object(c.c)((function(e){return e.playlist})).playlist,i=Object(l.useRef)(null);return Object(l.useEffect)((function(){var e,t;n?null===(e=i.current)||void 0===e||e.play():null===(t=i.current)||void 0===t||t.pause()}),[t,n]),Object(l.useEffect)((function(){var e;0===r.filter((function(e){var t;return e.audio===(null===(t=i.current)||void 0===t?void 0:t.src)})).length&&(null===(e=i.current)||void 0===e||e.pause())}),[r]),Object(_.jsx)(H,{id:"hiddenModal",children:Object(_.jsx)("audio",{ref:i,src:t.audio,children:"Your browser does not support audio playback. Fix your shit."})})};function he(){return(he=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ye(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}function Oe(e,t){var n=e.title,r=e.titleId,i=ye(e,["title","titleId"]);return l.createElement("svg",he({xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",ref:t,"aria-labelledby":r},i),n?l.createElement("title",{id:r},n):null,oe||(oe=l.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),ue||(ue=l.createElement("path",{d:"M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"})))}var je,ge,me=l.forwardRef(Oe);n.p;function xe(){return(xe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function we(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}function Ee(e,t){var n=e.title,r=e.titleId,i=we(e,["title","titleId"]);return l.createElement("svg",xe({xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",ref:t,"aria-labelledby":r},i),n?l.createElement("title",{id:r},n):null,je||(je=l.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),ge||(ge=l.createElement("path",{d:"M9 16h2V8H9v8zm3-14C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-4h2V8h-2v8z"})))}var Pe,Ie,Se=l.forwardRef(Ee);n.p;function ze(){return(ze=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Ce(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}function ke(e,t){var n=e.title,r=e.titleId,i=Ce(e,["title","titleId"]);return l.createElement("svg",ze({xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",ref:t,"aria-labelledby":r},i),n?l.createElement("title",{id:r},n):null,Pe||(Pe=l.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"})),Ie||(Ie=l.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"})))}var Me=l.forwardRef(ke),_e=(n.p,n(6)),He=n.n(_e),Ne=function(){var e,t=Object(c.c)((function(e){return e.playlist})).playlist,n=Object(c.c)((function(e){return e.playback})),r=n.currentAudio,l=n.playing,i=Object(c.b)();return Object(_.jsx)(_.Fragment,{children:Object(_.jsx)("section",{children:(e=t,e.map((function(e,t,n){var a=e.name,c=e.id;return Object(_.jsxs)("div",{className:He.a.container,children:[Object(_.jsx)("div",{className:He.a.songName,children:a}),Object(_.jsxs)("div",{className:He.a.buttonContainer,children:[Object(_.jsx)(se,{type:"invisible",onClick:function(){return e=n[t],void i({type:h,payload:e});var e},children:r.id===c&&l?Object(_.jsx)(Se,{}):Object(_.jsx)(me,{})}),Object(_.jsx)(se,{type:"invisible",onClick:function(){return function(e){i({type:O,payload:e}),i({type:h,payload:{id:"",audio:"",name:""}})}(c)},children:Object(_.jsx)(Me,{})})]})]},c)})))})})},Ae=n(11),Re=n.n(Ae);var Ve=function(){return Object(_.jsx)(c.a,{store:P,children:Object(_.jsxs)("div",{className:Re.a.container,children:[Object(_.jsxs)("div",{className:Re.a.playerContainer,children:[Object(_.jsxs)("header",{children:[Object(_.jsx)(d,{}),"Music Player",Object(_.jsx)(N,{})]}),Object(_.jsx)(Ne,{}),Object(_.jsx)(be,{})]}),Object(_.jsx)(ve,{})]})})},Be=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,r=t.getFID,l=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),r(e),l(e),i(e),a(e)}))};a.a.render(Object(_.jsx)(l.StrictMode,{children:Object(_.jsx)(Ve,{})}),document.getElementById("root")),Be()}],[[25,1,2]]]);
//# sourceMappingURL=main.36155872.chunk.js.map