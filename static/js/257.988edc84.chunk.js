"use strict";(self.webpackChunkreact_homework_templateee=self.webpackChunkreact_homework_templateee||[]).push([[257],{43:(n,e,t)=>{t.d(e,{Hg:()=>s,On:()=>l,Ul:()=>o,nl:()=>a,tx:()=>c});var i=t(294);i.Z.defaults.baseURL="https://api.themoviedb.org/3";const r={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NGJmYmIyNTA2NmM5ZTJhNjhkNzA0NmFkNTgxYjBlYyIsInN1YiI6IjY1NmI0YTY5MDg1OWI0MDEzOTUxMmZhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JHtQht9lLzVGn8qQlSLZwC1_-cT8AoKj26qDOrlg0qc"}},s=async()=>{const{data:n}=await i.Z.get("trending/movie/day?language=en-US",r);return n.results},o=async n=>{const{data:e}=await i.Z.get("/movie/".concat(n),r);return e},a=async n=>{const{data:e}=await i.Z.get("movie/".concat(n,"/credits"),r);return e.cast},c=async n=>{const{data:e}=await i.Z.get("movie/".concat(n,"/reviews"),r);return e.results},l=async n=>{const{data:e}=await i.Z.get("search/movie?query=".concat(n,"&include_adult=false&language=en-US&page=1"),r);return e}},257:(n,e,t)=>{t.r(e),t.d(e,{default:()=>Y});var i,r,s,o,a,c,l,d,h,p,x,g,m,u,y=t(791),Z=t(689),j=t(43),v=t(919),w=t(168),f=t(686),b=t(87);const I=f.Z.li(i||(i=(0,w.Z)(["\n  list-style-type: none;\n"]))),_=f.Z.div(r||(r=(0,w.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 600px;\n  list-style-type: none;\n  &::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-size: cover;    \n    z-index: -1;\n  }\n"]))),z=f.Z.img(s||(s=(0,w.Z)(["\n    width: 100%;\n    height: 100%; \n    filter: blur(7px);\n"]))),N=f.Z.section(o||(o=(0,w.Z)(["\n    display: flex;\n    max-width: 1400px;\n    margin-top: 5px;\n    margin-right: auto;\n    margin-left: auto;\n    gap: 10px;\n"]))),O=f.Z.div(a||(a=(0,w.Z)(["\n  margin-top: 35px;\n"]))),k=f.Z.div(c||(c=(0,w.Z)(["\n  position: absolute;\n  top: 750px;\n  display: flex;\n  justify-content: center;\n  width: 60px;\n  height: auto;\n  border:solid 1px #41403E;\n  @media (max-width: 800px) {\n    top: 769px;\n  }\n\n&:hover {\n  box-shadow:2px 8px 4px -6px hsla(0, 0%, 0%, .3);      \n  border:solid 2px #41403E;\n  color: #41403E;  \n}\n"]))),C=(0,f.Z)(b.OL)(l||(l=(0,w.Z)(["\nwidth: 60px;\nheight: auto;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\ncolor: grey;\ntext-decoration: none;\n"]))),J=f.Z.h2(d||(d=(0,w.Z)(["\ncolor: grey;\n"]))),U=f.Z.p(h||(h=(0,w.Z)(["\ncolor: grey;\n"]))),A=f.Z.span(p||(p=(0,w.Z)(["\ncolor: grey;\n"]))),T=f.Z.ul(x||(x=(0,w.Z)(["\ndisplay: flex;\nflex-direction: row;     \njustify-content: space-between;\npadding-left: 10px;\nwidth: 200px;\n"]))),q=f.Z.li(g||(g=(0,w.Z)(["\nlist-style-type: none;\n"]))),Q=(0,f.Z)(b.OL)(m||(m=(0,w.Z)(["\ncolor: grey;\nfont-size: 2rem;\ntext-decoration: none;\n"]))),G=(0,f.Z)(b.OL)(u||(u=(0,w.Z)(["\ncolor: grey;\nfont-size: 2rem;\ntext-decoration: none;\n"])));var L=t(184);const Y=()=>{var n,e;const[t,i]=(0,y.useState)(null),{movieId:r}=(0,Z.UO)(),s=null!==(n=null===(e=(0,Z.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/home";return(0,y.useEffect)((()=>{(async()=>{try{const n=await(0,j.Ul)(r);i(n)}catch(n){v.Notify.failure("Something went wrong")}})()}),[r]),(0,L.jsxs)(L.Fragment,{children:[t&&(0,L.jsxs)(I,{children:[(0,L.jsx)(_,{children:(0,L.jsx)(z,{src:t.backdrop_path?"https://image.tmdb.org/t/p/w300/".concat(t.backdrop_path):"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX4KoBreOsyrgj5WCIzA3DrztQ6R3bXg-PyQ&usqp=CAU"})}),(0,L.jsxs)(N,{children:[(0,L.jsx)("img",{src:t.poster_path?"https://image.tmdb.org/t/p/w300/".concat(t.poster_path):"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX4KoBreOsyrgj5WCIzA3DrztQ6R3bXg-PyQ&usqp=CAU",alt:t.original_title}),(0,L.jsxs)("div",{children:[(0,L.jsx)(k,{children:(0,L.jsx)(C,{to:s,children:"Back"})}),(0,L.jsxs)(O,{children:[(0,L.jsx)(J,{children:t.original_title}),t.runtime&&(0,L.jsxs)(U,{children:[t.runtime," min"]}),(0,L.jsxs)("div",{children:[(0,L.jsx)(U,{children:t.release_date.slice(0,4)}),(0,L.jsxs)(A,{children:["User Score:",0===t.vote_average?"-":" "+t.vote_average.toFixed(1),"%\ud83c\udfc6"]})]}),(0,L.jsxs)(U,{children:["Overview: ",t.overview]})]})]})]}),(0,L.jsx)(N,{children:(0,L.jsxs)(T,{children:[(0,L.jsx)(q,{children:(0,L.jsx)(Q,{to:"cast",children:"Cast"})}),(0,L.jsx)(q,{children:(0,L.jsx)(G,{to:"reviews",children:"Reviews"})})]})})]},t.id),(0,L.jsx)(Z.j3,{})]})}}}]);
//# sourceMappingURL=257.988edc84.chunk.js.map