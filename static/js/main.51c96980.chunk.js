(this.webpackJsonptestsquare=this.webpackJsonptestsquare||[]).push([[0],{42:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){"use strict";t.r(a);var n=t(3),d=t(0),r=t.n(d),s=t(15),i=t.n(s),c=t(18),u=t(29),l=t(61),o=t(60),p=t(40),h="CONVERT_JSON",v="ADD_UNIT",f={dependencies:{m:1,cm:100,in:39.370078,ft:3.280839},result:null},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case h:var t=p.cloneDeep(e);if(0!==a.data[1]&&!a.data[1]||a.data[1]<0||"number"!==typeof a.data[1])return alert("The value is not valid"),t;if("m"===a.data[0])if(t.dependencies[a.data[2]]){var n=t.dependencies[a.data[2]];t.result={unit:a.data[2],value:a.data[1]*n}}else alert("There is no such unit of measure in the database: "+a.data[2]);else if("m"===a.data[2])if(t.dependencies[a.data[0]]){var d=t.dependencies[a.data[0]];t.result={unit:a.data[2],value:a.data[1]/d}}else alert("There is no such unit of measure in the database: "+a.data[0]);else if(t.dependencies[a.data[0]]&&t.dependencies[a.data[2]]){var r=t.dependencies[a.data[0]],s=t.dependencies[a.data[2]];t.result={unit:a.data[2],value:a.data[1]/r*s}}else t.dependencies[a.data[0]]?t.dependencies[a.data[2]]||alert("There is no such unit of measure in the database: "+a.data[2]):alert("There is no such unit of measure in the database: "+a.data[0]);return t;case v:var i=p.cloneDeep(e);return 0!==a.data[2]&&!a.data[2]||a.data[2]<0||typeof a.data[2]!==Number?(alert("The value is not valid"),i):i.dependencies[a.data[0]]&&i.dependencies[a.data[1]]?(alert("The data is already in the database"),i):i.dependencies[a.data[0]]||i.dependencies[a.data[1]]?(i.dependencies[a.data[0]]?(alert("Success"),i.dependencies[a.data[1]]=i.dependencies[a.data[0]]*a.data[2]):i.dependencies[a.data[1]]&&(alert("Success"),i.dependencies[a.data[0]]=i.dependencies[a.data[1]]/a.data[2]),i):(alert("There are no units of measure with which to compare your"),i);default:return e}},j=(t(42),function(e){var a=e.store,t=Object(d.useState)(void 0),r=Object(u.a)(t,2),s=r[0],i=r[1],p=Object(c.b)(),f=function(e){var t=e.target.files[0],n=new FileReader;n.onload=function(e){try{var t=JSON.parse(e.target.result);p((n=t.distance.unit,d=t.distance.value,r=t.convert_to,{type:h,data:[n,d,r]})),i(JSON.stringify(a.getState().branch1.result))}catch(s){alert("Error")}var n,d,r},n.readAsText(t),e.target.value=""},b=function(e){var t=e.target.files[0],n=new FileReader;n.onload=function(e){try{var t=JSON.parse(e.target.result);p((n=t.unit1,d=t.unit2,r=t.ratio,{type:v,data:[n,d,r]})),console.log(a.getState().branch1.dependencies)}catch(s){alert("Error")}var n,d,r},n.readAsText(t),e.target.value=""};return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsxs)("div",{className:"wrapper",children:[Object(n.jsx)(l.a,{children:"Convert"}),Object(n.jsx)(o.a,{type:"file",onChange:function(e){return f(e)}})]}),Object(n.jsxs)("div",{className:"wrapper",children:[Object(n.jsx)(l.a,{children:"Add unit of measure"}),Object(n.jsx)(o.a,{type:"file",onChange:function(e){return b(e)}})]}),Object(n.jsx)("div",{className:"wrapper",children:"null"!==s&&s})]})}),O=t(10),m=t(28),g=Object(O.c)({branch1:b}),x=Object(O.d)(g,Object(O.a)(m.a));t(43);i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(c.a,{store:x,children:Object(n.jsx)(j,{store:x})})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.51c96980.chunk.js.map