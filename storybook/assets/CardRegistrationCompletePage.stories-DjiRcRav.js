import{u as o,j as t}from"./styled-components.browser.esm-CQOLgtoS.js";import{u as m,L as p,M as l}from"./index-BDwOcIX2.js";import"./index-CsdIBAqE.js";import"./index-5f0m1pej.js";const g="data:image/svg+xml,%3csvg%20width='40'%20height='28'%20viewBox='0%200%2040%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4%2010.0377L16.0471%2024L36%204'%20stroke='white'%20stroke-width='7.49999'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",x=o.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  row-gap: 50px;
  justify-content: center;
  align-items: center;
`,h=o.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 76px;
  height: 76px;
  border-radius: 76px;
  background: ${({theme:e})=>e.color.primary.main};
`,u=o.p`
  font-size: ${({theme:e})=>e.fontSize.xl};
  font-weight: 700;
  line-height: 36.2px;
  text-align: center;
`,f=o.button`
  width: 320px;
  height: 44px;
  border-radius: 5px;
  background: ${({theme:e})=>e.color.primary.main};
  color: #ffffff;
  font-size: ${({theme:e})=>e.fontSize.md};
  text-align: center;
  cursor: pointer;
`,a=()=>{const[e]=m(),c=e.get("number"),d=e.get("company");return t.jsxs(x,{children:[t.jsx(h,{children:t.jsx("img",{src:g,alt:"등록 완료"})}),t.jsxs(u,{children:[c,"로 시작하는",t.jsx("br",{}),d,"가 등록되었어요."]}),t.jsx(p,{to:"/",children:t.jsx(f,{type:"button",children:"확인"})})]})};a.__docgenInfo={description:"",methods:[],displayName:"CardRegistrationCompletePage"};const b={title:"page/CardRegistrationCompletePage",component:a,decorators:[e=>t.jsx(l,{initialEntries:["/complete?number=1234&company=BC카드"],children:t.jsx(e,{})})]},r={};var n,s,i;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(i=(s=r.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const k=["Default"];export{r as Default,k as __namedExportsOrder,b as default};
