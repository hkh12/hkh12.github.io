!function(){const e="+!!{}",t="+[]",n='((((typeof ("")[+[]]))[+!!{}+!!{}+!!{}+!!{}+!!{}+!!{}])+((+{}+"")[+!!{}])+(((typeof +!!{}))[+!!{}+!!{}])+(((typeof ("")[+[]]))[+!!{}+!!{}+!!{}]))',r='""',o=e=>`(${e})`,a=n=>0===n?t:e.repeat(n),u=(e,t)=>`(${e})[${a(t-1)}]`,c=e=>o(`''+(${a(e)})`),p=e=>o(`typeof ${e}`),s=e=>o(`${e.name}[${n}]`),y=p(r),l=p(t),f=p(u(r,1)),i=p("{}"),h={a:u('+{}+""',2),b:u(l,4),c:u(i,5),d:u(f,9),e:u(f,4),f:u(f,5),g:u(y,6),h:u(s(hasOwnProperty),1),i:u(f,6),j:u(i,3),k:u(s(WeakMap),4),l:u(s(valueOf),3),m:u(l,3),n:u(f,7),o:u(i,1),p:u(s(hasOwnProperty),10),q:u(s(queueMicrotask),1),r:u(l,6),s:u(y,1),t:u(i,6),u:u(f,1),v:u(s(valueOf),1),w:u(s(hasOwnProperty),5),x:u(s(Proxy),4),y:u('""+!!{}/+[]',8),z:u(o(`''.fontsize[${n}]`),7),0:c(0),1:c(1),2:c(2),3:c(3),4:c(4),5:c(5),6:c(6),7:c(7),8:c(8),9:c(9)," ":'" "'};const $=document.querySelector("#unreadable-playground"),d=$.querySelector(".input"),w=$.querySelector("output");function g(){try{w.textContent=function(e){let t="";for(let n=0;n<e.length;n++){const r=e[n];if(!(r in h))throw new Error(`unknown character "${r}"; unreadable currently supports a-z, 0-9 and spaces`);t+=h[r],n<e.length-1&&(t+="+")}return o(t)}(d.textContent)}catch(e){w.textContent=e.message}}g(),d.addEventListener("input",g)}();
//# sourceMappingURL=index.f4a2b02d.js.map
