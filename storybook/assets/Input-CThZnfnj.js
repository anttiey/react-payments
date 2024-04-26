import{u as t,j as s}from"./styled-components.browser.esm-CQOLgtoS.js";import{r as e}from"./index-CsdIBAqE.js";const p=t.input`
  width: 100%;
  height: 32px;
  padding: 8px;
  border-radius: 2px;
  border: 1px solid
    ${r=>r.$isValid?({theme:o})=>o.color.primary.light:({theme:o})=>o.color.error};
  font-size: ${({theme:r})=>r.fontSize.base};

  &::placeholder {
    color: ${({theme:r})=>r.color.primary.light};
  }

  &:focus {
    border-color: ${r=>r.$isValid?({theme:o})=>o.color.primary.dark:({theme:o})=>o.color.error};
  }
`,a=e.forwardRef(({isValid:r,...o},i)=>s.jsx(p,{$isValid:r,ref:i,...o}));a.__docgenInfo={description:"",methods:[],displayName:"Input"};export{a as I};
