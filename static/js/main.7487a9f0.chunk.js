(this["webpackJsonpts-app"]=this["webpackJsonpts-app"]||[]).push([[0],{271:function(e,t,n){},277:function(e,t){},278:function(e,t){},286:function(e,t){},307:function(e,t,n){"use strict";n.r(t);var c=n(9),r=n.n(c),a=n(109),s=n.n(a),o=(n(271),n(7)),i=n.n(o),u=n(12),d=n(6),l=n(327),b=n(326),j=n(169),f=n.n(j),g=n(176),h=n.n(g),O=n(262),p=n.n(O),v=n(325),x=n(236),m=n.n(x),w=(n(304),n(237)),C=n(32),S=function(e){e.isCameraEnable,e.setCameraEnable;var t=e.isCaptured,n=e.setCaptured,c=(e.shutter,e.setShutter),r=(e.isDetected,e.setDetected),a=e.facingMode,s=e.setFacingMode,o=e.isBackgroundEnable,i=e.setBackgroundEnable,u=e.processing;return Object(C.jsxs)("div",{style:{display:"flex",justifyContent:"space-around",alignItems:"center"},children:[Object(C.jsxs)(b.a,{disabled:u,children:[t||Object(C.jsx)(h.a,{color:u?"disabled":"primary",onClick:function(){return c(!0)}}),t&&Object(C.jsx)(h.a,{color:u?"disabled":"primary",onClick:function(){n(!1),r(!1)}})]}),Object(C.jsxs)(b.a,{disabled:t||u,children:[t&&Object(C.jsx)(f.a,{color:"disabled"}),t||Object(C.jsxs)(C.Fragment,{children:["user"===a&&Object(C.jsx)(f.a,{color:u?"disabled":"primary",onClick:function(){return s("environment")}}),"environment"===a&&Object(C.jsx)(f.a,{color:u?"disabled":"primary",onClick:function(){return s("user")}})]})]}),Object(C.jsx)(l.a,{defaultChecked:!0,color:"primary",disabled:!t,onChange:function(){return i(!o)}}),Object(C.jsx)(b.a,{disabled:!0,children:Object(C.jsx)(p.a,{color:"disabled"})})]})},y=function(e){var t=e.webcamRef,n=e.facingMode,r=e.width,a=e.height,s=e.isCaptured,o=e.setCaptured,l=e.isBackgroundEnable,b=e.shutter,j=e.setShutter,f=e.isDetected,g=e.setDetected,h=e.processing,O=e.setProcessing,p=e.capturedTime,x=e.setCapturedTime,S=(e.peopleCount,e.setPeopleCount,Object(c.useRef)(!0)),y=Object(c.useRef)(!0),k=Object(c.useRef)(!0),E=Object(c.useState)(null),D=Object(d.a)(E,2),M=D[0],F=D[1],I=Object(c.useState)(null),B=Object(d.a)(I,2),R=B[0],T=B[1],P=Object(c.useState)(new Image),z=Object(d.a)(P,2),L=z[0],H=z[1],J=Object(c.useRef)(null),W=function(){var e=Object(u.a)(i.a.mark((function e(){var n,c,r,a,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("start screenshot."),t.current&&(n=t.current,console.log("webcam ready."),4===n.video.readyState&&(r=null===(c=t.current)||void 0===c?void 0:c.getScreenshot(),(a=new Image).src=r,s=new Date,x(s.getFullYear()+"/"+(s.getMonth()+1)+"/"+s.getDate()+" "+s.getHours()+":"+s.getMinutes()+":"+s.getSeconds()),a.onload=function(){console.log("end screenshot."),H(a),j(!1),o(!0)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!s){e.next=10;break}return console.log("detect start."),O(!0),e.next=5,M.detect(L);case 5:t=e.sent,console.log("detect end."),t.length&&(console.log(R),T(t)),O(!1),g(!0);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=function(){var e=Object(u.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s&&J.current&&(console.log("canvas ready."),J.current.width=L.naturalWidth,J.current.height=L.naturalHeight,t=J.current.getContext("2d"),l&&(null===t||void 0===t||t.drawImage(L,0,0)),n=0,R.forEach((function(e){if("person"===e.class&&e.score>=.5){n++;var c=e.bbox;null===t||void 0===t||t.strokeRect(c[0],c[1],c[2],c[3])}})),new Date,null===t||void 0===t||t.fillText(p+" count: "+n,0,10),console.log("drawn."));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("start model loading."),O(!0),e.next=4,w.load();case 4:t=e.sent,F(t),O(!1),console.log("model loaded.");case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){q()}),[]),Object(c.useEffect)((function(){S.current?S.current=!1:W()}),[b]),Object(c.useEffect)((function(){y.current?y.current=!1:A()}),[s]),Object(c.useEffect)((function(){k.current?k.current=!1:Y()}),[f,l]),console.log("shutter",b,"processing",h,"isCaptured",s,"condition",s&&!h),Object(C.jsxs)("div",{style:{width:r,height:.9*a,display:"flex",justifyContent:"center",alignItems:"center"},children:[!s&&!h&&Object(C.jsx)(m.a,{audio:!1,ref:t,videoConstraints:{facingMode:n},style:{margin:"auto",textAlign:"center",zIndex:9,width:"100%",height:"100%"}}),h&&Object(C.jsx)(v.a,{}),s&&!h&&Object(C.jsx)(C.Fragment,{children:Object(C.jsx)("canvas",{ref:J,style:{margin:"auto",width:"100%",height:"100%",zIndex:30}})})]})},k=function(){var e=Object(c.useState)(!0),t=Object(d.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!1),s=Object(d.a)(a,2),o=s[0],i=s[1],u=Object(c.useState)(!1),l=Object(d.a)(u,2),b=l[0],j=l[1],f=Object(c.useState)(!1),g=Object(d.a)(f,2),h=g[0],O=g[1],p=Object(c.useState)(!0),v=Object(d.a)(p,2),x=v[0],m=v[1],w=Object(c.useState)("user"),k=Object(d.a)(w,2),E=k[0],D=k[1],M=Object(c.useState)(!1),F=Object(d.a)(M,2),I=F[0],B=F[1],R=Object(c.useState)(""),T=Object(d.a)(R,2),P=T[0],z=T[1],L=Object(c.useState)(0),H=Object(d.a)(L,2),J=H[0],W=H[1],A=function(){var e=function(){var e=window;return{width:e.innerWidth,height:e.innerHeight}},t=Object(c.useState)(e()),n=Object(d.a)(t,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){var t=function(){a(e())};return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]),r}(),Y=A.width,q=A.height,G=Object(c.useRef)(null);return Object(C.jsxs)("div",{children:[Object(C.jsx)(S,{isCameraEnable:n,setCameraEnable:r,isCaptured:o,setCaptured:i,shutter:b,setShutter:j,isDetected:h,setDetected:O,facingMode:E,setFacingMode:D,isBackgroundEnable:x,setBackgroundEnable:m,processing:I}),Object(C.jsx)(y,{webcamRef:G,facingMode:E,width:Y,height:q,isCaptured:o,setCaptured:i,isBackgroundEnable:x,shutter:b,setShutter:j,isDetected:h,setDetected:O,processing:I,setProcessing:B,capturedTime:P,setCapturedTime:z,peopleCount:J,setPeopleCount:W})]})},E=function(){return Object(C.jsx)("div",{children:Object(C.jsx)(k,{})})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,328)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(C.jsx)(r.a.StrictMode,{children:Object(C.jsx)(E,{})}),document.getElementById("root")),D()}},[[307,1,2]]]);
//# sourceMappingURL=main.7487a9f0.chunk.js.map