(this.webpackJsonpclickygame=this.webpackJsonpclickygame||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"image":"images/allmight.jpg","name":"All Might"},{"id":2,"image":"images/asta.jpg","name":"Asta"},{"id":3,"image":"images/deku.jpg","name":"Izuku Midoriya"},{"id":4,"image":"images/genos.jpg","name":"Genos"},{"id":5,"image":"images/goku.jpg","name":"Goku"},{"id":6,"image":"images/luck.jpg","name":"Luck Voltia"},{"id":7,"image":"images/luffy.jpg","name":"Monkey D. Luffy"},{"id":8,"image":"images/saitama.jpg","name":"Saitama"},{"id":9,"image":"images/sanji.jpg","name":"Vinsmoke Sanji"},{"id":10,"image":"images/todoroki.jpg","name":"Shoto Todoroki"},{"id":11,"image":"images/wizardking.jpg","name":"Julius Novachrono"},{"id":12,"image":"images/zoro.jpg","name":"Roronora Zoro"}]')},function(e,a,t){e.exports=t(18)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(7),c=t.n(r),o=(t(14),t(1)),s=t(2),m=t(4),l=t(3),d=t(5),u=(t(15),function(e){return i.a.createElement("div",{className:"jumbotron jumbotron-fluid"},i.a.createElement("div",{className:"container"},i.a.createElement("h1",{className:"display-4 text-center font-weight-bold"},"Hero Clicky Game!"),i.a.createElement("p",{className:"lead text-center"},"Click on an image to earn points, but don't click on any more than once!")))});var g=function(e){return i.a.createElement("li",{className:"nav-item text-light score",name:"score topScore"},"Score: ",e.score," | Top Score: ",e.topScore)};var p=function(e){return i.a.createElement("li",{className:"nav-item text-light center-align",name:"message"},e.message)},h=(t(16),function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("nav",{className:"navbar navbar-expand-lg"},i.a.createElement("ul",{className:"navbar-nav ul-auto"},i.a.createElement("li",{className:"navbar-brand"},i.a.createElement("a",{href:"/"},"Hero Clicky Game")),i.a.createElement(p,{message:this.props.message}),i.a.createElement(g,{score:this.props.score,topScore:this.props.topScore})))}}]),a}(n.Component)),k=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){this.id=this.props.id}},{key:"render",value:function(){return i.a.createElement("div",{className:"hero"},i.a.createElement("img",{className:"clicked",src:this.props.image,alt:"character",id:this.props.id,onClick:this.props.handleCardClick}))}}]),a}(n.Component);var f=function(e){var a=e.children;return i.a.createElement("div",{className:"container"},a)};var v=function(e){var a=e.children;return i.a.createElement("div",{className:"row"},a)};var j=function(e){var a=e.children;return i.a.createElement("div",{className:"col-md"},a)},b=t(8),E=(t(17),function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(m.a)(this,Object(l.a)(a).call(this,e))).resetGame=function(){t.setState({score:0,clicked:[],message:"Click a card to begin!"}),t.randomizeCards()},t.loseGame=function(){t.setState({message:"GAME OVER!"})},t.winGame=function(){t.setState({message:"YOU WIN!"})},t.randomizeCards=function(){for(var e=t.state.cards,a=e.length-1;a>0;a--){var n=Math.floor(Math.random()*(a+1)),i=[e[n],e[a]];e[a]=i[0],e[n]=i[1]}t.setState({cards:e})},t.handleCardClick=function(e){var a=e.target.id;if(t.state.clicked.includes(a))t.loseGame(),t.setState({clicked:[],score:0});else{t.state.clicked.push(a);var n=t.state.score+1,i=n>t.state.topScore?n:t.state.topScore;t.setState({score:n,topScore:i,message:"Good choice!"}),12===t.state.clicked.length&&(t.winGame(),t.setState({clicked:[],score:0})),t.randomizeCards()}},t.state={score:0,topScore:0,cards:b,clicked:[],message:"Click a card to begin!"},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"componentWillMount",value:function(){this.randomizeCards()}},{key:"render",value:function(){var e=this;return i.a.createElement("main",null,i.a.createElement(h,{score:this.state.score,topScore:this.state.topScore,message:this.state.message}),i.a.createElement(u,null),i.a.createElement(f,null,i.a.createElement(v,null,i.a.createElement(j,null,this.state.cards.map((function(a,t){return i.a.createElement(k,{handleCardClick:e.handleCardClick.bind(e),id:a.id,key:a.id,image:a.image,clicked:a.clicked})}))))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.ea425be1.chunk.js.map