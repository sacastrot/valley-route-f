var n=Object.defineProperty;var d=(e,s,t)=>s in e?n(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t;var a=(e,s,t)=>(d(e,typeof s!="symbol"?s+"":s,t),t);import{d as l,s as i,c as p,b as c,t as m,n as u,o as _,p as g,i as h,k as x}from"./index-CqzfxNIE.js";const b=e=>(g("data-v-bd8d7e63"),e=e(),h(),e),v=b(()=>c("p",{class:"font-bold"},"Error!",-1)),f={class:"block sm:inline"},k=l({__name:"ErrorAlert",props:["message","show"],emits:["close"],setup(e,{emit:s}){const t=s;return i(()=>{setTimeout(()=>{t("close")},5e3)}),(E,I)=>(_(),p("div",{class:u(["alert bg-red-100/20 text-black p-4 px-[3rem] rounded absolute top-20 right-0 mt-4 mr-4 sm:w-[40rem] sm:fixed sm:z-50",{show:e.show}]),role:"alert"},[v,c("p",f,m(e.message),1)],2))}}),M=x(k,[["__scopeId","data-v-bd8d7e63"]]);class w{}const o=class o extends w{validate(s){return o.regex.test(s)}validMessage(){return""}invalidMessage(){return"Ingresa un correo válido"}};a(o,"regex",/^[^\s@]+@[^\s@]+\.[^\s@]+$/);let r=o;export{M as E,r as U,w as V};
