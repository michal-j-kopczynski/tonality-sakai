"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[6986],{8146:(h,c,l)=>{l.r(c),l.d(c,{FileDemo2Module:()=>I});var e=l(6814),u=l(95),p=l(3722),C=l(2549),n=l(5219),t=l(9467),s=l(9485);function o(i,f){if(1&i&&(t.TgZ(0,"li"),t._uU(1),t.qZA()),2&i){const d=f.$implicit;t.xp6(1),t.AsE(" ",d.name," - ",(d.size/1048576).toFixed(2)," MB ")}}function a(i,f){if(1&i&&(t.TgZ(0,"ul"),t.YNc(1,o,2,2,"li",6),t.qZA()),2&i){const d=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",d.uploadedFiles)}}function g(i,f){if(1&i&&t.YNc(0,a,2,1,"ul",5),2&i){const d=t.oxw();t.Q6J("ngIf",d.uploadedFiles.length)}}let _=(()=>{class i{constructor(d,r){this.uploadService=d,this.messageService=r,this.uploadedFiles=[],this.uploadSuccess=!1}uploadFile(d){const r=d.files;this.uploadService.uploadFile(r[0]).subscribe(m=>{console.log("File uploaded successfully:",m),this.uploadedFiles.push(r[0]),this.uploadSuccess=!0},m=>{console.error("Error uploading file:",m),this.uploadSuccess=!1})}onUpload(d){for(const r of d.files)this.uploadedFiles.push(r);this.messageService.add({severity:"info",summary:"Success",detail:"File Uploaded"})}onBasicUpload(){this.messageService.add({severity:"info",summary:"Success",detail:"File Uploaded with Basic Mode"})}static#e=this.\u0275fac=function(r){return new(r||i)(t.Y36(s.C),t.Y36(n.ez))};static#t=this.\u0275cmp=t.Xpm({type:i,selectors:[["ng-component"]],features:[t._Bn([n.ez])],decls:7,vars:2,consts:[[1,"grid"],[1,"col-12"],[1,"card"],["name","demo[]","accept","audio/*","customUpload","true",3,"multiple","maxFileSize","uploadHandler"],["pTemplate","content"],[4,"ngIf"],[4,"ngFor","ngForOf"]],template:function(r,m){1&r&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h5"),t._uU(4,"Advanced"),t.qZA(),t.TgZ(5,"p-fileUpload",3),t.NdJ("uploadHandler",function(M){return m.uploadFile(M)}),t.YNc(6,g,1,1,"ng-template",4),t.qZA()()()()),2&r&&(t.xp6(5),t.Q6J("multiple",!1)("maxFileSize",1e9))},dependencies:[e.sg,e.O5,p.p,n.jx],encapsulation:2})}return i})(),v=(()=>{class i{static#e=this.\u0275fac=function(r){return new(r||i)};static#t=this.\u0275mod=t.oAB({type:i});static#l=this.\u0275inj=t.cJS({imports:[C.Bz.forChild([{path:"",component:_}]),C.Bz]})}return i})(),I=(()=>{class i{static#e=this.\u0275fac=function(r){return new(r||i)};static#t=this.\u0275mod=t.oAB({type:i});static#l=this.\u0275inj=t.cJS({imports:[e.ez,u.u5,v,p.O]})}return i})()},2591:(h,c,l)=>{l.d(c,{n:()=>p});var e=l(9467),u=l(4713);let p=(()=>{class C extends u.s{static \u0275fac=(()=>{let t;return function(o){return(t||(t=e.n5z(C)))(o||C)}})();static \u0275cmp=e.Xpm({type:C,selectors:[["CheckIcon"]],standalone:!0,features:[e.qOj,e.jDz],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z","fill","currentColor"]],template:function(s,o){1&s&&(e.O4$(),e.TgZ(0,"svg",0),e._UZ(1,"path",1),e.qZA()),2&s&&(e.Tol(o.getClassNames()),e.uIk("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role))},encapsulation:2})}return C})()},2736:(h,c,l)=>{l.d(c,{L:()=>C});var e=l(9467),u=l(4713),p=l(2332);let C=(()=>{class n extends u.s{pathId;ngOnInit(){this.pathId="url(#"+(0,p.Th)()+")"}static \u0275fac=(()=>{let s;return function(a){return(s||(s=e.n5z(n)))(a||n)}})();static \u0275cmp=e.Xpm({type:n,selectors:[["ExclamationTriangleIcon"]],standalone:!0,features:[e.qOj,e.jDz],decls:8,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M13.4018 13.1893H0.598161C0.49329 13.189 0.390283 13.1615 0.299143 13.1097C0.208003 13.0578 0.131826 12.9832 0.0780112 12.8932C0.0268539 12.8015 0 12.6982 0 12.5931C0 12.4881 0.0268539 12.3848 0.0780112 12.293L6.47985 1.08982C6.53679 1.00399 6.61408 0.933574 6.70484 0.884867C6.7956 0.836159 6.897 0.810669 7 0.810669C7.103 0.810669 7.2044 0.836159 7.29516 0.884867C7.38592 0.933574 7.46321 1.00399 7.52015 1.08982L13.922 12.293C13.9731 12.3848 14 12.4881 14 12.5931C14 12.6982 13.9731 12.8015 13.922 12.8932C13.8682 12.9832 13.792 13.0578 13.7009 13.1097C13.6097 13.1615 13.5067 13.189 13.4018 13.1893ZM1.63046 11.989H12.3695L7 2.59425L1.63046 11.989Z","fill","currentColor"],["d","M6.99996 8.78801C6.84143 8.78594 6.68997 8.72204 6.57787 8.60993C6.46576 8.49782 6.40186 8.34637 6.39979 8.18784V5.38703C6.39979 5.22786 6.46302 5.0752 6.57557 4.96265C6.68813 4.85009 6.84078 4.78686 6.99996 4.78686C7.15914 4.78686 7.31179 4.85009 7.42435 4.96265C7.5369 5.0752 7.60013 5.22786 7.60013 5.38703V8.18784C7.59806 8.34637 7.53416 8.49782 7.42205 8.60993C7.30995 8.72204 7.15849 8.78594 6.99996 8.78801Z","fill","currentColor"],["d","M6.99996 11.1887C6.84143 11.1866 6.68997 11.1227 6.57787 11.0106C6.46576 10.8985 6.40186 10.7471 6.39979 10.5885V10.1884C6.39979 10.0292 6.46302 9.87658 6.57557 9.76403C6.68813 9.65147 6.84078 9.58824 6.99996 9.58824C7.15914 9.58824 7.31179 9.65147 7.42435 9.76403C7.5369 9.87658 7.60013 10.0292 7.60013 10.1884V10.5885C7.59806 10.7471 7.53416 10.8985 7.42205 11.0106C7.30995 11.1227 7.15849 11.1866 6.99996 11.1887Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(o,a){1&o&&(e.O4$(),e.TgZ(0,"svg",0)(1,"g"),e._UZ(2,"path",1)(3,"path",2)(4,"path",3),e.qZA(),e.TgZ(5,"defs")(6,"clipPath",4),e._UZ(7,"rect",5),e.qZA()()()),2&o&&(e.Tol(a.getClassNames()),e.uIk("aria-label",a.ariaLabel)("aria-hidden",a.ariaHidden)("role",a.role),e.xp6(1),e.uIk("clip-path",a.pathId),e.xp6(5),e.Q6J("id",a.pathId))},encapsulation:2})}return n})()},3823:(h,c,l)=>{l.d(c,{u:()=>C});var e=l(9467),u=l(4713),p=l(2332);let C=(()=>{class n extends u.s{pathId;ngOnInit(){this.pathId="url(#"+(0,p.Th)()+")"}static \u0275fac=(()=>{let s;return function(a){return(s||(s=e.n5z(n)))(a||n)}})();static \u0275cmp=e.Xpm({type:n,selectors:[["InfoCircleIcon"]],standalone:!0,features:[e.qOj,e.jDz],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M3.11101 12.8203C4.26215 13.5895 5.61553 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.61553 13.5895 4.26215 12.8203 3.11101C12.0511 1.95987 10.9579 1.06266 9.67879 0.532846C8.3997 0.00303296 6.99224 -0.13559 5.63437 0.134506C4.2765 0.404603 3.02922 1.07129 2.05026 2.05026C1.07129 3.02922 0.404603 4.2765 0.134506 5.63437C-0.13559 6.99224 0.00303296 8.3997 0.532846 9.67879C1.06266 10.9579 1.95987 12.0511 3.11101 12.8203ZM3.75918 2.14976C4.71846 1.50879 5.84628 1.16667 7 1.16667C8.5471 1.16667 10.0308 1.78125 11.1248 2.87521C12.2188 3.96918 12.8333 5.45291 12.8333 7C12.8333 8.15373 12.4912 9.28154 11.8502 10.2408C11.2093 11.2001 10.2982 11.9478 9.23232 12.3893C8.16642 12.8308 6.99353 12.9463 5.86198 12.7212C4.73042 12.4962 3.69102 11.9406 2.87521 11.1248C2.05941 10.309 1.50384 9.26958 1.27876 8.13803C1.05367 7.00647 1.16919 5.83358 1.61071 4.76768C2.05222 3.70178 2.79989 2.79074 3.75918 2.14976ZM7.00002 4.8611C6.84594 4.85908 6.69873 4.79698 6.58977 4.68801C6.48081 4.57905 6.4187 4.43185 6.41669 4.27776V3.88888C6.41669 3.73417 6.47815 3.58579 6.58754 3.4764C6.69694 3.367 6.84531 3.30554 7.00002 3.30554C7.15473 3.30554 7.3031 3.367 7.4125 3.4764C7.52189 3.58579 7.58335 3.73417 7.58335 3.88888V4.27776C7.58134 4.43185 7.51923 4.57905 7.41027 4.68801C7.30131 4.79698 7.1541 4.85908 7.00002 4.8611ZM7.00002 10.6945C6.84594 10.6925 6.69873 10.6304 6.58977 10.5214C6.48081 10.4124 6.4187 10.2652 6.41669 10.1111V6.22225C6.41669 6.06754 6.47815 5.91917 6.58754 5.80977C6.69694 5.70037 6.84531 5.63892 7.00002 5.63892C7.15473 5.63892 7.3031 5.70037 7.4125 5.80977C7.52189 5.91917 7.58335 6.06754 7.58335 6.22225V10.1111C7.58134 10.2652 7.51923 10.4124 7.41027 10.5214C7.30131 10.6304 7.1541 10.6925 7.00002 10.6945Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(o,a){1&o&&(e.O4$(),e.TgZ(0,"svg",0)(1,"g"),e._UZ(2,"path",1),e.qZA(),e.TgZ(3,"defs")(4,"clipPath",2),e._UZ(5,"rect",3),e.qZA()()()),2&o&&(e.Tol(a.getClassNames()),e.uIk("aria-label",a.ariaLabel)("aria-hidden",a.ariaHidden)("role",a.role),e.xp6(1),e.uIk("clip-path",a.pathId),e.xp6(3),e.Q6J("id",a.pathId))},encapsulation:2})}return n})()},8468:(h,c,l)=>{l.d(c,{x:()=>C});var e=l(9467),u=l(4713),p=l(2332);let C=(()=>{class n extends u.s{pathId;ngOnInit(){this.pathId="url(#"+(0,p.Th)()+")"}static \u0275fac=(()=>{let s;return function(a){return(s||(s=e.n5z(n)))(a||n)}})();static \u0275cmp=e.Xpm({type:n,selectors:[["TimesCircleIcon"]],standalone:!0,features:[e.qOj,e.jDz],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(o,a){1&o&&(e.O4$(),e.TgZ(0,"svg",0)(1,"g"),e._UZ(2,"path",1),e.qZA(),e.TgZ(3,"defs")(4,"clipPath",2),e._UZ(5,"rect",3),e.qZA()()()),2&o&&(e.Tol(a.getClassNames()),e.uIk("aria-label",a.ariaLabel)("aria-hidden",a.ariaHidden)("role",a.role),e.xp6(1),e.uIk("clip-path",a.pathId),e.xp6(3),e.Q6J("id",a.pathId))},encapsulation:2})}return n})()}}]);