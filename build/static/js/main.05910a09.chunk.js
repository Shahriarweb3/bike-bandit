(this["webpackJsonpfullstack-bike-bandit-client"]=this["webpackJsonpfullstack-bike-bandit-client"]||[]).push([[0],{269:function(e,t,n){},270:function(e,t,n){},276:function(e,t,n){},590:function(e,t,n){},593:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(75),i=n.n(a),s=(n(269),n(270),n(21)),o=n(654),d=n(24),j=n(639),l=n(649),b=n.p+"static/media/bikeBanner.2f927e35.jpg",h=n(665),x=n(652),u=n(650),O=n(23),m=n(0),p={background:"url(".concat(b,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover"},f={display:"flex",alignItems:"center",height:400},g=function(){return Object(m.jsx)("div",{style:p,children:Object(m.jsx)(h.a,{children:Object(m.jsxs)(l.a,{container:!0,spacing:2,children:[Object(m.jsx)(l.a,{item:!0,xs:12,md:6,style:Object(d.a)(Object(d.a)({},f),{},{textAlign:"left"}),children:Object(m.jsxs)(j.a,{children:[Object(m.jsxs)(x.a,{sx:{fontFamily:"Monospace",fontWeight:"bold"},variant:"h3",style:{color:"White"},children:["DROP A GEAR ",Object(m.jsx)("br",{}),"AND DISAPPEAR"]}),Object(m.jsx)(x.a,{variant:"body2",sx:{my:3,fontFamily:"sans-serif",fontWeight:"bold"},style:{color:"white",textAlign:"left"},children:"Motorcycling culture is something that riders enjoy no matter how different they are in terms of religion, gender, language, race, or skin color"}),Object(m.jsx)("br",{}),Object(m.jsx)(O.b,{style:{textDecoration:"none"},to:"/explore",children:Object(m.jsx)(u.a,{variant:"contained",style:{backgroundColor:"#46CAC4"},children:"EXPLORE BIKES"})})]})}),Object(m.jsx)(l.a,{})]})})})},v=(n(276),function(e){var t=e.embedId;return Object(m.jsx)("div",{className:"video-responsive",children:Object(m.jsx)("iframe",{width:"853",height:"480",src:"https://www.youtube.com/embed/".concat(t),frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"Embedded youtube"})})});function y(){return Object(m.jsxs)(h.a,{className:"App",children:[Object(m.jsx)("h1",{style:{marginTop:"50px",marginBottom:"50px"},children:"Vidoes for Bikers"}),Object(m.jsxs)(l.a,{container:!0,rowSpacing:3,columnSpacing:{xs:1,sm:2,md:3},children:[Object(m.jsx)(l.a,{item:!0,xs:6,md:4,children:Object(m.jsx)(v,{embedId:"z_9e-EWA8Kg"})}),Object(m.jsx)(l.a,{item:!0,xs:6,md:4,children:Object(m.jsx)(v,{embedId:"lVYThFQPPL8"})}),Object(m.jsx)(l.a,{item:!0,xs:6,md:4,children:Object(m.jsx)(v,{embedId:"QQ-RR7Y4dJo"})}),Object(m.jsx)(l.a,{item:!0,xs:6,md:4,children:Object(m.jsx)(v,{embedId:"E0YVSZClAuw"})}),Object(m.jsx)(l.a,{item:!0,xs:6,md:4,children:Object(m.jsx)(v,{embedId:"xoTw7YQSZK4"})}),Object(m.jsx)(l.a,{item:!0,xs:6,md:4,children:Object(m.jsx)(v,{embedId:"b2xl2-5nF9Y"})})]})]})}var w=n(13),k=n(667),S=n(666),D=n(669),B=n(668),C=function(e){var t=e.bike,n=t._id,c=t.productName,r=t.productDescription,a=t.productPrice,i=t.img;return Object(m.jsx)(l.a,{item:!0,xs:4,sm:4,md:4,children:Object(m.jsxs)(S.a,{sx:{minWidth:275,border:0,boxShadow:0},children:[Object(m.jsx)(k.a,{component:"img",style:{width:"80%",height:"80%",margin:"0 auto"},image:i,alt:"honda image"}),Object(m.jsxs)(B.a,{children:[Object(m.jsx)(x.a,{gutterBottom:!0,variant:"h5",component:"div",children:c}),Object(m.jsx)(x.a,{variant:"body2",color:"text.secondary",children:r}),Object(m.jsx)(x.a,{variant:"body2",color:"text.secondary",children:a})]}),Object(m.jsx)(D.a,{children:Object(m.jsx)(O.c,{style:{textDecoration:"none",margin:"auto"},to:"/motorbikes/".concat(n),children:Object(m.jsx)(u.a,{variant:"contained",style:{backgroundColor:"#46CAC4"},children:"BUY NOW"})})})]})})},P=function(){var e=Object(c.useState)([]),t=Object(w.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){fetch("https://fierce-garden-19030.herokuapp.com/motorBikes").then((function(e){return e.json()})).then((function(e){return r(e.slice(0,6))}))}),[]),Object(m.jsxs)(h.a,{sx:{mt:10},children:[Object(m.jsx)(x.a,{sx:{color:"success.main",mb:5},variant:"h6",component:"div",children:"OUR TRENDY BIKES"}),Object(m.jsx)(j.a,{sx:{flexGrow:1},children:Object(m.jsx)(l.a,{container:!0,spacing:{xs:2,md:3},columns:{xs:4,sm:8,md:12},children:n.map((function(e){return Object(m.jsx)(C,{bike:e},e.name)}))})})]})},N=function(e){var t=e.rating,n=t.reviewerName,c=t.ratingText,r=t.userImg;return Object(m.jsx)(l.a,{item:!0,xs:3,sm:6,md:3,children:Object(m.jsxs)(S.a,{sx:{minWidth:275,border:0,boxShadow:0},children:[Object(m.jsx)(k.a,{component:"img",style:{width:"30%",height:"30%",margin:"0 auto",borderRadius:"100px"},image:r,alt:"reviewer image"}),Object(m.jsxs)(B.a,{children:[Object(m.jsx)(x.a,{gutterBottom:!0,variant:"h6",component:"div",children:n}),Object(m.jsxs)(x.a,{variant:"body2",color:"text.secondary",children:["Review:",c]})]})]})})},A=function(){var e=Object(c.useState)([]),t=Object(w.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){fetch("https://fierce-garden-19030.herokuapp.com/rating").then((function(e){return e.json()})).then((function(e){return r(e)}))}),[]),Object(m.jsxs)(h.a,{children:[Object(m.jsx)(x.a,{sx:{color:"success.main",m:2},variant:"h6",component:"div",children:"Buyer Reviews"}),Object(m.jsx)(j.a,{sx:{flexGrow:1},children:Object(m.jsx)(l.a,{container:!0,spacing:{xs:2,md:3},columns:{xs:4,sm:8,md:12},children:n.map((function(e){return Object(m.jsx)(N,{rating:e},e._id)}))})})]})},E=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(g,{}),Object(m.jsx)(o.a,{}),Object(m.jsx)(P,{}),Object(m.jsx)(o.a,{sx:{p:5}}),Object(m.jsx)(A,{}),Object(m.jsx)(o.a,{sx:{p:4}}),Object(m.jsx)(y,{}),Object(m.jsx)(o.a,{sx:{p:4}})]})},I=n(246),T={apiKey:"AIzaSyAkZHw0BLc5Sp586OEJNOz15nzfFGKergM",authDomain:"fullstack-assignment-12.firebaseapp.com",projectId:"fullstack-assignment-12",storageBucket:"fullstack-assignment-12.appspot.com",messagingSenderId:"278216180637",appId:"1:278216180637:web:f29f56c1a127ce28492574"},R=function(){Object(I.a)(T)},L=n(85);R();var Y=function(){var e=Object(c.useState)({}),t=Object(w.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!0),i=Object(w.a)(a,2),s=i[0],o=i[1],d=Object(c.useState)(),j=Object(w.a)(d,2),l=(j[0],j[1]),b=Object(c.useState)(!1),h=Object(w.a)(b,2),x=h[0],u=h[1],O=Object(L.b)();Object(c.useEffect)((function(){var e=Object(L.c)(O,(function(e){r(e||{}),o(!1)}));return function(){return e}}),[O]),Object(c.useEffect)((function(){var e="https://fierce-garden-19030.herokuapp.com/users/".concat(n.email);fetch(e).then((function(e){return e.json()})).then((function(e){return u(e.admin)}))}),[n.email]);var m=function(e,t){var n={email:e,displayName:t};fetch("https://fierce-garden-19030.herokuapp.com/users",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(n)}).then()};return{user:n,isLoading:s,admin:x,registerUser:function(e,t,n,c){o(!0),Object(L.a)(O,e,t).then((function(t){t.user;r({email:e,displayName:c}),m(e,c),Object(L.f)(O.currentUser,{displayName:c}).then((function(){})).catch((function(e){})),n.replace("/")})).catch((function(e){l(e.message)})).finally((function(){return o(!1)}))},loginUser:function(e,t,n,c){o(!0),Object(L.d)(O,e,t).then((function(e){var t,r=(null===n||void 0===n||null===(t=n.state)||void 0===t?void 0:t.from)||"/";c.replace(r)})).catch((function(e){})).finally((function(){return o(!1)}))},logOut:function(){o(!0),Object(L.e)(O).then((function(){})).catch((function(e){})).finally((function(){return o(!1)}))}}},M=Object(c.createContext)(),W=function(e){var t=e.children,n=Y();return Object(m.jsx)(M.Provider,{value:n,children:t})},G=n(644),U=function(){return Object(c.useContext)(M)},_=(n.p,function(){var e=Object(c.useState)(),t=Object(w.a)(e,2),n=t[0],r=t[1],a=U(),i=(a.user,a.loginUser),o=(a.isLoading,Object(s.h)()),j=Object(s.g)(),l=function(e){var t=e.target.name,c=e.target.value,a=Object(d.a)({},n);a[t]=c,r(a)};return Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{style:{color:"purple"},children:"Please Login"}),Object(m.jsx)(h.a,{sx:{display:"flex",justifyContent:"center",p:1,m:1},item:!0,xs:12,md:6,children:Object(m.jsx)("div",{container:!0,spacing:2,sx:{mt:8},item:!0,xs:12,md:6,children:Object(m.jsxs)("form",{onSubmit:function(e){i(n.email,n.password,o,j),e.preventDefault()},children:[Object(m.jsx)(G.a,{sx:{width:"75%"},id:"standard-basic",name:"email",onBlur:l,label:"Your Email",variant:"standard"}),Object(m.jsx)("br",{}),Object(m.jsx)(G.a,{sx:{width:"75%"},id:"standard-basic",label:"Password",name:"password",onBlur:l,type:"password",variant:"standard"}),Object(m.jsx)(O.c,{to:"/register",style:{textDecoration:"none"},children:Object(m.jsx)(u.a,{variant:"text",children:"New User? Please Register"})}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)(u.a,{type:"submit",variant:"contained",style:{backgroundColor:"#46CAC4"},children:"LOGIN"})]})})})]})}),F=n(655),J=n.p+"static/media/honda_cbr.45c92bf4.jpg",V=function(){var e=Object(c.useState)(),t=Object(w.a)(e,2),n=t[0],r=t[1],a=U(),i=(a.user,a.registerUser),o=a.isLoading,j=Object(s.g)(),b=function(e){var t=e.target.name,c=e.target.value,a=Object(d.a)({},n);a[t]=c,r(a)};return Object(m.jsxs)(h.a,{children:[Object(m.jsx)("h2",{style:{color:"purple"},children:"Please Register"}),Object(m.jsxs)(l.a,{container:!0,spacing:2,children:[Object(m.jsx)(l.a,{sx:{mt:8},item:!0,xs:12,md:6,children:Object(m.jsxs)(x.a,{variant:"h3",gutterBottom:!0,children:[!o&&Object(m.jsxs)("form",{onSubmit:function(e){n.password===n.password2?(i(n.email,n.password,j,n.name),alert("Registered Successfully"),e.preventDefault()):alert("Your password did not match")},children:[Object(m.jsx)(G.a,{sx:{width:"75%"},id:"standard-basic",name:"name",onBlur:b,label:"Your Name",variant:"standard"}),Object(m.jsx)(G.a,{sx:{width:"75%"},id:"standard-basic",name:"email",onBlur:b,label:"Your Email",variant:"standard"}),Object(m.jsx)("br",{}),Object(m.jsx)(G.a,{sx:{width:"75%"},id:"standard-basic",label:"Password",name:"password",onBlur:b,type:"password",variant:"standard"}),Object(m.jsx)(G.a,{sx:{width:"75%"},id:"standard-basic",label:"Confirm Password",name:"password2",onBlur:b,type:"password",variant:"standard"}),Object(m.jsx)(O.c,{to:"/login",style:{textDecoration:"none"},children:Object(m.jsx)(u.a,{variant:"text",children:"Registered User? Please Login"})}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)(u.a,{type:"submit",variant:"contained",style:{backgroundColor:"#46CAC4"},children:"REGISTER"})]}),o&&Object(m.jsx)(F.a,{})]})}),Object(m.jsx)(l.a,{item:!0,xs:12,md:6,children:Object(m.jsx)("img",{stye:{width:"100%"},src:J,alt:""})})]})]})},z=(n(278),function(e){var t=U().user,n=e.buyNow,r=n.productName,a=n.productPrice,i={name:t.displayName,email:t.email,address:"",city:"",phone:""},s=Object(c.useState)(i),o=Object(w.a)(s,2),j=o[0],b=o[1],h=function(e){var t=e.target.name,n=e.target.value,c=Object(d.a)({},j);c[t]=n,b(c)};return Object(m.jsx)("div",{children:Object(m.jsx)(l.a,{sx:{mt:8},item:!0,xs:12,md:6,children:Object(m.jsxs)("form",{onSubmit:function(e){var t=Object(d.a)(Object(d.a)({},j),{},{productName:r,productPrice:a});fetch("https://fierce-garden-19030.herokuapp.com/orders",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){e.insertedId&&alert("Order processed Successfully")})),e.preventDefault()},children:[Object(m.jsx)(G.a,{sx:{width:"75%"},id:"standard-basic",name:"name",onBlur:h,label:"Your Name",defaultValue:t.displayName,variant:"standard"}),Object(m.jsx)(G.a,{sx:{width:"75%"},id:"standard-basic",name:"email",defaultValue:t.email,onBlur:h,label:"Your Email",variant:"standard"}),Object(m.jsx)("br",{}),Object(m.jsx)(G.a,{disabled:!0,sx:{width:"75%"},id:"standard-basic",name:"productName",value:"Bike Name: ".concat(r),variant:"standard"}),Object(m.jsx)(G.a,{disabled:!0,sx:{width:"75%"},id:"standard-basic",name:"productPrice",value:"Tk ".concat(a),variant:"standard"}),Object(m.jsx)(G.a,{sx:{width:"75%"},id:"standard-basic",label:"address",name:"address",onBlur:h,variant:"standard"}),Object(m.jsx)(G.a,{sx:{width:"75%"},id:"standard-basic",label:"city",name:"city",onBlur:h,variant:"standard"}),Object(m.jsx)(G.a,{sx:{width:"75%"},id:"standard-basic",label:"phone",name:"phone",onBlur:h,variant:"standard"}),Object(m.jsx)(u.a,{type:"submit",variant:"contained",style:{backgroundColor:"#46CAC4"},children:"Buy Now"})]})})})}),K=(n(590),function(){U().user;var e=Object(s.i)().bikeId,t=Object(c.useState)({}),n=Object(w.a)(t,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){fetch("https://fierce-garden-19030.herokuapp.com/motorBikes/".concat(e)).then((function(e){return e.json()})).then((function(e){return a(e)}))}),[e]),Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:"Order Detail"}),Object(m.jsxs)(h.a,{sx:{justifyContent:"space-around",display:"flex",flexDirection:"row"},children:[Object(m.jsx)(l.a,{item:!0,xs:4,sm:4,md:6,children:Object(m.jsxs)(S.a,{sx:{minWidth:275,border:0,boxShadow:0},children:[Object(m.jsx)(k.a,{component:"img",style:{width:"80%",height:"80%",margin:"0 auto"},image:r.img,alt:"honda image"}),Object(m.jsxs)(B.a,{children:[Object(m.jsx)(x.a,{gutterBottom:!0,variant:"h5",component:"div",children:r.productName}),Object(m.jsx)(x.a,{gutterBottom:!0,variant:"h5",component:"div",children:r.productPrice}),Object(m.jsx)(x.a,{variant:"body2",color:"text.secondary",children:r.productDescription})]})]})}),Object(m.jsx)(z,{buyNow:r})]})]})}),H=function(){var e=Object(c.useState)([]),t=Object(w.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){fetch("https://fierce-garden-19030.herokuapp.com/motorBikes").then((function(e){return e.json()})).then((function(e){return r(e)}))}),[]),Object(m.jsxs)(h.a,{sx:{mb:10},children:[Object(m.jsx)(x.a,{sx:{color:"success.main",m:2},variant:"h6",component:"div",children:"OUR TRENDY BIKES"}),Object(m.jsx)(j.a,{sx:{flexGrow:1},children:Object(m.jsx)(l.a,{container:!0,spacing:{xs:2,md:3},columns:{xs:4,sm:8,md:12},children:n.map((function(e){return Object(m.jsx)(C,{bike:e},e.name)}))})})]})},Q=n(138),Z=["children"],X=function(e){var t=e.children,n=Object(Q.a)(e,Z),c=U(),r=c.user;return c.isLoading?Object(m.jsx)(F.a,{}):Object(m.jsx)(s.b,Object(d.a)(Object(d.a)({},n),{},{render:function(e){var n=e.location;return r.email?t:Object(m.jsx)(s.a,{to:{pathname:"/login",state:{from:n}}})}}))},q=n(664),$=n(643),ee=n(651),te=n(656),ne=n(136),ce=n.n(ne),re=n(663),ae=n(647),ie=n(642),se=function(){var e=Object(c.useState)(""),t=Object(w.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!1),i=Object(w.a)(a,2),s=i[0],o=i[1];return Object(m.jsx)("div",{children:Object(m.jsxs)(ie.a,{mb:20,mt:12,children:[Object(m.jsx)("h2",{children:"Make an Admin"}),Object(m.jsxs)("form",{sx:{m:8},onSubmit:function(e){var t={email:n};fetch("https://fierce-garden-19030.herokuapp.com/users/admin",{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){e.modifiedCount&&(r(""),o(!0))})),e.preventDefault()},children:[Object(m.jsx)(G.a,{sx:{width:"30%"},label:"Email",type:"email",onBlur:function(e){r(e.target.value)},variant:"standard"}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)(u.a,{type:"submit",style:{backgroundColor:"goldenrod"},variant:"contained",children:"Make Admin"})]}),s&&Object(m.jsx)(ae.a,{severity:"success",children:"Made Admin successfully!"})]})})},oe=n(134),de=function(){var e=Object(oe.a)(),t=e.register,n=e.handleSubmit;e.reset,e.formState.errors;return Object(m.jsx)("div",{style:{marginBottom:"150px"},children:Object(m.jsxs)("form",{className:"shipping-form",onSubmit:n((function(e){fetch("https://fierce-garden-19030.herokuapp.com/motorbikes",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){e.insertedId&&alert("Product Added Successfully")}))})),children:[Object(m.jsx)("input",Object(d.a)({defaultValue:"",placeholder:"Product Name"},t("productName"))),Object(m.jsx)("input",Object(d.a)({defaultValue:"",placeholder:"Description"},t("productDescription"))),Object(m.jsx)("input",Object(d.a)({placeholder:"Price",defaultValue:""},t("productPrice"))),Object(m.jsx)("input",Object(d.a)({placeholder:"Image url",defaultValue:""},t("img"))),Object(m.jsx)("input",{type:"submit"})]})})},je=function(){var e=Object(c.useState)([]),t=Object(w.a)(e,2),n=t[0],r=t[1];Object(c.useEffect)((function(){fetch("https://fierce-garden-19030.herokuapp.com/motorbikes").then((function(e){return e.json()})).then((function(e){return r(e)}))}),[]);return Object(m.jsxs)(h.a,{sx:{mb:10},children:[Object(m.jsxs)(x.a,{sx:{color:"success.main",m:2},variant:"h6",component:"div",children:["Total Bikes: ",n.length]}),Object(m.jsx)(j.a,{sx:{flexGrow:1},children:Object(m.jsx)(l.a,{container:!0,spacing:{xs:2,md:3},children:n.map((function(e){return Object(m.jsx)(l.a,{item:!0,xs:12,sm:6,md:4,children:Object(m.jsxs)(S.a,{sx:{minWidth:275,border:0,boxShadow:0},children:[Object(m.jsx)(k.a,{component:"img",style:{width:"80%",height:"80%",margin:"0 auto"},image:e.img,alt:"honda image"}),Object(m.jsxs)(B.a,{children:[Object(m.jsx)(x.a,{gutterBottom:!0,variant:"h5",component:"div",children:e.productName}),Object(m.jsx)(x.a,{variant:"body2",color:"text.secondary",children:e.productPrice})]}),Object(m.jsx)(D.a,{children:Object(m.jsx)(u.a,{onClick:function(){return function(e){if(window.confirm("Are you sure, you want to delete?")){var t="https://fierce-garden-19030.herokuapp.com/motorbikes/".concat(e);fetch(t,{method:"DELETE"}).then((function(e){return e.json()})).then((function(t){if(console.log(t),t.deletedCount>0){alert("deleted");var c=n.filter((function(t){return t._id!==e}));r(c)}}))}}(e._id)},variant:"contained",style:{backgroundColor:"#46CAC4",marginLeft:"80px"},children:"Delelet Product"})})]})})}))})})]})},le=n(657),be=n(653),he=n(658),xe=n(659),ue=n(660),Oe=n(661),me=n(662),pe=function(){var e=Object(c.useState)([]),t=Object(w.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)({status:"Pending"}),i=Object(w.a)(a,2),s=(i[0],i[1]);Object(c.useEffect)((function(){fetch("https://fierce-garden-19030.herokuapp.com/orders").then((function(e){return e.json()})).then((function(e){return r(e)}))}),[]);return Object(m.jsx)("div",{children:Object(m.jsxs)(h.a,{children:[Object(m.jsxs)(x.a,{variant:"h4",sx:{textAlign:"center",fontWeight:"bold",my:4},children:["Total Orders: ",n.length]}),Object(m.jsx)(le.a,{component:be.a,children:Object(m.jsxs)(he.a,{sx:{minWidth:300},"aria-label":"orders table",children:[Object(m.jsx)(xe.a,{children:Object(m.jsxs)(ue.a,{children:[Object(m.jsx)(Oe.a,{children:"Name"}),Object(m.jsx)(Oe.a,{align:"right",children:"Bike Ordered"}),Object(m.jsx)(Oe.a,{align:"right",children:"Price"}),Object(m.jsx)(Oe.a,{align:"right",children:"Order Status"}),Object(m.jsx)(Oe.a,{align:"right",children:"Actions"})]})}),Object(m.jsx)(me.a,{children:n.map((function(e){return Object(m.jsxs)(ue.a,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(m.jsx)(Oe.a,{component:"th",scope:"row",children:e.name}),Object(m.jsx)(Oe.a,{align:"right",children:e.productName}),Object(m.jsx)(Oe.a,{align:"right",children:e.productPrice}),Object(m.jsx)(Oe.a,{align:"right",children:Object(m.jsx)(u.a,{variant:"contained",onClick:function(){return function(e){var t="https://fierce-garden-19030.herokuapp.com/orders/".concat(e);fetch(t,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify()}).then((function(e){return e.json()})).then((function(e){return console.log(e)}))}(e._id)},style:{color:"red"},children:e.status})}),Object(m.jsxs)(Oe.a,{align:"right",children:[Object(m.jsx)(u.a,{onClick:function(){return e._id,void s(!0)}}),Object(m.jsx)(u.a,{onClick:function(){return function(e){if(window.confirm("Are you sure, you want to delete?")){var t="https://fierce-garden-19030.herokuapp.com/orders/".concat(e);fetch(t,{method:"DELETE"}).then((function(e){return e.json()})).then((function(t){if(t.deletedCount>0){alert("deleted");var c=n.filter((function(t){return t._id!==e}));r(c)}}))}}(e._id)},children:"Delete Order"})]})]},e._id)}))})]})})]})})},fe=function(){var e=U().user,t=Object(oe.a)(),n=t.register,c=t.handleSubmit;t.reset,t.formState.errors;return Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:"Give Your Review"}),Object(m.jsx)("form",{style:{backgroundColor:"white",marginLeft:"35%",marginRight:"35%",border:"1px solid gray",borderRadius:"10px"},className:"shipping-form",onSubmit:c((function(e){fetch("https://fierce-garden-19030.herokuapp.com/rating",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){e.insertedId&&alert("Review Added Successfully")}))})),children:Object(m.jsxs)(ie.a,{style:{padding:"30px"},children:[Object(m.jsx)(G.a,Object(d.a)(Object(d.a)({sx:{width:"100%",mb:4},id:"standard-basic",value:e.displayName},n("reviewerName")),{},{label:"Your Email",variant:"standard"})),Object(m.jsx)(G.a,Object(d.a)(Object(d.a)({id:"outlined-multiline-static",label:"Text here"},n("ratingText")),{},{multiline:!0,rows:4})),Object(m.jsx)(G.a,Object(d.a)(Object(d.a)({sx:{width:"100%"},id:"standard-basic"},n("userImg")),{},{defaultValue:"https://i.ibb.co/0hF4Mn4/review.png",variant:"standard"})),Object(m.jsx)("input",{value:"Submit Reiew",style:{width:"80%"},type:"submit"})]})})]})},ge=function(){var e=U().user,t=Object(c.useState)([]),n=Object(w.a)(t,2),r=n[0],a=n[1];Object(c.useEffect)((function(){var t="https://fierce-garden-19030.herokuapp.com/orders?email=".concat(e.email);fetch(t).then((function(e){return e.json()})).then((function(e){return a(e)}))}),[e.email]);return Object(m.jsx)("div",{style:{marginBottom:"250px"},children:Object(m.jsxs)(h.a,{children:[Object(m.jsxs)(x.a,{variant:"h4",sx:{textAlign:"center",fontWeight:"bold",my:4},children:["Your Total Orders: ",r.length]}),Object(m.jsx)(le.a,{component:be.a,children:Object(m.jsxs)(he.a,{sx:{minWidth:300},"aria-label":"orders table",children:[Object(m.jsx)(xe.a,{children:Object(m.jsxs)(ue.a,{children:[Object(m.jsx)(Oe.a,{children:"Name"}),Object(m.jsx)(Oe.a,{align:"right",children:"Bike Ordered"}),Object(m.jsx)(Oe.a,{align:"right",children:"Price"}),Object(m.jsx)(Oe.a,{align:"right",children:"Order Status"}),Object(m.jsx)(Oe.a,{align:"right",children:"Actions"})]})}),Object(m.jsx)(me.a,{children:r.map((function(e){return Object(m.jsxs)(ue.a,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(m.jsx)(Oe.a,{component:"th",scope:"row",children:e.name}),Object(m.jsx)(Oe.a,{align:"right",children:e.productName}),Object(m.jsx)(Oe.a,{align:"right",children:e.productDescription}),Object(m.jsx)(Oe.a,{align:"right",children:Object(m.jsx)(u.a,{disabled:!0,style:{color:"red"},children:"Pending"})}),Object(m.jsx)(Oe.a,{align:"right",children:Object(m.jsx)(u.a,{onClick:function(){return function(e){if(window.confirm("Are you sure, you want to delete?")){var t="https://fierce-garden-19030.herokuapp.com/orders/".concat(e);fetch(t,{method:"DELETE"}).then((function(e){return e.json()})).then((function(t){if(t.deletedCount>0){alert("deleted");var n=r.filter((function(t){return t._id!==e}));a(n)}}))}}(e._id)},children:"Delete Order"})})]},e._id)}))})]})})]})})},ve=function(){return Object(m.jsx)("div",{style:{marginBottom:"350px"},children:Object(m.jsx)("h1",{style:{textAlign:"center",marginTop:"30px"},children:"Payment System is Comming Soon"})})},ye=["children"],we=function(e){var t=e.children,n=Object(Q.a)(e,ye),c=U(),r=c.user,a=(c.isLoading,c.admin);return a?Object(m.jsx)(s.b,Object(d.a)(Object(d.a)({},n),{},{render:function(e){var n=e.location;return(null===r||void 0===r?void 0:r.email)&&a?t:Object(m.jsx)(s.a,{to:{pathname:"/",state:{from:n}}})}})):Object(m.jsx)(F.a,{})},ke=200;var Se=function(e){var t=e.window,n=c.useState(!1),r=Object(w.a)(n,2),a=r[0],i=r[1],d=U(),l=d.admin,b=d.logOut,h=Object(s.j)(),p=h.path,f=h.url,g=function(){i(!a)},v=Object(m.jsxs)("div",{children:[Object(m.jsx)(re.a,{}),Object(m.jsx)(o.a,{}),Object(m.jsx)(j.a,{children:l?Object(m.jsxs)(j.a,{children:[Object(m.jsx)(O.b,{to:"".concat(f,"/makeAdmin"),style:{textDecoration:"none"},children:Object(m.jsx)(u.a,{color:"inherit",children:"Make Admin"})}),Object(m.jsx)(O.b,{to:"".concat(f,"/manageorders"),style:{textDecoration:"none"},children:Object(m.jsx)(u.a,{color:"inherit",children:"Manage All Orders"})}),Object(m.jsx)(O.b,{to:"".concat(f,"/addproduct"),style:{textDecoration:"none"},children:Object(m.jsx)(u.a,{color:"inherit",children:"Add A Product"})}),Object(m.jsx)(O.b,{to:"".concat(f,"/manageproducts"),style:{textDecoration:"none"},children:Object(m.jsx)(u.a,{color:"inherit",children:"Manage Products"})}),Object(m.jsx)(O.b,{to:"/",style:{textDecoration:"none"},children:Object(m.jsx)(u.a,{onClick:b,color:"inherit",children:"Logout"})})]}):Object(m.jsxs)(j.a,{children:[Object(m.jsx)(O.b,{to:"".concat(f),style:{textDecoration:"none"},children:Object(m.jsx)(u.a,{color:"inherit",children:"Dashboard"})}),Object(m.jsx)("br",{}),Object(m.jsx)(O.b,{to:"".concat(f,"/payment"),style:{textDecoration:"none"},children:Object(m.jsx)(u.a,{color:"inherit",children:"Payment"})}),Object(m.jsx)("br",{}),Object(m.jsx)(O.b,{to:"".concat(f,"/myorders"),style:{textDecoration:"none"},children:Object(m.jsx)(u.a,{color:"inherit",children:"My Orders"})}),Object(m.jsx)(O.b,{to:"".concat(f,"/review"),style:{textDecoration:"none"},children:Object(m.jsx)(u.a,{color:"inherit",children:"Give A Review"})}),Object(m.jsx)("br",{}),Object(m.jsx)(O.b,{to:"/",style:{textDecoration:"none"},children:Object(m.jsx)(u.a,{onClick:b,color:"inherit",children:"Logout"})})]})})]}),y=void 0!==t?function(){return t().document.body}:void 0;return Object(m.jsxs)(j.a,{style:{backgroundColor:"LightCyan"},sx:{display:"flex"},children:[Object(m.jsx)($.a,{}),Object(m.jsx)(q.a,{position:"fixed",sx:{width:{sm:"calc(100% - ".concat(ke,"px)")},ml:{sm:"".concat(ke,"px")}},children:Object(m.jsxs)(re.a,{children:[Object(m.jsx)(te.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:g,sx:{mr:2,display:{sm:"none"}},children:Object(m.jsx)(ce.a,{})}),Object(m.jsx)(x.a,{variant:"h6",noWrap:!0,component:"div",children:"Dashboard"})]})}),Object(m.jsxs)(j.a,{component:"nav",sx:{width:{sm:ke},flexShrink:{sm:0}},"aria-label":"mailbox folders",children:[Object(m.jsx)(ee.a,{container:y,variant:"temporary",open:a,onClose:g,ModalProps:{keepMounted:!0},sx:{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:ke}},children:v}),Object(m.jsx)(ee.a,{variant:"permanent",sx:{display:{xs:"none",sm:"block"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:ke}},open:!0,children:v})]}),Object(m.jsxs)(j.a,{component:"main",sx:{flexGrow:1,p:3,width:{sm:"calc(100% - ".concat(ke,"px)")}},children:[Object(m.jsx)(re.a,{}),Object(m.jsxs)(s.d,{children:[Object(m.jsx)(s.b,{exact:!0,path:p,children:Object(m.jsx)(ge,{})}),Object(m.jsx)(s.b,{path:"".concat(p,"/payment"),children:Object(m.jsx)(ve,{})}),Object(m.jsx)(s.b,{path:"".concat(p,"/review"),children:Object(m.jsx)(fe,{})}),Object(m.jsx)(s.b,{path:"".concat(p,"/myorders"),children:Object(m.jsx)(ge,{})}),Object(m.jsx)(we,{path:"".concat(p,"/makeadmin"),children:Object(m.jsx)(se,{})}),Object(m.jsx)(we,{path:"".concat(p,"/manageorders"),children:Object(m.jsx)(pe,{})}),Object(m.jsx)(we,{path:"".concat(p,"/addproduct"),children:Object(m.jsx)(de,{})}),Object(m.jsx)(we,{path:"".concat(p,"/manageproducts"),children:Object(m.jsx)(je,{})})]})]})]})},De=function(){return Object(m.jsx)(j.a,{sx:{width:"100%",bgcolor:"text.primary"},children:Object(m.jsxs)(l.a,{container:!0,rowSpacing:1,columnSpacing:{xs:1,sm:2,md:3},children:[Object(m.jsx)(l.a,{item:!0,xs:6,children:Object(m.jsx)("h1",{style:{color:"white"},children:"Bike Bandit"})}),Object(m.jsxs)(l.a,{sx:{display:"flex",flexDirection:"column"},item:!0,xs:6,children:[Object(m.jsx)(O.b,{to:"/explore",children:Object(m.jsx)(u.a,{variant:"text",style:{color:"white"},children:" Explore Bikes"})}),Object(m.jsx)(O.b,{to:"/aboutus",children:Object(m.jsx)(u.a,{variant:"text",style:{color:"white"},children:" About Us"})}),Object(m.jsx)(O.b,{to:"/contactus",children:Object(m.jsx)(u.a,{variant:"text",style:{color:"white"},children:" Contact Us"})})]})]})})},Be=function(){var e=U(),t=e.user,n=e.logOut;return Object(m.jsx)(j.a,{sx:{flexGrow:1},children:Object(m.jsx)(q.a,{position:"static",children:Object(m.jsxs)(re.a,{children:[Object(m.jsx)(te.a,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},children:Object(m.jsx)(ce.a,{})}),Object(m.jsx)(x.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:"Bike Bandit"}),Object(m.jsx)(O.b,{to:"/home"}),(null===t||void 0===t?void 0:t.email)?Object(m.jsxs)(j.a,{children:[Object(m.jsx)(O.c,{style:{textDecoration:"none"},to:"/",children:Object(m.jsx)(u.a,{style:{color:"white"},variant:"text",children:"Home"})}),Object(m.jsx)(O.c,{style:{textDecoration:"none"},to:"/dashboard",children:Object(m.jsx)(u.a,{style:{color:"white"},variant:"text",children:"DashBoard"})}),Object(m.jsx)(u.a,{onClick:n,color:"inherit",children:"Logout"})]}):Object(m.jsxs)(j.a,{children:[Object(m.jsx)(O.c,{style:{textDecoration:"none"},to:"/",children:Object(m.jsx)(u.a,{style:{color:"white"},variant:"text",children:"Home"})}),Object(m.jsx)(O.c,{style:{textDecoration:"none"},to:"/explore",children:Object(m.jsx)(u.a,{style:{color:"white"},children:"Our Products"})}),Object(m.jsx)(O.c,{style:{textDecoration:"none"},to:"/login",children:Object(m.jsx)(u.a,{style:{color:"white"},children:"Login"})})]})]})})})},Ce=function(){return Object(m.jsx)(j.a,{sx:{justifyContent:"center",p:6,display:"flex",flexWrap:"wrap","& > :not(style)":{m:1,width:"60%,",height:"50%,"}},children:Object(m.jsxs)(be.a,{sx:{p:20},elevation:3,children:[Object(m.jsx)("h2",{style:{textAlign:"center"},children:"Sorry, You Typed Wrong Path"}),Object(m.jsx)("br",{}),Object(m.jsx)(O.b,{to:"/",style:{textDecoration:"none"},children:Object(m.jsx)(u.a,{style:{marginTop:"-20px"},variant:"contained",children:" Go to Home"})})]})})};var Pe=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(W,{children:Object(m.jsxs)(O.a,{children:[Object(m.jsx)(Be,{}),Object(m.jsxs)(s.d,{children:[Object(m.jsx)(s.b,{path:"/home",children:Object(m.jsx)(E,{})}),Object(m.jsx)(s.b,{path:"/explore",children:Object(m.jsx)(H,{})}),Object(m.jsx)(s.b,{path:"/login",children:Object(m.jsx)(_,{})}),Object(m.jsx)(s.b,{path:"/register",children:Object(m.jsx)(V,{})}),Object(m.jsx)(X,{path:"/motorbikes/:bikeId",children:Object(m.jsx)(K,{})}),Object(m.jsx)(X,{path:"/buynowbike",children:Object(m.jsx)(K,{})}),Object(m.jsx)(s.b,{path:"/dashboard",children:Object(m.jsx)(Se,{})}),Object(m.jsx)(s.b,{exact:!0,path:"/",children:Object(m.jsx)(E,{})}),Object(m.jsx)(s.b,{exact:!0,path:"*",children:Object(m.jsx)(Ce,{})})]}),Object(m.jsx)(De,{})]})})})},Ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,671)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(Pe,{})}),document.getElementById("root")),Ne()}},[[593,1,2]]]);
//# sourceMappingURL=main.05910a09.chunk.js.map