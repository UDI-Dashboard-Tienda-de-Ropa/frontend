import{_ as u,r as n,o as p,a as _,b as s,d as e,w as m}from"./index.428c1108.js";const f={name:"uploadDataMain",setup(){return{products:[{code:"1000",name:"Product 1",category:"Category 1",quantity:10},{code:"1001",name:"Product 2",category:"Category 1",quantity:20}],uploadFile:()=>{alert("En proceso")},downloadFile:()=>{alert("En proceso")}}}},y={class:"flex flex-col gap-4 p-4"},g={class:"flex justify-end gap-4"},C={class:"box p-4"};function v(r,o,d,t,x,b){const l=n("Button"),a=n("Column"),c=n("DataTable");return p(),_("div",y,[s("div",g,[e(l,{label:"Descargar Plantilla",onClick:o[0]||(o[0]=i=>t.downloadFile()),class:"p-button-warning"}),e(l,{label:"Cargar Plantilla",onClick:o[1]||(o[1]=i=>t.uploadFile())})]),s("div",C,[e(c,{value:t.products,responsiveLayout:"scroll",class:"text-sm"},{default:m(()=>[e(a,{field:"code",header:"Code"}),e(a,{field:"name",header:"Name"}),e(a,{field:"category",header:"Category"}),e(a,{field:"quantity",header:"Quantity"})]),_:1},8,["value"])])])}const F=u(f,[["render",v]]);export{F as default};