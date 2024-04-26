import{u as r,j as t}from"./styled-components.browser.esm-CQOLgtoS.js";import{r as l}from"./index-CsdIBAqE.js";import{T as p}from"./TitleContainer-BSfpPcoY.js";import{m as d}from"./Card-DDt164ub.js";const c="data:image/svg+xml,%3csvg%20width='10'%20height='6'%20viewBox='0%200%2010%206'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.18008%204.54985L5.36015%200.729919L1.54022%204.54985'%20stroke='%23ACACAC'%20stroke-width='1.32867'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",h="data:image/svg+xml,%3csvg%20width='10'%20height='6'%20viewBox='0%200%2010%206'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1.04016%200.729874L4.86009%204.5498L8.68002%200.729874'%20stroke='%23ACACAC'%20stroke-width='1.32867'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",m=r.div`
  position: relative;
  padding-bottom: 22px;
`,g=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 32px;
  padding: 8px;
  border-radius: 2px;
  border: 1px solid ${({theme:e})=>e.color.primary.light};
  font-size: ${({theme:e})=>e.fontSize.base};
  cursor: pointer;

  p {
    color: ${e=>e.$isDefault?({theme:o})=>o.color.primary.light:({theme:o})=>o.color.primary.dark};
  }
`,u=r.ul`
  z-index: 999;
  position: absolute;
  top: 38px;
  width: 100%;
  border: 1px solid ${({theme:e})=>e.color.primary.light};
  border-radius: 2px;
  background: #ffffff;
  font-size: ${({theme:e})=>e.fontSize.base};
`,x=r.li`
  width: 100%;
  height: 32px;
  cursor: pointer;

  &:hover {
    background: #eeeeee;
  }
`;r.p`
  color: ${({theme:e})=>e.color.primary.light};
`;const C=r.label`
  display: inline-block;
  width: 100%;
  height: 100%;
  padding: 8px;
`,f=({company:e})=>{const[o,n]=l.useState(!1),s=()=>n(!o),a=i=>{e.handleValue(i.target.value),n(!1)};return t.jsxs("div",{children:[t.jsx(p,{title:"카드사를 선택해 주세요.",subTitle:"현재 국내 카드사만 가능합니다."}),t.jsxs(m,{children:[t.jsxs(g,{$isDefault:!e.value,onClick:s,children:[t.jsx("p",{children:e.value||"카드사를 선택해 주세요"}),t.jsx("img",{src:o?c:h,alt:o?"옵션 닫기":"옵션 열기"})]}),o&&t.jsx(u,{children:Object.keys(d).map(i=>t.jsxs(x,{children:[t.jsx("input",{type:"radio",id:i,value:i,checked:i===e.value,onChange:a}),t.jsx(C,{htmlFor:i,children:i})]},i))})]})]})};f.__docgenInfo={description:"",methods:[],displayName:"CardCompanyInput",props:{company:{required:!0,tsType:{name:"InputType"},description:""}}};export{f as C};
