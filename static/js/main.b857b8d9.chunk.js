(this["webpackJsonpposti-list"]=this["webpackJsonpposti-list"]||[]).push([[0],{63:function(e,t,n){e.exports=n(94)},91:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(16),s=n.n(r),o=n(20),i=n(41),l=n(35),u=n(112),d=n(111),p=n(110),f=n(58),b=n.n(f),E=n(57),m=n.n(E),O=n(56),h=n.n(O),v=n(21),j=n.n(v),_=n(13),w=n(22),g=function(e,t){return void 0===t?{type:e}:{type:e,payload:t}},P=n(52),k=n.n(P),S=j.a.mark(x),C=j.a.mark(y),F={liked:!1,subreddit:void 0,newPosts:[],posts:void 0,loading:!1,success:!1,error:null},T={clearFetch:function(){return g("posts/CLEAR_FETCH")},fetchRequest:function(e){return g("posts/FETCH_REQUEST",e)},fetchSuccess:function(e){return g("posts/FETCH_SUCCESS",e)},fetchFail:function(e){return g("posts/FETCH_FAIL",e)},likePost:function(e){return g("posts/LIKE_POST",e)},delPost:function(e){return g("posts/DEL_POST",e)}};function x(e){var t,n,a,c,r;return j.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return t=e.payload,s.prev=1,s.next=4,Object(w.b)((function(){return e=t,k.a.get("https://www.reddit.com/r/".concat(e,"/random.json"));var e}));case 4:return n=s.sent,a=n.data,s.next=8,Object(w.d)(T.fetchSuccess(a));case 8:s.next=14;break;case 10:return s.prev=10,s.t0=s.catch(1),s.next=14,Object(w.d)(T.fetchFail((null===s.t0||void 0===s.t0||null===(c=s.t0.response)||void 0===c||null===(r=c.data)||void 0===r?void 0:r.message)||"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430."));case 14:case"end":return s.stop()}}),S,null,[[1,10]])}function y(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(w.e)("posts/FETCH_REQUEST",x);case 2:case"end":return e.stop()}}),C)}var R=[{id:1,label:"Frontend"},{id:2,label:"ReactJS"},{id:3,label:"VueJS"},{id:4,label:"Angular"}];n(91);var H=Object(o.b)((function(e){return{liked:e.posts.liked,newPosts:e.posts.newPosts,loading:e.posts.loading,success:e.posts.success,error:e.posts.error}}),{clearFetch:T.clearFetch,fetchRequest:T.fetchRequest,likePost:T.likePost,delPost:T.delPost})((function(e){var t=e.liked,n=e.newPosts,r=e.loading,s=e.success,o=e.error,f=e.clearFetch,E=e.fetchRequest,O=e.likePost,v=e.delPost,j=Object(a.useState)(n),_=Object(i.a)(j,2),w=_[0],g=_[1];return Object(a.useEffect)((function(){g(n)}),[n]),Object(a.useEffect)((function(){(s||o)&&f()}),[s,o,f]),c.a.createElement("div",{className:"wrapper"},c.a.createElement("div",{className:"button-contain"},R.map((function(e){return c.a.createElement("button",{className:"button-contain__item button-contain__item_".concat(e.id," bounce-").concat(e.id),key:e.id,onClick:function(){return E(e.label)}},e.label)}))),c.a.createElement(l.a,{onDragEnd:function(e){if(e.destination){var t=Array.from(w),n=t.splice(e.source.index,1),a=Object(i.a)(n,1)[0];t.splice(e.destination.index,0,a),g(t)}}},c.a.createElement(l.c,{droppableId:"posts"},(function(e){return c.a.createElement("div",Object.assign({className:"posts-contain"},e.droppableProps,{ref:e.innerRef}),r?c.a.createElement(p.a,null):w.map((function(e,n){return c.a.createElement(l.b,{key:e.data.id,draggableId:e.data.id,index:n},(function(n){return c.a.createElement("div",Object.assign({className:"posts-contain__item"},n.draggableProps,n.dragHandleProps,{ref:n.innerRef}),c.a.createElement(u.a,{onChange:function(){return O()},value:t,icon:c.a.createElement(h.a,null),checkedIcon:c.a.createElement(m.a,null)}),c.a.createElement(d.a,{size:"small",onClick:function(){return v(e.data.id)},disabled:r},c.a.createElement(b.a,null)),c.a.createElement("a",{href:"https://www.reddit.com/".concat(e.data.permalink),target:"_blank"},e.data.title))}))})),e.placeholder)}))))})),I=n(7),L=n(59),N=j.a.mark(U),A=Object(I.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"posts/CLEAR_FETCH":return Object(_.a)(Object(_.a)({},e),{},{posts:void 0,loading:!1,success:!1,error:null});case"posts/FETCH_REQUEST":return Object(_.a)(Object(_.a)({},e),{},{posts:void 0,loading:!0,success:!1,error:null});case"posts/FETCH_SUCCESS":return t.payload.forEach((function(t){t.data.dist&&t.data.children.map((function(t){e.newPosts.push(t)}))})),Object(_.a)(Object(_.a)({},e),{},{posts:e.newPosts,loading:!1,success:!0});case"posts/FETCH_FAIL":return Object(_.a)(Object(_.a)({},e),{},{loading:!1,error:t.payload});case"posts/LIKE_POST":return Object(_.a)(Object(_.a)({},e),{},{liked:t.payload});case"posts/DEL_POST":var n=[];return e.newPosts.forEach((function(e){e.data.id!==t.payload&&n.push(e)})),Object(_.a)(Object(_.a)({},e),{},{newPosts:n});default:return e}}});function U(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(w.a)([y].map((function(e){return Object(w.c)(e)})));case 2:case"end":return e.stop()}}),N)}var D=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||I.d,q=Object(L.a)(),J=Object(I.e)(A,D(Object(I.a)(q)));q.run(U);var Q=J;s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(o.a,{store:Q},c.a.createElement(H,null))),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.b857b8d9.chunk.js.map