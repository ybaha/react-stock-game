(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){e.exports=a(48)},33:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),u=a.n(c),l=(a(33),a(3)),o=a(4),s=a(2),i=a.n(s),m=a(6),p=a(1),f=a(24),d=a.n(f),b=(a(35),a(37),d.a.initializeApp({apiKey:"AIzaSyDbdtreoD_vvgfIqmEnM49iuGTHmyZQ-0A",authDomain:"smash-53d6d.firebaseapp.com",databaseURL:"https://smash-53d6d.firebaseio.com",projectId:"smash-53d6d",storageBucket:"smash-53d6d.appspot.com",messagingSenderId:"486337294911",appId:"1:486337294911:web:4d44a7d04dbe63d985be8a",measurementId:"G-7C6BZ88B2P"})),E=b.auth(),v=b.database(),h=r.a.createContext();function j(){return Object(n.useContext)(h)}function O(e){var t=e.children,a=Object(n.useState)(null),c=Object(p.a)(a,2),u=c[0],l=c[1],o=Object(n.useState)(!0),s=Object(p.a)(o,2),i=s[0],m=s[1];Object(n.useEffect)(function(){return E.onAuthStateChanged(function(e){l(e),m(!1)})},[]);var f={currentUser:u,login:function(e,t){return E.signInWithEmailAndPassword(e,t)},signup:function(e,t){E.createUserWithEmailAndPassword(e,t).then(function(){!function(e){var t=e.indexOf("@"),a=e.substr(0,t);v.ref("users/"+a).set({username:a,email:e,balance:1e3,ownedStocks:{}}),console.log("balance yazidli")}(e)})},logout:function(){return E.signOut()},resetPassword:function(e){return E.sendPasswordResetEmail(e)},updateEmail:function(e){return u.updateEmail(e)},updatePassword:function(e){return u.updatePassword(e)}};return r.a.createElement(h.Provider,{value:f},!i&&t)}function g(){var e=Object(n.useRef)(),t=Object(n.useRef)(),a=j().login,c=Object(n.useState)(""),u=Object(p.a)(c,2),s=u[0],f=u[1],d=Object(n.useState)(!1),b=Object(p.a)(d,2),E=b[0],v=b[1],h=Object(l.g)();function O(){return(O=Object(m.a)(i.a.mark(function n(r){return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),n.prev=1,f(""),v(!0),n.next=6,a(e.current.value,t.current.value);case 6:h.push("/react-stock-game/"),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(1),f("Failed to log in"),v(!1);case 13:case"end":return n.stop()}},n,null,[[1,9]])}))).apply(this,arguments)}return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-wrapper"},r.a.createElement("h2",null,"Log In"),s&&r.a.createElement("div",null,s),r.a.createElement("form",{onSubmit:function(e){return O.apply(this,arguments)}},r.a.createElement("div",{id:"email"},r.a.createElement("label",null,"Email"),r.a.createElement("input",{type:"email",ref:e,required:!0})),r.a.createElement("div",{id:"password"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",ref:t,required:!0})),r.a.createElement("div",null,r.a.createElement(o.b,{to:"/forgot-password"},"Forgot Password?")),r.a.createElement("button",{disabled:E,type:"submit",className:"login-button"},"Log In")),r.a.createElement("div",null,"Need an account? ",r.a.createElement(o.b,{to:"/react-stock-game/signup"},"Sign Up"))))}var k=a(27);function w(e){var t=e.component,a=Object(k.a)(e,["component"]),n=j().currentUser;return r.a.createElement(l.b,Object.assign({},a,{render:function(e){return n?r.a.createElement(t,e):r.a.createElement(l.a,{to:"/react-stock-game/login"})}}))}var y=r.a.createContext({stockSymbol:!1,setStockSymbol:function(){}}),S=r.a.createContext({allPrices:{},setAllStockPrices:function(){}}),x=a(26),P=a.n(x);function N(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],c=t[1],u=Object(n.useState)([]),l=Object(p.a)(u,2),s=l[0],i=l[1],m=Object(n.useContext)(y).stockSymbol,f=r.a.useContext(S).allStockPrices;Object(n.useEffect)(function(){!function(){if(m){var e=[],t=[];fetch("https://stock-game-server.herokuapp.com/".concat(m)).then(function(e){return e.json()}).then(function(a){for(var n in a["Time Series (Daily)"])e.push(n),t.push(a["Time Series (Daily)"][n]["1. open"]);c(e),i(t)})}}()},[m]);return r.a.createElement(r.a.Fragment,null,!1!==m?function(e,t){return r.a.createElement("div",null,r.a.createElement("h1",null,e+" ","Stock Market"),r.a.createElement("h2",null,"Price: ",t),r.a.createElement(P.a,{data:[{x:a,y:s,type:"scatter",mode:"lines+markers",marker:{color:"blue"}}],layout:{width:720,height:440}}),r.a.createElement("p",null,r.a.createElement(o.b,{to:"/buy"},"Buy")))}(m,f[m]):r.a.createElement("div",null,"Choose stock from the list"))}function C(e){var t=j().currentUser,a=Object(n.useState)(!1),c=Object(p.a)(a,2),u=c[0],l=c[1],s=Object(n.useState)(0),f=Object(p.a)(s,2),d=f[0],b=f[1],E=Object(n.useRef)();function h(){return(h=Object(m.a)(i.a.mark(function e(t,a,n,r){var c,u;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return c=v.ref("users/"+t+"/stocks"+"/".concat(r)),v.ref("users/"+t+"/balance").set(a),e.next=4,c.once("value");case 4:return e.next=6,e.sent.val();case 6:u=e.sent,console.log(u),c.set(Number(n)+Number(u));case 9:case"end":return e.stop()}},e)}))).apply(this,arguments)}function O(e){console.log("userid: "+e),v.ref("users/"+e+"/balance").on("value",function(e){b(e.val())})}function g(t,a){if(Number(a)*Number(t)<=d){var n=d-t*a;n=Math.trunc(n*Math.pow(10,3))/Math.pow(10,3),function(e,t,a,n){h.apply(this,arguments)}(u,n,a,e.stockName),b(n)}else alert("not enough balance")}return console.log(u),r.a.useEffect(function(){var e=t.email.indexOf("@"),a=t.email.substr(0,e);l(a)},[t]),r.a.useEffect(function(){u?O(u):console.log("Cant get userid")},[u]),r.a.createElement("div",null,r.a.createElement("h1",null,"Transactions"),r.a.createElement("h2",null,"Your balance: ",d),r.a.createElement("h2",null,e.stockName),r.a.createElement("h3",null,e.stockPrice),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),O(u),console.log(E.current.value),g(e.stockPrice,E.current.value)}},r.a.createElement("input",{ref:E}),r.a.createElement("input",{type:"submit"})),r.a.createElement(o.b,{to:"/"},"Go back"))}function R(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],c=t[1],u=Object(n.useContext)(S).setAllStockPrices,l=Object(n.useContext)(y),o=l.stockSymbol,s=l.setStockSymbol,f=function(e){return r.a.createElement("div",{className:"listItem",onClick:e.onClick},e.value)},d=function(){var e=Object(m.a)(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://stock-game-server.herokuapp.com/").then(function(e){return e.json()}).then(function(e){c(e)});case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(m.a)(i.a.mark(function e(){var t,a,n,r,c;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!o){e.next=11;break}return e.next=3,fetch("https://stock-game-server.herokuapp.com/".concat(o));case 3:return t=e.sent,e.next=6,t.json();case 6:return a=e.sent,n=Object.keys(a["Time Series (Daily)"]),r=n[0],c=Number(a["Time Series (Daily)"][r]["1. open"]),e.abrupt("return",c);case 11:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(m.a)(i.a.mark(function e(){var t,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://stock-game-server.herokuapp.com/prices");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,u(a);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)(function(){d(),b()},[o]),Object(n.useEffect)(function(){E()},[]);var v=function(){var e=Object(m.a)(i.a.mark(function e(t){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:s(t);case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"Leftbar"},r.a.createElement("div",{className:"wrapper"},a.map(function(e,t){return r.a.createElement(f,{key:t,value:e,onClick:function(){v(e)}})})))}function U(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],c=t[1],u=j(),s=u.currentUser,f=u.logout,d=Object(n.useRef)(s.email),b=Object(l.g)(),E=Object(n.useState)(null),h=Object(p.a)(E,2),O=h[0],g=h[1],k=Object(n.useState)(""),w=Object(p.a)(k,2),y=w[0],S=w[1];function x(){return(x=Object(m.a)(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return c(""),e.prev=1,e.next=4,f();case 4:b.push("/react-stock-game/login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),c("Failed to log out");case 10:case"end":return e.stop()}},e,null,[[1,7]])}))).apply(this,arguments)}return Object(n.useEffect)(function(){var e=d.current.indexOf("@"),t=d.current.substr(0,e);S(t)},[]),Object(n.useEffect)(function(){v.ref("users/"+y+"/balance").on("value",function(e){console.log(e.val()),g(e.val())})},[y]),r.a.createElement("div",{className:"Rightbar"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("li",{className:"listItem"},r.a.createElement("h2",null,"Profile"),a&&r.a.createElement("div",null,a),r.a.createElement("strong",null,"Username:")," ",y,r.a.createElement("p",null,r.a.createElement(o.b,{to:"/update-profile"},"Update Profile")),r.a.createElement("button",{onClick:function(){return x.apply(this,arguments)}},"Log Out"),r.a.createElement("p",null,"Balance: ",parseInt(O)))))}a(47);var I=function(){var e=Object(n.useState)(!1),t=Object(p.a)(e,2),a=t[0],c=t[1],u=Object(n.useState)({}),o=Object(p.a)(u,2),s=o[0],i=o[1],m={stockSymbol:a,setStockSymbol:c},f={allStockPrices:s,setAllStockPrices:i};return console.log(a),r.a.createElement("div",{className:"App"},r.a.createElement(y.Provider,{value:m},r.a.createElement(S.Provider,{value:f},r.a.createElement(R,null),r.a.createElement(l.d,null,r.a.createElement(l.b,{exact:!0,path:"/",component:N}),r.a.createElement(l.b,{path:"/buy",render:function(){return r.a.createElement(C,{stockName:a,stockPrice:s[a]})}})))),r.a.createElement(U,null))};function A(){var e=Object(n.useRef)(),t=j().resetPassword,a=Object(n.useState)(""),c=Object(p.a)(a,2),u=c[0],l=c[1],s=Object(n.useState)(""),f=Object(p.a)(s,2),d=f[0],b=f[1],E=Object(n.useState)(!1),v=Object(p.a)(E,2),h=v[0],O=v[1];function g(){return(g=Object(m.a)(i.a.mark(function a(n){return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),a.prev=1,b(""),l(""),O(!0),a.next=7,t(e.current.value);case 7:b("Check your inbox for further instructions"),O(!1),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(1),l("Failed to reset password");case 14:case"end":return a.stop()}},a,null,[[1,11]])}))).apply(this,arguments)}return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-wrapper"},r.a.createElement("h2",null,"Password Reset"),u&&r.a.createElement("div",null,u),d&&r.a.createElement("div",null,d),r.a.createElement("form",{onSubmit:function(e){return g.apply(this,arguments)}},r.a.createElement("div",{id:"email"},r.a.createElement("div",null,"Email"),r.a.createElement("input",{type:"email",ref:e,required:!0})),r.a.createElement("button",{disabled:h,type:"submit"},"Reset Password")),r.a.createElement("div",null,r.a.createElement(o.b,{to:"/react-stock-game/login"},"Login")),r.a.createElement("div",null,"Need an account? ",r.a.createElement(o.b,{to:"/react-stock-game/signup"},"Sign Up"))))}function D(){var e=Object(n.useRef)(),t=Object(n.useRef)(),a=Object(n.useRef)(),c=j(),u=c.currentUser,s=c.updatePassword,i=c.updateEmail,m=Object(n.useState)(""),f=Object(p.a)(m,2),d=f[0],b=f[1],E=Object(n.useState)(!1),v=Object(p.a)(E,2),h=v[0],O=v[1],g=Object(l.g)();return Object(n.useEffect)(function(){console.log(e.current.value)},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Update Profile"),d&&r.a.createElement("div",null,d),r.a.createElement("form",{onSubmit:function(n){if(n.preventDefault(),t.current.value!==a.current.value)return b("Passwords do not match");var r=[];O(!0),b(""),e.current.value!==u.email&&r.push(i(e.current.value)),t.current.value&&r.push(s(t.current.value)),Promise.all(r).then(function(){O(!1)}).catch(function(){b("Failed to update account")}).finally(function(){g.push("/react-stock-game/")})}},r.a.createElement("div",{id:"email"},r.a.createElement("div",null,"Email"),r.a.createElement("input",{type:"email",ref:e,required:!0,defaultValue:u.email})),r.a.createElement("div",{id:"password"},r.a.createElement("div",null,"Password"),r.a.createElement("input",{type:"password",ref:t,placeholder:"Leave blank to keep the same"})),r.a.createElement("div",{id:"password-confirm"},r.a.createElement("div",null,"Password Confirmation"),r.a.createElement("input",{type:"password",ref:a,placeholder:"Leave blank to keep the same"})),r.a.createElement("button",{disabled:h,type:"submit"},"Update")),r.a.createElement("div",null,r.a.createElement(o.b,{to:"/"},"Cancel")))}function F(){var e=Object(n.useRef)(),t=Object(n.useRef)(),a=Object(n.useRef)(),c=j().signup,u=Object(n.useState)(""),s=Object(p.a)(u,2),f=s[0],d=s[1],b=Object(n.useState)(!1),E=Object(p.a)(b,2),v=E[0],h=E[1],O=Object(l.g)();function g(){return(g=Object(m.a)(i.a.mark(function n(r){return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(r.preventDefault(),t.current.value===a.current.value){n.next=3;break}return n.abrupt("return",d("Passwords do not match"));case 3:return n.prev=3,d(""),h(!0),n.next=8,c(e.current.value,t.current.value);case 8:O.push("/react-stock-game/"),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(3),d("Failed to create an account"),h(!1);case 15:case"end":return n.stop()}},n,null,[[3,11]])}))).apply(this,arguments)}return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Sign Up"),f&&r.a.createElement("div",null,f),r.a.createElement("form",{onSubmit:function(e){return g.apply(this,arguments)}},r.a.createElement("div",{id:"email"},r.a.createElement("div",null,"Email"),r.a.createElement("input",{type:"email",ref:e,required:!0})),r.a.createElement("div",{id:"password"},r.a.createElement("div",null,"Password"),r.a.createElement("input",{type:"password",ref:t,required:!0})),r.a.createElement("div",{id:"password-confirm"},r.a.createElement("div",null,"Password Confirmation"),r.a.createElement("input",{type:"password",ref:a,required:!0})),r.a.createElement("button",{disabled:v,type:"submit"},"Sign Up")),r.a.createElement("div",null,"Already have an account? ",r.a.createElement(o.b,{to:"/react-stock-game/login"},"Log In")))}var L=function(){var e=j().currentUser;console.log(e);var t=function(e){return r.a.createElement("h1",null,"No Match ",e.text)};return r.a.createElement(o.a,null,e?r.a.createElement(function(){return r.a.createElement(l.d,null,r.a.createElement(w,{path:"/react-stock-game/",component:I}),r.a.createElement(w,{path:"/react-stock-game/update-profile",component:D}))},null):r.a.createElement(function(){return r.a.createElement(l.d,null,r.a.createElement(l.b,{exact:!0,path:"/react-stock-game/",component:g}),r.a.createElement(l.b,{path:"/react-stock-game/login",component:g}),r.a.createElement(l.b,{path:"/react-stock-game/signup",component:F}),r.a.createElement(l.b,{path:"/react-stock-game/forgot-password",component:A}),r.a.createElement(l.b,{render:function(){return r.a.createElement(t,{text:"AuthRoutes"})}}))},null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(O,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,1,2]]]);
//# sourceMappingURL=main.c218b7c6.chunk.js.map