import{d as f,o as a,a as c,b as e,t as d,p as N,l as g,_ as k,r,s as w,h,w as C,F as P,D as b,f as I,y as S,z as A,c as V,j as m}from"./index-C1oY0lKr.js";import{p as B}from"./packages-CpoaDbJX.js";import"./api.service-CXL8lX6R.js";const i=t=>(N("data-v-0f1f2897"),t=t(),g(),t),D={class:"package_card shadow"},q={class:"section"},F=i(()=>e("p",{class:"head"},"Número de guía",-1)),L={class:"font-bold"},T={class:"section"},j=i(()=>e("div",{class:"head"},"Descripción",-1)),z={class:"section"},E=i(()=>e("div",{class:"head"},"Creado",-1)),H={class:"section"},M=i(()=>e("div",{class:"head"},"Desde",-1)),G={class:"section"},J=i(()=>e("div",{class:"head"},"Hasta",-1)),K=f({__name:"PackageCard",props:{id:{},description:{},createdAt:{},startNodeName:{},endNodeName:{}},setup(t){const s=t;return(_,l)=>(a(),c("div",D,[e("div",q,[F,e("p",L,d(s.id),1)]),e("div",T,[j,e("p",null,d(s.description),1)]),e("div",z,[E,e("p",null,d(s.createdAt),1)]),e("div",H,[M,e("p",null,d(s.startNodeName),1)]),e("div",G,[J,e("p",null,d(s.endNodeName),1)])]))}}),O=k(K,[["__scopeId","data-v-0f1f2897"]]),v=t=>(N("data-v-66b584a4"),t=t(),g(),t),Q={class:"container mx-auto pt-5"},R={class:"home mb-3"},U=v(()=>e("i",{class:"bi bi-house-fill"},null,-1)),W=v(()=>e("h1",null,"Tus paquetes",-1)),X={key:0,class:"packages flex flex-wrap gap-5 my-5"},Y={key:0},Z={key:1},ee=v(()=>e("p",null,"Cargando...",-1)),se=[ee],te={class:"pages flex my-5 gap-5 flex-wrap"},ae=f({__name:"ViewPackages",setup(t){const s=r(1),_=r(0),l=r([]),p=r(!0),u=async()=>{p.value=!0;try{const n=await B.getPackageList(s.value);l.value=n.list,_.value=n.pages}catch(n){console.error(n)}finally{p.value=!1}},x=()=>{s.value>1&&(s.value--,u())},$=()=>{s.value<_.value&&(s.value++,u())};return w(async()=>{await u()}),(n,oe)=>{const y=S("router-link");return a(),c("div",Q,[e("div",R,[h(y,{to:"/"},{default:C(()=>[U,A(" Inicio ")]),_:1})]),W,p.value?(a(),c("div",Z,se)):(a(),c("div",X,[(a(!0),c(P,null,b(l.value,o=>(a(),V(O,{key:o.id,id:o.id,description:o.description,createdAt:o.created,startNodeName:o.startNodeName,endNodeName:o.endNodeName},null,8,["id","description","createdAt","startNodeName","endNodeName"]))),128)),l.value.length===0?(a(),c("p",Y,"Aun no tienes ningún paquete")):I("",!0)])),e("div",te,[h(m,{onClick:x,text:"Anterior"}),h(m,{onClick:$,text:"Siguiente"})])])}}}),ie=k(ae,[["__scopeId","data-v-66b584a4"]]);export{ie as default};
