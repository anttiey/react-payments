import{u,j as t}from"./styled-components.browser.esm-CQOLgtoS.js";import{r as l}from"./index-CsdIBAqE.js";import{R as w,L as R}from"./Routes-pWZ8v2zf.js";import{C as E}from"./CardPreview-Bh7bPcSv.js";import{C as P}from"./CardOwnerInput-CMwcAKvt.js";import{C as S}from"./CardExpirationInput-BhOOS3v-.js";import{u as B,C as N}from"./useInputs-BnvUSGGu.js";import{C as O}from"./CardCompanyInput-D7aCGAz_.js";import{C as $}from"./CardCVCInput-BPFqYCmT.js";import{C as U}from"./CardPasswordInput-Cz-QW7qn.js";import{u as e}from"./useInput-DAvWmIi0.js";import{b as _,c as L,e as M,v as k,a as z,f as A,d as D,l as x}from"./Card-DDt164ub.js";import"./index-5f0m1pej.js";import"./TitleContainer-DGWmh1Ss.js";import"./InputField-DV2kGLTv.js";import"./Input-BTG5cAIW.js";import"./Message-OuKfmD5w.js";import"./useAutoFocus-D2QMchji.js";const F=(r,n)=>{const[a,i]=l.useState(r);l.useEffect(()=>{if(n.some(Boolean)){const s=r+n.filter(Boolean).length;d(s)}},[n]);const d=s=>s>a&&i(s);return{moveIndex:a}},T=u.main`
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
  background: ${({theme:r})=>r.color.primary.main};
  color: #ffffff;
  font-size: ${({theme:r})=>r.fontSize.md};
  text-align: center;
  cursor: pointer;
`,j=()=>{const[r,n]=l.useState(!1),a=e(_,""),i=e(L,""),d=e(M,""),s=e(k,""),c=e(z,""),C=e(A,""),p=B(D,["","","",""]),f=[x(p.isValidList),c.isValid,x([a.isValid,i.isValid]),d.isValid,s.isValid,C.isValid],{moveIndex:I}=F(0,f),y=o=>n(o),b=o=>t.jsxs(Y,{children:[o>=5&&t.jsx(U,{password:C}),o>=4&&t.jsx($,{cvc:s,handleIsCVCInput:y}),o>=3&&t.jsx(P,{owner:d}),o>=2&&t.jsx(S,{month:a,year:i}),o>=1&&t.jsx(O,{company:c}),t.jsx(N,{cardNumbers:p})]}),V=()=>{const o=`${w.COMPLETE}?number=${encodeURIComponent(p.values[0])}&company=${encodeURIComponent(c.value)}`;return t.jsx(R,{to:o,children:t.jsx(q,{type:"button",children:"확인"})})};return t.jsxs("div",{children:[t.jsxs(T,{children:[t.jsx(W,{children:t.jsx(E,{cardNumber:p.values,month:a.value,year:i.value,owner:d.value,company:c.value,cvc:s.value,isCVCInput:r})}),b(I)]}),f.every(Boolean)&&V()]})};j.__docgenInfo={description:"",methods:[],displayName:"CardRegistrationPage"};const mt={title:"page/CardRegistrationPage",component:j,tags:["autodocs"]},m={};var v,g,h;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:"{}",...(h=(g=m.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const ut=["Default"];export{m as Default,ut as __namedExportsOrder,mt as default};
