(window.webpackJsonptictactoetest=window.webpackJsonptictactoetest||[]).push([[4],{173:function(e,a,t){},174:function(e,a,t){},175:function(e,a,t){},178:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(45),c=t(44),m=t(84),s=t(19),o=t(181),i=t(182),u=t(179),b=t(176),y=t(12),d=function(e){return function(a){a({payload:e,type:y.a})}},E=function(e){return function(a){a({payload:e,type:y.b})}},p=t(21),f=function(e,a){p.a.push(e,a)},v="/home",N="/game-board",w=function(e){var a=Object(l.useState)(!1),t=Object(m.a)(a,2),r=t[0],c=t[1],y=Object(l.useRef)(),E=Object(l.useRef)(),p=Object(s.c)((function(e){return e.gameReducer&&e.gameReducer.players})),v=Object(s.b)();return n.a.createElement(o.a,{className:"outer-container"},n.a.createElement(i.a,{className:"home_container"},n.a.createElement("div",{className:"title-container"},n.a.createElement("label",null,"Welcome to ",n.a.createElement("span",null,"Tic Tac Toe"))),n.a.createElement("div",{className:"form"},n.a.createElement("div",{className:"form-item"},n.a.createElement("label",null,"Player 1"),n.a.createElement(u.a,{ref:y,name:"player1",placeholder:"Player 1"}),n.a.createElement("label",{className:r?"error":"error-hidden"},"Please enter valid name")),n.a.createElement("div",{className:"form-item"},n.a.createElement("label",null,"Player 2"),n.a.createElement(u.a,{ref:E,name:"player2",placeholder:"Player 2"}),n.a.createElement("label",{className:r?"error":"error-hidden"},"Please enter valid name"))),n.a.createElement("div",{className:"button-container"},n.a.createElement(b.a,{className:"continue-button",htmlType:"submit",onClick:function(e){var a=y.current.state.value,t=E.current.state.value;a&&a.length>3&&a.length<10&&t&&t.length>3&&t.length<10?(p[0].name=a,p[1].name=t,c(!1),v(d(p)),f(N)):c(!0)}},"Continue"))))},h=(t(173),function(e){return n.a.createElement("div",{className:"home_page"},n.a.createElement("div",{className:"name-container"},n.a.createElement("label",null,"Tic"),n.a.createElement("label",null,"Tac"),n.a.createElement("label",null,"Toe")),n.a.createElement("div",{className:"home_content"},n.a.createElement(w,null)))}),g=(t(174),[{player:"",symbol:""},{player:"",symbol:""},{player:"",symbol:""},{player:"",symbol:""},{player:"",symbol:""},{player:"",symbol:""},{player:"",symbol:""},{player:"",symbol:""},{player:"",symbol:""}]),j=0,O=function(e){var a=Object(l.useState)(g),t=Object(m.a)(a,2),r=t[0],c=t[1];return n.a.createElement("div",{className:"board"},n.a.createElement("div",{className:"outer-container"},n.a.createElement("div",{className:"board-container",onClick:function(a){"won"===e.result?a.preventDefault():a.target.id&&!g[a.target.id].symbol&&(g[a.target.id].player=e.currentPlayer,g[a.target.id].symbol=e.players[e.currentPlayer].symbol,c(g),j+=1,e.onCellClick(g,j))}},e.gameStatus?r&&r.map((function(e,a){return n.a.createElement("div",{id:a,className:"cell"},n.a.createElement("label",null,e.symbol))})):n.a.createElement("div",{className:"winner"},n.a.createElement("label",{className:"show"},"Winner"),n.a.createElement("div",{className:"player"},n.a.createElement("label",{className:"playerNumber"},"Player ".concat(e.winner.index+1)),n.a.createElement("label",{className:"name"},e.winner.name),n.a.createElement("label",{className:"symbol"},e.winner.symbol))))),n.a.createElement("button",{className:"won"===e.result||"draw"===e.result?"play-next-btn":"play-next-btn-hidden",onClick:function(){var a=[];g.forEach((function(e){e.symbol="",e.player="",a.push({player:"",symbol:""})})),j=0,c(a),e.onPlayNext()}},"Play next round"))},P=function(e){var a=e.player.wins,t=[!1,!1,!1,!1,!1,!1];if(a>0)for(var l=0;l<a;l++)t[l]=!0;return n.a.createElement("div",{className:"player-container"},e.winner&&e.winner.symbol===e.player.symbol?"Winner":"draw"===e.result?n.a.createElement("label",null,"Draw"):n.a.createElement("label",{className:e.player.index===e.currentPlayer?"show":"hide"},"Your Turn"),n.a.createElement("div",{className:"won"===e.result&&e.winner&&e.winner.symbol===e.player.symbol?"player-highlight":"player"},n.a.createElement("label",{className:"playerNumber"},"Player ".concat(e.player.index+1)),n.a.createElement("label",{className:"name"},e.player.name),n.a.createElement("label",{className:"symbol"},e.player.symbol)),n.a.createElement("div",{className:"steps-container"},t.map((function(e,a){return n.a.createElement("div",{key:a,className:e?"win":"win-faded"})}))))},T=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],x=function(e){var a=Object(l.useState)(0),t=Object(m.a)(a,2),r=t[0],c=t[1],o=Object(l.useState)(void 0),i=Object(m.a)(o,2),u=i[0],b=i[1],y=Object(l.useState)(!0),d=Object(m.a)(y,2),p=d[0],f=d[1],v=Object(l.useState)(""),N=Object(m.a)(v,2),w=N[0],h=N[1],g=Object(s.c)((function(e){return e.gameReducer&&e.gameReducer.players})),j=Object(s.b)();var x=function(e,a){for(var t=void 0,l=!1,n=0;n<=7;n++){var r=T[n],c=e[r[0]],m=e[r[1]],s=e[r[2]];if(""!==c.symbol&&""!==m.symbol&&""!==s.symbol&&(c.symbol===m.symbol&&m.symbol===s.symbol)){t=c,l=!0;break}}if(l)return t.symbol===g[0].symbol?g[0].wins+=1:g[1].wins+=1,b(t),h("won"),j(E(g)),void(6!==g[0].wins&&6!==g[1].wins||(b(6===g[0].wins?g[0]:g[1]),f(!1),g[0].wins=0,g[1].wins=0,h("continue")));h(9===a?"draw":"continue")};return n.a.createElement("div",{className:"board_page"},n.a.createElement("div",{className:"name-container"},n.a.createElement("label",null,"Tic"),n.a.createElement("label",null,"Tac"),n.a.createElement("label",null,"Toe")),p&&n.a.createElement(P,{player:g[0],winner:u,result:w,currentPlayer:r}),n.a.createElement(O,{players:g,onCellClick:function(e,a){g[r],c(0===r?1:0),x(e,a)},result:w,gameStatus:p,currentPlayer:r,winner:u,onPlayNext:function(){b(null),h("continue")}}),p&&n.a.createElement(P,{player:g[1],winner:u,result:w,currentPlayer:r}))},k=function(e){return n.a.createElement("div",{className:"content"},n.a.createElement(r.a,{hashType:"noslash",basename:"/tictactoetest"},n.a.createElement(c.d,null,n.a.createElement(c.a,{exact:!0,from:"/",to:v}),n.a.createElement(c.b,{exact:!0,path:v,component:h}),n.a.createElement(c.b,{exact:!0,path:N,component:x}))))};t(175),a.default=function(e){return n.a.createElement("div",{className:"shell"},n.a.createElement("div",{className:"main_content"},n.a.createElement(k,null)))}}}]);
//# sourceMappingURL=4.bf00bffc.chunk.js.map