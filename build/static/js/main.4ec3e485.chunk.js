(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},33:function(e,t,n){e.exports=n(74)},38:function(e,t,n){},40:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(27),c=n.n(a),i=(n(38),n(8)),u=n(9),l=n(12),s=n(10),d=n(13),p=n(28),f=n.n(p),h=(n(40),n(11)),m="ADD_TODO",g="TOGGLE_TODO",v="SET_VISIBILITY_FILTER";var O=function(e){function t(){var e,n;Object(i.a)(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(){var e=n.props,t=e.onTodoClick,o=e.reduxQueryTest;t("is"),o(),console.log("test")},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return console.log("Accounts",this.props),r.a.createElement("div",null,r.a.createElement("h1",null,"Hello, ",this.props.name),r.a.createElement("button",{onClick:this.handleClick},"Test"))}}]),t}(o.Component),b=n(30),y=Object(b.a)([function(e){return e.visibilityFilter},function(e){return e.todos}],function(e,t){switch(e){case"SHOW_ALL":return t;case"SHOW_COMPLETED":return t.filter(function(e){return e.completed});case"SHOW_ACTIVE":return t.filter(function(e){return!e.completed})}}),E=n(6),j=Object(h.b)(function(e){return{todos:y(e),name:"",test1:2}},function(e){return{onTodoClick:function(t){e({type:g,index:t})},reduxQueryTest:function(){return e(Object(E.mutateAsync)({url:"/v1/chain/get_account",body:{account_name:"gqytgobvgene"},update:{message:function(e,t){return t}}}))}}})(O),w=function(e){function t(){var e,n;Object(i.a)(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={inputValue:""},n.handleInputChange=function(e){console.log(e.target.value),n.setState({inputValue:e.target.value})},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state.inputValue;return console.log("App",this.props),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:f.a,className:"App-logo",alt:"logo"})),r.a.createElement("div",null,r.a.createElement("input",{onChange:this.handleInputChange,value:e}),r.a.createElement("div",null,"test")),r.a.createElement(j,null),r.a.createElement("div",null,"Booting up and getting information from EOS Node Proxy: https://proxy.eosnode.tools/v1/chain/get_info"))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var T=n(32),A="SHOW_ALL";var C=n(5),k=n(31),_=n.n(k);n.d(t,"getQueries",function(){return x}),n.d(t,"getEntities",function(){return I});var x=function(e){return e.queries},I=function(e){return e.entities},L=Object(C.c)({visibilityFilter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(console.log("visibilityFilter"),t.type){case v:return t.filter;default:return e}},todos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(console.log("todos"),t.type){case m:return Object(T.a)(e).concat([{text:t.text,completed:!1}]);case g:return e.map(function(e,n){return n===t.index?Object.assign({},e,{completed:!e.completed}):e});default:return e}},entities:E.entitiesReducer,queries:E.queriesReducer}),S=Object(C.d)(L,Object(C.a)(Object(E.queryMiddleware)(x,I),_.a));c.a.render(r.a.createElement(h.a,{store:S},r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,2,1]]]);
//# sourceMappingURL=main.4ec3e485.chunk.js.map