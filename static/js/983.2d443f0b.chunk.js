(self.webpackChunkreact_homework_templateee=self.webpackChunkreact_homework_templateee||[]).push([[983],{43:(t,o,i)=>{"use strict";i.d(o,{Hg:()=>a,On:()=>c,Ul:()=>s,nl:()=>r,tx:()=>l});var e=i(294);e.Z.defaults.baseURL="https://api.themoviedb.org/3";const n={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NGJmYmIyNTA2NmM5ZTJhNjhkNzA0NmFkNTgxYjBlYyIsInN1YiI6IjY1NmI0YTY5MDg1OWI0MDEzOTUxMmZhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JHtQht9lLzVGn8qQlSLZwC1_-cT8AoKj26qDOrlg0qc"}},a=async()=>{const{data:t}=await e.Z.get("trending/movie/day?language=en-US",n);return t.results},s=async t=>{const{data:o}=await e.Z.get("/movie/".concat(t),n);return o},r=async t=>{const{data:o}=await e.Z.get("movie/".concat(t,"/credits"),n);return o.cast},l=async t=>{const{data:o}=await e.Z.get("movie/".concat(t,"/reviews"),n);return o.results},c=async t=>{const{data:o}=await e.Z.get("search/movie?query=".concat(t,"&include_adult=false&language=en-US&page=1"),n);return o}},146:(t,o,i)=>{"use strict";i.d(o,{Z:()=>k});i(791);var e,n,a,s,r,l,c,f,m=i(689),p=i(87),d=i(168),x=i(686);const y=x.Z.ul(e||(e=(0,d.Z)(["\nlist-style: none;\ndisplay: flex;\nflex-wrap: wrap;\nflex-direction: row;\njustify-content: space-between;\ncolumn-gap: 15px;\nrow-gap: 15px;\nmargin-right: 73px;\n"]))),u=((0,x.Z)(p.rU)(n||(n=(0,d.Z)(["\n    text-decoration: none;\n"]))),x.Z.li(a||(a=(0,d.Z)(["\n    display: flex;\n    width: 300px !important;\n    height: 550px;\n"]))),x.Z.img(s||(s=(0,d.Z)(["\n    border-radius: 9%;\n"])))),g=x.Z.div(r||(r=(0,d.Z)(["\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n"]))),b=x.Z.h2(l||(l=(0,d.Z)(["\n    display: flex;\n    flex-wrap: wrap;\n    max-width: 289px;\n    color: antiquewhite;\n"]))),h=x.Z.div(c||(c=(0,d.Z)(["\n    display: flex;\n    flex-direction: row;\n    gap: 20px;\n"]))),w=x.Z.p(f||(f=(0,d.Z)(["\n    color: antiquewhite;\n"])));var v=i(184);const k=t=>{let{movies:o}=t;const i=(0,m.TH)();return(0,v.jsx)("section",{children:(0,v.jsx)(y,{children:o.map((t=>{let{id:o,original_title:e,release_date:n,poster_path:a,vote_average:s}=t;return(0,v.jsx)("li",{children:(0,v.jsxs)(p.rU,{to:"/movies/".concat(o),state:{from:i},children:[(0,v.jsx)(u,{src:"https://image.tmdb.org/t/p/w300/".concat(a),alt:e}),(0,v.jsx)("div",{children:(0,v.jsxs)(g,{children:[(0,v.jsx)(b,{children:e}),(0,v.jsxs)(h,{children:[(0,v.jsx)(w,{children:n.slice(0,4)}),(0,v.jsxs)(w,{children:[0===s?"-":s.toFixed(1),"\ud83c\udfc6"]})]})]})})]})},o)}))})})}},983:(t,o,i)=>{"use strict";i.r(o),i.d(o,{default:()=>c});var e=i(791),n=i(43),a=i(146),s=i(689),r=i(264),l=i(184);const c=()=>{const[t,o]=(0,e.useState)([]);return(0,e.useEffect)((()=>{(0,n.Hg)().then(o).catch((()=>r.Notify.failure("Something went wrong")))}),[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("section",{children:(0,l.jsx)("div",{children:(0,l.jsx)(a.Z,{movies:t})})}),(0,l.jsx)(s.j3,{})]})}},264:function(t,o,i){var e,n;n="undefined"!==typeof i.g?i.g:"undefined"!==typeof window?window:this,e=function(){return function(t){"use strict";if("undefined"===typeof t&&"undefined"===typeof t.document)return!1;var o,i="Notiflix",e="\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation",n='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',a={Success:"Success",Failure:"Failure",Warning:"Warning",Info:"Info"},s={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},r=function(t){return console.error("%c "+i+" Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+e)},l=function(o){return o||(o="head"),null!==t.document[o]||(r('\nNotiflix needs to be appended to the "<'+o+'>" element, but you called it before the "<'+o+'>" element has been created.'),!1)},c=function(o,i){if(!l("head"))return!1;if(null!==o()&&!t.document.getElementById(i)){var e=t.document.createElement("style");e.id=i,e.innerHTML=o(),t.document.head.appendChild(e)}},f=function(){var t={},o=!1,i=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(o=arguments[0],i++);for(var e=function(i){for(var e in i)Object.prototype.hasOwnProperty.call(i,e)&&(o&&"[object Object]"===Object.prototype.toString.call(i[e])?t[e]=f(t[e],i[e]):t[e]=i[e])};i<arguments.length;i++)e(arguments[i]);return t},m=function(o){var i=t.document.createElement("div");return i.innerHTML=o,i.textContent||i.innerText||""},p=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},d=0,x=function(i,e,r,c){if(!l("body"))return!1;o||y.Notify.init({});var p=f(!0,o,{});if("object"===typeof r&&!Array.isArray(r)||"object"===typeof c&&!Array.isArray(c)){var x={};"object"===typeof r?x=r:"object"===typeof c&&(x=c),o=f(!0,o,x)}var u=o[i.toLocaleLowerCase("en")];d++,"string"!==typeof e&&(e="Notiflix "+i),o.plainText&&(e=m(e)),!o.plainText&&e.length>o.messageMaxLength&&(o=f(!0,o,{closeButton:!0,messageMaxLength:150}),e='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),e.length>o.messageMaxLength&&(e=e.substring(0,o.messageMaxLength)+"..."),"shadow"===o.fontAwesomeIconStyle&&(u.fontAwesomeIconColor=u.background),o.cssAnimation||(o.cssAnimationDuration=0);var g=t.document.getElementById(s.wrapID)||t.document.createElement("div");if(g.id=s.wrapID,g.style.width=o.width,g.style.zIndex=o.zindex,g.style.opacity=o.opacity,"center-center"===o.position?(g.style.left=o.distance,g.style.top=o.distance,g.style.right=o.distance,g.style.bottom=o.distance,g.style.margin="auto",g.classList.add("nx-flex-center-center"),g.style.maxHeight="calc((100vh - "+o.distance+") - "+o.distance+")",g.style.display="flex",g.style.flexWrap="wrap",g.style.flexDirection="column",g.style.justifyContent="center",g.style.alignItems="center",g.style.pointerEvents="none"):"center-top"===o.position?(g.style.left=o.distance,g.style.right=o.distance,g.style.top=o.distance,g.style.bottom="auto",g.style.margin="auto"):"center-bottom"===o.position?(g.style.left=o.distance,g.style.right=o.distance,g.style.bottom=o.distance,g.style.top="auto",g.style.margin="auto"):"right-bottom"===o.position?(g.style.right=o.distance,g.style.bottom=o.distance,g.style.top="auto",g.style.left="auto"):"left-top"===o.position?(g.style.left=o.distance,g.style.top=o.distance,g.style.right="auto",g.style.bottom="auto"):"left-bottom"===o.position?(g.style.left=o.distance,g.style.bottom=o.distance,g.style.top="auto",g.style.right="auto"):(g.style.right=o.distance,g.style.top=o.distance,g.style.left="auto",g.style.bottom="auto"),o.backOverlay){var b=t.document.getElementById(s.overlayID)||t.document.createElement("div");b.id=s.overlayID,b.style.width="100%",b.style.height="100%",b.style.position="fixed",b.style.zIndex=o.zindex-1,b.style.left=0,b.style.top=0,b.style.right=0,b.style.bottom=0,b.style.background=u.backOverlayColor||o.backOverlayColor,b.className=o.cssAnimation?"nx-with-animation":"",b.style.animationDuration=o.cssAnimation?o.cssAnimationDuration+"ms":"",t.document.getElementById(s.overlayID)||t.document.body.appendChild(b)}t.document.getElementById(s.wrapID)||t.document.body.appendChild(g);var h=t.document.createElement("div");h.id=o.ID+"-"+d,h.className=o.className+" "+u.childClassName+" "+(o.cssAnimation?"nx-with-animation":"")+" "+(o.useIcon?"nx-with-icon":"")+" nx-"+o.cssAnimationStyle+" "+(o.closeButton&&"function"!==typeof r?"nx-with-close-button":"")+" "+("function"===typeof r?"nx-with-callback":"")+" "+(o.clickToClose?"nx-notify-click-to-close":""),h.style.fontSize=o.fontSize,h.style.color=u.textColor,h.style.background=u.background,h.style.borderRadius=o.borderRadius,h.style.pointerEvents="all",o.rtl&&(h.setAttribute("dir","rtl"),h.classList.add("nx-rtl-on")),h.style.fontFamily='"'+o.fontFamily+'", '+n,o.cssAnimation&&(h.style.animationDuration=o.cssAnimationDuration+"ms");var w="";if(o.closeButton&&"function"!==typeof r&&(w='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+u.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),o.useIcon)if(o.useFontAwesome)h.innerHTML='<i style="color:'+u.fontAwesomeIconColor+"; font-size:"+o.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+u.fontAwesomeClassName+" "+("shadow"===o.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+e+"</span>"+(o.closeButton?w:"");else{var v="";i===a.Success?v='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+u.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':i===a.Failure?v='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+u.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':i===a.Warning?v='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+u.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':i===a.Info&&(v='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+u.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),h.innerHTML=v+'<span class="nx-message nx-with-icon">'+e+"</span>"+(o.closeButton?w:"")}else h.innerHTML='<span class="nx-message">'+e+"</span>"+(o.closeButton?w:"");if("left-bottom"===o.position||"right-bottom"===o.position){var k=t.document.getElementById(s.wrapID);k.insertBefore(h,k.firstChild)}else t.document.getElementById(s.wrapID).appendChild(h);var N=t.document.getElementById(h.id);if(N){var I,C,z=function(){N.classList.add("nx-remove");var o=t.document.getElementById(s.overlayID);o&&g.childElementCount<=0&&o.classList.add("nx-remove"),clearTimeout(I)},W=function(){if(N&&null!==N.parentNode&&N.parentNode.removeChild(N),g.childElementCount<=0&&null!==g.parentNode){g.parentNode.removeChild(g);var o=t.document.getElementById(s.overlayID);o&&null!==o.parentNode&&o.parentNode.removeChild(o)}clearTimeout(C)};if(o.closeButton&&"function"!==typeof r&&t.document.getElementById(h.id).querySelector("span.nx-close-button").addEventListener("click",(function(){z();var t=setTimeout((function(){W(),clearTimeout(t)}),o.cssAnimationDuration)})),("function"===typeof r||o.clickToClose)&&N.addEventListener("click",(function(){"function"===typeof r&&r(),z();var t=setTimeout((function(){W(),clearTimeout(t)}),o.cssAnimationDuration)})),!o.closeButton&&"function"!==typeof r){var A=function(){I=setTimeout((function(){z()}),o.timeout),C=setTimeout((function(){W()}),o.timeout+o.cssAnimationDuration)};A(),o.pauseOnHover&&(N.addEventListener("mouseenter",(function(){N.classList.add("nx-paused"),clearTimeout(I),clearTimeout(C)})),N.addEventListener("mouseleave",(function(){N.classList.remove("nx-paused"),A()})))}}if(o.showOnlyTheLastOne&&d>0)for(var j=t.document.querySelectorAll("[id^="+o.ID+"-]:not([id="+o.ID+"-"+d+"])"),T=0;T<j.length;T++){var B=j[T];null!==B.parentNode&&B.parentNode.removeChild(B)}o=f(!0,o,p)},y={Notify:{init:function(t){o=f(!0,s,t),c(p,"NotiflixNotifyInternalCSS")},merge:function(t){if(!o)return r("You have to initialize the Notify module before call Merge function."),!1;o=f(!0,o,t)},success:function(t,o,i){x(a.Success,t,o,i)},failure:function(t,o,i){x(a.Failure,t,o,i)},warning:function(t,o,i){x(a.Warning,t,o,i)},info:function(t,o,i){x(a.Info,t,o,i)}}};return"object"===typeof t.Notiflix?f(!0,t.Notiflix,{Notify:y.Notify}):{Notify:y.Notify}}(n)}.apply(o,[]),void 0===e||(t.exports=e)}}]);
//# sourceMappingURL=983.2d443f0b.chunk.js.map