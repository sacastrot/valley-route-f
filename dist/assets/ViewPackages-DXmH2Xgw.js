import{d as f,o as t,a as c,b as e,t as d,p as N,m as g,_ as k,r,x as y,i as h,w as C,F as P,G as b,f as A,z as I,A as S,c as V,k as m}from"./index-CVMiIcLg.js";import{p as B}from"./packages-CDTiZh1H.js";const i=a=>(N("data-v-0f1f2897"),a=a(),g(),a),D={class:"package_card shadow"},q={class:"section"},F=i(()=>e("p",{class:"head"},"Número de guía",-1)),L={class:"font-bold"},T={class:"section"},z=i(()=>e("div",{class:"head"},"Descripción",-1)),E={class:"section"},G=i(()=>e("div",{class:"head"},"Creado",-1)),H={class:"section"},M=i(()=>e("div",{class:"head"},"Desde",-1)),j={class:"section"},J=i(()=>e("div",{class:"head"},"Hasta",-1)),K=f({__name:"PackageCard",props:{id:{},description:{},createdAt:{},startNodeName:{},endNodeName:{}},setup(a){const s=a;return(_,l)=>(t(),c("div",D,[e("div",q,[F,e("p",L,d(s.id),1)]),e("div",T,[z,e("p",null,d(s.description),1)]),e("div",E,[G,e("p",null,d(s.createdAt),1)]),e("div",H,[M,e("p",null,d(s.startNodeName),1)]),e("div",j,[J,e("p",null,d(s.endNodeName),1)])]))}}),O=k(K,[["__scopeId","data-v-0f1f2897"]]),v=a=>(N("data-v-66b584a4"),a=a(),g(),a),Q={class:"container mx-auto pt-5"},R={class:"home mb-3"},U=v(()=>e("i",{class:"bi bi-house-fill"},null,-1)),W=v(()=>e("h1",null,"Tus paquetes",-1)),X={key:0,class:"packages flex flex-wrap gap-5 my-5"},Y={key:0},Z={key:1},ee=v(()=>e("p",null,"Cargando...",-1)),se=[ee],ae={class:"pages flex my-5 gap-5 flex-wrap"},te=f({__name:"ViewPackages",setup(a){const s=r(1),_=r(0),l=r([]),p=r(!0),u=async()=>{p.value=!0;try{const n=await B.getPackageList(s.value);l.value=n.list,_.value=n.pages}catch(n){console.error(n)}finally{p.value=!1}},x=()=>{s.value>1&&(s.value--,u())},$=()=>{s.value<_.value&&(s.value++,u())};return y(async()=>{await u()}),(n,oe)=>{const w=I("router-link");return t(),c("div",Q,[e("div",R,[h(w,{to:"/"},{default:C(()=>[U,S(" Inicio ")]),_:1})]),W,p.value?(t(),c("div",Z,se)):(t(),c("div",X,[(t(!0),c(P,null,b(l.value,o=>(t(),V(O,{key:o.id,id:o.id,description:o.description,createdAt:o.created,startNodeName:o.startNodeName,endNodeName:o.endNodeName},null,8,["id","description","createdAt","startNodeName","endNodeName"]))),128)),l.value.length===0?(t(),c("p",Y,"Aun no tienes ningún paquete")):A("",!0)])),e("div",ae,[h(m,{onClick:x,text:"Anterior"}),h(m,{onClick:$,text:"Siguiente"})])])}}}),de=k(te,[["__scopeId","data-v-66b584a4"]]);export{de as default};
