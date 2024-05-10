import{u,j as t}from"./styled-components.browser.esm-CQOLgtoS.js";import{r as h}from"./index-CsdIBAqE.js";import{R as w,L as R}from"./Routes-CYoi7hAv.js";import{C as P}from"./CardPreview-Bh7bPcSv.js";import{C as E}from"./CardOwnerInput-CMwcAKvt.js";import{C as S}from"./CardExpirationInput-BhOOS3v-.js";import{u as B,C as N}from"./useInputs-BnvUSGGu.js";import{C as O}from"./CardCompanyInput-DhvlLjg0.js";import{C as $}from"./CardCVCInput-v_gaH-dL.js";import{C as L}from"./CardPasswordInput-Cz-QW7qn.js";import{u as e}from"./useInput-DAvWmIi0.js";import{b as U,c as _,e as M,v as k,a as z,f as A,d as D,l as f}from"./Card-DDt164ub.js";import"./index-5f0m1pej.js";import"./TitleContainer-DGWmh1Ss.js";import"./InputField-DV2kGLTv.js";import"./Input-BTG5cAIW.js";import"./Message-OuKfmD5w.js";import"./useAutoFocus-D2QMchji.js";const F=(a,d)=>{const[s,n]=h.useState(a),i=r=>r>s&&n(r);if(d.some(Boolean)){const r=a+d.filter(Boolean).length;i(r)}return{moveIndex:s}},T=u.main`
  padding: 77px 30px;
`,W=u.section`
  display: flex;
  justify-content: center;
  width: 100%;
`,Y=u.section`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  margin-top: 45px;
`,q=u.button`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  background: ${({theme:a})=>a.color.primary.main};
  color: #ffffff;
  font-size: ${({theme:a})=>a.fontSize.md};
  text-align: center;
  cursor: pointer;
`,j=()=>{const[a,d]=h.useState(!1),s=e(U,""),n=e(_,""),i=e(M,""),r=e(k,""),c=e(z,""),l=e(A,""),p=B(D,["","","",""]),C=[f(p.isValidList),c.isValid,f([s.isValid,n.isValid]),i.isValid,r.isValid,l.isValid],{moveIndex:I}=F(0,C),y=o=>d(o),b=o=>t.jsxs(Y,{children:[o>=5&&t.jsx(L,{password:l}),o>=4&&t.jsx($,{cvc:r,handleIsCVCInput:y}),o>=3&&t.jsx(E,{owner:i}),o>=2&&t.jsx(S,{month:s,year:n}),o>=1&&t.jsx(O,{company:c}),t.jsx(N,{cardNumbers:p})]}),V=()=>{const o=`${w.COMPLETE}?number=${encodeURIComponent(p.values[0])}&company=${encodeURIComponent(c.value)}`;return t.jsx(R,{to:o,children:t.jsx(q,{type:"button",children:"확인"})})};return t.jsxs("div",{children:[t.jsxs(T,{children:[t.jsx(W,{children:t.jsx(P,{cardNumber:p.values,month:s.value,year:n.value,owner:i.value,company:c.value,cvc:r.value,isCVCInput:a})}),b(I)]}),C.every(Boolean)&&V()]})};j.__docgenInfo={description:"",methods:[],displayName:"CardRegistrationPage"};const mt={title:"page/CardRegistrationPage",component:j,tags:["autodocs"]},m={};var x,v,g;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(v=m.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};const ut=["Default"];export{m as Default,ut as __namedExportsOrder,mt as default};
