(this.webpackJsonphello_react=this.webpackJsonphello_react||[]).push([[0],{59:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(29),i=n.n(s),c=n(9),o=n(2),l=n(1);var u=function(e){return console.log(e),Object(l.jsx)("span",{children:"About this page"})},m=n(17),j=n.n(m),d=n(30),b=n(11),v=n(12),h=n(14),p=n(13),O=n(31),x=n.n(O),g=n(4),y=n.n(g);n(59);function _(e){var t=e.id,n=e.year,a=e.title,r=e.summary,s=e.poster,i=e.genres,o=e.trailer,u="https://www.youtube.com/watch?v=".concat(o);return Object(l.jsx)("div",{className:"movie",children:Object(l.jsxs)(c.b,{to:{pathname:"/movie/".concat(t),state:{id:t,year:n,title:a,summary:r,poster:s,genres:i}},children:[Object(l.jsx)("img",{src:s,alt:a,title:a}),Object(l.jsxs)("div",{className:"movie__data",children:[Object(l.jsx)("h3",{className:"movie__title",children:a}),Object(l.jsx)("h5",{className:"movie__year",children:n}),Object(l.jsx)("ul",{className:"movie__genres",children:i.map((function(e,t){return Object(l.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(l.jsxs)("p",{className:"movie__summary",children:[r.slice(0,180),"..."]}),Object(l.jsx)("button",{className:"movie__btn",onClick:function(){return window.open(u,"_blank")},children:"See more"})]})]})})}_.prototype={id:y.a.number.isRequired,title:y.a.string.isRequired,summary:y.a.string.isRequired,poster:y.a.string.isRequired,year:y.a.number.isRequired,genres:y.a.arrayOf(y.a.string).isRequired,trailer:y.a.string};var f=_,N=(n(63),function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(d.a)(j.a.mark((function t(){var n,a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");case 2:n=t.sent,a=n.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(v.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return Object(l.jsx)("section",{className:"container",children:t?Object(l.jsx)("div",{className:"loader",children:Object(l.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(l.jsx)("div",{className:"movies",children:n.map((function(e){return Object(l.jsx)(f,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres,trailer:e.yt_trailer_code},e.id)}))})})}}]),n}(r.a.Component)),w=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(v.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(l.jsx)("span",{children:e.state.title}):null}}]),n}(r.a.Component);n(64);var k=function(){return Object(l.jsxs)("div",{className:"nav",children:[Object(l.jsx)(c.b,{to:"/",children:"Home"}),Object(l.jsx)(c.b,{to:"/about",children:"About"})]})};var q=function(){return Object(l.jsxs)(c.a,{children:[Object(l.jsx)(k,{}),Object(l.jsx)(o.a,{path:"/",exact:!0,component:N}),Object(l.jsx)(o.a,{path:"/about",component:u}),Object(l.jsx)(o.a,{path:"/movie/:id",component:w})]})};i.a.render(Object(l.jsx)(q,{}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.39b87292.chunk.js.map