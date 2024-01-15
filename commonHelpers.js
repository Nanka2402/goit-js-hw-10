import"./assets/modulepreload-polyfill-ec808ebb.js";import{f as S,i as c}from"./assets/vendor-651d7991.js";const r=document.querySelector("[data-start]");let u=!1;const l=document.querySelector("#datetime-picker"),D={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const s=e[0],t=new Date;s<=t?(c.error({title:"Error",message:"Please choose a date in the future"}),r.disabled=!0):r.disabled=!1}},m=S(l,D);function o(e){return e.toString().padStart(2,"0")}function p(){const e=new Date,t=m.selectedDates[0]-e;if(t<=0){clearInterval(f),c.success({title:"Success",message:"Timer reached zero!"}),r.disabled=!1,l.disabled=!1;return}const{days:i,hours:d,minutes:n,seconds:a}=v(t);document.querySelector("[data-days]").textContent=o(i),document.querySelector("[data-hours]").textContent=o(d),document.querySelector("[data-minutes]").textContent=o(n),document.querySelector("[data-seconds]").textContent=o(a)}function v(e){const n=Math.floor(e/864e5),a=Math.floor(e%864e5/36e5),h=Math.floor(e%864e5%36e5/6e4),y=Math.floor(e%864e5%36e5%6e4/1e3);return{days:n,hours:a,minutes:h,seconds:y}}let f;r.addEventListener("click",function(){const e=m.selectedDates[0];e&&!u?(f=setInterval(p,1e3),this.disabled=!0,u=!0):e?console.log("Timer is already active."):c.error({title:"Error",message:"Please choose a valid future date before starting the timer."})});
//# sourceMappingURL=commonHelpers.js.map