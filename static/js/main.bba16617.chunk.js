(this["webpackJsonpts-app"]=this["webpackJsonpts-app"]||[]).push([[0],{284:function(e,t,n){},290:function(e,t){},291:function(e,t){},299:function(e,t){},310:function(e,t,n){"use strict";n.r(t);var r=n(7),a=n.n(r),c=n(117),s=n.n(c),i=(n(284),n(6)),o=n(104),u=n(40),d=n(8),l=n.n(d),j=n(12),b=n(332),g=n(330),h=n(124),f=n.n(h),O=n(105),p=n.n(O),m=n(272),v=n.n(m),x=n(331),w=n(122),C=n.n(w),S=(n(308),n(136)),y=n(328),k=n(329),E=n(271),z=n.n(E),M=n(19),I=function(e){var t=e.children,n=e.title;return console.log(n),Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)("div",{children:t}),Object(M.jsxs)(y.a,{showLabels:!0,value:n,children:[Object(M.jsx)(k.a,{component:o.b,to:"/tfjs/segmentation",value:"segmentation",label:"photo",icon:Object(M.jsx)(p.a,{})}),Object(M.jsx)(k.a,{component:o.b,to:"/tfjs/settings",value:"settings",label:"settings",icon:Object(M.jsx)(z.a,{})})]})]})},B=function(e){e.isCameraEnable,e.setCameraEnable;var t=e.isCaptured,n=e.setCaptured,r=(e.shutter,e.setShutter),a=(e.isDetected,e.setDetected),c=e.facingMode,s=e.setFacingMode,i=e.isBackgroundEnable,o=e.setBackgroundEnable,u=e.processing;return Object(M.jsxs)("div",{style:{display:"flex",justifyContent:"space-around",alignItems:"center"},children:[Object(M.jsxs)(g.a,{disabled:u,children:[t||Object(M.jsx)(p.a,{color:u?"disabled":"primary",onClick:function(){return r(!0)}}),t&&Object(M.jsx)(p.a,{color:u?"disabled":"primary",onClick:function(){n(!1),a(!1)}})]}),Object(M.jsxs)(g.a,{disabled:t||u,children:[t&&Object(M.jsx)(f.a,{color:"disabled"}),t||Object(M.jsxs)(M.Fragment,{children:["user"===c&&Object(M.jsx)(f.a,{color:u?"disabled":"primary",onClick:function(){return s("environment")}}),"environment"===c&&Object(M.jsx)(f.a,{color:u?"disabled":"primary",onClick:function(){return s("user")}})]})]}),Object(M.jsx)(b.a,{defaultChecked:!0,color:"primary",disabled:!t,onChange:function(){return o(!i)}}),Object(M.jsx)(g.a,{disabled:!0,children:Object(M.jsx)(v.a,{color:"disabled"})})]})},F=function(e){var t=e.webcamRef,n=e.facingMode,a=e.width,c=e.height,s=e.isCaptured,o=e.setCaptured,u=e.isBackgroundEnable,d=e.shutter,b=e.setShutter,g=e.isDetected,h=e.setDetected,f=e.processing,O=e.setProcessing,p=(e.capturedTime,e.setCapturedTime),m=(e.peopleCount,e.setPeopleCount,e.background),v=e.cameraSize,w=e.setCameraSize,y=Object(r.useRef)(!0),k=Object(r.useRef)(!0),E=Object(r.useRef)(!0),z=Object(r.useState)(null),I=Object(i.a)(z,2),B=I[0],F=I[1],R=Object(r.useState)(null),D=Object(i.a)(R,2),H=D[0],T=D[1],W=Object(r.useState)(new Image),L=Object(i.a)(W,2),P=L[0],A=L[1],J=Object(r.useRef)(null),N=function(){var e=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("start getting camera size."),setTimeout((function(){if(t.current){var e=t.current;if(console.log("webcam ready."),console.log(e.video.readyState),4===e.video.readyState){var n,r=null===(n=t.current)||void 0===n?void 0:n.getScreenshot(),a=new Image;a.src=r,a.onload=function(){console.log("natural width: "+a.naturalWidth),console.log("natural height: "+a.naturalHeight),w([a.naturalWidth,a.naturalHeight]),console.log("cameraSize: "+v),console.log("end getting camera size.")}}}}),2e3);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("start screenshot."),setTimeout((function(){if(t.current){var e=t.current;if(console.log("webcam ready."),4===e.video.readyState){var n,r=null===(n=t.current)||void 0===n?void 0:n.getScreenshot(),a=new Image;a.src=r;var c=new Date;p(c.getFullYear()+"/"+(c.getMonth()+1)+"/"+c.getDate()+" "+c.getHours()+":"+c.getMinutes()+":"+c.getSeconds()),a.onload=function(){console.log("end screenshot."),A(a),console.log("screenshot width: "+a.naturalWidth),console.log("screenshot height: "+a.naturalHeight),b(!1),o(!0)}}}}),2e3);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(T(null),!s){e.next=12;break}return console.log("detect start."),O(!0),"full",e.next=7,B.segmentMultiPerson(P,{internalResolution:"full"});case 7:t=e.sent,console.log("detect end."),t.length?(console.log(t),T(t)):console.log("no detection."),O(!1),h(!0);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=function(){var e=Object(j.a)(l.a.mark((function e(){var t,n,r,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s&&J.current&&(console.log("canvas ready."),console.log(J.current.width),console.log(P.naturalWidth),J.current.width=P.naturalWidth,J.current.height=P.naturalHeight,.7,!1,0,t=J.current,H?(n={r:255,g:0,b:0,a:255},r={r:0,g:0,b:0,a:0},a=S.c(H,n,r),u?S.a(t,P,a,.7,0,false):S.a(t,m,a,.7,0,false)):(c=J.current.getContext("2d"))&&(u?c.drawImage(P,0,0):c.drawImage(m,0,0)),console.log("drawn."));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("start model loading."),O(!0),"MobileNetV1",16,2,e.next=7,S.b({architecture:"MobileNetV1",outputStride:16,quantBytes:2});case 7:t=e.sent,F(t),O(!1),console.log("model loaded.");case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){f||0===Object.keys(v).length&&N()}),[f]),Object(r.useEffect)((function(){G()}),[]),Object(r.useEffect)((function(){y.current?y.current=!1:V()}),[d]),Object(r.useEffect)((function(){k.current?k.current=!1:q()}),[s]),Object(r.useEffect)((function(){E.current?E.current=!1:Y()}),[g,u]),console.log("shutter",d,"processing",f,"isCaptured",s,"condition",s&&!f),Object(M.jsxs)("div",{style:{width:a,height:.8*c,display:"flex",justifyContent:"center",alignItems:"center"},children:[!d&&!s&&!f&&0===Object.keys(v).length&&Object(M.jsx)(C.a,{audio:!1,ref:t,videoConstraints:{facingMode:n},style:{margin:"auto",textAlign:"center",zIndex:9,visibility:"hidden"}}),!d&&!s&&!f&&2===Object.keys(v).length&&Object(M.jsx)(C.a,{audio:!1,ref:t,videoConstraints:{facingMode:n},style:{margin:"auto",textAlign:"center",zIndex:9,width:"100%",height:"100%"}}),d&&!s&&!f&&2===Object.keys(v).length&&Object(M.jsx)(C.a,{audio:!1,ref:t,videoConstraints:{facingMode:n},style:{margin:"auto",textAlign:"center",zIndex:9,width:v[0],height:v[1],visibility:"hidden"}}),f&&Object(M.jsx)(x.a,{}),s&&!f&&Object(M.jsx)(M.Fragment,{children:Object(M.jsx)("canvas",{ref:J,style:{margin:"auto",width:"100%",height:"100%",zIndex:30}})})]})},R=function(e){var t=e.background,n=e.cameraSize,a=e.setCameraSize,c=Object(r.useState)(!0),s=Object(i.a)(c,2),o=s[0],u=s[1],d=Object(r.useState)(!1),l=Object(i.a)(d,2),j=l[0],b=l[1],g=Object(r.useState)(!1),h=Object(i.a)(g,2),f=h[0],O=h[1],p=Object(r.useState)(!1),m=Object(i.a)(p,2),v=m[0],x=m[1],w=Object(r.useState)(!0),C=Object(i.a)(w,2),S=C[0],y=C[1],k=Object(r.useState)("user"),E=Object(i.a)(k,2),z=E[0],R=E[1],D=Object(r.useState)(!1),H=Object(i.a)(D,2),T=H[0],W=H[1],L=Object(r.useState)(""),P=Object(i.a)(L,2),A=P[0],J=P[1],N=Object(r.useState)(0),V=Object(i.a)(N,2),q=V[0],Y=V[1],G=function(){var e=function(){var e=window;return{width:e.innerWidth,height:e.innerHeight}},t=Object(r.useState)(e()),n=Object(i.a)(t,2),a=n[0],c=n[1];return Object(r.useEffect)((function(){var t=function(){c(e())};return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]),a}(),K=G.width,Q=G.height,U=Object(r.useRef)(null);return Object(M.jsxs)(I,{title:"segmentation",children:[Object(M.jsx)(B,{isCameraEnable:o,setCameraEnable:u,isCaptured:j,setCaptured:b,shutter:f,setShutter:O,isDetected:v,setDetected:x,facingMode:z,setFacingMode:R,isBackgroundEnable:S,setBackgroundEnable:y,processing:T}),Object(M.jsx)(F,{webcamRef:U,facingMode:z,width:K,height:Q,isCaptured:j,setCaptured:b,isBackgroundEnable:S,shutter:f,setShutter:O,isDetected:v,setDetected:x,processing:T,setProcessing:W,capturedTime:A,setCapturedTime:J,peopleCount:q,setPeopleCount:Y,background:t,cameraSize:n,setCameraSize:a})]})},D=function(e){var t=e.isCaptured,n=e.setCaptured,r=e.facingMode,a=e.setFacingMode,c=(e.shutter,e.setShutter);return Object(M.jsxs)("div",{style:{display:"flex",justifyContent:"space-around",alignItems:"center"},children:[Object(M.jsx)(g.a,{children:Object(M.jsx)(p.a,{color:"primary",onClick:function(){t?n(!1):c(!0)}})}),Object(M.jsx)(g.a,{disabled:t,children:Object(M.jsx)(f.a,{color:t?"disabled":"primary",onClick:function(){"user"===r?a("environment"):"environment"===r&&a("user")}})})]})},H=function(e){var t=e.webcamRef,n=e.isCaptured,a=e.setCaptured,c=e.facingMode,s=e.shutter,i=e.setShutter,o=e.background,u=e.setBackground,d=e.width,b=e.height,g=Object(r.useRef)(null),h=function(){var e=Object(j.a)(l.a.mark((function e(){var n,r,c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.current&&(n=t.current,console.log("webcam ready."),4===n.video.readyState&&(c=null===(r=t.current)||void 0===r?void 0:r.getScreenshot(),(s=new Image).src=c,s.onload=function(){u(s),i(!1),a(!0)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n&&g.current&&(g.current.width=o.naturalWidth,g.current.height=o.naturalHeight,null===(t=g.current.getContext("2d"))||void 0===t||t.drawImage(o,0,0));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){h()}),[s]),Object(r.useEffect)((function(){f()}),[n]),Object(M.jsxs)("div",{style:{width:d,height:.8*b,display:"flex",justifyContent:"center",alignItems:"center"},children:[!n&&Object(M.jsx)(C.a,{audio:!1,ref:t,videoConstraints:{facingMode:c},style:{margin:"auto",textAlign:"center",zIndex:9,width:"100%",height:"100%"}}),n&&Object(M.jsx)(M.Fragment,{children:Object(M.jsx)("canvas",{ref:g,style:{margin:"auto",width:"100%",height:"100%",zIndex:30}})})]})},T=function(e){var t=e.background,n=e.setBackground,a=(e.cameraSize,function(){var e=function(){var e=window;return{width:e.innerWidth,height:e.innerHeight}},t=Object(r.useState)(e()),n=Object(i.a)(t,2),a=n[0],c=n[1];return Object(r.useEffect)((function(){var t=function(){c(e())};return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]),a}()),c=a.width,s=a.height,o=Object(r.useState)(!1),u=Object(i.a)(o,2),d=u[0],l=u[1],j=Object(r.useState)("user"),b=Object(i.a)(j,2),g=b[0],h=b[1],f=Object(r.useState)(!1),O=Object(i.a)(f,2),p=O[0],m=O[1],v=Object(r.useRef)(null);return Object(M.jsxs)(I,{title:"settings",children:[Object(M.jsx)(D,{isCaptured:d,setCaptured:l,facingMode:g,setFacingMode:h,shutter:p,setShutter:m}),Object(M.jsx)(H,{webcamRef:v,isCaptured:d,setCaptured:l,facingMode:g,shutter:p,setShutter:m,background:t,setBackground:n,width:c,height:s})]})},W=function(){var e=Object(r.useState)(new Image),t=Object(i.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)([]),s=Object(i.a)(c,2),d=s[0],l=s[1];return Object(M.jsx)(o.a,{children:Object(M.jsxs)(u.c,{children:[Object(M.jsx)(u.a,{path:"/tfjs/segmentation",children:Object(M.jsx)(R,{background:n,cameraSize:d,setCameraSize:l})}),Object(M.jsx)(u.a,{path:"/tfjs/settings",children:Object(M.jsx)(T,{background:n,setBackground:a,cameraSize:d})})]})})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,333)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};s.a.render(Object(M.jsx)(a.a.StrictMode,{children:Object(M.jsx)(o.a,{basename:"/tfjs",children:Object(M.jsx)(W,{})})}),document.getElementById("root")),L()}},[[310,1,2]]]);
//# sourceMappingURL=main.bba16617.chunk.js.map