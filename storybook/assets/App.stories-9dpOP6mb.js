import{u as o,j as t,t as b}from"./styled-components.browser.esm-CH1WOJFx.js";import{r as e}from"./index-CsdIBAqE.js";import{C as g}from"./CardNumberInput-C16_advy.js";import{C as N}from"./CardExpirationInput-BP-zrynP.js";import{C as S}from"./CardOwnerInput-Bk4rFAc6.js";import{C as A}from"./CardPreview-atghdXcz.js";import{t as E,G as I}from"./Global.style-flUDtSVS.js";import"./TitleContainer-DJjyZUFk.js";import"./InputField-CNChIPMh.js";import"./Input-BEYSa56s.js";import"./Message-DcBeI4xe.js";import"./Condition-CtXCmRIK.js";const O=o.main`
  padding: 77px 30px;
`,_=o.section`
  display: flex;
  justify-content: center;
  width: 100%;
`,v=o.section`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  margin-top: 45px;
`;function i(){const[a,c]=e.useState(["","","",""]),[d,u]=e.useState(""),[l,x]=e.useState(""),[f,h]=e.useState(""),j=r=>{c(r)},C=r=>{u(r)},w=r=>{x(r)},y=r=>{h(r)};return t.jsxs(b,{theme:E,children:[t.jsx(I,{}),t.jsxs(O,{children:[t.jsx(_,{children:t.jsx(A,{cardNumber:a,month:d,year:l,owner:f})}),t.jsxs(v,{children:[t.jsx(g,{cardNumbers:a,handleCardNumbers:j}),t.jsx(N,{handleMonth:C,handleYear:w}),t.jsx(S,{handleOwner:y})]})]})]})}i.__docgenInfo={description:"",methods:[],displayName:"App"};const z={title:"App",component:i,tags:["autodocs"]},s={};var n,p,m;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const H=["Default"];export{s as Default,H as __namedExportsOrder,z as default};
