(this["webpackJsonpts-app"]=this["webpackJsonpts-app"]||[]).push([[0],{284:function(e,t,n){},290:function(e,t){},291:function(e,t){},299:function(e,t){},310:function(e,t,n){"use strict";n.r(t);var r=n(7),c=n.n(r),a=n(116),s=n.n(a),i=(n(284),n(6)),o=n(134),u=n(40),d=n(8),l=n.n(d),j=n(12),b=n(332),h=n(330),g=n(122),f=n.n(g),O=n(104),p=n.n(O),x=n(272),v=n.n(x),m=n(331),w=n(175),C=n.n(w),k=(n(308),n(135)),y=n(328),S=n(329),E=n(271),M=n.n(E),I=n(19),B=function(e){var t=e.children,n=e.title;return console.log(n),Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)("div",{children:t}),Object(I.jsxs)(y.a,{showLabels:!0,value:n,children:[Object(I.jsx)(S.a,{component:o.b,to:"/segmentation",value:"segmentation",label:"photo",icon:Object(I.jsx)(p.a,{})}),Object(I.jsx)(S.a,{component:o.b,to:"/settings",value:"settings",label:"settings",icon:Object(I.jsx)(M.a,{})})]})]})},F=function(e){e.isCameraEnable,e.setCameraEnable;var t=e.isCaptured,n=e.setCaptured,r=(e.shutter,e.setShutter),c=(e.isDetected,e.setDetected),a=e.facingMode,s=e.setFacingMode,i=e.isBackgroundEnable,o=e.setBackgroundEnable,u=e.processing;return Object(I.jsxs)("div",{style:{display:"flex",justifyContent:"space-around",alignItems:"center"},children:[Object(I.jsxs)(h.a,{disabled:u,children:[t||Object(I.jsx)(p.a,{color:u?"disabled":"primary",onClick:function(){return r(!0)}}),t&&Object(I.jsx)(p.a,{color:u?"disabled":"primary",onClick:function(){n(!1),c(!1)}})]}),Object(I.jsxs)(h.a,{disabled:t||u,children:[t&&Object(I.jsx)(f.a,{color:"disabled"}),t||Object(I.jsxs)(I.Fragment,{children:["user"===a&&Object(I.jsx)(f.a,{color:u?"disabled":"primary",onClick:function(){return s("environment")}}),"environment"===a&&Object(I.jsx)(f.a,{color:u?"disabled":"primary",onClick:function(){return s("user")}})]})]}),Object(I.jsx)(b.a,{defaultChecked:!0,color:"primary",disabled:!t,onChange:function(){return o(!i)}}),Object(I.jsx)(h.a,{disabled:!0,children:Object(I.jsx)(v.a,{color:"disabled"})})]})},D=function(e){var t=e.webcamRef,n=e.facingMode,c=e.width,a=e.height,s=e.isCaptured,o=e.setCaptured,u=e.isBackgroundEnable,d=e.shutter,b=e.setShutter,h=e.isDetected,g=e.setDetected,f=e.processing,O=e.setProcessing,p=(e.capturedTime,e.setCapturedTime),x=(e.peopleCount,e.setPeopleCount,e.background),v=Object(r.useRef)(!0),w=Object(r.useRef)(!0),y=Object(r.useRef)(!0),S=Object(r.useState)(null),E=Object(i.a)(S,2),M=E[0],B=E[1],F=Object(r.useState)(null),D=Object(i.a)(F,2),R=D[0],z=D[1],P=Object(r.useState)(new Image),L=Object(i.a)(P,2),T=L[0],H=L[1],W=Object(r.useRef)(null),A=function(){var e=Object(j.a)(l.a.mark((function e(){var n,r,c,a,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("start screenshot."),t.current&&(n=t.current,console.log("webcam ready."),4===n.video.readyState&&(c=null===(r=t.current)||void 0===r?void 0:r.getScreenshot(),(a=new Image).src=c,s=new Date,p(s.getFullYear()+"/"+(s.getMonth()+1)+"/"+s.getDate()+" "+s.getHours()+":"+s.getMinutes()+":"+s.getSeconds()),a.onload=function(){console.log("end screenshot."),H(a),b(!1),o(!0)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(z(null),!s){e.next=11;break}return console.log("detect start."),O(!0),e.next=6,M.segmentMultiPersonParts(T);case 6:t=e.sent,console.log("detect end."),t.length?(console.log(t),z(t)):console.log("no detection."),O(!1),g(!0);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(j.a)(l.a.mark((function e(){var t,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s&&W.current&&(console.log("canvas ready."),console.log(W.current.width),console.log(T.naturalWidth),W.current.width=T.naturalWidth,W.current.height=T.naturalHeight,.7,!1,0,t=W.current,R?(n=k.c(R),u?k.a(t,T,n,.7,0,false):k.a(t,x,n,.7,0,false)):(r=W.current.getContext("2d"))&&(u?r.drawImage(T,0,0):r.drawImage(x,0,0)),console.log("drawn."));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("start model loading."),O(!0),e.next=4,k.b({architecture:"MobileNetV1",outputStride:16,multiplier:.75,quantBytes:2});case 4:t=e.sent,B(t),O(!1),console.log("model loaded.");case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){N()}),[]),Object(r.useEffect)((function(){v.current?v.current=!1:A()}),[d]),Object(r.useEffect)((function(){w.current?w.current=!1:J()}),[s]),Object(r.useEffect)((function(){y.current?y.current=!1:q()}),[h,u]),console.log("shutter",d,"processing",f,"isCaptured",s,"condition",s&&!f),Object(I.jsxs)("div",{style:{width:c,height:.9*a,display:"flex",justifyContent:"center",alignItems:"center"},children:[!s&&!f&&Object(I.jsx)(C.a,{audio:!1,ref:t,videoConstraints:{facingMode:n},style:{margin:"auto",textAlign:"center",zIndex:9,width:"100%",height:"100%"}}),f&&Object(I.jsx)(m.a,{}),s&&!f&&Object(I.jsx)(I.Fragment,{children:Object(I.jsx)("canvas",{ref:W,style:{margin:"auto",width:"100%",height:"100%",zIndex:30}})})]})},R=function(e){var t=e.background,n=Object(r.useState)(!0),c=Object(i.a)(n,2),a=c[0],s=c[1],o=Object(r.useState)(!1),u=Object(i.a)(o,2),d=u[0],l=u[1],j=Object(r.useState)(!1),b=Object(i.a)(j,2),h=b[0],g=b[1],f=Object(r.useState)(!1),O=Object(i.a)(f,2),p=O[0],x=O[1],v=Object(r.useState)(!0),m=Object(i.a)(v,2),w=m[0],C=m[1],k=Object(r.useState)("user"),y=Object(i.a)(k,2),S=y[0],E=y[1],M=Object(r.useState)(!1),R=Object(i.a)(M,2),z=R[0],P=R[1],L=Object(r.useState)(""),T=Object(i.a)(L,2),H=T[0],W=T[1],A=Object(r.useState)(0),J=Object(i.a)(A,2),q=J[0],N=J[1],V=function(){var e=function(){var e=window;return{width:e.innerWidth,height:e.innerHeight}},t=Object(r.useState)(e()),n=Object(i.a)(t,2),c=n[0],a=n[1];return Object(r.useEffect)((function(){var t=function(){a(e())};return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]),c}(),Y=V.width,G=V.height,K=Object(r.useRef)(null);return Object(I.jsxs)(B,{title:"segmentation",children:[Object(I.jsx)(F,{isCameraEnable:a,setCameraEnable:s,isCaptured:d,setCaptured:l,shutter:h,setShutter:g,isDetected:p,setDetected:x,facingMode:S,setFacingMode:E,isBackgroundEnable:w,setBackgroundEnable:C,processing:z}),Object(I.jsx)(D,{webcamRef:K,facingMode:S,width:Y,height:G,isCaptured:d,setCaptured:l,isBackgroundEnable:w,shutter:h,setShutter:g,isDetected:p,setDetected:x,processing:z,setProcessing:P,capturedTime:H,setCapturedTime:W,peopleCount:q,setPeopleCount:N,background:t})]})},z=function(e){var t=e.isCaptured,n=e.setCaptured,r=e.facingMode,c=e.setFacingMode,a=(e.shutter,e.setShutter);return Object(I.jsxs)("div",{style:{display:"flex",justifyContent:"space-around",alignItems:"center"},children:[Object(I.jsx)(h.a,{children:Object(I.jsx)(p.a,{color:"primary",onClick:function(){t?n(!1):a(!0)}})}),Object(I.jsx)(h.a,{disabled:t,children:Object(I.jsx)(f.a,{color:t?"disabled":"primary",onClick:function(){"user"===r?c("environment"):"environment"===r&&c("user")}})})]})},P=function(e){var t=e.webcamRef,n=e.isCaptured,c=e.setCaptured,a=e.facingMode,s=e.shutter,i=e.setShutter,o=e.background,u=e.setBackground,d=e.width,b=e.height,h=Object(r.useRef)(null),g=function(){var e=Object(j.a)(l.a.mark((function e(){var n,r,a,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.current&&(n=t.current,console.log("webcam ready."),4===n.video.readyState&&(a=null===(r=t.current)||void 0===r?void 0:r.getScreenshot(),(s=new Image).src=a,s.onload=function(){u(s),i(!1),c(!0)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n&&h.current&&(h.current.width=o.naturalWidth,h.current.height=o.naturalHeight,null===(t=h.current.getContext("2d"))||void 0===t||t.drawImage(o,0,0));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){g()}),[s]),Object(r.useEffect)((function(){f()}),[n]),Object(I.jsxs)("div",{style:{width:d,height:.9*b},children:[!n&&Object(I.jsx)(C.a,{audio:!1,ref:t,videoConstraints:{facingMode:a},style:{margin:"auto",textAlign:"center",zIndex:9,width:"100%",height:"100%"}}),n&&Object(I.jsx)(I.Fragment,{children:Object(I.jsx)("canvas",{ref:h,style:{margin:"auto",width:"100%",height:"100%",zIndex:30}})})]})},L=function(e){var t=e.background,n=e.setBackground,c=function(){var e=function(){var e=window;return{width:e.innerWidth,height:e.innerHeight}},t=Object(r.useState)(e()),n=Object(i.a)(t,2),c=n[0],a=n[1];return Object(r.useEffect)((function(){var t=function(){a(e())};return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]),c}(),a=c.width,s=c.height,o=Object(r.useState)(!1),u=Object(i.a)(o,2),d=u[0],l=u[1],j=Object(r.useState)("user"),b=Object(i.a)(j,2),h=b[0],g=b[1],f=Object(r.useState)(!1),O=Object(i.a)(f,2),p=O[0],x=O[1],v=Object(r.useRef)(null);return Object(I.jsxs)(B,{title:"settings",children:[Object(I.jsx)(z,{isCaptured:d,setCaptured:l,facingMode:h,setFacingMode:g,shutter:p,setShutter:x}),Object(I.jsx)(P,{webcamRef:v,isCaptured:d,setCaptured:l,facingMode:h,shutter:p,setShutter:x,background:t,setBackground:n,width:a,height:s})]})},T=function(){var e=Object(r.useState)(new Image),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(I.jsx)(o.a,{children:Object(I.jsxs)(u.c,{children:[Object(I.jsx)(u.a,{path:"/segmentation",children:Object(I.jsx)(R,{background:n})}),Object(I.jsx)(u.a,{path:"/settings",children:Object(I.jsx)(L,{background:n,setBackground:c})})]})})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,333)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(I.jsx)(c.a.StrictMode,{children:Object(I.jsx)(T,{})}),document.getElementById("root")),H()}},[[310,1,2]]]);
//# sourceMappingURL=main.b21523ea.chunk.js.map