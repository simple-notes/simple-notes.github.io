(this.webpackJsonplibrary=this.webpackJsonplibrary||[]).push([[0],{140:function(e,t,a){e.exports=a(207)},207:function(e,t,a){"use strict";a.r(t);var n,r,c,s=a(0),o=a.n(s),i=a(12),l=a.n(i),u=a(2),d=a.n(u),p=a(11),f=a(22),m=function(){return new Promise((function(e){var t=f.c.url,a=f.c.params;if(a){var n=Object.keys(a).map((function(e){return"".concat(e,"=").concat(a[e])})).join("&");t+="?".concat(n)}var r=window.open(t,"signin","modal"),c=setInterval((function(){r.closed&&(e(),clearInterval(c))}),500)}))},b=function(e){if(e){var t=e.substring(1).split("&").reduce((function(e,t){return e[(t=t.split("="))[0]]=t[1],e}),{}),a=t.error,n=t.access_token;a?window.close():n&&g(n)}window.close()},g=function(e){localStorage.setItem("token",e)},h=function(){return localStorage.getItem("token")},x=a(13),v=a(47),w=a(117),E=a.n(w),y=function e(t,a){var n,r,c,s,o,i,l=arguments;return d.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:if(3!==(n=l.length>2&&void 0!==l[2]?l[2]:0)){u.next=3;break}throw new Error("Request rejected three times");case 3:if(n+=1,!(r=h())){u.next=31;break}return u.prev=6,c=f.b+t,s={Authorization:"Bearer ".concat(r)},u.next=11,d.a.awrap(E()(Object(x.a)({url:c,headers:s},a)));case 11:return o=u.sent,i=o.data,u.abrupt("return",i);case 16:if(u.prev=16,u.t0=u.catch(6),!u.t0.response||401!==u.t0.response.status){u.next=26;break}return u.next=21,d.a.awrap(m());case 21:return u.next=23,d.a.awrap(e(t,a,n));case 23:return u.abrupt("return",u.sent);case 26:throw new Error(u.t0.message);case 27:case 28:u.next=36;break;case 31:return u.next=33,d.a.awrap(m());case 33:return u.next=35,d.a.awrap(e(t,a,n));case 35:return u.abrupt("return",u.sent);case 36:case 37:case"end":return u.stop()}}),null,null,[[6,16]])},j={},O=function(){return d.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.awrap(k());case 2:e.t0=function(e){var t=e.id,a=e.name;j[a]=t},e.sent.forEach(e.t0);case 4:case"end":return e.stop()}}))},k=function e(t){var a,n,r;return d.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,d.a.awrap(y("drive/v3/files",{method:"get",params:{spaces:"appDataFolder",pageToken:t,fields:"nextPageToken, files(id, name)"}}));case 3:return a=c.sent,n=a.files,r=a.nextPageToken,c.abrupt("return",r?[].concat(Object(v.a)(n),Object(v.a)(e(r))):n);case 9:throw c.prev=9,c.t0=c.catch(0),new Error(c.t0.message);case 12:case 13:case"end":return c.stop()}}),null,null,[[0,9]])},I=function(e){return j.hasOwnProperty(e)},C=function(e,t){return d.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,d.a.awrap(F(e));case 2:return a.next=4,d.a.awrap(R(j[e],t));case 4:case"end":return a.stop()}}))},N=function(e){return d.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.awrap(Promise.all(e.map((function(e){var t;return d.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.name,a.next=3,d.a.awrap(F(t));case 3:return a.abrupt("return",a.sent);case 4:case"end":return a.stop()}}))}))));case 2:return t.next=4,d.a.awrap(L(e));case 4:case"end":return t.stop()}}))},D=function(e,t){return d.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,d.a.awrap(R(j[e],t));case 2:case"end":return a.stop()}}))},L=function(e){return d.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.awrap(Promise.all(e.map((function(e){var t,a;return d.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.name,a=e.data,n.next=3,d.a.awrap(R(j[t],a));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}))}))));case 2:case"end":return t.stop()}}))},S=function(e){return d.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.awrap(z(j[e]));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}))},B=function(e){return d.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.awrap(Promise.all(e.map((function(e){return d.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.awrap(S(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}))}))));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}))},F=function(e){var t,a;return d.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,d.a.awrap(y("drive/v3/files",{method:"post",data:{mimeType:"application/json",name:e,parents:["appDataFolder"]}}));case 3:t=n.sent,a=t.id,j[e]=a,n.next=11;break;case 8:throw n.prev=8,n.t0=n.catch(0),new Error(n.t0.message);case 11:case 12:case"end":return n.stop()}}),null,null,[[0,8]])},R=function(e,t){return d.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,d.a.awrap(y("upload/drive/v3/files/".concat(e),{method:"patch",data:"string"===typeof t?t:JSON.stringify(t)}));case 3:a.next=8;break;case 5:throw a.prev=5,a.t0=a.catch(0),new Error(a.t0.message);case 8:case 9:case"end":return a.stop()}}),null,null,[[0,5]])},z=function(e){return d.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.a.awrap(y("drive/v3/files/".concat(e),{method:"get",params:{alt:"media"}}));case 3:return t.abrupt("return",t.sent);case 6:throw t.prev=6,t.t0=t.catch(0),new Error(t.t0.message);case 9:case 10:case"end":return t.stop()}}),null,null,[[0,6]])},P=function(e,t){if(t.length<e.length){var a=[t,e];e=a[0],t=a[1]}return e.filter((function(e){return t.includes(e)}))},T=function(e,t){return e.filter((function(e){return!t.includes(e)}))},W=function(){var e,t;return d.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,d.a.awrap(O());case 2:if(I("notesData")){a.next=7;break}return a.next=5,d.a.awrap(N([{name:"labelsData",data:{}},{name:"notesData",data:{}},{name:"indexingData",data:{}},{name:"options",data:{version:"0.0.2"}}]));case 5:a.next=20;break;case 7:if(I("options")){a.next=19;break}return a.next=10,d.a.awrap(C("options",{version:"0.0.2"}));case 10:return a.next=12,d.a.awrap(O());case 12:return a.next=14,d.a.awrap(S("notesData"));case 14:return c=a.sent,r={},Object.values(c).forEach((function(e){var t=e.id,a=e.title,n=e.text;t&&(q(t,H(a)),q(t,H(n)))})),a.next=19,d.a.awrap(D("indexingData",r));case 19:case 20:return a.next=23,d.a.awrap(B(["labelsData","notesData","indexingData","options"]));case 23:e=a.sent,t=Object(p.a)(e,4),n=t[0],c=t[1],r=t[2],t[3];case 29:case"end":return a.stop()}}))},H=function(e){var t=new RegExp("[a-z\u0430-\u044f\u0451]{".concat(f.a,",}"),"gu");return e.toLowerCase().match(t)||[]},q=function(e,t){t.forEach((function(t){for(var a=0;a<=t.length-f.a;a++)for(var n=t.length;n>=a+f.a;n--){var c=t.slice(a,n);r[c]?r[c].includes(e)||r[c].push(e):r[c]=[e]}}))},A=function(e,t){t.forEach((function(t){for(var a=0;a<=t.length-f.a;a++)for(var n=t.length;n>=a+f.a;n--){var c=t.slice(a,n);if(r[c]&&r[c].includes(e))if(1===r[c].length)delete r[c];else{var s=r[c];s.splice(s.indexOf(e),1),r[c]=s}}}))},J=function(e,t){t.forEach((function(t){return n[t].notesIds.push(e)}))},M=function(e,t){t.forEach((function(t){var a=n[t].notesIds;a.splice(a.indexOf(e),1),n[t].notesIds=a}))},Q=function(e){var t;return d.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=n.currentId+1,n.currentId=t,n[t]={id:t,name:e,notesIds:[]},a.next=5,d.a.awrap(D("labelsData",n));case 5:case"end":return a.stop()}}))},_=function(e){return d.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return n[e.id]=e,t.next=3,d.a.awrap(D("labelsData",n));case 3:case"end":return t.stop()}}))},G=function(e){return d.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return n[e].notesIds.forEach((function(t){var a=c[t].labelsIds;a.splice(a.indexOf(e),1),c[t].labelsIds=a})),delete n[e],t.next=4,d.a.awrap(L([{name:"labelsData",data:n},{name:"notesData",data:c}]));case 4:case"end":return t.stop()}}))},K=function(e){return e?e.map((function(e){return n[e]})):Object.values(n).filter((function(e){return e.id}))},U=function(e){var t=e.string,a=e.labelsIds;return t||a.length?V(t,a).map((function(e){return c[e]})):Object.values(c).filter((function(e){return e.id}))},V=function(e,t){if(!e)return Y(t);var a=X(e);return 0!==a.length&&t.length?P(a,Y(t)):a},X=function(e){var t=H(e);return 0===t.length?[]:1===t.length?r[t[0]]||[]:t.map((function(e){return r[e]||[]})).reduce((function(e,t){return P(e,t)}))},Y=function(e){return 1===e.length?n[e[0]].notesIds:e.map((function(e){return n[e].notesIds})).reduce((function(e,t){return P(e,t)}))},Z=a(10),$=a(4),ee=a(132),te=(a(203),a(120)),ae=a(242),ne=a(254),re=a(240),ce=a(241),se=a(239),oe=a(123),ie=a.n(oe),le=a(124),ue=a.n(le),de=a(122),pe=a.n(de),fe=Object(te.a)((function(e){return{header:{padding:e.spacing(0,2),display:"flex",flexFlow:"row nowrap",alignItems:"center",justifyContent:"space-between"},title:{color:e.palette.text.secondary,fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightMedium,fontSize:e.typography.pxToRem(14)},list:{listStyle:"none",padding:0,margin:0,"& > li:not(:last-child)":{marginBottom:6}},listItem:{width:"100%",padding:"0 6px",display:"flex",flexFlow:"row nowrap",alignItems:"center",justifyContent:"space-between"},labelIcon:{padding:9},labelText:Object(x.a)({flexGrow:1},e.typography.body2,{letterSpacing:"normal",margin:e.spacing(0,1)}),labelAction:{width:42,flex:"0 0 auto"},newLabelContainer:{padding:e.spacing(0,2),marginTop:e.spacing(.5),display:"flex",flexFlow:"row nowrap",alignItems:"center",justifyContent:"center"},newLabelText:Object(x.a)({flexGrow:1,margin:e.spacing(0,1)},e.typography.body2,{letterSpacing:"normal"}),newLabelButton:{marginLeft:e.spacing(1)},scrollbar:Object(Z.a)({maxHeight:"calc(100vh - 144px)"},e.breakpoints.up("sm"),{maxHeight:"calc(100vh - 200px)"})}})),me=function(e){var t=e.labels,a=e.checkedIds,n=e.toggleCheck,r=e.edit,c=e.toggleEditor,s=e.selectEditedLabel,i=e.editedLabel,l=e.newLabel,u=e.changeName,d=e.createLabel,p=e.updateLabel,f=e.deleteLabel,m=fe();return o.a.createElement("div",null,o.a.createElement("div",{className:m.header},o.a.createElement(se.a,{className:m.title},"Labels"),o.a.createElement(re.a,{edge:"end",size:"small",onClick:c},o.a.createElement(pe.a,{fontSize:"small"}))),o.a.createElement(ee.a,{className:m.scrollbar},o.a.createElement("ul",{className:m.list},t.map((function(e){return o.a.createElement("li",{key:e.id,className:m.listItem,onClick:r?s(e):n(e.id)},r?o.a.createElement(re.a,{color:"primary",className:m.labelIcon,onClick:f(e.id)},o.a.createElement(ie.a,{color:"primary"})):o.a.createElement(ne.a,{disableRipple:!0,checked:a.includes(e.id),color:"primary"}),e.id===i.id?o.a.createElement(ce.a,{error:i.error,value:i.name,autoFocus:!0,className:m.labelText,onChange:u(e.name)}):o.a.createElement(se.a,{noWrap:!0,className:m.labelText},e.name),o.a.createElement("div",{className:m.labelAction},e.id===i.id&&o.a.createElement(re.a,{color:"primary",disabled:i.disabled,className:m.labelIcon,onClick:p},o.a.createElement(ue.a,{color:i.disabled?"disabled":"primary"}))))})))),r&&o.a.createElement("div",{className:m.newLabelContainer},o.a.createElement(ce.a,{error:l.error,value:l.name,onChange:u(),className:m.newLabelText}),o.a.createElement(ae.a,{disabled:l.disabled,size:"small",variant:"contained",color:"primary",className:m.newLabelButton,onClick:d},"Add")))},be=function(e){var t=e.open,a=e.checkedIds,n=e.setCheckedIds,r=Object(s.useState)(K()),c=Object(p.a)(r,2),i=c[0],l=c[1],u=Object(s.useState)(!1),f=Object(p.a)(u,2),m=f[0],b=f[1],g=Object(s.useState)({}),h=Object(p.a)(g,2),w=h[0],E=h[1],y=Object(s.useState)({name:"",disabled:!0}),j=Object(p.a)(y,2),O=j[0],k=j[1];Object(s.useEffect)((function(){t||b(!1)}),[t]),Object(s.useEffect)((function(){m||(E({}),k({name:"",disabled:!0}))}),[m]);var I=function(e,t){return(e=e.trim()).length?t&&e===t?{error:!1,disabled:!1}:i.some((function(t){return t.name===e}))?{error:!0,message:"Dublicate",disabled:!0}:{error:!1,disabled:!1}:{error:!0,message:"Only spaces",disabled:!0}};return o.a.createElement(me,{labels:i,checkedIds:a,toggleCheck:function(e){return function(){var t=a.indexOf(e),r=Object(v.a)(a);-1===t?r.push(e):r.splice(t,1),n(r)}},edit:m,toggleEditor:function(){b(!m)},selectEditedLabel:function(e){return function(){e?e.id!==w.id&&E(Object(x.a)({},e,{disabled:!0})):E({})}},editedLabel:w,newLabel:O,changeName:function(e){return function(t){var a=t.target.value,n=e?w:O,r=e?E:k,c=I(a,e);r(Object(x.a)({},n,{name:a},c))}},createLabel:function(){return d.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.awrap(Q(O.name));case 2:k({name:"",disabled:!0}),l(K());case 4:case"end":return e.stop()}}))},updateLabel:function(e){return d.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return e.stopPropagation(),t.next=3,d.a.awrap(_(w));case 3:l(K());case 4:case"end":return t.stop()}}))},deleteLabel:function(e){return function(t){return d.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t.stopPropagation(),r.next=3,d.a.awrap(G(e));case 3:l(K()),n(a.filter((function(t){return t!==e})));case 5:case"end":return r.stop()}}))}}})},ge=a(7),he=a(248),xe=a(253),ve=a(210),we=a(249),Ee=a(250),ye=a(128),je=a.n(ye),Oe=a(125),ke=a.n(Oe),Ie=a(126),Ce=a.n(Ie),Ne=a(127),De=a.n(Ne),Le=a(244),Se=a(243),Be=a(245),Fe=a(247),Re=a(246),ze=a(255),Pe=Object(te.a)((function(e){return{notesContainer:{position:"relative",margin:"auto",maxWidth:1150,paddingTop:56}}})),Te=function(e){var t=e.desktop,a=e.notes,n=e.openEditor,r=e.deleteNote,c=Pe();return o.a.createElement(Se.a,null,o.a.createElement("div",{className:c.notesContainer},o.a.createElement(Le.a,{container:!0,spacing:t?3:1},a.map((function(e){var t=e.id,a=e.title,s=e.text,i=e.labelsIds;return o.a.createElement(Le.a,{key:t,item:!0,xs:12,md:6,lg:4},o.a.createElement(Be.a,{className:c.note},o.a.createElement(Re.a,{className:c.noteContent},o.a.createElement("div",null,K(i).map((function(e){var t=e.id,a=e.name;return o.a.createElement(ze.a,{key:t,size:"small",label:a})}))),o.a.createElement(se.a,{gutterBottom:!0,variant:"h5",component:"h2"},a),o.a.createElement(se.a,null,s)),o.a.createElement(Fe.a,null,o.a.createElement(ae.a,{size:"small",color:"primary",onClick:r(t)},"Delete"),o.a.createElement(ae.a,{size:"small",color:"primary",onClick:n(e)},"Edit"))))})))))},We=Object(te.a)((function(e){return{toolbar:{display:"flex",flexFlow:"row wrap",justifyContent:"space-between",alignItems:"center",height:56,padding:e.spacing(.5,2)},leftBlock:Object(Z.a)({display:"none"},e.breakpoints.up("sm"),{flex:"0 0 120px",display:"flex",justifyContent:"flex-start",paddingLeft:e.spacing(7),marginRight:e.spacing(.5)}),middleBlock:{flex:"1 1 auto",display:"flex",justifyContent:"center"},rightBlock:Object(Z.a)({flex:"0 0 auto",display:"flex",marginLeft:e.spacing(.5),justifyContent:"flex-end"},e.breakpoints.up("sm"),{flex:"0 0 120px"}),search:{position:"relative",display:"flex",alignItems:"center",borderRadius:e.shape.borderRadius,backgroundColor:Object(ge.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(ge.c)(e.palette.common.white,.25)},width:"100%",maxWidth:720,height:38},searchIcon:{width:e.spacing(7),position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},searchRoot:{color:"inherit",width:"100%"},searchInput:{padding:e.spacing(1,1,1,7)},drawerPaper:Object(Z.a)({width:256},e.breakpoints.up("sm"),{zIndex:e.zIndex.appBar-1,top:56}),filtersHeader:{height:55,padding:e.spacing(0,2),display:"flex",flexFlow:"row nowrap",alignItems:"center",justifyContent:"space-between"},filtersBody:{padding:e.spacing(1,0)},fab:Object(Z.a)({position:"fixed",bottom:e.spacing(2),right:e.spacing(2)},e.breakpoints.up("sm"),{bottom:e.spacing(3),right:e.spacing(5)}),unshift:Object(Z.a)({},e.breakpoints.up("sm"),{transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginRight:0}),shift:Object(Z.a)({},e.breakpoints.up("sm"),{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginRight:256})}})),He=function(e){var t,a,n=e.desktop,r=e.notes,c=e.drawer,s=e.toggleDrawer,i=e.query,l=e.changeQueryString,u=e.setQueryLabelsIds,d=e.openEditor,p=e.deleteNote,f=We();return o.a.createElement(o.a.Fragment,null,o.a.createElement(he.a,{position:"fixed"},o.a.createElement("div",{className:f.toolbar},o.a.createElement("div",{className:f.leftBlock},o.a.createElement(se.a,{variant:"h6",noWrap:!0},"Notes")),o.a.createElement("div",{className:f.middleBlock},o.a.createElement("div",{className:f.search},o.a.createElement("div",{className:f.searchIcon},o.a.createElement(ke.a,null)),o.a.createElement(ve.a,{placeholder:"Search\u2026",classes:{root:f.searchRoot,input:f.searchInput},value:i.string,onChange:l,autoFocus:!0}))),o.a.createElement("div",{className:f.rightBlock},o.a.createElement(re.a,{edge:"end",color:"inherit",onClick:s},o.a.createElement(Ce.a,null))))),o.a.createElement(xe.a,{classes:{paper:f.drawerPaper},variant:n?"persistent":"temporary",open:c,onClose:s,anchor:"right"},o.a.createElement("div",{className:f.filtersHeader},o.a.createElement(se.a,{variant:"h6",noWrap:!0},"Filters"),n&&o.a.createElement(re.a,{edge:"end",color:"inherit",onClick:s},o.a.createElement(De.a,null))),o.a.createElement(we.a,null),o.a.createElement("div",{className:f.filtersBody},o.a.createElement(be,{open:c,checkedIds:i.labelsIds,setCheckedIds:u}))),o.a.createElement("div",{className:Object($.a)(f.content,(t={},Object(Z.a)(t,f.shift,c),Object(Z.a)(t,f.unshift,!c),t))},o.a.createElement(Te,{notes:r,desktop:n,openEditor:d,deleteNote:p})),o.a.createElement(Ee.a,{className:Object($.a)(f.fab,(a={},Object(Z.a)(a,f.shift,c),Object(Z.a)(a,f.unshift,!c),a)),color:"primary","aria-label":"add",onClick:d()},o.a.createElement(je.a,null)))},qe=a(133),Ae=a(129),Je=a.n(Ae),Me=a(130),Qe=a.n(Me),_e=a(131),Ge=a.n(_e),Ke=Object(te.a)((function(e){return{toolbar:{display:"flex",flexFlow:"row wrap",height:112,padding:e.spacing(.5,2)},leftBlock:{flex:"1 0 0",alignSelf:"flex-start",display:"flex"},rightBlock:{flex:"1 0 0",alignSelf:"flex-start",display:"flex",justifyContent:"flex-end"},titleBlock:{flex:"1 0 100%",paddingBottom:e.spacing(1.5),paddingLeft:e.spacing(7)},note:{padding:e.spacing(17,2,0,2),minHeight:"100vh"},inputRoot:{color:"rgb(255, 255, 255)",fontSize:"1.5rem",lineHeight:1.33,letterSpacing:"0em","&.MuiInput-underline:after":{borderBottomColor:"rgb(255, 255, 255)"},"&.MuiInput-underline:before":{borderBottomColor:"rgba(255, 255, 255, 0.42)"},"&.MuiInput-underline:hover:before":{borderBottomColor:"rgba(255, 255, 255, 0.42)"}},drawerPaper:Object(Z.a)({width:256,padding:e.spacing(1,0)},e.breakpoints.up("sm"),{zIndex:e.zIndex.appBar-1,top:112}),fab:Object(Z.a)({position:"fixed",bottom:e.spacing(2),right:e.spacing(2)},e.breakpoints.up("sm"),{bottom:e.spacing(3),right:e.spacing(5)+256})}})),Ue=function(e){var t=e.note,a=e.desktop,n=e.drawer,r=e.toggleDrawer,c=e.changeField,i=e.setLabelsIds,l=e.saveNote,u=e.closeNote,d=Object(s.useRef)(null),p=Ke();return o.a.createElement(o.a.Fragment,null,o.a.createElement(he.a,{position:"fixed"},o.a.createElement("div",{className:p.toolbar},o.a.createElement("div",{className:p.leftBlock},o.a.createElement(re.a,{edge:"start",color:"inherit",onClick:u},o.a.createElement(Je.a,null))),o.a.createElement("div",{className:p.rightBlock},!a&&o.a.createElement(re.a,{edge:"end",color:"inherit",onClick:r},o.a.createElement(Qe.a,null))),o.a.createElement("div",{className:p.titleBlock},o.a.createElement(ce.a,{fullWidth:!0,classes:{root:p.inputRoot},autoComplete:"off",value:t.title,name:"title",placeholder:"Title",onChange:c})))),o.a.createElement(xe.a,{classes:{paper:p.drawerPaper},variant:a?"persistent":"temporary",open:!!a||n,onClose:r,anchor:"right"},o.a.createElement(be,{open:n,checkedIds:t.labelsIds,setCheckedIds:i})),o.a.createElement(qe.a,{square:!1,elevation:0,className:p.note,onClick:function(){d.current.focus()}},o.a.createElement(ve.a,{fullWidth:!0,inputRef:d,multiline:!0,autoComplete:"off",value:t.text,name:"text",onChange:c,placeholder:"Content"})),o.a.createElement(Ee.a,{className:p.fab,color:"primary","aria-label":"add",onClick:l},o.a.createElement(Ge.a,null)))},Ve=function(e){var t=e.note,a=e.saveNote,n=e.closeEditor,r=Object(s.useContext)($e).desktop,c=Object(s.useState)(!1),i=Object(p.a)(c,2),l=i[0],u=i[1],d=Object(s.useState)(t),f=Object(p.a)(d,2),m=f[0],b=f[1];Object(s.useEffect)((function(){b(t)}),[t]);return o.a.createElement(Ue,{desktop:r,drawer:l,toggleDrawer:function(){u(!l)},note:m,changeField:function(e){var t=e.target,a=t.name,n=t.value;b(Object(x.a)({},m,Object(Z.a)({},a,n)))},setLabelsIds:function(e){b(Object(x.a)({},m,{labelsIds:e}))},saveNote:a(m),closeNote:function(){n()}})},Xe=function(){var e=Object(s.useContext)($e).desktop,t=Object(s.useState)(e),a=Object(p.a)(t,2),i=a[0],l=a[1],u=Object(s.useState)({string:"",labelsIds:[]}),f=Object(p.a)(u,2),m=f[0],b=f[1],g=Object(s.useState)([]),h=Object(p.a)(g,2),v=h[0],w=h[1],E=Object(s.useState)(null),y=Object(p.a)(E,2),j=y[0],O=y[1];Object(s.useEffect)((function(){w(U(m))}),[m]),Object(s.useEffect)((function(){l(e)}),[e]);return j?o.a.createElement(Ve,{note:j,saveNote:function(e){return function(){var t;t=e.id?function(e){var t,a,s=!1,o=c[e.id];if(e.title!==o.title){var i=H(o.title),l=H(e.title),u=T(i,l),d=T(l,i);A(e.id,u),q(e.id,d),s=!0}if(e.text!==o.text){var p=H(o.text),f=H(e.text),m=T(p,f),b=T(f,p);A(e.id,m),q(e.id,b),s=!0}if(t=e.labelsIds,a=o.labelsIds,t.length!==a.length||!t.every((function(e){return a.includes(e)}))){var g=T(o.labelsIds,e.labelsIds),h=T(e.labelsIds,o.labelsIds);M(e.id,g),J(e.id,h),s=!0}return s&&(c[e.id]=e,L([{name:"labelsData",data:n},{name:"notesData",data:c},{name:"indexingData",data:r}])),c[e.id]}(e):function(e){var t=e.labelsIds,a=e.title,s=e.text,o=c.currentId+1;return c.currentId=o,q(o,H(a)),q(o,H(s)),J(o,t),c[o]=Object(x.a)({id:o},e),L([{name:"labelsData",data:n},{name:"indexingData",data:r},{name:"notesData",data:c}]),c[o]}(e),O(t),w(U(m))}},closeEditor:function(){O(null)}}):o.a.createElement(He,{desktop:e,drawer:i,toggleDrawer:function(){l(!i)},notes:v,query:m,changeQueryString:function(e){var t=e.target.value;b(Object(x.a)({},m,{string:t}))},setQueryLabelsIds:function(e){b(Object(x.a)({},m,{labelsIds:e}))},openEditor:function(e){return function(){O(e=e||{labelsIds:[],title:"",text:""})}},deleteNote:function(e){return function(){!function(e){var t;d.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=c[e],A(e,H(t.title)),A(e,H(t.text)),M(e,t.labelsIds),delete c[e],a.next=7,d.a.awrap(L([{name:"labelsData",data:n},{name:"indexingData",data:r},{name:"notesData",data:c}]));case 7:case"end":return a.stop()}}))}(e),w(U(m))}}})},Ye=a(251),Ze=a(252),$e=Object(s.createContext)(null);l.a.render(o.a.createElement((function(){var e=Object(s.useState)(!0),t=Object(p.a)(e,2),a=t[0],n=t[1],r=Object(s.useState)(""),c=Object(p.a)(r,2),i=c[0],l=c[1],u=Object(Ye.a)("(min-width:600px)");return Object(s.useEffect)((function(){!function(){var e,t;d.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,!(e=window.location.hash)){a.next=6;break}b(e),a.next=8;break;case 6:return a.next=8,d.a.awrap(W());case 8:a.next=15;break;case 11:a.prev=11,a.t0=a.catch(0),t=a.t0.message,l(t);case 15:return a.prev=15,n(!1),a.finish(15);case 18:case 19:case"end":return a.stop()}}),null,null,[[0,11,15,18]])}()}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement(Ze.a,null),o.a.createElement($e.Provider,{value:{isLoading:a,setIsLoading:n,error:i,setError:l,desktop:u}},!a&&!i&&o.a.createElement(Xe,null)))}),null),document.getElementById("root"))},22:function(e){e.exports=JSON.parse('{"a":3,"c":{"url":"https://accounts.google.com/o/oauth2/v2/auth","params":{"client_id":"870430470598-s2kccom1fufpo92g1eupm66dmg92tp9o.apps.googleusercontent.com","redirect_uri":"https://simple-notes.github.io","scope":"https://www.googleapis.com/auth/drive.appdata","response_type":"token"}},"b":"https://www.googleapis.com/"}')}},[[140,1,2]]]);
//# sourceMappingURL=main.298dd3e5.chunk.js.map