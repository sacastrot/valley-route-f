var n=Object.defineProperty;var c=(r,e,t)=>e in r?n(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var o=(r,e,t)=>(c(r,typeof e!="symbol"?e+"":e,t),t);import{g as a,u as i}from"./index-CVMiIcLg.js";class u{constructor(e,t){o(this,"access_token");o(this,"token_type");this.access_token=e,this.token_type=t}get token(){return this.access_token}get type(){return this.token_type}get email(){const e=this.access_token.split(".")[1],t=atob(e),s=JSON.parse(t).email;if(!s)throw new Error("The payload does not contain a valid email.");return s}}const m={login:l,getUser:k};async function l(r){try{const{data:e}=await a.post("/auth/token",r);return new u(e.access_token,e.token_type)}catch{throw new Error("Error al iniciar sesión")}}async function k(){const e=i().user;try{const{data:t}=await a.get("/");e.email=t.email,e.firstName=t.firstName,e.lastName=t.lastName}catch{throw new Error("Error al obtener los datos del usuario")}}export{m as a};
