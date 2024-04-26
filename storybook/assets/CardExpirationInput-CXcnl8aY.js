import{j as a}from"./styled-components.browser.esm-CQOLgtoS.js";import{T}from"./TitleContainer-BSfpPcoY.js";import{I as g}from"./InputField-D3bmtCgA.js";import{I as u}from"./Input-CThZnfnj.js";import{u as N}from"./useAutoFocus-CuA82mPR.js";import{g as r,i as l}from"./Card-DDt164ub.js";import{E as p}from"./Message-OuKfmD5w.js";function f({month:i,year:s}){const{setRef:o,moveToNextInput:d}=N(r.INPUT_FIELD_COUNT,r.MAX_LENGTH),t=[i.isValid,s.isValid],n=[i.isClicked,s.isClicked],I=e=>{if(!l(e.target.value)){e.target.value="";return}i.handleValue(e.target.value),d(e.target.value,0)},m=e=>{if(!l(e.target.value)){e.target.value="";return}s.handleValue(e.target.value)},c=n.some(Boolean)&&!t.every(Boolean)&&JSON.stringify(n)!==JSON.stringify(t)?t[0]?p.INVALID_EXPIRATION_YEAR:p.INVALID_EXPIRATION_MONTH:"";return a.jsxs("div",{children:[a.jsx(T,{title:"카드 유효기간을 입력해 주세요",subTitle:"월/년도(MM/YY)를 순서대로 입력해 주세요."}),a.jsxs(g,{label:"유효기간",inputCount:r.INPUT_FIELD_COUNT,errorMessage:c,children:[a.jsx(u,{type:"text",ref:o(0),placeholder:"MM",value:i.value,maxLength:r.MAX_LENGTH,onChange:I,isValid:n[0]?t[0]:!0,autoFocus:!0}),a.jsx(u,{type:"text",ref:o(1),placeholder:"YY",value:s.value,maxLength:r.MAX_LENGTH,onChange:m,isValid:n[1]?t[1]:!0})]})]})}f.__docgenInfo={description:"",methods:[],displayName:"CardExpirationInput",props:{month:{required:!0,tsType:{name:"InputType"},description:""},year:{required:!0,tsType:{name:"InputType"},description:""}}};export{f as C};
