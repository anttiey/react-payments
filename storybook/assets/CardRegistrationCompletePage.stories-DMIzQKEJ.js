import{u as o,j as t}from"./styled-components.browser.esm-CQOLgtoS.js";import{u as p,N as l,R as n,L as g,M as x}from"./Routes-CYoi7hAv.js";import"./index-CsdIBAqE.js";import"./index-5f0m1pej.js";const h="data:image/svg+xml,%3csvg%20width='40'%20height='28'%20viewBox='0%200%2040%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4%2010.0377L16.0471%2024L36%204'%20stroke='white'%20stroke-width='7.49999'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",u=o.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  row-gap: 50px;
  justify-content: center;
  align-items: center;
`,f=o.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 76px;
  height: 76px;
  border-radius: 76px;
  background: ${({theme:e})=>e.color.primary.main};
`,j=o.p`
  font-size: ${({theme:e})=>e.fontSize.xl};
  font-weight: 700;
  line-height: 36.2px;
  text-align: center;
`,C=o.button`
  width: 320px;
  height: 44px;
  border-radius: 5px;
  background: ${({theme:e})=>e.color.primary.main};
  color: #ffffff;
  font-size: ${({theme:e})=>e.fontSize.md};
  text-align: center;
  cursor: pointer;
`,c=()=>{const[e]=p();if([...e.entries()].length===0)return t.jsx(l,{to:n.ERROR});const d=e.get("number"),m=e.get("company");return t.jsxs(u,{children:[t.jsx(f,{children:t.jsx("img",{src:h,alt:"등록 완료"})}),t.jsxs(j,{children:[d,"로 시작하는",t.jsx("br",{}),m,"가 등록되었어요."]}),t.jsx(g,{to:n.HOME,children:t.jsx(C,{type:"button",children:"확인"})})]})};c.__docgenInfo={description:"",methods:[],displayName:"CardRegistrationCompletePage"};const k={title:"page/CardRegistrationCompletePage",component:c,decorators:[e=>t.jsx(x,{initialEntries:["/complete?number=1234&company=BC카드"],children:t.jsx(e,{})})]},r={};var s,i,a;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(a=(i=r.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const v=["Default"];export{r as Default,v as __namedExportsOrder,k as default};
