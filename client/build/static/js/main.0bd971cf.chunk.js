(this.webpackJsonpweekly=this.webpackJsonpweekly||[]).push([[0],{108:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),o=a.n(c),i=a(2),l=(a(66),a(25)),s={background:"#DCDDDF",overlay:"rgba(220, 221, 223, .85)",hasActivity:"#cccfd5",text:"#2C2645",arrow:"#62606c",innerShadow:"inset 4px 4px 10px #CACBCE, inset -4px -4px 10px #EFEFF0",shadow:"4px 4px 10px #CACBCE, -4px -4px 10px #EFEFF0",todayBg:"#4a5468"},u={background:"#292A30",overlay:"rgba(41, 42, 48, .85)",hasActivity:"#194f3e",text:"#fff",arrow:"#b0afaf",innerShadow:"inset 4px 4px 10px #1F1F24, inset -4px -4px 10px #31333A",shadow:"4px 4px 10px #1F1F24, -4px -4px 10px #31333A",todayBg:"#2699fd"},m=a(53);function d(){var e=Object(m.a)(["\n    *,\n    *::after,\n    *::before {\n        box-sizing: border-box;\n    }\n\n    :root {\n        --overlay: ",";\n        --primary-color : ",";\n        --inner-shadow: ",";\n        --shadow: ","\n    }\n\n    body, \n    .navbar {\n        background: ",";\n        color: ",";\n    }    \n\n    a { \n        color: ","; \n        text-decoration: none;\n    }\n\n    .soft-shadow {\n        box-shadow: ",";\n    }\n\n    .inner-shadow {\n        box-shadow: ",";\n    }    \n    \n    .google-button,.profile-container, .profile-collapse-item {\n        color: "," !important;\n        background-color: "," !important;\n        box-shadow: "," !important;\n    }\n\n    .google-button > div {\n        background-color: "," !important;\n    }\n\n    .google-button:hover, .google-button:hover > div, \n    .profile-collapse-item:hover {\n        box-shadow: "," !important;\n    }\n\n    .day {\n        color: ",";\n        opacity: .5;\n    }\n\n    .today {\n        background-color: "," !important;\n        opacity: 1 !important;        \n    }\n\n    .today .calendar-date {\n        color: #fff;\n    }\n\n    .arrow-svg {\n        fill: ",";\n    }    \n\n    .add-svg {        \n        fill: ",";\n    }\n\n    .calendar-date {\n        color: ",";\n    }\n\n    .hasActivity {        \n        background: "," !important;\n        opacity: 1;\n        animation: none !important;\n        box-shadow: none !important;        \n    }\n\n    .hasActivity .calendar-date {\n        color: inherit !important;\n    }\n    \n    input,     \n    .date,\n    form select,\n    textarea {\n        border: none;\n        -moz-box-shadow: ",";\n        -webkit-box-shadow: ",";\n        box-shadow: ",";\n        background: ",";\n    }\n\n    .round {\n        border-radius: 50px !important; \n    }\n\n    .neomorphism-logo { \n        border-radius: 5px;\n        cursor: pointer;\n        display:flex;\n        flex-flow:column;\n        align-items: center;\n        justify-content: center;               \n        box-shadow: ",";                                   \n        width: 35px;\n        height: 35px;\n        padding: 10px;\n        background: ",";\n    }     \n\n    .main-right__day:hover, \n    .neomorphism-logo:hover {        \n        animation: shadowOnHoverAnimation 100ms ease-out forwards;\n    }\n\n    .today:hover {\n        animation: unset;\n    }\n\n    @keyframes shadowOnHoverAnimation {\n        from {            \n            box-shadow: ",";\n        }\n        to {            \n            opacity: 1;\n            box-shadow: ",";\n        }\n    }\n\n    .day:hover {\n        animation: none !important;\n    }\n    \n    .main-right::-webkit-scrollbar-track {\n        background: ",";\n    }\n    \n    .main-right::-webkit-scrollbar-thumb {\n        background: ",";\n    }\n       \n"]);return d=function(){return e},e}var f=Object(l.b)(d(),(function(e){return e.theme.overlay}),(function(e){return e.theme.background}),(function(e){return e.theme.innerShadow}),(function(e){return e.theme.shadow}),(function(e){return e.theme.background}),(function(e){return e.theme.text}),(function(e){return e.theme.text}),(function(e){return e.theme.shadow}),(function(e){return e.theme.innerShadow}),(function(e){return e.theme.text}),(function(e){return e.theme.background}),(function(e){return e.theme.shadow}),(function(e){return e.theme.background}),(function(e){return e.theme.innerShadow}),(function(e){return e.theme.text}),(function(e){return e.theme.todayBg}),(function(e){return e.theme.arrow}),(function(e){return e.theme.text}),(function(e){return e.theme.arrow}),(function(e){return e.theme.hasActivity}),(function(e){return e.theme.innerShadow}),(function(e){return e.theme.innerShadow}),(function(e){return e.theme.innerShadow}),(function(e){return e.theme.background}),(function(e){return e.theme.shadow}),(function(e){return e.theme.background}),(function(e){return e.theme.shadow}),(function(e){return e.theme.innerShadow}),(function(e){return e.theme.arrow}),(function(e){return e.theme.arrow})),p=a(7),h=a.n(p),g=a(8),v=a(15),E=(a(69),a(33)),y=a.n(E),w=a(34),b=a.n(w),N=a(20),O=a(35),C=a.n(O),x=function(e,t){switch(t.type){case"LOGIN":return t.authorizedUser;case"LOGOUT":localStorage.setItem("cloud_data",null),localStorage.setItem("authorized_user",null)}},_=Object(n.createContext)(),S=function(e){var t=Object(n.useReducer)(x,null,(function(){var e=localStorage.getItem("authorized_user");return e?JSON.parse(e):null})),a=Object(i.a)(t,2),c=a[0],o=a[1];return r.a.createElement(_.Provider,{value:{authorized_user:c,dispatchUser:o}},e.children)},j=a(58),Y=function(e,t){switch(t.type){case"ADD_ACTIVITY":return[].concat(Object(j.a)(e),[t.data]);case"FETCH_FROM_CLOUD":return t.data;case"EDIT_ACTIVITY":var a=t.data,n=t.data.activity_id;return e.map((function(e){return e.activity_id===n?a:e}));case"DELETE_ACTIVITY":return e.filter((function(e){return e.activity_id!==t.id}))}},M=Object(n.createContext)(),I=function(e){var t=Object(n.useReducer)(Y,[],(function(){var e=localStorage.getItem("user"),t=localStorage.getItem("cloud_data");if(e&&e.length>0){var a=localStorage.getItem("user");return a?JSON.parse(a):[]}return t&&t.length>0&&t?JSON.parse(t):[]})),a=Object(i.a)(t,2),c=a[0],o=a[1];return r.a.createElement(M.Provider,{value:{activities:c,dispatch:o}},e.children)},k=a(14),D=a.n(k),A=function(){var e=Object(v.a)(h.a.mark((function e(t,a){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:D.a.post("/activity/local_to_cloud",t).then((function(e){var t=e.data;a({type:"ADD_ACTIVITY",cloud_data:t})})).then((function(){localStorage.setItem("user",null)})).catch((function(e){return console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),T=function(){var e=Object(v.a)(h.a.mark((function e(t,a){var n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.post("/activity/create",t);case 2:n=e.sent,r=n.data,a({type:"ADD_ACTIVITY",data:r});case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),H=function(){var e=Object(v.a)(h.a.mark((function e(t,a,n){var r,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.delete("/activity/delete/".concat(t),{headers:{authorization:a.token}});case 2:r=e.sent,c=r.data,n({type:"DELETE_ACTIVITY",id:c});case 5:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),L=function(){var e=Object(v.a)(h.a.mark((function e(t,a,n){var r,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.put("/activity/editActivity/".concat(t.activity_id),t,{headers:{authorization:a}});case 2:r=e.sent,c=r.data,n({type:"EDIT_ACTIVITY",data:c});case 5:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),J=function(){var e=Object(v.a)(h.a.mark((function e(t,a,n){var r,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.get("/activity/displayAll/".concat(t),{headers:{authorization:a}});case 2:r=e.sent,c=r.data,n({type:"FETCH_FROM_CLOUD",data:c});case 5:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),F=function(e){var t=e.theme,a=e.toggleTheme,c=Object(n.useContext)(M).dispatch,o=Object(n.useContext)(_),l=o.authorized_user,s=o.dispatchUser,u=Object(n.useState)(!1),m=Object(i.a)(u,2),d=m[0],f=m[1],p=Object(n.useState)(!0),E=Object(i.a)(p,2),w=E[0],x=E[1],S=function(e){if(e.error)return console.log(e.error);function t(){return(t=Object(v.a)(h.a.mark((function t(){var a,n,r,o,i;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=function(){return(i=Object(v.a)(h.a.mark((function e(){var t,a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.post("/user/login",n);case 2:t=e.sent,a=t.data,r=Object(g.a)({},a.user,{token:a.token}),localStorage.setItem("authorized_user",JSON.stringify(r)),s({type:"LOGIN",authorizedUser:r}),f(!0);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)},o=function(){return i.apply(this,arguments)},t.next=4,e.getBasicProfile();case 4:if(a=t.sent){t.next=7;break}return t.abrupt("return",f(!1));case 7:n={name:a.getName(),image:a.getImageUrl(),email:a.getEmail(),id:a.getId()},(r=JSON.parse(localStorage.getItem("user")))&&r.activities.map((function(e,t){return e.data.map((function(t){var a=e.date_string.split("-"),r=a[0],o=a[1],i=a[2],l={email:n.email,dateString:e.date_string,title:t.title,desc:t.desc,time:t.time,activity_id:t.activity_id,currentYear:r,currentMonth:o,currentDay:i};return A(l,c),t})),e})),o();case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()};Object(n.useEffect)((function(){if(l){var e=l.email,t=l.token;J(e,t,c)}}),[l]);return r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"container"},r.a.createElement("strong",{className:"big-font"},r.a.createElement(N.b,{to:"/"},"Weekly.")),!1===d?r.a.createElement("div",{className:"unauthorized-navbar"},r.a.createElement("img",{onClick:function(){return a()},className:"logo",src:"light"===t?y.a:b.a,alt:"mode"}),r.a.createElement(C.a,{className:"google-button",clientId:"956380005789-cfjm68cr09pbtbmed8ibkeh6um8na7it.apps.googleusercontent.com",buttonText:"Sign In",onSuccess:S,onFailure:S,isSignedIn:!0,cookiePolicy:"single_host_origin"})):r.a.createElement("div",{className:"profile-container"},r.a.createElement("div",{className:"profile-header"},r.a.createElement("img",{className:"profile-avatar",src:l.image,alt:l.name}),r.a.createElement("p",{className:"profile-name"},l.name),r.a.createElement("svg",{onClick:function(){return x(!w)},className:"neomorphism-logo",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},r.a.createElement("path",{className:"add-svg",d:"M12,15a1,1,0,0,1-.71-.29l-4-4A1,1,0,0,1,8.71,9.29L12,12.59l3.29-3.29a1,1,0,0,1,1.41,1.41l-4,4A1,1,0,0,1,12,15Z"}))),r.a.createElement("div",{className:"profile-collapse-content ".concat(w?"collapse":"show-collapse")},r.a.createElement("p",{className:"profile-name profile-collapse-item"},l.name),r.a.createElement("div",{className:"profile-collapse-item",onClick:function(){return a()}},r.a.createElement("img",{className:"logo",src:"light"===t?y.a:b.a,alt:"mode"}),r.a.createElement("span",{className:"profile-collapse-item-text"},"Mode")),r.a.createElement(O.GoogleLogout,{className:"profile-collapse-item google-logout-button",onLogoutSuccess:function(){f(!1),s({type:"LOGOUT"})},buttonText:"Sign out",clientId:"956380005789-cfjm68cr09pbtbmed8ibkeh6um8na7it.apps.googleusercontent.com"})))))},G=a(5),B=a.n(G),R=function(e,t){switch(t.type){case"CHANGE_YEAR":return Object(g.a)({},e,{currentYear:t.currentYear,dateString:B()("".concat(t.currentYear,"/").concat(e.currentMonth,"/").concat(e.currentDay)).format("YYYY MM DD").split(" ").join("-")});case"CHANGE_MONTH":return Object(g.a)({},e,{currentMonth:t.currentMonth,dateString:B()("".concat(e.currentYear,"/").concat(t.currentMonth,"/").concat(e.currentDay)).format("YYYY MM DD").split(" ").join("-")});case"CHANGE_DAY":return Object(g.a)({},e,{currentDay:t.currentDay,dateString:B()("".concat(e.currentYear,"/").concat(e.currentMonth,"/").concat(t.currentDay)).format("YYYY MM DD").split(" ").join("-")})}},z=Object(n.createContext)(),V=function(e){var t={currentYear:B()().get("year"),currentMonth:B()().get("month")+1,currentDay:1},a=Object(n.useReducer)(R,t,(function(){var e=localStorage.getItem("current_dateInformation");return e?JSON.parse(e):t})),c=Object(i.a)(a,2),o=c[0],l=c[1];return Object(n.useEffect)((function(){return localStorage.setItem("current_dateInformation",JSON.stringify(o)),function(){return console.log("unmount day context.")}}),[o]),r.a.createElement(z.Provider,{value:{date:o,dispatch:l}},e.children)},Z=a(4),U=(a(91),function(e){var t=e._onDayClicked,a=e.day,c=e.month,o=e.year,l=Object(n.useContext)(M).activities,s=Object(n.useContext)(_).authorized_user,u=Object(n.useState)(!0),m=Object(i.a)(u,2),d=(m[0],m[1]),f=Object(n.useState)(""),p=Object(i.a)(f,2),h=p[0],g=p[1],v=Object(n.useState)(""),E=Object(i.a)(v,2),y=E[0],w=E[1];return Object(n.useEffect)((function(){var e=B()("".concat(o,"/").concat(c,"/").concat(a)).format("YYYY MM DD").split(" ").join("-"),t=B()().format("YYYY-MM-DD").split(" ").join("-");if(e===t&&w("today"),null!==JSON.parse(localStorage.getItem("user"))){var n=JSON.parse(localStorage.getItem("user"));n&&n.activities.length>0&&n.activities.map((function(t){return t.date_string===e&&g("hasActivity"),t}))}else s&&l&&l.length>0&&l.map((function(t){t.dateString!==e||g("hasActivity")}));d(!1)}),[c,o]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{onClick:function(e){return a&&t(e,a)},className:"soft-shadow main-right__day ".concat(y," ").concat(h)},r.a.createElement("h1",{className:"bold-font font--big calendar-date"},a)))}),P=a(1),W=function(e,t){var a=e.history,c=Object(n.useContext)(z),o=c.date,l=o.currentMonth,s=o.currentYear,u=c.dispatch,m=Object(n.useState)(0),d=Object(i.a)(m,2),f=d[0],p=d[1],h=Object(n.useContext)(M).activities,g=null;Object(n.useEffect)((function(){p(B()("".concat(s,"-").concat(l),"YYYY-MM").daysInMonth())}),[l,s,h]),Object(n.useEffect)((function(){var e=document.querySelector(".profile-container");e&&(e.style.display="none"),(new P.c).to(g,.75,{opacity:1}).to(g,.25,{opacity:0,display:"none"}).then((function(){return e?e.style.display="flex":null}))}),[]);var v=function(e,t){if("year"===e)switch(t){case"INCREMENT":u({type:"CHANGE_YEAR",currentYear:s+1});break;case"DECREMENT":u({type:"CHANGE_YEAR",currentYear:s-1})}else if("month"===e)switch(t){case"INCREMENT":12===l?(u({type:"CHANGE_YEAR",currentYear:s+1}),u({type:"CHANGE_MONTH",currentMonth:1})):u({type:"CHANGE_MONTH",currentMonth:l+1});break;case"DECREMENT":1===l?(u({type:"CHANGE_YEAR",currentYear:s-1}),u({type:"CHANGE_MONTH",currentMonth:12})):u({type:"CHANGE_MONTH",currentMonth:l-1})}},E=function(){return y()},y=function(){for(var e=[],t=1-B()("".concat(s,"-").concat(l),"YYYY-MM").day();t<=f;t++)t>=1?e.push(r.a.createElement(U,{key:t,_onDayClicked:w,day:t,month:l,year:s})):e.push(r.a.createElement(U,{key:t,day:""}));return e},w=function(e,t){u({type:"CHANGE_DAY",currentDay:t}),localStorage.setItem("current_dateInformation",JSON.stringify({currentDay:t,currentMonth:l,currentYear:s})),a.push("/detail")};return r.a.createElement("section",{className:"main-section"},r.a.createElement("div",{ref:function(e){return g=e},id:"main-cover"},r.a.createElement("h1",{className:"main-cover-title"},"Weekly.")),r.a.createElement("div",{className:"container main-container"},r.a.createElement("div",{className:"main-left",unselectable:"on"},r.a.createElement("div",{className:"main-left-item"},r.a.createElement("div",{className:"neomorphism-logo",onClick:function(){return v("year","DECREMENT")}},r.a.createElement("svg",{className:"logo",width:"36",height:"30",viewBox:"0 0 36 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{className:"arrow-svg",d:"M18 0L35.3205 30H0.679491L18 0Z"}))),r.a.createElement("div",{className:"main-left__itemContent"},r.a.createElement("strong",{className:"big-font"},s)),r.a.createElement("div",{className:"neomorphism-logo",onClick:function(){return v("year","INCREMENT")}},r.a.createElement("svg",{className:"logo",width:"36",height:"30",viewBox:"0 0 36 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{className:"arrow-svg",d:"M18 30L35.3205 0H0.679491L18 30Z",fill:"#C3C5C8"})))),r.a.createElement("div",{className:"main-left-item"},r.a.createElement("div",{className:"neomorphism-logo",onClick:function(){return v("month","DECREMENT")}},r.a.createElement("svg",{className:"logo",width:"36",height:"30",viewBox:"0 0 36 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{className:"arrow-svg",d:"M18 0L35.3205 30H0.679491L18 0Z"}))),r.a.createElement("div",{className:"main-left__itemContent"},r.a.createElement("strong",{className:"big-font"},l)),r.a.createElement("div",{className:"neomorphism-logo",onClick:function(){return v("month","INCREMENT")}},r.a.createElement("svg",{className:"logo",width:"36",height:"30",viewBox:"0 0 36 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{className:"arrow-svg",d:"M18 30L35.3205 0H0.679491L18 30Z",fill:"#C3C5C8"}))))),r.a.createElement("div",{className:"main-right"},r.a.createElement("p",{className:"day main-right__day"},"SUN"),r.a.createElement("p",{className:"day main-right__day"},"MON"),r.a.createElement("p",{className:"day main-right__day"},"TUE"),r.a.createElement("p",{className:"day main-right__day"},"WED"),r.a.createElement("p",{className:"day main-right__day"},"THU"),r.a.createElement("p",{className:"day main-right__day"},"FRI"),r.a.createElement("p",{className:"day main-right__day"},"SAT"),f>0&&r.a.createElement(E,null))))},q=(a(92),a(55)),Q=(a(93),function(e){var t=e.history,a=(e.index,e.activity),c=a.title,o=a.desc,l=a.time,s=a.activity_id,u=e._loadActivities,m=Object(n.useState)(!1),d=Object(i.a)(m,2),f=d[0],p=d[1],h=Object(n.useContext)(M).dispatch,g=function(e){Object(q.confirmAlert)({customUI:function(e){var t=e.onClose;return r.a.createElement("div",{className:"custom-ui soft-shadow"},r.a.createElement("h1",{className:"custom-ui__title"},"Delete this item?"),r.a.createElement("p",{className:"custom-ui__desc"},'"',c,'"'),r.a.createElement("button",{className:"soft-shadow",onClick:function(){var e=JSON.parse(localStorage.getItem("user")),a=JSON.parse(localStorage.getItem("current_dateInformation")),n=JSON.parse(localStorage.getItem("authorized_user"));n?H(s,n,h).then((function(){return J(n.email,n.token,h)})):(!function(e,t,a){e.activities.map((function(n,r){if(n.date_string===t.dateString){var c=e;c.activities[r].data=c.activities[r].data.filter((function(e,t){return e.activity_id!==a})),c.activities=c.activities.filter((function(e){return e.data.length>0})),localStorage.setItem("user",JSON.stringify(c))}return n}))}(e,a,s),u()),t()}},"Yes, Delete it!"),r.a.createElement("button",{className:"soft-shadow",onClick:t},"Cancel"))}})};return r.a.createElement("div",{className:"activity-card soft-shadow"},r.a.createElement("div",{className:"activity-card__header"},r.a.createElement("div",{className:"neomorphism-logo",onClick:function(e){p(!f)}},r.a.createElement("svg",{className:"logo arrow-svg",viewBox:"0 0 25 15",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M11.6486 7.61379C11.9274 7.78879 12.2386 7.90754 12.5636 7.96129C12.8799 7.95629 13.1836 7.83254 13.4124 7.61379L20.5774 0.717542C21.0655 0.258923 21.7095 0.00258005 22.3793 0.000260026C23.0491 -0.00206 23.6948 0.249815 24.1861 0.705042L24.2236 0.740042C24.4677 0.968327 24.6625 1.24416 24.7959 1.55056C24.9294 1.85695 24.9987 2.18743 24.9997 2.52163C25.0006 2.85583 24.9331 3.18669 24.8014 3.49383C24.6696 3.80097 24.4764 4.07789 24.2336 4.30754L13.4674 14.6413C13.2211 14.869 12.899 14.9969 12.5636 15C12.2203 14.945 11.8912 14.8232 11.5949 14.6413L0.763601 4.30754C0.521117 4.07755 0.328277 3.80036 0.196957 3.49303C0.0656373 3.18571 -0.00138355 2.85475 2.16475e-05 2.52055C0.00142685 2.18635 0.0712283 1.85597 0.205128 1.54976C0.339028 1.24355 0.534191 0.967985 0.778601 0.740042L0.823601 0.705042C1.31814 0.249804 1.96639 -0.0018451 2.63855 0.00047272C3.31072 0.00279054 3.95721 0.258904 4.4486 0.717542L11.6486 7.61379Z",fill:"inherit"}))),r.a.createElement("div",{className:"neomorphism-logo",onClick:function(e){t.push("/edit/".concat(s))}},r.a.createElement("svg",{className:"logo arrow-svg",viewBox:"0 0 25 25",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M0 19.7909V25H5.20906L20.5792 9.62981L15.3702 4.42075L0 19.7909ZM24.5937 5.61536C25.1354 5.07362 25.1354 4.19155 24.5937 3.64981L21.3502 0.406306C20.8084 -0.135435 19.9264 -0.135435 19.3846 0.406306L16.8426 2.94833L22.0517 8.15738L24.5937 5.61536Z",fill:"inherit"}))),r.a.createElement("div",{className:"neomorphism-logo",onClick:function(e){return g()}},r.a.createElement("svg",{className:"logo arrow-svg",viewBox:"0 0 25 7",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("rect",{width:"25",height:"6.57895",fill:"inherit"})))),r.a.createElement("h1",{className:"activity-card__title"},c),r.a.createElement("div",{className:"activity-card__desc_wrapper ".concat(f?"showDescClass":"hideDescClass")},r.a.createElement("small",{className:"activity-card__time"},l),r.a.createElement("p",{className:"activity-card__desc"},o)))}),$=(a(94),function(e){var t=e.history,a=Object(n.useContext)(z),c=a.date,o=c.currentYear,l=c.currentMonth,s=c.currentDay,u=c.dateString,m=a.dispatch,d=Object(n.useState)(0),f=Object(i.a)(d,2),p=f[0],h=f[1],g=Object(n.useContext)(M).activities,v=Object(n.useState)([]),E=Object(i.a)(v,2),y=E[0],w=E[1];Object(n.useEffect)((function(){h(B()("".concat(o,"-").concat(l),"YYYY-MM").daysInMonth())}),[l,o]),Object(n.useEffect)((function(){JSON.parse(localStorage.getItem("authorized_user"))&&(w([]),localStorage.setItem("cloud_data",JSON.stringify(g)),b())}),[g]),Object(n.useEffect)((function(){b()}),[s]);var b=function(){var e=JSON.parse(localStorage.getItem("user")),t=JSON.parse(localStorage.getItem("authorized_user"));if(w([]),null!==e||null!==t)if(e)e.activities.map((function(e,t){e.date_string===u&&(console.log(e),w(e.data))}));else if(t&&JSON.parse(localStorage.getItem("cloud_data"))){var a=[],n=JSON.parse(localStorage.getItem("cloud_data"));n&&n.length>0&&(n.map((function(e,t){e.dateString===u&&a.push(e)})),w(a))}},N=function(e,t){var a=window.setInterval((function(){var e=window.pageYOffset;e>0?window.scrollTo(0,e-20):window.clearInterval(a)}),16);switch(t){case"INCREMENT":12===l?(m({type:"CHANGE_YEAR",currentYear:o+1}),m({type:"CHANGE_MONTH",currentMonth:1}),m({type:"CHANGE_DAY",currentDay:1})):s===p?(m({type:"CHANGE_MONTH",currentMonth:l+1}),m({type:"CHANGE_DAY",currentDay:1})):m({type:"CHANGE_DAY",currentDay:s+1});break;case"DECREMENT":1===l?(console.log("true"),m({type:"CHANGE_YEAR",currentYear:o-1}),m({type:"CHANGE_MONTH",currentMonth:12}),m({type:"CHANGE_DAY",currentDay:31})):1===s?(m({type:"CHANGE_MONTH",currentMonth:l-1}),m({type:"CHANGE_DAY",currentDay:B()("".concat(o,"-").concat(l-1),"YYYY-MM").daysInMonth()})):m({type:"CHANGE_DAY",currentDay:s-1})}};return r.a.createElement("section",{className:"detail-section"},r.a.createElement("div",{className:"detail-container container"},r.a.createElement("div",{className:"detail-header"},r.a.createElement("div",{className:"detail-header-date date"},r.a.createElement("h1",null,"".concat(s,"/").concat(l,"/").concat(o)),r.a.createElement("span",{className:"detail-header__arrow-container"},r.a.createElement("div",{className:"neomorphism-logo",onClick:function(e){return N(0,"DECREMENT")}},r.a.createElement("svg",{className:"logo",viewBox:"0 0 36 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{className:"arrow-svg",d:"M18 0L35.3205 30H0.679491L18 0Z"}))),r.a.createElement("div",{className:"neomorphism-logo",onClick:function(e){return N(0,"INCREMENT")}},r.a.createElement("svg",{className:"logo",viewBox:"0 0 36 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{className:"arrow-svg",d:"M18 30L35.3205 0H0.679491L18 30Z",fill:"#C3C5C8"}))))),r.a.createElement("div",{className:"neomorphism-logo round",onClick:function(e){return t.push("/create")}},r.a.createElement("svg",{className:"logo",viewBox:"0 0 50 50",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{className:"add-svg",d:"M25.05 0H24.95C22.2162 0 20 2.21619 20 4.95V45.05C20 47.7838 22.2162 50 24.95 50H25.05C27.7838 50 30 47.7838 30 45.05V4.95C30 2.21619 27.7838 0 25.05 0Z"}),r.a.createElement("path",{className:"add-svg",d:"M45.05 20H4.95C2.21619 20 0 22.2162 0 24.95V25.05C0 27.7838 2.21619 30 4.95 30H45.05C47.7838 30 50 27.7838 50 25.05V24.95C50 22.2162 47.7838 20 45.05 20Z"})))),r.a.createElement("div",{className:"detail-activities"},r.a.createElement("p",{className:"opacity-50"},"Activities"),y.length>0&&y.map((function(e,a){return r.a.createElement(Q,{history:t,key:a,index:a,activity:e,_loadActivities:b})})))))}),K=a(17),X=(a(49),a(38)),ee=a.n(X),te=a(56),ae=a.n(te),ne=a(113);ee.a.setAppElement("#root");var re=function(e){var t=e.history,a=Object(n.useState)(!1),c=Object(i.a)(a,2),o=c[0],l=c[1],s=JSON.parse(localStorage.getItem("authorized_user")),u=Object(n.useContext)(z).date,m=Object(n.useContext)(M).dispatch,d=Object(n.useState)({title:"",desc:"",time:"",reminder:"none",activity_id:Object(ne.a)()}),f=Object(i.a)(d,2),p=f[0],h=f[1],v=Object(n.useState)(""),E=Object(i.a)(v,2),y=E[0],w=E[1],b=function(e){e.persist(),y&&w(""),h((function(t){return Object(g.a)({},t,Object(K.a)({},e.target.name,e.target.value))}))},N=function(e){if(e.preventDefault(),""===p.title){w("* Title must not be blank.");var a=window.setInterval((function(){console.log("running");var e=window.pageYOffset;e>0?window.scrollTo(0,e-20):window.clearInterval(a)}),16)}else{var n=B()("".concat(u.currentYear,"/").concat(u.currentMonth,"/").concat(u.currentDay)).format("YYYY MM DD").split(" ").join("-");if(s&&s.email){var r;if("none"!==p.reminder)if(NaN!==parseInt(p.reminder,10)){var c=p.time.slice(0,2),o=p.time.slice(3,5);r=B()("".concat(n," ").concat(c,":").concat(o),"YYYY-MM-DD HH:mm").subtract(p.reminder,"days").toDate()}var i=Object(g.a)({email:s.email,currentYear:u.currentYear,currentMonth:u.currentMonth,currentDay:u.currentDay,token:s.token,reminder_date:r,dateString:n},p);T(i,m)}else!function(e,t){if(null===JSON.parse(localStorage.getItem("user"))){var a={activities:[{date_string:t,data:[e]}]};localStorage.setItem("user",JSON.stringify(a))}else{var n=JSON.parse(localStorage.getItem("user")),r=!1;n.activities.map((function(a,n){return a.date_string===t&&(a.data.push(e),r=!0),a})),r||n.activities.push({date_string:t,data:[e]}),localStorage.setItem("user",JSON.stringify(n))}}(p,n);l(!0),setTimeout((function(){t.goBack()}),1e3)}};return r.a.createElement("div",{className:"container small-container"},r.a.createElement("svg",{onClick:function(){return t.goBack()},className:"return-logo neomorphism-logo round",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},r.a.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),r.a.createElement("path",{className:"add-svg",d:"M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42-.39-.39-1.02-.39-1.41 0l-6.59 6.59c-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z"})),r.a.createElement(ee.a,{isOpen:o,className:"modal--success",contentLabel:"Successfull"},r.a.createElement("h2",{style:{marginBottom:"1em"}},"Added successfully."),r.a.createElement(ae.a,{color:"#fff"}),r.a.createElement("small",{style:{marginTop:"1em"}},"Redirecting ...")),r.a.createElement("form",{onSubmit:function(e){return N(e)},method:"POST",autoComplete:"off"},y&&r.a.createElement("h2",{style:{margin:"1em 0"}},y),r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{type:"text",onChange:function(e){return b(e)},name:"title",id:"title"}),r.a.createElement("label",{htmlFor:"desc"},"Description"),r.a.createElement("textarea",{name:"desc",onChange:function(e){return b(e)},id:"desc"}),r.a.createElement("label",{htmlFor:"dt"},"Date & Time"),r.a.createElement("div",{className:"custom-dt inner-shadow"},r.a.createElement("strong",{className:"big-font bold-font"},u.currentDay,"/",u.currentMonth,"/",u.currentYear),r.a.createElement("input",{type:"time",name:"time",onChange:function(e){return b(e)}})),s?r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{htmlFor:"reminder"},"Send me notification before"),r.a.createElement("select",{onChange:function(e){return b(e)},value:p.reminder,name:"reminder",id:"reminder"},r.a.createElement("option",{value:"none"},"-"),r.a.createElement("option",{value:"1"},"1 day"),r.a.createElement("option",{value:"2"},"2 days"),r.a.createElement("option",{value:"3"},"3 days"),r.a.createElement("option",{value:"4"},"4 days"),r.a.createElement("option",{value:"5"},"5 days"),r.a.createElement("option",{value:"6"},"6 days"),r.a.createElement("option",{value:"7"},"7 days"))):r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"note"},"* Please note that all your activities will be saved in your local device only."),r.a.createElement("div",{className:"qna-container"},r.a.createElement("strong",{className:"question"},"Q: How to access on different devices and get notifications?"),r.a.createElement("p",{className:"answer"},'A: Scroll to top and click the button with "Sign In" text. After signed in, every activities you create will be saved online and we will send you a notification before a week. Don\'t worry, we hate spams too.'))),r.a.createElement("button",{type:"submit",className:"neomorphism-logo"},r.a.createElement("svg",{className:"logo",viewBox:"0 0 98 98",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{className:"add-svg",d:"M36.7495 66.15L19.5995 49L13.8828 54.7167L36.7495 77.5834L85.7495 28.5834L80.0328 22.8667L36.7495 66.15Z"})))))},ce=function(e){var t=e.match.params.id,a=e.history,c=Object(n.useContext)(M).dispatch,o=Object(n.useState)({title:"",desc:"",time:"",reminder:"none",activity_id:null}),l=Object(i.a)(o,2),s=l[0],u=l[1],m=JSON.parse(localStorage.getItem("user")),d=JSON.parse(localStorage.getItem("current_dateInformation")),f=JSON.parse(localStorage.getItem("cloud_data")),p=JSON.parse(localStorage.getItem("authorized_user"));Object(n.useEffect)((function(){return f&&f.length>0?f.map((function(e,a){return e.activity_id===t&&u(e),e})):m&&m.activities.map((function(e,a){return e.date_string===d.dateString&&e.data.map((function(e){return e.activity_id===t&&u(e)})),e})),function(){return console.log("Edit activity page unmounted")}}),[]);var h=Object(n.useState)(""),v=Object(i.a)(h,2),E=v[0],y=v[1],w=function(e){e.persist(),E&&y(""),u((function(t){return Object(g.a)({},t,Object(K.a)({},e.target.name,e.target.value))}))},b=function(e){if(e.preventDefault(),""===s.title){y("* Title must not be blank.");var t=window.setInterval((function(){console.log("running");var e=window.pageYOffset;e>0?window.scrollTo(0,e-20):window.clearInterval(t)}),16)}else{if(f&&p){var n;if("none"!==s.reminder)if(NaN!==parseInt(s.reminder,10)){var r=s.time.slice(0,2),o=s.time.slice(3,5);n=B()("".concat(s.dateString," ").concat(r,":").concat(o),"YYYY-MM-DD HH:mm").subtract(s.reminder,"days").toDate()}var i=Object(g.a)({},s,{reminder_date:n});L(i,p.token,c)}else!function(e,t,a){e.activities.map((function(n,r){if(n.date_string===t.dateString){var c=e,o=a.title,i=a.desc,l=a.time,s=a.activity_id;c.activities[r].data=c.activities[r].data.map((function(e,t){return e.activity_id===s?Object(g.a)({},e,{title:o,desc:i,time:l,activity_id:s}):e})),localStorage.setItem("user",JSON.stringify(c))}return n}))}(m,d,s);setTimeout((function(){a.goBack()}),1e3)}};return r.a.createElement("div",{className:"container small-container"},r.a.createElement("svg",{onClick:function(){return a.goBack()},className:"return-logo neomorphism-logo round",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},r.a.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),r.a.createElement("path",{className:"add-svg",d:"M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42-.39-.39-1.02-.39-1.41 0l-6.59 6.59c-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z"})),r.a.createElement("form",{onSubmit:function(e){return b(e)},method:"POST",autoComplete:"off"},E&&r.a.createElement("h2",{style:{margin:"1em 0"}},E),r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{type:"text",value:s.title,onChange:function(e){return w(e)},name:"title",id:"title"}),r.a.createElement("label",{htmlFor:"desc"},"Description"),r.a.createElement("textarea",{name:"desc",value:s.desc,onChange:function(e){return w(e)},id:"desc"}),r.a.createElement("label",{htmlFor:"dt"},"Date & Time"),r.a.createElement("div",{className:"custom-dt inner-shadow"},r.a.createElement("strong",{className:"big-font bold-font"},d.currentDay,"/",d.currentMonth,"/",d.currentYear),r.a.createElement("input",{type:"time",value:s.time,name:"time",onChange:function(e){return w(e)}})),p&&r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{htmlFor:"reminder"},"Send me notification before"),r.a.createElement("select",{value:s.reminder,onChange:function(e){return w(e)},name:"reminder",id:"reminder"},r.a.createElement("option",{value:"none"},"-"),r.a.createElement("option",{value:"1"},"1 day"),r.a.createElement("option",{value:"2"},"2 days"),r.a.createElement("option",{value:"3"},"3 days"),r.a.createElement("option",{value:"4"},"4 days"),r.a.createElement("option",{value:"5"},"5 days"),r.a.createElement("option",{value:"6"},"6 days"),r.a.createElement("option",{value:"7"},"7 days"))),r.a.createElement("button",{type:"submit",className:"neomorphism-logo"},r.a.createElement("svg",{className:"logo",viewBox:"0 0 98 98",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{className:"add-svg",d:"M36.7495 66.15L19.5995 49L13.8828 54.7167L36.7495 77.5834L85.7495 28.5834L80.0328 22.8667L36.7495 66.15Z"})))))},oe=a(112),ie=a(111),le=Object(Z.f)((function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),c=a[0],o=a[1];return Object(n.useEffect)((function(){setTimeout((function(){return o(!0)}),0)}),[e.location.pathname]),r.a.createElement(oe.a,null,r.a.createElement(ie.a,{appear:!0,in:c,key:e.location.pathname,timeout:300,unmountOnExit:!0,mountOnEnter:!0,classNames:"page-transition"},r.a.createElement(Z.c,{location:e.location},r.a.createElement(Z.a,{exact:!0,path:"/",component:W}),r.a.createElement(Z.a,{exact:!0,path:"/detail",component:$}),r.a.createElement(Z.a,{exact:!0,path:"/create",component:re}),r.a.createElement(Z.a,{exact:!0,path:"/edit/:id",component:ce}))))}));var se=function(){var e=Object(n.useState)("light"),t=Object(i.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("defaultTheme");e&&c(e)}),[]),r.a.createElement(l.a,{theme:"light"===a?s:u},r.a.createElement(V,null,r.a.createElement(I,null,r.a.createElement(S,null,r.a.createElement("div",{className:"App"},r.a.createElement(f,null),r.a.createElement(N.a,null,r.a.createElement(F,{toggleTheme:function(){"light"===a?(c("dark"),localStorage.setItem("defaultTheme","dark")):(c("light"),localStorage.setItem("defaultTheme","light"))},theme:a}),r.a.createElement(le,null)))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ue=a(31),me=a(21);ue.a.registerPlugin(me.a),o.a.render(r.a.createElement(se,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},33:function(e,t,a){e.exports=a.p+"static/media/moon.b2f96543.svg"},34:function(e,t,a){e.exports=a.p+"static/media/sun.0cfcc7b9.svg"},49:function(e,t,a){},61:function(e,t,a){e.exports=a(108)},66:function(e,t,a){},69:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){},94:function(e,t){}},[[61,1,2]]]);
//# sourceMappingURL=main.0bd971cf.chunk.js.map