import{d}from"./dayjs.min.116b46e0.js";import{h as u,_ as g,i as l,j as _,r as h,o as v,b as x,d as o,f as i,F as Y}from"./index.e87fadec.js";import"./_commonjsHelpers.4e997714.js";const p="http://localhost:5001/api/";class E{getMargenBruto(e){return u.get(`${p}dashboard/get-margen-bruto/${e}`)}getPromedioInventario(e){return u.get(`${p}dashboard/get-inventario-promedio/${e}`)}getTopTres(e){return u.get(`${p}dashboard/get-top-tres/${e}`)}getVendidosPorcentaje(e){return u.get(`${p}dashboard/get-vendidos-porcentaje/${e}`)}}const G={name:"DashboardMain",setup(){const f=l(),e=l(),b=l(),r=l(),c=new E,m=l("month"),s=l(d().format("YYYY")),n=()=>{document.getElementById("fecha").blur(),c.getMargenBruto(d(s.value).format("YYYY")).then(({data:t})=>{const a=f.value.chart;a.data.datasets[0].data=t,a.update()}),c.getPromedioInventario(d(s.value).format("YYYY")).then(({data:t})=>{const a=e.value.chart;a.data.datasets[0].data=t.arrayResult,a.data.labels=t.arrayLabels,a.update()}),c.getTopTres(d(s.value).format("YYYY")).then(({data:t})=>{const a=b.value.chart;a.data.datasets=t,a.update()}),c.getVendidosPorcentaje(d(s.value).format("YYYY")).then(({data:t})=>{const a=r.value.chart;a.data.datasets[0].data=t.porcentajeIndividual,a.data.labels=t.labels,a.update()})};return _(()=>{n()}),{date:s,dateType:m,search:n,refPrimerGrafico:f,refSegundoGrafico:e,refTercerGrafico:b,refCuartoGrafico:r,primerGrafico:{labels:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],datasets:[{label:"% Margen Bruto",backgroundColor:"#42A5F5",data:[]}]},segundoGrafico:{labels:[],datasets:[{label:"Inventario promedio",backgroundColor:["#3E6B72","#19C76B","#1ECCD4","#E557E0","#6FE4B9","#5E0A10","#53D42E"],data:[]}]},tercerGrafico:{labels:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]},cuartoGrafico:{labels:[],datasets:[{data:[],backgroundColor:["#3E6B72","#19C76B","#1ECCD4","#E557E0","#6FE4B9","#5E0A10","#53D42E"]}]}}}},C={class:"flex gap-4 p-4"},y={class:"flex flex-col gap-4 p-4"},B={class:"flex gap-4"},w={class:"flex flex-col items-center box w-1/2 p-4"},D=o("span",{class:"font-bold text-xl"},"% Margen Bruto",-1),M={class:"flex flex-col items-center box w-1/2 p-4"},P=o("span",{class:"font-bold text-xl"},"Inventario Promedio",-1),F={class:"flex gap-4"},T={class:"flex flex-col items-center box w-1/2 p-4"},V=o("span",{class:"font-bold text-xl"},"Top 3 Productos mas vendidos",-1),j={class:"flex flex-col items-center box w-1/2 p-4"},A=o("span",{class:"font-bold text-xl"},"Porcentaje Global de Ventas",-1);function S(f,e,b,r,c,m){const s=h("Calendar"),n=h("Chart");return v(),x(Y,null,[o("div",C,[i(s,{"input-id":"fecha",modelValue:r.date,"onUpdate:modelValue":e[0]||(e[0]=t=>r.date=t),view:"year",dateFormat:"yy",onDateSelect:e[1]||(e[1]=t=>r.search())},null,8,["modelValue"])]),o("div",y,[o("div",B,[o("div",w,[D,i(n,{ref:"refPrimerGrafico",type:"line",data:r.primerGrafico,class:"w-full"},null,8,["data"])]),o("div",M,[P,i(n,{ref:"refSegundoGrafico",type:"bar",data:r.segundoGrafico,class:"w-full"},null,8,["data"])])]),o("div",F,[o("div",T,[V,i(n,{ref:"refTercerGrafico",type:"line",data:r.tercerGrafico,class:"w-full"},null,8,["data"])]),o("div",j,[A,i(n,{ref:"refCuartoGrafico",type:"pie",data:r.cuartoGrafico,class:"w-full"},null,8,["data"])])])])],64)}const J=g(G,[["render",S]]);export{J as default};
