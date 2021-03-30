(this["webpackJsonpalbums-list"]=this["webpackJsonpalbums-list"]||[]).push([[0],{35:function(t,e,n){},37:function(t,e,n){},57:function(t,e,n){},66:function(t,e,n){},67:function(t,e,n){"use strict";n.r(e),n.d(e,"history",(function(){return w}));var c=n(0),a=n.n(c),s=n(27),r=n.n(s),i=(n(35),n(10)),o=n.n(i),l=n(13),u=n(7),j=n(3),b={development:{baseURL:"http://localhost:3004"},production:{baseURL:"https://my-json-server.typicode.com/hoirena/albums-list"}},h=(n(37),n(1)),d=function(t){var e=t.title,n=t.setSearch;return Object(h.jsx)("header",{children:Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:e}),n?Object(h.jsx)("div",{className:"search-wrapper",children:Object(h.jsx)("input",{type:"text",placeholder:"Search",onKeyDown:function(t){if("Enter"===t.key){var e=t.target.value.toLowerCase();n(e)}}})}):null]})})},p=n(8),f=n(28),O=b.production,m=n.n(f).a.create({baseURL:O.baseURL}),x=(n(57),function(t){var e=t.album,n=t.author,a=Object(c.useState)(e.favorite),s=Object(u.a)(a,2),r=s[0],i=s[1],o=new Date(e.releaseDate),l=r?"Remove favorite":"Mark as favorite",d=r?"active":"",f=b.production;Object(j.e)();return Object(h.jsxs)("article",{children:[Object(h.jsxs)("div",{className:"album-wrapper",children:[Object(h.jsx)("img",{src:e.imageUrl,alt:"tmp"}),Object(h.jsxs)("div",{className:"name-wrapper",children:[Object(h.jsx)("h2",{children:Object(h.jsx)("cite",{children:e.title})}),Object(h.jsx)("address",{className:"gray-text",rel:"author",children:Object(h.jsx)(p.b,{to:"/artist/"+n.id,children:n.title})})]})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{className:"gray-text",children:"Released: "}),o.getFullYear()]}),Object(h.jsx)("div",{children:e.price}),Object(h.jsx)("div",{className:"mark-as-favorit ".concat(d),onClick:function(){m.patch("".concat(f.baseURL,"/albums/").concat(e.id),{favorite:!r}),i(!r)},children:l})]})});var v=function(){var t=Object(c.useState)([]),e=Object(u.a)(t,2),n=e[0],a=e[1],s=Object(c.useState)([]),r=Object(u.a)(s,2),i=r[0],p=r[1],f=Object(c.useState)(""),O=Object(u.a)(f,2),m=O[0],v=O[1],g=b.production,L=[],y=Object(j.e)();function R(){return(R=Object(l.a)(o.a.mark((function t(){var e,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("".concat(g.baseURL,"/artists/")),t.next=3,fetch("".concat(g.baseURL,"/artists/")).then((function(t){return t.json()}));case 3:return e=t.sent,t.next=6,fetch("".concat(g.baseURL,"/albums/")).then((function(t){return t.json()}));case 6:n=t.sent,a(n),p(e);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}if(Object(c.useEffect)((function(){!function(){R.apply(this,arguments)}()}),[m]),"?limit="===y.search.substr(0,7)){var w=y.search.match(/=([0-9]+)$/);L=w?n.slice(0,w[1]):n.slice(0,10)}else L=n.slice(0,10);if(m){for(var U=[],S=0;S<L.length;S++)L[S].title.toLowerCase().includes(m)&&U.push(L[S]);L=U}var C=L.map((function(t,e){var n=i.find((function(e){return e.id===t.artistId}));return Object(h.jsx)(x,{album:t,author:n,env:g},e)}));return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(d,{title:"Albums list",setSearch:v}),n.length?null:Object(h.jsx)("p",{children:"Loading albums..."}),i.length?C:null]})};var g=function(){var t=Object(j.f)().id,e=parseInt(t),n=Object(c.useState)([]),a=Object(u.a)(n,2),s=a[0],r=a[1],i=Object(c.useState)({}),p=Object(u.a)(i,2),f=p[0],O=p[1],m=b.production;function v(){return(v=Object(l.a)(o.a.mark((function t(){var n,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(m.baseURL,"/artists/").concat(e)).then((function(t){return t.json()}));case 2:return n=t.sent,t.next=5,fetch("".concat(m.baseURL,"/albums/")).then((function(t){return t.json()}));case 5:c=t.sent,r(c),O(n);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var g=s.map((function(t,n){return t.artistId===e?Object(h.jsx)(x,{album:t,author:f},n):null}));return Object(c.useEffect)((function(){!function(){v.apply(this,arguments)}()}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(d,{title:f.title}),s.length?null:Object(h.jsx)("p",{children:"Loading author's albums..."}),g]})};n(66);var L=function(){var t=Object(j.e)();return console.log("LOCATION: ",t),console.log("PUBLICC_URL---: ","".concat("/albums-list","/")),console.log("PRVI ---\x3e","".concat(t.pathname,"/")),console.log("......++.......>","".concat(t.pathname,"/artist/:id")),Object(h.jsxs)("div",{className:"app",children:[Object(h.jsx)(j.a,{path:"/",exact:!0,component:v}),Object(h.jsx)(j.a,{path:"/artist/:id",exact:!0,component:g})]})},y=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,68)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,s=e.getLCP,r=e.getTTFB;n(t),c(t),a(t),s(t),r(t)}))},R=n(30),w=Object(R.a)({basename:"/albums-list"});r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(p.a,{history:w,children:Object(h.jsx)(L,{})})}),document.getElementById("root")),y()}},[[67,1,2]]]);
//# sourceMappingURL=main.b16fbe54.chunk.js.map