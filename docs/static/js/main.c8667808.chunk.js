(this["webpackJsonpdeploy-me"]=this["webpackJsonpdeploy-me"]||[]).push([[0],{11:function(e,t,s){e.exports={background:"Home_background__3rSb3",title:"Home_title__1ko8t",instruct:"Home_instruct__35hGn"}},13:function(e,t,s){e.exports={searchBar:"SearchBar_searchBar__3PtKk",searchButton:"SearchBar_searchButton__2ccTI",form:"SearchBar_form__1avqT"}},14:function(e,t,s){e.exports={searchResultPage:"SearchResults_searchResultPage__2jK8k",searchBody:"SearchResults_searchBody__3E8KQ"}},20:function(e,t,s){e.exports={linkToDetail:"BookThumbnail_linkToDetail__3pHVm"}},29:function(e,t,s){},30:function(e,t,s){},38:function(e,t,s){"use strict";s.r(t);var a=s(1),r=s.n(a),c=s(22),n=s.n(c),o=s(8),i=(s(29),s(10)),l=(s(30),s(2)),j=s(17),u=s.n(j),b=s(23),h=s(13),d=s.n(h),m=s(0);function k(e){var t=Object(a.useState)(!1),s=Object(i.a)(t,2),r=s[0],c=s[1],n=Object(a.useState)(""),o=Object(i.a)(n,2),j=o[0],h=o[1],k=function(){var t=Object(b.a)(u.a.mark((function t(s){var a,r,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,"AIzaSyDREkuZhSY1Jz7v3bzsIuMLpDEAVre7wG8",a="https://www.googleapis.com/books/v1/volumes?q=".concat(s,"&filter=full&key=").concat("AIzaSyDREkuZhSY1Jz7v3bzsIuMLpDEAVre7wG8"),t.next=5,fetch(a);case 5:return r=t.sent,t.next=8,r.json();case 8:c=t.sent,e.setBookList(c.items),t.next=15;break;case 12:return t.prev=12,t.t0=t.catch(0),t.abrupt("return",t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}();return Object(m.jsxs)("div",{children:[r&&Object(m.jsx)(l.a,{to:"/searchresults"}),Object(m.jsxs)("form",{className:d.a.form,onSubmit:function(t){t.preventDefault(),c(!0),k(j),e.setLastSearch(j),h("")},children:[Object(m.jsx)("input",{className:d.a.searchBar,placeholder:"Search For Books",type:"text",name:"bookSearchString",required:!0,onChange:function(e){e.preventDefault(),h(e.target.value)},value:j}),Object(m.jsx)("button",{className:d.a.searchButton,type:"submit",children:"Find Books"})]})]})}var x=s(11),O=s.n(x);function f(e){return Object(m.jsxs)("div",{className:O.a.background,children:[Object(m.jsx)("h1",{className:O.a.title,children:"Free Web Books"}),Object(m.jsx)("h2",{className:O.a.title,children:"A Hub For Books In The Public Domain"}),Object(m.jsx)("h4",{className:O.a.instruct,children:"Start Searching to Begin"}),Object(m.jsx)(k,{className:O.a.searchBar,setLastSearch:e.setLastSearch,setBookList:e.setBookList})]})}var v=s(20),_=s.n(v);function p(e){return Object(m.jsx)("div",{className:_.a.thumbnailBody,children:Object(m.jsxs)(o.b,{className:_.a.linkToDetail,to:"/bookdetails/"+e.book.id,children:[Object(m.jsx)("img",{src:e.book.volumeInfo.imageLinks.thumbnail,alt:"Cover of "+e.book.volumeInfo.title}),Object(m.jsx)("h3",{children:e.book.volumeInfo.title})]})})}var B=s(40),g=s(14),L=s.n(g);function S(e){var t=e.bookList,s=e.lastSearch;return Object(m.jsxs)("div",{className:L.a.searchResultPage,children:[Object(m.jsxs)("p",{style:{color:"white",display:"block"},className:L.a.searchTitle,children:['Results For "',s,'"']}),Object(m.jsx)("div",{className:L.a.searchBody,children:t&&t.map((function(e){return Object(m.jsx)("div",{children:Object(m.jsx)(p,{book:e})},Object(B.a)())}))})]})}var D=s(7),N=s.n(D);function y(e){var t=e.routerProps,s=e.bookList.filter((function(e){return e.id===t.match.params.id}))[0];return s?Object(m.jsxs)("div",{className:N.a.detailsPage,children:[Object(m.jsxs)("span",{className:N.a.overview,children:[Object(m.jsx)("img",{className:N.a.cover,src:s.volumeInfo.imageLinks.thumbnail,alt:"The Cover of "+s.volumeInfo.title}),Object(m.jsxs)("div",{className:N.a.indivDetails,children:[Object(m.jsxs)("p",{children:[Object(m.jsx)("b",{children:"Title:"})," ",s.volumeInfo.title]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("b",{children:"Author(s):"})," ",s.volumeInfo.authors.join(" and ")]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("b",{children:"Summary: "}),Object(m.jsx)("p",{className:N.a.summary,dangerouslySetInnerHTML:{__html:s.searchInfo.textSnippet}})]})]})]}),Object(m.jsxs)("div",{className:N.a.linkList,children:[Object(m.jsx)("a",{className:N.a.externalLinks,href:s.accessInfo.webReaderLink,target:"_blank",rel:"noreferrer",children:"Read This Book In Your Browser"}),Object(m.jsx)("a",{className:N.a.externalLinks,href:s.accessInfo.pdf.downloadLink,target:"_blank",rel:"noreferrer",children:"View PDF From Google Books"}),Object(m.jsx)("a",{className:N.a.externalLinks,href:s.accessInfo.epub.downloadLink,target:"_blank",rel:"noreferrer",children:"Download EPUB From Google Books"})]})]}):Object(m.jsx)("h1",{children:"Loading Book Details"})}function I(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),s=t[0],r=t[1],c=Object(a.useState)(""),n=Object(i.a)(c,2),j=n[0],u=n[1],b=Object(l.g)();return Object(m.jsxs)("div",{children:[Object(m.jsxs)("nav",{className:"navBar",children:[Object(m.jsx)(o.b,{to:"/",children:Object(m.jsx)("h3",{className:"linkToHome",children:"Back To Home"})}),"/"!==b.pathname&&Object(m.jsx)(k,{setLastSearch:u,className:"searchBar",setBookList:r})]}),Object(m.jsx)("main",{children:Object(m.jsxs)(l.d,{children:[Object(m.jsx)(l.b,{exact:!0,path:"/",render:function(){return Object(m.jsx)(f,{setLastSearch:u,setBookList:r})}}),Object(m.jsx)(l.b,{path:"/searchresults",render:function(){return Object(m.jsx)(S,{bookList:s,lastSearch:j})}}),Object(m.jsx)(l.b,{path:"/bookdetails/:id",render:function(e){return Object(m.jsx)(y,{routerProps:e,bookList:s})}})]})})]})}var w=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,41)).then((function(t){var s=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,n=t.getTTFB;s(e),a(e),r(e),c(e),n(e)}))};n.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(o.a,{children:Object(m.jsx)(I,{})})}),document.getElementById("root")),w()},7:function(e,t,s){e.exports={detailsPage:"BookDetails_detailsPage__3EClq",linkList:"BookDetails_linkList__1UX7l",overview:"BookDetails_overview__3wyHS",indivDetails:"BookDetails_indivDetails__1BCWD",cover:"BookDetails_cover__3OjB2",summary:"BookDetails_summary__66zkp",externalLinks:"BookDetails_externalLinks__3GUQs"}}},[[38,1,2]]]);
//# sourceMappingURL=main.c8667808.chunk.js.map