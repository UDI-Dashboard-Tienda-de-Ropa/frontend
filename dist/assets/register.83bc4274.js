import{_ as g,g as h,u as v,f as x,r as c,o as w,a as b,b as s,d as n,w as m,R as C,W as y,X as V}from"./index.427f4fa2.js";import{S as _}from"./sweetalert2.all.7d484c3e.js";import"./_commonjsHelpers.4e997714.js";const E={name:"register",setup(){const t=h(),e=v(),l=x({email:"",password:""});return{user:l,register:()=>{C(t,l.value.email,l.value.password).then(()=>{e.push({name:"home"})}).catch(d=>{const r=d.code,i=d.message;r==="auth/invalid-email"||r==="auth/internal-error"?_.fire("Error","El email o la contrase\xF1a no es valido","error"):_.fire("Error",r,"error"),console.log("errorCode:",r,"errorMessage:",i)})}}}},u=t=>(y("data-v-2187b54f"),t=t(),V(),t),I={id:"template"},B={id:"login",class:"flex flex-col items-center justify-center h-screen"},S=u(()=>s("div",{class:"flex justify-center"}," Registrate ",-1)),k={class:"flex flex-col gap-4"},R={class:"flex flex-col"},j=u(()=>s("span",null,"Email",-1)),U={class:"flex flex-col"},A=u(()=>s("span",null,"Contrase\xF1a",-1)),M={class:"flex justify-between"};function N(t,e,l,o,d,r){const i=c("InputText"),p=c("Button"),f=c("Card");return w(),b("div",I,[s("section",B,[n(f,{style:{width:"25rem","margin-bottom":"2em"}},{title:m(()=>[S]),content:m(()=>[s("div",k,[s("div",R,[j,n(i,{type:"text",modelValue:o.user.email,"onUpdate:modelValue":e[0]||(e[0]=a=>o.user.email=a)},null,8,["modelValue"])]),s("div",U,[A,n(i,{type:"password",modelValue:o.user.password,"onUpdate:modelValue":e[1]||(e[1]=a=>o.user.password=a)},null,8,["modelValue"])]),s("div",M,[n(p,{label:"Ya tienes cuenta?",class:"p-button-help",onClick:e[2]||(e[2]=a=>t.$router.push({name:"login"}))}),n(p,{label:"Registrarme",onClick:e[3]||(e[3]=a=>o.register())})])])]),_:1})])])}const P=g(E,[["render",N],["__scopeId","data-v-2187b54f"]]);export{P as default};
