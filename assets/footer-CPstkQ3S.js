import{c as s,p as L,b as O,d as M,o as mt,a as ft,v as vt,f as gt,h as yt,i as ht}from"./emailForm-gn-tn8m6.js";const wt="modulepreload",Lt=function(e){return"/"+e},$={},tt=function(t,r,n){let a=Promise.resolve();if(r&&r.length>0){const o=document.getElementsByTagName("link");a=Promise.all(r.map(i=>{if(i=Lt(i),i in $)return;$[i]=!0;const c=i.endsWith(".css"),l=c?'[rel="stylesheet"]':"";if(!!n)for(let p=o.length-1;p>=0;p--){const A=o[p];if(A.href===i&&(!c||A.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${l}`))return;const m=document.createElement("link");if(m.rel=c?"stylesheet":wt,c||(m.as="script",m.crossOrigin=""),m.href=i,document.head.appendChild(m),c)return new Promise((p,A)=>{m.addEventListener("load",p),m.addEventListener("error",()=>A(new Error(`Unable to preload CSS for ${i}`)))})}))}return a.then(()=>t()).catch(o=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=o,window.dispatchEvent(i),!i.defaultPrevented)throw o})},U=[{title:"Returns & FAQ",content:tt(()=>import("./returns-and-faq-fEbfhV8v.js"),__vite__mapDeps([]))},{title:"Privacy Policy",url:"https://www.shopify.com/legal/privacy",newTab:!0},{title:"Terms of Service",url:"https://www.shopify.com/legal/terms",newTab:!0},{title:"Contact Us",content:tt(()=>import("./contact-vl89kNEP.js"),__vite__mapDeps([]))}];let f,T,I,h;function At(){const e=T.firstChild;for(;e.nextSibling;)T.removeChild(e.nextSibling)}async function Et(e=!1){e&&U.unshift({title:"Home",url:"/home/index.html",noLoadAnim:!0});let t;for(let n=1;n<document.body.children.length;n++){const a=document.body.children[n].classList;if(!(a.contains("navbar")||a.contains("announcement-bar"))){t=n;break}}f=s("side-menu-page-container closed"),f.addEventListener("click",n=>{n.target===f&&F()}),T=s("side-menu-page"),f.append(T);{const n=s("close");n.addEventListener("click",o=>{F()});const a=await L(O);n.append(a),T.append(n)}document.body.insertBefore(f,document.body.children[t]),I=s("window-background"),I.addEventListener("click",n=>{n.target===I&&B()}),h=s("sidebar");{const n=s("close");n.addEventListener("click",o=>{B()});const a=await L(O);n.append(a),h.append(n)}const r=s("page-buttons");for(const n of U){const a=n.title,o=s("button"),i=s("text");i.innerHTML=a,i.addEventListener("click",async()=>{B(),await Y(a)}),o.append(i);const c=s("underline");o.append(c),r.append(o)}h.append(r),I.append(h),document.body.insertBefore(I,document.body.children[t])}async function Y(e){const t=U.find(r=>r.title===e);t.url?(t.noLoadAnim&&M("noLoadAnim","true",1),t.newTab?mt(t.url):window.location.href=t.url):(T.insertAdjacentHTML("beforeend",(await t.content).default),T.querySelectorAll("*[data-page-name]").forEach(n=>{n.addEventListener("click",async a=>{await F(),Y(n.getAttribute("data-page-name"))})}),f.classList.remove("closed"),f.classList.add("open"))}function F(){return new Promise(e=>{const t=()=>{f.removeEventListener("transitionend",t),f.classList.add("closed"),At(),e()};f.addEventListener("transitionend",t),f.classList.remove("open")})}function bt(){I.classList.add("open"),h.classList.add("open")}function B(){const e=t=>{h.removeEventListener("transitionend",e),I.classList.remove("open")};h.addEventListener("transitionend",e),h.classList.remove("open")}const D={prepend:Et,openPage:Y,open:bt,close:B},It="/assets/preview-dE3FWZQP.webp",St="/assets/preview-bXc0LUn_.webp",Ct="https://checkout.narpy.shop/api/2024-10/graphql.json";async function it(e){const t=await fetch(Ct,{method:"POST",mode:"cors",cache:"no-store",headers:{"Content-Type":"application/json","X-Shopify-Storefront-Access-Token":"7b1e9bd1c2f940a21912afdf8080440e"},body:JSON.stringify(e)});if(t.status!==200)throw console.error("Shopify error:",t.status,await t.text()),new Error(t.status.toString());const r=await t.json();if(r.errors)throw console.error("Shopify error:",t.status,r.errors),new Error(r.errors);return r}async function Pt(e){const t=[];for(const a of e)t.push({merchandiseId:"gid://shopify/ProductVariant/"+a.id,quantity:a.quantity});const r=await it({query:`mutation cartCreate($input: CartInput) {
  cartCreate(input: $input) {
    cart {
      checkoutUrl
    }
    userErrors {
      field
      message
    }
    warnings {
      code
      message
    }
  }
}`,variables:{input:{lines:t}}});if(r.data.cartCreate.userErrors.length>0){console.error("Got shopify cartCreate userErrors:",r.data.cartCreate.userErrors);return}if(r.data.cartCreate.warnings.length>0){console.error("Got shopify cartCreate warnings:",r.data.cartCreate.warnings);return}const n=r.data.cartCreate.cart.checkoutUrl;window.location.href=n}const ot=[];let st=!1;async function et(){const e=await it({query:`query getProducts($first: Int) {
  products(first: $first) {
    edges {
      node {
        totalInventory
        variants(first: $first) {
          edges {
            node {
              id
              quantityAvailable
            }
          }
        }
      }
    }
  }
}`,variables:{first:10}});for(const t of e.data.products.edges){const r=nt(t.node.variants.edges[0].node.id),n=dt(r);if(n)if(n.variantId===r)n.quantity=t.node.variants.edges[0].node.quantityAvailable;else{for(const a of n.variants){const o=t.node.variants.edges.find(i=>nt(i.node.id)===a.id);if(!o){a.quantity=0;continue}a.quantity=o.node.quantityAvailable}n.quantity=t.node.totalInventory}}st=!0;for(const t of ot)t()}function nt(e){return e.split("ProductVariant/")[1]}const ct=[{name:"Juice Hoodie",image:It,price:6500,maxQuantity:2,quantityGoal:145,variants:[{id:"49415126188327",name:"S"},{id:"49415126221095",name:"M"},{id:"49415126253863",name:"L"},{id:"49415126286631",name:"XL"},{id:"49415126319399",name:"2XL"},{id:"49415126352167",name:"3XL"}]},{variantId:"49415132610855",name:"Narpy Charm",image:St,price:1e3,maxQuantity:2,quantityGoal:100}];function dt(e){return ct.find(t=>{var r;return t.variantId===e||((r=t.variants)==null?void 0:r.find(n=>n.id===e))})}function Tt(e,t){return e===void 0?t:Math.min(e,t)}async function _t(){try{await et(),setInterval(async()=>{try{await et()}catch{console.error("Error requesting available quantity update.")}},5e3)}catch(e){console.error(e)}}function kt(e){ot.push(e),st&&e()}const g={ALL_PRODUCTS:ct,createCheckoutFromCart:Pt,getProductFromVariantId:dt,getMaxQuantity:Tt,load:_t,registerQuantityUpdateCallback:kt};function K(e){let t=e.toString();return t=t.substring(0,t.length-2)+"."+t.substring(t.length-2,t.length),t}function R(e){return g.getProductFromVariantId(e.id)}let u=[];function at(e){u.removeIf(t=>t.id===e),J(),X()}let S,d,w;async function qt(e){S=s("window-background"),S.addEventListener("click",c=>{c.target===S&&rt()}),d=s("cart-window");const t=s("title-bar"),r=s("title");r.innerHTML="Cart",t.append(r);const n=await L(O);n.addEventListener("click",c=>{rt()}),t.append(n),d.append(t);let a=s("separator");a.classList.add("first"),d.append(a),a=s("separator"),d.append(a),w=s("bottom-bar");const o=s("subtotal");w.append(o);const i=s("checkout");i.addEventListener("click",c=>{u.length!==0&&g.createCheckoutFromCart(u)}),i.innerHTML="Checkout",w.append(i),d.append(w),S.append(d),e.append(S)}async function J(){var r;for(;!d.children[d.children.length-3].classList.contains("first");)d.children[d.children.length-3].remove();if(u.length===0){j.updateCartCount(0),w.classList.remove("visible");const n=s("empty");n.innerHTML="Your cart is empty!",d.insertBefore(n,d.children[d.children.length-2]);return}let e=0,t=0;for(let n=0;n<u.length;n++){const a=u[n],o=R(a),i=(r=o.variants)==null?void 0:r.find(y=>y.id===a.id),c=i?o.name+` (${i.name})`:o.name,l=s("item");l.setAttribute("data-variant-id",a.id);const v=s("image"),m=await L(o.image);v.append(m),l.append(v);const p=s("info"),A=s("name");A.innerHTML=c,p.append(A);const G=s("price");G.innerHTML="$"+K(o.price),p.append(G),l.append(p);const k=document.createElement("input");k.addEventListener("input",y=>{const q=vt(y.currentTarget);if(q===void 0)return;if(q===0){at(a.id);return}const x=R(a),z=u.filter(E=>{var H;return(H=x.variants)==null?void 0:H.some(pt=>pt.id===E.id)});let Q=q;if(z.length>1){let E=0;for(const H of z)H.id!==a.id&&(E+=H.quantity);E+q>x.maxQuantity&&(Q=x.maxQuantity-E)}if(Q<1){y.preventDefault();return}Q!==q&&(y.currentTarget.value=Q),u.find(E=>E.id===a.id).quantity=Q,lt()}),k.min=0,k.max=g.getMaxQuantity(i?i.quantity:o.quantity,o.maxQuantity),k.value=a.quantity,l.append(k);const W=s("remove"),Z=await L(O);if(Z.addEventListener("click",y=>{at(a.id)}),W.append(Z),l.append(W),d.insertBefore(l,d.children[d.children.length-2]),n!==u.length-1){const y=s("separator");d.insertBefore(y,d.children[d.children.length-2])}e+=o.price*a.quantity,t+=a.quantity}w.firstElementChild.innerHTML=`Subtotal: $${K(e)} USD`,w.classList.add("visible"),j.updateCartCount(t)}function lt(){let e=0,t=0;for(const r of u){const n=R(r);e+=n.price*r.quantity,t+=r.quantity}w.firstElementChild.innerHTML=`Subtotal: $${K(e)} USD`,j.updateCartCount(t),X()}async function Qt(e){await qt(e);const t=ft("cart");t&&(u=JSON.parse(t),u.removeIf(r=>!R(r))),g.registerQuantityUpdateCallback(()=>{var n;const r=d.querySelectorAll(".item");for(const a of r){const o=a.getAttribute("data-variant-id"),i=g.getProductFromVariantId(o),c=(n=i.variants)==null?void 0:n.find(p=>p.id===o),l=a.querySelector("input"),v=g.getMaxQuantity(c?c.quantity:i.quantity,i.maxQuantity);l.max=v;const m=parseInt(l.value);(isNaN(m)||m>v)&&(l.value=v,u.find(p=>p.id===o).quantity=v,lt())}}),await g.load(),await J()}function N(){S.classList.add("open"),d.classList.add("open"),window.scrollTo(0,0)}function rt(){const e=t=>{d.removeEventListener("transitionend",e),S.classList.remove("open")};d.addEventListener("transitionend",e),d.classList.remove("open")}async function Ht(e,t,r){const n=g.ALL_PRODUCTS[e],a=n.variantId??n.variants[r].id,o=u.filter(c=>{var l;return(l=n.variants)==null?void 0:l.some(v=>v.id===c.id)});if(o.length>0){let c=0;for(const l of o)c+=l.quantity;c+t>n.maxQuantity&&(t=n.maxQuantity-c)}if(t<1){N();return}const i=u.find(c=>c.id===a);if(i){const c=g.getMaxQuantity(n.variantId?n.quantity:n.variants[r].quantity,n.maxQuantity);i.quantity+t>c?i.quantity=c:i.quantity+=t}else u.push({id:a,quantity:t});await J(),N(),X()}function X(){M("cart",JSON.stringify(u),5)}const ut={load:Qt,open:N,addProduct:Ht},Bt="data:image/webp;base64,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",Vt="/assets/cafe_logo_v2-DJko03vV.webp";let b,V;async function Ot(e){b=s("navbar");const t=await L(Bt);t.className="side-icon",t.addEventListener("click",a=>{D.open()}),b.append(t);const r=await L(Vt);if(e){const a=gt("/home/index.html",!0);a.addEventListener("click",o=>{M("noLoadAnim","true",1)}),a.append(r),b.append(a)}else b.append(r);const n=s("side-icon bag");n.addEventListener("click",a=>{ut.open()}),V=s(),V.innerHTML="0",n.append(V),b.append(n),document.body.insertBefore(b,document.body.children[1])}async function Rt(e=!1){await Ot(e),await D.prepend(e),await ut.load(b)}function xt(e){V.innerHTML=e}const j={load:Rt,updateCartCount:xt},Ut=`<div class="footer">\r
  <div class="plus top-left">&#43;</div>\r
  <div class="plus top-right">&#43;</div>\r
  <div class="plus bottom-left">&#43;</div>\r
  <div class="plus bottom-right">&#43;</div>\r
  <div class="art-container">\r
    <img class="art">\r
  </div>\r
  <a href="https://www.narpy.cafe/" target="_blank" class="mug">\r
    <img src="/assets/mug-transparent-s0HF1ISz.webp">\r
  </a>\r
  <div class="content">\r
    <div class="h1">SUBSCRIBE</div>\r
    <div class="h2">Be notified on future drops!</div>\r
    <div class="email-form-container">\r
      <form class="form" id="email-form">\r
        <img src="/assets/e-mail-back-g9mt2Xj5.webp">\r
        <div class="input-container">\r
          <input type="email" placeholder="e-mail" id="email" name="email" autocomplete="on" required>\r
        </div>\r
        <button class="submit" type="submit">\r
          <img src="/assets/sign-up-1xVmDPfy.webp">\r
        </button>\r
        <div class="cf-turnstile-widget"></div>\r
      </form>\r
      <div class="message-container" id="email-form-message-container">\r
        <div class="text" id="email-form-message-text"></div>\r
      </div>\r
    </div>\r
    <div class="panes">\r
      <div>COPYRIGHT 2024<br>Â©NARPY</div>\r
      <div class="social-icons">\r
        <a href="https://www.youtube.com/@narpy" target="_blank">\r
          <img src="/assets/youtube-qx-uyEvW.webp">\r
        </a>\r
        <a href="https://www.instagram.com/narpylive" target="_blank">\r
          <img src="/assets/instagram-8cP925uu.webp">\r
        </a>\r
        <a href="https://twitter.com/narpylive" target="_blank">\r
          <img src="/assets/twitter-fr8YhFel.webp">\r
        </a>\r
        <a href="https://www.twitch.tv/narpy" target="_blank">\r
          <img src="/assets/twitch-up1qSqON.webp">\r
        </a>\r
      </div>\r
      <div class="page-buttons">\r
        <div data-page-name="Privacy Policy">PRIVACY POLICY</div>\r
        <div data-page-name="Returns & FAQ">Returns & FAQ</div>\r
        <div data-page-name="Contact Us">CONTACT US</div>\r
      </div>\r
    </div>\r
    <div class="bottom-text">THIS IS A PASSION PROJECT DESIGNED AND DEVELOPED BY ANDEOS & NARPY</div>\r
  </div>\r
</div>`,Ft="/assets/0-IjS7l9_y.webp",Kt="/assets/1-zlSQkDMF.webp",Nt="/assets/2-Mm9Ki3_K.webp",jt="/assets/3-MOPwwZZS.webp",Mt="/assets/4-yJ8wUhjW.webp",Yt="/assets/5-k5wwK4RB.webp",Dt=[Ft,Kt,Nt,jt,Mt,Yt];let C,P,_=0;async function Jt(){document.body.insertAdjacentHTML("beforeend",Ut),C=document.getElementsByClassName("art")[0],P=await Promise.all(Dt.map(t=>L(t)));for(const t of P)t.classList.add("art"),t.addEventListener("click",Xt);C.parentElement.replaceChild(P[_],C),C=P[_],document.querySelectorAll(".footer .page-buttons div").forEach(t=>{t.addEventListener("click",r=>{window.scrollTo(0,0),D.openPage(t.getAttribute("data-page-name"))})}),yt.registerListener()}function Xt(e){let t;for(;t===void 0||t===_;)t=ht(P.length);_=t,C.parentElement.replaceChild(P[_],C),C=P[_]}const Wt={load:Jt};export{ut as c,Wt as f,j as n,g as s};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
