import{d as D,r as g,c as x,w as y,T as N,o as f,a as E,b as s,e as k,f as b,n as A,_ as F,u as T,g as d,h as p,i as z,v as J,j as L,F as G,k as H,p as K,l as Q}from"./index-C1oY0lKr.js";import{P as S,E as W,S as X}from"./SuccessAlert-CWisSxwx.js";import{v as M}from"./validateField-B_oZl-bZ.js";import{b as Y}from"./api.service-CXL8lX6R.js";import{a as Z}from"./login-B6xIwQBs.js";import{P as B}from"./PasswordInput-C97y5lpk.js";const ee={class:"modal-dialog modal-dialog-centered modal-dialog-scrollable"},se={class:"modal-content"},ae={class:"modal-header d-flex justify-content-between"},oe={class:"modal-body"},re={class:"modal-footer"},te=D({__name:"ModalBase",props:["show","hiddenClose"],emits:["onClose"],setup(n,{emit:_}){const t=_,c=()=>{t("onClose")},r=g("block");return(u,v)=>(f(),x(N,null,{default:y(()=>[n.show?(f(),E("div",{key:0,class:"modal fade show modal-fullscreen-sm-down",style:A({display:r.value}),"aria-modal":"true",role:"dialog"},[s("div",ee,[s("div",se,[s("div",ae,[k(u.$slots,"header",{},void 0,!0),n.hiddenClose?b("",!0):(f(),E("i",{key:0,class:"bi bi-x close-modal",onClick:v[0]||(v[0]=l=>c())}))]),s("div",oe,[k(u.$slots,"body",{},void 0,!0)]),s("div",re,[k(u.$slots,"footer",{},void 0,!0)])])])],4)):b("",!0)]),_:3}))}}),le=F(te,[["__scopeId","data-v-c3c44338"]]);async function ne(n){try{if((await Y.post("/auth/reset-password",n)).status===200)return}catch{throw new Error("Error al restablecer la contraseña, verifica el correo electrónico")}}const w=n=>(K("data-v-ed773c5f"),n=n(),Q(),n),ie={class:"w-100 container-form"},de={class:"container mx-auto"},ce={class:"flex items-center justify-center h-full"},ue={class:"w-[30rem]"},me=w(()=>s("h3",{class:"text-center"},"Iniciar sesión",-1)),pe={class:"flex flex-col gap-3 mt-5"},we={class:"password"},ve=w(()=>s("i",{id:"iconPassword",class:"bi bi-eye-fill"},null,-1)),fe=[ve],_e=w(()=>s("div",{class:"h-[1rem]"},null,-1)),ge=w(()=>s("div",{class:"h-[1rem]"},null,-1)),he=w(()=>s("div",{class:"modal-title"},[s("h2",null,"Cambia tu contraseña")],-1)),ye={class:"modal-body"},be=w(()=>s("p",null,"La contraseña debe tener por tu seguridad:",-1)),Ce=w(()=>s("ul",null,[s("li",null,"Debe tener al menos 8 caracteres"),s("li",null,"Debe tener al menos una letra mayúscula"),s("li",null,"Debe tener al menos un número"),s("li",null,"Debe tener al menos un caracter especial (@_.&$)")],-1)),Pe={class:"mt-5"},$e=D({__name:"LoginView",setup(n){const _=T(),t=g(!1),c=g(""),r=d({email:"",new_password:"",repeatPassword:""}),u=d({email:!1,new_password:!1}),v=d({email:"",new_password:""}),l=d({email:!1,new_password:!1,repeatPassword:!1}),i=d({email:"",password:""}),C=d({email:!1}),P=d({email:""}),$=d({email:!1}),m=g(""),h=g(!1),U=()=>{const a=document.getElementById("password-input"),e=document.getElementById("iconPassword");a.type==="password"?(a.type="text",e.classList.remove("bi-eye-fill"),e.classList.add("bi-eye-slash-fill")):(a.type="password",e.classList.remove("bi-eye-slash-fill"),e.classList.add("bi-eye-fill"))},j=a=>{a==="all"&&Object.keys(C).forEach(o=>{C[o]=!0}),C[a]=!0;const e=M("login","email",i.email);e!==""?(P[a]=e,$[a]=!0):(P[a]="",$[a]=!1)},V=a=>{a==="all"&&Object.keys(u).forEach(e=>{u[e]=!0}),u[a]=!0,Object.keys(r).forEach(e=>{const o=M("reset",e,r[e]);console.log("Message",o),o!==""?(v[e]=o,l[e]=!0):(v[e]="",l[e]=!1)})},I=()=>{r.new_password!==r.repeatPassword?l.repeatPassword=!0:l.repeatPassword=!1},O=()=>!(Object.values(l).filter(e=>e===!0).length>0),R=async()=>{if(t.value=!0,V("all"),!O()){t.value=!1;return}if(I(),l.repeatPassword){t.value=!1;return}const a={email:r.email,new_password:r.new_password};try{await ne(a),c.value="Contraseña cambiada correctamente",h.value=!1,r.email="",r.new_password=""}catch(e){e instanceof Error&&(m.value=e.message)}finally{t.value=!1}},q=async()=>{if(t.value=!0,i.email===""||i.password===""){m.value="Por favor, rellene todos los campos",t.value=!1;return}const a=new FormData;a.append("username",i.email),a.append("password",i.password),a.append("grant_type",""),a.append("client_id",""),a.append("client_secret",""),a.append("scope","");try{const e=await Z.login(a);_.state.token=e.token,window.localStorage.setItem("userData",btoa(JSON.stringify({token:e.token,type:e.type}))),H.push({name:"userhome"})}catch{m.value="Usuario o contraseña incorrectos"}finally{t.value=!1}};return(a,e)=>(f(),E(G,null,[s("div",ie,[s("div",de,[s("div",ce,[s("div",ue,[me,s("div",pe,[p(S,{id:"email",type:"email",placeholder:"Correo electrónico",modelValue:i.email,"onUpdate:modelValue":e[0]||(e[0]=o=>i.email=o),onLossFocus:e[1]||(e[1]=o=>j("email")),error:$.email,errorMessage:P.email},null,8,["modelValue","error","errorMessage"]),s("div",we,[z(s("input",{type:"password",class:"border border-gray-300 rounded px-3 py-3",placeholder:"Contraseña","onUpdate:modelValue":e[2]||(e[2]=o=>i.password=o),id:"password-input"},null,512),[[J,i.password]]),s("div",{class:"btn-password",onClick:U},fe)]),_e,s("p",{class:"text-center cursor-pointer",onClick:e[3]||(e[3]=o=>h.value=!0)}," ¿Olvidaste tu contraseña? "),ge,p(L,{text:"Iniciar sesión",loading:t.value,onClick:q},null,8,["loading"])])])])])]),p(le,{show:h.value,onOnClose:e[9]||(e[9]=o=>h.value=!1)},{header:y(()=>[he]),body:y(()=>[s("div",ye,[be,Ce,s("div",Pe,[p(S,{id:"emailreset",type:"email",placeholder:"Correo electrónico",modelValue:r.email,"onUpdate:modelValue":e[4]||(e[4]=o=>r.email=o),onLossFocus:e[5]||(e[5]=o=>V("email")),error:l.email,errorMessage:v.email},null,8,["modelValue","error","errorMessage"])]),p(B,{id:"resetpassword",type:"password",placeholder:"Nueva contraseña",modelValue:r.new_password,"onUpdate:modelValue":e[6]||(e[6]=o=>r.new_password=o),error:l.new_password,errorMessage:"Ingrese una contraseña válida",onLossFocus:e[7]||(e[7]=o=>V("new_password"))},null,8,["modelValue","error"]),p(B,{id:"repeatpassword",type:"password",placeholder:"Confirmar contraseña",modelValue:r.repeatPassword,"onUpdate:modelValue":e[8]||(e[8]=o=>r.repeatPassword=o),error:l.repeatPassword,errorMessage:"Las contraseñas no coinciden",onLossFocus:I},null,8,["modelValue","error"])])]),footer:y(()=>[p(L,{text:"Cambiar contraseña",onClick:R,loading:t.value},null,8,["loading"])]),_:1},8,["show"]),m.value?(f(),x(W,{key:0,show:m.value!=="",message:m.value,onClose:e[10]||(e[10]=o=>m.value="")},null,8,["show","message"])):b("",!0),c.value?(f(),x(X,{key:1,show:c.value!=="",message:c.value,onClose:e[11]||(e[11]=o=>c.value="")},null,8,["show","message"])):b("",!0)],64))}}),Se=F($e,[["__scopeId","data-v-ed773c5f"]]);export{Se as default};
