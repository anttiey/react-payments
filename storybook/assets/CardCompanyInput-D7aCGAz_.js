import{u as o,j as t}from"./styled-components.browser.esm-CQOLgtoS.js";import{T as g}from"./TitleContainer-DGWmh1Ss.js";import{r as m}from"./index-CsdIBAqE.js";import{m as h}from"./Card-DDt164ub.js";const x="data:image/svg+xml,%3csvg%20width='10'%20height='6'%20viewBox='0%200%2010%206'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.18008%204.54985L5.36015%200.729919L1.54022%204.54985'%20stroke='%23ACACAC'%20stroke-width='1.32867'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",f="data:image/svg+xml,%3csvg%20width='10'%20height='6'%20viewBox='0%200%2010%206'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1.04016%200.729874L4.86009%204.5498L8.68002%200.729874'%20stroke='%23ACACAC'%20stroke-width='1.32867'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",y=o.div`
  position: relative;
  padding-bottom: 22px;
`,w=o.div`
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
    color: ${e=>e.$isDefault?({theme:n})=>n.color.primary.light:({theme:n})=>n.color.primary.dark};
  }
`,v=o.ul`
  z-index: 999;
  position: absolute;
  top: 38px;
  width: 100%;
  border: 1px solid ${({theme:e})=>e.color.primary.light};
  border-radius: 2px;
  background: #ffffff;
  font-size: ${({theme:e})=>e.fontSize.base};
`,C=o.li`
  width: 100%;
  height: 32px;
  cursor: pointer;

  &:hover {
    background: #eeeeee;
  }
`,j=o.label`
  display: inline-block;
  width: 100%;
  height: 100%;
  padding: 8px;
`,a=({options:e,selectedOption:n,placeholder:p,updateOption:d})=>{const[r,s]=m.useState(!1),l=()=>s(i=>!i),c=i=>{d(i.target.value),s(!1)},u=()=>t.jsx(v,{children:e.map(i=>t.jsxs(C,{children:[t.jsx("input",{type:"radio",id:i,value:i,checked:i===n,onChange:c}),t.jsx(j,{htmlFor:i,children:i})]},i))});return t.jsxs(y,{children:[t.jsxs(w,{$isDefault:!n,onClick:l,children:[t.jsx("p",{children:n||p}),t.jsx("img",{src:r?x:f,alt:r?"옵션 닫기":"옵션 열기"})]}),r&&u()]})};a.__docgenInfo={description:"",methods:[],displayName:"SelectBox",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},selectedOption:{required:!0,tsType:{name:"string"},description:""},placeholder:{required:!0,tsType:{name:"string"},description:""},updateOption:{required:!0,tsType:{name:"signature",type:"function",raw:"(option: string) => void",signature:{arguments:[{type:{name:"string"},name:"option"}],return:{name:"void"}}},description:""}}};const b=({company:e})=>t.jsxs("div",{children:[t.jsx(g,{title:"카드사를 선택해 주세요.",subTitle:"현재 국내 카드사만 가능합니다."}),t.jsx(a,{options:Object.keys(h),selectedOption:e.value,placeholder:"카드사를 선택해 주세요",updateOption:n=>e.handleValue(n)})]});b.__docgenInfo={description:"",methods:[],displayName:"CardCompanyInput",props:{company:{required:!0,tsType:{name:"InputType",elements:[{name:"string"}],raw:"InputType<string>"},description:""}}};export{b as C};
