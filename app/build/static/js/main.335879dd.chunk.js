(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{53:function(e,t,a){e.exports=a.p+"static/media/Wine404_2.3d1c5db0.jpg"},58:function(e,t,a){e.exports=a(80)},71:function(e,t,a){},72:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),c=a.n(l),u=a(4),o=a(8),i=a(2),s=a(3),m=a.n(s),p=a(44),b=a(10),d=a(17),h=a.n(d);a(64),a(65);h.a.initializeApp({apiKey:"AIzaSyB2yTPOk9y8C4hWu_x8crC8q3Sqbu6R44I",authDomain:"winejs-db.firebaseapp.com",databaseURL:"https://winejs-db.firebaseio.com",projectId:"winejs-db",storageBucket:"winejs-db.appspot.com",messagingSenderId:"890771190455",appId:"1:890771190455:web:7f52cb240e4e4b9ab29332",measurementId:"G-6HWXZH3Y84"});var E=h.a.auth(),f=h.a.firestore(),v=new h.a.auth.GoogleAuthProvider,g=function(){E.signInWithRedirect(v)},y=function(){var e=Object(b.a)(m.a.mark((function e(t,a){var n,r,l,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return n=f.doc("users/".concat(t.uid)),e.next=5,n.get();case 5:if(e.sent.exists){e.next=16;break}return r=t.email,l=t.displayName,c=t.photoURL,e.prev=8,e.next=11,n.set(Object(p.a)({displayName:l,email:r,photoURL:c},a));case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(8),console.error("Error creating user document",e.t0);case 16:return e.abrupt("return",x(t.uid));case 17:case"end":return e.stop()}}),e,null,[[8,13]])})));return function(t,a){return e.apply(this,arguments)}}(),x=function(){var e=Object(b.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,f.doc("users/".concat(t)).get();case 5:return a=e.sent,e.abrupt("return",Object(p.a)({uid:t},a.data()));case 9:e.prev=9,e.t0=e.catch(2),console.error("Error fetching user",e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(""),o=Object(i.a)(c,2),s=o[0],m=o[1],p=Object(n.useState)(null),b=Object(i.a)(p,2),d=b[0],h=b[1],f=function(e){var t=e.currentTarget,a=t.name,n=t.value;"userEmail"===a?l(n):"userPassword"===a&&m(n)};return r.a.createElement("div",{className:"mt-8"},r.a.createElement("h1",null,"Sign In"),r.a.createElement("div",null,r.a.createElement("form",{className:""},r.a.createElement("label",{htmlFor:"userEmail",className:"signuplabel"},"Email:"),r.a.createElement("p",null),r.a.createElement("input",{type:"email",className:"signupfield",name:"userEmail",value:a,placeholder:"E.g: BobTest@gmail.com",id:"userEmail",onChange:function(e){return f(e)}}),r.a.createElement("p",null),r.a.createElement("label",{htmlFor:"userPassword",className:"signuplabel"},"Password:"),r.a.createElement("p",null),r.a.createElement("input",{type:"password",className:"signupfield",name:"userPassword",value:s,placeholder:"Your Password",id:"userPassword",onChange:function(e){return f(e)}}),r.a.createElement("p",null),r.a.createElement("button",{className:"SignIn",onClick:function(e){!function(e,t,a){e.preventDefault(),E.signInWithEmailAndPassword(t,a).catch((function(e){h("Error signing in with password and email!"),console.error("Error signing in with password and email",e)}))}(e,a,s)}},"Sign in"),r.a.createElement("div",{className:"error"},null!==d&&r.a.createElement("div",null,d)),r.a.createElement("h2",null,"or"),r.a.createElement("button",{className:"GoogleSignIn",onClick:g},"Sign in with Google"),r.a.createElement("p",{className:"text"},"Don't have an account?"," ",r.a.createElement(u.b,{to:"signUp",className:"text-blue-500 hover:text-blue-600"},"Sign up here")," ",r.a.createElement("br",null)," ",r.a.createElement(u.b,{to:"passwordReset",className:"text-blue-500 hover:text-blue-600"},"Forgot Password?")))))},O=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(""),o=Object(i.a)(c,2),s=o[0],p=o[1],d=Object(n.useState)(""),h=Object(i.a)(d,2),f=h[0],v=h[1],x=Object(n.useState)(null),j=Object(i.a)(x,2),O=j[0],N=j[1],w=function(){var e=Object(b.a)(m.a.mark((function e(t,a,n){var r,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,E.createUserWithEmailAndPassword(a,n);case 4:r=e.sent,c=r.user,y(c,{displayName:f}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),N("Error Signing up with email and password");case 12:l(""),p(""),v("");case 15:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,a,n){return e.apply(this,arguments)}}(),S=function(e){var t=e.currentTarget,a=t.name,n=t.value;"userEmail"===a?l(n):"userPassword"===a?p(n):"displayName"===a&&v(n)};return r.a.createElement("div",null,r.a.createElement("h1",null,"Sign Up"),r.a.createElement("div",{className:"SignUp"},r.a.createElement("form",null,r.a.createElement("label",{htmlFor:"displayName",className:"signuplabel"},"Display Name:"),r.a.createElement("p",null),r.a.createElement("input",{type:"name",className:"signupfield",name:"displayName",value:f,placeholder:"E.g: BobTest",id:"displayName",onChange:function(e){return S(e)}}),r.a.createElement("p",null),r.a.createElement("label",{htmlFor:"userEmail",className:"signuplabel"},"Email:"),r.a.createElement("p",null),r.a.createElement("input",{type:"email",className:"signupfield",name:"userEmail",value:a,placeholder:"E.g: BobTest@gmail.com",id:"userEmail",onChange:function(e){return S(e)}}),r.a.createElement("p",null),r.a.createElement("label",{htmlFor:"userPassword",className:"signuplabel"},"Password:"),r.a.createElement("p",null),r.a.createElement("input",{type:"password",className:"signupfield",name:"userPassword",value:s,placeholder:"Your Password",id:"userPassword",onChange:function(e){return S(e)}}),r.a.createElement("p",null),r.a.createElement("button",{className:"bg-green-400 hover:bg-green-500 w-full py-2 text-white",onClick:function(e){w(e,a,s)}},"Sign up"),null!==O&&r.a.createElement("div",{className:"error"},O),r.a.createElement("h2",null,"or"),r.a.createElement("button",{className:"bg-red-500 hover:bg-red-600 w-full py-2 text-white ",onClick:g},"Sign In with Google"),r.a.createElement("p",{className:"text-center my-3"},"Already have an account?"," ",r.a.createElement(u.b,{to:"/",className:"text-blue-500 hover:text-blue-600"},"Sign in here")))))},N=a(32),w=a(33),S=a(38),C=a(37),k=Object(n.createContext)({user:null}),I=function(e){Object(S.a)(a,e);var t=Object(C.a)(a);function a(){var e;Object(N.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={user:null},e.componentDidMount=Object(b.a)(m.a.mark((function t(){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:E.onAuthStateChanged(function(){var t=Object(b.a)(m.a.mark((function t(a){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y(a);case 2:n=t.sent,e.setState({user:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return t.stop()}}),t)}))),e}return Object(w.a)(a,[{key:"render",value:function(){return r.a.createElement(k.Provider,{value:this.state.user},this.props.children)}}]),a}(n.Component),F=function(){var e=Object(n.useContext)(k),t=e.displayName,a=e.email;return r.a.createElement("div",{className:"mx-auto w-11/12 md:w-2/4 py-8 px-4 md:px-8"},r.a.createElement("div",{className:"flex border flex-col items-center md:flex-row md:items-start border-blue-400 px-3 py-4"},r.a.createElement("div",{style:{backgroundSize:"cover",height:"200px",width:"200px"},className:"border border-blue-300"}),r.a.createElement("div",{className:"md:pl-4"},r.a.createElement("h2",null,t),r.a.createElement("h3",{className:"italic"},a))),r.a.createElement("div",{className:"profilepagesignout"},r.a.createElement("button",{type:"login",onClick:function(){E.signOut()}},"Sign out")))},P=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),o=Object(i.a)(c,2),s=o[0],m=(o[1],Object(n.useState)(null)),p=Object(i.a)(m,2),b=p[0];p[1];return r.a.createElement("div",{className:"mt-8"},r.a.createElement("h1",{className:"text-xl text-center font-bold mb-3"},"Reset your Password"),r.a.createElement("div",{className:"border border-blue-300 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8"},r.a.createElement("form",{action:""},s&&r.a.createElement("div",{className:"py-3 bg-green-400 w-full text-white text-center mb-3"},"An email has been sent to you!"),null!==b&&r.a.createElement("div",{className:"py-3 bg-red-600 w-full text-white text-center mb-3"},b),r.a.createElement("label",{htmlFor:"userEmail",className:"w-full block"},"Email:"),r.a.createElement("input",{type:"email",name:"userEmail",id:"userEmail",value:a,placeholder:"Input your email",onChange:function(e){var t=e.currentTarget,a=t.name,n=t.value;"userEmail"===a&&l(n)},className:"mb-3 w-full px-1 py-2"}),r.a.createElement("button",{className:"w-full bg-blue-400 text-white py-3"},"Send me a reset link")),r.a.createElement(u.b,{to:"/",className:"my-2 text-blue-700 hover:text-blue-800 text-center block"},"\u2190 back to sign in page")))};a(71),a(72);function R(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=r.a.useState(e),a=Object(i.a)(t,2),n=a[0],l=a[1],c=r.a.useCallback((function(){l((function(e){return!e}))}),[]);return[n,c]}var W=a(43);var L=function(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"WineJS Wine Review"},r.a.createElement("h1",null,"About"),r.a.createElement("h2",null,"About WineJS"),"This is a first attempt at building a wine review app using Reactjs.",r.a.createElement("p",null),'Currently, you can review wines and save your scores and comments. You can also view any past reviews in the "results" section.',r.a.createElement("p",null),"New features, updates, and fixes will be coming soon."))},T=function(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"WineJS Wine Review"},r.a.createElement("h1",null,"Contact Page"),r.a.createElement("h2",null),r.a.createElement("h2",null,"Contact support: madeupemailaddress@fakeemail.com")))},B=(a(7),a(26)),A=a(23),V=a.n(A),H=a(51),U=function(){var e=Object(n.useContext)(k),t=(e.displayName,e.email,Object(n.useState)({})),a=Object(i.a)(t,2),l=(a[0],a[1],Object(n.useState)()),c=Object(i.a)(l,2),u=c[0],o=c[1],s=Object(n.useState)(),m=Object(i.a)(s,2),p=m[0],b=m[1],d=Object(n.useState)(),h=Object(i.a)(d,2),E=h[0],f=h[1],v=Object(n.useState)(),g=Object(i.a)(v,2),y=g[0],x=g[1],j=Object(n.useState)(),O=Object(i.a)(j,2),N=O[0],w=O[1],S=Object(n.useState)(),C=Object(i.a)(S,2),I=C[0],F=C[1],P=Object(n.useState)(),R=Object(i.a)(P,2),W=R[0],L=R[1],T=Object(n.useState)(),A=Object(i.a)(T,2),U=A[0],D=A[1],z=Object(n.useState)(),J=Object(i.a)(z,2),G=J[0],M=J[1],X=Object(n.useState)(),Y=Object(i.a)(X,2),q=Y[0],K=Y[1],_=Object(n.useState)(),Z=Object(i.a)(_,2),Q=Z[0],$=Z[1],ee=Object(n.useState)(),te=Object(i.a)(ee,2),ae=te[0],ne=te[1],re=Object(n.useState)(),le=Object(i.a)(re,2),ce=le[0],ue=le[1],oe=Object(n.useState)(),ie=Object(i.a)(oe,2),se=ie[0],me=ie[1],pe=Object(n.useState)(),be=Object(i.a)(pe,2),de=be[0],he=be[1],Ee="Wine4",fe="/users/"+e.uid+"/"+Ee+"/data",ve="/users/"+e.uid+"/",ge=Object(n.useState)([]),ye=Object(i.a)(ge,2),xe=(ye[0],ye[1],V.a.database().ref(ve).orderByKey()),je=[];function Oe(t){Ee=t,alert(t),fe="/users/"+e.uid+"/"+Ee+"/data",alert(fe),V.a.database().ref(fe).on("value",(function(e){o(e.val().Balance),b(e.val().BalanceNotes),f(e.val().FlavorCharacteristics),x(e.val().FlavorCharacteristicsNotes),w(e.val().FlavorIntensity),F(e.val().FlavorIntensityNotes),L(e.val().Length),D(e.val().LengthNotes),M(e.val().NoseIntensity),K(e.val().NoseIntensityNotes),$(e.val().Producer),ne(e.val().TastingNotes),ue(e.val().Total),me(e.val().Vintage),he(e.val().WineName)})),alert("getting review data")}var Ne=Object(n.useState)([]),we=Object(i.a)(Ne,2);we[0],we[1];!function(){var e=[];xe.once("value").then((function(t){t.forEach((function(t){e.push({label:t.key,value:t.key})}))})),je=e}();je.map((function(e,t){return console.log(e),r.a.createElement("option",{key:e.key,value:e.key},e.key)}),void 0);var Se=Object(n.useState)([]),Ce=Object(i.a)(Se,2),ke=(Ce[0],Ce[1],V.a.database().ref("/users/")),Ie=Object(H.a)(ke),Fe=Object(i.a)(Ie,3);Fe[0],Fe[1],Fe[2];return r.a.createElement(n.Fragment,null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h1",null,"Results")),r.a.createElement("form",null,r.a.createElement(B.a,{options:je,isSearchable:!0,onChange:function(e){return Oe(e.value)}})),r.a.createElement("div",null,r.a.createElement("reviewresults",null,r.a.createElement("h1",null,"Wine Name: ",de),r.a.createElement("h2",null,"Producer: ",Q),r.a.createElement("h2",null,"Vintage: ",se),r.a.createElement("h2",null,"Total: ",ce),r.a.createElement("h2",null,"TastingNotes:"),ae,r.a.createElement("h2",null,"Nose Intensity: ",G),r.a.createElement("h2",null,"Nose Intensity Notes:"),q,r.a.createElement("h2",null,"Flavor Intensity: ",N),r.a.createElement("h2",null,"Flavor Intensity Notes:"),I,r.a.createElement("h2",null,"FlavorCharacteristics: ",E),r.a.createElement("h2",null,"FlavorCharacteristicsNotes:"),y,r.a.createElement("h2",null,"Balance: ",u),r.a.createElement("h2",null,"Balance Notes:"),p,r.a.createElement("h2",null,"Length: ",W),r.a.createElement("h2",null,"Length Notes:"),U))))};function D(){var e=Object(W.a)(),t=e.register,a=e.handleSubmit,l=e.errors,c=Object(n.useState)(0),u=Object(i.a)(c,2),s=u[0],m=u[1],p=Object(n.useState)(0),b=Object(i.a)(p,2),d=b[0],E=b[1],f=Object(n.useState)(0),v=Object(i.a)(f,2),g=v[0],y=v[1],x=Object(n.useState)(0),j=Object(i.a)(x,2),O=j[0],N=j[1],w=Object(n.useState)(0),S=Object(i.a)(w,2),C=S[0],F=S[1],P=Number(s)+Number(d)+Number(g)+Number(O)+Number(C);0!==P&&(P=50+P);var L=R(),T=Object(i.a)(L,2),B=(T[0],T[1],Object(n.useContext)(k)),A=(B.displayName,B.email,R()),V=Object(i.a)(A,2),H=V[0],U=V[1],D=R(),z=Object(i.a)(D,2),J=z[0],G=z[1],M=R(),X=Object(i.a)(M,2),Y=X[0],q=X[1],K=R(),_=Object(i.a)(K,2),Z=_[0],Q=_[1],$=R(),ee=Object(i.a)($,2),te=ee[0],ae=ee[1],ne=Object(n.useState)(!1),re=Object(i.a)(ne,2),le=re[0],ce=re[1];h.a.database();function ue(e){alert("Successfully submitted form"),function(e,t){h.a.database().ref("users/"+e+"/"+t.WineName).set({data:t})}(B.uid,e),ce(!0)}return console.log(l),r.a.createElement(I,null,r.a.createElement("form",{onSubmit:a(ue)},r.a.createElement("div",{className:"WineJS Wine Review"},r.a.createElement("h1",null,"WineJS Review")),console.log(B.uid),le?r.a.createElement(o.a,{to:{pathname:"/reviewresult",state:{data:""}}}):null,r.a.createElement("h2",null,"Producer"),r.a.createElement("input",{type:"text",placeholder:"Producer",name:"Producer",ref:t}),r.a.createElement("h2",null,"Wine Name"),r.a.createElement("input",{type:"text",placeholder:"Wine Name",name:"WineName",ref:t({required:"Wine Name is Required",maxLength:100})}),l.WineName&&r.a.createElement("p",null,l.WineName.message),r.a.createElement("h2",null,"Vintage"),r.a.createElement("input",{type:"number",placeholder:"Vintage",name:"Vintage",ref:t({min:1900,max:2030})}),r.a.createElement("h3",null,"Nose Intensity"),r.a.createElement("div",{class:"value"},s),r.a.createElement("input",{type:"range",id:"NoseIntensity",name:"NoseIntensity",min:"1",max:"5",defaultValue:"0",onChange:function(e){return m(e.target.value)},ref:t}),r.a.createElement("button",{type:"button",onClick:U,value:""},"Show/hide notes"),r.a.createElement("textarea",{type:"small",name:"NoseIntensityNotes",hideit:H?"true":"false",ref:t}),l.NoseIntensity&&r.a.createElement("p",null,"Value must be at least 1"),r.a.createElement("h3",null,"Flavor Intensity"),r.a.createElement("div",{class:"value"},d),r.a.createElement("input",{type:"range",id:"FlavorIntensity",name:"FlavorIntensity",min:"1",max:"10",defaultValue:"0",onChange:function(e){return E(e.target.value)},ref:t}),r.a.createElement("button",{type:"button",onClick:G,value:""},"Show/hide notes"),r.a.createElement("textarea",{type:"small",name:"FlavorIntensityNotes",hideit:J?"true":"false",ref:t}),l.FlavorIntensity&&r.a.createElement("p",null,"Value must be at least 1"),r.a.createElement("h3",null,"Flavor Characteristics"),r.a.createElement("div",{class:"value"},g),r.a.createElement("input",{type:"range",id:"FlavorCharacteristics",name:"FlavorCharacteristics",min:"1",max:"25",defaultValue:"0",onChange:function(e){return y(e.target.value)},ref:t}),r.a.createElement("button",{type:"button",onClick:q,value:""},"Show/hide notes"),r.a.createElement("textarea",{type:"small",name:"FlavorCharacteristicsNotes",hideit:Y?"true":"false",ref:t}),l.FlavorCharacteristics&&r.a.createElement("p",null,"Value must be at least 1"),r.a.createElement("h3",null,"Balance"),r.a.createElement("div",{class:"value"},O),r.a.createElement("input",{type:"range",id:"Balance",name:"Balance",min:"1",max:"5",defaultValue:"0",onChange:function(e){return N(e.target.value)},ref:t}),r.a.createElement("button",{type:"button",onClick:Q,value:""},"Show/hide notes"),r.a.createElement("textarea",{type:"small",name:"BalanceNotes",hideit:Z?"true":"false",ref:t}),l.Balance&&r.a.createElement("p",null,"Value must be at least 1"),r.a.createElement("h3",null,"Length"),r.a.createElement("div",{class:"value"},C),r.a.createElement("input",{type:"range",id:"Length",name:"Length",min:"1",max:"5",defaultValue:"0",onChange:function(e){return F(e.target.value)},ref:t}),r.a.createElement("button",{type:"button",onClick:ae,value:""},"Show/hide notes"),r.a.createElement("textarea",{type:"small",name:"LengthNotes",hideit:te?"true":"false",ref:t}),l.Length&&r.a.createElement("p",null,"Value must be at least 1"),r.a.createElement("h4",null,"Total"),r.a.createElement("div",{class:"value"},P),r.a.createElement("input",{type:"hidden",id:"Total",name:"Total",defaultValue:P,ref:t}),r.a.createElement("h2",null,"Tasting Notes"),r.a.createElement("textarea",{name:"TastingNotes",ref:t}),r.a.createElement("input",{type:"submit",onClick:a(ue)})))}function z(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"Home"},r.a.createElement("h1",null,"Home Page"),r.a.createElement("p",null),r.a.createElement("h2",null,"You must be signed in to access the Review and Review Results pages."),r.a.createElement("h2",null,"Click on a link below"),r.a.createElement("h2",null,r.a.createElement(u.b,{to:"/review"},"Review")),r.a.createElement("h2",null,r.a.createElement(u.b,{to:"/reviewresult"},"Review Results")),r.a.createElement("h2",null,r.a.createElement(u.b,{to:"/about"},"About")),r.a.createElement("h2",null,r.a.createElement(u.b,{to:"/contact"},"Contact"))))}var J=a(53),G=a.n(J),M=(r.a.Component,a(20)),X=a(25);function Y(){var e=Object(X.a)(["\n  html, body {\n    margin: 0;\n    padding: 0;\n  }\n  *, *::after, *::before {\n    box-sizing: border-box;\n  }\n  body {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: ",";\n    color: ",';\n    height: 100vh;\n    text-rendering: optimizeLegibility;\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  }\n  h1 {\n    font-size: 2rem;\n    text-align: center;\n    text-transform: uppercase;\n  }\n  img {\n    border-radius: 5px;\n    height: auto;\n    width: 10rem;\n  }\n  div {\n    text-align: center;\n  }\n  small {\n    display: block;\n  }\n  a {\n    color: ',";\n    text-decoration: none;\n  }\n"]);return Y=function(){return e},e}Object(M.b)(Y(),(function(e){return e.theme.primaryDark}),(function(e){return e.theme.primaryLight}),(function(e){return e.theme.primaryHover}));var q={primaryDark:"#ff3333",primaryLight:"#80002a",primaryHover:"#343078",mobile:"576px"},K=a(39);function _(){var e=Object(X.a)(["\n  position: absolute;\n  top: 5%;\n  left: 2rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  width: 2rem;\n  height: 2rem;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  z-index: 10;\n  span {\n    width: 2rem;\n    height: 0.25rem;\n    background: ",";\n    border-radius: 10px;\n    transition: all 0.3s linear;\n    position: relative;\n    transform-origin: 1px;\n    :first-child {\n      transform: ",";\n    }\n    :nth-child(2) {\n      opacity: ",";\n      transform: ",";\n    }\n    :nth-child(3) {\n      transform: ",";\n    }\n  }\n"]);return _=function(){return e},e}var Z=M.c.button(_(),(function(e){var t=e.theme;return e.open?t.primaryDark:t.primaryLight}),(function(e){return e.open?"rotate(45deg)":"rotate(0)"}),(function(e){return e.open?"0":"1"}),(function(e){return e.open?"translateX(20px)":"translateX(0)"}),(function(e){return e.open?"rotate(-45deg)":"rotate(0)"})),Q=function(e){var t=e.open,a=e.setOpen,n=Object(K.a)(e,["open","setOpen"]),l=!!t;return r.a.createElement(Z,Object.assign({"aria-label":"Toggle menu","aria-expanded":l,open:t,onClick:function(){return a(!t)}},n),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null))};function $(){var e=Object(X.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background: ",";\n  transform: ",";\n  height: 94.5%;\n  text-align: left;\n  padding: 1.5rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  transition: transform 0.3s ease-in-out;\n  @media (max-width: ",") {\n      width: 50%;\n    }\n  a {\n    font-size: 2rem;\n    text-transform: uppercase;\n    padding: 1.3rem 0;\n    font-weight: bold;\n    letter-spacing: 0.3rem;\n    color: ",";\n    text-decoration: none;\n    transition: color 0.3s linear;\n    @media (max-width: ",") {\n      font-size: 1.5rem;\n      text-align: left;\n    }\n    &:hover {\n      color: ",";\n    }\n  }\n"]);return $=function(){return e},e}var ee=M.c.nav($(),(function(e){return e.theme.primaryLight}),(function(e){return e.open?"translateX(0)":"translateX(-100%)"}),(function(e){return e.theme.mobile}),(function(e){return e.theme.primaryDark}),(function(e){return e.theme.mobile}),(function(e){return e.theme.primaryHover})),te=function(e){var t=e.open,a=Object(K.a)(e,["open"]),n=!!t,l=n?0:-1;return r.a.createElement(ee,Object.assign({open:t,"aria-hidden":!n},a),r.a.createElement("a",{href:"/home",tabIndex:l},r.a.createElement("span",{"aria-hidden":"true"},"\ud83d\udce9"),"Home"),r.a.createElement("a",{href:"/review",tabIndex:l},r.a.createElement("span",{"aria-hidden":"true"},"\ud83c\udf77"),"Review"),r.a.createElement("a",{href:"/reviewresult",tabIndex:l},r.a.createElement("span",{"aria-hidden":"true"},"\ud83e\udd47"),"Results"),r.a.createElement("a",{href:"/profilepage",tabIndex:l},r.a.createElement("span",{"aria-hidden":"true"},"\ud83d\udc81\ud83c\udffb\u200d\u2642\ufe0f"),"Profile"),r.a.createElement("a",{href:"/about",tabIndex:l},r.a.createElement("span",{"aria-hidden":"true"},"\ud83e\udd42"),"About us"),r.a.createElement("a",{href:"/contact",tabIndex:l},r.a.createElement("span",{"aria-hidden":"true"},"\ud83d\udce9"),"Contact"))},ae=a(55);function ne(){var e,t,a=Object(n.useContext)(k),l=Object(n.useState)(!1),c=Object(i.a)(l,2),o=c[0],s=c[1],m=Object(n.useRef)();return e=m,t=function(){return s(!1)},Object(n.useEffect)((function(){var a=function(a){e.current&&!e.current.contains(a.target)&&t(a)};return document.addEventListener("mousedown",a),function(){document.removeEventListener("mousedown",a)}}),[e,t]),r.a.createElement("div",{className:"SiteMenu"},r.a.createElement(M.a,{theme:q},r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{ref:m},r.a.createElement(ae.a,{disabled:!o},r.a.createElement(Q,{open:o,setOpen:s,"aria-controls":"main-menu"}),r.a.createElement(te,{open:o,setOpen:s,id:"main-menu"}))))),r.a.createElement("div",{className:"SiteHeader"},r.a.createElement(u.b,{to:"/profilepage"},a.displayName),r.a.createElement("a",{className:"bn39",href:"/"},r.a.createElement("span",{className:"bn39span",onClick:function(){E.signOut()}},"Sign Out")),r.a.createElement("p",null)))}function re(){return Object(n.useContext)(k)?ne():(Object(n.useContext)(k),r.a.createElement("div",null,r.a.createElement("div",{className:"SiteMenu"},r.a.createElement(u.b,{to:"/home"},r.a.createElement("button",{type:"menubutton",className:"headerbutton"},"Home")),r.a.createElement(u.b,{to:"/contact"},r.a.createElement("button",{type:"menubutton",className:"headerbutton"},"Contact")),r.a.createElement(u.b,{to:"/about"},r.a.createElement("button",{type:"menubutton",className:"headerbutton"},"About"))),r.a.createElement("div",{className:"SiteHeader"},"Not Signed In",r.a.createElement(u.b,{to:"/"},r.a.createElement("a",{className:"bn39",href:"/"},r.a.createElement("span",{className:"bn39span"},"Sign In")))),r.a.createElement("p",null)))}var le=function(){return Object(n.useContext)(k)?r.a.createElement(u.a,null,r.a.createElement(o.b,{path:"/",component:re}),r.a.createElement(o.b,{path:"/",exact:!0,component:z}),r.a.createElement(o.b,{path:"/home",exact:!0,component:z}),r.a.createElement(o.b,{path:"/about",exact:!0,component:L}),r.a.createElement(o.b,{path:"/contact",exact:!0,component:T}),r.a.createElement(o.b,{path:"/review",exact:!0,component:D}),r.a.createElement(o.b,{path:"/reviewresult",exact:!0,component:U}),r.a.createElement(o.b,{path:"/signin",exact:!0,component:j}),r.a.createElement(o.b,{path:"/signUp",exact:!0,component:O}),r.a.createElement(o.b,{path:"/passwordreset",exact:!0,component:P}),r.a.createElement(o.b,{path:"/profilepage",exact:!0,component:F})):r.a.createElement(u.a,null,r.a.createElement(o.b,{path:"/",component:re}),r.a.createElement(o.b,{path:"/",exact:!0,component:j}),r.a.createElement(o.b,{path:"/home",exact:!0,component:z}),r.a.createElement(o.b,{path:"/about",exact:!0,component:L}),r.a.createElement(o.b,{path:"/contact",exact:!0,component:T}),r.a.createElement(o.b,{path:"/signin",exact:!0,component:j}),r.a.createElement(o.b,{path:"/signUp",exact:!0,component:O}),r.a.createElement(o.b,{path:"/passwordreset",exact:!0,component:P}))};var ce=function(){return r.a.createElement(I,null,r.a.createElement(le,null))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ce,null)),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.335879dd.chunk.js.map