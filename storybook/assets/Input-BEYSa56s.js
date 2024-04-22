import{u as i,j as e}from"./styled-components.browser.esm-CH1WOJFx.js";const s=i.input`
  width: 100%;
  height: 32px;
  padding: 8px;
  border-radius: 2px;
  border: 1px solid
    ${r=>r.$isValid?({theme:o})=>o.color.primary:({theme:o})=>o.color.error};
  font-size: ${({theme:r})=>r.fontSize.base};

  &:focus {
    border-color: ${r=>r.$isValid?({theme:o})=>o.color.dark:({theme:o})=>o.color.error};
  }
`;function t({isValid:r,...o}){return e.jsx(s,{$isValid:r,...o})}t.__docgenInfo={description:"",methods:[],displayName:"Input",props:{isValid:{required:!0,tsType:{name:"boolean"},description:""}},composes:["InputHTMLAttributes"]};export{t as I};
