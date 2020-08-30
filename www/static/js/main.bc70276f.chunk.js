(this["webpackJsonpcom.appsflyer.app.letscook"]=this["webpackJsonpcom.appsflyer.app.letscook"]||[]).push([[0],{107:function(e,t,a){e.exports=a(136)},112:function(e,t,a){},136:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),o=a.n(l),c=(a(112),a(14)),i=a(180),s=a(198),u=a(199),m=a(40),d=a(90),p=a.n(d),g=a(92),f=a(208),h=a(203),v=a(182),E=Object(i.a)((function(e){return{root:{display:"flex",justifyContent:"center",flexWrap:"wrap",listStyle:"none",padding:e.spacing(.5),margin:0},chip:{margin:e.spacing(.5)}}})),b=function(e){var t=E();return r.a.createElement("div",null,0!==e.ingredients.length?r.a.createElement(v.a,{variant:"middle"}):null,r.a.createElement(h.a,{component:"ul",className:t.root},e.ingredients.map((function(a){return r.a.createElement("li",{key:a.key},r.a.createElement(f.a,{label:a,onDelete:function(){return e.deleteFunction(a)},className:t.chip}))}))),0!==e.ingredients.length?r.a.createElement(v.a,{variant:"middle"}):null)},y=a(85),w=a.n(y),O=a(87),k=a.n(O),j=a(43),C=a.n(j),S=a(86),x=a.n(S),I=a(184),F=a(185),N=a(187),T=a(189),_=a(188),J=a(209),B=a(186),L=a(190),R=Object(i.a)((function(e){return{icon:{textAlign:"center"},large:{width:e.spacing(7),height:e.spacing(7),marginRight:20}}})),A=function(e){var t=e.title,a=e.thumbnail,l=e.ingredients,o=e.href,i=e.userFeedback,s=R(),u=Object(n.useState)(!1),m=Object(c.a)(u,2),d=m[0],p=m[1],g=window.localStorage;Object(n.useEffect)((function(){var e=g.getItem(t);p(null!==e)}),[]);var f=function(e){console.log(e)},h=function(e){console.log(e)},v=function(){var e=JSON.parse(g.getItem("savedRecipes")),a=e.indexOf(t);e.splice(a,1),g.setItem("savedRecipes",JSON.stringify(e))},E=function(e,t){var a=JSON.parse(g.getItem(e));null===a&&(a=[]),a.push(t),g.setItem(e,JSON.stringify(a))};return r.a.createElement("div",null,r.a.createElement(I.a,{dense:!0},r.a.createElement(F.a,null,r.a.createElement(B.a,{item:!0,xs:3},r.a.createElement(N.a,null,r.a.createElement(J.a,{className:s.large,alt:t,src:a}))),r.a.createElement(B.a,{item:!0,xs:7},r.a.createElement(_.a,{primary:t,secondary:l,onClick:function(){return e=o,void window.open(e,"_blank");var e}})),r.a.createElement(B.a,{item:!0,xs:3},r.a.createElement(T.a,null,r.a.createElement(L.a,{edge:"end","aria-label":"delete"},r.a.createElement(x.a,{onClick:function(){return function(e){i("Added to shopping cart!"),e.split(", ").map((function(e){E("shoppingList",e),g.setItem(e,"0")}));var t={af_content_id:l};window.plugins.appsFlyer.trackEvent("af_added_to_cart",t,f,h)}(l)}})),r.a.createElement(L.a,{edge:"end","aria-label":"delete"},d?r.a.createElement(C.a,{fontSize:"large",style:{color:"#FF9134"},onClick:function(){return v(),g.removeItem(t),p(!1),void i("".concat(t," removed to favorites!"))}}):r.a.createElement(k.a,{className:s.icon,fontSize:"large",style:{color:"#C2C2C2"},onClick:function(){return function(){g.setItem(t,JSON.stringify([a,l,o])),p(!0),E("savedRecipes",t),i("".concat(t," added to favorites!"));var e={af_content_id:t,af_currency:"USD",af_revenue:"2"};window.plugins.appsFlyer.trackEvent("af_added_to_favorites",e,f,h)}()}})))))))},z=a(206),D=a(88),W=a.n(D),G=function(e){var t=e.message,a=e.open,n=e.close;return r.a.createElement(z.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:a,autoHideDuration:3e3,onClose:n,message:t,action:r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,{size:"small","aria-label":"close",color:"inherit",onClick:n},r.a.createElement(W.a,{fontSize:"small"})))})},P=a(192),K=Object(i.a)((function(e){return{backgroundTitle:{color:"#C5C5C8",margin:20},root:{flexGrow:1,display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper,marginBottom:10,marginTop:10,height:200},media:{height:130},icon:{textAlign:"center",color:e.palette.text.secondary}}})),U=function(e){var t=e.ingredients,a=K(),l=Object(n.useState)([]),o=Object(c.a)(l,2),i=o[0],s=o[1],u=Object(n.useState)(!1),d=Object(c.a)(u,2),p=d[0],g=d[1],f=Object(n.useState)(""),v=Object(c.a)(f,2),E=v[0],b=v[1];Object(n.useEffect)((function(){0!==t.length?y():s([])}),[t]);var y=function(){w.a.get("https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?i="+t).then((function(e){s(e.data.results)})).catch((function(e){console.log(e)}))},O=function(e){b(e),g(!0)};return r.a.createElement("div",null,0===t.length?r.a.createElement(h.a,{display:"flex",height:"50vh",alignItems:"center"},r.a.createElement(m.a,{variant:"h4",gutterBottom:!0,className:a.backgroundTitle,align:"center"},"Type ingredients to search for a recipe...")):0!==i.length?r.a.createElement("div",{style:{height:"100%",marginBottom:50}},i.map((function(e){return r.a.createElement(A,{title:e.title,thumbnail:e.thumbnail,ingredients:e.ingredients,href:e.href,userFeedback:O})}))):r.a.createElement("div",{style:{position:"relative"}},r.a.createElement(P.a,{style:{marginLeft:"45%",marginTop:"40%"}})),r.a.createElement(G,{open:p,message:E,close:function(){g(!1)}}))},H=a(202),M=a(193),Q=a(62),$=a.n(Q),q=Object(i.a)((function(e){return{searchBar:{width:"100%"},backgroundTitle:{color:"#C5C5C8",margin:20}}})),V=function(){var e=r.a.useState([]),t=Object(c.a)(e,2),a=t[0],n=t[1],l=r.a.useState(""),o=Object(c.a)(l,2),i=o[0],s=o[1],u=q();return r.a.createElement("div",null,r.a.createElement(h.a,{display:"flex",alignItems:"center",margin:1},r.a.createElement(H.a,{id:"outlined-search",value:i,className:u.searchBar,onChange:function(e){s(e.target.value)},InputProps:{endAdornment:r.a.createElement(M.a,null,r.a.createElement(L.a,{onClick:function(){0!==i.length&&(n((function(e){return[].concat(Object(g.a)(a),[i])})),s(""))}},r.a.createElement($.a,null)))},label:"Type an Ingredient",type:"search",variant:"outlined"})),r.a.createElement(b,{ingredients:a,deleteFunction:function(e){var t=a.filter((function(t){return t!==e}));n(t)}}),r.a.createElement(U,{ingredients:a}))},X=a(194),Y=a(205),Z=a(89),ee=a.n(Z),te=function(e){var t=e.title,a=e.remove,l=Object(n.useState)(0),o=Object(c.a)(l,2),i=o[0],s=o[1],u="checkbox-list-label-".concat(t),m=window.localStorage;Object(n.useEffect)((function(){d()}),[]);var d=function(){var e=m.getItem(t);s("1"===e?1:0)};return r.a.createElement("div",null,r.a.createElement(F.a,{key:t,role:void 0,dense:!0,button:!0,onClick:function(){0===i?(s(1),m.setItem(t,"1")):(s(0),m.setItem(t,"0"))}},r.a.createElement(X.a,null,r.a.createElement(Y.a,{edge:"start",checked:1===i,tabIndex:-1,color:"primary",disableRipple:!0,inputProps:{"aria-label":u}})),r.a.createElement(_.a,{id:u,primary:t}),r.a.createElement(T.a,null,r.a.createElement(L.a,{edge:"end","aria-label":"comments"},r.a.createElement(ee.a,{onClick:function(){return a(t)}})))))},ae=Object(i.a)((function(e){return{backgroundTitle:{color:"#C5C5C8",margin:20},root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper}}})),ne=function(){var e=ae(),t=Object(n.useState)([]),a=Object(c.a)(t,2),l=a[0],o=a[1],i=window.localStorage;Object(n.useEffect)((function(){s()}),[]);var s=function(){var e=i.getItem("shoppingList");null===e?o(""):(e=JSON.parse(e),o(e))},u=function(e){var t=l.filter((function(t){return t!==e}));o(t),i.setItem("shoppingList",JSON.stringify(t))};return r.a.createElement("div",null,0===l.length?r.a.createElement(h.a,{display:"flex",height:"70vh",alignItems:"center"},r.a.createElement(m.a,{variant:"h4",gutterBottom:!0,className:e.backgroundTitle,align:"center"},"There are no items in the shopping list")):r.a.createElement(I.a,{className:e.root},l.map((function(e){return r.a.createElement(te,{title:e,remove:u})}))))},re=Object(i.a)((function(e){return{large:{width:e.spacing(7),height:e.spacing(7),marginRight:20}}})),le=function(e){var t=e.title,a=e.removeFromFavorites,l=re(),o=Object(n.useState)(""),i=Object(c.a)(o,2),s=i[0],u=i[1],m=window.localStorage;Object(n.useEffect)((function(){var e=m.getItem(t);null!==e&&(e=JSON.parse(e),u(e))}),[t]);return r.a.createElement("div",null,r.a.createElement(I.a,{dense:!0},r.a.createElement(F.a,null,r.a.createElement(N.a,null,r.a.createElement(J.a,{className:l.large,alt:t,src:s[0]})),r.a.createElement(_.a,{primary:t,secondary:s[1],onClick:function(){return e=s[2],void window.open(e,"_blank");var e}}),r.a.createElement(T.a,null,r.a.createElement(L.a,{edge:"end","aria-label":"delete"},r.a.createElement(C.a,{fontSize:"large",style:{color:"#FF9134"},onClick:function(){return a(t)}}))))))},oe=Object(i.a)((function(e){return{backgroundTitle:{color:"#C5C5C8",margin:20},root:{flexGrow:1,display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper,marginBottom:10,marginTop:10,height:200},media:{height:130},icon:{textAlign:"center",color:e.palette.text.secondary}}})),ce=function(){var e=oe(),t=Object(n.useState)(""),a=Object(c.a)(t,2),l=a[0],o=a[1],i=window.localStorage;Object(n.useEffect)((function(){s()}),[]);var s=function(){var e=i.getItem("savedRecipes");null===e?o(""):(e=JSON.parse(e),o(e))},u=function(e){var t=l.filter((function(t){return t!==e}));o(t),i.setItem("savedRecipes",JSON.stringify(t))};return r.a.createElement("div",null,0===l.length?r.a.createElement(h.a,{display:"flex",height:"70vh",alignItems:"center"},r.a.createElement(m.a,{variant:"h4",gutterBottom:!0,className:e.backgroundTitle,align:"center"},"There are no favorites recipes")):r.a.createElement("div",{style:{height:"100%",marginBottom:50}},l.map((function(e){return r.a.createElement(le,{title:e,removeFromFavorites:u})}))))},ie=a(195),se=a(207),ue=a(196),me=a(197),de=function(e){var t=e.open,a=e.close;return r.a.createElement(se.a,{"aria-labelledby":"simple-dialog-title",open:t,onClose:function(){a()}},r.a.createElement(ie.a,{id:"simple-dialog-title"},r.a.createElement("img",{style:{height:50,margin:10},src:"https://1z1euk35x7oy36s8we4dr6lo-wpengine.netdna-ssl.com/wp-content/uploads/2015/04/AppsFlyer-logo.png",alt:"{tile.title}"})),r.a.createElement(ue.a,null,r.a.createElement(me.a,null,"This app was built with React & Cordova by the Appsflyer's SDK team in order to demonstrate a proper implementation of the Appsflyer's Cordova Plugin."),r.a.createElement(me.a,null,"Enjoy!")))},pe=a(52),ge=a(12),fe=a(200),he=a(201),ve=a(91),Ee=a.n(ve),be=Object(i.a)((function(e){return{root:{width:500},title:{flexGrow:1},bottomNav:{width:"100%",position:"fixed",bottom:0}}}));var ye=function(){var e=be(),t=r.a.useState("search"),a=Object(c.a)(t,2),n=a[0],l=a[1],o=r.a.useState(!1),i=Object(c.a)(o,2),d=i[0],g=i[1];return r.a.createElement("div",null,r.a.createElement(s.a,{position:"static",color:"#FFFFFF",elevation:0,alignItems:"center"},r.a.createElement(u.a,null,r.a.createElement(m.a,{variant:"h6",className:e.title,color:"#000000",align:"center"},"Let's cook something!"),r.a.createElement(p.a,{onClick:function(){g(!0)}}))),r.a.createElement(de,{open:d,close:function(){g(!1)}}),r.a.createElement(pe.a,null,r.a.createElement(ge.c,null,r.a.createElement(ge.a,{path:"/list",component:ne}),r.a.createElement(ge.a,{path:"/favorites",component:ce}),r.a.createElement(ge.a,{path:"",exact:!0,component:V})),r.a.createElement(fe.a,{value:n,onChange:function(e,t){l(t)},showLabels:!0,className:e.bottomNav},r.a.createElement(he.a,{component:pe.b,to:"/list",value:"list",label:"Shopping List",icon:r.a.createElement(Ee.a,null)}),r.a.createElement(he.a,{component:pe.b,to:"/",value:"search",label:"Search",icon:r.a.createElement($.a,null)}),r.a.createElement(he.a,{component:pe.b,to:"/favorites",value:"favorites",label:"Favorites",icon:r.a.createElement(C.a,null)}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));document.addEventListener("deviceready",function(){window.plugins.appsFlyer.initSdk({devKey:"Us4Gm2SnJghcuoev846Qed",isDebug:!0,onInstallConversionDataListener:!0,appId:"123336789"},(function(e){console.log(e)}),(function(e){console.log(e)})),o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ye,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}.bind(void 0),!1)}},[[107,1,2]]]);
//# sourceMappingURL=main.bc70276f.chunk.js.map