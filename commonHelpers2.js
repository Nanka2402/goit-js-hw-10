import"./assets/modulepreload-polyfill-ec808ebb.js";import{i as r}from"./assets/vendor-651d7991.js";const s=document.querySelector(".form");s.addEventListener("submit",function(o){o.preventDefault();const i=s.querySelector('input[name="delay"]'),n=s.querySelectorAll('input[name="state"]'),c=Array.from(n).find(e=>e.checked),t=parseInt(i.value,10);new Promise((e,l)=>{setTimeout(()=>{c.value==="fulfilled"?e(t):l(t)},t)}).then(e=>{r.success({title:"Success",message:`✅ Fulfilled promise in ${e}ms`})}).catch(e=>{r.error({title:"Error",message:`❌ Rejected promise in ${e}ms`})})});
//# sourceMappingURL=commonHelpers2.js.map