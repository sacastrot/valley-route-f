var n=Object.defineProperty;var c=(o,e,t)=>e in o?n(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var r=(o,e,t)=>(c(o,typeof e!="symbol"?e+"":e,t),t);import{b as a}from"./api.service-CXL8lX6R.js";import{u as i}from"./index-C1oY0lKr.js";class l{constructor(e,t){r(this,"access_token");r(this,"token_type");this.access_token=e,this.token_type=t}get token(){return this.access_token}get type(){return this.token_type}get email(){const e=this.access_token.split(".")[1],t=atob(e),s=JSON.parse(t).email;if(!s)throw new Error("The payload does not contain a valid email.");return s}}const h={login:u,getUser:k};async function u(o){try{const{data:e}=await a.post("/auth/token",o);return new l(e.access_token,e.token_type)}catch{throw new Error("Error al iniciar sesión")}}async function k(){const e=i().state;try{const{data:t}=await a.get("/");e.email=t.email,e.firstName=t.firstName,e.lastName=t.lastName}catch{throw new Error("Error al obtener los datos del usuario")}}export{h as a};
