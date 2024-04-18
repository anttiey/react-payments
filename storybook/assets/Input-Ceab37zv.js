import{u as s,j as t}from"./styled-components.browser.esm-BJwir-wm.js";const d=s.input`
  width: 100%;
  height: 32px;
  padding: 8px;
  border-radius: 2px;
  border: 1px solid ${i=>i.$isValid?"#acacac":"#ff3d3d"};
  font-size: 11px;

  &:focus {
    border-color: ${i=>i.$isValid?"#000":"#ff3d3d"};
  }
`;function e({isValid:i,...o}){return t.jsx(d,{$isValid:i,...o})}e.__docgenInfo={description:"",methods:[],displayName:"Input",props:{isValid:{required:!0,tsType:{name:"boolean"},description:""}},composes:["InputHTMLAttributes"]};export{e as I};
