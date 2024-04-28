import{C as d}from"./CardPreview-Bh7bPcSv.js";import"./styled-components.browser.esm-CQOLgtoS.js";import"./index-CsdIBAqE.js";import"./Card-DDt164ub.js";const S={title:"component/CardPreview",component:d,parameters:{controls:{exclude:"isCVCInput"}},argTypes:{cardNumber:{options:{"No input":["","","",""],"First input":["2222","","",""],"Second input":["2222","3333","",""],"Third input":["2222","3333","4444",""],"Fourth input":["2222","3333","4444","5555"],"Visa Card":["4444","3333","4444","5555"],"Master Card":["5555","3333","4444","5555"]},control:{type:"select"}},month:{options:{Default:"12","No input":""},control:{type:"select"}},year:{options:{Default:"24","No input":""},control:{type:"select"}},owner:{options:{Default:"PARSELY KIM","No input":""},control:{type:"select"}},cvc:{options:{Default:"123","No input":""},control:{type:"select"}},company:{options:["BC카드","신한카드","카카오뱅크","현대카드","우리카드","롯데카드","하나카드","국민카드"],control:{type:"select"}}}},r={args:{cardNumber:["2222","3333","4444","5555"],month:"12",year:"24",owner:"PARSELY KIM",cvc:"123"}},e={args:{cardNumber:["4444","3333","4444","5555"],month:"12",year:"24",owner:"PARSELY KIM"}},o={args:{cardNumber:["5555","3333","4444","5555"],month:"12",year:"24",owner:"PARSELY KIM"}};var t,a,n;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    cardNumber: ['2222', '3333', '4444', '5555'],
    month: '12',
    year: '24',
    owner: 'PARSELY KIM',
    cvc: '123'
  }
}`,...(n=(a=r.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var s,c,p;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    cardNumber: ['4444', '3333', '4444', '5555'],
    month: '12',
    year: '24',
    owner: 'PARSELY KIM'
  }
}`,...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,u,i;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    cardNumber: ['5555', '3333', '4444', '5555'],
    month: '12',
    year: '24',
    owner: 'PARSELY KIM'
  }
}`,...(i=(u=o.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};const g=["Default","VisaCard","MasterCard"];export{r as Default,o as MasterCard,e as VisaCard,g as __namedExportsOrder,S as default};
