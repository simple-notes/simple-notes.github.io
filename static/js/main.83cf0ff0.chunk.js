(this.webpackJsonplibrary=this.webpackJsonplibrary||[]).push([[0],{140:function(e,t,a){e.exports=a(207)},19:function(e){e.exports=JSON.parse('{"a":3,"c":{"url":"https://accounts.google.com/o/oauth2/v2/auth","params":{"client_id":"870430470598-s2kccom1fufpo92g1eupm66dmg92tp9o.apps.googleusercontent.com","redirect_uri":"https://simple-notes.github.io","scope":"https://www.googleapis.com/auth/drive.appdata","response_type":"token"}},"b":"https://www.googleapis.com/"}')},207:function(e,t,a){"use strict";a.r(t);var n,r,c,s,o=a(0),i=a.n(o),l=a(12),u=a.n(l),d=a(3),p=a.n(d),f=a(11),m=a(19),b=function(){return new Promise((function(e){var t=m.c.url,a=m.c.params;if(a){var n=Object.keys(a).map((function(e){return"".concat(e,"=").concat(a[e])})).join("&");t+="?".concat(n)}var r=window.open(t,"signin","modal"),c=setInterval((function(){r.closed&&(e(),clearInterval(c))}),500)}))},g=function(e){if(e){var t=e.substring(1).split("&").reduce((function(e,t){return e[(t=t.split("="))[0]]=t[1],e}),{}),a=t.error,n=t.access_token;a?window.close():n&&h(n)}window.close()},h=function(e){localStorage.setItem("token",e)},x=function(){return localStorage.getItem("token")},v=a(13),w=a(47),E=a(117),y=a.n(E),j=function e(t,a){var n,r,c,s,o,i,l=arguments;return p.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:if(3!==(n=l.length>2&&void 0!==l[2]?l[2]:0)){u.next=3;break}throw new Error("Request rejected three times");case 3:if(n+=1,!(r=x())){u.next=31;break}return u.prev=6,c=m.b+t,s={Authorization:"Bearer ".concat(r)},u.next=11,p.a.awrap(y()(Object(v.a)({url:c,headers:s},a)));case 11:return o=u.sent,i=o.data,u.abrupt("return",i);case 16:if(u.prev=16,u.t0=u.catch(6),!u.t0.response||401!==u.t0.response.status){u.next=26;break}return u.next=21,p.a.awrap(b());case 21:return u.next=23,p.a.awrap(e(t,a,n));case 23:return u.abrupt("return",u.sent);case 26:throw new Error(u.t0.message);case 27:case 28:u.next=36;break;case 31:return u.next=33,p.a.awrap(b());case 33:return u.next=35,p.a.awrap(e(t,a,n));case 35:return u.abrupt("return",u.sent);case 36:case 37:case"end":return u.stop()}}),null,null,[[6,16]])},k={},O=function e(t){var a,n,r;return p.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,p.a.awrap(j("drive/v3/files",{method:"get",params:{spaces:"appDataFolder",pageToken:t,fields:"nextPageToken, files(id, name)"}}));case 3:return a=c.sent,n=a.files,r=a.nextPageToken,c.abrupt("return",r?[].concat(Object(w.a)(n),Object(w.a)(e(r))):n);case 9:throw c.prev=9,c.t0=c.catch(0),new Error(c.t0.message);case 12:case 13:case"end":return c.stop()}}),null,null,[[0,9]])},I=function(e){return k.hasOwnProperty(e)},C=function(e,t){return p.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,p.a.awrap(F(e));case 2:return a.next=4,p.a.awrap(D(k[e],t));case 4:case"end":return a.stop()}}))},N=function(e,t){return p.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,p.a.awrap(D(k[e],t));case 2:case"end":return a.stop()}}))},L=function(e){return p.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.awrap(Promise.all(e.map((function(e){return p.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.awrap(R(k[e]));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}))}))));case 2:case"end":return t.stop()}}))},S=function(e){return p.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.awrap(z(k[e]));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}))},B=function(e){return p.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.awrap(Promise.all(e.map((function(e){return p.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.awrap(S(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}))}))));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}))},F=function(e){var t,a;return p.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,p.a.awrap(j("drive/v3/files",{method:"post",data:{mimeType:"application/json",name:e,parents:["appDataFolder"]}}));case 3:t=n.sent,a=t.id,k[e]=a,n.next=11;break;case 8:throw n.prev=8,n.t0=n.catch(0),new Error(n.t0.message);case 11:case 12:case"end":return n.stop()}}),null,null,[[0,8]])},D=function(e,t){return p.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,p.a.awrap(j("upload/drive/v3/files/".concat(e),{method:"patch",data:"string"===typeof t?t:JSON.stringify(t)}));case 3:a.next=8;break;case 5:throw a.prev=5,a.t0=a.catch(0),new Error(a.t0.message);case 8:case 9:case"end":return a.stop()}}),null,null,[[0,5]])},R=function(e){return p.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.a.awrap(j("drive/v3/files/".concat(e),{method:"delete"}));case 3:t.next=8;break;case 5:throw t.prev=5,t.t0=t.catch(0),new Error(t.t0.message);case 8:case 9:case"end":return t.stop()}}),null,null,[[0,5]])},z=function(e){return p.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.a.awrap(j("drive/v3/files/".concat(e),{method:"get",params:{alt:"media"}}));case 3:return t.abrupt("return",t.sent);case 6:throw t.prev=6,t.t0=t.catch(0),new Error(t.t0.message);case 9:case 10:case"end":return t.stop()}}),null,null,[[0,6]])},P=function(e,t){if(t.length<e.length){var a=[t,e];e=a[0],t=a[1]}return e.filter((function(e){return t.includes(e)}))},T=function(e,t){return e.filter((function(e){return!t.includes(e)}))},W=function(){var e,t;return p.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,p.a.awrap(p.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.awrap(O());case 2:e.t0=function(e){var t=e.id,a=e.name;k[a]=t},e.sent.forEach(e.t0);case 4:case"end":return e.stop()}})));case 2:if(I("notesData")){a.next=9;break}if(I("data")){a.next=6;break}return a.next=6,p.a.awrap(C("data",{labels:{},notes:{},indexing:{},options:{labelsCrtId:0,notesCrtId:0,version:"0.1.3"}}));case 6:a.next=27;break;case 9:return a.next=11,p.a.awrap(B(["labelsData","notesData","indexingData"]));case 11:return e=a.sent,t=Object(f.a)(e,3),n=t[0],c=t[1],r=t[2],(s={}).options={labelsCrtId:n.currentId,notesCrtId:c.currentId,version:"0.1.3"},delete n.currentId,s.labels=n,delete c.currentId,s.notes=c,s.indexing=r,a.next=25,p.a.awrap(C("data",s));case 25:return a.next=27,p.a.awrap(L(["labelsData","notesData","indexingData","options"]));case 27:return a.next=30,p.a.awrap(S("data"));case 30:s=a.sent;case 31:case"end":return a.stop()}}))},H=function(e){var t=new RegExp("[a-z\u0430-\u044f\u0451]{".concat(m.a,",}"),"gu");return e.toLowerCase().match(t)||[]},q=function(e,t){t.forEach((function(t){for(var a=0;a<=t.length-m.a;a++)for(var n=t.length;n>=a+m.a;n--){var r=t.slice(a,n);s.indexing[r]?s.indexing[r].includes(e)||s.indexing[r].push(e):s.indexing[r]=[e]}}))},A=function(e,t){t.forEach((function(t){for(var a=0;a<=t.length-m.a;a++)for(var n=t.length;n>=a+m.a;n--){var r=t.slice(a,n);if(s.indexing[r]&&s.indexing[r].includes(e))if(1===s.indexing[r].length)delete s.indexing[r];else{var c=s.indexing[r];c.splice(c.indexOf(e),1),s.indexing[r]=c}}}))},J=function(e,t){t.forEach((function(t){return s.labels[t].notesIds.push(e)}))},M=function(e,t){t.forEach((function(t){var a=s.labels[t].notesIds;a.splice(a.indexOf(e),1),s.labels[t].notesIds=a}))},Q=function(e){var t;return p.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=s.options.labelsCrtId+1,s.options.labelsCrtId=t,s.labels[t]={id:t,name:e,notesIds:[]},a.next=5,p.a.awrap(N("data",s));case 5:case"end":return a.stop()}}))},_=function(e){return p.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return s.labels[e.id]=e,t.next=3,p.a.awrap(N("data",s));case 3:case"end":return t.stop()}}))},G=function(e){return p.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return s.labels[e].notesIds.forEach((function(t){var a=s.notes[t].labelsIds;a.splice(a.indexOf(e),1),s.notes[t].labelsIds=a})),delete s.labels[e],t.next=4,p.a.awrap(N("data",s));case 4:case"end":return t.stop()}}))},K=function(e){return e?e.map((function(e){return s.labels[e]})):Object.values(s.labels).filter((function(e){return e.id}))},U=function(e){var t=e.string,a=e.labelsIds;return t.length<m.a&&!a.length?Object.values(s.notes).filter((function(e){return e.id})):V(t,a).map((function(e){return s.notes[e]}))},V=function(e,t){if(!e)return Y(t);var a=X(e);return 0!==a.length&&t.length?P(a,Y(t)):a},X=function(e){var t=H(e);return 0===t.length?[]:1===t.length?s.indexing[t[0]]||[]:t.map((function(e){return s.indexing[e]||[]})).reduce((function(e,t){return P(e,t)}))},Y=function(e){return 1===e.length?s.labels[e[0]].notesIds:e.map((function(e){return s.labels[e].notesIds})).reduce((function(e,t){return P(e,t)}))},Z=a(118),$=a(240),ee=Object(Z.a)((function(e){return{progress:{width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}})),te=function(){var e=ee();return i.a.createElement("div",{className:e.progress},i.a.createElement($.a,null))},ae=a(10),ne=a(4),re=a(132),ce=(a(205),a(244)),se=a(256),oe=a(242),ie=a(243),le=a(241),ue=a(123),de=a.n(ue),pe=a(124),fe=a.n(pe),me=a(122),be=a.n(me),ge=Object(Z.a)((function(e){return{header:{padding:e.spacing(0,2),display:"flex",flexFlow:"row nowrap",alignItems:"center",justifyContent:"space-between"},title:{color:e.palette.text.secondary,fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightMedium,fontSize:e.typography.pxToRem(14)},list:{listStyle:"none",padding:0,margin:0,"& > li:not(:last-child)":{marginBottom:6}},listItem:{width:"100%",padding:"0 6px",display:"flex",flexFlow:"row nowrap",alignItems:"center",justifyContent:"space-between"},labelIcon:{padding:9},labelText:Object(v.a)({flexGrow:1},e.typography.body2,{letterSpacing:"normal",margin:e.spacing(0,1)}),labelAction:{width:42,flex:"0 0 auto"},newLabelContainer:{padding:e.spacing(0,2),marginTop:e.spacing(.5),display:"flex",flexFlow:"row nowrap",alignItems:"center",justifyContent:"center"},newLabelText:Object(v.a)({flexGrow:1,margin:e.spacing(0,1)},e.typography.body2,{letterSpacing:"normal"}),newLabelButton:{marginLeft:e.spacing(1)},scrollbar:Object(ae.a)({maxHeight:"calc(100vh - 144px)"},e.breakpoints.up("sm"),{maxHeight:"calc(100vh - 200px)"})}})),he=function(e){var t=e.labels,a=e.checkedIds,n=e.toggleCheck,r=e.edit,c=e.toggleEditor,s=e.selectEditedLabel,o=e.editedLabel,l=e.newLabel,u=e.changeName,d=e.createLabel,p=e.updateLabel,f=e.deleteLabel,m=ge();return i.a.createElement("div",null,i.a.createElement("div",{className:m.header},i.a.createElement(le.a,{className:m.title},"Labels"),i.a.createElement(oe.a,{edge:"end",size:"small",onClick:c},i.a.createElement(be.a,{fontSize:"small"}))),i.a.createElement(re.a,{className:m.scrollbar},i.a.createElement("ul",{className:m.list},t.map((function(e){return i.a.createElement("li",{key:e.id,className:m.listItem,onClick:r?s(e):n(e.id)},r?i.a.createElement(oe.a,{color:"primary",className:m.labelIcon,onClick:f(e.id)},i.a.createElement(de.a,{color:"primary"})):i.a.createElement(se.a,{disableRipple:!0,checked:a.includes(e.id),color:"primary"}),e.id===o.id?i.a.createElement(ie.a,{error:o.error,value:o.name,autoFocus:!0,className:m.labelText,onChange:u(e.name)}):i.a.createElement(le.a,{noWrap:!0,className:m.labelText},e.name),i.a.createElement("div",{className:m.labelAction},e.id===o.id&&i.a.createElement(oe.a,{color:"primary",disabled:o.disabled,className:m.labelIcon,onClick:p},i.a.createElement(fe.a,{color:o.disabled?"disabled":"primary"}))))})))),r&&i.a.createElement("div",{className:m.newLabelContainer},i.a.createElement(ie.a,{error:l.error,value:l.name,onChange:u(),className:m.newLabelText}),i.a.createElement(ce.a,{disabled:l.disabled,size:"small",variant:"contained",color:"primary",className:m.newLabelButton,onClick:d},"Add")))},xe=function(e){var t=e.open,a=e.checkedIds,n=e.setCheckedIds,r=Object(o.useState)(K()),c=Object(f.a)(r,2),s=c[0],l=c[1],u=Object(o.useState)(!1),d=Object(f.a)(u,2),m=d[0],b=d[1],g=Object(o.useState)({}),h=Object(f.a)(g,2),x=h[0],E=h[1],y=Object(o.useState)({name:"",disabled:!0}),j=Object(f.a)(y,2),k=j[0],O=j[1];Object(o.useEffect)((function(){t||b(!1)}),[t]),Object(o.useEffect)((function(){m||(E({}),O({name:"",disabled:!0}))}),[m]);var I=function(e,t){return(e=e.trim()).length?t&&e===t?{error:!1,disabled:!1}:s.some((function(t){return t.name===e}))?{error:!0,message:"Dublicate",disabled:!0}:{error:!1,disabled:!1}:{error:!0,message:"Only spaces",disabled:!0}};return i.a.createElement(he,{labels:s,checkedIds:a,toggleCheck:function(e){return function(){var t=a.indexOf(e),r=Object(w.a)(a);-1===t?r.push(e):r.splice(t,1),n(r)}},edit:m,toggleEditor:function(){b(!m)},selectEditedLabel:function(e){return function(){e?e.id!==x.id&&E(Object(v.a)({},e,{disabled:!0})):E({})}},editedLabel:x,newLabel:k,changeName:function(e){return function(t){var a=t.target.value,n=e?x:k,r=e?E:O,c=I(a,e);r(Object(v.a)({},n,{name:a},c))}},createLabel:function(){return p.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.awrap(Q(k.name));case 2:O({name:"",disabled:!0}),l(K());case 4:case"end":return e.stop()}}))},updateLabel:function(e){return p.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return e.stopPropagation(),t.next=3,p.a.awrap(_(x));case 3:l(K());case 4:case"end":return t.stop()}}))},deleteLabel:function(e){return function(t){return p.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t.stopPropagation(),r.next=3,p.a.awrap(G(e));case 3:l(K()),n(a.filter((function(t){return t!==e})));case 5:case"end":return r.stop()}}))}}})},ve=a(7),we=a(250),Ee=a(255),ye=a(210),je=a(251),ke=a(252),Oe=a(128),Ie=a.n(Oe),Ce=a(125),Ne=a.n(Ce),Le=a(126),Se=a.n(Le),Be=a(127),Fe=a.n(Be),De=a(246),Re=a(245),ze=a(247),Pe=a(249),Te=a(248),We=a(257),He=Object(Z.a)((function(e){return{notesContainer:{position:"relative",margin:"auto",maxWidth:1150,paddingTop:56}}})),qe=function(e){var t=e.desktop,a=e.notes,n=e.openEditor,r=e.deleteNote,c=He();return i.a.createElement(Re.a,null,i.a.createElement("div",{className:c.notesContainer},i.a.createElement(De.a,{container:!0,spacing:t?3:1},a.map((function(e){var t=e.id,a=e.title,s=e.text,o=e.labelsIds;return i.a.createElement(De.a,{key:t,item:!0,xs:12,md:6,lg:4},i.a.createElement(ze.a,{className:c.note},i.a.createElement(Te.a,{className:c.noteContent},i.a.createElement("div",null,K(o).map((function(e){var t=e.id,a=e.name;return i.a.createElement(We.a,{key:t,size:"small",label:a})}))),i.a.createElement(le.a,{gutterBottom:!0,variant:"h5",component:"h2"},a),i.a.createElement(le.a,null,s)),i.a.createElement(Pe.a,null,i.a.createElement(ce.a,{size:"small",color:"primary",onClick:r(t)},"Delete"),i.a.createElement(ce.a,{size:"small",color:"primary",onClick:n(e)},"Edit"))))})))))},Ae=Object(Z.a)((function(e){return{toolbar:{display:"flex",flexFlow:"row wrap",justifyContent:"space-between",alignItems:"center",height:56,padding:e.spacing(.5,2)},leftBlock:Object(ae.a)({display:"none"},e.breakpoints.up("sm"),{flex:"0 0 120px",display:"flex",justifyContent:"flex-start",paddingLeft:e.spacing(7),marginRight:e.spacing(.5)}),middleBlock:{flex:"1 1 auto",display:"flex",justifyContent:"center"},rightBlock:Object(ae.a)({flex:"0 0 auto",display:"flex",marginLeft:e.spacing(.5),justifyContent:"flex-end"},e.breakpoints.up("sm"),{flex:"0 0 120px"}),search:{position:"relative",display:"flex",alignItems:"center",borderRadius:e.shape.borderRadius,backgroundColor:Object(ve.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(ve.c)(e.palette.common.white,.25)},width:"100%",maxWidth:720,height:38},searchIcon:{width:e.spacing(7),position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},searchRoot:{color:"inherit",width:"100%"},searchInput:{padding:e.spacing(1,1,1,7)},drawerPaper:Object(ae.a)({width:256},e.breakpoints.up("sm"),{zIndex:e.zIndex.appBar-1,top:56}),filtersHeader:{height:55,padding:e.spacing(0,2),display:"flex",flexFlow:"row nowrap",alignItems:"center",justifyContent:"space-between"},filtersBody:{padding:e.spacing(1,0)},fab:Object(ae.a)({position:"fixed",bottom:e.spacing(2),right:e.spacing(2)},e.breakpoints.up("sm"),{bottom:e.spacing(3),right:e.spacing(5)}),unshift:Object(ae.a)({},e.breakpoints.up("sm"),{transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginRight:0}),shift:Object(ae.a)({},e.breakpoints.up("sm"),{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginRight:256})}})),Je=function(e){var t,a,n=e.desktop,r=e.notes,c=e.drawer,s=e.toggleDrawer,o=e.query,l=e.changeQueryString,u=e.setQueryLabelsIds,d=e.openEditor,p=e.deleteNote,f=Ae();return i.a.createElement(i.a.Fragment,null,i.a.createElement(we.a,{position:"fixed"},i.a.createElement("div",{className:f.toolbar},i.a.createElement("div",{className:f.leftBlock},i.a.createElement(le.a,{variant:"h6",noWrap:!0},"Notes")),i.a.createElement("div",{className:f.middleBlock},i.a.createElement("div",{className:f.search},i.a.createElement("div",{className:f.searchIcon},i.a.createElement(Ne.a,null)),i.a.createElement(ye.a,{placeholder:"Search\u2026",classes:{root:f.searchRoot,input:f.searchInput},value:o.string,onChange:l,autoFocus:!0}))),i.a.createElement("div",{className:f.rightBlock},i.a.createElement(oe.a,{edge:"end",color:"inherit",onClick:s},i.a.createElement(Se.a,null))))),i.a.createElement(Ee.a,{classes:{paper:f.drawerPaper},variant:n?"persistent":"temporary",open:c,onClose:s,anchor:"right"},i.a.createElement("div",{className:f.filtersHeader},i.a.createElement(le.a,{variant:"h6",noWrap:!0},"Filters"),n&&i.a.createElement(oe.a,{edge:"end",color:"inherit",onClick:s},i.a.createElement(Fe.a,null))),i.a.createElement(je.a,null),i.a.createElement("div",{className:f.filtersBody},i.a.createElement(xe,{open:c,checkedIds:o.labelsIds,setCheckedIds:u}))),i.a.createElement("div",{className:Object(ne.a)(f.content,(t={},Object(ae.a)(t,f.shift,c),Object(ae.a)(t,f.unshift,!c),t))},i.a.createElement(qe,{notes:r,desktop:n,openEditor:d,deleteNote:p})),i.a.createElement(ke.a,{className:Object(ne.a)(f.fab,(a={},Object(ae.a)(a,f.shift,c),Object(ae.a)(a,f.unshift,!c),a)),color:"primary","aria-label":"add",onClick:d()},i.a.createElement(Ie.a,null)))},Me=a(133),Qe=a(129),_e=a.n(Qe),Ge=a(130),Ke=a.n(Ge),Ue=a(131),Ve=a.n(Ue),Xe=Object(Z.a)((function(e){return{toolbar:{display:"flex",flexFlow:"row wrap",height:112,padding:e.spacing(.5,2)},leftBlock:{flex:"1 0 0",alignSelf:"flex-start",display:"flex"},rightBlock:{flex:"1 0 0",alignSelf:"flex-start",display:"flex",justifyContent:"flex-end"},titleBlock:{flex:"1 0 100%",paddingBottom:e.spacing(1.5),paddingLeft:e.spacing(7)},note:{padding:e.spacing(17,2,0,2),minHeight:"100vh"},inputRoot:{color:"rgb(255, 255, 255)",fontSize:"1.5rem",lineHeight:1.33,letterSpacing:"0em","&.MuiInput-underline:after":{borderBottomColor:"rgb(255, 255, 255)"},"&.MuiInput-underline:before":{borderBottomColor:"rgba(255, 255, 255, 0.42)"},"&.MuiInput-underline:hover:before":{borderBottomColor:"rgba(255, 255, 255, 0.42)"}},drawerPaper:Object(ae.a)({width:256,padding:e.spacing(1,0)},e.breakpoints.up("sm"),{zIndex:e.zIndex.appBar-1,top:112}),fab:Object(ae.a)({position:"fixed",bottom:e.spacing(2),right:e.spacing(2)},e.breakpoints.up("sm"),{bottom:e.spacing(3),right:e.spacing(5)+256})}})),Ye=function(e){var t=e.note,a=e.desktop,n=e.drawer,r=e.toggleDrawer,c=e.changeField,s=e.setLabelsIds,l=e.saveNote,u=e.closeNote,d=Object(o.useRef)(null),p=Xe();return i.a.createElement(i.a.Fragment,null,i.a.createElement(we.a,{position:"fixed"},i.a.createElement("div",{className:p.toolbar},i.a.createElement("div",{className:p.leftBlock},i.a.createElement(oe.a,{edge:"start",color:"inherit",onClick:u},i.a.createElement(_e.a,null))),i.a.createElement("div",{className:p.rightBlock},!a&&i.a.createElement(oe.a,{edge:"end",color:"inherit",onClick:r},i.a.createElement(Ke.a,null))),i.a.createElement("div",{className:p.titleBlock},i.a.createElement(ie.a,{fullWidth:!0,classes:{root:p.inputRoot},autoComplete:"off",value:t.title,name:"title",placeholder:"Title",onChange:c})))),i.a.createElement(Ee.a,{classes:{paper:p.drawerPaper},variant:a?"persistent":"temporary",open:!!a||n,onClose:r,anchor:"right"},i.a.createElement(xe,{open:n,checkedIds:t.labelsIds,setCheckedIds:s})),i.a.createElement(Me.a,{square:!1,elevation:0,className:p.note,onClick:function(){d.current.focus()}},i.a.createElement(ye.a,{fullWidth:!0,inputRef:d,multiline:!0,autoComplete:"off",value:t.text,name:"text",onChange:c,placeholder:"Content"})),i.a.createElement(ke.a,{className:p.fab,color:"primary","aria-label":"add",onClick:l},i.a.createElement(Ve.a,null)))},Ze=function(e){var t=e.note,a=e.saveNote,n=e.closeEditor,r=Object(o.useContext)(at).desktop,c=Object(o.useState)(!1),s=Object(f.a)(c,2),l=s[0],u=s[1],d=Object(o.useState)(t),p=Object(f.a)(d,2),m=p[0],b=p[1];Object(o.useEffect)((function(){b(t)}),[t]);return i.a.createElement(Ye,{desktop:r,drawer:l,toggleDrawer:function(){u(!l)},note:m,changeField:function(e){var t=e.target,a=t.name,n=t.value;b(Object(v.a)({},m,Object(ae.a)({},a,n)))},setLabelsIds:function(e){b(Object(v.a)({},m,{labelsIds:e}))},saveNote:a(m),closeNote:function(){n()}})},$e=function(){var e=Object(o.useContext)(at).desktop,t=Object(o.useState)(e),a=Object(f.a)(t,2),n=a[0],r=a[1],c=Object(o.useState)({string:"",labelsIds:[]}),l=Object(f.a)(c,2),u=l[0],d=l[1],p=Object(o.useState)([]),m=Object(f.a)(p,2),b=m[0],g=m[1],h=Object(o.useState)(null),x=Object(f.a)(h,2),w=x[0],E=x[1];Object(o.useEffect)((function(){g(U(u))}),[u]),Object(o.useEffect)((function(){r(e)}),[e]);return w?i.a.createElement(Ze,{note:w,saveNote:function(e){return function(){var t;t=e.id?function(e){var t,a,n=!1,r=s.notes[e.id];if(e.title!==r.title){var c=H(r.title),o=H(e.title),i=T(c,o),l=T(o,c);A(e.id,i),q(e.id,l),n=!0}if(e.text!==r.text){var u=H(r.text),d=H(e.text),p=T(u,d),f=T(d,u);A(e.id,p),q(e.id,f),n=!0}if(t=e.labelsIds,a=r.labelsIds,t.length!==a.length||!t.every((function(e){return a.includes(e)}))){var m=T(r.labelsIds,e.labelsIds),b=T(e.labelsIds,r.labelsIds);M(e.id,m),J(e.id,b),n=!0}return n&&(s.notes[e.id]=e,N("data",s)),s.notes[e.id]}(e):function(e){var t=e.labelsIds,a=e.title,n=e.text,r=s.options.notesCrtId+1;return s.options.notesCrtId=r,q(r,H(a)),q(r,H(n)),J(r,t),s.notes[r]=Object(v.a)({id:r},e),N("data",s),s.notes[r]}(e),E(t),g(U(u))}},closeEditor:function(){E(null)}}):i.a.createElement(Je,{desktop:e,drawer:n,toggleDrawer:function(){r(!n)},notes:b,query:u,changeQueryString:function(e){var t=e.target.value;d(Object(v.a)({},u,{string:t}))},setQueryLabelsIds:function(e){d(Object(v.a)({},u,{labelsIds:e}))},openEditor:function(e){return function(){E(e=e||{labelsIds:[],title:"",text:""})}},deleteNote:function(e){return function(){!function(e){var t=s.notes[e];A(e,H(t.title)),A(e,H(t.text)),M(e,t.labelsIds),delete s.notes[e],N("data",s)}(e),g(U(u))}}})},et=a(253),tt=a(254),at=Object(o.createContext)(null);u.a.render(i.a.createElement((function(){var e=Object(o.useState)(!0),t=Object(f.a)(e,2),a=t[0],n=t[1],r=Object(o.useState)(""),c=Object(f.a)(r,2),s=c[0],l=c[1],u=Object(et.a)("(min-width:600px)");return Object(o.useEffect)((function(){!function(){var e,t;p.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,!(e=window.location.hash)){a.next=6;break}g(e),a.next=8;break;case 6:return a.next=8,p.a.awrap(W());case 8:a.next=15;break;case 11:a.prev=11,a.t0=a.catch(0),t=a.t0.message,l(t);case 15:return a.prev=15,n(!1),a.finish(15);case 18:case 19:case"end":return a.stop()}}),null,null,[[0,11,15,18]])}()}),[]),i.a.createElement(i.a.Fragment,null,i.a.createElement(tt.a,null),i.a.createElement(at.Provider,{value:{isLoading:a,setIsLoading:n,error:s,setError:l,desktop:u}},a?i.a.createElement(te,null):i.a.createElement($e,null)))}),null),document.getElementById("root"))}},[[140,1,2]]]);
//# sourceMappingURL=main.83cf0ff0.chunk.js.map