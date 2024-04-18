import{u as t,j as e}from"./styled-components.browser.esm-BJwir-wm.js";const o=t.fieldset`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`,p=t.div`
  display: grid;
  grid-template-columns: ${n=>`repeat(${n.$length}, 1fr)`};
  column-gap: 10px;
  width: 100%;
`,d=t.legend`
  display: contents;
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
`,l=t.p`
  height: 14px;
  color: #ff3d3d;
  font-size: 9.5px;
  font-weight: 400;
  line-height: 13px;
`;function a({label:n,errorMessage:i,length:r,children:s}){return e.jsxs(o,{children:[e.jsx(d,{children:n}),e.jsx(p,{$length:r,children:s}),e.jsx(l,{children:i})]})}a.__docgenInfo={description:"",methods:[],displayName:"InputField",props:{label:{required:!0,tsType:{name:"string"},description:""},errorMessage:{required:!0,tsType:{name:"string"},description:""},length:{required:!0,tsType:{name:"number"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};export{a as I};
