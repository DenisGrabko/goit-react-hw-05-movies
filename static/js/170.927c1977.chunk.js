"use strict";(self.webpackChunkreact_homework_templateee=self.webpackChunkreact_homework_templateee||[]).push([[170],{43:(e,n,t)=>{t.d(n,{Hg:()=>r,On:()=>l,Ul:()=>s,nl:()=>o,tx:()=>c});var i=t(294);i.Z.defaults.baseURL="https://api.themoviedb.org/3";const a={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NGJmYmIyNTA2NmM5ZTJhNjhkNzA0NmFkNTgxYjBlYyIsInN1YiI6IjY1NmI0YTY5MDg1OWI0MDEzOTUxMmZhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JHtQht9lLzVGn8qQlSLZwC1_-cT8AoKj26qDOrlg0qc"}},r=async()=>{const{data:e}=await i.Z.get("trending/movie/day?language=en-US",a);return e.results},s=async e=>{const{data:n}=await i.Z.get("/movie/".concat(e),a);return n},o=async e=>{const{data:n}=await i.Z.get("movie/".concat(e,"/credits"),a);return n.cast},c=async e=>{const{data:n}=await i.Z.get("movie/".concat(e,"/reviews"),a);return n.results},l=async e=>{const{data:n}=await i.Z.get("search/movie?query=".concat(e,"&include_adult=false&language=en-US&page=1"),a);return n}},170:(e,n,t)=>{t.r(n),t.d(n,{default:()=>O});var i,a,r,s,o,c,l,d,h,g=t(791),p=t(689),x=t(43),m=t(919),u=t(168),j=t(686),v=t(87);const y=j.Z.li(i||(i=(0,u.Z)(["\n  list-style-type: none;\n"]))),Z=j.Z.div(a||(a=(0,u.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 600px;\n  list-style-type: none;\n  &::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    /* background: "," center no-repeat;*/\n    background-size: cover; \n   \n    z-index: -1;\n  }\n"])),(e=>"url(".concat(e.backdrop,")"))),w=j.Z.img(r||(r=(0,u.Z)(["\n    width: 100%;\n    height: 100%; \n    filter: blur(7px);\n"]))),f=j.Z.section(s||(s=(0,u.Z)(["\n    display: flex;\n    /* align-items: center; */\n    max-width: 1400px;\n    margin-right: auto;\n    margin-left: auto;\n    gap: 10px;\n"]))),b=(0,j.Z)(v.OL)(o||(o=(0,u.Z)(["\n  color: grey;\n  text-decoration: none;\n"]))),I=j.Z.ul(c||(c=(0,u.Z)(["\n     display: flex;\n     flex-direction: row;     \n     justify-content: space-between;\n     padding-left: 10px;\n     width: 200px;\n"]))),k=j.Z.li(l||(l=(0,u.Z)(["\n    list-style-type: none;\n"]))),_=(0,j.Z)(v.OL)(d||(d=(0,u.Z)(["\n    color: grey;\n    font-size: 2rem;\n    text-decoration: none;\n"]))),N=(0,j.Z)(v.OL)(h||(h=(0,u.Z)(["\n    color: grey;\n    font-size: 2rem;\n    text-decoration: none;\n"])));var J=t(184);const O=()=>{var e,n;const[t,i]=(0,g.useState)(null),{movieId:a}=(0,p.UO)(),r=null!==(e=null===(n=(0,p.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/home";return(0,g.useEffect)((()=>{(async()=>{try{const e=await(0,x.Ul)(a);console.log("data: >>",e),i(e)}catch(e){m.Notify.failure("Something went wrong")}})()}),[a]),(0,J.jsxs)(J.Fragment,{children:[t&&(0,J.jsxs)(y,{children:[(0,J.jsx)(Z,{children:(0,J.jsx)(w,{src:"https://image.tmdb.org/t/p/w300/".concat(t.backdrop_path)})}),(0,J.jsxs)(f,{children:[(0,J.jsx)("img",{src:"https://image.tmdb.org/t/p/w300/".concat(t.poster_path),alt:t.original_title}),(0,J.jsx)("div",{children:(0,J.jsxs)("div",{children:[(0,J.jsx)(b,{to:r,children:"Back"}),(0,J.jsx)("h2",{children:t.original_title}),t.runtime&&(0,J.jsxs)("p",{children:[t.runtime," min"]}),(0,J.jsxs)("div",{children:[(0,J.jsx)("p",{children:t.release_date.slice(0,4)}),(0,J.jsxs)("span",{children:["User Score:",0===t.vote_average?"-":t.vote_average.toFixed(1),"%\ud83c\udfc6"]})]}),(0,J.jsxs)("p",{children:["Overview: ",t.overview]})]})})]}),(0,J.jsx)(f,{children:(0,J.jsxs)(I,{children:[(0,J.jsx)(k,{children:(0,J.jsx)(_,{to:"cast",children:"Cast"})}),(0,J.jsx)(k,{children:(0,J.jsx)(N,{to:"reviews",children:"Reviews"})})]})})]},t.id),(0,J.jsx)(p.j3,{})]})}}}]);
//# sourceMappingURL=170.927c1977.chunk.js.map