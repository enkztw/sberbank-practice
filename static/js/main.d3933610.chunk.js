(this["webpackJsonpdeposit-converter"]=this["webpackJsonpdeposit-converter"]||[]).push([[0],{11:function(e,t,a){e.exports=a(19)},16:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),o=a.n(c),s=(a(16),a(1)),l=a(2),i=a(4),u=a(3),m=a(5),p=(a(17),[{name:"Tinkoff",color:"255 , 221, 45",image:"http://tinkoffbankk.ru/wp-content/uploads/2018/01/BANKI001.jpg",deposit:{name:"Smart Deposit",percents:{90:5.5,180:6.5,270:6.5,360:6.5}}},{name:"Sberbank",color:"25, 187, 79",image:"https://www.sberbank.ru/portalserver/static/templates/%5BBBHOST%5D/RuMasterpageTemplate/static/icon200.png",deposit:{name:"Anniversary",percents:{90:6,180:7,270:7.5,360:9}}},{name:"Rocket Bank",color:"255, 97, 1",image:"https://appstudio.org/wp-content/uploads/apps/628392874-320x320.png",deposit:{name:"Cosy cosmos",percents:{90:4,180:5.25,270:5.5,360:5.75}}}]),h=a(6),b=a(7),d=a.n(b),f=a(10),v=[{name:"summ",text:"Deposit amount (\u20bd)"},{name:"term",text:"For a term",items:[{value:90,text:"3 months"},{value:180,text:"6 months"},{value:270,text:"9 months"},{value:360,text:"12 months",isDefault:!0}]},{name:"currency",text:"Currency",items:[{value:"RUB",text:"RUB",isDefault:!0},{value:"USD",text:"USD"},{value:"EUR",text:"EUR"}]}],y=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.items,a=this.props.color,n=this.props.name,c=this.props.onMenuItemClick;return r.a.createElement("ul",{style:{borderColor:a}},t.map((function(t){return r.a.createElement("li",{style:{borderColor:a},key:t.value,onClick:c.bind(e,n,t.value)},t.text)})))}}]),t}(r.a.Component),k=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).setRates=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(){var e=Object(f.a)(d.a.mark((function e(t){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://free.currconv.com/api/v7/convert?q=RUB_".concat(t,"&compact=ultra&apiKey=eacc4d63f1129ac90249"));case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,a.currencyMap[t].rate=r["RUB_".concat(t)];case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},a.onMenuItemClick=function(e,t){a.setState(Object(h.a)({},e,t))},a.onInputChange=function(e,t){if(!e.target.validity.valid||!e.target.value)return a.state[t];a.setState(Object(h.a)({},t,e.target.value))},a.calculate=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"summ",t=a.state.currency,n=a.currencyMap[t].rate,r=parseInt(a.state.summ),c=a.state.term,o=a.props.bank.deposit.percents[c],s=r*o/100/12*c/30;switch(e){case"income":return Math.floor(s*n);default:return Math.floor((r+s)*n)}},a.divideByDots=function(e){return e.toString().split("").reverse().reduce((function(e,t,a){return a%3===0?"".concat(t,".").concat(e):"".concat(t).concat(e)}))},a.state={summ:1e6,term:360,currency:"RUB",menus:{term:!1,currency:!1}},a.currencyMap={RUB:{rate:1,symbol:"\u20bd"},USD:{rate:null,symbol:"$"},EUR:{rate:null,symbol:"\u20ac"}},a.setRates("USD","EUR"),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"getMenu",value:function(e){this.setState((function(t){return{menus:Object(h.a)({},e,!t.menus[e])}}))}},{key:"render",value:function(){var e=this,t="rgba(".concat(this.props.bank.color,", 1)"),a="rgba(".concat(this.props.bank.color,", 0.1)"),n=this.currencyMap[this.state.currency].symbol,c=this.props.bank.deposit.percents[this.state.term],o=this.props.bank.name,s=this.props.bank.image,l=this.props.bank.deposit.name,i=this.calculate("summ"),u=this.calculate("income");return r.a.createElement("section",{className:"calculator"},r.a.createElement("div",{className:"fields"},v.map((function(a){var n=a.items,c=a.name,o=a.text,s=e.state.menus[c],l=n&&n.find((function(t){return t.value===e.state[c]})).text||e.state[c];return r.a.createElement("div",{className:"field".concat(s?" field--opened":""),style:{backgroundColor:t},key:c,onClick:n&&e.getMenu.bind(e,c)},r.a.createElement("input",{id:c,style:{borderColor:t},readOnly:n,value:l,onChange:function(t){return e.onInputChange(t,c)},maxLength:"9",minLength:"1",pattern:"[0-9]*"}),r.a.createElement("span",null,o),s&&r.a.createElement(y,{items:n,color:t,name:c,onMenuItemClick:e.onMenuItemClick}))}))),r.a.createElement("div",{className:"calculator-wrapper"},r.a.createElement("section",{style:{borderColor:t},className:"calculator__info"},r.a.createElement("p",{className:"calculator__summ"},r.a.createElement("span",null,this.divideByDots(i)),r.a.createElement("b",null,n)),r.a.createElement("p",{className:"calculator__perc"},r.a.createElement("span",null,this.divideByDots(u)),r.a.createElement("b",null,n))),r.a.createElement("section",{className:"calculator__item"},r.a.createElement("div",{style:{borderColor:t,backgroundColor:a,clipPath:"polygon(50% 0%, 50% 50%, 100% ".concat(10*c,"%, 100% 0%)")},className:"calculator__income"}),r.a.createElement("div",{className:"calculator__deposit"}),r.a.createElement("div",{className:"calculator__percent"},c,r.a.createElement("b",{style:{color:t}},"%")))),r.a.createElement("section",{className:"calculator__bank"},r.a.createElement("h2",{className:"bank-name",style:{borderColor:t}},o,r.a.createElement("img",{src:s,alt:"".concat(o," \u043b\u043e\u0433\u043e\u0442\u0438\u043f")})),r.a.createElement("h3",{className:"bank-deposit",style:{color:t}},l)))}}]),t}(r.a.Component),E=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.deposit,t="rgba(".concat(this.props.color,", 1)");return r.a.createElement("article",{className:"bank",onClick:this.props.handler},r.a.createElement("img",{src:this.props.image,alt:"".concat(this.props.name," \u043b\u043e\u0433\u043e\u0442\u0438\u043f")}),r.a.createElement("h1",{style:{borderColor:t}},this.props.name),r.a.createElement("div",{className:"info"},r.a.createElement("h2",{style:{color:t}},e.name),r.a.createElement("b",{className:"percent"},e.percents[360],"%"),r.a.createElement("span",{className:"term"},"for 360 days")))}}]),t}(r.a.Component),g=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).toggleCalculator=function(e){a.setState({isCalculator:!0,bank:e})},a.state={isCalculator:!1,bank:null},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return this.state.isCalculator?r.a.createElement(k,{bank:this.state.bank}):r.a.createElement("section",{className:"board"},p.map((function(t){return r.a.createElement(E,Object.assign({key:t.name},t,{handler:e.toggleCalculator.bind(e,t)}))})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[11,1,2]]]);
//# sourceMappingURL=main.d3933610.chunk.js.map