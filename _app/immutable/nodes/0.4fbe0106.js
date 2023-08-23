import{s as R,c as X,d as Y,u as tt,g as at,e as et}from"../chunks/scheduler.0ad5093a.js";import{S as F,i as G,g,s as b,m as T,r as W,h as c,j as M,c as k,n as D,f as y,u as J,x as N,k as p,a as K,y as i,v as Q,o as q,d as L,t as B,w as U}from"../chunks/index.d73717a3.js";import{H as ot}from"../chunks/heart.8d434ee1.js";const rt=!0,vt=Object.freeze(Object.defineProperty({__proto__:null,prerender:rt},Symbol.toStringTag,{value:"Module"}));function st(s){let a,e,r,n,o,t,l,_=s[0].name+"",A,H,m,$=s[0].artist+"",V,C,v,j,h,P=`<div class="w-full"><div class="flex items-center justify-center mx-auto mb-1"><button data-tooltip-target="tooltip-shuffle" type="button" class="p-2.5 group rounded-full hover:bg-gray-100 mr-1 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-600 dark:hover:bg-gray-600"><svg class="w-4 h-4 text-gray-500 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.484 6.166 13 4h6m0 0-3-3m3 3-3 3M1 14h5l1.577-2.253M1 4h5l7 10h6m0 0-3 3m3-3-3-3"></path></svg> <span class="sr-only">Shuffle video</span></button> <div id="tooltip-shuffle" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">Shuffle video
					<div class="tooltip-arrow" data-popper-arrow=""></div></div> <button data-tooltip-target="tooltip-previous" type="button" class="p-2.5 group rounded-full hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-600 dark:hover:bg-gray-600"><svg class="w-4 h-4 text-gray-500 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 12 16"><path d="M10.819.4a1.974 1.974 0 0 0-2.147.33l-6.5 5.773A2.014 2.014 0 0 0 2 6.7V1a1 1 0 0 0-2 0v14a1 1 0 1 0 2 0V9.3c.055.068.114.133.177.194l6.5 5.773a1.982 1.982 0 0 0 2.147.33A1.977 1.977 0 0 0 12 13.773V2.227A1.977 1.977 0 0 0 10.819.4Z"></path></svg> <span class="sr-only">Previous video</span></button> <div id="tooltip-previous" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">Previous video
					<div class="tooltip-arrow" data-popper-arrow=""></div></div> <button data-tooltip-target="tooltip-pause" type="button" class="inline-flex items-center justify-center p-2.5 mx-2 font-medium bg-green-600 rounded-full hover:bg-green-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-green-800"><svg class="w-3 h-3 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 10 16"><path fill-rule="evenodd" d="M0 .8C0 .358.32 0 .714 0h1.429c.394 0 .714.358.714.8v14.4c0 .442-.32.8-.714.8H.714a.678.678 0 0 1-.505-.234A.851.851 0 0 1 0 15.2V.8Zm7.143 0c0-.442.32-.8.714-.8h1.429c.19 0 .37.084.505.234.134.15.209.354.209.566v14.4c0 .442-.32.8-.714.8H7.857c-.394 0-.714-.358-.714-.8V.8Z" clip-rule="evenodd"></path></svg> <span class="sr-only">Pause video</span></button> <div id="tooltip-pause" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">Pause video
					<div class="tooltip-arrow" data-popper-arrow=""></div></div> <button data-tooltip-target="tooltip-next" type="button" class="p-2.5 group rounded-full hover:bg-gray-100 mr-1 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-600 dark:hover:bg-gray-600"><svg class="w-4 h-4 text-gray-500 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 12 16"><path d="M11 0a1 1 0 0 0-1 1v5.7a2.028 2.028 0 0 0-.177-.194L3.33.732A2 2 0 0 0 0 2.227v11.546A1.977 1.977 0 0 0 1.181 15.6a1.982 1.982 0 0 0 2.147-.33l6.5-5.773A1.88 1.88 0 0 0 10 9.3V15a1 1 0 1 0 2 0V1a1 1 0 0 0-1-1Z"></path></svg> <span class="sr-only">Next video</span></button> <div id="tooltip-next" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">Next video
					<div class="tooltip-arrow" data-popper-arrow=""></div></div> <button data-tooltip-target="tooltip-restart" type="button" class="p-2.5 group rounded-full hover:bg-gray-100 mr-1 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-600 dark:hover:bg-gray-600"><svg class="w-4 h-4 text-gray-500 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 1v5h-5M2 19v-5h5m10-4a8 8 0 0 1-14.947 3.97M1 10a8 8 0 0 1 14.947-3.97"></path></svg> <span class="sr-only">Restart video</span></button> <div id="tooltip-restart" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">Restart video
					<div class="tooltip-arrow" data-popper-arrow=""></div></div></div> <div class="flex items-center justify-between space-x-2"><span class="text-sm font-medium text-gray-500 dark:text-gray-400">3:45</span> <div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-800"><div class="bg-green-600 h-1.5 rounded-full" style="width: 65%"></div></div> <span class="text-sm font-medium text-gray-500 dark:text-gray-400">5:00</span></div></div>`,z,f,S=`<button data-tooltip-target="tooltip-playlist" type="button" class="p-2.5 group rounded-full hover:bg-gray-100 mr-1 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-600 dark:hover:bg-gray-600"><svg class="w-4 h-4 text-gray-500 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 16"><path d="M14.316.051A1 1 0 0 0 13 1v8.473A4.49 4.49 0 0 0 11 9c-2.206 0-4 1.525-4 3.4s1.794 3.4 4 3.4 4-1.526 4-3.4a2.945 2.945 0 0 0-.067-.566c.041-.107.064-.22.067-.334V2.763A2.974 2.974 0 0 1 16 5a1 1 0 0 0 2 0C18 1.322 14.467.1 14.316.051ZM10 3H1a1 1 0 0 1 0-2h9a1 1 0 1 1 0 2Z"></path><path d="M10 7H1a1 1 0 0 1 0-2h9a1 1 0 1 1 0 2Zm-5 4H1a1 1 0 0 1 0-2h4a1 1 0 1 1 0 2Z"></path></svg> <span class="sr-only">View playlist</span></button> <div id="tooltip-playlist" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">View playlist
			<div class="tooltip-arrow" data-popper-arrow=""></div></div> <button data-tooltip-target="tooltip-captions" type="button" class="p-2.5 group rounded-full hover:bg-gray-100 mr-1 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-600 dark:hover:bg-gray-600"><svg class="w-4 h-4 text-gray-500 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16"><path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM7.648 9.636c.25 0 .498-.064.717-.186a1 1 0 1 1 .979 1.745 3.475 3.475 0 1 1 .185-5.955 1 1 0 1 1-1.082 1.681 1.475 1.475 0 1 0-.799 2.715Zm6.186 0c.252 0 .5-.063.72-.187a1 1 0 1 1 .974 1.746 3.475 3.475 0 1 1 .188-5.955 1 1 0 0 1-1.084 1.681 1.475 1.475 0 1 0-.8 2.715h.002Z"></path></svg> <span class="sr-only">Captions</span></button> <div id="tooltip-captions" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">Toggle captions
			<div class="tooltip-arrow" data-popper-arrow=""></div></div> <button data-tooltip-target="tooltip-expand" type="button" class="p-2.5 group rounded-full hover:bg-gray-100 mr-1 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-600 dark:hover:bg-gray-600"><svg class="w-4 h-4 text-gray-500 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18"><path d="M18 .989a1.016 1.016 0 0 0-.056-.277c-.011-.034-.009-.073-.023-.1a.786.786 0 0 0-.066-.1.979.979 0 0 0-.156-.224l-.007-.01a.873.873 0 0 0-.116-.073.985.985 0 0 0-.2-.128.959.959 0 0 0-.231-.047A.925.925 0 0 0 17 0h-4a1 1 0 1 0 0 2h1.664l-3.388 3.552a1 1 0 0 0 1.448 1.381L16 3.5V5a1 1 0 0 0 2 0V.989ZM17 12a1 1 0 0 0-1 1v1.586l-3.293-3.293a1 1 0 0 0-1.414 1.414L14.586 16H13a1 1 0 0 0 0 2h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1ZM3.414 2H5a1 1 0 0 0 0-2H1a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V3.414l3.536 3.535A1 1 0 0 0 6.95 5.535L3.414 2Zm2.139 9.276L2 14.665V13a1 1 0 1 0-2 0v4c.006.046.015.09.027.135.006.08.022.16.048.235a.954.954 0 0 0 .128.2.95.95 0 0 0 .073.117l.01.007A.983.983 0 0 0 1 18h4a1 1 0 0 0 0-2H3.5l3.436-3.276a1 1 0 0 0-1.38-1.448h-.003Z"></path></svg> <span class="sr-only">Expand</span></button> <div id="tooltip-expand" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">Full screen
			<div class="tooltip-arrow" data-popper-arrow=""></div></div> <button data-tooltip-target="tooltip-volume" type="button" class="p-2.5 group rounded-full hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-600 dark:hover:bg-gray-600"><svg class="w-4 h-4 text-gray-500 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18"><path d="M10.836.357a1.978 1.978 0 0 0-2.138.3L3.63 5H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h1.63l5.07 4.344a1.985 1.985 0 0 0 2.142.299A1.98 1.98 0 0 0 12 15.826V2.174A1.98 1.98 0 0 0 10.836.357Zm2.728 4.695a1.001 1.001 0 0 0-.29 1.385 4.887 4.887 0 0 1 0 5.126 1 1 0 0 0 1.674 1.095A6.645 6.645 0 0 0 16 9a6.65 6.65 0 0 0-1.052-3.658 1 1 0 0 0-1.384-.29Zm4.441-2.904a1 1 0 0 0-1.664 1.11A10.429 10.429 0 0 1 18 9a10.465 10.465 0 0 1-1.614 5.675 1 1 0 1 0 1.674 1.095A12.325 12.325 0 0 0 20 9a12.457 12.457 0 0 0-1.995-6.852Z"></path></svg> <span class="sr-only">Adjust volume</span></button> <div id="tooltip-volume" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">Adjust volume
			<div class="tooltip-arrow" data-popper-arrow=""></div></div>`,w;return v=new ot({props:{size:20,strokeWidth:2}}),{c(){a=g("div"),e=g("div"),r=g("img"),o=b(),t=g("div"),l=g("span"),A=T(_),H=b(),m=g("span"),V=T($),C=b(),W(v.$$.fragment),j=b(),h=g("div"),h.innerHTML=P,z=b(),f=g("div"),f.innerHTML=S,this.h()},l(d){a=c(d,"DIV",{class:!0});var u=M(a);e=c(u,"DIV",{class:!0});var x=M(e);r=c(x,"IMG",{class:!0,src:!0,alt:!0}),o=k(x),t=c(x,"DIV",{class:!0});var Z=M(t);l=c(Z,"SPAN",{class:!0});var E=M(l);A=D(E,_),E.forEach(y),H=k(Z),m=c(Z,"SPAN",{class:!0});var I=M(m);V=D(I,$),I.forEach(y),Z.forEach(y),C=k(x),J(v.$$.fragment,x),x.forEach(y),j=k(u),h=c(u,"DIV",{class:!0,"data-svelte-h":!0}),N(h)!=="svelte-yullw8"&&(h.innerHTML=P),z=k(u),f=c(u,"DIV",{class:!0,"data-svelte-h":!0}),N(f)!=="svelte-ir8mdb"&&(f.innerHTML=S),u.forEach(y),this.h()},h(){p(r,"class","h-12 mr-3 rounded"),X(r.src,n="https://i.scdn.co/image/ab67616d00001e02e1f4c211ce1ef95454bbbcc4")||p(r,"src",n),p(r,"alt","Video preview"),p(l,"class","text-white"),p(m,"class","text-sm"),p(t,"class","flex flex-col pr-4"),p(e,"class","items-center justify-center hidden mr-auto text-gray-500 dark:text-gray-400 md:flex"),p(h,"class","flex items-center min-w-[50%]"),p(f,"class","items-center justify-center hidden ml-auto md:flex"),p(a,"class","fixed bottom-0 left-0 z-50 flex justify-around w-full h-24 px-4 bg-black")},m(d,u){K(d,a,u),i(a,e),i(e,r),i(e,o),i(e,t),i(t,l),i(l,A),i(t,H),i(t,m),i(m,V),i(e,C),Q(v,e,null),i(a,j),i(a,h),i(a,z),i(a,f),w=!0},p(d,[u]){(!w||u&1)&&_!==(_=d[0].name+"")&&q(A,_),(!w||u&1)&&$!==($=d[0].artist+"")&&q(V,$)},i(d){w||(L(v.$$.fragment,d),w=!0)},o(d){B(v.$$.fragment,d),w=!1},d(d){d&&y(a),U(v)}}}function it(s,a,e){let{song:r}=a;return s.$$set=n=>{"song"in n&&e(0,r=n.song)},[r]}class lt extends F{constructor(a){super(),G(this,a,it,st,R,{song:0})}}const nt=s=>({}),O=s=>({class:"bg-black"});function dt(s){let a,e,r;const n=s[1].default,o=Y(n,s,s[0],O);return e=new lt({props:{song:{name:"Caraluna",artist:"Bacilos",duration:"4:26"}}}),{c(){o&&o.c(),a=b(),W(e.$$.fragment)},l(t){o&&o.l(t),a=k(t),J(e.$$.fragment,t)},m(t,l){o&&o.m(t,l),K(t,a,l),Q(e,t,l),r=!0},p(t,[l]){o&&o.p&&(!r||l&1)&&tt(o,n,t,t[0],r?et(n,t[0],l,nt):at(t[0]),O)},i(t){r||(L(o,t),L(e.$$.fragment,t),r=!0)},o(t){B(o,t),B(e.$$.fragment,t),r=!1},d(t){t&&y(a),o&&o.d(t),U(e,t)}}}function ut(s,a,e){let{$$slots:r={},$$scope:n}=a;return s.$$set=o=>{"$$scope"in o&&e(0,n=o.$$scope)},[n,r]}class ht extends F{constructor(a){super(),G(this,a,ut,dt,R,{})}}export{ht as component,vt as universal};
