import{u,j as t}from"./styled-components.browser.esm-CQOLgtoS.js";import{r as l}from"./index-CsdIBAqE.js";import{L as P}from"./index-BDwOcIX2.js";import{C as R}from"./CardPreview--TLvsC9W.js";import{C as B}from"./CardOwnerInput-BzZ17rWb.js";import{C as S}from"./CardExpirationInput-CXcnl8aY.js";import{u as E,C as N}from"./useInputs-DjdjvsEg.js";import{C as _}from"./CardCompanyInput-laXRTiam.js";import{C as $}from"./CardCVCInput-CvAA_6kq.js";import{C as O}from"./CardPasswordInput-CvC-ryl_.js";import{u as s}from"./useInput-Cpc3-s_y.js";import{d as U,l as x,b as k,c as z,e as A,v as D,a as F,f as M}from"./Card-DDt164ub.js";import"./index-5f0m1pej.js";import"./TitleContainer-BSfpPcoY.js";import"./InputField-D3bmtCgA.js";import"./Input-CThZnfnj.js";import"./Message-OuKfmD5w.js";import"./useAutoFocus-CuA82mPR.js";const L=(r,n)=>{const[e,i]=l.useState(r);l.useEffect(()=>{n.some(Boolean)&&d(r+n.filter(Boolean).length)},[n]);const d=a=>a>e&&i(a);return{moveIndex:e}},W=u.main`
  padding: 77px 30px;
`,Y=u.section`
  display: flex;
  justify-content: center;
  width: 100%;
`,v=u.section`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  margin-top: 45px;
`,q=u.button`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  background: ${({theme:r})=>r.color.primary.main};
  color: #ffffff;
  font-size: ${({theme:r})=>r.fontSize.md};
  text-align: center;
  cursor: pointer;
`,I=()=>{const[r,n]=l.useState(!1),e=s(k),i=s(z),d=s(A),a=s(D),c=s(F),C=s(M),p=E(U,["","","",""]),f=[x(p.isValid),c.isValid,x([e.isValid,i.isValid]),d.isValid,a.isValid,C.isValid],{moveIndex:y}=L(0,f),b=o=>n(o),V=o=>t.jsxs(v,{children:[o>=5&&t.jsx(O,{password:C}),o>=4&&t.jsx($,{cvc:a,handleIsCVCInput:b}),o>=3&&t.jsx(B,{owner:d}),o>=2&&t.jsx(S,{month:e,year:i}),o>=1&&t.jsx(_,{company:c}),t.jsx(N,{cardNumbers:p})]}),w=()=>{const o=`/complete?number=${encodeURIComponent(p.values[0])}&company=${encodeURIComponent(c.value)}`;return t.jsx(P,{to:o,children:t.jsx(q,{type:"button",children:"확인"})})};return t.jsxs("div",{children:[t.jsxs(W,{children:[t.jsx(Y,{children:t.jsx(R,{cardNumber:p.values,month:e.value,year:i.value,owner:d.value,company:c.value,cvc:a.value,isCVCInput:r})}),t.jsx(v,{children:V(y)})]}),f.every(Boolean)&&w()]})};I.__docgenInfo={description:"",methods:[],displayName:"CardRegistrationPage"};const pt={title:"page/CardRegistrationPage",component:I,tags:["autodocs"]},m={};var g,h,j;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(j=(h=m.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};const mt=["Default"];export{m as Default,mt as __namedExportsOrder,pt as default};
