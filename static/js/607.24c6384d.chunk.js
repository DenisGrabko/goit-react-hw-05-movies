"use strict";(self.webpackChunkreact_homework_templateee=self.webpackChunkreact_homework_templateee||[]).push([[607],{43:(n,e,t)=>{t.d(e,{Hg:()=>r,On:()=>l,Ul:()=>o,nl:()=>s,tx:()=>c});var a=t(294);a.Z.defaults.baseURL="https://api.themoviedb.org/3";const i={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NGJmYmIyNTA2NmM5ZTJhNjhkNzA0NmFkNTgxYjBlYyIsInN1YiI6IjY1NmI0YTY5MDg1OWI0MDEzOTUxMmZhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JHtQht9lLzVGn8qQlSLZwC1_-cT8AoKj26qDOrlg0qc"}},r=async()=>{const{data:n}=await a.Z.get("trending/movie/day?language=en-US",i);return n.results},o=async n=>{const{data:e}=await a.Z.get("/movie/".concat(n),i);return e},s=async n=>{const{data:e}=await a.Z.get("movie/".concat(n,"/credits"),i);return e.cast},c=async n=>{const{data:e}=await a.Z.get("movie/".concat(n,"/reviews"),i);return e.results},l=async n=>{const{data:e}=await a.Z.get("search/movie?query=".concat(n,"&include_adult=false&language=en-US&page=1"),i);return e}},146:(n,e,t)=>{t.d(e,{Z:()=>v});t(791);var a,i,r,o,s,c,l,d,p=t(689),h=t(87),x=t(168),u=t(686);const g=u.Z.ul(a||(a=(0,x.Z)(["\nlist-style: none;\ndisplay: flex;\nflex-wrap: wrap;\nflex-direction: row;\njustify-content: space-between;\npadding: 0 40px 0 40px;\ncolumn-gap: 15px;\nrow-gap: 15px;\nmargin-right: 73px;\nmax-width: 1400px;\nmargin-right: auto;\nmargin-left: auto;\n"]))),m=((0,u.Z)(h.rU)(i||(i=(0,x.Z)(["\n    text-decoration: none;\n"]))),u.Z.li(r||(r=(0,x.Z)(["\n    display: flex;\n    width: 300px !important;\n    height: 550px;\n"]))),u.Z.img(o||(o=(0,x.Z)(["\n    border-radius: 9%;\n    width: 300px;\n    height: 450px;\n"])))),Z=u.Z.div(s||(s=(0,x.Z)(["\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n"]))),w=u.Z.h2(c||(c=(0,x.Z)(["\n    display: flex;\n    flex-wrap: wrap;\n    max-width: 289px;\n    color: antiquewhite;\n"]))),f=u.Z.div(l||(l=(0,x.Z)(["\n    display: flex;\n    flex-direction: row;\n    gap: 20px;\n"]))),j=u.Z.p(d||(d=(0,x.Z)(["\n    color: antiquewhite;\n"])));var y=t(184);const v=n=>{let{movies:e}=n;const t=(0,p.TH)();return(0,y.jsx)("section",{children:(0,y.jsx)(g,{children:e.map((n=>{let{id:e,original_title:a,release_date:i,poster_path:r,vote_average:o}=n;return(0,y.jsx)("li",{children:(0,y.jsxs)(h.rU,{to:"/movies/".concat(e),state:{from:t},style:{textDecoration:"none"},children:[(0,y.jsx)(m,{src:r?"https://image.tmdb.org/t/p/w300/".concat(r):"https://thefutureofthings.com/wp-content/uploads/2021/01/cinema-4153289_1280-1024x660.jpg",alt:a}),(0,y.jsx)("div",{children:(0,y.jsxs)(Z,{children:[(0,y.jsx)(w,{children:a}),(0,y.jsxs)(f,{children:[(0,y.jsx)(j,{children:i.slice(0,4)}),(0,y.jsxs)(j,{children:[0===o?"-":o.toFixed(1),"\ud83c\udfc6"]})]})]})})]})},e)}))})})}},607:(n,e,t)=>{t.r(e),t.d(e,{default:()=>j});var a=t(791),i=t(87);const r="SearchForm_Container__XKxue",o="SearchForm_SearchForm-button__IrjWW";var s,c,l=t(168),d=t(686);const p=d.Z.form(s||(s=(0,l.Z)(["\nposition: relative;\nwidth: 25%;\npadding-left: 15px;\n\n input {\n  width: 100%;\n  height: 42px;\n  padding: 0 0 0 10px;\n  border: 2px solid #7BA7AB;\n  border-radius: 5px;\n  outline: none;\n  background: #F9F0DA;\n  color: #9E9C9C; \n}\n"]))),h=d.Z.button(c||(c=(0,l.Z)(["\n    position: absolute;\n    top: 0;\n    right: -14px;\n    width: 45px;\n    height: 100%;\n    rotate: 270deg;\n    border: none;\n    border-radius: 0 5px 5px 5px;\n    opacity: 0.6;\n    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    cursor: pointer;  \n\n"])));var x=t(184);const u=n=>{let{handleSubmit:e}=n;const[t,i]=(0,a.useState)(""),s=n=>{n.preventDefault(),t&&e(t)};return(0,x.jsx)("div",{className:r,children:(0,x.jsxs)(p,{onSubmit:s,children:[(0,x.jsx)("input",{type:"text",placeholder:"Search",value:t,onChange:n=>{i(n.target.value)}}),(0,x.jsx)(h,{type:"submit",className:o,onClick:s})]})})};var g,m=t(146),Z=t(43),w=t(919);const f=d.Z.h2(g||(g=(0,l.Z)(["\n  max-width: 1400px;\n  padding: 0 0 0 15px;\n  margin-right: auto;\n  margin-left: auto;\n  color: #8e8e8b;\n"]))),j=()=>{const[n,e]=(0,a.useState)([]),[t,r]=(0,i.lr)();(0,a.useEffect)((()=>{const n=t.get("query");n&&(0,Z.On)(n).then((n=>{let{results:t}=n;e(t),console.log(t)})).catch((()=>{w.Notify.failure("Something went wrong")}))}),[t]);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(f,{children:"What do you want to find?"}),(0,x.jsx)(u,{handleSubmit:n=>{r({query:n})}}),(0,x.jsx)(m.Z,{movies:n})]})}}}]);
//# sourceMappingURL=607.24c6384d.chunk.js.map