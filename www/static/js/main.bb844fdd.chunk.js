(this["webpackJsonpcom.afcordova.cooking"]=this["webpackJsonpcom.afcordova.cooking"]||[]).push([[0],{102:function(e,t,n){},126:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(10),o=n.n(l),i=(n(102),n(17)),c=n(171),u=n(187),s=n(188),m=n(34),d=n(80),g=n.n(d),p=n(82),f=n(196),h=n(192),v=n(173),E=Object(c.a)((function(e){return{root:{display:"flex",justifyContent:"center",flexWrap:"wrap",listStyle:"none",padding:e.spacing(.5),margin:0},chip:{margin:e.spacing(.5)}}})),b=function(e){var t=E();return r.a.createElement("div",null,0!==e.ingredients.length?r.a.createElement(v.a,{variant:"middle"}):null,r.a.createElement(h.a,{component:"ul",className:t.root},e.ingredients.map((function(n){return r.a.createElement("li",{key:n.key},r.a.createElement(f.a,{label:n,onDelete:function(){return e.deleteFunction(n)},className:t.chip}))}))),0!==e.ingredients.length?r.a.createElement(v.a,{variant:"middle"}):null)},w=n(78),y=n.n(w),C=n(194),k=n(79),j=n.n(k),O=n(56),x=n.n(O),S=n(175),N=n(176),T=n(177),F=n(179),I=n(178),B=n(197),A=n(180),P=Object(c.a)((function(e){return{root:{flexGrow:1,display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper,marginBottom:10,marginTop:10,height:200},media:{height:130},icon:{textAlign:"center"},large:{width:e.spacing(7),height:e.spacing(7),marginRight:20}}})),R=function(e){var t=P(),n=Object(a.useState)(e.favorite),l=Object(i.a)(n,2),o=l[0],c=l[1],u=Object(a.useState)(!1),s=Object(i.a)(u,2),m=s[0],d=s[1],g=Object(a.useState)(""),p=Object(i.a)(g,2),f=p[0],h=(p[1],function(){}),v=function(){};return r.a.createElement("div",null,r.a.createElement(S.a,{dense:!0},r.a.createElement(N.a,null,r.a.createElement(T.a,null,r.a.createElement(B.a,{className:t.large,alt:e.title,src:e.thumbnail})),r.a.createElement(I.a,{primary:e.title,secondary:e.ingredients,onClick:function(){return t=e.href,void window.open(t,"_blank");var t}}),r.a.createElement(F.a,null,r.a.createElement(A.a,{edge:"end","aria-label":"delete"},o?r.a.createElement(x.a,{fontSize:"large",style:{color:"#FF9134"},onClick:function(){return c(!1),void window.plugins.SharedPreferences.getInstance("savedRecipes").del(e.title,h,v)}}):r.a.createElement(j.a,{className:t.icon,fontSize:"large",style:{color:"#C2C2C2"},onClick:function(){return c(!0),void window.plugins.SharedPreferences.getInstance("savedRecipes").put(e.title,JSON.stringify([e.thumbnail,e.ingredients,e.href]),h,v)}}))))),r.a.createElement(C.a,{anchorOrigin:"center",open:m,autoHideDuration:3e3,onClose:function(){d(!1)}},f))},W=Object(c.a)((function(e){return{backgroundTitle:{color:"#C5C5C8",margin:20},root:{flexGrow:1,display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper,marginBottom:10,marginTop:10,height:200},media:{height:130},icon:{textAlign:"center",color:e.palette.text.secondary}}})),G=function(e){var t=W(),n=Object(a.useState)([]),l=Object(i.a)(n,2),o=l[0],c=l[1],u=Object(a.useState)([]),s=Object(i.a)(u,2),d=s[0],g=s[1],p=window.plugins.SharedPreferences.getInstance("savedRecipes");Object(a.useEffect)((function(){f()}),[e.ingredients]);var f=function(){y.a.get("https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?i="+e.ingredients).then((function(e){p.keys(v,E),c(e.data.results)})).catch((function(e){console.log("Problem")}))},v=function(e){g(e)},E=function(e){console.error(e)};return r.a.createElement("div",null,0===e.ingredients.length?r.a.createElement(h.a,{display:"flex",height:"70vh",alignItems:"center"},r.a.createElement(m.a,{variant:"h4",gutterBottom:!0,className:t.backgroundTitle,align:"center"},"Type ingredients to search for a recipe...")):r.a.createElement("div",null,o.map((function(e){return d.includes(e.title)?r.a.createElement(R,{title:e.title,thumbnail:e.thumbnail,ingredients:e.ingredients,href:e.href,favorite:!0}):r.a.createElement(R,{title:e.title,thumbnail:e.thumbnail,ingredients:e.ingredients,href:e.href,favorite:!1})}))))},L=n(191),z=n(182),D=n(59),J=n.n(D),H=Object(c.a)((function(e){return{searchBar:{width:"100%"},backgroundTitle:{color:"#C5C5C8",margin:20}}})),K=function(){var e=r.a.useState([]),t=Object(i.a)(e,2),n=t[0],a=t[1],l=r.a.useState(""),o=Object(i.a)(l,2),c=o[0],u=o[1],s=H();return r.a.createElement("div",null,r.a.createElement(h.a,{display:"flex",alignItems:"center",margin:1},r.a.createElement(L.a,{id:"outlined-search",value:c,className:s.searchBar,onChange:function(e){u(e.target.value)},InputProps:{endAdornment:r.a.createElement(z.a,null,r.a.createElement(A.a,{onClick:function(){0!==c.length&&(a((function(e){return[].concat(Object(p.a)(n),[c])})),u(""))}},r.a.createElement(J.a,null)))},label:"Type an Ingredient",type:"search",variant:"outlined"})),r.a.createElement(b,{ingredients:n,deleteFunction:function(e){var t=n.filter((function(t){return t!==e}));a(t)}}),r.a.createElement(G,{ingredients:n}))},M=Object(c.a)((function(e){return{searchBar:{width:"100%",textAlign:"center"},title:{flexGrow:1},bottomNav:{width:"100%",position:"fixed",bottom:0},backgroundTitle:{color:"#C5C5C8",margin:20}}})),$=function(){M();return r.a.createElement("div",null,r.a.createElement("h1",null,"Shopping List"))},_=n(183),q=Object(c.a)((function(e){return{backgroundTitle:{color:"#C5C5C8",margin:20},root:{flexGrow:1,display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper,marginBottom:10,marginTop:10,height:200},media:{height:130},icon:{textAlign:"center",color:e.palette.text.secondary}}})),Q=function(){var e=q(),t=Object(a.useState)(""),n=Object(i.a)(t,2),l=n[0],o=n[1],c=window.plugins.SharedPreferences.getInstance("savedRecipes");Object(a.useEffect)((function(){u()}),[l]);var u=function(){c.keys(s,d)},s=function(e){o(e)},d=function(e){console.error(e)},g=function(e){console.log(e)},p=function(e){console.error(e)};return r.a.createElement("div",null,r.a.createElement(_.a,{variant:"contained",onClick:function(){c.clear(g,p)}},"clear"),r.a.createElement(_.a,{variant:"contained",onClick:function(){c.put("yala","the king")}},"save"),r.a.createElement(h.a,{display:"flex",height:"70vh",alignItems:"center"},0===l.length?r.a.createElement(m.a,{variant:"h4",gutterBottom:!0,className:e.backgroundTitle,align:"center"},"There are no favorites recipes"):r.a.createElement("div",null,l.map((function(e){return r.a.createElement("h6",null,e," ",c.get(e,"null",g,p))})))))},U=n(184),V=n(195),X=n(185),Y=n(186),Z=function(e){var t=e.open,n=e.close;return r.a.createElement(V.a,{"aria-labelledby":"simple-dialog-title",open:t,onClose:function(){n()}},r.a.createElement(U.a,{id:"simple-dialog-title"},r.a.createElement("img",{style:{height:50,margin:10},src:"https://1z1euk35x7oy36s8we4dr6lo-wpengine.netdna-ssl.com/wp-content/uploads/2015/04/AppsFlyer-logo.png",alt:"{tile.title}"})),r.a.createElement(X.a,null,r.a.createElement(Y.a,null,"This app was built with React & Cordova by the Appsflyer's SDK team in order to demonstrate a proper implementation of the Appsflyer's Cordova Plugin."),r.a.createElement(Y.a,null,"Enjoy!")))},ee=n(49),te=n(12),ne=n(189),ae=n(190),re=n(81),le=n.n(re),oe=Object(c.a)((function(e){return{root:{width:500},title:{flexGrow:1},bottomNav:{width:"100%",position:"fixed",bottom:0}}}));var ie=function(){var e=oe(),t=r.a.useState("search"),n=Object(i.a)(t,2),a=n[0],l=n[1],o=r.a.useState(!1),c=Object(i.a)(o,2),d=c[0],p=c[1];return r.a.createElement("div",null,r.a.createElement(u.a,{position:"static",color:"#FFFFFF",elevation:0,alignItems:"center"},r.a.createElement(s.a,null,r.a.createElement(m.a,{variant:"h6",className:e.title,color:"#000000",align:"center"},"Let's cook something!"),r.a.createElement(g.a,{onClick:function(){p(!0)}}))),r.a.createElement(Z,{open:d,close:function(){p(!1)}}),r.a.createElement(ee.a,null,r.a.createElement(te.a,{path:"/",exact:!0,component:K}),r.a.createElement(te.a,{path:"/list",component:$}),r.a.createElement(te.a,{path:"/favorites",component:Q}),r.a.createElement(ne.a,{value:a,onChange:function(e,t){l(t)},showLabels:!0,className:e.bottomNav},r.a.createElement(ae.a,{component:ee.b,to:"/list",value:"list",label:"Shopping List",icon:r.a.createElement(le.a,null)}),r.a.createElement(ae.a,{component:ee.b,to:"/",value:"search",label:"Search",icon:r.a.createElement(J.a,null)}),r.a.createElement(ae.a,{component:ee.b,to:"/favorites",value:"favorites",label:"Favorites",icon:r.a.createElement(x.a,null)}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},97:function(e,t,n){e.exports=n(126)}},[[97,1,2]]]);
//# sourceMappingURL=main.bb844fdd.chunk.js.map