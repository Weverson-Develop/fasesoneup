(this.webpackJsonpreact_api=this.webpackJsonpreact_api||[]).push([[0],{41:function(t,e,n){},64:function(t,e,n){"use strict";n.r(e);var o,r,l,i,c,a,d=n(1),s=n.n(d),u=n(31),h=n.n(u),j=n.p+"static/media/1.7a04ebd7.jpg",v=(n(41),n(11)),b=n(36),p=n(14),O=n(12),f=O.a.nav(o||(o=Object(v.a)(["\n  background: #000;\n  height: 150px;\n  display: flex;\n  justify-content: space-between;\n  \n  z-index: 10;\n  /* Third Nav */\n  /* justify-content: flex-start; */\n"]))),x=Object(O.a)(p.b)(r||(r=Object(v.a)(["\n  color: #fff;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  padding: 0 1rem;\n  height: 100%;\n  cursor: pointer;\n  &.active {\n    color: #15cdfc;\n  }\n"]))),g=Object(O.a)(b.a)(l||(l=Object(v.a)(["\n  display: none;\n  color: #fff;\n  @media screen and (max-width: 768px) {\n    display: block;\n    position: absolute;\n    top: 0;\n    right: 0;\n    transform: translate(-100%, 75%);\n    font-size: 1.8rem;\n    cursor: pointer;\n  }\n"]))),C=O.a.div(i||(i=Object(v.a)(["\n  display: flex;\n  align-items: center;\n  margin-right: -24px;\n  /* Second Nav */\n  /* margin-right: 24px; */\n  /* Third Nav */\n  /* width: 100vw;\n  white-space: nowrap; */\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n"]))),y=O.a.nav(c||(c=Object(v.a)(["\n  display: flex;\n  align-items: center;\n  margin-right: 24px;\n  /* Third Nav */\n  /* justify-content: flex-end;\n  width: 100vw; */\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n"]))),S=(Object(O.a)(p.b)(a||(a=Object(v.a)(["\n  border-radius: 4px;\n  background: #256ce1;\n  padding: 10px 22px;\n  color: #fff;\n  outline: none;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n  text-decoration: none;\n  /* Second Nav */\n  margin-left: 24px;\n  &:hover {\n    transition: all 0.2s ease-in-out;\n    background: #fff;\n    color: #010606;\n  }\n"]))),n(0)),m=function(){return Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)(f,{children:[Object(S.jsx)(x,{to:"/"}),Object(S.jsx)(g,{}),Object(S.jsxs)(C,{children:[Object(S.jsx)(x,{to:"/PCP",activeStyle:!0,children:"PCP"}),Object(S.jsx)(x,{to:"/SEPARACAO",activeStyle:!0,children:"SEPARA\xc7\xc3O DE TECIDO"}),Object(S.jsx)(x,{to:"/CORTE",activeStyle:!0,children:"CORTE"}),Object(S.jsx)(x,{to:"/MATERIALCOSTURA",activeStyle:!0,children:"MAT. P/ COSTURA"}),Object(S.jsx)(x,{to:"/DISTRIBUICAO",activeStyle:!0,children:"DISTRIBUI\xc7\xc3O"}),Object(S.jsx)(x,{to:"/COSTURA",activeStyle:!0,children:"COSTURA"}),Object(S.jsx)(x,{to:"/REVISAO",activeStyle:!0,children:"REVIS\xc3O DE COSTURA"}),Object(S.jsx)(x,{to:"/CONSERTO",activeStyle:!0,children:"CONCERTO"}),Object(S.jsx)(x,{to:"/BORDADO",activeStyle:!0,children:"BORDADO"}),Object(S.jsx)(x,{to:"/REVISAOBORDADO",activeStyle:!0,children:"REVIS\xc3O DE BORDADO"}),Object(S.jsx)(x,{to:"/MATERIAL",activeStyle:!0,children:"MAT. P/ ACABAMENTO"}),Object(S.jsx)(x,{to:"/ACABAMENTO",activeStyle:!0,children:"ACABAMENTO"}),Object(S.jsx)(x,{to:"/REVISAOACABAMENTO",activeStyle:!0,children:"REVIS\xc3O DE ACABAMENTO"}),Object(S.jsx)(x,{to:"/EXPEDICAO",activeStyle:!0,children:"EXPEDI\xc7\xc3O"})]}),Object(S.jsx)(y,{})]})})},k=n(3),A=n(2),D=n.n(A),T=n(4),w=n(5),E=n(6),B=n(8),R=n(7),F=n(35),P=n.n(F).a.create({baseURL:"http://200.201.206.232:6017/api/MILLENIUM!ONEUP.PRODUCAO.LISTAFASE?$format=json",auth:{username:"oneupapi",password:"mil753#@"}}),I=function(t){Object(B.a)(n,t);var e=Object(R.a)(n);function n(){var t;Object(w.a)(this,n);for(var o=arguments.length,r=new Array(o),l=0;l<o;l++)r[l]=arguments[l];return(t=e.call.apply(e,[this].concat(r))).state={all:[]},t}return Object(E.a)(n,[{key:"componentDidMount",value:function(){var t=Object(T.a)(D.a.mark((function t(){var e;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P.get("");case 2:e=t.sent,console.log(e.data),this.setState({all:e.data});case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t,e,n,o=this.state.all,r=null===o||void 0===o||null===(t=o.value)||void 0===t?void 0:t.filter((function(t){return"07 - REVISAO DE COSTURA"===t.fase}));null===o||void 0===o||null===(e=o.value)||void 0===e||e.shift();var l=null===o||void 0===o||null===(n=o.value)||void 0===n?void 0:n.filter((function(t){return"07 - REVISAO DE COSTURA"===t.fase}));return(null===r||void 0===r?void 0:r.length)>1&&(r.length=1),(null===l||void 0===l?void 0:l.length)>5&&(l.length=5),(null===r||void 0===r?void 0:r.length)>0?Object(S.jsx)("center",{children:Object(S.jsx)("div",{children:null===r||void 0===r?void 0:r.map((function(t){var e=t.fase,n=t.produto,o=t.qtde;return Object(S.jsxs)("ul",{children:[Object(S.jsxs)("h1",{style:{borderStyle:"solid",fontSize:"50px",marginTop:"15px",width:"fit-content",color:"Black",backgroundColor:"#15CDFC"},children:[Object(S.jsx)("h1",{children:"Opera\xe7\xe3o"}),"FASE : ",e]}),Object(S.jsxs)("ul",{style:{borderStyle:"solid",fontSize:"40px",marginTop:"15px",width:"fit-content",color:"Black",backgroundColor:"#15CDFC"},children:["PRODUTO : ",n]}),Object(S.jsx)("b",{children:Object(S.jsxs)("ul",{style:{borderStyle:"solid",fontSize:"30px",marginTop:"15px",width:"fit-content",color:"Black",backgroundColor:"#15CDFC"},children:["QUANTIDADE: ",o]})}),Object(S.jsxs)("h3",{style:{borderStyle:"solid",marginTop:"15px",width:"fit-content",color:"Black",backgroundColor:"#15CDFC"},children:[" ",null===l||void 0===l?void 0:l.map((function(t){var e=t.produto;return Object(S.jsxs)("ul",{children:["Proximos Produtos: ",e]})}))," "]})]},e)}))})}):Object(S.jsx)("center",{children:Object(S.jsx)("h1",{style:{borderStyle:"solid",fontSize:"50px",marginTop:"15px",width:"fit-content",color:"Black",backgroundColor:"red"},children:"N\xe3o existem produtos nesta fase!"})})}}]),n}(d.Component),z=I,N=function(t){Object(B.a)(n,t);var e=Object(R.a)(n);function n(){var t;Object(w.a)(this,n);for(var o=arguments.length,r=new Array(o),l=0;l<o;l++)r[l]=arguments[l];return(t=e.call.apply(e,[this].concat(r))).state={all:[]},t}return Object(E.a)(n,[{key:"componentDidMount",value:function(){var t=Object(T.a)(D.a.mark((function t(){var e;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P.get("");case 2:e=t.sent,this.setState({all:e.data});case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t,e,n,o=this.state.all,r=null===o||void 0===o||null===(t=o.value)||void 0===t?void 0:t.filter((function(t){return"12 - ACABAMENTO"===t.fase}));null===o||void 0===o||null===(e=o.value)||void 0===e||e.shift();var l=null===o||void 0===o||null===(n=o.value)||void 0===n?void 0:n.filter((function(t){return"12 - ACABAMENTO"===t.fase}));return(null===r||void 0===r?void 0:r.length)>1&&(r.length=1),(null===l||void 0===l?void 0:l.length)>5&&(l.length=5),(null===r||void 0===r?void 0:r.length)>0?Object(S.jsx)("center",{children:Object(S.jsx)("div",{children:null===r||void 0===r?void 0:r.map((function(t){var e=t.fase,n=t.produto,o=t.qtde;return Object(S.jsxs)("ul",{children:[Object(S.jsxs)("h1",{style:{borderStyle:"solid",fontSize:"50px",marginTop:"15px",width:"fit-content",color:"Black",backgroundColor:"#15CDFC"},children:[Object(S.jsx)("h1",{children:"Opera\xe7\xe3o"}),"FASE : ",e]}),Object(S.jsxs)("ul",{style:{borderStyle:"solid",fontSize:"40px",marginTop:"15px",width:"fit-content",color:"Black",backgroundColor:"#15CDFC"},children:["PRODUTO : ",n]}),Object(S.jsx)("b",{children:Object(S.jsxs)("ul",{style:{borderStyle:"solid",fontSize:"30px",marginTop:"15px",width:"fit-content",color:"Black",backgroundColor:"#15CDFC"},children:["QUANTIDADE: ",o]})}),Object(S.jsxs)("h3",{style:{borderStyle:"solid",marginTop:"15px",width:"fit-content",color:"Black",backgroundColor:"#15CDFC"},children:[" ",null===l||void 0===l?void 0:l.map((function(t){var e=t.produto;return Object(S.jsxs)("ul",{children:["Proximos Produtos: ",e]})}))," "]})]},e)}))})}):Object(S.jsx)("center",{children:Object(S.jsx)("h1",{style:{borderStyle:"solid",fontSize:"50px",marginTop:"15px",width:"fit-content",color:"Black",backgroundColor:"red"},children:"N\xe3o existem produtos nesta fase!"})})}}]),n}(d.Component),U=N,M=function(t){Object(B.a)(n,t);var e=Object(R.a)(n);function n(){var t;Object(w.a)(this,n);for(var o=arguments.length,r=new Array(o),l=0;l<o;l++)r[l]=arguments[l];return(t=e.call.apply(e,[this].concat(r))).state={all:[]},t}return Object(E.a)(n,[{key:"componentDidMount",value:function(){var t=Object(T.a)(D.a.mark((function t(){var e;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P.get("");case 2:e=t.sent,console.log(e.data),this.setState({all:e.data});case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t,e,n,o=this.state.all,r=null===o||void 0===o||null===(t=o.value)||void 0===t?void 0:t.filter((function(t){return"09 - BORDADO"===t.fase}));null===o||void 0===o||null===(e=o.value)||void 0===e||e.shift();var l=null===o||void 0===o||null===(n=o.value)||void 0===n?void 0:n.filter((function(t){return"09 - BORDADO"===t.fase}));return(null===r||void 0===r?void 0:r.length)>1&&(r.length=1),(null===l||void 0===l?void 0:l.length)>5&&(l.length=5),(null===r||void 0===r?void 0:r.length)>0?Object(S.jsx)("center",{children:Object(S.jsx)("div",{children:null===r||void 0===r?void 0:r.map((function(t){var e=t.fase,n=t.produto,o=t.qtde;return Object(S.jsxs)("ul",{children:[Object(S.jsxs)("h1",{style:{borderStyle:"solid",fontSize:"50px",marginTop:"15px",width:"fit-content",color:"Black",backgroundColor:"#15CDFC"},children:[Object(S.jsx)("h1",{children:"Opera\xe7\xe3o"}),"FASE : ",e]}),Object(S.jsxs)("ul",{style:{borderStyle:"solid",fontSize:"40px",marginTop:"15px",width:"fit-content",color:"Black",backgroundColor:"#15CDFC"},children:["PRODUTO : ",n]}),Object(S.jsx)("b",{children:Object(S.jsxs)("ul",{style:{borderStyle:"solid",fontSize:"30px",marginTop:"15px",width:"fit-content",color:"Black",backgroundColor:"#15CDFC"},children:["QUANTIDADE: ",o]})}),Object(S.jsxs)("h3",{style:{borderStyle:"solid",marginTop:"15px",width:"fit-content",color:"Black",backgroundColor:"#15CDFC"},children:[" ",null===l||void 0===l?void 0:l.map((function(t){var e=t.produto;return Object(S.jsxs)("ul",{children:["Proximos Produtos: ",e]})}))," "]})]},e)}))})}):Object(S.jsx)("center",{children:Object(S.jsx)("h1",{style:{borderStyle:"solid",fontSize:"50px",marginTop:"15px",width:"fit-content",color:"Black",backgroundColor:"red"},children:"N\xe3o existem produtos nesta fase!"})})}}]),n}(d.Component),V=M,q=function(t){Object(B.a)(n,t);var e=Object(R.a)(n);function n(){var t;Object(w.a)(this,n);for(var o=arguments.length,r=new Array(o),l=0;l<o;l++)r[l]=arguments[l];return(t=e.call.apply(e,[this].concat(r))).state={all:[]},t}return Object(E.a)(n,[{key:"componentDidMount",value:function(){var t=Object(T.a)(D.a.mark((function t(){var e;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P.get("");case 2:e=t.sent,console.log(e.data),this.setState({all:e.data});case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t,e,n,o=this.state.all,r=null===o||void 0===o||null===(t=o.value)||void 0===t?void 0:t.filter((function(t){return"08 - CONSERTO DE COSTURA"===t.fase}));null===o||void 0===o||null===(e=o.value)||void 0===e||e.shift();var l=null===o||void 0===o||null===(n=o.value)||void 0===n?void 0:n.filter((function(t){return"08 - CONSERTO DE COSTURA"===t.fase}));return(null===r||void 0===r?void 0:r.length)>1&&(r.length=1),(null===l||void 0===l?void 0:l.length)>5&&(l.length=5),(null===r||void 0===r?void 0:r.length)>0?Object(S.jsx)("center",{children:Object(S.jsx)("div",{children:null===r||void 0===r?void 0:r.map((function(t){var e=t.fase,n=t.produto,o=t.qtde;return Object(S.jsxs)("ul",{children:[Object(S.jsxs)("h1",{style:{borderStyle:"solid",fontSize:"50px",marginTop:"15px",width:"fit-content",color:"Black",backgroundColor:"#15CDFC"},children:[Object(S.jsx)("h1",{children:"Opera\xe7\xe3o"}),"FASE : ",e]}),Object(S.jsxs)("ul",{style:{borderStyle:"solid",fontSize:"40px",marginTop:"15px",width:"fit-content",color:"Black",backgroundColor:"#15CDFC"},children:["PRODUTO : ",n]}),Object(S.jsx)("b",{children:Object(S.jsxs)("ul",{style:{borderStyle:"solid",fontSize:"30px",marginTop:"15px",width:"fit-content",color:"Black",backgroundColor:"#15CDFC"},children:["QUANTIDADE: ",o]})}),Object(S.jsxs)("h3",{style:{borderStyle:"solid",marginTop:"15px",width:"fit-content",color:"Black",backgroundColor:"#15CDFC"},children:[" ",null===l||void 0===l?void 0:l.map((function(t){var e=t.produto;return Object(S.jsxs)("ul",{children:["Proximos Produtos: ",e]})}))," "]})]},e)}))})}):Object(S.jsx)("center",{children:Object(S.jsx)("h1",{style:{borderStyle:"solid",fontSize:"50px",marginTop:"15px",width:"fit-content",color:"Black",backgroundColor:"red"},children:"N\xe3o existem produtos nesta fase!"})})}}]),n}(d.Component),Q=q,L=function(t){Object(B.a)(n,t);var e=Object(R.a)(n);function n(){var t;Object(w.a)(this,n);for(var o=arguments.length,r=new Array(o),l=0;l<o;l++)r[l]=arguments[l];return(t=e.call.apply(e,[this].concat(r))).state={all:[]},t}return Object(E.a)(n,[{key:"componentDidMount",value:function(){var t=Object(T.a)(D.a.mark((function t(){var e;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P.get("");case 2:e=t.sent,console.log(e.data),this.setState({all:e.data});case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t,e,n,o=this.state.all,r=null===o||void 0===o||null===(t=o.value)||void 0===t?void 0:t.filter((function(t){return"03 - CORTE"===t.fase}));null===o||void 0===o||null===(e=o.value)||void 0===e||e.shift();var l=null===o||void 0===o||null===(n=o.value)||void 0===n?void 0:n.filter((function(t){return"03 - CORTE"===t.fase}));return(null===r||void 0===r?void 0:r.length)>1&&(r.length=1),(null===l||void 0===l?void 0:l.length)>5&&(l.length=5),(null===r||void 0===r?void 0:r.length)>0?Object(S.jsx)("center",{children:Object(S.jsx)("div",{children:null===r||void 0===r?void 0:r.map((function(t){var e=t.fase,n=t.produto,o=t.qtde;return Object(S.jsxs)("ul",{children:[Object(S.jsxs)("h1",{style:{borderStyle:"solid",fontSize:"50px",marginTop:"15px",width:"fit-content",color:"Black",backgroundColor:"#15CDFC"},children:[Object(S.jsx)("h1",{children:"Opera\xe7\xe3o"}),"FASE : ",e]}),Object(S.jsxs)("ul",{style:{borderStyle:"solid",fontSize:"40px",marginTop:"15px",width:"fit-content",color:"Black",backgroundColor:"#15CDFC"},children:["PRODUTO : ",n]}),Object(S.jsx)("b",{children:Object(S.jsxs)("ul",{style:{borderStyle:"solid",fontSize:"30px",marginTop:"15px",width:"fit-content",color:"Black",backgroundColor:"#15CDFC"},children:["QUANTIDADE: ",o]})}),Object(S.jsxs)("h3",{style:{borderStyle:"solid",marginTop:"15px",width:"fit-content",color:"Black",backgroundColor:"#15CDFC"},children:[" ",null===l||void 0===l?void 0:l.map((function(t){var e=t.produto;return Object(S.jsxs)("ul",{children:["Proximos Produtos: ",e]})}))," "]})]},e)}))})}):Object(S.jsx)("center",{children:Object(S.jsx)("h1",{style:{borderStyle:"solid",fontSize:"50px",marginTop:"15px",width:"fit-content",color:"Black",backgroundColor:"red"},children:"N\xe3o existem produtos nesta fase!"})})}}]),n}(d.Component),X=L,J=function(t){Object(B.a)(n,t);var e=Object(R.a)(n);function n(){var t;Object(w.a)(this,n);for(var o=arguments.length,r=new Array(o),l=0;l<o;l++)r[l]=arguments[l];return(t=e.call.apply(e,[this].concat(r))).state={all:[]},t}return Object(E.a)(n,[{key:"componentDidMount",value:function(){var t=Object(T.a)(D.a.mark((function t(){var e;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P.get("");case 2:e=t.sent,console.log(e.data),this.setState({all:e.data});case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t,e,n,o=this.state.all,r=null===o||void 0===o||null===(t=o.value)||void 0===t?void 0:t.filter((function(t){return"06 - COSTURA"===t.fase}));null===o||void 0===o||null===(e=o.value)||void 0===e||e.shift();var l=null===o||void 0===o||null===(n=o.value)||void 0===n?void 0:n.filter((function(t){return"06 - COSTURA"===t.fase}));return(null===r||void 0===r?void 0:r.length)>1&&(r.length=1),(null===l||void 0===l?void 0:l.length)>5&&(l.length=5),(null===r||void 0===r?void 0:r.length)>0?Object(S.jsx)("center",{children:Object(S.jsx)("div",{children:null===r||void 0===r?void 0:r.map((function(t){var e=t.fase,n=t.produto,o=t.qtde;return Object(S.jsxs)("ul",{children:[Object(S.jsxs)("h1",{style:{borderStyle:"solid",fontSize:"50px",marginTop:"15px",width:"fit-content",color:"Black",backgroundColor:"#15CDFC"},children:[Object(S.jsx)("h1",{children:"Opera\xe7\xe3o"}),"FASE : ",e]}),Object(S.jsxs)("ul",{style:{borderStyle:"solid",fontSize:"40px",marginTop:"15px",width:"fit-content",color:"Black",backgroundColor:"#15CDFC"},children:["PRODUTO : ",n]}),Object(S.jsx)("b",{children:Object(S.jsxs)("ul",{style:{borderStyle:"solid",fontSize:"30px",marginTop:"15px",width:"fit-content",color:"Black",backgroundColor:"#15CDFC"},children:["QUANTIDADE: ",o]})}),Object(S.jsxs)("h3",{style:{borderStyle:"solid",marginTop:"15px",width:"fit-content",color:"Black",backgroundColor:"#15CDFC"},children:[" ",null===l||void 0===l?void 0:l.map((function(t){var e=t.produto;return Object(S.jsxs)("ul",{children:["Proximos Produtos: ",e]})}))," "]})]},e)}))})}):Object(S.jsx)("center",{children:Object(S.jsx)("h1",{style:{borderStyle:"solid",fontSize:"50px",marginTop:"15px",width:"fit-content",color:"Black",backgroundColor:"red"},children:"N\xe3o existem produtos nesta fase!"})})}}]),n}(d.Component),_=J,$=function(t){Object(B.a)(n,t);var e=Object(R.a)(n);function n(){var t;Object(w.a)(this,n);for(var o=arguments.length,r=new Array(o),l=0;l<o;l++)r[l]=arguments[l];return(t=e.call.apply(e,[this].concat(r))).state={all:[]},t}return Object(E.a)(n,[{key:"componentDidMount",value:function(){var t=Object(T.a)(D.a.mark((function t(){var e;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P.get("");case 2:e=t.sent,console.log(e.data),this.setState({all:e.data});case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t,e,n,o=this.state.all,r=null===o||void 0===o||null===(t=o.value)||void 0===t?void 0:t.filter((function(t){return"05 - DISTRIBUICAO"===t.fase}));null===o||void 0===o||null===(e=o.value)||void 0===e||e.shift();var l=null===o||void 0===o||null===(n=o.value)||void 0===n?void 0:n.filter((function(t){return"05 - DISTRIBUICAO"===t.fase}));return(null===r||void 0===r?void 0:r.length)>1&&(r.length=1),(null===l||void 0===l?void 0:l.length)>5&&(l.length=5),(null===r||void 0===r?void 0:r.length)>0?Object(S.jsx)("center",{children:Object(S.jsx)("div",{children:null===r||void 0===r?void 0:r.map((function(t){var e=t.fase,n=t.produto,o=t.qtde;return Object(S.jsxs)("ul",{children:[Object(S.jsxs)("h1",{style:{borderStyle:"solid",fontSize:"50px",marginTop:"15px",width:"fit-content",color:"Black",backgroundColor:"#15CDFC"},children:[Object(S.jsx)("h1",{children:"Opera\xe7\xe3o"}),"FASE : ",e]}),Object(S.jsxs)("ul",{style:{borderStyle:"solid",fontSize:"40px",marginTop:"15px",width:"fit-content",color:"Black",backgroundColor:"#15CDFC"},children:["PRODUTO : ",n]}),Object(S.jsx)("b",{children:Object(S.jsxs)("ul",{style:{borderStyle:"solid",fontSize:"30px",marginTop:"15px",width:"fit-content",color:"Black",backgroundColor:"#15CDFC"},children:["QUANTIDADE: ",o]})}),Object(S.jsxs)("h3",{style:{borderStyle:"solid",marginTop:"15px",width:"fit-content",color:"Black",backgroundColor:"#15CDFC"},children:[" ",null===l||void 0===l?void 0:l.map((function(t){var e=t.produto;return Object(S.jsxs)("ul",{children:["Proximos Produtos: ",e]})}))," "]})]},e)}))})}):Object(S.jsx)("center",{children:Object(S.jsx)("h1",{style:{borderStyle:"solid",fontSize:"50px",marginTop:"15px",width:"fit-content",color:"Black",backgroundColor:"red"},children:"N\xe3o existem produtos nesta fase!"})})}}]),n}(d.Component),G=$,H=function(t){Object(B.a)(n,t);var e=Object(R.a)(n);function n(){var t;Object(w.a)(this,n);for(var o=arguments.length,r=new Array(o),l=0;l<o;l++)r[l]=arguments[l];return(t=e.call.apply(e,[this].concat(r))).state={all:[]},t}return Object(E.a)(n,[{key:"componentDidMount",value:function(){var t=Object(T.a)(D.a.mark((function t(){var e;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P.get("");case 2:e=t.sent,console.log(e.data),this.setState({all:e.data});case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t,e,n,o=this.state.all,r=null===o||void 0===o||null===(t=o.value)||void 0===t?void 0:t.filter((function(t){return"14 - EXPEDICAO"===t.fase}));null===o||void 0===o||null===(e=o.value)||void 0===e||e.shift();var l=null===o||void 0===o||null===(n=o.value)||void 0===n?void 0:n.filter((function(t){return"14 - EXPEDICAO"===t.fase}));return(null===r||void 0===r?void 0:r.length)>1&&(r.length=1),(null===l||void 0===l?void 0:l.length)>5&&(l.length=5),(null===r||void 0===r?void 0:r.length)>0?Object(S.jsx)("center",{children:Object(S.jsx)("div",{children:null===r||void 0===r?void 0:r.map((function(t){var e=t.fase,n=t.produto,o=t.qtde;return Object(S.jsxs)("ul",{children:[Object(S.jsxs)("h1",{style:{borderStyle:"solid",fontSize:"50px",marginTop:"15px",width:"fit-content",color:"Black",backgroundColor:"#15CDFC"},children:[Object(S.jsx)("h1",{children:"Opera\xe7\xe3o"}),"FASE : ",e]}),Object(S.jsxs)("ul",{style:{borderStyle:"solid",fontSize:"40px",marginTop:"15px",width:"fit-content",color:"Black",backgroundColor:"#15CDFC"},children:["PRODUTO : ",n]}),Object(S.jsx)("b",{children:Object(S.jsxs)("ul",{style:{borderStyle:"solid",fontSize:"30px",marginTop:"15px",width:"fit-content",color:"Black",backgroundColor:"#15CDFC"},children:["QUANTIDADE: ",o]})}),Object(S.jsxs)("h3",{style:{borderStyle:"solid",marginTop:"15px",marginBottom:"200px",width:"fit-content",color:"Black",backgroundColor:"#15CDFC"},children:[" ",null===l||void 0===l?void 0:l.map((function(t){var e=t.produto;return Object(S.jsxs)("ul",{children:["Proximos Produtos: ",e]})}))," "]})]},e)}))})}):Object(S.jsx)("center",{children:Object(S.jsx)("h1",{style:{borderStyle:"solid",fontSize:"50px",marginTop:"15px",width:"fit-content",color:"Black",backgroundColor:"red"},children:"N\xe3o existem produtos nesta fase!"})})}}]),n}(d.Component),K=H,W=function(t){Object(B.a)(n,t);var e=Object(R.a)(n);function n(){var t;Object(w.a)(this,n);for(var o=arguments.length,r=new Array(o),l=0;l<o;l++)r[l]=arguments[l];return(t=e.call.apply(e,[this].concat(r))).state={all:[]},t}return Object(E.a)(n,[{key:"componentDidMount",value:function(){var t=Object(T.a)(D.a.mark((function t(){var e;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P.get("");case 2:e=t.sent,console.log(e.data),this.setState({all:e.data});case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t,e,n,o=this.state.all,r=null===o||void 0===o||null===(t=o.value)||void 0===t?void 0:t.filter((function(t){return"11 - MAT. PARA ACABAMENTO"===t.fase}));null===o||void 0===o||null===(e=o.value)||void 0===e||e.shift();var l=null===o||void 0===o||null===(n=o.value)||void 0===n?void 0:n.filter((function(t){return"11 - MAT. PARA ACABAMENTO"===t.fase}));return(null===r||void 0===r?void 0:r.length)>1&&(r.length=1),(null===l||void 0===l?void 0:l.length)>5&&(l.length=5),(null===r||void 0===r?void 0:r.length)>0?Object(S.jsx)("center",{children:Object(S.jsx)("div",{children:null===r||void 0===r?void 0:r.map((function(t){var e=t.fase,n=t.produto,o=t.qtde;return Object(S.jsxs)("ul",{children:[Object(S.jsxs)("h1",{style:{borderStyle:"solid",fontSize:"50px",marginTop:"15px",width:"fit-content",color:"Black",backgroundColor:"#15CDFC"},children:[Object(S.jsx)("h1",{children:"Opera\xe7\xe3o"}),"FASE : ",e]}),Object(S.jsxs)("ul",{style:{borderStyle:"solid",fontSize:"40px",marginTop:"15px",width:"fit-content",color:"Black",backgroundColor:"#15CDFC"},children:["PRODUTO : ",n]}),Object(S.jsx)("b",{children:Object(S.jsxs)("ul",{style:{borderStyle:"solid",fontSize:"30px",marginTop:"15px",width:"fit-content",color:"Black",backgroundColor:"#15CDFC"},children:["QUANTIDADE: ",o]})}),Object(S.jsxs)("h3",{style:{borderStyle:"solid",marginTop:"15px",width:"fit-content",color:"Black",backgroundColor:"#15CDFC"},children:[" ",null===l||void 0===l?void 0:l.map((function(t){var e=t.produto;return Object(S.jsxs)("ul",{children:["Proximos Produtos: ",e]})}))," "]})]},e)}))})}):Object(S.jsx)("center",{children:Object(S.jsx)("h1",{style:{borderStyle:"solid",fontSize:"50px",marginTop:"15px",width:"fit-content",color:"Black",backgroundColor:"red"},children:"N\xe3o existem produtos nesta fase!"})})}}]),n}(d.Component),Y=W,Z=function(t){Object(B.a)(n,t);var e=Object(R.a)(n);function n(){var t;Object(w.a)(this,n);for(var o=arguments.length,r=new Array(o),l=0;l<o;l++)r[l]=arguments[l];return(t=e.call.apply(e,[this].concat(r))).state={all:[]},t}return Object(E.a)(n,[{key:"componentDidMount",value:function(){var t=Object(T.a)(D.a.mark((function t(){var e;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P.get("");case 2:e=t.sent,console.log(e.data),this.setState({all:e.data});case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t,e,n,o=this.state.all,r=null===o||void 0===o||null===(t=o.value)||void 0===t?void 0:t.filter((function(t){return"04 - MAT. PARA COSTURA"===t.fase}));null===o||void 0===o||null===(e=o.value)||void 0===e||e.shift();var l=null===o||void 0===o||null===(n=o.value)||void 0===n?void 0:n.filter((function(t){return"04 - MAT. PARA COSTURA"===t.fase}));return(null===r||void 0===r?void 0:r.length)>1&&(r.length=1),(null===l||void 0===l?void 0:l.length)>5&&(l.length=5),(null===r||void 0===r?void 0:r.length)>0?Object(S.jsx)("center",{children:Object(S.jsx)("div",{children:null===r||void 0===r?void 0:r.map((function(t){var e=t.fase,n=t.produto,o=t.qtde;return Object(S.jsxs)("ul",{children:[Object(S.jsxs)("h1",{style:{borderStyle:"solid",fontSize:"50px",marginTop:"15px",width:"fit-content",color:"Black",backgroundColor:"#15CDFC"},children:[Object(S.jsx)("h1",{children:"Opera\xe7\xe3o"}),"FASE : ",e]}),Object(S.jsxs)("ul",{style:{borderStyle:"solid",fontSize:"40px",marginTop:"15px",width:"fit-content",color:"Black",backgroundColor:"#15CDFC"},children:["PRODUTO : ",n]}),Object(S.jsx)("b",{children:Object(S.jsxs)("ul",{style:{borderStyle:"solid",fontSize:"30px",marginTop:"15px",width:"fit-content",color:"Black",backgroundColor:"#15CDFC"},children:["QUANTIDADE: ",o]})}),Object(S.jsxs)("h3",{style:{borderStyle:"solid",marginTop:"15px",width:"fit-content",color:"Black",backgroundColor:"#15CDFC"},children:[" ",null===l||void 0===l?void 0:l.map((function(t){var e=t.produto;return Object(S.jsxs)("ul",{children:["Proximos Produtos: ",e]})}))," "]})]},e)}))})}):Object(S.jsx)("center",{children:Object(S.jsx)("h1",{style:{borderStyle:"solid",fontSize:"50px",marginTop:"15px",width:"fit-content",color:"Black",backgroundColor:"red"},children:"N\xe3o existem produtos nesta fase!"})})}}]),n}(d.Component),tt=Z,et=function(t){Object(B.a)(n,t);var e=Object(R.a)(n);function n(){var t;Object(w.a)(this,n);for(var o=arguments.length,r=new Array(o),l=0;l<o;l++)r[l]=arguments[l];return(t=e.call.apply(e,[this].concat(r))).state={all:[]},t}return Object(E.a)(n,[{key:"componentDidMount",value:function(){var t=Object(T.a)(D.a.mark((function t(){var e;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P.get("");case 2:e=t.sent,console.log(e.data),this.setState({all:e.data});case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t,e,n,o=this.state.all,r=null===o||void 0===o||null===(t=o.value)||void 0===t?void 0:t.filter((function(t){return"01 - PCP"===t.fase}));null===o||void 0===o||null===(e=o.value)||void 0===e||e.shift();var l=null===o||void 0===o||null===(n=o.value)||void 0===n?void 0:n.filter((function(t){return"01 - PCP"===t.fase}));return(null===r||void 0===r?void 0:r.length)>1&&(r.length=1),(null===l||void 0===l?void 0:l.length)>5&&(l.length=5),(null===r||void 0===r?void 0:r.length)>0?Object(S.jsx)("center",{children:Object(S.jsxs)("div",{children:[console.log(r),null===r||void 0===r?void 0:r.map((function(t){var e=t.fase,n=t.produto,o=t.qtde;return Object(S.jsxs)("ul",{children:[Object(S.jsxs)("h1",{style:{borderStyle:"solid",fontSize:"50px",marginTop:"15px",width:"fit-content",color:"Black",backgroundColor:"#15CDFC"},children:[Object(S.jsx)("h1",{children:"Opera\xe7\xe3o"}),"FASE : ",e]}),Object(S.jsxs)("ul",{style:{borderStyle:"solid",fontSize:"40px",marginTop:"15px",width:"fit-content",color:"Black",backgroundColor:"#15CDFC"},children:["PRODUTO : ",n]}),Object(S.jsx)("b",{children:Object(S.jsxs)("ul",{style:{borderStyle:"solid",fontSize:"30px",marginTop:"15px",width:"fit-content",color:"Black",backgroundColor:"#15CDFC"},children:["QUANTIDADE: ",o]})}),Object(S.jsxs)("h3",{style:{borderStyle:"solid",marginTop:"15px",width:"fit-content",color:"Black",backgroundColor:"#15CDFC"},children:[" ",null===l||void 0===l?void 0:l.map((function(t){var e=t.produto;return Object(S.jsxs)("ul",{children:["Proximos Produtos: ",e]})}))," "]})]},e)}))]})}):Object(S.jsx)("center",{children:Object(S.jsx)("h1",{style:{borderStyle:"solid",fontSize:"50px",marginTop:"15px",width:"fit-content",color:"Black",backgroundColor:"red"},children:"N\xe3o existem produtos nesta fase!"})})}}]),n}(d.Component),nt=et,ot=function(t){Object(B.a)(n,t);var e=Object(R.a)(n);function n(){var t;Object(w.a)(this,n);for(var o=arguments.length,r=new Array(o),l=0;l<o;l++)r[l]=arguments[l];return(t=e.call.apply(e,[this].concat(r))).state={all:[]},t}return Object(E.a)(n,[{key:"componentDidMount",value:function(){var t=Object(T.a)(D.a.mark((function t(){var e;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P.get("");case 2:e=t.sent,console.log(e.data),this.setState({all:e.data});case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t,e,n,o=this.state.all,r=null===o||void 0===o||null===(t=o.value)||void 0===t?void 0:t.filter((function(t){return"13 - REVISAO DE ACABAMENTO"===t.fase}));null===o||void 0===o||null===(e=o.value)||void 0===e||e.shift();var l=null===o||void 0===o||null===(n=o.value)||void 0===n?void 0:n.filter((function(t){return"13 - REVISAO DE ACABAMENTO"===t.fase}));return(null===r||void 0===r?void 0:r.length)>1&&(r.length=1),(null===l||void 0===l?void 0:l.length)>5&&(l.length=5),(null===r||void 0===r?void 0:r.length)>0?Object(S.jsx)("center",{children:Object(S.jsx)("div",{children:null===r||void 0===r?void 0:r.map((function(t){var e=t.fase,n=t.produto,o=t.qtde;return Object(S.jsxs)("ul",{children:[Object(S.jsxs)("h1",{style:{borderStyle:"solid",fontSize:"50px",marginTop:"15px",width:"fit-content",color:"Black",backgroundColor:"#15CDFC"},children:[Object(S.jsx)("h1",{children:"Opera\xe7\xe3o"}),"FASE : ",e]}),Object(S.jsxs)("ul",{style:{borderStyle:"solid",fontSize:"40px",marginTop:"15px",width:"fit-content",color:"Black",backgroundColor:"#15CDFC"},children:["PRODUTO : ",n]}),Object(S.jsx)("b",{children:Object(S.jsxs)("ul",{style:{borderStyle:"solid",fontSize:"30px",marginTop:"15px",width:"fit-content",color:"Black",backgroundColor:"#15CDFC"},children:["QUANTIDADE: ",o]})}),Object(S.jsxs)("h3",{style:{borderStyle:"solid",marginTop:"15px",width:"fit-content",color:"Black",backgroundColor:"#15CDFC"},children:[" ",null===l||void 0===l?void 0:l.map((function(t){var e=t.produto;return Object(S.jsxs)("ul",{children:["Proximos Produtos: ",e]})}))," "]})]},e)}))})}):Object(S.jsx)("center",{children:Object(S.jsx)("h1",{style:{borderStyle:"solid",fontSize:"50px",marginTop:"15px",width:"fit-content",color:"Black",backgroundColor:"red"},children:"N\xe3o existem produtos nesta fase!"})})}}]),n}(d.Component),rt=ot,lt=function(t){Object(B.a)(n,t);var e=Object(R.a)(n);function n(){var t;Object(w.a)(this,n);for(var o=arguments.length,r=new Array(o),l=0;l<o;l++)r[l]=arguments[l];return(t=e.call.apply(e,[this].concat(r))).state={all:[]},t}return Object(E.a)(n,[{key:"componentDidMount",value:function(){var t=Object(T.a)(D.a.mark((function t(){var e;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P.get("");case 2:e=t.sent,console.log(e.data),this.setState({all:e.data});case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t,e,n,o=this.state.all,r=null===o||void 0===o||null===(t=o.value)||void 0===t?void 0:t.filter((function(t){return"10- REVISAO DE BORDADO"===t.fase}));null===o||void 0===o||null===(e=o.value)||void 0===e||e.shift();var l=null===o||void 0===o||null===(n=o.value)||void 0===n?void 0:n.filter((function(t){return"10- REVISAO DE BORDADO"===t.fase}));return(null===r||void 0===r?void 0:r.length)>1&&(r.length=1),(null===l||void 0===l?void 0:l.length)>5&&(l.length=5),(null===r||void 0===r?void 0:r.length)>0?Object(S.jsx)("center",{children:Object(S.jsx)("div",{children:null===r||void 0===r?void 0:r.map((function(t){var e=t.fase,n=t.produto,o=t.qtde;return Object(S.jsxs)("ul",{children:[Object(S.jsxs)("h1",{style:{borderStyle:"solid",fontSize:"50px",marginTop:"15px",width:"fit-content",color:"Black",backgroundColor:"#15CDFC"},children:[Object(S.jsx)("h1",{children:"Opera\xe7\xe3o"}),"FASE : ",e]}),Object(S.jsxs)("ul",{style:{borderStyle:"solid",fontSize:"40px",marginTop:"15px",width:"fit-content",color:"Black",backgroundColor:"#15CDFC"},children:["PRODUTO : ",n]}),Object(S.jsx)("b",{children:Object(S.jsxs)("ul",{style:{borderStyle:"solid",fontSize:"30px",marginTop:"15px",width:"fit-content",color:"Black",backgroundColor:"#15CDFC"},children:["QUANTIDADE: ",o]})}),Object(S.jsxs)("h3",{style:{borderStyle:"solid",marginTop:"15px",width:"fit-content",color:"Black",backgroundColor:"#15CDFC"},children:[" ",null===l||void 0===l?void 0:l.map((function(t){var e=t.produto;return Object(S.jsxs)("ul",{children:["Proximos Produtos: ",e]})}))," "]})]},e)}))})}):Object(S.jsx)("center",{children:Object(S.jsx)("h1",{style:{borderStyle:"solid",fontSize:"50px",marginTop:"15px",width:"fit-content",color:"Black",backgroundColor:"red"},children:"N\xe3o existem produtos nesta fase!"})})}}]),n}(d.Component),it=lt,ct=function(t){Object(B.a)(n,t);var e=Object(R.a)(n);function n(){var t;Object(w.a)(this,n);for(var o=arguments.length,r=new Array(o),l=0;l<o;l++)r[l]=arguments[l];return(t=e.call.apply(e,[this].concat(r))).state={all:[]},t}return Object(E.a)(n,[{key:"componentDidMount",value:function(){var t=Object(T.a)(D.a.mark((function t(){var e;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P.get("");case 2:e=t.sent,this.setState({all:e.data});case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t,e,n,o=this.state.all,r=null===o||void 0===o||null===(t=o.value)||void 0===t?void 0:t.filter((function(t){return"02 - SEPARA\xc7\xc3O DE TECIDO "===t.fase}));null===o||void 0===o||null===(e=o.value)||void 0===e||e.shift();var l=null===o||void 0===o||null===(n=o.value)||void 0===n?void 0:n.filter((function(t){return"02 - SEPARA\xc7\xc3O DE TECIDO "===t.fase}));return(null===r||void 0===r?void 0:r.length)>1&&(r.length=1),(null===l||void 0===l?void 0:l.length)>5&&(l.length=5),(null===r||void 0===r?void 0:r.length)>0?Object(S.jsx)("center",{children:Object(S.jsx)("div",{children:null===r||void 0===r?void 0:r.map((function(t){var e=t.fase,n=t.produto,o=t.qtde;return Object(S.jsxs)("ul",{children:[Object(S.jsxs)("h1",{style:{borderStyle:"solid",fontSize:"50px",marginTop:"15px",width:"fit-content",color:"Black",backgroundColor:"#15CDFC"},children:[Object(S.jsx)("h1",{children:"Opera\xe7\xe3o"}),"FASE : ",e]}),Object(S.jsxs)("ul",{style:{borderStyle:"solid",fontSize:"40px",marginTop:"15px",width:"fit-content",color:"Black",backgroundColor:"#15CDFC"},children:["PRODUTO : ",n]}),Object(S.jsx)("b",{children:Object(S.jsxs)("ul",{style:{borderStyle:"solid",fontSize:"30px",marginTop:"15px",width:"fit-content",color:"Black",backgroundColor:"#15CDFC"},children:["QUANTIDADE: ",o]})}),Object(S.jsxs)("h3",{style:{borderStyle:"solid",marginTop:"15px",width:"fit-content",color:"Black",backgroundColor:"#15CDFC"},children:[" ",null===l||void 0===l?void 0:l.map((function(t){var e=t.produto;return Object(S.jsxs)("ul",{children:["Proximos Produtos: ",e]})}))," "]})]},e)}))})}):Object(S.jsx)("center",{children:Object(S.jsx)("h1",{style:{borderStyle:"solid",fontSize:"50px",marginTop:"15px",width:"fit-content",color:"Black",backgroundColor:"red"},children:"N\xe3o existem produtos nesta fase!"})})}}]),n}(d.Component),at=ct;var dt=function(){return setTimeout((function(){}),3e5),Object(S.jsxs)(p.a,{children:[Object(S.jsx)(m,{}),Object(S.jsx)("div",{className:"app-container",children:Object(S.jsxs)(k.c,{children:[Object(S.jsx)(k.a,{path:"/REVISAO",element:Object(S.jsx)(z,{})}),Object(S.jsx)(k.a,{path:"/ACABAMENTO",element:Object(S.jsx)(U,{})}),Object(S.jsx)(k.a,{path:"/BORDADO",element:Object(S.jsx)(V,{})}),Object(S.jsx)(k.a,{path:"/CONSERTO",element:Object(S.jsx)(Q,{})}),Object(S.jsx)(k.a,{path:"/CORTE",element:Object(S.jsx)(X,{})}),Object(S.jsx)(k.a,{path:"/COSTURA",element:Object(S.jsx)(_,{})}),Object(S.jsx)(k.a,{path:"/DISTRIBUICAO",element:Object(S.jsx)(G,{})}),Object(S.jsx)(k.a,{path:"/EXPEDICAO",element:Object(S.jsx)(K,{})}),Object(S.jsx)(k.a,{path:"/MATERIAL",element:Object(S.jsx)(Y,{})}),Object(S.jsx)(k.a,{path:"/MATERIALCOSTURA",element:Object(S.jsx)(tt,{})}),Object(S.jsx)(k.a,{path:"/PCP",element:Object(S.jsx)(nt,{})}),Object(S.jsx)(k.a,{path:"/REVISAOACABAMENTO",element:Object(S.jsx)(rt,{})}),Object(S.jsx)(k.a,{path:"/REVISAOBORDADO",element:Object(S.jsx)(it,{})}),Object(S.jsx)(k.a,{path:"/SEPARACAO",element:Object(S.jsx)(at,{})})]})})]})};setTimeout((function(){}),3e5),h.a.render(Object(S.jsx)(s.a.StrictMode,{children:Object(S.jsx)("div",{style:{backgroundImage:"url(".concat(j,")"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",width:"100vw",height:"100vh"},children:Object(S.jsx)(dt,{})})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.ccb85617.chunk.js.map