import{u as i,j as s}from"./styled-components.browser.esm-CQOLgtoS.js";import{r as e}from"./index-CsdIBAqE.js";const p=i.input`
  width: 100%;
  height: 32px;
  padding: 8px;
  border-radius: 2px;
  border: 1px solid
    ${r=>r.$isError?({theme:o})=>o.color.error:({theme:o})=>o.color.primary.light};
  font-size: ${({theme:r})=>r.fontSize.base};

  &::placeholder {
    color: ${({theme:r})=>r.color.primary.light};
  }

  &:focus {
    border-color: ${r=>r.$isError?({theme:o})=>o.color.error:({theme:o})=>o.color.primary.dark};
  }
`,a=e.forwardRef(({isError:r,...o},t)=>s.jsx(p,{$isError:r,ref:t,...o}));a.__docgenInfo={description:"",methods:[],displayName:"Input"};export{a as I};
