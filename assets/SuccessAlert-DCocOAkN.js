import{d as m,a as r,b as o,t as l,f as y,F as x,o as c,_ as i,G as _,q as b,p as h,l as f}from"./index-CKrzFuIu.js";const w=["for"],v=["id","type","placeholder","value"],I={key:0,class:"text-red-200"},S=m({__name:"PrimaryInput",props:{id:{},type:{},placeholder:{},modelValue:{},label:{},icon:{},readonly:{type:Boolean},disabled:{type:Boolean},rules:{},errorMessage:{},error:{type:Boolean}},emits:["update:modelValue","lossFocus"],setup(e,{emit:a}){const t=a,n=p=>{t("update:modelValue",p)},d=()=>{t("lossFocus")},s=e;return(p,u)=>(c(),r(x,null,[o("label",{for:s.id,class:"mt-2"},l(s.label),9,w),o("input",{id:s.id,type:s.type,placeholder:s.placeholder,value:s.modelValue,class:"border border-gray-300 rounded px-3 py-3",onInput:u[0]||(u[0]=g=>n(g.target.value)),onBlur:d},null,40,v),s.error?(c(),r("p",I,l(s.errorMessage),1)):y("",!0)],64))}}),M=i(S,[["__scopeId","data-v-bf7813ea"]]),B=e=>(h("data-v-0cf852d5"),e=e(),f(),e),V=B(()=>o("p",{class:"font-bold"},"Error!",-1)),$={class:"block sm:inline"},k=m({__name:"ErrorAlert",props:["message","show"],emits:["close"],setup(e,{emit:a}){const t=a;return _(()=>{setTimeout(()=>{t("close")},5e3)}),(n,d)=>(c(),r("div",{class:b(["alert bg-red-900 text-white p-4 px-[3rem] rounded absolute top-20 right-0 mt-4 mr-4 sm:w-[40rem] sm:fixed sm:z-50",{show:e.show}]),role:"alert"},[V,o("p",$,l(e.message),1)],2))}}),P=i(k,[["__scopeId","data-v-0cf852d5"]]),E=e=>(h("data-v-febab5b4"),e=e(),f(),e),F=E(()=>o("p",{class:"font-bold"},"Todo salió bien!",-1)),A={class:"block sm:inline"},z=m({__name:"SuccessAlert",props:["message","show"],emits:["close"],setup(e,{emit:a}){const t=a;return _(()=>{setTimeout(()=>{t("close")},5e3)}),(n,d)=>(c(),r("div",{class:b(["alert bg-green-500 text-black p-4 px-[3rem] rounded absolute top-20 right-0 mt-4 mr-4 sm:w-[40rem] sm:fixed sm:z-50",{show:e.show}]),role:"alert"},[F,o("p",A,l(e.message),1)],2))}}),T=i(z,[["__scopeId","data-v-febab5b4"]]);export{P as E,M as P,T as S};