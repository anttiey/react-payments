import{u as n,j as e}from"./styled-components.browser.esm-CH1WOJFx.js";const p=n.fieldset`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`,r=n.div`
  position: relative;
  display: grid;
  grid-template-columns: ${t=>`repeat(${t.$inputCount}, 1fr)`};
  column-gap: 10px;
  width: 100%;
  padding-bottom: 22px;
`,d=n.legend`
  display: contents;
  font-size: ${({theme:t})=>t.fontSize.base};
  font-weight: 500;
  line-height: 15px;
`,l=n.p`
  position: absolute;
  bottom: 0;
  color: ${({theme:t})=>t.color.error};
  font-size: ${({theme:t})=>t.fontSize.sm};
  font-weight: 400;
  line-height: 13px;
`;function a({label:t,errorMessage:i,inputCount:o,children:s}){return e.jsxs(p,{children:[e.jsx(d,{children:t}),e.jsxs(r,{$inputCount:o,children:[s,i&&e.jsx(l,{children:i})]})]})}a.__docgenInfo={description:"",methods:[],displayName:"InputField",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};export{a as I};
