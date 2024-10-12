(()=>{"use strict";class e{constructor(){let{container:e=null,btns:t=null,next:s=null,prev:i=null,activeClass:n="",animate:l,autoplay:a}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.container=document.querySelector(e);try{this.slides=this.container.children}catch(e){}this.btns=document.querySelectorAll(t),this.prev=document.querySelector(i),this.next=document.querySelector(s),this.activeClass=n,this.animate=l,this.autoplay=a,this.slideIndex=1}}class t extends e{constructor(e){super(e)}showSlides(e){e>this.slides.length&&(this.slideIndex=1),e<1&&(this.slideIndex=this.slides.length);try{this.hanson.style.opacity="0",this.slides[this.slideIndex-1].closest(".modules")?(this.hanson.classList.add("animated"),setTimeout((()=>{this.hanson.style.opacity="1",this.hanson.classList.add("slideInUp")}),3e3)):this.hanson.classList.remove("slideInUp")}catch(e){}for(let e=0;e<this.slides.length;e++)this.slides[e].style.display="none";this.slides[this.slideIndex-1].style.display="block"}plusSlides(e){this.showSlides(this.slideIndex+=e)}bindTriggers(){this.btns.forEach((e=>{e.addEventListener("click",(()=>{this.plusSlides(1)})),e.parentNode.previousElementSibling.addEventListener("click",(e=>{e.preventDefault(),this.slideIndex=1,this.showSlides(this.slideIndex)}))})),document.querySelectorAll(".prevmodule").forEach((e=>{e.addEventListener("click",(e=>{e.stopPropagation(),e.preventDefault(),this.plusSlides(-1)}))})),document.querySelectorAll(".nextmodule").forEach((e=>{e.addEventListener("click",(e=>{e.stopPropagation(),e.preventDefault(),this.plusSlides(1)}))}))}render(){if(this.container){try{this.hanson=document.querySelector(".hanson")}catch(e){}this.showSlides(this.slideIndex),this.bindTriggers()}}}class s extends e{constructor(e,t,s,i,n,l){super(e,t,s,i,n,l)}decoriseSlides(){for(let e=0;e<this.slides.length;e++)this.slides[e].classList.remove(this.activeClass),this.animate&&(this.slides[e].querySelector(".card__title").style.opacity="0.4",this.slides[e].querySelector(".card__controls-arrow").style.opacity="0");this.slides[0].closest("button")||this.slides[0].classList.add(this.activeClass),this.animate&&(this.slides[0].querySelector(".card__title").style.opacity="1",this.slides[0].querySelector(".card__controls-arrow").style.opacity="1")}nextSlide(){"BUTTON"==this.slides[1].tagName&&"BUTTON"==this.slides[2].tagName?(this.container.appendChild(this.slides[0]),this.container.appendChild(this.slides[1]),this.container.appendChild(this.slides[2]),this.decoriseSlides()):"BUTTON"==this.slides[1].tagName?(this.container.appendChild(this.slides[0]),this.container.appendChild(this.slides[1]),this.decoriseSlides()):(this.container.appendChild(this.slides[0]),this.decoriseSlides())}bindTriggers(){this.next.addEventListener("click",(()=>this.nextSlide())),this.prev.addEventListener("click",(()=>{for(let e=this.slides.length-1;e>0;e--)if("BUTTON"!==this.slides[e].tagName){let t=this.slides[e];this.container.insertBefore(t,this.slides[0]),this.decoriseSlides();break}}))}init(){try{this.container.style.cssText="\n                display: flex;\n                flex-wrap: wrap;\n                overflow: hidden;\n                align-items: flex-start;\n            ",this.bindTriggers(),this.decoriseSlides(),this.autoplay&&setInterval((()=>this.nextSlide()),5e3)}catch(e){}}}class i{constructor(e,t){this.btns=document.querySelectorAll(e),this.overlay=document.querySelector(t),this.close=this.overlay.querySelector(".close"),this.onPlayerStateChange=this.onPlayerStateChange.bind(this)}bindTriggers(){this.btns.forEach(((e,t)=>{try{const s=e.closest(".module__video-item").nextElementSibling;t%2==0&&s.setAttribute("data-disabled","true")}catch(e){}e.addEventListener("click",(()=>{e.closest(".module__video-item")&&"true"===e.closest(".module__video-item").getAttribute("data-disabled")||(this.activeBtn=e,document.querySelector("iframe#frame")?(this.overlay.style.display="flex",this.path!==e.getAttribute("data-url")&&(this.path=e.getAttribute("data-url"),this.player.loadVideoById({videoId:this.path}))):(this.path=e.getAttribute("data-url"),this.createPlayer(this.path)))}))}))}bindCloseBtn(){this.close.addEventListener("click",(()=>{this.overlay.style.display="none",this.player.stopVideo()})),this.overlay.addEventListener("click",(e=>{e.target.classList.contains("overlay")&&(this.overlay.style.display="none",this.player.stopVideo())}))}createPlayer(e){this.player=new YT.Player("frame",{height:"100%",width:"100%",videoId:`${e}`,events:{onStateChange:this.onPlayerStateChange}}),this.overlay.style.display="flex"}onPlayerStateChange(e){try{const t=this.activeBtn.closest(".module__video-item").nextElementSibling,s=this.activeBtn.querySelector("svg").cloneNode(!0);0===e.data&&t.querySelector(".play__circle").classList.contains("closed")&&(t.querySelector(".play__circle").classList.remove("closed"),t.querySelector("svg").remove(),t.querySelector(".play__circle").appendChild(s),t.querySelector(".play__text").texContent="play video",t.querySelector(".play__text").classList.remove("attention"),t.style.opacity=1,t.style.filter="none",t.setAttribute("data-disabled","false"))}catch(e){}}init(){if(this.btns.length>0){const e=document.createElement("script");e.src="https://www.youtube.com/iframe_api";const t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t),this.bindTriggers(),this.bindCloseBtn()}}}class n{constructor(e,t){try{this.officer=document.querySelector(e),this.officerItems=this.officer.querySelectorAll(t),this.officerCounter=0}catch(e){}}bindTriggers(){this.officer.querySelector(".plus").addEventListener("click",(()=>{this.officerCounter!==this.officerItems.length-2?(this.officerItems[this.officerCounter].style.display="flex",this.officerItems[this.officerCounter].classList.add("fadeIn"),this.officerCounter++):(this.officerItems[this.officerCounter].style.display="flex",this.officerItems[this.officerCounter].classList.add("fadeIn"),this.officerItems[this.officerItems.length-1].remove())}))}hideItems(){this.officerItems.forEach(((e,t,s)=>{t!==s.length-1&&(e.style.display="none",e.classList.add("animated"))}))}init(){try{this.hideItems(),this.bindTriggers()}catch(e){}}}class l{constructor(e){this.forms=document.querySelectorAll(e),this.inputs=document.querySelectorAll("input"),this.message={loading:"Заватаження...",success:"Дякуємо! Скоро ми з вами звяжемось",failure:"Щось пішло не так..."},this.path="assets/question.php"}clearInputs(){this.inputs.forEach((e=>{e.value=""}))}checkMaiInputs(){document.querySelectorAll('[type="email"]').forEach((e=>{e.addEventListener("keypress",(function(e){e.key.match(/[^a-z 0-9 @ \.]/gi)&&e.preventDefault()}))}))}initMask(){function e(e){let t="+1 (___) ___-____",s=0,i=t.replace(/\D/g,""),n=this.value.replace(/\D/g,"");i.length>=n.length&&(n=i),this.value=t.replace(/./g,(function(e){return/[_\d]/.test(e)&&s<n.length?n.charAt(s++):s>=n.length?"":e})),"blur"===e.type?2==this.value.length&&(this.value=""):((e,t)=>{if(t.focus(),t.setSelectionRange)t.setSelectionRange(e,e);else if(t.createTextRange){let s=t.createTextRange();s.collapse(!0),s.moveEnd("character",e),s.moveStart("character",e),s.select()}})(this.value.length,this)}document.querySelectorAll('[name="phone"]').forEach((t=>{t.addEventListener("input",e),t.addEventListener("focus",e),t.addEventListener("blur",e)}))}async postData(e,t){let s=await fetch(e,{method:"POST",body:t});return await s.text()}init(){this.checkMaiInputs(),this.initMask(),this.forms.forEach((e=>{e.addEventListener("submit",(t=>{t.preventDefault();let s=document.createElement("div");s.style.cssText="\n                    margin-top: 15px;\n                    font-size: 18px;\n                    color: grey;\n                ",e.parentNode.appendChild(s),s.textContent=this.message.loading;const i=new FormData(e);this.postData(this.path,i).then((e=>{console.log(e),s.textContent=this.message.success})).catch((()=>{s.textContent=this.message.failure})).finally((()=>{this.clearInputs(),setTimeout((()=>{s.remove()}),6e3)}))}))}))}}class a{constructor(e,t){this.trigger=document.querySelector(e),this.message=document.querySelector(t)}bindTriggers(){this.trigger.addEventListener("click",(()=>{this.message.classList.contains("open")?(this.message.style.cssText="\n                    transition: all 0.5 ease-out;\n                    visibility: hidden;\n                    display: block;\n                    transform: translateY(-100%);\n                    height: 0;\n                    opacity: 0;\n                ",this.message.classList.remove("open")):(this.message.style.cssText="\n                    transition: transform 0.5s, opacity 0.5s;\n                    visibility: visible;\n                    display: block;\n                    height: auto;\n                    opacity: 1;\n                    transform: translateY(0);\n                ",this.message.classList.add("open"))}))}init(){try{this.message.style.cssText="\n                transition: transform 0.5s, opacity 0.5s;\n                visibility: hidden;\n                display: block;\n                height: 0;\n                opacity: 0;\n                transform: translateY(-100%);\n            ",this.bindTriggers()}catch(e){}}}class r{constructor(e){this.btns=document.querySelectorAll(e),this.path="assets/img/mainbg.jpg"}downloadItem(e){const t=document.createElement("a");t.setAttribute("href",e),t.setAttribute("download","file"),t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t)}init(){this.btns.forEach((e=>{e.addEventListener("click",(e=>{e.stopPropagation(),this.downloadItem(this.path)}))}))}}window.addEventListener("DOMContentLoaded",(()=>{new t({btns:".next",container:".page"}).render(),new t({container:".moduleapp",btns:".next"}).render(),new s({container:".showup__content-slider",prev:".showup__prev",next:".showup__next",activeClass:"card-active",animate:!0}).init(),new s({container:".modules__content-slider",prev:".modules__info-btns .slick-prev",next:".modules__info-btns .slick-next",activeClass:"card-active",animate:!0,autoplay:!0}).init(),new s({container:".feed__slider",prev:".feed__slider .slick-prev",next:".feed__slider .slick-next",activeClass:"feed__item-active"}).init(),new i(".showup .play",".overlay").init(),new i(".module__video-item .play",".overlay").init(),new n(".officerold",".officer__card-item").init(),new n(".officernew",".officer__card-item").init(),new l(".form").init(),new a(".module__info-show",".msg").init(),new r(".download").init()}))})();